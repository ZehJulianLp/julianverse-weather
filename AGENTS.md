# AGENTS.md

Guidelines for automated agents and contributors working in this repository.

## Project Context

- This is a small static weather web app for the Julianverse project.
- Keep the app lightweight. Do not introduce frameworks, build tools, package managers, or dependencies unless the task explicitly requires it.
- Prefer plain HTML, CSS, and JavaScript for now.
- Preserve accessibility, mobile usability, and fast loading as default quality bars.

## Branch Workflow

- Work on feature branches, not directly on `main`.
- Use descriptive branch names:
  - `feat/weather-forecast`
  - `fix/location-permission`
  - `docs/update-readme`
  - `chore/cleanup-html`
- Keep branches focused on one logical change.
- Before opening a PR or merging, make sure the branch is up to date with `main` and there are no unrelated edits.

## Commit Rules

- Use Conventional Commits:
  - `feat: add current weather display`
  - `fix: handle denied geolocation permission`
  - `docs: document Open-Meteo usage`
  - `style: improve weather card layout`
  - `refactor: extract weather rendering logic`
  - `test: add forecast parsing tests`
  - `chore: update project metadata`
- Use imperative, lowercase commit subjects where practical.
- Keep commits scoped and reviewable.
- Do not mix formatting-only changes with behavior changes unless the task is explicitly a cleanup.

## Code Standards

- Keep files simple and readable. Avoid clever abstractions for small UI behavior.
- Use semantic HTML elements where possible.
- Ensure interactive elements are keyboard accessible.
- Use responsive CSS from the start; test narrow and desktop widths.
- Handle weather API failure states, loading states, and empty data states explicitly.
- Never commit API keys or private configuration. Open-Meteo should not require secrets.
- Prefer comments only where they clarify non-obvious behavior.

## Working Tree Safety

- Check `git status --short` before editing.
- Do not overwrite, revert, or delete user changes unless explicitly asked.
- If unrelated files are modified, leave them alone.
- If a file you need to edit already has unexpected changes, inspect it first and preserve the user's work.

## Validation

- For static changes, open or serve `index.html` locally and verify the page renders.
- Validate browser console errors when behavior changes.
- Check the layout at mobile and desktop widths for UI changes.
- If JavaScript is added, prefer small pure functions that can be manually tested or later unit-tested.
- If tooling is introduced later, document the exact commands here and in `README.md`.

## Pull Request Expectations

- Explain what changed and why.
- Mention user-visible behavior changes.
- Include manual test steps.
- Link relevant issues when available.
- Keep PRs small enough to review in one pass.

## Documentation

- Update `README.md` when setup, usage, API behavior, or deployment assumptions change.
- Keep documentation factual and current.
- Document browser permissions such as geolocation if they become part of the app.
