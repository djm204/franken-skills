# Changelog

## [0.2.0](https://github.com/djm204/franken-skills/compare/skills-v0.1.0...skills-v0.2.0) (2026-02-19)


### Features

* **discovery:** define ISkillCli interface and test fixtures ([315eb41](https://github.com/djm204/franken-skills/commit/315eb41bd114835ffd25b0849f895edb4f3d8e55))
* **discovery:** implement AgentSkillsCli and DiscoveryService ([27d0eb0](https://github.com/djm204/franken-skills/commit/27d0eb012f4f1be75f43b48e520838cf9d2b270d))
* **registry:** implement SkillRegistry with precedence resolution ([5e7706e](https://github.com/djm204/franken-skills/commit/5e7706e52a6563871d5767cc744f65863d407b97))
* **registry:** ISkillRegistry interface, createRegistry factory, public index ([db987fb](https://github.com/djm204/franken-skills/commit/db987fbc0d57c2a9919aaccc60916d318271fd60))
* **registry:** scaffold hook in getSkill() + override flag in inventory log ([10567d4](https://github.com/djm204/franken-skills/commit/10567d43b4fc7a5f3ceca406941b0b3d0d5df425))
* **registry:** wire sync() end-to-end with true replacement semantics ([e124229](https://github.com/djm204/franken-skills/commit/e124229a9b95cafdca32739ebab28463081a7cd3))
* **scaffold:** implement SkillGenScaffold with conservative defaults ([7416389](https://github.com/djm204/franken-skills/commit/74163894622ea0e93cc1373e952067f84a42b439))
* **types:** define UnifiedSkillContract, SkillRegistryError, RawSkillEntry ([1eae046](https://github.com/djm204/franken-skills/commit/1eae0464130063e65a75eea90a7e2a4d7a0c1eb0))
* **validator:** implement validateSkillContract ([66c19f0](https://github.com/djm204/franken-skills/commit/66c19f0928883012300d2b41b8966eddd47a1c47))


### Bug Fixes

* **types:** resolve exactOptionalPropertyTypes violations ([2d29ae2](https://github.com/djm204/franken-skills/commit/2d29ae2a6c9911dfd98b22888280e4d54d59e346))


### Miscellaneous

* **release:** add release-please manifest and config ([203ba1b](https://github.com/djm204/franken-skills/commit/203ba1ba6ecf2e0e0fe44327e647956f26d697a5))
* **scaffold:** init TypeScript project with tsconfig, eslint, prettier ([feeb23c](https://github.com/djm204/franken-skills/commit/feeb23c0cb3771faf05a65be88122ff7e8bc5186))


### Documentation

* add CLAUDE.md for MOD-02 Skill Registry ([2efa05a](https://github.com/djm204/franken-skills/commit/2efa05a62ad05efd4031ece6287fda59aef09854))
* add implementation plan for MOD-02 Skill Registry ([4526922](https://github.com/djm204/franken-skills/commit/4526922a634988469e7dec1a6dc074b2a74e1da4))
* add MOD-02 project outline ([30cdaf4](https://github.com/djm204/franken-skills/commit/30cdaf401d9995c851918cd3315f4aae5304389d))
* add README ([524d6a2](https://github.com/djm204/franken-skills/commit/524d6a22eb5050e8321bea7f17a4a12ed13e667f))
* **adr:** ADR-0001 — TypeScript as implementation language ([18a5a65](https://github.com/djm204/franken-skills/commit/18a5a6503fb1dd6789462cb1ae3426b599b6b4f3))
* **adr:** ADR-0002 — UnifiedSkillContract v1 canonical schema ([4df94dd](https://github.com/djm204/franken-skills/commit/4df94ddbfa2c2dc07d9d7ae805e773741d06b005))
* **adr:** ADR-0003 — CLI subprocess over direct npm import for discovery ([d612ee7](https://github.com/djm204/franken-skills/commit/d612ee7cbb92176481825e2e98f64a8b21dad4fa))
* **adr:** ADR-0004 — local-first precedence with explicit override logging ([edee357](https://github.com/djm204/franken-skills/commit/edee35735e0c30f9fd026f4a13875e1d30bdae10))
* **adr:** ADR-0005 — in-memory Map registry for v1 ([c566110](https://github.com/djm204/franken-skills/commit/c56611042750f16259d9f017d2663d792ab16f81))
* **adr:** ADR-0006 — ISkillRegistry as the public API boundary ([f98184b](https://github.com/djm204/franken-skills/commit/f98184b2a799df70ba3ca431ea4185561d4d4c85))
* **adr:** ADR-0007 — Skill-Gen as developer prompt template, not auto-generation ([f320a56](https://github.com/djm204/franken-skills/commit/f320a564b297cdc1a60af796b71b18209d2a18cf))


### CI/CD

* add auto-merge workflow for release-please PRs ([3e9cd95](https://github.com/djm204/franken-skills/commit/3e9cd95a63f59ec1133b70fb853ccf85752f1888))
* add CI workflow — typecheck, lint, test, build on Node 18/20/22 ([24b3fd5](https://github.com/djm204/franken-skills/commit/24b3fd59a98e0084a62a54540895e714ef8b56cb))
* add release-please workflow with npm publish ([2b59e17](https://github.com/djm204/franken-skills/commit/2b59e1771858e1d8bf14f439eca404463d852360))


### Tests

* **discovery:** AgentSkillsCli and DiscoveryService test suites (red) ([003dc68](https://github.com/djm204/franken-skills/commit/003dc68d023e2380a839c8d8559012d40b30df8d))
* **local:** LocalSkillLoader test suite (red → green) ([1a9d69d](https://github.com/djm204/franken-skills/commit/1a9d69d6e7db15780acea6fdc47f2f52e6fa1446))
* **perf:** performance baseline for sync(), getSkill(), getAll() ([2f46a4b](https://github.com/djm204/franken-skills/commit/2f46a4b35a570e59088544d6d224bd9ab6910a44))
* **registry:** SkillRegistry storage, sync guard, and precedence tests (red) ([b536f1b](https://github.com/djm204/franken-skills/commit/b536f1bf7bfeeddc20a15644df7b4e8eb9ba8822))
* **validator:** define contract validation test suite (red) ([81fbd0f](https://github.com/djm204/franken-skills/commit/81fbd0fb1a1ea7961ccb53aacbc4c7961beb2fec))
