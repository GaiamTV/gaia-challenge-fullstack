# Apply project rules and refactor

Apply the workspace rules (`.cursor/rules/`, especially `pattern.mdc`) to the code in context. Refactor so it matches those rules.

**Steps:**

1. **Audit** – Review the selected file(s) or current context against `pattern.mdc`:
   - **Monorepo**: Correct app (`apps/api` vs `apps/web`), workspace scripts, thin entrypoints
   - **API**: Express layout, handler shape, guard clauses, no sensitive logging
   - **Web**: React function components, MUI/theming consistency, loading/error/empty patterns when fetching
   - **Coding style**: Functional collection helpers, `some`/`every` vs long boolean chains, top-of-file imports, `import type`
   - **TypeScript**: Inference vs explicit types, no `any`, literal unions, options objects for multi-arg helpers (except framework handlers)
   - **Errors**: No swallowed failures; early returns
   - **Testing**: Co-location and naming when tests exist

2. **Refactor** – Update the code to comply. Prefer minimal, targeted edits. Preserve behavior.

3. **Verify** – From the repo root, run `npm run type-check`. If the repo adds `lint` scripts later, run those too and fix any new issues.

If no specific code was selected, apply this to the currently open or focused file(s).
