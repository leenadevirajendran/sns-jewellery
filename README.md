# SNS Jewellery — Frontend (HTML + CSS only)

Pages: index, shop, product, cart, checkout, about, contact.
Styles: `css/style.css` (tokens at the top: colours, type scale, spacing, motion).
Artwork: `assets/img/p01–p12.svg` are placeholder illustrations — replace with real product photos (4:5 ratio, same file names or update the `<img>` paths).

## Before going live — please confirm
- Prices, MRPs and product names are SAMPLE data.
- WhatsApp number is set to +91 7010429189 (same as the GPay number). Change in the `wa.me/917010429189` links if different.
- Add business address / email in the footer and contact page when available.
- Shipping, return and exchange policies are not stated yet — add once decided.

## For the PHP phase
- Logo: assets/img/logo.png (transparent-background version of the supplied logo, artwork unaltered).
- Header/footer are identical on every page -> move into `includes/header.php` and `footer.php`.
- Product cards (`.card`) are one repeatable block -> loop over DB rows.
- Forms already have `name` attributes and `method="post"`; set `action` to your PHP handlers.
- Shop filter chips are CSS-only (radio buttons); switch to `?cat=` queries server-side.
- Cart/qty buttons, gallery and menu are CSS-only; add JS or PHP logic later.

## Design notes (v3)
- Fonts are bundled locally in assets/fonts (Playfair Display, Manrope, Great Vibes) - no external font requests.
- Banner: assets/img/banner-art.jpg and banner-silk.jpg are crops of the supplied reference image; swap with final photography at the same ratio (857x927 for banner-art).
- Navy tint tokens (--blue-50 ... --blue-900) are at the top of css/style.css; gold remains the accent.
- Categories follow the reference site's structure (Earrings, Haram, Necklace, Bangles, Chains, Accessories, Combo Sets).
- Wishlist: js/site.js (localStorage) powers the hearts, header counter and wishlist.html. In the PHP phase, move the saved list to the user account/database; SNS_PRODUCTS at the top of js/site.js is sample data to replace.

## Round 5 — typography, header, catalogue
- Fonts: Cormorant Garamond (headings, category titles) + Lato (nav, products, prices, buttons, UI). Banner keeps Playfair Display / Manrope / Great Vibes and its original colours (scoped in `.banner`).
- Brand tokens: sapphire #243B73, champagne gold #C5A052, ivory #FAF8F3, charcoal #29251F (end of `css/style.css`).
- Header: logo left, navigation centre-right, actions right. Mega menu has six category columns + combo-set feature.
- Categories follow jasvikcreations.com (Earrings, Haram, Bangles, Necklace, Daily Wear Chain, Accessories, Combo Set); shop filters are generated into `css/filters.css` and deep-linked, e.g. `shop.html#s-earrings-jhumka`.
- Scroll reveals use IntersectionObserver (`js/site.js`); mobile menu staggers in and closes on link tap.
- Product names, SKUs and prices are placeholders to replace from the database.

## Round 6
- Fonts: Playfair Display (headings, same as banner) + Inter (nav, products, UI).
- CaratLane-style category dropdowns: Shop styles / Curated by / two image cards, one panel per category.
- Added two real products (p21, p22: Panchaloham polish screw back studs) in Earrings > Stud, material Panchalogam. More photos: drop into assets/img and add rows to RAW in build_site.py.
- Footer logo is a white version on navy, no background.

## Round 7
- Display font is now Marcellus (all headings outside the banner); the banner keeps Playfair Display + Great Vibes. Body/UI stays Inter.
- "SNS Jewellery" signature in Our Story uses Cormorant Garamond italic.
- Our Story gallery: arch-framed cards with gold inner border, captions, hover lift and a floating "100% honest imitation" seal.

## Round 8
- Our Story gallery: hero arch + two matching ivory product cards (framed photo, caption below, arrow).

## Round 9
- Mobile header: logo left, wishlist/cart/menu pinned right; no horizontal overflow checked at 360/390/768 on all pages.
- Footer logo has no hover effect.
- Category dropdown closes after a link is used and reopens only on a fresh hover.

## Round 10
- Mobile header edges now align with page content; search/account icons hidden on mobile; burger glyph lines up with right content edge.
