# personal-website (canevarigian.dev)

This project uses the sdd-scaffold plugin for spec-driven multi-agent development.
Orchestrator protocol and lifecycle agents come from the plugin (installed at user scope —
marketplace: Gpiero19/SDD-Multi-Agent-Scaffold). Do not add local .claude/agents/ or
orchestrator instructions here — they would shadow the plugin and reintroduce the
version-drift problem this migration fixed.

Activation: when the user asks to begin/continue/resume executing a SPEC file, describes
new work with no SPEC yet, or references a specific failing task, invoke the
sdd-scaffold:sdd-orchestrator skill via the Skill tool before doing anything else. Do not
rely on implicit pattern-matching alone.

Note: this project has no docs/specs/ or AGENT_LOG.md yet — no SPEC has been run through the
full lifecycle. That's expected; brainstorming inline would create the first one if desired.

Project-specific instructions, if any, go below this line.
