# English Sanity migration and hosted Studio deployment

Implement this task in D:\work\crocode-shopify-main. The user explicitly authorizes English Sanity content updates and deployment of the existing English Studio. Release 1 has already been deployed to master and Production verified by the user. Do not ask for that confirmation again.

Another Codex session is preparing frontend release 2. DO NOT edit crocode-shopify frontend files, switch branches, commit, push, merge or deploy Vercel. Do not modify the Polish repo or Polish Sanity.

## Targets and sources
- English Studio directory: D:\work\crocode-shopify-main\studio-shopify-crocode
- English Sanity project: k8culv98; dataset: production
- Existing hosted Studio: https://shopify-crocode-studio.sanity.studio/
- Existing appId: w5d6f76jxa81kvdkuauqful9 (verify ownership before deployment).
- Polish migration evidence (read only):
  D:\work\crocode-shopify-main-pl\studio-shopify-crocode-pl\migrations\project-work-done\manifest.json
  D:\work\crocode-shopify-main-pl\studio-shopify-crocode-pl\migrations\project-work-done\published-result.json
  D:\work\crocode-shopify-main-pl\studio-shopify-crocode-pl\migrations\project-work-done\README.md
- English local Projects schema already prepared:
  studio-shopify-crocode/src/schemaTypes/documents/templates/projects.ts
  Work Done is an array of references to serviceCategories with required/min(1)/unique and language validation.
- Release 1 reads published Projects through GROQ and supports string and array Work Done. Production still displays four projects until the user deploys release 2.
- You may edit only Studio schema/config/dependencies if needed for deployment and files under Studio migrations/project-work-done. Preserve unrelated user edits.

## 1. Read-only preflight using Sanity MCP
Confirm access to the explicit English project/dataset and Studio identity. Follow applicable repo instructions and Sanity MCP schema/GROQ rules. Inspect only Projects, Services and Service Categories; never browse other document types. Do not fall back to a different dataset or the Polish project if access fails.
Read deployed schemas for those types if available; no schema deployment is required solely to read known document fields.
Retrieve all English Projects (paginate, do not silently truncate), existing English Service Categories, and Service category links. Include draft detection via raw perspective.
For classification use Title, brief.description (Description), solution (Solution), current workDone, plus slug/IDs/language/revisions for matching and migration.
Match English projects to the Polish manifest by slug and substantive content; match existing English categories by meaning. Preserve the exact Polish membership set per matched project using ENGLISH category IDs, never copied Polish refs. Do not infer categories from isolated words.
Use published-result.json to corroborate the final Polish memberships; manifest retains titles/slugs/category names and original values.
Polish reference counts: 27 projects; development 26, integrations 10, marketing 15, migration 5. These are comparison values, not a reason to force counts if English inventory differs.
DrinkTMRW belongs to development/integrations/marketing; Bannerprinting only migration. Keep the Polish exclusions: SienaHome marketing withheld; Kleanse and Laidback London integrations withheld.
If a project/category correspondence is ambiguous or the inventory differs, record the discrepancy and ask about those cases before writing them. Do not invent categories or silently omit projects.
Write manifest.json with English resource, capturedAt, project IDs, revisions, titles/slugs/languages, original workDone, proposedWorkDone refs and explicit Polish-to-English project/category mappings. Store the full Title | Slug | Work Done classification table in classification.md. These files are migration evidence, never frontend data sources.

## 2. Update and publish only Work Done through Sanity MCP
First check for existing migration artifacts and live state to avoid repeating a completed migration.
Immediately re-read each published revision and any draft before patching; abort/reconcile changed revisions. Do not overwrite/discard/publish existing editorial drafts. Report conflicts separately.
For a project without conflicting drafts use revision-guarded MCP patches that SET ONLY workDone to an array of {_type:"reference", _key:<unique stable key>, _ref:<existing English category ID>}.
Preserve all other user fields. API metadata _rev/_updatedAt naturally changes.
Verify the MCP-created draft's refs, original title/slug/language and preservation of other fields using available snapshots/tool transaction guarantees. Do not claim full-field comparison unless actually performed.
Publish only your verified migration drafts using their fresh revision guards. Account for concurrent edits. Do not publish unrelated drafts.
For partial failures leave an accurate per-document report, re-read live state before retrying and never blindly reapply old revisions.
Verify all expected published refs, language, category existence, no duplicate membership and no remaining migration drafts. Record published-result.json with current IDs/revisions/memberships, category totals, verification time and any unresolved cases. Retain originals for rollback.

## 3. Deploy the existing English Studio
Verify the local Work Done schema matches the Polish structured reference model. Do not change Services/category definitions or unrelated fields.
Confirm project/dataset/appId ownership, set deployment.appId in sanity.cli.ts to w5d6f76jxa81kvdkuauqful9 for the existing Studio. Do not create another Studio.
Build locally and deploy the existing Studio with its schema (for a compatible Sanity CLI, sanity deploy --yes --schema-required). Check CLI help if flags differ.
Current local sanity/@sanity/vision are 4.10.2; prior build reported auto-update runtime 4.22.0. Update only necessary compatible dependencies/lockfile if required and verify the build. Do not perform unrelated major upgrades.
Do not redeploy GraphQL.
Confirm deployment URL and read the deployed Projects schema back through MCP, recording schema ID and actual workDone reference-array definition. A local build alone is not deployment.
Write studio-deployment-result.json with verified resource/appId/URL/schema ID/time and build/deployment status.
Update a separate HANDOFF_RESULT.md with completed/pending steps, exact category totals and representative English service URLs for frontend validation. Do not overwrite the shared README while the other session edits it.
Do not redeploy Vercel: the user will deploy release 2 to Preview and then master, rebuilding static pages. A local build does not refresh production static content.

## 4. Handoff
Report exact artifact paths, counts, migration/deployment success or blockers, all unresolved cases and whether frontend release 2 is safe to test against published data.
Leave no assertion that remote Preview or frontend release 2 Production was verified unless actually checked after user deployment.
Rollback frontend only to compatible release 1; never the old string-only GraphQL implementation while arrays exist.
