# TY Nexus Commerce Inc

English corporate website for server sales, compute rental, server leasing, and data-center infrastructure. Business scope confirmed by the owner; business address retained with permission. Unnecessary registration details are not public. Domain: https://tynexus.com. Contact: contact@tynexus.com.

## Preview and build
```sh
npm install
npm run dev -- --port 3024
npm run build
```
Next.js static export writes the website into `out`. No database, accounts, shopping cart, payment flow, runtime API, or secrets are required.

## Deploy
Push the project contents to a dedicated GitHub repository, excluding `node_modules`, `.next`, `out`, `.env.local`, original company documents, and caches. Import the repository to Vercel, select Next.js and use `npm run build` with default framework settings. Add tynexus.com to Vercel and complete domain verification/DNS according to Vercel's project instructions. Submit https://tynexus.com/sitemap.xml after the real domain is live.

The sibling `TY-Nexus-Commerce-GitHub-Upload` folder is a clean delivery copy. Upload its contents to the repository root, not the whole workspace. For ongoing edits, Git is preferred over repeated drag-and-drop uploads.

## Before launch
- Replace the non-working Salt Lake City phone placeholder +1 (801) 555-0168 using `NEXT_PUBLIC_CONTACT_PHONE` before launch. Its public caption is hidden at the owner's request. Email is the actual inquiry channel; the placeholder is not included in calling links or schema.
- Review the reference pricing in `lib/pricing.ts`. These are dated competitor benchmarks, not TY Nexus quotations. Recheck official sources before changing the date. Confirm company-specific rates, inventory and contract scope before converting references into actual offers.
- Confirm email delivery, domain ownership, operational practices, and the accuracy of equipment/service descriptions.
- Photographs do not imply owned facilities, current inventory, a specific model, or manufacturer authorization. Internal provenance: `docs/photo-sources.json`, `docs/ASSETS.md`.
- Privacy and terms should be reviewed against actual business practices before release.

## Customize
`lib/site.ts`: name, domain, email, phone, address, service modes and twelve equipment directions. `lib/gpu-servers.ts`: four GPU-based server directions, per-GPU memory, new images and source links. `lib/pricing.ts`: dated USD benchmarks and official source links. `public/images`: locally hosted, compressed and independently replaceable photography. Equipment uses separate accelerator images; Pricing uses four whole-server images. Company and Solutions each have a unique environment photograph. `docs/generated-gpu-assets.json` and `docs/generated-catalog-assets.json`: exact generation prompts and filenames. `components/solution-planner.tsx`: a brief builder that forwards GPU direction, requested count and arrangement to Contact without placing an order. `public/logo.svg` and `app/icon.svg`: custom brand icon. `app/globals.css`: art direction and responsive design. `PRODUCT.md` / `DESIGN.md`: confirmed business context and visual decisions.

The contact form prepares a draft in the visitor's email application, with a downloadable copy as a fallback. No website database stores the inquiry, and no message is claimed to be sent automatically. WhatsApp is not configured because no verified account was supplied. The registered principal office map is not a data-center location.
