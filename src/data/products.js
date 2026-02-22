export const products = [
    {
        id: 1,
        name: "Sublimation Mugs",
        tag: "Best Seller",
        description: "Full-wrap sublimation ceramic mugs — every colour pops, every detail stays sharp. Dishwasher safe and scratch-resistant, built to look stunning cup after cup.",
        specs: [
            { label: "Material", value: "Premium white ceramic" },
            { label: "Sizes", value: ["11 oz", "15 oz"], isChips: true },
            { label: "Print", value: "360° full-wrap sublimation" }
        ],
        badges: [
            { text: "Dishwasher Safe", color: "green" },
            { text: "Scratch Resistant", color: "cyan" },
            { text: "Fade-Proof Ink", color: "default" }
        ],
        delay: "0s",
        art: `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="mugPrint" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#ff6b6b" />
                <stop offset="35%" stop-color="#ffd93d" />
                <stop offset="70%" stop-color="#6bcb77" />
                <stop offset="100%" stop-color="#4d96ff" />
            </linearGradient>
            <linearGradient id="mugBody" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#e8e8e8" />
                <stop offset="100%" stop-color="#c8c8c8" />
            </linearGradient>
            <clipPath id="mugClip">
                <rect x="30" y="55" width="115" height="110" rx="8" />
            </clipPath>
        </defs>
        <!-- Mug body -->
        <rect x="30" y="55" width="115" height="110" rx="10" fill="url(#mugBody)" />
        <!-- Sublimation print on mug -->
        <g clip-path="url(#mugClip)">
            <rect x="30" y="55" width="115" height="110" fill="url(#mugPrint)" opacity=".9" />
            <!-- Cherry blossom print -->
            <circle cx="70" cy="90" r="18" fill="#fff" opacity=".25" />
            <circle cx="110" cy="130" r="22" fill="#ff6b6b" opacity=".3" />
            <path d="M55 75 Q75 60 90 80 Q75 95 55 75Z" fill="#fff" opacity=".4" />
            <path d="M100 100 Q120 85 135 105 Q120 120 100 100Z" fill="#ffd93d" opacity=".5" />
            <path d="M40 130 Q60 115 75 135 Q60 150 40 130Z" fill="#fff" opacity=".35" />
            <circle cx="88" cy="115" r="4" fill="#fff" opacity=".9" />
            <circle cx="120" cy="80" r="3" fill="#ffd93d" opacity=".9" />
            <circle cx="60" cy="135" r="3.5" fill="#ff6b6b" opacity=".8" />
            <!-- Japanese wave pattern -->
            <path d="M30 150 Q50 140 70 150 Q90 160 110 150 Q130 140 145 150" stroke="#fff"
                stroke-width="2.5" fill="none" opacity=".5" />
            <path d="M30 160 Q50 150 70 160 Q90 170 110 160 Q130 150 145 160" stroke="#fff" stroke-width="2"
                fill="none" opacity=".3" />
        </g>
        <!-- Mug highlight -->
        <rect x="32" y="57" width="30" height="108" rx="8" fill="#fff" opacity=".12" />
        <!-- Mug rim -->
        <rect x="28" y="50" width="119" height="12" rx="6" fill="#d5d5d5" />
        <rect x="28" y="50" width="119" height="12" rx="6" fill="url(#mugPrint)" opacity=".4" />
        <!-- Handle -->
        <path d="M145 80 Q175 80 175 110 Q175 140 145 140" stroke="#c8c8c8" stroke-width="12" fill="none"
            stroke-linecap="round" />
        <path d="M145 80 Q172 80 172 110 Q172 140 145 140" stroke="url(#mugPrint)" stroke-width="4"
            fill="none" stroke-linecap="round" opacity=".5" />
        <!-- Bottom -->
        <ellipse cx="87" cy="165" rx="57" ry="8" fill="#bbb" />
      </svg>
    `
    },
    {
        id: 2,
        name: "Sublimation Shirts",
        tag: "All-Over Print",
        description: "Edge-to-edge all-over print on 100% polyester. Lightweight, moisture-wicking, and built for every-day wear — your artwork covers every inch of the fabric.",
        specs: [
            { label: "Material", value: "100% polyester, 160 gsm" },
            { label: "Sizes", value: ["XS", "S", "M", "L", "XL", "2XL", "3XL"], isChips: true },
            { label: "Print", value: "All-over full surface sublimation" }
        ],
        badges: [
            { text: "Moisture-Wicking", color: "cyan" },
            { text: "Breathable", color: "green" },
            { text: "Colour-Vivid", color: "default" },
            { text: "Unisex Fit", color: "pink" }
        ],
        delay: ".07s",
        art: `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#a855f7" />
                <stop offset="50%" stop-color="#ec4899" />
                <stop offset="100%" stop-color="#f97316" />
            </linearGradient>
        </defs>
        <!-- Shirt body -->
        <path d="M60 40 L20 70 L40 85 L40 170 L160 170 L160 85 L180 70 L140 40 L120 55 Q100 65 80 55 Z"
            fill="#f0f0f0" />
        <!-- Sublimation print area -->
        <clipPath id="shirtClip">
            <path
                d="M60 40 L20 70 L40 85 L40 170 L160 170 L160 85 L180 70 L140 40 L120 55 Q100 65 80 55 Z" />
        </clipPath>
        <g clip-path="url(#shirtClip)">
            <rect x="0" y="0" width="200" height="200" fill="url(#shirtGrad)" opacity=".85" />
            <!-- Cosmic design -->
            <circle cx="100" cy="110" r="45" fill="#fff" opacity=".1" />
            <circle cx="100" cy="110" r="30" fill="#fff" opacity=".1" />
            <!-- Star burst -->
            <path d="M100 68 L105 100 L137 90 L110 108 L130 135 L100 118 L70 135 L90 108 L63 90 L95 100 Z"
                fill="#fff" opacity=".8" />
            <!-- Neon accent lines -->
            <line x1="40" y1="140" x2="160" y2="140" stroke="#fff" stroke-width="1.5" opacity=".3"
                stroke-dasharray="4 6" />
            <line x1="40" y1="150" x2="160" y2="150" stroke="#fff" stroke-width="1" opacity=".2"
                stroke-dasharray="4 6" />
            <!-- Side swosh -->
            <path d="M40 100 Q70 90 100 100 Q130 110 160 100" stroke="#fff" stroke-width="2" fill="none"
                opacity=".4" />
        </g>
        <!-- Shirt outline -->
        <path d="M60 40 L20 70 L40 85 L40 170 L160 170 L160 85 L180 70 L140 40 L120 55 Q100 65 80 55 Z"
            stroke="#ccc" stroke-width="1.5" fill="none" />
        <!-- Collar -->
        <path d="M80 55 Q100 75 120 55" stroke="#bbb" stroke-width="2" fill="none" />
        <!-- Highlight -->
        <path d="M62 42 L22 70 L40 84" stroke="#fff" stroke-width="5" opacity=".15"
            stroke-linecap="round" />
      </svg>
    `
    },
    {
        id: 3,
        name: "Sweatshirts",
        tag: "Premium",
        description: "Heavyweight fleece blend sweatshirt with full-surface sublimation print. Ribbed cuffs and hem for a snug, premium fit — print stays rich and vivid wash after wash.",
        specs: [
            { label: "Material", value: "80% polyester / 20% cotton blend" },
            { label: "Weight", value: "280 gsm heavyweight fleece" },
            { label: "Sizes", value: ["S", "M", "L", "XL", "2XL", "3XL"], isChips: true }
        ],
        badges: [
            { text: "Heavyweight Fleece", color: "default" },
            { text: "Ribbed Cuffs", color: "cyan" },
            { text: "Wash-Fast Ink", color: "green" }
        ],
        delay: ".14s",
        art: `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="sweatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#06b6d4" />
                <stop offset="50%" stop-color="#3b82f6" />
                <stop offset="100%" stop-color="#8b5cf6" />
            </linearGradient>
        </defs>
        <!-- Sweatshirt body -->
        <path d="M55 42 L10 78 L35 95 L35 175 L165 175 L165 95 L190 78 L145 42 L125 52 Q100 64 75 52 Z"
            fill="#e8e8e8" />
        <clipPath id="sweatClip">
            <path
                d="M55 42 L10 78 L35 95 L35 175 L165 175 L165 95 L190 78 L145 42 L125 52 Q100 64 75 52 Z" />
        </clipPath>
        <g clip-path="url(#sweatClip)">
            <rect x="0" y="0" width="200" height="200" fill="url(#sweatGrad)" opacity=".9" />
            <path d="M10 100 Q35 85 60 100 Q85 115 110 100 Q135 85 160 100 Q185 115 210 100" stroke="#fff"
                stroke-width="3" fill="none" opacity=".5" />
            <path d="M10 115 Q35 100 60 115 Q85 130 110 115 Q135 100 160 115 Q185 130 210 115" stroke="#fff"
                stroke-width="2" fill="none" opacity=".35" />
            <path d="M10 130 Q35 115 60 130 Q85 145 110 130 Q135 115 160 130 Q185 145 210 130" stroke="#fff"
                stroke-width="1.5" fill="none" opacity=".2" />
            <path d="M100 60 L125 100 L100 140 L75 100 Z" fill="#fff" opacity=".15" />
            <path d="M100 70 L118 100 L100 130 L82 100 Z" fill="#fff" opacity=".2" />
            <circle cx="65" cy="150" r="3" fill="#fff" opacity=".6" />
            <circle cx="75" cy="150" r="3" fill="#fff" opacity=".6" />
            <circle cx="85" cy="150" r="3" fill="#fff" opacity=".6" />
            <circle cx="115" cy="150" r="3" fill="#fff" opacity=".6" />
            <circle cx="125" cy="150" r="3" fill="#fff" opacity=".6" />
            <circle cx="135" cy="150" r="3" fill="#fff" opacity=".6" />
        </g>
        <path d="M55 42 L10 78 L35 95 L35 175 L165 175 L165 95 L190 78 L145 42 L125 52 Q100 64 75 52 Z"
            stroke="#ccc" stroke-width="1.5" fill="none" />
        <rect x="10" y="88" width="26" height="9" rx="3" fill="#bbb" opacity=".6" />
        <rect x="164" y="88" width="26" height="9" rx="3" fill="#bbb" opacity=".6" />
        <rect x="35" y="169" width="130" height="8" rx="3" fill="#bbb" opacity=".6" />
      </svg>
    `
    },
    {
        id: 4,
        name: "Hoodies",
        tag: "Fan Favourite",
        description: "Bold all-over sublimation hoodies available in pullover and zip-up styles. Kangaroo pocket, adjustable drawstring hood, and a cosy fleece interior — the full package.",
        specs: [
            { label: "Material", value: "85% polyester / 15% cotton" },
            { label: "Styles", value: ["Pullover", "Zip-Up"], isChips: true },
            { label: "Sizes", value: ["S", "M", "L", "XL", "2XL", "3XL"], isChips: true }
        ],
        badges: [
            { text: "Kangaroo Pocket", color: "default" },
            { text: "Drawstring Hood", color: "cyan" },
            { text: "Full Print Hood", color: "pink" },
            { text: "Unisex", color: "green" }
        ],
        delay: ".21s",
        art: `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="hoodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#f43f5e" />
                <stop offset="50%" stop-color="#f97316" />
                <stop offset="100%" stop-color="#eab308" />
            </linearGradient>
        </defs>
        <path
            d="M55 55 L10 85 L35 102 L35 178 L165 178 L165 102 L190 85 L145 55 Q125 45 118 50 L100 70 L82 50 Q75 45 55 55 Z"
            fill="#e8e8e8" />
        <clipPath id="hoodClip">
            <path
                d="M55 55 L10 85 L35 102 L35 178 L165 178 L165 102 L190 85 L145 55 Q125 45 118 50 L100 70 L82 50 Q75 45 55 55 Z" />
        </clipPath>
        <g clip-path="url(#hoodClip)">
            <rect x="0" y="0" width="200" height="200" fill="url(#hoodGrad)" opacity=".9" />
            <path d="M60 90 Q80 75 100 90 Q80 105 60 90Z" fill="#fff" opacity=".2" />
            <path d="M90 90 Q110 75 130 90 Q110 105 90 90Z" fill="#fff" opacity=".2" />
            <path d="M120 90 Q140 75 160 90 Q140 105 120 90Z" fill="#fff" opacity=".2" />
            <path d="M75 110 Q95 95 115 110 Q95 125 75 110Z" fill="#fff" opacity=".2" />
            <path d="M105 110 Q125 95 145 110 Q125 125 105 110Z" fill="#fff" opacity=".2" />
            <path d="M60 130 Q80 115 100 130 Q80 145 60 130Z" fill="#fff" opacity=".2" />
            <path d="M90 130 Q110 115 130 130 Q110 145 90 130Z" fill="#fff" opacity=".2" />
            <path d="M120 130 Q140 115 160 130 Q140 145 120 130Z" fill="#fff" opacity=".2" />
            <path d="M35 175 L70 120 L90 140 L100 115 L110 140 L130 120 L165 175 Z" fill="#fff"
                opacity=".12" />
        </g>
        <path
            d="M55 55 L10 85 L35 102 L35 178 L165 178 L165 102 L190 85 L145 55 Q125 45 118 50 L100 70 L82 50 Q75 45 55 55 Z"
            stroke="#ccc" stroke-width="1.5" fill="none" />
        <path d="M82 50 Q75 35 70 28 Q85 20 100 22 Q115 20 130 28 Q125 35 118 50 L100 70 Z" fill="#ddd" />
        <path d="M82 50 Q75 35 70 28 Q85 20 100 22 Q115 20 130 28 Q125 35 118 50 L100 70 Z"
            fill="url(#hoodGrad)" opacity=".7" />
        <path d="M72 148 Q100 142 128 148 L128 168 L72 168 Z" fill="#fff" opacity=".15" stroke="#fff"
            stroke-width="1" stroke-opacity=".3" />
        <line x1="100" y1="70" x2="100" y2="148" stroke="#fff" stroke-width="2" opacity=".5"
            stroke-dasharray="4 3" />
      </svg>
    `
    },
    {
        id: 5,
        name: "Heart Pillows",
        tag: "Gift Idea",
        description: "Heart-shaped plush cushions with vibrant sublimation floral or custom artwork. Double-sided printing available — a truly unique gift for any occasion.",
        specs: [
            { label: "Cover", value: "Soft-touch polyester spandex" },
            { label: "Fill", value: "Premium PP cotton stuffing" },
            { label: "Sizes", value: ["30 cm", "40 cm", "50 cm"], isChips: true },
            { label: "Sides", value: "Single or double-sided print" }
        ],
        badges: [
            { text: "Double-Sided Option", color: "pink" },
            { text: "Machine Washable", color: "green" },
            { text: "Custom Upload", color: "default" }
        ],
        delay: ".28s",
        art: `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#f472b6" />
                <stop offset="50%" stop-color="#e879f9" />
                <stop offset="100%" stop-color="#a78bfa" />
            </linearGradient>
            <filter id="heartShadow">
                <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#f472b6" flood-opacity=".4" />
            </filter>
        </defs>
        <path
            d="M100 165 Q45 135 30 95 Q20 60 50 45 Q75 32 100 60 Q125 32 150 45 Q180 60 170 95 Q155 135 100 165 Z"
            fill="url(#heartGrad)" filter="url(#heartShadow)" />
        <clipPath id="heartClip">
            <path
                d="M100 165 Q45 135 30 95 Q20 60 50 45 Q75 32 100 60 Q125 32 150 45 Q180 60 170 95 Q155 135 100 165 Z" />
        </clipPath>
        <g clip-path="url(#heartClip)">
            <circle cx="100" cy="100" r="40" fill="none" stroke="#fff" stroke-width="1.5" opacity=".3" />
            <circle cx="100" cy="100" r="28" fill="none" stroke="#fff" stroke-width="1.5" opacity=".3" />
            <circle cx="100" cy="100" r="16" fill="#fff" opacity=".2" />
            <ellipse cx="100" cy="68" rx="7" ry="14" fill="#fff" opacity=".4" />
            <ellipse cx="100" cy="132" rx="7" ry="14" fill="#fff" opacity=".4" />
            <ellipse cx="68" cy="100" rx="14" ry="7" fill="#fff" opacity=".4" />
            <ellipse cx="132" cy="100" rx="14" ry="7" fill="#fff" opacity=".4" />
            <ellipse cx="78" cy="78" rx="7" ry="14" fill="#fff" opacity=".3" transform="rotate(-45 78 78)" />
            <ellipse cx="122" cy="78" rx="7" ry="14" fill="#fff" opacity=".3" transform="rotate(45 122 78)" />
            <ellipse cx="78" cy="122" rx="7" ry="14" fill="#fff" opacity=".3" transform="rotate(45 78 122)" />
            <ellipse cx="122" cy="122" rx="7" ry="14" fill="#fff" opacity=".3" transform="rotate(-45 122 122)" />
            <circle cx="55" cy="60" r="3" fill="#fff" opacity=".7" />
            <circle cx="145" cy="60" r="3" fill="#fff" opacity=".7" />
            <circle cx="65" cy="145" r="2" fill="#fff" opacity=".7" />
        </g>
        <path
            d="M100 165 Q45 135 30 95 Q20 60 50 45 Q75 32 100 60 Q125 32 150 45 Q180 60 170 95 Q155 135 100 165 Z"
            stroke="#fff" stroke-width="1" fill="none" opacity=".4" />
        <ellipse cx="75" cy="68" rx="18" ry="10" fill="#fff" opacity=".18" transform="rotate(-30 75 68)" />
      </svg>
    `
    },
    {
        id: 6,
        name: "Pillows",
        tag: "Custom Size",
        description: "Square and rectangular decorator pillows with full-bleed sublimation artwork. Soft polyester spandex shell with hidden zip — looks great on any sofa, bed, or gaming chair.",
        specs: [
            { label: "Cover", value: "Polyester spandex, hidden zip" },
            { label: "Fill", value: "Premium PP cotton" },
            { label: "Sizes", value: ["12×12\"", "14×14\"", "16×16\"", "18×18\"", "20×20\""], isChips: true }
        ],
        badges: [
            { text: "Machine Washable", color: "green" },
            { text: "Hidden Zipper", color: "cyan" },
            { text: "Full Bleed Print", color: "default" }
        ],
        delay: ".35s",
        art: `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="pillowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#10b981" />
                <stop offset="50%" stop-color="#06b6d4" />
                <stop offset="100%" stop-color="#6366f1" />
            </linearGradient>
            <filter id="pillowShadow">
                <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#06b6d4" flood-opacity=".35" />
            </filter>
        </defs>
        <rect x="22" y="38" width="158" height="130" rx="20" fill="url(#pillowGrad)"
            filter="url(#pillowShadow)" />
        <clipPath id="pillowClip">
            <rect x="22" y="38" width="158" height="130" rx="20" />
        </clipPath>
        <g clip-path="url(#pillowClip)">
            <polygon points="100,45 150,80 150,120 100,155 50,120 50,80" fill="#fff" opacity=".12" />
            <polygon points="100,60 135,82 135,115 100,140 65,115 65,82" fill="#fff" opacity=".12" />
            <polygon points="100,70 130,115 70,115" fill="#fff" opacity=".22" />
            <circle cx="40" cy="58" r="12" fill="#fff" opacity=".15" />
            <circle cx="160" cy="58" r="12" fill="#fff" opacity=".15" />
            <circle cx="40" cy="150" r="12" fill="#fff" opacity=".15" />
            <circle cx="160" cy="150" r="12" fill="#fff" opacity=".15" />
            <line x1="22" y1="103" x2="180" y2="103" stroke="#fff" stroke-width="1" opacity=".2" />
            <line x1="101" y1="38" x2="101" y2="168" stroke="#fff" stroke-width="1" opacity=".2" />
        </g>
        <rect x="27" y="43" width="148" height="120" rx="17" stroke="#fff" stroke-width="1.5" fill="none"
            opacity=".3" />
        <ellipse cx="75" cy="65" rx="35" ry="14" fill="#fff" opacity=".14" />
      </svg>
    `
    },
    {
        id: 7,
        name: "Mousepads",
        tag: "Gaming",
        description: "High-precision gaming surface with stunning full-colour sublimation print. Non-slip rubber base grips your desk. Stitched edges for long-lasting durability — upgrade your entire setup.",
        specs: [
            { label: "Surface", value: "Micro-textured polyester cloth" },
            { label: "Base", value: "Non-slip natural rubber, 4 mm thick" },
            { label: "Edges", value: "Machine-stitched, anti-fray" },
            { label: "Sizes", value: ["Standard", "XL Desk Pad"], isChips: true }
        ],
        badges: [
            { text: "Non-Slip Rubber", color: "cyan" },
            { text: "Stitched Edges", color: "default" },
            { text: "High Precision", color: "green" },
            { text: "Water Resistant", color: "gold" }
        ],
        delay: ".42s",
        art: `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="padGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#1e1b4b" />
                <stop offset="40%" stop-color="#312e81" />
                <stop offset="100%" stop-color="#0f172a" />
            </linearGradient>
            <linearGradient id="neonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#a855f7" />
                <stop offset="50%" stop-color="#06b6d4" />
                <stop offset="100%" stop-color="#a855f7" />
            </linearGradient>
            <filter id="padGlow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <rect x="15" y="55" width="170" height="105" rx="10" fill="url(#padGrad)" />
        <clipPath id="padClip">
            <rect x="15" y="55" width="170" height="105" rx="10" />
        </clipPath>
        <g clip-path="url(#padClip)">
            <line x1="15" y1="90" x2="185" y2="90" stroke="#a855f7" stroke-width=".8" opacity=".4" />
            <line x1="15" y1="115" x2="185" y2="115" stroke="#a855f7" stroke-width=".8" opacity=".4" />
            <line x1="60" y1="55" x2="60" y2="160" stroke="#a855f7" stroke-width=".8" opacity=".4" />
            <line x1="100" y1="55" x2="100" y2="160" stroke="#06b6d4" stroke-width=".8" opacity=".4" />
            <line x1="140" y1="55" x2="140" y2="160" stroke="#a855f7" stroke-width=".8" opacity=".4" />
            <path
                d="M15 145 L25 145 L25 105 L35 105 L35 95 L45 95 L45 115 L55 115 L55 90 L65 90 L65 100 L75 100 L75 80 L85 80 L85 90 L95 90 L95 75 L100 70 L105 75 L105 90 L115 90 L115 85 L125 85 L125 100 L135 100 L135 90 L145 90 L145 110 L155 110 L155 95 L165 95 L165 115 L175 115 L175 145 Z"
                fill="#a855f7" opacity=".5" />
            <path d="M30 130 Q50 110 70 120 Q90 130 100 115 Q110 100 130 105 Q150 110 170 95"
                stroke="url(#neonGrad)" stroke-width="2.5" fill="none" filter="url(#padGlow)"
                opacity=".9" />
            <circle cx="35" cy="70" r="1.5" fill="#fff" opacity=".8" />
            <circle cx="70" cy="65" r="1" fill="#fff" opacity=".7" />
            <circle cx="130" cy="68" r="1.5" fill="#fff" opacity=".8" />
            <circle cx="165" cy="72" r="1" fill="#fff" opacity=".7" />
            <circle cx="95" cy="60" r="2" fill="#06b6d4" opacity=".9" />
        </g>
        <rect x="15" y="55" width="170" height="105" rx="10" fill="none" stroke="url(#neonGrad)"
            stroke-width="1.5" opacity=".7" />
        <rect x="17" y="155" width="166" height="5" rx="5" fill="#111" opacity=".5" />
      </svg>
    `
    },
    {
        id: 8,
        name: "Metal Business Cards",
        tag: "Premium Metal",
        description: "Make an unforgettable first impression. Stainless steel cards with full-colour sublimation — your brand, logo, and contact details printed bold on a premium metal surface that lasts a lifetime.",
        specs: [
            { label: "Material", value: "Stainless steel, brushed finish" },
            { label: "Thickness", value: "0.5 mm ultra-slim" },
            { label: "Size", value: "Standard 3.5 × 2\" (85 × 54 mm)" },
            { label: "Min. Order", value: "From 10 cards, fully customisable" }
        ],
        badges: [
            { text: "Full-Colour Print", color: "gold" },
            { text: "Both Sides", color: "default" },
            { text: "Scratch Resistant", color: "cyan" },
            { text: "Lifetime Durable", color: "green" }
        ],
        delay: ".49s",
        art: `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="metal1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#c0c0c0" />
                <stop offset="25%" stop-color="#e8e8e8" />
                <stop offset="50%" stop-color="#a0a0a0" />
                <stop offset="75%" stop-color="#d8d8d8" />
                <stop offset="100%" stop-color="#b0b0b0" />
            </linearGradient>
            <linearGradient id="cardPrint1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#f43f5e" stop-opacity=".8" />
                <stop offset="50%" stop-color="#8b5cf6" stop-opacity=".8" />
                <stop offset="100%" stop-color="#06b6d4" stop-opacity=".8" />
            </linearGradient>
        </defs>
        <rect x="25" y="88" width="150" height="75" rx="7" fill="#111" opacity=".6"
            transform="rotate(-5 100 120)" />
        <g transform="rotate(-8 100 105)">
            <rect x="22" y="75" width="150" height="75" rx="7" fill="url(#metal1)" />
            <rect x="22" y="75" width="150" height="75" rx="7" fill="url(#cardPrint1)" opacity=".6" />
            <text x="40" y="108" font-family="Inter,sans-serif" font-size="9" font-weight="700" fill="#fff"
                opacity=".9">SUBLIMATION</text>
            <text x="40" y="122" font-family="Inter,sans-serif" font-size="7" fill="#fff" opacity=".6">PRINT
                STUDIO</text>
            <line x1="35" y1="130" x2="90" y2="130" stroke="#fff" stroke-width=".8" opacity=".4" />
        </g>
        <g transform="rotate(-2 100 105)">
            <rect x="22" y="75" width="150" height="75" rx="7" fill="url(#metal1)" />
            <rect x="22" y="75" width="150" height="75" rx="7" fill="url(#cardPrint1)" opacity=".75" />
            <rect x="30" y="83" width="40" height="40" rx="4" fill="#fff" opacity=".15" />
            <circle cx="50" cy="103" r="14" fill="#fff" opacity=".2" />
            <text x="80" y="102" font-family="Inter,sans-serif" font-size="10" font-weight="800"
                fill="#fff">STUDIO</text>
            <text x="80" y="116" font-family="Inter,sans-serif" font-size="7" fill="#fff"
                opacity=".7">hello@studio.co</text>
            <text x="80" y="128" font-family="Inter,sans-serif" font-size="7" fill="#fff" opacity=".7">+1
                234 567 890</text>
        </g>
        <g transform="rotate(5 100 105)">
            <rect x="22" y="75" width="150" height="75" rx="7" fill="url(#metal1)" />
            <rect x="22" y="75" width="150" height="75" rx="7" fill="url(#cardPrint1)" opacity=".8" />
            <line x1="22" y1="85" x2="172" y2="145" stroke="#fff" stroke-width="8" opacity=".06" />
            <line x1="22" y1="95" x2="172" y2="155" stroke="#fff" stroke-width="6" opacity=".06" />
            <circle cx="48" cy="107" r="16" fill="#fff" opacity=".2" />
            <path d="M42 107 L48 97 L54 107 L48 117 Z" fill="#fff" opacity=".7" />
            <text x="74" y="101" font-family="Inter,sans-serif" font-size="11" font-weight="800"
                fill="#fff">YOUR NAME</text>
            <text x="74" y="115" font-family="Inter,sans-serif" font-size="7.5" fill="#fff"
                opacity=".8">Creative Director</text>
            <line x1="74" y1="120" x2="162" y2="120" stroke="#fff" stroke-width=".8" opacity=".4" />
            <text x="74" y="131" font-family="Inter,sans-serif" font-size="7" fill="#fff"
                opacity=".65">your@email.com</text>
            <rect x="22" y="75" width="150" height="75" rx="7" fill="#fff" opacity=".04" />
            <rect x="22" y="75" width="75" height="75" rx="7" fill="#fff" opacity=".04" />
        </g>
      </svg>
    `
    },
    {
        id: 9,
        name: "Acrylic Keychains",
        tag: "Collectible",
        description: "Crystal-clear acrylic keychains with dye-sublimation print on both sides. Perfect for merch, giveaways, or custom gifts — wearable artwork that goes everywhere you do.",
        specs: [
            { label: "Material", value: "3 mm crystal-clear acrylic" },
            { label: "Print", value: "Double-sided sublimation" },
            { label: "Shapes", value: ["Circle", "Star", "Teardrop", "Custom"], isChips: true },
            { label: "Hardware", value: "Stainless steel jump ring + lobster clasp" }
        ],
        badges: [
            { text: "Double-Sided", color: "pink" },
            { text: "Custom Shape", color: "default" },
            { text: "UV Resistant", color: "cyan" },
            { text: "Bulk Discounts", color: "green" }
        ],
        delay: ".56s",
        art: `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="kc1Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#fbbf24" />
                <stop offset="100%" stop-color="#f43f5e" />
            </linearGradient>
            <linearGradient id="kc2Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#34d399" />
                <stop offset="100%" stop-color="#06b6d4" />
            </linearGradient>
            <linearGradient id="kc3Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#a78bfa" />
                <stop offset="100%" stop-color="#f472b6" />
            </linearGradient>
        </defs>
        <!-- Keyring hardware -->
        <circle cx="100" cy="30" r="12" stroke="#aaa" stroke-width="4" fill="none" />
        <line x1="100" y1="42" x2="100" y2="55" stroke="#aaa" stroke-width="3" />
        <!-- Keychain 1 — star shape -->
        <g transform="translate(45, 70)">
            <path d="M0 -38 L9 -12 L37 -12 L14 5 L23 31 L0 15 L-23 31 L-14 5 L-37 -12 L-9 -12 Z"
                fill="url(#kc1Grad)" stroke="#fff" stroke-width="1.5" opacity=".9"
                transform="translate(0,38)" />
            <circle cx="0" cy="38" r="14" fill="#fff" opacity=".2" />
            <path d="M0 26 L6 35 L0 44 L-6 35 Z" fill="#fff" opacity=".6" />
        </g>
        <!-- Keychain 2 — circle (center) -->
        <g transform="translate(100, 130)">
            <circle cx="0" cy="0" r="35" fill="url(#kc2Grad)" stroke="#fff" stroke-width="1.5"
                opacity=".9" />
            <circle cx="0" cy="0" r="25" fill="#fff" opacity=".12" />
            <path d="M-10,-10 Q0,-25 10,-10 Q0,5 -10,-10 Z" fill="#fff" opacity=".5" />
            <path d="M-10,10 Q0,25 10,10 Q0,-5 -10,10 Z" fill="#34d399" opacity=".5" />
            <circle cx="-5" cy="-5" r="4" fill="#fff" opacity=".8" />
            <circle cx="5" cy="5" r="4" fill="#34d399" opacity=".8" />
        </g>
        <!-- Keychain 3 — teardrop -->
        <g transform="translate(155, 70)">
            <path d="M0 -40 Q22 -20 22 5 Q22 30 0 40 Q-22 30 -22 5 Q-22 -20 0 -40 Z" fill="url(#kc3Grad)"
                stroke="#fff" stroke-width="1.5" opacity=".9" />
            <path d="M0 -10 L4 2 L16 2 L7 10 L11 22 L0 14 L-11 22 L-7 10 L-16 2 L-4 2 Z" fill="#fff"
                opacity=".6" transform="translate(0,0)" />
        </g>
        <line x1="45" y1="55" x2="75" y2="70" stroke="#bbb" stroke-width="2" stroke-dasharray="3 2" />
        <line x1="100" y1="55" x2="100" y2="95" stroke="#bbb" stroke-width="2" stroke-dasharray="3 2" />
        <line x1="155" y1="55" x2="125" y2="70" stroke="#bbb" stroke-width="2" stroke-dasharray="3 2" />
      </svg>
    `
    },
    {
        id: 10,
        name: "Wallets",
        tag: "Luxury",
        description: "Slim bifold PU-leather wallets with vibrant full-colour sublimation on the outer face. Carry your personality everywhere — bold dragon scales, waves, or your own uploaded artwork.",
        specs: [
            { label: "Material", value: "Premium PU leather exterior" },
            { label: "Card Slots", value: "6 slots + 1 bill compartment" },
            { label: "Print", value: "Full-colour outer sublimation" },
            { label: "Style", value: ["Bifold", "Trifold"], isChips: true }
        ],
        badges: [
            { text: "PU Leather", color: "gold" },
            { text: "6 Card Slots", color: "default" },
            { text: "Slim Profile", color: "cyan" },
            { text: "RFID Blocking", color: "green" }
        ],
        delay: ".63s",
        art: `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="walletGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#0f172a" />
                <stop offset="100%" stop-color="#1e293b" />
            </linearGradient>
            <linearGradient id="walletPrint" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#f59e0b" />
                <stop offset="40%" stop-color="#ef4444" />
                <stop offset="80%" stop-color="#8b5cf6" />
                <stop offset="100%" stop-color="#06b6d4" />
            </linearGradient>
        </defs>
        <rect x="20" y="60" width="160" height="95" rx="10" fill="url(#walletGrad)" />
        <rect x="20" y="60" width="160" height="95" rx="10" fill="url(#walletPrint)" opacity=".5" />
        <clipPath id="walletBackClip">
            <rect x="20" y="60" width="160" height="95" rx="10" />
        </clipPath>
        <g clip-path="url(#walletBackClip)">
            <path d="M20 90 Q50 70 80 90 Q110 110 140 90 Q160 78 180 85" stroke="#fff" stroke-width="2"
                fill="none" opacity=".3" />
            <path d="M20 115 Q50 95 80 115 Q110 135 140 115 Q160 103 180 110" stroke="#fff"
                stroke-width="1.5" fill="none" opacity=".2" />
            <circle cx="50" cy="85" r="8" fill="#fff" opacity=".12" />
            <circle cx="120" cy="110" r="10" fill="#fff" opacity=".12" />
            <circle cx="160" cy="90" r="6" fill="#fff" opacity=".1" />
        </g>
        <g transform="rotate(-6 100 107)">
            <rect x="20" y="60" width="160" height="95" rx="10" fill="url(#walletGrad)" />
            <rect x="20" y="60" width="160" height="95" rx="10" fill="url(#walletPrint)" opacity=".7" />
            <clipPath id="walletFrontClip">
                <rect x="20" y="60" width="160" height="95" rx="10" />
            </clipPath>
            <g clip-path="url(#walletFrontClip)">
                <path d="M30 120 Q55 95 80 105 Q100 115 120 95 Q140 75 170 85" stroke="#fbbf24"
                    stroke-width="3" fill="none" opacity=".6" stroke-linecap="round" />
                <path d="M40 80 Q55 70 70 80 Q55 90 40 80Z" fill="#fff" opacity=".18" />
                <path d="M70 80 Q85 70 100 80 Q85 90 70 80Z" fill="#fff" opacity=".18" />
                <path d="M100 80 Q115 70 130 80 Q115 90 100 80Z" fill="#fff" opacity=".18" />
                <path d="M55 95 Q70 85 85 95 Q70 105 55 95Z" fill="#fff" opacity=".15" />
                <path d="M85 95 Q100 85 115 95 Q100 105 85 95Z" fill="#fff" opacity=".15" />
                <rect x="115" y="105" width="55" height="36" rx="5" fill="#000" opacity=".3" />
                <line x1="115" y1="118" x2="170" y2="118" stroke="#fff" stroke-width=".8" opacity=".3" />
                <line x1="115" y1="128" x2="170" y2="128" stroke="#fff" stroke-width=".8" opacity=".3" />
            </g>
            <rect x="20" y="60" width="160" height="95" rx="10" stroke="#fff" stroke-width="1" fill="none"
                opacity=".3" stroke-dasharray="5 3" />
            <rect x="22" y="62" width="60" height="91" rx="10" fill="#fff" opacity=".04" />
        </g>
        <line x1="100" y1="62" x2="100" y2="153" stroke="#fff" stroke-width="1.5" opacity=".2" />
      </svg>
    `
    }
];
