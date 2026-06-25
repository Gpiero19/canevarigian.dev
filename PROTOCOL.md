# Project Protocol

Your step-by-step guide for every new project using this scaffold.
Follow in order. Do not skip steps.

---

## Phase 0 — One-time global setup
> Do this once when you first set up the scaffold. Never again unless you change machines or rotate tokens.

- [ ] Run `bash ~/Documents/GitHub/Scaffolding/setup.sh` — must show all green
- [ ] `GITHUB_TOKEN` set in `~/.zshrc` and verified with `echo $GITHUB_TOKEN`
- [ ] Playwright browsers installed (setup.sh handles this)

If all green, you never touch Phase 0 again until your token expires in 90 days.

---

## Phase 1 — Create the project

```bash
mkdir my-project-name
cd my-project-name
git init
git branch -M main
```

Copy the scaffold into the project:

```bash
cp -r ~/Documents/GitHub/Scaffolding/.claude .
cp ~/Documents/GitHub/Scaffolding/.gitignore .
cp ~/Documents/GitHub/Scaffolding/SPEC.md .
cp ~/Documents/GitHub/Scaffolding/AGENT_LOG.md .
cp ~/Documents/GitHub/Scaffolding/CHECKLIST.md .
cp ~/Documents/GitHub/Scaffolding/PROTOCOL.md .
cp ~/Documents/GitHub/Scaffolding/README.md .
cp ~/Documents/GitHub/Scaffolding/setup.sh .
```

**Do not copy ARCHITECTURE.md** — it must not exist at the start. Architect-agent creates it.

Open the project in VSCode:

```bash
code .
```

---

## Phase 2 — Configure MCP for this project

Open `.claude/settings.json` and add the `mcpServers` block for this project.

Every project needs at minimum:

```json
{
  "permissions": { ... },
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_TOKEN": "${GITHUB_TOKEN}" }
    },
    "playwright": {
      "command": "npx",
      "args": ["-y", "@playwright/mcp@latest"]
    }
  }
}
```

If the project uses a database, add Supabase or Postgres MCP too.
See `README.md → MCP Setup` for copy-paste configs.

---

## Phase 3 — Iterate requirements and fill SPEC.md

Open Claude Code in the project folder:

```bash
claude
```

Set mode to **Auto** — leave it on Auto for the entire project.

Now work through SPEC.md conversationally. Do not fill it alone.
Tell Claude something like:

> "I'm starting a new project. Let's fill in SPEC.md together.
> Here's what I'm building: [describe your project]"

Share your ideas, answer Claude's questions, make decisions together.
Claude will write directly into SPEC.md as you talk.

Go through every section in order:

1. Goal
2. Tech stack
3. Non-functional requirements — use real numbers, not vague goals
4. Auth strategy — commit to a decision before moving on
5. API standards — REST / GraphQL / tRPC, pick one
6. Infrastructure and environments
7. External dependencies — be exhaustive
8. Data privacy / GDPR
9. Test coverage threshold
10. MCP tools — confirm what's configured in settings.json
11. Task list — one task at a time, labeled [setup] or [feature], ordered by dependency

**The task list is the most important part.** Each task must have:
- Clear acceptance criteria you could write a test for
- A realistic scope (one session, no human guidance needed mid-task)
- The right label ([setup] skips test/review/security gates)
- No dependency on a task that comes after it

---

## Phase 4 — Pre-flight check

Before triggering the orchestrator, open `CHECKLIST.md` and check every box.

Do not skip the checklist. It exists to catch the mistakes that cost days.

When every box is checked, make your initial commit:

```bash
git add .
git commit -m "chore: initialize project scaffold"
```

---

## Phase 5 — Run the orchestrator

In Claude Code (still in Auto mode), tell it:

> "Read SPEC.md and begin"

The orchestrator will:
1. Validate SPEC.md — stops and lists missing fields if anything is incomplete
2. Run architect-agent — reads your SPEC.md and produces ARCHITECTURE.md
3. **Stop and wait for your approval**

---

## Phase 6 — Review and approve ARCHITECTURE.md

This is the most important human step. Read every section before approving.

Go through this checklist:

- [ ] **API contract** — error format correct, endpoints match expectations, versioning right
- [ ] **Data architecture** — schema matches your mental model, relationships correct
- [ ] **Auth approach** — matches your decision in SPEC.md, token storage is correct
- [ ] **External dependencies** — every service listed, fallbacks realistic
- [ ] **Async jobs** — all slow operations listed (emails, file processing, etc.)
- [ ] **Performance baseline** — numbers pulled correctly from SPEC.md
- [ ] **ADRs** — every "assumed because SPEC.md did not specify" reviewed and accepted or corrected
- [ ] **Caching strategy** — makes sense for the project
- [ ] **Rollback strategy** — clear and realistic

If anything is wrong, give specific feedback:
> "The auth strategy should use Redis sessions, not JWT. Update ADR-004 and Section 4."

Architect-agent reruns and you review again.

Only reply **"approved"** when you would build the entire project on this document.

---

## Phase 7 — Task execution

Once you approve, the orchestrator runs the task loop automatically.

**Your role during execution:** monitor and respond to pauses.

The orchestrator will stop and wait for you when:

| Event | What to do |
|---|---|
| Task **BLOCKED** (3 retries at one gate) | Read the full failure history. Provide guidance or confirm to skip. Don't skip without understanding why. |
| Security-agent finds **critical** vulnerability | Read the finding carefully. Never dismiss without understanding it. |
| Task-agent raises an **architectural concern** | Read it. If it affects ARCHITECTURE.md, the orchestrator will re-run architect-agent. |
| Your **human checkpoint** in SPEC.md is reached | Review progress before continuing. |

**What not to do during execution:**
- Do not manually edit files agents are working on
- Do not change SPEC.md without telling the orchestrator
- Do not approve a BLOCKED task just to keep moving

---

## Phase 8 — Done

When all tasks complete:

- [ ] Run smoke test on staging
- [ ] Verify AGENT_LOG.md has entries for every task
- [ ] Review ARCHITECTURE.md — update if the project evolved during execution
- [ ] Merge to main branch
- [ ] Deploy to production

---

## Quick reference — commands

```bash
# Phase 0 check (anytime)
bash ~/Documents/GitHub/Scaffolding/setup.sh

# Start a new project
mkdir my-project && cd my-project && git init && git branch -M main

# Open Claude Code
claude

# Trigger orchestrator (after SPEC.md is complete and checklist done)
"Read SPEC.md and begin"

# Approve architecture
"approved"

# Resume after reviewing a BLOCKED task
"[your guidance here], continue"
```

---

## Token renewal reminder

Your `GITHUB_TOKEN` expires in 90 days. When it does:
1. Generate a new token at github.com/settings/tokens (same settings as before)
2. Update `~/.zshrc` — replace the old token value
3. Run `source ~/.zshrc`
4. Run `bash setup.sh` to confirm all green
