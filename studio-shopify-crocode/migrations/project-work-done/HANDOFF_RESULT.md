# English Sanity handoff result

Completed at 2026-09-21T14:54:31.130Z.

All 27 English Projects in k8culv98 / production now have published workDone reference arrays. Polish membership sets were preserved using existing English category IDs. DrinkTMRW: development, integrations, marketing. Bannerprinting: migration only. SienaHome marketing and Kleanse/Laidback London integrations remain excluded.

| Category | Published Projects | Representative English service URL |
| --- | ---: | --- |
| Custom Shopify Development Services | 26 | /services/shopify-headless-e-commerce |
| Shopify Integrations | 10 | /services/shopify-crm-integrations |
| Shopify Marketing | 15 | /services/shopify-seo-services |
| Migration to Shopify | 5 | /services/shopware-to-shopify-migration |

These are service paths to append to the user's Preview or Production origin. Membership totals are category totals, not distinct-project totals.

## Migration verification

- Full inventory retrieved through raw perspective and cursor pagination; 27 published Projects, four published categories, 20 Services, no initial editorial drafts.
- Manifest and classification retain English IDs/revisions/original workDone, exact Polish project/category mappings and content evidence.
- All patches set ONLY workDone and guard the published revision. MCP confirmed atomic draft creation from those published revisions.
- All 27 migration drafts were compared with complete original snapshots. All user fields except workDone matched. Comparison excludes only API metadata _id, _rev, _updatedAt and _system; _createdAt was preserved.
- Published revisions and draft revisions were re-read before publication. Only verified drafts were published with their verified fresh revision guards.
- Final raw inventory: 27 published Projects; no migration drafts. Titles, slugs, languages, exact reference arrays, category existence and unique membership verified.
- No unresolved content mappings, revision conflicts or partial writes.
- Read throttling (HTTP 429) was resolved with sequential reads. An attempted 26-document patch was rejected before execution by the 25-document limit; fresh revisions were re-read and two 13-document batches succeeded.

## Studio

Existing Studio deployed successfully: https://shopify-crocode-studio.sanity.studio/
Existing appId w5d6f76jxa81kvdkuauqful9 belongs to k8culv98; verified before and after deployment. Only sanity.cli.ts was edited to set this appId. Projects schema already matched the Polish structured-reference model; Services/categories and unrelated schema fields were not edited.

Local build and sanity deploy --yes --schema-required both succeeded. Deployed one schema. MCP readback of schema ID _.schemas.default and direct HTTP inspection of the hosted manifest both confirm workDone is an array of serviceCategories references, required/minimum one/custom validation. Source includes unique() and language validation; the older CLI's serialized schema omits unique and function bodies, so serialized readback alone does not prove those validators.

Operational caveat: MCP's other Studio-deployed source uEiCypyyXGVowSu8XzHUFLOHkHlNweRpO0ZlKWkneBWBWeg still reports the old schema. Use explicit schemaId _.schemas.default for this deployment. This stale secondary source was left untouched; the actual hosted Studio and CLI-published schema were verified. Local sanity/@sanity/vision 4.10.2 differ from auto-update runtime 4.22.0; CLI reported a recommendation, not a build/deploy failure. No dependency changes were required.

## Artifacts

All paths relative to studio-shopify-crocode/migrations/project-work-done/:
- manifest.json — original values, classification evidence, Polish-to-English mappings; captured preflight status is historical.
- classification.md — complete Title | Slug | Work Done table.
- published-result.json — verified published revisions, memberships, totals and draft revision guards.
- studio-deployment-result.json — ownership, URL, build/deploy status, schema ID and actual MCP schema readback.
- original-snapshots-complete.json — all 27 complete original document snapshots.
- service-links.json — Services/category inventory.
- HANDOFF_RESULT.md — this handoff.

## Frontend release 2

Published data is ready for frontend release 2 testing. Frontend files and shared README were not edited by this session. No Git branch switches, commits, pushes, merges, Vercel deployments or GraphQL deployments were performed.

The user still needs to deploy release 2 to Preview and verify the service paths/counts above, card links, home, portfolio and project details; then deploy to master/Production and verify again. This task did not verify remote release 2 Preview or Production. Production static pages do not refresh from a local Studio build or data publication.

Frontend rollback must use compatible release 1, never the old string-only GraphQL implementation while arrays exist. Before any data rollback, re-read current published revisions and drafts; use original workDone from manifest.json and preserve other fields.

