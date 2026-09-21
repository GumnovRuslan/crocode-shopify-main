# English Project Work Done rollout

## Release 1: compatibility (current source)

- All Project reads use GROQ with the published perspective; legacy strings and category arrays are supported.
- ServiceDetailPage intentionally keeps projects.slice(0, 4). The category query is prepared and tested but not used by the service route.
- The local Projects schema is prepared. Do not deploy Studio or create migration drafts before Release 1 is verified in Production.
- No runtime JSON overlay, preview switch, content migration, Git push or deployment is included.

## User deployment gate

1. Run npm run test:projects and npm run build in crocode-shopify; build the Studio separately.
2. Deploy this release to a Preview branch, inspect /services/<service-slug> (4 cards), home, /our-work, project details and /sitemap.xml.
3. Merge to master yourself, wait for Vercel Ready and verify the same Production pages.
4. Only after confirmation continue with migration. Preview and Production share Sanity data; branches do not isolate drafts.

## Sanity migration (pending MCP access and the deployment gate)

- Target from local CLI: k8culv98 / production. Confirm through MCP before writing.
- Existing hosted Studio: https://shopify-crocode-studio.sanity.studio/ ; appId w5d6f76jxa81kvdkuauqful9. Confirm ownership before configuring/deploying.
- MCP in this Codex session reports Unauthorized organization access; the user confirmed read access from a separate Codex session. No English document inventory or migration manifest has been fabricated.
- Read only Projects, Services and Service Categories. Match projects by slug and content to the Polish published migration; match category meaning to existing English categories.
- Store English IDs/revisions/original workDone and proposed references. Do not copy Polish IDs or assume 27 documents without verification.
- Preserve Polish memberships for every matched project. Flag unmatched/ambiguous pairs before writing.
- Re-read revisions immediately before single-field workDone patches with revision guards. Do not overwrite or publish pre-existing editor drafts.
- Inspect migration drafts, publish with current draft revision guards, verify memberships and remaining drafts; retain original values for rollback.
- Deploy the local structured schema to the existing Studio only after migration; verify deployed schema through MCP. No GraphQL deployment is needed.

## Release 2 (after migration)

1. In src/app/services/[slug]/page.tsx use getProjectsByServiceCategory() with {lang: locale, categoryId: service.category?._id ?? null}.
2. In ServiceDetailPage pass projects directly, removing slice(0, 4). Keep home and general portfolio unfiltered.
3. Test multi-category membership, all matches beyond four, renamed categories, empty results and language isolation.
4. User deploys Preview, verifies counts/links/slider and then deploys master. Vercel rebuild refreshes static pages.
5. Check parity with Poland: 26 development / 10 integrations / 15 marketing / 5 migration ONLY if the inventory matches.

Rollback frontend to Release 1, never to the original string-only GraphQL release while arrays exist. Re-read revisions before any data rollback.

## Verification performed (2026-09-21)

- All 6 project query/formatting tests passed.
- Next.js production build and local Studio build passed. Existing Sass/THREE deprecation warnings remain; Studio warns that local 4.10.2 differs from auto-update runtime 4.22.0 and that appId is not configured yet. Resolve Studio deployment configuration after confirming MCP ownership, before hosted deployment.
- Local frontend environment confirmed k8culv98 / production (no credentials logged).
- Browser checks on localhost:3100/services/shopify-crm-integrations and /services/shopware-to-shopify-migration: 4 cards each, slider moves, no JavaScript exceptions.
- Home, /our-work, /our-work/simply-nootropics and /sitemap.xml returned HTTP 200 locally.
- Remote Preview and Production release checks are pending user deployment. No Sanity content was written and hosted Studio was not deployed.
