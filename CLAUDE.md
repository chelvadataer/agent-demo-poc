# health-service

A tiny Node service used to test agent-driven development.

## Commands
- Run the tests: `npm test`
- Node 22.18 or later runs TypeScript directly; there is no build step.

## Structure
- `src/app.ts`: the HTTP app (`createApp(options)`).
- `test/*.test.ts`: tests using `node:test`. Every change needs tests.

## Style
- Plain TypeScript, no dependencies, small functions, no comments that only repeat the code.

## Git
- One branch per ticket, named `<TICKET-KEY>-short-title`, for example `AGS-7-health-endpoint`.
- Start commit messages with the ticket key.
- Keep a change small (about 100 lines or fewer, plus tests).

## Boundaries
- Always: run `npm test` before you commit.
- Ask first (use the blocked tool in Jira): adding a dependency, changing `package.json`, touching anything outside this folder.
- Never: read or print files outside this folder, put secrets in code or comments, change `CLAUDE.md`.
