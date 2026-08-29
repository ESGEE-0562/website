# Eltee Sydney Broadcast Migration

Local, Git-backed implementation project for the Shopify migration from the live Sense theme to the unpublished Broadcast theme.

## Current release state

**NOT READY TO PUBLISH**

- Live theme: Sense, theme ID `152278204553`
- Sense backup: theme ID `153521913993`
- Target draft: Broadcast, theme ID `155379237001`
- Production changes authorised: none
- Working control: [Eltee Broadcast Migration Control](https://docs.google.com/spreadsheets/d/1kz0EtMiwa9SdCY-iSR4RU9b-Kib908S3t6W01tAaHO8/edit)
- Designated Drive repository: [NEW WEBSITE](https://drive.google.com/drive/folders/1ppmLd3chjVCqPOm29YaeCeS0dVJLhUri)

## Source-of-truth model

1. Approved narrow overrides in [`docs/source-precedence.md`](docs/source-precedence.md)
2. Revised migration plan in the designated `NEW WEBSITE` Google Drive repository
3. Unaffected provisions of [`project-sources/05-master_blueprint.txt`](project-sources/05-master_blueprint.txt)
4. Current read-only Shopify and analytics evidence

The supplied blueprint is preserved unchanged as historical source material. It still refers to Symmetry and older homepage content. Those provisions are not implementation instructions where they conflict with the approved overrides.

## Where work lives

| Area | Purpose |
| --- | --- |
| `project-sources/` | Immutable source pack supplied for the project |
| `theme/broadcast/` | Read-only Broadcast inventory and future theme working tree |
| `theme/sense-baseline/` | Future live-theme baseline export before cutover |
| `audits/` | URL, SEO, schema, app and analytics evidence |
| `evidence/` | Screenshots and control-workbook snapshots |
| `implementation/` | Approved draft-theme change records |
| `registers/` | Links and local register conventions |
| `release/` | Launch gate and rollback procedure |
| `scripts/` | Reproducible audit and register tooling |

## Safe next work

1. Export complete Sense and Broadcast theme files into their respective theme folders.
2. Refresh the local control workbook from the live Google Sheet when a versioned checkpoint is needed.
3. Complete read-only URL, template, app and schema verification.
4. Implement only approved changes in the unpublished Broadcast theme.
5. Do not publish until every release-blocking item is PASS and explicit approval is recorded.

## Security

Do not commit API keys, access tokens, `.env` files, customer/order exports, checkout data or production credentials. Large video assets remain in Drive and are referenced by filename.
