# New project checklist

Complete every item before telling the orchestrator to begin.
Do not skip items. Do not move to the next section until the current one is done.

---

## 1. Git

- [ ] `git init` run in project root
- [ ] `git branch -M main` run to set main branch
- [ ] Scaffold files copied into project (no `ARCHITECTURE.md` present — if it exists, delete it)
- [ ] `PROTOCOL.md` present in project root (your step-by-step guide)

---

## 2. Environment files

- [ ] `.env` created (real values, never committed)
- [ ] `.env.example` created (keys only, no values — this gets committed)
- [ ] `.gitignore` in place and includes `.env`

---

## 3. MCP configuration

- [ ] `.claude/settings.json` updated with `mcpServers` for this project
- [ ] GitHub MCP token verified: run `echo $GITHUB_TOKEN` in terminal — must print a value
- [ ] DB MCP token verified (if using Supabase or Postgres): run `echo $SUPABASE_ACCESS_TOKEN` or `echo $DATABASE_URL`
- [ ] Playwright installed (if using Playwright MCP): `npx playwright install`
- [ ] MCP tools section in `SPEC.md` updated to reflect what is configured

---

## 4. SPEC.md — required fields

Read each item. If the answer is vague, fix it before checking the box.

- [ ] **Goal** — written in one clear paragraph, no "etc."
- [ ] **Tech stack** — every field filled, including test command, lint command, typecheck command
- [ ] **Non-functional requirements** — real numbers (e.g. "LCP under 2.5s", "bundle under 200kb"), not vague goals
- [ ] **Auth strategy** — explicit decision made (JWT / sessions / OAuth / third-party / none)
- [ ] **API standards** — style chosen (REST / GraphQL / tRPC / none), versioning defined
- [ ] **Infrastructure** — environments listed, hosting defined, error tracking tool chosen
- [ ] **External dependencies** — every third-party service listed in the table
- [ ] **Data privacy / GDPR** — completed if collecting any user data
- [ ] **Test coverage threshold** — minimum percentage set, test types checked
- [ ] **Branching strategy** — confirmed or left as default (task/<task-name>)
- [ ] **Feature flags** — yes or no explicitly stated
- [ ] **i18n** — yes or no explicitly stated
- [ ] **Definition of Done** — criteria reviewed and adjusted for this project

---

## 5. SPEC.md — task list

- [ ] Every task has a clear **What**, **Why**, **Files**, and **Acceptance criteria**
- [ ] Every task labeled as `[setup]` or `[feature]`
- [ ] Tasks ordered so that no task depends on a task that comes after it
- [ ] Acceptance criteria are testable — if you cannot write a test for it, rewrite the criterion
- [ ] Human checkpoints added at tasks where you want to review before proceeding

---

## 6. Initial commit

- [ ] `git add .`
- [ ] `git commit -m "chore: initialize project scaffold"`

---

## Ready

All boxes checked? Open Claude Code and say:

> "Read SPEC.md and begin"

The orchestrator will validate SPEC.md, run architect-agent, and pause for your review of `ARCHITECTURE.md` before any code is written.

---

## Architecture review (after orchestrator produces ARCHITECTURE.md)

Do not approve without reading every section.

- [ ] **API contract** — error format correct, endpoints match your expectations, versioning right
- [ ] **Data architecture** — schema matches your mental model, relationships correct, migration strategy clear
- [ ] **Auth approach** — matches what you specified, token storage matches your infrastructure
- [ ] **External dependencies** — every service listed, fallbacks realistic
- [ ] **Async jobs** — all slow operations (email, file processing, etc.) listed
- [ ] **Performance baseline** — numbers pulled from your SPEC.md correctly
- [ ] **ADRs** — every "assumed because SPEC.md did not specify" entry reviewed and either accepted or corrected

Only reply "approved" when you would be comfortable building the entire project on this document.
