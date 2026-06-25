# Agent decision log

This file is the authoritative record of every action taken by every agent in this project.
The orchestrator appends an entry after every subagent completes. Never edit entries manually.

**Archival rule**: When this file exceeds 100 entries, the orchestrator moves all entries
except the last 20 to `AGENT_LOG_ARCHIVE.md` and adds an archive notice at the top of this file.

---

## Entry format

```
## [YYYY-MM-DD HH:MM] Task: <task name>
**Agent**: architect-agent | task-agent | test-agent | review-agent | security-agent
**Action**: what the agent did
**Why**: the reasoning behind the action
**Outcome**: pass | fail | retry | blocked | approved | vulnerabilities-found | secure
**Files changed**: list or "none"
**Notes**: any relevant context, errors, decisions, or concerns raised
---
```

<!-- Entries begin below this line -->
