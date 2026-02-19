import { SkillRegistry } from "./skill-registry.js";
import { AgentSkillsCli } from "../discovery/agent-skills-cli.js";
import { DiscoveryService } from "../discovery/discovery-service.js";
import { LocalSkillLoader } from "../local-loader/local-skill-loader.js";
import type { ISkillRegistry } from "./i-skill-registry.js";

export interface RegistryConfig {
  /** Absolute path to the project-local skills directory. Defaults to process.cwd()/skills */
  localSkillsDir?: string;
  /** Timeout in ms for the @djm204/agent-skills CLI subprocess */
  cliTimeoutMs?: number;
}

class ManagedSkillRegistry extends SkillRegistry implements ISkillRegistry {
  private readonly discovery: DiscoveryService;
  private readonly localLoader: LocalSkillLoader;
  private readonly localSkillsDir: string;

  constructor(discovery: DiscoveryService, localLoader: LocalSkillLoader, localSkillsDir: string) {
    super();
    this.discovery = discovery;
    this.localLoader = localLoader;
    this.localSkillsDir = localSkillsDir;
  }

  async sync(): Promise<void> {
    const [globals, locals] = await Promise.all([
      this.discovery.discover(),
      this.localLoader.load(this.localSkillsDir),
    ]);

    const resolved = SkillRegistry.resolveSkills(globals, locals);

    for (const contract of resolved.values()) {
      // Use internal register — bypass the pre-sync guard
      super.register(contract);
    }

    this["markSynced"]();

    // Log resolved inventory at debug level
    for (const contract of resolved.values()) {
      console.debug("[SkillRegistry] Registered skill", {
        skill_id: contract.skill_id,
        source: contract.metadata.source,
        is_destructive: contract.constraints.is_destructive,
        requires_hitl: contract.constraints.requires_hitl,
        sandbox_type: contract.constraints.sandbox_type,
      });
    }
  }
}

export function createRegistry(config: RegistryConfig = {}): ISkillRegistry {
  const localSkillsDir = config.localSkillsDir ?? `${process.cwd()}/skills`;
  const cli = new AgentSkillsCli(config.cliTimeoutMs);
  const discovery = new DiscoveryService(cli);
  const localLoader = new LocalSkillLoader();
  return new ManagedSkillRegistry(discovery, localLoader, localSkillsDir);
}
