
import fs from "node:fs/promises";
import path from "node:path";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const root = path.resolve(import.meta.dirname, "..");
const outputDir = path.join(root, "evidence", "controls");
await fs.mkdir(outputDir, { recursive: true });

const snapshot = JSON.parse(await fs.readFile(path.join(root, "audits", "phase0_shopify_snapshot.json"), "utf8"));
const fileInventory = JSON.parse(await fs.readFile(path.join(root, "theme", "broadcast", "broadcast_theme_files.json"), "utf8"));

const themeFiles = new Set(fileInventory.data.node.files.nodes.map((x) => x.filename));
const products = snapshot.products.data.products.nodes;
const collections = snapshot.collections.data.collections.nodes;
const pages = snapshot.pages.data.pages.nodes;
const articles = snapshot.articles.data.articles.nodes;
const redirects = snapshot.redirects.nodes;
const markets = snapshot.markets.data.markets.nodes;
const menus = snapshot.menus.data.menus.nodes;

const C = {
  navy: "#2C3157", orange: "#E85218", aqua: "#37B29B", cream: "#FFFBF2",
  white: "#FFFFFF", dark: "#2E2A39", line: "#D9DCE8",
  pass: "#D9EAD3", fail: "#F4CCCC", blocked: "#FCE5CD", unknown: "#E7E6E6",
};

const checklist = [
["☑","0-01","Phase 0","None","Read the revised migration plan and all attached project sources in full.","PMO","45 min","PASS","Drive plan and seven attached source files read 27 Aug 2026.","None","Google Drive → WORKING DOCS → Eltee_Broadcast_Migration_Plan_Reconciled.docx","Maintain source precedence."],
["☑","0-02","Phase 0","0-01","Confirm the connected Shopify store and primary domain.","PMO","10 min","PASS","Eltee Sydney, elteesydney.com.au, Advanced, AUD, AEST.","None","Shopify Admin → Settings → Store details","Retain as baseline."],
["☑","0-03","Phase 0","0-01","Reverify live Sense, Sense backup and Broadcast draft IDs.","PMO","15 min","PASS","Sense MAIN 152278204553; backup 153521913993; Broadcast UNPUBLISHED 155379237001.","Publish remains gated","Shopify Admin → Online Store → Themes","Do not publish Broadcast."],
["☑","0-04","Phase 0","0-02","Inventory products, collections, pages, articles, menus, redirects and Markets.","PMO","45–60 min","PASS",`${products.length} products; ${collections.length} collections; ${pages.length} pages; ${articles.length} articles; ${menus.length} menus; ${redirects.length} redirects; ${markets.length} Markets.`,"None","Shopify Admin → Products / Content / Online Store → Navigation / Settings → Markets","Use URL and template registers as working baseline."],
["☐","0-05","Phase 0","0-04","Export product variants and inventory detail for priority products.","SEO Safety / PMO","45 min","UNVERIFIED","Resource inventory captured; full variant and inventory export remains open.","None","Shopify Admin → Products → Export","Run before template acceptance."],
["☐","0-06","Phase 0","0-04","Export 16-month and 90-day GSC page and query data.","SEO Safety","45 min","BLOCKED","Only the supplied five-page GSC snapshot is available in this session.","Access needed","Google Search Console → Performance → Search results → Export","Connect or provide GSC export."],
["☐","0-07","Phase 0","0-04","Record settled GA4 and Shopify organic sessions, revenue, conversion and events.","SEO Safety / PMO","45 min","BLOCKED","GA4 baseline is not accessible in this session.","Access needed","GA4 → Reports → Acquisition; Shopify Admin → Analytics","Connect GA4 or provide export."],
["☐","0-08","Phase 0","0-03","Name launch and rollback decision owners.","Sarah","10 min","BLOCKED","No owners confirmed in source pack.","Decision required","PMO control workbook → Launch Register","Confirm launch approver and rollback owner."],
["☐","0-09","Phase 0","0-08","Schedule the 24-hour content freeze.","PMO / Sarah","10 min","UNVERIFIED","Launch date is not set.","Approval gate","PMO control workbook → Launch Register","Set after acceptance is near completion."],

["☑","0A-01","Phase 0A","0-01","Replace Symmetry with Broadcast in the working implementation map only.","PMO","20 min","PASS","SC-01 resolved by approved narrow override. Source blueprint remains read-only.","None","PMO control workbook → Conflict Register","Keep blueprint unchanged."],
["☑","0A-02","Phase 0A","0A-01","Inventory Broadcast files, templates, sections and settings.","PMO / Theme Settings","45 min","PASS","428 files, 23 templates and 83 sections captured from draft 155379237001.","None","Shopify Admin → Online Store → Themes → Broadcast → … → Edit code","Use read-only evidence only."],
["☑","0A-03","Phase 0A","0A-02","Verify native homepage H1 control.","SEO Safety","30 min","PASS","Broadcast Heading block exposes Heading SEO tag options Automatic and H1–H6.","None","Online Store → Themes → Broadcast → Customise → Home page → Slideshow (Nested) → Video → Heading → Advanced","Set H1 during approved draft implementation."],
["☐","0A-04","Phase 0A","0A-03","Verify the approved homepage line renders once as H1.","SEO Safety","30 min","FAIL","Broadcast preview has no H1; hero line renders as H2.","Launch blocker","Same path as 0A-03, then inspect rendered HTML","Change to H1 in draft, save, reload and recheck."],
["☐","0A-05","Phase 0A","0A-02","Verify Tori Training hero asset identity and responsive crop.","Visual Layouts","45–60 min","UNVERIFIED","Current file is named GAME DAY WEBSITE 9x16; poster is WEBSITE 9x16 THUMBNAIL. Identity and mobile crop are not independently proven.","None","Online Store → Themes → Broadcast → Customise → Home page → Slideshow (Nested) → Video","Confirm asset identity; test 375px, 390px, tablet and desktop."],
["☐","0A-06","Phase 0A","0A-02","Reconcile blueprint typography with exact approved brand fonts and scales.","Theme Settings","30 min","BLOCKED","Broadcast uses System UI. Exact approved Broadcast font mapping is not confirmed.","Decision required","Online Store → Themes → Broadcast → Customise → Theme settings → Typography","Confirm heading/body fonts and sizes."],
["☑","0A-07","Phase 0A","0A-02","Verify social URLs and blank fields.","Theme Settings","20 min","PASS","Facebook, Instagram and TikTok exact URLs are present; no other current social keys are set.","None","Online Store → Themes → Broadcast → Customise → Theme settings → Social media","Retain."],
["☐","0A-08","Phase 0A","0A-02","Map every PDP block and variant control to native Broadcast.","Visual Layouts","45–60 min","FAIL","Default product lacks breadcrumbs/reviews; dynamic checkout and variant boxes are off; jewellery demo content remains.","Launch blocker","Online Store → Themes → Broadcast → Customise → Products → Default product","Rebuild default product in unpublished draft."],
["☐","0A-09","Phase 0A","0A-02","Confirm native 1600px maximum page-width control.","Theme Settings","30 min","FAIL","No global page-width setting found in Broadcast settings schema.","Code approval if exact value is mandatory","Online Store → Themes → Broadcast → Customise → Theme settings","Decide whether native width is acceptable before proposing code."],
["☐","0A-10","Phase 0A","0A-02","Inventory installed apps and current app-embed states.","Visual Layouts / PMO","30 min","BLOCKED","App installation query is access denied. Broadcast settings_data has no enabled global app embeds.","Access and app gates","Shopify Admin → Online Store → Themes → Broadcast → Customise → App embeds","Open Admin app list and capture verified evidence."],

["☐","1-01","Phase 1","0A-06","Set approved logo asset and desktop width.","Theme Settings","20 min","FAIL","Current header uses circle logo at 50px; blueprint requires full-colour square logo at 80px.","Unpublished draft only","Online Store → Themes → Broadcast → Customise → Header → Logo","Select approved asset and 80px during implementation."],
["☑","1-02","Phase 1","0A-02","Verify favicon.","Theme Settings","10 min","PASS","favicon-32x32.png is selected.","None","Online Store → Themes → Broadcast → Customise → Theme settings → Favicon","Retain."],
["☐","1-03","Phase 1","0A-06","Apply approved typography.","Theme Settings","45 min","BLOCKED","Exact fonts and scales are unresolved.","Decision required","Online Store → Themes → Broadcast → Customise → Theme settings → Typography","Resolve SC-07."],
["☐","1-04","Phase 1","0A-09","Resolve page-width requirement.","Theme Settings / PMO","30 min","BLOCKED","Native 1600px control is absent.","Custom code approval if required","Theme settings; code only after documented native limitation","Choose native Broadcast width or separately approve minimal code."],
["☑","1-05","Phase 1","0A-02","Verify cart drawer.","Theme Settings","10 min","PASS","Broadcast overlay contains cart-drawer section.","None","Online Store → Themes → Broadcast → Customise → Cart drawer","Retain."],
["☑","1-06","Phase 1","1-05","Verify order note.","Theme Settings","10 min","PASS","Order-note block is present.","None","Online Store → Themes → Broadcast → Customise → Cart drawer → Order note","Retain."],
["☑","1-07","Phase 1","0A-02","Verify currency code.","Theme Settings","10 min","PASS","currency_code_enable is true.","None","Online Store → Themes → Broadcast → Customise → Theme settings → Currency","Retain and test by Market."],
["☑","1-08","Phase 1","0A-02","Verify predictive search disabled.","Theme Settings","10 min","PASS","predictive_search_enabled is false.","None","Online Store → Themes → Broadcast → Customise → Theme settings → Search","Retain; test standard search."],
["☐","1-09","Phase 1","1-05","Choose cart cross-sell approach.","Sarah / Theme Settings","30 min","BLOCKED","Native Broadcast is automatic; blueprint names best-period-underwear.","Decision required","Online Store → Themes → Broadcast → Customise → Cart drawer → Upsell products","Choose native or Essential Upsell after five-cart test."],

["☐","2-01","Phase 2","0-04","Audit current collection membership, conditions and SEO.","SEO Safety / Merchandising","60 min","UNVERIFIED","Collection inventory captured; membership and conditions remain open.","None","Shopify Admin → Products → Collections","Audit before creating anything."],
["☑","2-02","Phase 2","2-01","Preserve /collections/all.","SEO Safety","15 min","PASS","Broadcast preview returns self-canonical URL and one H1.","Live redirect gate if changed","Products → Collections → Shop All","Do not change handle."],
["☑","2-03","Phase 2","2-01","Preserve /collections/the-starting-line-up.","SEO Safety","15 min","PASS","Broadcast preview returns self-canonical URL and one H1.","Live redirect gate if changed","Products → Collections → The Starting Line-Up","Do not change handle."],
["☑","2-04","Phase 2","2-01","Preserve /collections/bundle-save.","SEO Safety","15 min","PASS","Broadcast preview returns self-canonical URL and one H1.","Live redirect gate if changed","Products → Collections → Bundle & Save","Do not change handle."],
["☑","2-05","Phase 2","2-01","Preserve /collections/teen-period-underwear.","SEO Safety","15 min","PASS","Broadcast preview returns self-canonical URL and one H1.","Live redirect gate if changed","Products → Collections → Teen Period Underwear","Retain as secondary SEO destination."],
["☐","2-06","Phase 2","2-01","Approve handles for Swim, Active, Everyday and Accessories.","SEO Safety / Sarah","60 min","BLOCKED","Swim has competing existing options; other handles require evidence-led decisions.","Decision and redirect gates","Products → Collections; Search Console → Performance","Complete overlap and equity review first."],
["☐","2-07","Phase 2","2-06","Build approved collection membership and deliberate order.","Merchandising","60–90 min","UNVERIFIED","No collection mutation authorised.","Shared-resource approval if creating","Shopify Admin → Products → Collections → [collection]","Implement after handle approval."],
["☐","2-08","Phase 2","2-07","Verify UnderAustin, UnderSwim and UnderDance variants, including W18 only where live.","Merchandising / SEO","30 min","UNVERIFIED","Resource inventory captured; purchasable variant verification remains open.","None","Shopify Admin → Products → [product] → Variants","Record product-specific size limits."],
["☐","2-09","Phase 2","2-06","Build approved main navigation.","Visual Layouts / Sarah","45 min","FAIL","Broadcast header points to NEW MENU AUS, currently only SHOP and INFO top-level items.","Customer-visible navigation gate","Shopify Admin → Content → Menus → NEW MENU AUS","Build approved architecture and test desktop/mobile."],

["☐","3-01","Phase 3","0A-05","Verify Tori hero settings and CTA.","Visual Layouts","45 min","UNVERIFIED","Hero line and Shop All link are present. Asset identity, crop, reduced motion and performance remain open.","None","Online Store → Themes → Broadcast → Customise → Home page → Slideshow (Nested) → Video","Test four viewport groups."],
["☐","3-02","Phase 3","0A-04","Set hero heading tag to H1 and reverify.","Visual Layouts → SEO","15 min","FAIL","Native control exists; current Automatic value renders H2.","Launch blocker","Home page → Slideshow (Nested) → Video → Heading → Advanced → Heading SEO tag → H1","Implement in draft and inspect HTML."],
["☐","3-03","Phase 3","3-01","Match approved homepage top-three order.","Visual Layouts","30 min","FAIL","Current order inserts six enabled sections before Bundle & Save.","Launch acceptance","Online Store → Themes → Broadcast → Customise → Home page","Move Bundle directly after Starting Lineup if exact top-three order is intended."],
["☐","3-04","Phase 3","0A-08","Rebuild default product block stack.","Visual Layouts","2 h","FAIL","Current default product contains jewellery demo content and misses required blocks.","Launch blocker","Online Store → Themes → Broadcast → Customise → Products → Default product","Use blueprint order mapped to native Broadcast."],
["☐","3-05","Phase 3","3-04","Enable dynamic checkout on default product.","Visual Layouts","10 min","FAIL","show_dynamic_checkout is false.","Checkout behaviour gate","Products → Default product → Main product → Buy buttons","Enable in draft during approved implementation."],
["☐","3-06","Phase 3","3-04","Set variant picker to buttons/pills and circle swatches.","Visual Layouts","20 min","FAIL","variant_boxes is false; current default does not meet blueprint.","None","Theme settings → Product form; Products → Default product → Variant picker","Configure and mobile-test."],
["☐","3-07","Phase 3","3-04","Add Breadcrumbs block above Main Product.","Visual Layouts / SEO","20 min","FAIL","No Breadcrumbs block; Broadcast product lacks BreadcrumbList schema.","App reconfiguration gate","Products → Default product → Add section/app block","Verify one visual trail and one schema source."],
["☐","3-08","Phase 3","3-04","Add Klaviyo rating and full reviews without duplicate schema.","Visual Layouts / SEO","45 min","FAIL","No Klaviyo review blocks in default product.","App reconfiguration gate","Products → Default product → Add app block","Resolve SC-05 before two rating placements."],
["☐","3-09","Phase 3","3-04","Add Mod Bundles below Main Product.","Visual Layouts","30 min","FAIL","No Mod Bundles block in default product.","App reconfiguration gate","Products → Default product → Add section → Apps → Mod Bundles","Test discounts, inventory, cart lines and checkout."],
["☐","3-10","Phase 3","0A-10","Verify required app embeds in Broadcast.","Visual Layouts","60 min","FAIL","No global app-embed blocks found in settings_data.","Material app changes gated","Online Store → Themes → Broadcast → Customise → App embeds","Verify purpose and duplication before enabling."],

["☑","4-01","Phase 4","0A-02","Inventory live template_suffix values and Broadcast templates.","PMO / Visual Layouts","45 min","PASS","Template Register compares every current suffix with 23 Broadcast files.","None","PMO control workbook → Template Register","Use FAIL rows as worklist."],
["☐","4-02","Phase 4","4-01","Create required Broadcast templates before assignment.","Visual Layouts","2–4 h","FAIL","Most current custom suffixes have no Broadcast equivalent.","Draft template creation; deletion gated","Online Store → Themes → Broadcast → Customise → Template selector → Create template","Create minimum approved set."],
["☐","4-03","Phase 4","4-02","Preview one representative resource per unique template.","Visual Layouts / SEO","2 h","UNVERIFIED","Only home, default product and four collections checked.","Launch blocker","Broadcast preview → template selector → representative resource","Record PASS/FAIL per template."],
["☐","4-04","Phase 4","4-02","Build and accept default page template.","Visual Layouts / SEO","60 min","UNVERIFIED","page.json exists; hierarchy is not accepted.","None","Online Store → Themes → Broadcast → Customise → Pages → Default page","Verify one H1 and logical H2/H3."],
["☐","4-05","Phase 4","4-02","Build and accept default collection template.","Visual Layouts / SEO","60–90 min","UNVERIFIED","Priority collections render; filters, sort and pagination remain open.","None","Online Store → Themes → Broadcast → Customise → Collections → Default collection","Complete PLP QA."],
["☐","4-06","Phase 4","4-02","Build and accept default article template.","Visual Layouts / SEO","60 min","UNVERIFIED","article.json exists; representative article is not tested.","None","Online Store → Themes → Broadcast → Customise → Blog posts → Default article","Verify H1, links and BlogPosting schema."],
["☐","4-07","Phase 4","4-02","Build landing-page template group.","Visual Layouts / SEO","3–5 h","UNVERIFIED","Campaign, wholesale, FAQ, size and operational templates are not mapped.","None","Online Store → Themes → Broadcast → Customise → Pages → Create template","Use minimum reusable groups."],
["☐","4-08","Phase 4","4-07","Rebuild teen SEO destination to approved brief.","SEO / Visual Layouts","2–3 h","UNVERIFIED","URL is preserved. Current H1 differs from the draft teen brief.","Shared-resource edit approval","Products → Collections → teen-period-underwear; Broadcast template assignment","Approve title/H1/copy before shared-content edit."],
["☐","4-09","Phase 4","4-07","Triage all current pages.","SEO Safety","3–5 h","UNVERIFIED",`${pages.length} pages inventoried; disposition is not approved.`,"Redirect and deletion gates","PMO control workbook → URL Register","Start with five supplied GSC pages and operational pages."],

["☐","5-01","Phase 5","0-04","Crawl live Sense titles, meta, H1, canonical, robots, links and schema.","SEO Safety","90 min","UNVERIFIED","Homepage and UnderSwim spot checks captured; full crawl not run.","None","SEO crawler → https://elteesydney.com.au","Run baseline before shared-content changes."],
["☐","5-02","Phase 5","5-01","Crawl accessible Broadcast preview.","SEO Safety","90 min","UNVERIFIED","Home, UnderSwim and four collections spot checked only.","None","Broadcast preview URLs → crawler/browser","Repeat for priority URLs and every template."],
["☐","5-03","Phase 5","5-02","Verify one purposeful H1 per template.","SEO Safety","60 min","FAIL","Homepage has no H1. Default product has one. Others remain open.","Launch blocker","Inspect rendered HTML, not editor labels","Fix homepage and complete representative set."],
["☑","5-04","Phase 5","5-02","Spot-check canonical and metadata continuity.","SEO Safety","60 min","PASS","Homepage and UnderSwim title, meta and canonical match Sense vs Broadcast.","None","Rendered page head in both themes","Expand to all priority URLs."],
["☐","5-05","Phase 5","5-02","Compare structured data by template.","SEO Safety","60–90 min","FAIL","UnderSwim Sense has BreadcrumbList + ProductGroup; Broadcast lacks BreadcrumbList.","Launch blocker","View JSON-LD; Rich Results Test; Schema.org Validator","Restore one authoritative breadcrumb source."],
["☐","5-06","Phase 5","0-06","Refresh GSC for five swim pages and run URL Inspection.","SEO Safety","45 min","BLOCKED","Supplied snapshot recorded; live GSC access unavailable.","Access needed","Google Search Console → URL Inspection","Refresh now at this checklist stage."],
["☐","5-07","Phase 5","5-06","Map one query cluster per swim/sport page.","SEO Safety","60 min","UNVERIFIED","No refreshed query export.","None","GSC → Performance → Pages/Queries; URL Register","Avoid cannibalisation."],
["☐","5-08","Phase 5","5-01","Audit 413 redirects for chains, dead targets and active-resource redirects.","SEO Safety","60–90 min","UNVERIFIED","Complete redirect inventory captured; validation not run.","Live redirect changes gated","Shopify Admin → Content → Menus → URL redirects","Prioritise priority-URL paths."],
["☐","5-09","Phase 5","5-01","Verify .com.au, .com and Market canonicals separately.","SEO Safety","45 min","UNVERIFIED","Markets/currencies captured; domains and web presences are not fully exported.","DNS/routing gates","Shopify Admin → Settings → Markets → Domains and languages","Test before launch."],

["☐","6-01","Phase 6","0A-10","Verify required app embeds and scripts.","Visual Layouts / Tracking","60 min","FAIL","No enabled global embed blocks found.","Material app changes gated","Online Store → Themes → Broadcast → Customise → App embeds","Review every app and duplication risk."],
["☐","6-02","Phase 6","6-01","Verify Barb endpoint, identity, colour and avatar.","Barb owner / Visual Layouts","30 min","BLOCKED","Production remains commit 2fd5d67. Runtime migration is separate and unapproved.","Barb merge/deploy/endpoint/Render gates","Broadcast App embeds → Barb; ESGEE-0562/shop-chat-agent","Do not merge PR #10 or deploy."],
["☐","6-03","Phase 6","6-02","Complete isolated Barb acceptance tests.","Barb owner","2–4 h","BLOCKED","Requires separate approval for Render development service and possible charges.","Paid Render gate","Render development service; Barb test matrix","Obtain separate approval first."],
["☐","6-04","Phase 6","6-01","Verify GA4 ecommerce events.","Tracking / SEO","60 min","BLOCKED","Analytics access unavailable.","Tracking replacement gate","GA4 DebugView / Realtime","Test page_view through purchase."],
["☐","6-05","Phase 6","6-01","Verify Google Ads enhanced conversions.","Tracking","30 min","BLOCKED","Analytics access unavailable.","Tracking replacement gate","Google Ads → Goals → Conversions","Record event source."],
["☐","6-06","Phase 6","6-01","Verify Meta Pixel/CAPI IDs and deduplication.","Tracking","30 min","BLOCKED","Analytics access unavailable.","Tracking replacement gate","Meta Events Manager → Test events","Record browser/server IDs."],
["☐","6-07","Phase 6","6-01","Verify Klaviyo onsite/checkout events and consent.","Tracking","30 min","BLOCKED","App embed absent; connector scope unavailable.","App/tracking gates","Klaviyo Analytics; Broadcast App embeds","Test after embed decision."],
["☐","6-08","Phase 6","0-04","Verify Markets, currencies, domains and routing.","PMO / SEO / Commerce","60 min","UNVERIFIED",`${markets.length} active Markets captured: ${markets.map(m=>`${m.name} ${m.currencySettings.baseCurrency.currencyCode}`).join(", ")}. Domains and hreflang remain open.`,"DNS changes gated","Shopify Admin → Settings → Markets","Test .com.au and .com separately."],

["☐","7-01","Phase 7","3-10,4-03,5-09,6-08","Run functional QA.","QA","2 h","UNVERIFIED","Implementation incomplete.","Launch blocker","Broadcast preview → functional matrix","Record evidence per surface."],
["☐","7-02","Phase 7","3-10,4-03","Run product, cart and checkout QA.","QA / Commerce","2 h","BLOCKED","Default product contains demo content and checkout differs from blueprint.","Launch and checkout gates","Broadcast preview → products → cart → checkout","Fix template first."],
["☐","7-03","Phase 7","7-01","Run mobile and browser matrix.","QA","2 h","UNVERIFIED","375px, 390px, iPhone, Android, desktop and tablet remain open.","Launch blocker","Broadcast preview → device/browser matrix","Capture evidence."],
["☐","7-04","Phase 7","7-01","Run accessibility checks.","QA / Visual Layouts","90 min","UNVERIFIED","Keyboard, focus, labels, order, alt text, contrast and motion remain open.","Launch blocker for material failures","Browser accessibility inspection","Log by severity."],
["☐","7-05","Phase 7","7-01","Run performance checks.","QA / Visual Layouts","60 min","UNVERIFIED","Video/app performance not measured.","Launch blocker for material regression","PageSpeed / browser performance","Compare Sense vs Broadcast."],
["☐","7-06","Phase 7","5-05","Run final SEO/content acceptance.","SEO Safety","2 h","FAIL","Homepage H1, breadcrumb schema, templates and placeholder content remain open.","Launch blocker","Master Checklist + crawl + rendered HTML","No approval while FAIL/BLOCKED remains."],

["☐","8-01","Phase 8","7-06","Confirm all launch-affecting conflicts are resolved.","PMO / Sarah","30 min","BLOCKED","SC-03, SC-04, SC-05, SC-07 and critical defects remain open.","Explicit approval gate","Conflict Register","Resolve in writing."],
["☐","8-02","Phase 8","8-01","Confirm rollback owner, trigger and decision process.","PMO / Sarah","20 min","BLOCKED","Backup ID verified; owner/process not confirmed.","Explicit approval gate","Launch Register","Name owner and triggers."],
["☐","8-03","Phase 8","8-02","Obtain explicit approval to publish Broadcast.","Sarah","5 min","BLOCKED","No publication approval. This task is read-only.","Hard gate","Shopify Admin → Online Store → Themes → Broadcast","Do not publish."],
["☐","8-04","Phase 8","8-03","Publish Broadcast and record timestamp/approver.","Authorised operator","10 min","BLOCKED","Not authorised.","Hard gate","Shopify Admin → Online Store → Themes → Broadcast → Publish","Only after explicit approval."],
["☐","8-05","Phase 8","8-04","Run immediate launch smoke tests.","Launch team","60–90 min","UNVERIFIED","Future launch activity.","Rollback triggers active","Live storefront and analytics","Start within minutes."],
["☐","8-06","Phase 8","8-04","Record analytics annotation and release evidence.","PMO / Analytics","15 min","UNVERIFIED","Future launch activity.","None","PMO record; analytics notes","Record exact publish time."],

["☐","9-01","Phase 9","8-04","Monitor 0–2 hours: purchase path, events, errors, 404s, domains and currency.","Launch team","2 h","UNVERIFIED","Future monitoring.","Rollback triggers","Live storefront, Shopify, GA4, logs","Rollback for material failure."],
["☐","9-02","Phase 9","9-01","Monitor 24 hours: sales, analytics, ads and crawl anomalies.","PMO / Analytics","45 min","UNVERIFIED","Future monitoring.","None","Shopify, GA4, ad platforms, crawler","Compare settled range."],
["☐","9-03","Phase 9","9-02","Monitor 72 hours: indexing, canonicals and rich results.","SEO Safety","45 min","UNVERIFIED","Future monitoring.","None","GSC, validators, crawler","Investigate template-wide issues."],
["☐","9-04","Phase 9","9-03","Monitor 7 days: queries, pages, revenue, 404s and performance.","SEO / PMO","60 min","UNVERIFIED","Future monitoring.","None","GSC, GA4, Shopify","Prioritise traffic/revenue impact."],
["☐","9-05","Phase 9","9-04","Monitor 14 days: crawl stats, schema and backlink destinations.","SEO Safety","45 min","UNVERIFIED","Future monitoring.","None","GSC, backlink tool, validators","Correct persistent mismatch."],
["☐","9-06","Phase 9","9-05","Complete 28-day review and closeout.","PMO / Sarah","60–90 min","UNVERIFIED","Future monitoring.","Approval to retire rollback theme","Launch Register","Retire rollback only after approval."],
["☐","9-07","Phase 9","9-06","Recheck five swim pages at day 28 and day 56.","SEO Safety","45 min each","UNVERIFIED","Future GSC checks.","None","Google Search Console","Use settled evidence."]
];

const gsc = {
"/pages/girls-periods-pool":"25 May–24 Aug: 0 clicks; 256 impressions; position 7.3.",
"/pages/period-inclusive-swim-campaign":"25 May–24 Aug: 1 click; 106 impressions; CTR 0.9%; position 8.9.",
"/pages/comp-swimmers":"25 May–24 Aug: 0 clicks; 0 impressions; appears in Google.",
"/pages/para-swimmers":"25 May–24 Aug: 0 clicks; 0 impressions; appears in Google.",
"/pages/period-swim-underwear-for-sailing":"25 May–24 Aug: 0 clicks; 0 impressions; in sitemap; visibility unverified."
};
const preserved = new Set(["/collections/all","/collections/the-starting-line-up","/collections/bundle-save","/collections/teen-period-underwear"]);
const priorityProducts = new Set(["period-swim-undies","g-fit-underswim-period-swim-underwear","period-dance-gym","underaustin"]);
const templateFile=(type,suffix)=>suffix?`templates/${type}.${suffix}.json`:`templates/${type}.json`;
const availableTemplate=(type,suffix)=>themeFiles.has(templateFile(type,suffix));

const urlRows=[];
for(const p of products){
 const u=`/products/${p.handle}`, s=p.templateSuffix||"", ok=availableTemplate("product",s);
 urlRows.push(["Product",u,p.title,p.handle,p.status,s||"(default)",templateFile("product",s),ok?"Available":"Missing",priorityProducts.has(p.handle)?"HIGH":"STANDARD","Preserve unless SEO evidence supports change","",p.onlineStoreUrl?(ok?"PASS":"FAIL"):"UNVERIFIED",p.seo?.title||"",p.seo?.description||"",p.updatedAt,"Shopify snapshot 27 Aug 2026"]);
}
for(const x of collections){
 const u=`/collections/${x.handle}`, s=x.templateSuffix||"", ok=availableTemplate("collection",s), tested=preserved.has(u);
 urlRows.push(["Collection",u,x.title,x.handle,"Resource exists",s||"(default)",templateFile("collection",s),ok?"Available":"Missing",tested?"HIGH":"STANDARD",tested?"PRESERVE":"Review before change","",tested&&ok?"PASS":(ok?"UNVERIFIED":"FAIL"),x.seo?.title||"",x.seo?.description||"",x.updatedAt,tested?"Broadcast rendered check 27 Aug 2026":"Shopify snapshot 27 Aug 2026"]);
}
for(const x of pages){
 const u=`/pages/${x.handle}`, s=x.templateSuffix||"", ok=availableTemplate("page",s);
 urlRows.push(["Page",u,x.title,x.handle,"Resource exists",s||"(default)",templateFile("page",s),ok?"Available":"Missing",gsc[u]?"HIGH":"STANDARD","Retain/consolidate after evidence",gsc[u]||"",ok?"UNVERIFIED":"FAIL","","",x.updatedAt,"Shopify snapshot 27 Aug 2026"]);
}
for(const x of articles){
 const u=`/blogs/${x.blog.handle}/${x.handle}`, s=x.templateSuffix||"", ok=availableTemplate("article",s);
 urlRows.push(["Article",u,x.title,x.handle,"Resource exists",s||"(default)",templateFile("article",s),ok?"Available":"Missing","STANDARD","Preserve until triage","",ok?"UNVERIFIED":"FAIL","","",x.updatedAt,"Shopify snapshot 27 Aug 2026"]);
}
for(const r of redirects) urlRows.push(["Redirect",r.path,r.target,"","Existing 301","N/A","N/A","N/A",preserved.has(r.path)?"HIGH":"STANDARD","Do not change without equity review","","UNVERIFIED","","","","Shopify redirect "+r.id.split("/").pop()]);

const conflicts=[
["SC-01","Blueprint says Symmetry; approved target is Broadcast.","All theme paths/settings","Approved decision","Broadcast governs only the conflict.","Sarah","27 Aug 2026","Replace working mappings; retain source.","PASS","Plan and theme query."],
["SC-02","Blueprint H1 is girls-only; approved positioning is age-inclusive.","Homepage copy/semantics","Approved decision","Use Performance Periodwear That Came to Play as single H1.","Sarah","27 Aug 2026","Set native tag to H1 and verify.","FAIL","Preview has no H1; line is H2."],
["SC-03","Blueprint names best-period-underwear cross-sell; Broadcast is automatic.","Cart drawer","Decision required","Choose native recommendations or Essential Upsell.","","","Test five carts.","BLOCKED","Native upsell-products block."],
["SC-04","Symmetry PDP blocks are not mapped to Broadcast.","All PDPs","Approved target + blueprint","Use native Broadcast equivalents in blueprint order.","","","Rebuild default product.","FAIL","Missing blocks and demo content."],
["SC-05","Blueprint requires two review-rating placements.","PDP UX/schema","Decision required","Use one authoritative review/schema source.","","","Verify Klaviyo behaviour.","BLOCKED","No review blocks present."],
["SC-06","Blueprint static hero conflicts with approved Tori video.","Homepage hero","Approved decision","Tori Training video governs.","Sarah","27 Aug 2026","Verify identity/crop/poster/motion/performance.","UNVERIFIED","File named GAME DAY WEBSITE 9x16."],
["SC-07","Blueprint font shorthand conflicts with specific brand typography.","Global typography","Decision required","Record exact fonts and scales.","","","Confirm settings.","BLOCKED","System UI currently."],
["SC-08","Approved top-three homepage order conflicts with current order.","Homepage","Approved homepage order","Hero, Starting Lineup, Bundle & Save top three.","","","Move Bundle if exact top-three intended.","FAIL","Six enabled sections intervene."],
["SC-09","Blueprint logo conflicts with current header.","Header","Blueprint unaffected","Full-colour square logo at 80px.","","","Change in draft.","FAIL","Circle logo at 50px."],
["SC-10","Default product contains jewellery demo copy.","PDPs using default","Migration acceptance","Remove demo content.","","","Rebuild before assignment.","FAIL","Rendered UnderSwim preview shows jewellery copy."],
["SC-11","Current suffixes lack Broadcast template files.","All resources","Migration acceptance","Create minimum template set.","","","Use Template Register.","FAIL","23 Broadcast templates only."],
["SC-12","Blueprint requires embeds ON; none are enabled.","Apps/tracking","Blueprint + duplication checks","Verify and enable only required embeds.","","","Review Admin app list.","FAIL","No app blocks in settings_data."],
["SC-13","Approved navigation conflicts with NEW MENU AUS.","Header/mobile","Approved architecture","Build approved seven-item architecture; Teens secondary.","","","Review shared-menu impact.","FAIL","Only SHOP and INFO top-level."],
["SC-14","Dynamic checkout should be ON; default has it OFF.","PDP purchase","Blueprint unaffected","Enable after commerce acceptance.","","","Configure and test.","FAIL","show_dynamic_checkout false."],
["SC-15","Variant UI should be pills/buttons; boxes are OFF.","PDP variants","Blueprint unaffected","Use native buttons/pills and circle swatches.","","","Configure/mobile-test.","FAIL","variant_boxes false."],
["SC-16","Sense product has BreadcrumbList; Broadcast does not.","Product schema","SEO continuity","Restore one authoritative breadcrumb source.","","","Add block and retest.","FAIL","Sense BreadcrumbList + ProductGroup; Broadcast Organization + ProductGroup."],
["SC-17","Installed-app inventory is inaccessible.","App register","Live evidence","Use Shopify Admin app list/app-embed UI.","","","Capture guided evidence.","BLOCKED","appInstallations access denied."]
];

const suffixRows=[], groups=new Map();
function addSuffix(type,suffix,title){
 const key=type+"|"+(suffix||"");
 if(!groups.has(key)) groups.set(key,{type,suffix:suffix||"",count:0,examples:[]});
 const g=groups.get(key); g.count++; if(g.examples.length<3) g.examples.push(title);
}
products.forEach(x=>addSuffix("product",x.templateSuffix,x.title));
collections.forEach(x=>addSuffix("collection",x.templateSuffix,x.title));
pages.forEach(x=>addSuffix("page",x.templateSuffix,x.title));
articles.forEach(x=>addSuffix("article",x.templateSuffix,x.title));
for(const g of [...groups.values()].sort((a,b)=>a.type.localeCompare(b.type)||a.suffix.localeCompare(b.suffix))){
 const f=templateFile(g.type,g.suffix), ok=themeFiles.has(f);
 suffixRows.push([g.type,g.suffix||"(default)",f,g.count,g.examples.join(" | "),ok?"PASS":"FAIL",ok?"Broadcast file exists.":"Create approved equivalent before assignment.",ok?"None":"Draft template creation; deletion gated"]);
}
for(const f of [...themeFiles].filter(x=>x.startsWith("templates/")).sort()){
 if(!suffixRows.some(r=>r[2]===f)) suffixRows.push(["Broadcast-only","N/A",f,0,"No current assignment captured","UNVERIFIED","Confirm need or demo residue.","Deletion gated"]);
}

const apps=[
["CodeUp Custom Code","Global embed ON","No app embed block; install scope denied.","FAIL","Inventory snippets and retain only approved code.","Material reconfiguration / production custom Liquid"],
["Instafeed","Global embed ON","No global embed; two homepage app sections exist.","FAIL","Confirm whether sections remove need for embed; test fallback.","Material reconfiguration"],
["Stoq Back-In-Stock","Global embed ON","No app embed; install status blocked.","FAIL","Verify unavailable-variant flow and consent.","Material reconfiguration"],
["Essential Upsell","Global embed ON","No app embed; native cart upsell present.","FAIL","Choose one source to avoid duplication.","Material reconfiguration / SC-03"],
["Klaviyo Onsite","Global embed ON","No app embed.","FAIL","Verify events, consent and duplicate scripts.","Tracking/app gate"],
["Barb AI Chat","Embed ON; #f2581f; BARB_3.png","No app embed; production remains 2fd5d67.","FAIL","Verify endpoint/identity. Do not merge PR #10.","Barb merge/deploy/endpoint/paid Render"],
["Breadcrumbs by Byte Apps","Above Main Product","Absent from default product.","FAIL","Add one trail and one schema source.","Material app reconfiguration"],
["Mod Bundles","Below Main Product","Absent from default product.","FAIL","Test selection, discount, cart and checkout.","Material app reconfiguration"],
["Klaviyo Reviews","Ratings plus full reviews","Absent from default product.","FAIL","Resolve placements and one schema source.","Material app reconfiguration / SC-05"]
];

const schemaRows=[
["Home","Sense live","/","WebSite/Organization graph","Graph with no top-level @type in compact inspection.","UNVERIFIED","Capture raw graph and validate.","Browser 27 Aug 2026"],
["Home","Broadcast preview","/","Organization; WebSite","Organization; WebSite","PASS","Retest after embeds/H1.","Browser 27 Aug 2026"],
["Home H1","Sense live","/","One H1","Period Underwear for Unstoppable Girls","PASS","Baseline only.","Browser 27 Aug 2026"],
["Home H1","Broadcast preview","/","One H1: Performance Periodwear That Came to Play","No H1; line is H2.","FAIL","Set native tag to H1 and recheck.","Browser 27 Aug 2026"],
["UnderSwim product","Sense live","/products/period-swim-undies","BreadcrumbList; ProductGroup","BreadcrumbList; ProductGroup","PASS","Keep baseline.","Browser 27 Aug 2026"],
["UnderSwim product","Broadcast preview","/products/period-swim-undies","BreadcrumbList; ProductGroup","Organization; ProductGroup","FAIL","Restore one breadcrumb source.","Browser 27 Aug 2026"],
["Product metadata","Sense vs Broadcast","/products/period-swim-undies","Same title/meta/canonical","Matched.","PASS","Expand to priority products.","Browser 27 Aug 2026"],
["UnderAustin product","Both themes","/products/underaustin","ProductGroup/Product; Offer; BreadcrumbList; reviews","Not captured.","UNVERIFIED","Capture and compare raw JSON-LD.","Schema stage"],
["UnderDance product","Both themes","/products/period-dance-gym","ProductGroup/Product; Offer; BreadcrumbList; reviews","Not captured.","UNVERIFIED","Capture and compare raw JSON-LD.","Schema stage"],
["Collection default","Broadcast preview","Priority collection","BreadcrumbList; ItemList where supported","Not parsed.","UNVERIFIED","Validate representative.","Schema stage"],
["Article default","Broadcast preview","Representative article","Article/BlogPosting; publisher; breadcrumbs","Not captured.","UNVERIFIED","Validate representative.","Schema stage"],
["Review schema","Broadcast preview","Representative product","One eligible visible review source","No Klaviyo review block.","FAIL","Add approved reviews and validate.","Default product evidence"]
];

const launchRows=[
["Readiness","Now","Broadcast target and precedence recorded.","PMO","PASS","None","Draft remains unpublished.","Theme query"],
["Readiness","Now","No BLOCK/HIGH defect remains.","PMO / Sarah","FAIL","Launch blocker","H1, product, templates, apps, schema and decisions remain open.","Master Checklist"],
["T-24h","Before launch","Start content freeze and reconcile registers.","PMO / Sarah","UNVERIFIED","Launch-process approval","Set timestamp/owners.","Not scheduled"],
["T-24h","Before launch","Duplicate/export latest Sense and record rollback ID.","Authorised operator","UNVERIFIED","Live-theme process gate","Reverify backup at T-24h.","Backup verified 27 Aug"],
["T-24h","Before launch","Final crawl, schema, link and mobile purchase tests.","SEO / QA","UNVERIFIED","Launch blocker","Attach evidence.","Not run"],
["Approval","Before publish","Explicit approval to publish Broadcast.","Sarah","BLOCKED","Hard gate","No approval currently given.","Read-only authority"],
["Publish","Window","Publish Broadcast; record timestamp/approver.","Authorised operator","BLOCKED","Hard gate","Admin → Online Store → Themes → Broadcast → Publish.","Do not execute"],
["0–2h","Post-launch","Smoke test domains, currency, cart, checkout and events.","Launch team","UNVERIFIED","Rollback triggers","Rollback for material failures.","Future"],
["24h","Post-launch","Review sales, analytics, ads and crawl anomalies.","PMO / Analytics","UNVERIFIED","None","Compare settled periods.","Future"],
["72h","Post-launch","Review indexing, canonicals and rich results.","SEO","UNVERIFIED","None","Investigate template-wide issues.","Future"],
["7d","Post-launch","Review queries, pages, revenue, 404s and performance.","SEO / PMO","UNVERIFIED","None","Prioritise impact.","Future"],
["14d","Post-launch","Review crawl stats, schema and backlinks.","SEO","UNVERIFIED","None","Correct persistent mismatches.","Future"],
["28d","Post-launch","Complete closeout review.","PMO / Sarah","UNVERIFIED","Approval to retire rollback","Keep rollback until approved.","Future"],
["56d","Post-launch","Recheck five swim pages.","SEO","UNVERIFIED","None","Decide from settled evidence.","Future"]
];

const wb=Workbook.create();

function styleStatus(range){
 range.conditionalFormats.add("containsText",{text:"PASS",format:{fill:C.pass,font:{bold:true,color:"#274E13"}}});
 range.conditionalFormats.add("containsText",{text:"FAIL",format:{fill:C.fail,font:{bold:true,color:"#990000"}}});
 range.conditionalFormats.add("containsText",{text:"BLOCKED",format:{fill:C.blocked,font:{bold:true,color:"#7F6000"}}});
 range.conditionalFormats.add("containsText",{text:"UNVERIFIED",format:{fill:C.unknown,font:{bold:true,color:"#444444"}}});
}
function colName(n){
 let s=""; while(n){n--;s=String.fromCharCode(65+n%26)+s;n=Math.floor(n/26);} return s;
}
function baseSheet(name,title,headers,rows,opt={}){
 const sh=wb.worksheets.add(name), cols=headers.length, end=colName(cols), hr=opt.headerRow||3;
 sh.showGridLines=false;
 sh.getRange(`A1:${end}1`).merge(); sh.getRange("A1").values=[[title]];
 sh.getRange(`A1:${end}1`).format={fill:C.navy,font:{bold:true,color:C.white,size:16},verticalAlignment:"center"};
 sh.getRange(`A1:${end}1`).format.rowHeight=30;
 sh.getRange(`A${hr}:${end}${hr}`).values=[headers];
 sh.getRange(`A${hr}:${end}${hr}`).format={fill:C.orange,font:{bold:true,color:C.white},wrapText:true,verticalAlignment:"center"};
 sh.getRange(`A${hr}:${end}${hr}`).format.rowHeight=34;
 if(rows.length){
  sh.getRangeByIndexes(hr,0,rows.length,cols).values=rows;
  sh.getRangeByIndexes(hr,0,rows.length,cols).format={font:{color:C.dark,size:10},verticalAlignment:"top",wrapText:true};
  sh.getRangeByIndexes(hr,0,rows.length,cols).format.borders={insideHorizontal:{style:"thin",color:C.line},bottom:{style:"thin",color:C.line}};
 }
 sh.freezePanes.freezeRows(hr); if(opt.freezeCols) sh.freezePanes.freezeColumns(opt.freezeCols);
 if(opt.statusCol){
  const l=colName(opt.statusCol), rg=sh.getRange(`${l}${hr+1}:${l}${hr+rows.length}`);
  rg.dataValidation={rule:{type:"list",values:["PASS","FAIL","BLOCKED","UNVERIFIED"]}}; styleStatus(rg);
 }
 return sh;
}
function widths(sh,values){values.forEach((w,i)=>sh.getRangeByIndexes(0,i,1,1).format.columnWidth=w);}

const master=baseSheet("Master Checklist","ELTEE SYDNEY | BROADCAST MIGRATION MASTER CONTROL",["Done?","ID","Phase","Dependency","Task","Owner","Estimate","Status","Evidence","Approval Gate","Exact Shopify Click Path","Next Action"],checklist,{headerRow:5,statusCol:8,freezeCols:2});
const lm=5+checklist.length;
master.getRange("A2").values=[["PASS"]]; master.getRange("B2").formulas=[[`=COUNTIF($H$6:$H$${lm},"PASS")`]];
master.getRange("C2").values=[["FAIL"]]; master.getRange("D2").formulas=[[`=COUNTIF($H$6:$H$${lm},"FAIL")`]];
master.getRange("E2").values=[["BLOCKED"]]; master.getRange("F2").formulas=[[`=COUNTIF($H$6:$H$${lm},"BLOCKED")`]];
master.getRange("G2").values=[["UNVERIFIED"]]; master.getRange("H2").formulas=[[`=COUNTIF($H$6:$H$${lm},"UNVERIFIED")`]];
master.getRange("I2").values=[["RELEASE"]]; master.getRange("J2:L2").merge();
master.getRange("J2").formulas=[[`=IF(COUNTIF($H$6:$H$${lm},"FAIL")+COUNTIF($H$6:$H$${lm},"BLOCKED")>0,"NOT READY TO PUBLISH","READY FOR APPROVAL GATE")`]];
master.getRange("A2:L2").format={fill:C.cream,font:{bold:true,color:C.navy},verticalAlignment:"center"};
master.getRange(`A6:A${lm}`).dataValidation={rule:{type:"list",values:["☐","☑"]}};
widths(master,[7,10,12,15,44,20,12,14,44,28,44,38]);

const urlSheet=baseSheet("URL Register","URL, RESOURCE AND REDIRECT REGISTER",["Type","URL / Path","Title / Target","Handle","Live State","Current Suffix","Expected Broadcast File","Broadcast File","Priority","URL Rule","GSC Snapshot","Status","SEO Title","Meta Description","Updated","Evidence"],urlRows,{statusCol:12,freezeCols:2});
widths(urlSheet,[10,42,36,26,14,22,34,14,11,34,34,14,38,48,20,34]);

const conflictSheet=baseSheet("Conflict Register","SOURCE CONFLICT AND DECISION REGISTER",["ID","Conflict","Affected Work","Governing Source","Approved Resolution","Approver","Resolution Date","Required Change","Status","Evidence"],conflicts,{statusCol:9,freezeCols:1});
widths(conflictSheet,[10,42,28,28,40,16,16,42,14,46]);

const templateSheet=baseSheet("Template Register","BROADCAST TEMPLATE COVERAGE REGISTER",["Resource Type","Current Suffix","Expected Broadcast File","Resources Using","Examples","Status","Required Action","Approval Gate"],suffixRows,{statusCol:6,freezeCols:2});
widths(templateSheet,[16,28,42,14,52,14,46,34]);

const appSheet=baseSheet("App Register","APP, EMBED AND INTEGRATION REGISTER",["App / Integration","Blueprint Requirement","Current Evidence","Status","Acceptance / Next Action","Approval Gate"],apps,{statusCol:4,freezeCols:1});
widths(appSheet,[28,36,48,14,52,40]);

const schemaSheet=baseSheet("Schema Register","HEADING, METADATA AND STRUCTURED-DATA REGISTER",["Template / Object","Theme / State","URL","Expected","Observed","Status","Next Action","Evidence"],schemaRows,{statusCol:6,freezeCols:2});
widths(schemaSheet,[24,20,38,48,48,14,48,38]);

const launchSheet=baseSheet("Launch Register","LAUNCH, ROLLBACK AND MONITORING REGISTER",["Stage","Timing","Control / Check","Owner","Status","Approval / Rollback Gate","Next Action","Evidence"],launchRows,{statusCol:5,freezeCols:2});
widths(launchSheet,[16,18,52,24,14,42,50,38]);

for(const sh of [master,urlSheet,conflictSheet,templateSheet,appSheet,schemaSheet,launchSheet]){
 const used=sh.getUsedRange(); used.format.wrapText=true; used.format.verticalAlignment="top";
}

const previewSpecs=[
["Master Checklist","A1:L24"],["URL Register","A1:P24"],["Conflict Register","A1:J20"],
["Template Register","A1:H24"],["App Register","A1:F14"],["Schema Register","A1:H16"],["Launch Register","A1:H18"]
];
const previews=[];
for(const [sheetName,range] of previewSpecs){
 const img=await wb.render({sheetName,range,scale:1,format:"png"});
 const file=path.join(outputDir,sheetName.toLowerCase().replaceAll(" ","_")+".png");
 await fs.writeFile(file,new Uint8Array(await img.arrayBuffer())); previews.push(file);
}
const inspect=await wb.inspect({kind:"table",range:"Master Checklist!A1:L18",include:"values,formulas",tableMaxRows:18,tableMaxCols:12});
console.log(inspect.ndjson);
const errors=await wb.inspect({kind:"match",searchTerm:"#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",options:{useRegex:true,maxResults:300},summary:"final formula error scan"});
console.log(errors.ndjson);

const outputPath=path.join(outputDir,"Eltee_Broadcast_Migration_Control.xlsx");
const xlsx=await SpreadsheetFile.exportXlsx(wb); await xlsx.save(outputPath);
console.log(JSON.stringify({outputPath,previews,rows:{checklist:checklist.length,urls:urlRows.length,conflicts:conflicts.length,templates:suffixRows.length,apps:apps.length,schema:schemaRows.length,launch:launchRows.length}}));
