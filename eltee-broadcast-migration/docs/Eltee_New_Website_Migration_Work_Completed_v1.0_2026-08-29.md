# Eltee Sydney New Website Migration: Work Completed to Date

**Version:** 1.0  
**Status date:** 29 August 2026  
**Migration:** Shopify Sense to Broadcast  
**Current live theme:** Broadcast `155379237001`  
**Rollback theme:** Sense `152278204553`  
**Primary markets:** `elteesydney.com.au` and `elteesydney.com`  
**Brand position:** **Performance Periodwear That Came to Play**

## 1. Executive summary

The New Website migration has progressed from planning and draft configuration through controlled publication. Broadcast theme `155379237001` is now live. Sense theme `152278204553` remains unpublished and available for rollback.

The release preserved existing URLs by default, retained the primary `.com.au` and `.com` market structure, introduced age-inclusive brand positioning, repaired material schema defects, and passed immediate public-route and rendered-HTML smoke tests. A paid post-launch Shopify order, `#51906`, confirms that a customer completed the purchase flow after publication.

The migration did **not** activate the proposed Swim redirect, bulk redirect register, new collection URLs, DNS changes or material tracking-platform changes. Those items remain separate post-launch work with their own approval and SEO gates.

## 2. Current operational state

### Completed and live

- [x] Broadcast `155379237001` published as the live Shopify theme.
- [x] Sense `152278204553` retained as the immediate rollback theme.
- [x] Final Sense snapshot captured at `working/theme_snapshot/sense-152278204553-final-2026-08-29` with 549 files.
- [x] Both public domains, Shop All, UnderSwim, the Starter Bundle and cart returned HTTP 200 immediately after publication.
- [x] Market-correct self-canonicals and intended H1s passed representative live checks.
- [x] Representative homepage, collection and product JSON-LD remained present after publication.
- [x] Stain Slayer is retained for Australia and removed from customer-facing `.com` navigation.
- [x] Shopify order `#51906` completed and is paid.

### Monitoring, not confirmed complete

- [ ] Confirm GA4 receives Shopify transaction ID `7771369111689` for order `#51906` after normal processing.
- [ ] Confirm the corresponding Google Ads purchase conversion independently.
- [ ] Confirm the corresponding Meta Purchase event independently.
- [ ] Review Search Console Page Indexing, Coverage and Enhancements after Google recrawls Broadcast.
- [ ] Monitor new 404s, canonical changes and redirect reports before approving any URL consolidation.

## 3. Governance, source control and release protection

### Completed

- [x] Established Broadcast as the confirmed theme target, overriding Symmetry-specific blueprint provisions only where they conflicted.
- [x] Established age-inclusive master positioning and retained teen-specific content only where it serves a genuine segment and search purpose.
- [x] Maintained a source-conflict register, decision queue, implementation checklist, current go-live checklist, evidence records and rollback instructions.
- [x] Preserved production approval gates throughout the draft build.
- [x] Created version-controlled implementation and evidence files rather than overwriting the source material.
- [x] Captured controlled theme snapshots before schema and other code changes.
- [x] Kept redirects, DNS, shared product/page content, tracking changes and app reconfiguration outside the theme-publication action unless separately approved.

### Governing decisions

- Theme: Broadcast.
- Master positioning: age-inclusive performance periodwear.
- Positioning line and homepage H1: `Performance Periodwear That Came to Play`.
- Native Broadcast settings and sections first.
- Custom Liquid permitted only for the approved minimal schema and semantic fixes where Broadcast had no adequate native control.
- One visible review system and one authoritative review-schema source.
- Byte retained on Sense only and excluded from Broadcast.
- Generic collection `ItemList` schema intentionally not recreated.

## 4. Baseline, evidence and SEO protection

### Completed baseline work

- [x] Recorded live Sense, Broadcast draft and backup theme identifiers.
- [x] Exported Shopify products, variants, collections, pages, blogs, navigation and redirect evidence.
- [x] Captured Google Search Console 90-day performance data.
- [x] Captured 16-month Search Console page and query data for `.com.au` and `.com`, with `.com.au` treated as primary.
- [x] Captured Search Console indexing, external links and internal links evidence for both domains.
- [x] Recorded Shopify and GA4 organic performance for settled comparison periods.
- [x] Created URL, redirect, priority-page and metadata-continuity registers.
- [x] Classified Search Console 404, redirected, alternate-canonical and crawled-not-indexed examples.
- [x] Verified current Shopify Markets routing and representative canonical/hreflang behaviour.
- [x] Confirmed active markets use clean domains rather than `/en-*` subfolders.

### SEO conclusions implemented

- Existing handles were preserved by default.
- Navigation and visual redesign were not treated as reasons to rename URLs.
- Teens remains at `/collections/teen-period-underwear` as a secondary SEO destination, subject to ongoing performance review.
- The indexed Swim destination was retained through launch. The proposed new canonical Swim URL and redirect remain a separate evidence-led release.
- The discontinued First Period Kit family has an approved direct equivalent in the functioning Starter Bundle, but redirect activation remains controlled through the redirect register.
- Priority pages retained self-canonicals, intended H1s and indexable output during representative Sense-to-Broadcast comparison.

## 5. Brand, global settings and homepage

### Global settings completed

- [x] Approved typography and colours retained.
- [x] Logo and favicon configured.
- [x] Cart set to drawer with order notes enabled.
- [x] Currency code displayed and market currency behaviour tested.
- [x] Predictive search filters disabled as approved.
- [x] Facebook set to `facebook.com/eltee.sydney`.
- [x] Instagram set to `instagram.com/eltee.sydney`.
- [x] TikTok set to `tiktok.com/@eltee.sydney`.
- [x] YouTube, X/Twitter, Pinterest and Snapchat left blank.
- [x] Footer and market-link defects corrected through the approved controlled change.

### Homepage completed

- [x] Tori Training video retained as the hero asset.
- [x] `Performance Periodwear That Came to Play` implemented as the single homepage H1.
- [x] H1 presentation reduced against imagery using the approved CSS while retaining semantic H1 output.
- [x] Native text underlay enabled after contrast sampling found white text failed on pale and oversized-white-text video frames.
- [x] Desktop, mobile and tablet hero behaviour sampled, including poster and fallback presence.
- [x] The Starting Line-Up featured as the core range and linked to `/collections/the-starting-line-up`.
- [x] Bundle promotion retained as a separate route to `/collections/bundle-save`.
- [x] Real Blood Demo proof section added after the range tabs with one H2, approved copy, existing video and Shop Periodwear CTA.
- [x] `TESTED FOR SAFETY` added as a fourth native homepage proof column using the approved text: `No PFAS. No nasties. OEKO-TEX® STANDARD 100 certified.`
- [x] Homepage safety-column upload and read-back verified on both public domains with one homepage H1 retained.

### Visual boundary

Direct screenshot inspection of the newest homepage safety column was blocked by browser security availability. Rendered HTML confirms four desktop columns, one mobile column, exact text and one H1. Visual inspection at usable desktop and mobile sizes remains `UNVERIFIED`.

## 6. Collections and navigation

### Completed

- [x] Shop All retained at `/collections/all`.
- [x] The Starting Line-Up retained at `/collections/the-starting-line-up`.
- [x] Bundles retained at `/collections/bundle-save`.
- [x] Teens retained at `/collections/teen-period-underwear`.
- [x] Existing Swim destination retained through launch to protect current equity while the replacement remains unfinished.
- [x] Navigation migration map created with safe launch links separated from future collection links.
- [x] AU and US navigation requirements separated.
- [x] Stain Slayer removed from `.com` customer-facing navigation while remaining available on `.com.au`.
- [x] Collection descriptions corrected so the live Broadcast templates render dynamic collection content rather than literal placeholder syntax.
- [x] Collection breadcrumb styling aligned with product-page breadcrumbs.

### Deferred

- [ ] Build and approve the new Active collection.
- [ ] Build and approve the new Everyday collection.
- [ ] Build and approve the new Accessories collection.
- [ ] Complete the replacement Swim collection before linking or redirecting to it.
- [ ] Run an SEO mini-check before any new collection enters navigation: unique intent, final URL, one H1, useful copy, title/meta, canonical/indexability, internal links and working CTA.

## 7. Product templates and purchase flow

### Completed

- [x] Active product template assignments inventoried and mapped into Broadcast.
- [x] Product galleries standardised with the approved desktop gallery and mobile slider behaviour.
- [x] All 17 publicly available product pages passed the active product H1 sweep.
- [x] Representative W18 products, variants, cart and checkout hand-off tested on desktop and mobile.
- [x] The Starter Bundle was confirmed buyable in Broadcast before approving it as the First Period Kit replacement destination.
- [x] Essential Upsell selected as the controlled cart recommendation solution during the draft build, with the duplicate native cart element hidden during testing.
- [x] Klaviyo rating summary retained near the product title and the full review section retained below product information.
- [x] Representative UnderSwim output confirmed one Klaviyo AggregateRating source, 4.71 from 227 reviews at the time of testing.
- [x] Quantity-label, 404 H1, swatch/link and footer market-link defects corrected through scoped changes and verified.
- [x] Sold-out state, Stoq notification control, empty cart, pagination, search, sorting and W18 filters tested.
- [x] `TESTED FOR SAFETY` added to all 13 product templates used by the public catalogue using native Broadcast blocks only.
- [x] All 17 public product URLs on both domains passed the safety-block rendered-HTML check with one H1.

### Product safety-block visual boundary

Direct screenshot inspection of the newest product safety blocks remains `UNVERIFIED`. Public rendered HTML confirms the full-width wrapper, left-aligned structure, shield icon, exact claim, correct block position and one H1. Exact pre-change files are retained for rollback.

### Deferred commerce work

- [ ] Re-test Essential Upsell after launch and confirm no duplicate recommendation surface.
- [ ] Complete Sami Wholesale through its supported Broadcast route without compromising the standard retail cart.
- [ ] Complete post-launch product-page demo/video improvements.

## 8. Pages, landing pages and content restoration

### Completed

- [x] Core page, collection, product, blog/article and landing-page structures mapped for Broadcast.
- [x] Teen landing page retained as a genuine segment-specific SEO destination within the age-inclusive master brand.
- [x] Demo Videos retained as an indexable page with one H1, active product links and no Stain Slayer or placeholder content.
- [x] UnderDance demo mobile height corrected using a native Broadcast setting.
- [x] Barb contact destinations corrected to `/pages/contact-us#barb-chat` across 13 active product-template families.
- [x] `Tips to Ensure a Leak-Free Wear` restored on the live Broadcast template using native sections and the retained Sense content source.
- [x] The fit guide restoration preserved one H1, five H2s, two H3s, instructional images, product links and the current Barb contact route.
- [x] Desktop and 390 px mobile fit-guide checks passed with no horizontal overflow.

### Deliberately not copied

The old fit template's Byte breadcrumb block, duplicate Klaviyo review modules and featured-blog carousel were not copied because they were surrounding theme modules, not the missing guide content.

## 9. Structured data and schema

### Completed

- [x] Captured and compared representative Sense and Broadcast JSON-LD.
- [x] Repaired Broadcast Article JSON-LD so `mainEntityOfPage.@id` uses the article URL and the image uses the actual article image.
- [x] Extended Broadcast's existing breadcrumb snippet into the single owned visible breadcrumb and `BreadcrumbList` source.
- [x] Added controlled breadcrumb render points for Product, Collection, standard Page and Article templates.
- [x] Kept breadcrumbs off the homepage.
- [x] Used fixed age-inclusive hierarchy labels and market-local URLs.
- [x] Prevented the product breadcrumb from being determined by the referring collection.
- [x] Verified one visible breadcrumb, one matching `BreadcrumbList`, one H1 and valid JSON on representative Product, Collection, Page and Article templates.
- [x] Verified `.com` breadcrumb URLs do not leak `.com.au` destinations.
- [x] External Rich Results and Schema.org validation passed for representative product and article output with no reported errors or warnings.
- [x] Confirmed one review-schema source on the representative UnderSwim product.
- [x] Confirmed no competing Product, Review, FAQ or Breadcrumb identity in the representative duplicate-schema check.
- [x] Chose not to recreate Sense's generic collection `ItemList`, because it was not supported by evidence as a required ecommerce rich-result feature.

### Schema rollback

Exact rollback instructions are held in `theme-backups/2026-08-28/BROADCAST_SCHEMA_CODE_ROLLBACK_v1.0.md`.

## 10. Apps, consent, tracking and market behaviour

### Completed or verified

- [x] CodeUp disabled in Broadcast and re-checked in Shopify.
- [x] Barb embed copied into Broadcast and current customer-facing routes corrected.
- [x] Newsletter ownership assigned to Klaviyo form `VmgzDh`; native Broadcast newsletter blocks remain hidden.
- [x] Klaviyo list-to-flow hand-off and the four-message Welcome sequence audited.
- [x] `.com` pre-choice and decline-and-reload consent behaviour tested without clearing browser storage.
- [x] AU/US domain routing, representative canonicals, reciprocal alternates, currencies, cart subtotal and checkout controls tested.
- [x] Stain Slayer market exclusion verified on the live `.com` HTML.
- [x] First customer order after publication confirmed paid in Shopify.

### Outstanding

- [ ] Confirm order `#51906` independently in GA4, Google Ads and Meta after normal processing.
- [ ] Resolve consent-aware GA4 `page_view` and `user_engagement` measurement without duplicating ecommerce events.
- [ ] Resolve the supported privacy-policy link and persistent cookie-preference route.
- [ ] Complete Meta browser/server deduplication and CAPI quality verification.
- [ ] Complete Simprosys and Google Ads transaction/value/currency validation through their supported paths.
- [ ] Complete the Barb runtime migration and acceptance checks separately from the theme release.

## 11. Redirects and URL consolidation

### Completed preparation

- [x] Baseline of 413 live Shopify redirects reconciled.
- [x] Eighty-four redirect-chain candidates expanded and classified.
- [x] No loops found; maximum exported chain length was five hops.
- [x] Deduplicated Shopify-format draft prepared with 66 approval-ready rows: 54 creations and 12 updates to exact existing redirect IDs.
- [x] Redirect pre-activation integrity audit completed.
- [x] SwimSync target corrected to the exact active product route.
- [x] Historical `/en-*` sources and clean final targets assessed.

### Not actioned at theme launch

- No bulk redirect import was uploaded.
- No Swim redirect was enabled.
- No redirect was changed merely because Broadcast was published.
- The 19 homepage chains, five 404 chains, old bundle chain and blocked new Swim rule remain subject to final target and production approval.

## 12. Accessibility, responsive and edge-state QA

### Completed

- [x] Desktop, 390 px mobile and 768 × 1024 tablet representative checks completed across priority templates.
- [x] Homepage video poster/fallback and settled-frame readability checked.
- [x] One-H1 output confirmed across representative templates and all active public product pages.
- [x] No page-level horizontal overflow found in the representative tablet and restored fit-page checks.
- [x] Skip-to-content and nested-menu keyboard behaviour diagnosed and corrected through the approved route.
- [x] Empty cart, genuine sold-out variant, pagination, search results, no-results behaviour, sorting and size filtering tested.
- [x] Seventy-five-request placeholder sweep found no visible placeholders or broken images on reachable Broadcast resources.
- [x] Contact form structure, labels and empty-submit validation passed without sending a customer-facing test message.

### Remaining QA

- [ ] Visual screenshot inspection of the newly added homepage and product safety blocks.
- [ ] Successful Contact form delivery test using an explicitly approved test message.
- [ ] Ongoing post-launch desktop, mobile, keyboard, contrast, alt-text and fallback checks as live content changes continue.

## 13. Launch and immediate post-launch result

### Publication

- Broadcast `155379237001` was published on 29 August 2026.
- Sense `152278204553` remains unpublished for rollback.
- Publication did not change redirects, DNS, Markets, product data, app configuration or tracking configuration.

### Smoke-test result

- Both homepages returned HTTP 200.
- Shop All, UnderSwim, Starter Bundle and cart returned HTTP 200.
- Homepage, priority collections and products retained intended H1s and self-canonicals.
- The homepage Real Blood section and structured-data scripts were present.
- Stain Slayer was absent from `.com` navigation and retained in Australia.
- No representative indexable route returned a page-level robots meta block.

### Commercial confirmation

Shopify order `#51906` completed and is paid. This confirms the post-publication storefront could accept a real customer order. It does not by itself confirm that GA4, Google Ads and Meta processed exactly one matching purchase event.

## 14. Live post-publication changes completed

- [x] Restored the missing `Tips to Ensure a Leak-Free Wear` guide in the live Broadcast template.
- [x] Added `TESTED FOR SAFETY` to the live homepage using one native proof column.
- [x] Added the same approved safety claim to the 13 live product-template families used by the public catalogue.
- [x] Kept these changes isolated to named theme templates, with pre-change backups, exact uploads, direct Shopify read-back and public rendered checks.

## 15. Remaining work and release boundaries

### Priority monitoring

- [ ] Close real-order tracking verification for Shopify order `#51906`.
- [ ] Review Search Console after Google recrawls the new theme.
- [ ] Monitor errors, orders and organic performance at 24 hours, 72 hours, 7 days, 14 days and 28 days.

### Deferred site work

- [ ] Build Active, Everyday and Accessories collections with complete SEO fields and internal links.
- [ ] Complete the replacement Swim collection and approve any canonical/redirect change separately.
- [ ] Re-test Essential Upsell and complete Sami Wholesale.
- [ ] Complete privacy, Simprosys, Meta CAPI and tracking-owner work through supported routes.
- [ ] Review Erina, Keep Girls in the Pool and product-page video improvements.
- [ ] Apply shared SEO-copy, image-alt and catalogue normalisation only under an approved controlled-content window.

### Stop rules

- Do not activate the Swim redirect until the replacement collection is complete, useful, indexable and validated.
- Do not infer Google Ads or Meta conversion success from Shopify or GA4.
- Do not remove Sense until the monitoring window closes and rollback retirement is approved.
- Do not bulk-edit shared products, pages, metadata, redirects, apps, tracking or Markets without their separate approval and read-back checks.

## 16. Rollback position

If a material purchase, domain, indexability, navigation or tracking defect appears:

1. Republish Sense `152278204553`.
2. Preserve the affected live evidence and timestamps.
3. Investigate and repair Broadcast outside production.
4. Re-run the relevant purchase, domain, SEO, schema and tracking checks before republishing.

Component-level rollback files are retained for the Article/breadcrumb implementation, collection descriptions, homepage safety column, product safety blocks and restored fit page.

## 17. Principal evidence and control documents

- `Eltee_Broadcast_Go_Live_Checklist_CURRENT_v1.25_2026-08-29.md`
- `BROADCAST_PUBLICATION_AND_SMOKE_TEST_EVIDENCE_v1.0_2026-08-29.md`
- `SOURCE_CONFLICT_REGISTER_v1.11_2026-08-29.md`
- `BROADCAST_SCHEMA_IMPLEMENTATION_EVIDENCE_v1.0_2026-08-28.md`
- `FINAL_SENSE_BACKUP_EVIDENCE_v1.0_2026-08-29.md`
- `BROADCAST_POST_LAUNCH_ORDER_51906_TRACKING_CHECK_v1.0_2026-08-29.md`
- `BROADCAST_US_STAIN_SLAYER_NAV_FIX_EVIDENCE_v1.0_2026-08-29.md`
- `BROADCAST_REAL_BLOOD_HOMEPAGE_IMPLEMENTATION_EVIDENCE_v1.0_2026-08-29.md`
- `BROADCAST_COLLECTION_DESCRIPTION_RENDERING_IMPLEMENTATION_EVIDENCE_v1.0_2026-08-28.md`
- `FIT_PAGE_CONTENT_RESTORE_EVIDENCE_v1.0_2026-08-29.md`
- `HOMEPAGE_TESTED_FOR_SAFETY_COLUMN_EVIDENCE_v1.0_2026-08-29.md`
- `PRODUCT_PAGE_TESTED_FOR_SAFETY_BLOCK_ROLLOUT_EVIDENCE_v1.0_2026-08-29.md`
- `REDIRECT_CHANGE_REGISTER_v1.15_2026-08-28.md`
- `SHOPIFY_REDIRECT_IMPORT_DRAFT_CONTROL_v1.1_2026-08-28.md`
- `VERSION_REGISTER.md`

## 18. Overall assessment

The Sense-to-Broadcast theme migration is complete and live. The core release objective was achieved without a theme-publication redirect batch, DNS change or forced URL migration. Immediate route, H1, canonical, schema and purchase checks passed.

The project is now in post-launch monitoring and controlled improvement, not pre-launch implementation. Remaining work should be prioritised by customer impact, search evidence and tracking integrity, with the Sense rollback retained until the monitoring period is formally closed.
