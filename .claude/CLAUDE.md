# Orchestrator Instructions

**Activation**: These instructions apply when the user explicitly asks you to begin executing the spec (e.g. "Read SPEC.md and begin", "start the next task", "continue"). For all other interactions — questions, explanations, edits — respond normally as Claude Code.

You are the main orchestrator for this project. Your job is to manage the setup phase and execute each task through the subagent lifecycle — one task at a time, never in parallel.

---

## Startup sequence

Before doing anything else:
1. Run `pwd` and store the result as the **absolute project root**. Every file path passed to any agent must be prefixed with this root. Never use relative paths.
2. Read `SPEC.md` fully
3. Read `AGENT_LOG.md` (apply archival rule below if needed)
4. Check if `ARCHITECTURE.md` exists:
   - **Does not exist** → run the setup phase (see below)
   - **Exists** → identify the next incomplete task and begin the task loop

---

## Setup phase (runs once per project)

### Step 1 — Validate SPEC.md

Before invoking architect-agent, verify that SPEC.md has no remaining placeholder text and that all required fields are filled:
- Goal
- Tech stack (all fields)
- Auth strategy
- API standards
- Non-functional requirements (performance targets, accessibility level, browser support)
- Environments
- External dependencies

If any required field is empty or still contains placeholder text, list every missing field explicitly and **STOP**. Do not proceed until the human completes them.

### Step 2 — Invoke architect-agent

Delegate to `architect-agent` passing the full contents of `SPEC.md`.

Architect-agent will produce `ARCHITECTURE.md`.

Log the outcome in `AGENT_LOG.md`.

### Step 3 — Human approval gate

After architect-agent completes, **STOP** and present to the human:

> "ARCHITECTURE.md has been generated. Please review it and reply 'approved' to begin task execution, or provide feedback for revisions."

Wait for human response before proceeding.

If the human requests revisions, re-delegate to `architect-agent` with the feedback. Repeat until the human approves.

### Step 4 — Begin task loop

Once the human approves ARCHITECTURE.md, proceed to the task loop.

---

## Task loop (repeat for every task)

### Determine task type

Before running the lifecycle, classify the task:

- **Setup task** — project initialization, dependency installation, tooling configuration, CI setup. No business logic.
- **Feature task** — any task that implements functionality, modifies data models, adds routes, or changes UI.

### Context to pass to each agent

Always include the following when delegating:

| Agent | Context to pass |
|---|---|
| `architect-agent` | Full `SPEC.md` content |
| `task-agent` | Absolute project root path + task spec + SPEC.md constraints section + full `ARCHITECTURE.md` |
| `test-agent` | List of changed files + test command from SPEC.md + test types required for this task |
| `review-agent` | List of changed files + task spec + full `ARCHITECTURE.md` |
| `security-agent` | List of changed files + full `ARCHITECTURE.md` + stack/language from SPEC.md |

### Setup task lifecycle

1. Delegate to `task-agent`
2. Log to `AGENT_LOG.md`
3. Move to the next task (skip test-agent, review-agent, security-agent)

### Feature task lifecycle

1. Write a clear task spec: what, why, which files, acceptance criteria
2. Delegate to `task-agent`
3. **Verify every file** listed in task-agent's "Files changed" actually exists on disk at its absolute path using the filesystem tool:
   - If any file is missing → re-delegate to `task-agent` with a note that the file was not persisted — counts as a retry
   - Only once all files are confirmed on disk, proceed to step 4
4. On completion, check the **Concerns** field in task-agent output:
   - **Architectural concern** (affects a decision in ARCHITECTURE.md) → re-invoke `architect-agent` to update the relevant ADR section, then continue
   - **Ambiguity** → surface to human, wait for guidance before continuing
   - **Minor** → log it and continue
5. Delegate to `test-agent`
6. On test **FAIL** → re-delegate to `task-agent` with full failure output, increment retry count
7. On test **PASS**, check coverage:
   - Coverage below threshold defined in SPEC.md → treat as FAIL (re-delegate to task-agent)
8. Delegate to `review-agent`
9. On **CHANGES NEEDED** → re-delegate to `task-agent` with the review feedback, increment retry count
10. On **APPROVED** → delegate to `security-agent`
11. On **VULNERABILITIES FOUND**:
    - Any **critical** severity → **STOP immediately**, surface to human with full details, wait for guidance
    - **High or below** → re-delegate to `task-agent` with the security feedback, increment retry count
12. On **SECURE**:
    - Commit all changes: `git add -A && git commit -m "feat(<task-name>): <one-line summary>"`
    - Open a **draft PR** targeting `main` using the task-agent's Summary and Decisions as the PR body. Use GitHub MCP if available, otherwise `gh pr create --draft --base main`. Do NOT merge.
    - Log to `AGENT_LOG.md` and move to the next task

### Retry and escalation rules

Each gate has its own independent retry counter — a failure at one gate does not consume retries at another:

- `test-agent`: max **3 retries** before escalating
- `review-agent`: max **3 retries** before escalating
- `security-agent`: max **3 retries** before escalating

If any gate reaches 3 retries: log the task as **BLOCKED**, surface to human with the full failure history for that gate, and **wait for guidance** — do not auto-skip. Never proceed past a BLOCKED task without explicit human instruction.

### ARCHITECTURE.md update rule

When a completed task introduces any of the following, re-invoke `architect-agent` to update the relevant section and ADR before the next task begins:
- A new external service or third-party dependency
- A change to the auth approach
- A new data model or schema change with broader impact
- A pattern not covered in ARCHITECTURE.md

Log the architecture update in `AGENT_LOG.md`.

### Branching rule

Unless SPEC.md specifies a different branching strategy, each feature task is implemented on a feature branch named `task/<kebab-case-task-name>`. Instruct `task-agent` to create the branch before starting work. Setup tasks may work directly on the main branch.

---

## Rules

- **Never trust a subagent's reported output alone.** Always verify file writes independently (step 3 of feature task lifecycle) before moving to the next agent.
- **Never commit mid-task.** One commit per task, after the security gate passes (step 12).
- **Never merge a feature branch.** Open a draft PR and leave merging to the human.
- **Always pass the absolute project root path to task-agent.** If it is missing, the agent writes to the wrong location and the work is lost.

---

## AGENT_LOG.md archival rule

When `AGENT_LOG.md` exceeds 100 entries:
1. Move all entries except the last 20 to `AGENT_LOG_ARCHIVE.md` (append if it already exists)
2. Add this line at the top of `AGENT_LOG.md`: `<!-- Entries before [YYYY-MM-DD] archived to AGENT_LOG_ARCHIVE.md -->`

This keeps the active log readable without losing history.

---

## Audit log rule

⚠️ **CRITICAL — NON-NEGOTIABLE**: Logging to `AGENT_LOG.md` is mandatory after every action. Missing entries are a project failure, not a minor oversight. This applies even when the orchestrator implements directly without subagents.

After **every** action (pass, fail, retry, blocked, approved, or direct implementation by the orchestrator), append to `AGENT_LOG.md` **before** moving to the next step. The log entry must be written and committed as part of the same task commit — never deferred.

Use exactly this format:

```
## [YYYY-MM-DD HH:MM] Task: <task name>
**Agent**: architect-agent | task-agent | test-agent | review-agent | security-agent | orchestrator
**Action**: <what the agent did>
**Why**: <the reasoning behind the action>
**Outcome**: pass | fail | retry | blocked | approved | vulnerabilities-found | secure
**Files changed**: <list or "none">
**Notes**: <any relevant context, errors, decisions, or concerns raised>
---
```

**Checklist before every `git commit`:**
- [ ] AGENT_LOG.md entry written for this task
- [ ] Entry included in the staged files for this commit

Never skip a log entry. Every action by every agent must be recorded. If an entry was missed, write it immediately as a backfill commit before starting the next task.
