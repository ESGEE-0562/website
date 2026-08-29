# Project operating rules

Read `README.md`, `docs/source-precedence.md` and `project-sources/05-master_blueprint.txt` before implementation work.

## Boundaries

- Prefer native Broadcast controls.
- Custom Liquid requires a proven native limitation, minimal scope, rollback path and explicit approval.
- Treat URL preservation, one-H1 rendering, canonical integrity, internal links, metadata continuity and schema parity as release gates.
- Work in the unpublished Broadcast theme unless the user explicitly authorises a production action.
- Record evidence as PASS, FAIL, BLOCKED or UNVERIFIED. Never convert an assumption into a PASS.

## Hard approval gates

Do not publish Broadcast, alter live Sense, change DNS or live redirects, remove or materially reconfigure apps, delete templates/assets, replace production tracking, affect checkout/customer data, deploy Barb, enable paid Render services or add production custom Liquid without explicit approval.

## Source precedence

Use `docs/source-precedence.md`. Stop and record any new conflict instead of silently resolving it.

