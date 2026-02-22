// ─────────────────────────────────────────────────────────────
//  EmailJS Configuration
//  Credentials are loaded from .env (never hardcode them here).
//  Sign up at https://www.emailjs.com (free tier = 200 emails/month)
//
//  Setup steps:
//  1. Create account → https://app.emailjs.com/sign-up
//  2. Email Services → Add New Service → link Gmail / SMTP → copy Service ID
//  3. Email Templates → Create New Template → paste body below → copy Template ID
//  4. Account → General → Public Key → copy it
//
//  Then fill in your .env file:
//     VITE_EMAILJS_SERVICE_ID=service_...
//     VITE_EMAILJS_TEMPLATE_ID=template_...
//     VITE_EMAILJS_PUBLIC_KEY=your_public_key
//
// ─────────────────────────────────────────────────────────────
//  Recommended template body (paste into EmailJS template editor):
//  ⚠ Set "Content Type" to HTML in the template settings to render images.
//
//  Subject:  🛒 New Order — Echidna.in
//
//  New order received!
//
//  Customer:  {{customer_name}}
//  Phone:     {{customer_phone}}
//  Address:   {{customer_address}}, {{customer_pincode}}
//
//  Items:
//  {{order_items}}
//
//  Subtotal:  ₹{{subtotal}}
//  Shipping:  ₹{{shipping}}
//  TOTAL:     ₹{{grand_total}}
//
//  Placed at: {{placed_at}}
//
//  --- Customer Artwork ---
//  {{{image_html}}}
//     ↑ Triple braces = renders as HTML (shows the actual image)
//
//  Set "To Email" in the template to:  admin@iwinalbert.dev
// ─────────────────────────────────────────────────────────────

export const EMAILJS_CONFIG = {
    SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};
