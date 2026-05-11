---
name: apply-rules
description: >-
  Apply gaia-challenge-fullstack workspace rules from .cursor/rules/pattern.mdc:
  audit selected or focused code, refactor to match API/Web/TS/error-handling
  patterns, then run npm run type-check from the repo root. Use when the user
  asks to apply rules, align with project patterns, or refactor for consistency
  with .cursor/rules.
---

# Apply project rules

Follow the same workflow as the Cursor command `.cursor/commands/apply-rules.md`.

## Workflow

1. Read `.cursor/rules/pattern.mdc` and treat it as the source of truth for this repo (Brooklyn-inspired patterns adapted for Express + React workspaces—not Brooklyn-specific infrastructure).

2. **Audit** the files in scope against those sections: monorepo layout, API, web, coding style, TypeScript, error handling, testing, git (only where relevant to the change).

3. **Refactor** with minimal diffs; do not change behavior unless fixing a bug or rule violation.

4. **Verify**: run `npm run type-check` from the repository root (`gaia-challenge-fullstack`). Fix any new type errors.

## Notes

- There is no root `lint` script yet; if one is added, run it after type-check when applying rules end-to-end.
- Do not copy Brooklyn-only conventions (Sequelize/Knex, GraphQL subgraph layout, `lib/` paths) into this project unless that stack exists here.
