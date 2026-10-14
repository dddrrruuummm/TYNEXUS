# Delivery Verification

Checked October 14, 2026. Local preview: http://localhost:3024/. Production domain configuration: https://tynexus.com. No GitHub push, Vercel deployment, DNS change, or outgoing inquiry email was performed.

## Build and SEO
- `npm run build` passes compilation, strict TypeScript and static export.
- Original build generated seven public pages, 404, favicon, sitemap and robots. The pricing revision adds an eighth route; see revision verification below.
- Original sitemap contained seven URLs, all on https://tynexus.com, with no example or localhost URLs.
- Browser checks confirmed page-specific canonical links and exactly one H1 per route.
- Organization schema uses the actual legal name, domain and public principal office. The latest privacy revision removes foundingDate; registration identifiers are not present. LocalBusiness walk-in claims are not appropriate or asserted.

## Browser checks using permitted tools
- In-app browser controlled exclusively through cua_repl. No bundled Playwright, skill browser-inspector, external binary engine, hooks or telemetry were run.
- Home and all six inner routes checked at 1440px and 390px; no measured horizontal overflow or loaded broken images.
- Home and catalog additionally checked at 320px, 768px and 1920px; no measured horizontal overflow.
- Catalog frames have the same 4:3 geometry across all eight entries: 350x262.5 at 390px, 288x216 at 320px, 338x253.5 at 768px, approximately 514.7x386 at 1920px.
- Buy servers / Rent compute / Lease a server switches the brief requirements and appropriate inquiry URL.
- Filters return 2 Servers, 2 Compute & leasing, 4 Infrastructure and 8 All. Search with no matches displays an empty state and clearing filters restores the catalog.
- Mobile navigation opens, navigates and closes.
- Cooling inquiry prefills Cooling systems and Infrastructure supply.
- Required contact fields prepare an email draft directed to contact@tynexus.com with the correct name, company, email, interest and requirements. The site explicitly says no email has been sent yet. Test values were not transmitted.
- Brief download completed. Editing the form after preparation hides the old draft, preventing stale content from being sent.
- No app console errors were present in the inspected browser logs.
- Google Maps link uses the registered principal office. Embed URL and loaded frame contain English locale parameters; the external embed is lazy and can finish loading after a full-page screenshot. Do not treat a placeholder capture as proof of uninterrupted third-party availability.

## Visual review and corrections
Desktop and phone screenshots reviewed for homepage, equipment catalog and contact. Long phone headings were shortened to avoid awkward isolated final words. The blade-server photo was moved to Compute capacity; Server cabinets now uses an actual full-height cabinet photograph. Generated cooling cabinet retains the whole object. There are eleven unique WebP images by SHA-256, with no repeated promotional asset between homepage and catalog.

Compared with recent FUSION SPHERE and NB MAX design evidence: TY Nexus uses the compressed Anton display, forest/citron utility surfaces, a distinct bridge mark and ownership selector. It does not use Fusion Sphere's intersecting spheres, cobalt product still-life or apparel categories, or NB MAX's Unbounded lettering, red material brief and staggered material archive. Full-bleed photography remains a standing client requirement, not a reused industry template.

## Before public release
Confirm real inventory/models, company prices, delivery/support terms, email delivery and domain control. Review legal copy against actual practices. Photographs are category/editorial imagery and do not prove facility ownership, manufacturer authorization or current stock. A regional example telephone was restored by the owner's subsequent request; replace it with a verified company line before launch.

## Earlier pricing and privacy revision verification
- Owner's latest instruction retains the public business address and Google Maps. Registration number, incorporation date and non-working preview phone are removed from public pages, configuration and Organization schema. Private original PDFs, tax identifiers and personal records are not in the delivery folder.
- Official Lambda single-GPU instance and OVHcloud US deals pages checked October 14, 2026. GPU-hour benchmarks and hosted CPU-server monthly starting prices are separated; neither is represented as TY Nexus stock, a partnership, a purchase price or a confirmed company offer. Written quote caveats appear in Pricing, homepage and Terms.
- Final production build passes compilation, TypeScript and static export. Sitemap now has eight real-domain URLs, including /pricing/.
- A fresh export was generated after preserving stale duplicate export artifacts in a local temporary backup outside the delivery project. The final out directory has no registration identifier, foundingDate or preview number matches.
- All eight routes checked in the permitted browser at 1440px and 390px: one H1, correct canonical, address/map links retained, no hidden registration/founding data, no measured page overflow or completed broken images.
- Home and Pricing also checked at 900px, 768px and 320px without page overflow. Pricing header at 820px has separated non-overlapping navigation and action bounds.
- Estimator: default A6000 x 100 hours = $109.00; A100 x 100 = $199.00; H100 x 200 = $658.00; H100 x 744 = $2,447.76. Zero and fractional hours produce an invalid-input message instead of a price. Select and number inputs have explicit accessible labels.
- Discuss compute opens a contact brief prefilled with Compute rental and the correct arrangement. Address and English Google Maps embed URL remain unchanged. Mobile Pricing navigation opens, navigates and closes. No inquiry was sent.
- Desktop and phone pricing screenshots reviewed, saved locally outside the upload copy. Table records remain readable on phones; the budget heading was shortened. Inspected browser error logs are empty. Temporary viewport override was reset.
- No GitHub push, Vercel deployment, DNS change or automated recurring price refresh was performed.

## Latest GPU and data-center revision
- Four distinct GPU-based server directions added: RTX 5090, B300, RTX PRO 6000 Blackwell Server Edition and H200. All have rental and whole-server purchase inquiry actions; purchase prices and exact host configurations remain quote-specific.
- NVIDIA official pages/documentation checked for GPU memory and naming; Runpod public Pods page checked for the four additional per-GPU hourly references. No whole-server rent, manufacturer certification, inventory guarantee or provider partnership is inferred.
- Four independent server photographs and a separate data-center background generated with the built-in image tool, inspected and compressed to local WebP. Exact prompts in docs/generated-gpu-assets.json. All 16 WebP files have unique SHA-256 hashes. Four new product frames are 4:3; no reused homepage imagery.
- Compute route has a sticky full-page data-center backdrop with a dark readability scrim; other pages keep the existing corporate identity. Browser scrolling to lower server content confirmed the backdrop remains at viewport top. Secondary full-width bands were lightened so the background remains visible.
- Pricing checked at 1440, 1920, 1280, 1024, 768, 390 and 320px: no measured page overflow, exactly one H1, all four product images loaded, equal image dimensions within each viewport. Desktop 1440px frames are 316.5x237.375; phone 390px frames are 350x262.5; 320px frames are 288x216.
- All eight new product actions checked in the permitted browser: each prefills the exact model and either Compute rental or Server purchase. Query-supplied arrangements are allowlisted; no inquiry email was sent.
- All four new calculator models checked at 100 GPU hours: RTX 5090 $119.00, B300 $899.00, RTX PRO 6000 $249.00, H200 $529.00. 745 hours is rejected. Existing GPU rates remain available in the seven-option selector.
- Owner requested a generated registered-region phone after the earlier removal. +1 (801) 555-0168 now appears clearly marked as a non-working example in Contact and footer, with email as the actual inquiry channel. No click-to-call link or Organization telephone is generated for it. Replace through the verified-phone environment variable before launch.
- Home, Services, Equipment and Contact checked at 1440, 390 and 320px: one H1, correct canonical, no page overflow, example phone visible with no calling link. Address and maps retained. Inspected app error logs are empty.
- Final production build passes compilation, strict TypeScript and static export. Registration identifier, foundingDate and the prior example phone are absent from public source and final export. Eight-route sitemap remains on https://tynexus.com.
- Desktop/phone screenshots reviewed. No checkout, payment, account, database, GitHub push, Vercel deployment, DNS change, private document upload, external design engine or telemetry added.

## Company, Solutions and Equipment revision
- Equipment contains twelve entries: four GPU systems, two general server directions, two compute/leasing directions and four infrastructure directions. GPU images are separate accelerator illustrations, not the whole-server photographs used on Pricing.
- Six independently generated assets were visually inspected and optimized: four accelerators plus two unique inner-page environment photographs. Prompts and original filenames are in docs/generated-catalog-assets.json. All 22 WebP files have distinct SHA-256 hashes.
- Company uses a full-bleed photographic brand opening, connected workload-to-rack diagram, editorial business-scope list and public business facts. Solutions uses rear-connectivity photography, a configuration-brief builder, commercial comparison, rack requirements and a three-stage workflow. No unverified staff, customers, facilities, stock or certifications added.
- Company, Solutions and Equipment checked through permitted browser tools at 1440, 1280, 1024, 768, 390 and 320px: one H1, correct canonical, no measured horizontal overflow or completed broken images. Desktop and phone full-page screenshots reviewed for overlap and wrapping.
- All twelve catalog frames have matching 4:3 geometry: 316.5x237.375 at 1440px, 276.5x207.375 at 1280px, 466x349.5 at 1024px, 338x253.5 at 768px, 350x262.5 at 390px and 288x216 at 320px. All four GPU images confirmed loaded in the filtered browser view.
- Filters checked: All 12, GPU systems 4, Servers 2, Compute & leasing 2, Infrastructure 4. H200 search returns one result. No-match search shows the empty state; clearing restores the full catalog.
- All eight new Equipment rent/buy actions tested: correct canonical model and Compute rental or Server purchase arrangement reach Contact.
- Solutions builder: purchase, compute rental and physical lease generate the correct arrangement; H200 with four GPUs reaches Contact with that model/count and Server purchase. Zero, fractional, blank and over-limit quantities disable the request control and remove its navigation link. Requested quantities do not claim a supported single-node topology. No inquiry was transmitted.
- Latest owner instruction removes public phone-caption text from footer and Contact. Number and email remain; no fictitious-number calling link or schema telephone is added. Internal launch notes still require replacement with a verified reachable company line.
- Final production compilation, TypeScript and static export pass. Phone-caption text, registration identifier and foundingDate are absent from public source. Sitemap remains eight real-domain routes. Browser error logs inspected during the checks are empty.
- Screenshots saved outside the delivery folder; temporary viewport override reset. Upload copy excludes dependencies, caches, exports and private PDFs. No online deployment or repository push performed.
