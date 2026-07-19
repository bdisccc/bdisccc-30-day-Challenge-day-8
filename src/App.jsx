import { useMemo, useState } from "react";

const CUSTOM_FONT_OPTION = "Custom...";

const defaultTheme = {
  primary: "#6c5ce7",
  secondary: "#00cec9",
  accent: "#fd79a8",
  background: "#f7f7fb",
  surface: "#ffffff",
  text: "#171821",
  mutedText: "#6b7280",
  border: "#e5e7eb",
  success: "#00b894",
  warning: "#fdcb6e",
  error: "#d63031",

  headingFont: "Inter",
  bodyFont: "Inter",
  buttonFont: "Inter",

  radius: 22,
  buttonRadius: 50,
  spacing: "comfortable",
  shadow: "soft",
  borderSize: 1,

  mode: "light",
  colorScheme: "All",
  buttonAnimation: "shine",
  cardAnimation: "lift",
  sectionTransition: "fade-up",
  productCardStyle: "clean",
  productImageFit: "cover",

  logoImage: "",
  logoAltImage: "",
  logoMarkImage: "",
  safeZoneImage: "",
  misuseImage: "",
  applicationImage: "",

  brandName: "Brandify",
  shopName: "FASHION",

  landingHeroTitle: "Build a website look before writing code.",
  landingHeroText:
    "Test your colors, fonts, rounded corners, buttons, cards, and overall landing page style in real time.",
  landingAboutTitle: "Make your visual identity easier to test.",
  landingAboutText:
    "This preview behaves like a real landing page, so you can see whether your brand feels playful, premium, modern, soft, bold, or minimal.",
  landingFooterText: "Made for fast visual branding experiments.",

  productHeroTitle: "LET'S EXPLORE UNIQUE PRODUCTS.",
  productHeroText:
    "This product page uses the same brand colors, fonts, radius, and button styles as the main preview.",
  tickerText: "H&M, OBEY, shopify, LACOSTE, LEVI'S, amazon",
  tickerDirection: "left",
  tickerSpeed: 18,
  saleTitle: "PAYDAY\nSALE NOW",
  saleText:
    "Spend minimal $100 get 30% off voucher code for your next purchase.",
  saleDate: "1 June - 10 June 2026",
  appPromoTitle: "DOWNLOAD APP & GET THE VOUCHER!",
  appPromoText: "Test how your brand would look in a campaign section.",
  newsletterTitle: "JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO",
  newsletterText: "Type your email down below and be young wild generation.",

  brandBookTitle: "Brand Book",
  brandBookSubtitle:
    "A live guide for logo usage, color palette, typography, visual direction, and reusable brand rules.",
  brandSlogan: "Design it once. Use it everywhere.",
  safeZoneText:
    "Keep enough space around the logo so it stays readable and premium across layouts.",
  misuseText:
    "Avoid stretching, rotating, recoloring, or placing the logo on low-contrast backgrounds.",
  applicationsText:
    "Use the brand system consistently across websites, product pages, campaigns, presentations, and social assets.",

  voiceOneIcon: "💡",
  voiceOneWord: "Thoughtful",
  voiceOneQuote: "They’ve clearly thought a lot about this issue.",
  voiceTwoIcon: "☝️",
  voiceTwoWord: "Interesting",
  voiceTwoQuote: "Wow, I didn’t know that.",
  voiceThreeIcon: "🏁",
  voiceThreeWord: "Proud",
  voiceThreeQuote: "They seem like a pretty awesome company.",
  voiceFourIcon: "⭐",
  voiceFourWord: "Bold",
  voiceFourQuote: "This team isn’t afraid to tell it like it is.",
  voiceFiveIcon: "💜",
  voiceFiveWord: "Human",
  voiceFiveQuote: "A real person wrote this, they seem cool.",
};

const baseFontOptions = [
  "Inter",
  "Poppins",
  "Roboto",
  "Montserrat",
  "Nunito",
  "Merriweather",
  "Space Grotesk",
  "Playfair Display",
  "Open Sans",
  "Lato",
  "Source Sans 3",
  "Source Sans Pro",
  "Oswald",
  "Roboto Slab",
  "Raleway",
  "Libre Baskerville",
  "Bebas Neue",
  "DM Sans",
  "Manrope",
  "Work Sans",
  "Plus Jakarta Sans",
  "Noto Serif",
  "Noto Sans",
  "Lora",
  "Fira Sans",
  "Cormorant Garamond",
  "Crimson Pro",
  "Cinzel",
  "Great Vibes",
  "League Spartan",
  "Anton",
  "Arimo",
  "Quicksand",
  "Barlow Condensed",
  "Assistant",
  "Arsenal",
];

const fontPairingBank = [
  {
    category: "Classic Font Combinations",
    name: "Playfair Display + Source Sans Pro",
    fonts: ["Playfair Display", "Source Sans Pro"],
  },
  {
    category: "Classic Font Combinations",
    name: "Noto Serif + Noto Sans",
    fonts: ["Noto Serif", "Noto Sans"],
  },
  {
    category: "Classic Font Combinations",
    name: "Lustria + Lato",
    fonts: ["Lustria", "Lato"],
  },
  {
    category: "Classic Font Combinations",
    name: "Libre Baskerville + Montserrat",
    fonts: ["Libre Baskerville", "Montserrat"],
  },
  {
    category: "Classic Font Combinations",
    name: "Bodoni + Futura",
    fonts: ["Bodoni", "Futura"],
  },
  {
    category: "Classic Font Combinations",
    name: "Crimson Pro + Gill Sans",
    fonts: ["Crimson Pro", "Gill Sans"],
  },
  {
    category: "Classic Font Combinations",
    name: "Cardo + Josephine Sans",
    fonts: ["Cardo", "Josephine Sans"],
  },
  {
    category: "Classic Font Combinations",
    name: "Cambria + Arial",
    fonts: ["Cambria", "Arial"],
  },
  {
    category: "Classic Font Combinations",
    name: "Lora + Roboto",
    fonts: ["Lora", "Roboto"],
  },
  {
    category: "Classic Font Combinations",
    name: "Abril Fatface + Poppins",
    fonts: ["Abril Fatface", "Poppins"],
  },

  {
    category: "Elegant and Sophisticated Pairings",
    name: "Ovo + Muli Extra Light",
    fonts: ["Ovo", "Muli Extra Light"],
  },
  {
    category: "Elegant and Sophisticated Pairings",
    name: "Lovely May + Montserrat",
    fonts: ["Lovely May", "Montserrat"],
  },
  {
    category: "Elegant and Sophisticated Pairings",
    name: "Prata + Lato Hairline",
    fonts: ["Prata", "Lato Hairline"],
  },
  {
    category: "Elegant and Sophisticated Pairings",
    name: "Kage Thin + Open Sauce Light",
    fonts: ["Kage Thin", "Open Sauce Light"],
  },
  {
    category: "Elegant and Sophisticated Pairings",
    name: "Aleo Light + Arimo",
    fonts: ["Aleo Light", "Arimo"],
  },
  {
    category: "Elegant and Sophisticated Pairings",
    name: "Julius Sans One + Barlow Condensed Thin",
    fonts: ["Julius Sans One", "Barlow Condensed Thin"],
  },
  {
    category: "Elegant and Sophisticated Pairings",
    name: "Maharlika + Anonymous Pro",
    fonts: ["Maharlika", "Anonymous Pro"],
  },
  {
    category: "Elegant and Sophisticated Pairings",
    name: "Nixie One + Abhaya Libre Regular",
    fonts: ["Nixie One", "Abhaya Libre Regular"],
  },
  {
    category: "Elegant and Sophisticated Pairings",
    name: "CMU Serif + Livvic Thin",
    fonts: ["CMU Serif", "Livvic Thin"],
  },
  {
    category: "Elegant and Sophisticated Pairings",
    name: "Roxborough CF + Inter Thin",
    fonts: ["Roxborough CF", "Inter Thin"],
  },

  {
    category: "Christmas Font Pairings",
    name: "TAN Pearl + Assistant Regular",
    fonts: ["TAN Pearl", "Assistant Regular"],
  },
  {
    category: "Christmas Font Pairings",
    name: "Berkshire Swash + Glacial Indifference",
    fonts: ["Berkshire Swash", "Glacial Indifference"],
  },
  {
    category: "Christmas Font Pairings",
    name: "Moonlight + Grand Hotel",
    fonts: ["Moonlight", "Grand Hotel"],
  },
  {
    category: "Christmas Font Pairings",
    name: "Bariska + Amsterdam Four",
    fonts: ["Bariska", "Amsterdam Four"],
  },
  {
    category: "Christmas Font Pairings",
    name: "Luthier + Quattrocento",
    fonts: ["Luthier", "Quattrocento"],
  },
  {
    category: "Christmas Font Pairings",
    name: "Art Nuvo + Breathing",
    fonts: ["Art Nuvo", "Breathing"],
  },
  {
    category: "Christmas Font Pairings",
    name: "Nickainley + Arima Madurai Extra Bold",
    fonts: ["Nickainley", "Arima Madurai Extra Bold"],
  },
  {
    category: "Christmas Font Pairings",
    name: "Pinyon Script + TT Ricordi Nobili",
    fonts: ["Pinyon Script", "TT Ricordi Nobili"],
  },
  {
    category: "Christmas Font Pairings",
    name: "Marykate + Amatic SC",
    fonts: ["Marykate", "Amatic SC"],
  },
  {
    category: "Christmas Font Pairings",
    name: "White Star + Montserrat Classic",
    fonts: ["White Star", "Montserrat Classic"],
  },

  {
    category: "Playful and Creative Pairings",
    name: "Sunday + Canda Tawa Cute",
    fonts: ["Sunday", "Canda Tawa Cute"],
  },
  {
    category: "Playful and Creative Pairings",
    name: "Le Petit Cochon + Brightwall",
    fonts: ["Le Petit Cochon", "Brightwall"],
  },
  {
    category: "Playful and Creative Pairings",
    name: "More Sugar + One Little Font",
    fonts: ["More Sugar", "One Little Font"],
  },
  {
    category: "Playful and Creative Pairings",
    name: "Lazydog + Hibernate",
    fonts: ["Lazydog", "Hibernate"],
  },
  {
    category: "Playful and Creative Pairings",
    name: "Genty + Genty Sans",
    fonts: ["Genty", "Genty Sans"],
  },
  {
    category: "Playful and Creative Pairings",
    name: "Balabeloo + More Sugar Thin",
    fonts: ["Balabeloo", "More Sugar Thin"],
  },
  {
    category: "Playful and Creative Pairings",
    name: "Sweet Apricot + Glacial Indifference",
    fonts: ["Sweet Apricot", "Glacial Indifference"],
  },
  {
    category: "Playful and Creative Pairings",
    name: "Scripter + Better Saturday",
    fonts: ["Scripter", "Better Saturday"],
  },
  {
    category: "Playful and Creative Pairings",
    name: "Atma Bold + Handy Casual",
    fonts: ["Atma Bold", "Handy Casual"],
  },
  {
    category: "Playful and Creative Pairings",
    name: "Laries Script + Vintage Goods",
    fonts: ["Laries Script", "Vintage Goods"],
  },

  {
    category: "Minimalist and Clean Pairings",
    name: "Code + Roboto Regular",
    fonts: ["Code", "Roboto Regular"],
  },
  {
    category: "Minimalist and Clean Pairings",
    name: "Montserrat Extra Light + Montserrat Regular",
    fonts: ["Montserrat Extra Light", "Montserrat Regular"],
  },
  {
    category: "Minimalist and Clean Pairings",
    name: "Le Jour Serif + Source Sans Pro Regular",
    fonts: ["Le Jour Serif", "Source Sans Pro Regular"],
  },
  {
    category: "Minimalist and Clean Pairings",
    name: "Brown Sugar + Josephine Sans Thin",
    fonts: ["Brown Sugar", "Josephine Sans Thin"],
  },
  {
    category: "Minimalist and Clean Pairings",
    name: "Helsa Display + HK Grotesk Medium",
    fonts: ["Helsa Display", "HK Grotesk Medium"],
  },
  {
    category: "Minimalist and Clean Pairings",
    name: "The Seasons Light + Now",
    fonts: ["The Seasons Light", "Now"],
  },
  {
    category: "Minimalist and Clean Pairings",
    name: "Kudryashev Display + Garet Book",
    fonts: ["Kudryashev Display", "Garet Book"],
  },
  {
    category: "Minimalist and Clean Pairings",
    name: "Raleway Thin + Nunito",
    fonts: ["Raleway Thin", "Nunito"],
  },
  {
    category: "Minimalist and Clean Pairings",
    name: "Arsenal + Open Sans Light",
    fonts: ["Arsenal", "Open Sans Light"],
  },
  {
    category: "Minimalist and Clean Pairings",
    name: "Futura + Helvetica World",
    fonts: ["Futura", "Helvetica World"],
  },

  {
    category: "Branding Font Combinations",
    name: "Migra ExtraBold + Roboto Mono Regular + Playfair Display Regular",
    fonts: ["Migra ExtraBold", "Roboto Mono Regular", "Playfair Display Regular"],
  },
  {
    category: "Branding Font Combinations",
    name: "Lato Regular + Ovo Regular + Martel Regular",
    fonts: ["Lato Regular", "Ovo Regular", "Martel Regular"],
  },
  {
    category: "Branding Font Combinations",
    name: "Bitter Regular + Cormorant SC Medium + Source Sans Pro Regular",
    fonts: ["Bitter Regular", "Cormorant SC Medium", "Source Sans Pro Regular"],
  },
  {
    category: "Branding Font Combinations",
    name: "Droid Serif Regular + Noto Sans Regular + Fira Sans Light",
    fonts: ["Droid Serif Regular", "Noto Sans Regular", "Fira Sans Light"],
  },
  {
    category: "Branding Font Combinations",
    name: "Poppins Medium + Signika Regular + Open Sans Regular",
    fonts: ["Poppins Medium", "Signika Regular", "Open Sans Regular"],
  },
  {
    category: "Branding Font Combinations",
    name: "Merriweather Sans Italic + Libre Franklin Italic + Lora Regular",
    fonts: ["Merriweather Sans Italic", "Libre Franklin Italic", "Lora Regular"],
  },
  {
    category: "Branding Font Combinations",
    name: "Playfair Display Regular + Fira Sans Medium + Catamaran Light",
    fonts: ["Playfair Display Regular", "Fira Sans Medium", "Catamaran Light"],
  },
  {
    category: "Branding Font Combinations",
    name: "Arimo Regular + Pinyon Script Regular + Overpass Regular",
    fonts: ["Arimo Regular", "Pinyon Script Regular", "Overpass Regular"],
  },
  {
    category: "Branding Font Combinations",
    name: "Nunito Sans Bold + Crimson Pro + Tenor Sans Regular",
    fonts: ["Nunito Sans Bold", "Crimson Pro", "Tenor Sans Regular"],
  },
  {
    category: "Branding Font Combinations",
    name: "Montserrat SemiBold + Lora Italic + Lustria Regular",
    fonts: ["Montserrat SemiBold", "Lora Italic", "Lustria Regular"],
  },

  {
    category: "Wedding Invitation Font Pairings",
    name: "Cormorant Garamond + Pinyon Script",
    fonts: ["Cormorant Garamond", "Pinyon Script"],
  },
  {
    category: "Wedding Invitation Font Pairings",
    name: "Le Jour Script + Cinzel",
    fonts: ["Le Jour Script", "Cinzel"],
  },
  {
    category: "Wedding Invitation Font Pairings",
    name: "Aniyah + Caladea",
    fonts: ["Aniyah", "Caladea"],
  },
  {
    category: "Wedding Invitation Font Pairings",
    name: "Brittany + Aileron Regular",
    fonts: ["Brittany", "Aileron Regular"],
  },
  {
    category: "Wedding Invitation Font Pairings",
    name: "Great Vibes + Josephine Sans Regular",
    fonts: ["Great Vibes", "Josephine Sans Regular"],
  },
  {
    category: "Wedding Invitation Font Pairings",
    name: "Blastine + Quicksand",
    fonts: ["Blastine", "Quicksand"],
  },
  {
    category: "Wedding Invitation Font Pairings",
    name: "Billion Miracles + Catchy Mager",
    fonts: ["Billion Miracles", "Catchy Mager"],
  },
  {
    category: "Wedding Invitation Font Pairings",
    name: "Beautifully Delicious Script + Be Vietnam Thin",
    fonts: ["Beautifully Delicious Script", "Be Vietnam Thin"],
  },
  {
    category: "Wedding Invitation Font Pairings",
    name: "Amsterdam One + Ovo",
    fonts: ["Amsterdam One", "Ovo"],
  },
  {
    category: "Wedding Invitation Font Pairings",
    name: "Callem + Cormorant SC Medium",
    fonts: ["Callem", "Cormorant SC Medium"],
  },

  {
    category: "Poster Font Combinations",
    name: "Montserrat Bold + Playfair Display Regular",
    fonts: ["Montserrat Bold", "Playfair Display Regular"],
  },
  {
    category: "Poster Font Combinations",
    name: "League Spartan + Roboto",
    fonts: ["League Spartan", "Roboto"],
  },
  {
    category: "Poster Font Combinations",
    name: "Bebas Neue + Moontime",
    fonts: ["Bebas Neue", "Moontime"],
  },
  {
    category: "Poster Font Combinations",
    name: "HK Grotesk Medium + Roboto",
    fonts: ["HK Grotesk Medium", "Roboto"],
  },
  {
    category: "Poster Font Combinations",
    name: "DM Sans Bold + Montserrat SemiBold",
    fonts: ["DM Sans Bold", "Montserrat SemiBold"],
  },
  {
    category: "Poster Font Combinations",
    name: "Agrandir Black + Open Sans Light",
    fonts: ["Agrandir Black", "Open Sans Light"],
  },
  {
    category: "Poster Font Combinations",
    name: "Anton + Muli Regular",
    fonts: ["Anton", "Muli Regular"],
  },
  {
    category: "Poster Font Combinations",
    name: "Libre Baskerville + Montserrat",
    fonts: ["Libre Baskerville", "Montserrat"],
  },
  {
    category: "Poster Font Combinations",
    name: "Granaina + Roboto Mono Regular",
    fonts: ["Granaina", "Roboto Mono Regular"],
  },
  {
    category: "Poster Font Combinations",
    name: "TAN Headline + Canva Sans",
    fonts: ["TAN Headline", "Canva Sans"],
  },

  {
    category: "Halloween Font Pairings",
    name: "Freckle Face + Yanone Kaffeesatz Regular",
    fonts: ["Freckle Face", "Yanone Kaffeesatz Regular"],
  },
  {
    category: "Halloween Font Pairings",
    name: "Vampiro One Regular + Lotus Eater Sans",
    fonts: ["Vampiro One Regular", "Lotus Eater Sans"],
  },
  {
    category: "Halloween Font Pairings",
    name: "UnifrakturMaguntia + TAN Pearl",
    fonts: ["UnifrakturMaguntia", "TAN Pearl"],
  },
  {
    category: "Halloween Font Pairings",
    name: "Jeepers + Bernoru SemiCondensed",
    fonts: ["Jeepers", "Bernoru SemiCondensed"],
  },
  {
    category: "Halloween Font Pairings",
    name: "Lacquer + Poppins Medium",
    fonts: ["Lacquer", "Poppins Medium"],
  },
  {
    category: "Halloween Font Pairings",
    name: "TT Alientz Serif + Open Sauce SemiBold",
    fonts: ["TT Alientz Serif", "Open Sauce SemiBold"],
  },
  {
    category: "Halloween Font Pairings",
    name: "Mons + Sweet Dreams",
    fonts: ["Mons", "Sweet Dreams"],
  },
  {
    category: "Halloween Font Pairings",
    name: "Charu Chandan Blood Drip + Bobby Jones Condensed",
    fonts: ["Charu Chandan Blood Drip", "Bobby Jones Condensed"],
  },
  {
    category: "Halloween Font Pairings",
    name: "Obra Letra + Antic",
    fonts: ["Obra Letra", "Antic"],
  },
  {
    category: "Halloween Font Pairings",
    name: "Pony Club + Six Caps",
    fonts: ["Pony Club", "Six Caps"],
  },

  {
    category: "Book Cover Font Pairings",
    name: "Playlist Script + CMU Serif",
    fonts: ["Playlist Script", "CMU Serif"],
  },
  {
    category: "Book Cover Font Pairings",
    name: "Perandory + Didact Gothic",
    fonts: ["Perandory", "Didact Gothic"],
  },
  {
    category: "Book Cover Font Pairings",
    name: "Noto Serif Display ExtraCondensed + Sloop Script Pro",
    fonts: ["Noto Serif Display ExtraCondensed", "Sloop Script Pro"],
  },
  {
    category: "Book Cover Font Pairings",
    name: "Six Caps + Crimson Pro",
    fonts: ["Six Caps", "Crimson Pro"],
  },
  {
    category: "Book Cover Font Pairings",
    name: "Voga + Fira Sans Light",
    fonts: ["Voga", "Fira Sans Light"],
  },
  {
    category: "Book Cover Font Pairings",
    name: "Cinzel Decorative + Reborn",
    fonts: ["Cinzel Decorative", "Reborn"],
  },
  {
    category: "Book Cover Font Pairings",
    name: "Catchy Mager + Montserrat SemiBold",
    fonts: ["Catchy Mager", "Montserrat SemiBold"],
  },
  {
    category: "Book Cover Font Pairings",
    name: "Rustic Printed Stamp + Rustic Printed",
    fonts: ["Rustic Printed Stamp", "Rustic Printed"],
  },
  {
    category: "Book Cover Font Pairings",
    name: "Kingred Modern + Poppins",
    fonts: ["Kingred Modern", "Poppins"],
  },
  {
    category: "Book Cover Font Pairings",
    name: "Feeling Passionate + Abril Fatface",
    fonts: ["Feeling Passionate", "Abril Fatface"],
  },
];

const coreColorFields = [
  ["primary", "Primary"],
  ["secondary", "Secondary"],
  ["accent", "Accent"],
  ["background", "Background"],
  ["text", "Text"],
];

const paletteOptions = [
  "All",
  "Monochromatic",
  "Analogous",
  "Complementary",
  "Split Complementary",
  "Triadic",
  "Tetradic",
];

const previewTabs = [
  { id: "landing", label: "Landing Page" },
  { id: "products", label: "Product" },
  { id: "brandbook", label: "Brand Book" },
];

const settingTabs = [
  { id: "colors", label: "Colors" },
  { id: "typography", label: "Typography" },
  { id: "layout", label: "Layout" },
  { id: "cms", label: "CMS" },
  { id: "motion", label: "Animations" },
  { id: "export", label: "Export" },
];

const buttonAnimations = [
  ["none", "None"],
  ["shine", "Shine"],
  ["slide", "Slide Fill"],
  ["pulse", "Pulse"],
  ["jelly", "Jelly"],
  ["border", "Border Trace"],
  ["glow", "Glow"],
  ["raise", "Raise"],
  ["press", "Press"],
  ["skew", "Skew"],
  ["ripple", "Ripple"],
  ["neon", "Neon"],
  ["fill-up", "Fill Up"],
  ["magnet", "Magnet"],
  ["bounce", "Bounce"],
  ["wobble", "Wobble"],
  ["flip", "Flip"],
  ["rotate", "Rotate"],
  ["scale-pop", "Scale Pop"],
  ["shadow-pop", "Shadow Pop"],
  ["underline", "Underline"],
  ["diagonal", "Diagonal Fill"],
  ["double-slide", "Double Slide"],
  ["soft-blink", "Soft Blink"],
  ["elastic", "Elastic"],
  ["float", "Float"],
  ["blur", "Blur Focus"],
  ["invert", "Invert"],
  ["outline-fill", "Outline Fill"],
  ["spark", "Spark"],
];

const cardAnimations = [
  ["none", "None"],
  ["lift", "Lift"],
  ["tilt", "Tilt"],
  ["glow", "Glow"],
  ["reveal", "Reveal"],
  ["float", "Float"],
  ["depth", "3D Depth"],
  ["zoom", "Zoom"],
  ["shine", "Shine"],
  ["glass", "Glass"],
  ["stack", "Stack"],
  ["border-sweep", "Border Sweep"],
  ["spotlight", "Spotlight"],
  ["swing", "Swing"],
  ["blur-in", "Blur In"],
  ["rotate", "Rotate"],
  ["scale-soft", "Scale Soft"],
  ["slide-up", "Slide Up"],
  ["slide-right", "Slide Right"],
  ["shadow-deep", "Deep Shadow"],
  ["color-wash", "Color Wash"],
  ["flip-soft", "Flip Soft"],
  ["pulse-border", "Pulse Border"],
  ["corner-pop", "Corner Pop"],
  ["image-zoom", "Image Zoom"],
  ["content-rise", "Content Rise"],
  ["border-grow", "Border Grow"],
  ["soft-bounce", "Soft Bounce"],
  ["diagonal-light", "Diagonal Light"],
  ["premium-lift", "Premium Lift"],
];

const sectionTransitions = [
  ["none", "None"],
  ["fade-up", "Fade Up"],
  ["slide-left", "Slide Left"],
  ["slide-right", "Slide Right"],
  ["scale-in", "Scale In"],
  ["blur-in", "Blur In"],
  ["staggered", "Staggered Cards"],
  ["soft-reveal", "Soft Reveal"],
  ["premium-reveal", "Premium Reveal"],
];

const exportOptions = [
  "CSS Variables",
  "Tailwind Config",
  "SCSS Variables",
  "DaisyUI Theme",
  "shadcn Tokens",
  "Material UI Theme",
  "Shades",
  "Gradients",
  "Brand Book Copy",
  "Brand JSON",
];

const starterProducts = [
  {
    id: 1,
    name: "Hoodies & Sweatshirt",
    price: "$48",
    tag: "New Arrival",
    description: "Explore Now!",
    image: "",
  },
  {
    id: 2,
    name: "Coats & Parkas",
    price: "$68",
    tag: "Trending",
    description: "Explore Now!",
    image: "",
  },
  {
    id: 3,
    name: "Tees & T-Shirt",
    price: "$28",
    tag: "Favorite",
    description: "Explore Now!",
    image: "",
  },
  {
    id: 4,
    name: "Trending on Instagram",
    price: "$40",
    tag: "Social Pick",
    description: "Explore Now!",
    image: "",
  },
  {
    id: 5,
    name: "All Under $40",
    price: "$39",
    tag: "Promo",
    description: "Explore Now!",
    image: "",
  },
];

const faqItems = [
  {
    question: "Can this work without a backend?",
    answer:
      "Yes. This MVP runs in the browser, so it can be hosted on GitHub Pages without environment variables or JSON keys.",
  },
  {
    question: "Can users upload images?",
    answer:
      "Yes. Product images can be uploaded and previewed immediately. For now, they reset after refresh until local storage is added.",
  },
  {
    question: "Can users export their brand style?",
    answer:
      "Yes. Users can copy CSS variables and color palettes from the Export tab.",
  },
];

export default function App() {
  const [theme, setTheme] = useState(defaultTheme);
  const [activeTab, setActiveTab] = useState("colors");
  const [activeColorKey, setActiveColorKey] = useState("primary");
  const [copied, setCopied] = useState("");
  const [previewPage, setPreviewPage] = useState("landing");
  const [products, setProducts] = useState(starterProducts);
  const [uploadedFonts, setUploadedFonts] = useState([]);
  const [customFontTarget, setCustomFontTarget] = useState("");
  const [selectedExport, setSelectedExport] = useState("CSS Variables");
  const [lastFontPairing, setLastFontPairing] = useState("");

  const cssVars = useMemo(() => {
    return {
      "--primary": theme.primary,
      "--secondary": theme.secondary,
      "--accent": theme.accent,
      "--background": theme.background,
      "--surface": theme.surface,
      "--text": theme.text,
      "--muted-text": theme.mutedText,
      "--border": theme.border,
      "--success": theme.success,
      "--warning": theme.warning,
      "--error": theme.error,
      "--heading-font": theme.headingFont,
      "--body-font": theme.bodyFont,
      "--button-font": theme.buttonFont,
      "--radius": `${theme.radius}px`,
      "--button-radius": `${theme.buttonRadius}px`,
      "--border-size": `${theme.borderSize}px`,
    };
  }, [theme]);

  const availableFonts = useMemo(() => {
    const customFontNames = uploadedFonts.map((font) => font.name);

    const activeThemeFonts = [
      theme.headingFont,
      theme.bodyFont,
      theme.buttonFont,
    ].filter(Boolean);

    const allFonts = [
      ...baseFontOptions,
      ...customFontNames,
      ...activeThemeFonts,
    ];

    const uniqueFonts = [...new Set(allFonts)];

    return [...uniqueFonts, CUSTOM_FONT_OPTION];
  }, [theme.headingFont, theme.bodyFont, theme.buttonFont, uploadedFonts]);

  const exportPreview = useMemo(() => {
    return createExportText(selectedExport, theme, cssVars, products);
  }, [cssVars, products, selectedExport, theme]);

  function updateTheme(key, value) {
    setTheme((current) => ({
      ...current,
      [key]: value,
    }));
  }

  function handleFontSelect(themeKey, value) {
    if (value === CUSTOM_FONT_OPTION) {
      setCustomFontTarget(themeKey);
      return;
    }

    updateTheme(themeKey, value);

    if (customFontTarget === themeKey) {
      setCustomFontTarget("");
    }
  }

  function randomizeFontPairing() {
    const randomPairing =
      fontPairingBank[Math.floor(Math.random() * fontPairingBank.length)];

    const [heading, body, button] = randomPairing.fonts;

    setTheme((current) => ({
      ...current,
      headingFont: heading,
      bodyFont: body ?? heading,
      buttonFont: button ?? body ?? heading,
    }));

    setCustomFontTarget("");
    setLastFontPairing(`${randomPairing.category}: ${randomPairing.name}`);
    setCopied("Font pairing applied!");
    setTimeout(() => setCopied(""), 1600);
  }

  function toggleMode() {
    setTheme((current) => {
      const isLight = current.mode === "light";

      return {
        ...current,
        mode: isLight ? "dark" : "light",
        background: isLight ? "#10131a" : "#f7f7fb",
        surface: isLight ? "#171b25" : "#ffffff",
        text: isLight ? "#f9fafb" : "#171821",
        mutedText: isLight ? "#a1a7b3" : "#6b7280",
        border: isLight ? "#2a3040" : "#e5e7eb",
      };
    });
  }

  function randomizeColors() {
    const palette = createRandomPalette(theme.colorScheme);

    setTheme((current) => ({
      ...current,
      ...palette,
      mode: "light",
    }));
  }

  async function copySelectedExport() {
    await navigator.clipboard.writeText(exportPreview);
    setCopied(`${selectedExport} copied!`);
    setTimeout(() => setCopied(""), 1800);
  }

  function resetTheme() {
    setTheme(defaultTheme);
    setActiveColorKey("primary");
    setPreviewPage("landing");
    setActiveTab("colors");
    setProducts(starterProducts);
    setCustomFontTarget("");
    setLastFontPairing("");
    setCopied("Reset complete!");
    setTimeout(() => setCopied(""), 1800);
  }

  function handleProductImageUpload(event, productId) {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setProducts((currentProducts) =>
      currentProducts.map((product) =>
        product.id === productId ? { ...product, image: imageUrl } : product,
      ),
    );

    event.target.value = "";
  }

  function handleImageUpload(event, themeKey) {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    updateTheme(themeKey, imageUrl);
    setCopied("Image uploaded!");
    setTimeout(() => setCopied(""), 1600);

    event.target.value = "";
  }

  async function handleFontUpload(event, themeKey) {
    const file = event.target.files?.[0];

    if (!file) return;

    const isSupportedFont = /\.(ttf|otf|woff|woff2)$/i.test(file.name);

    if (!isSupportedFont) {
      setCopied("Please upload a .ttf, .otf, .woff, or .woff2 font.");
      setTimeout(() => setCopied(""), 2200);
      event.target.value = "";
      return;
    }

    const cleanName = file.name
      .replace(/\.[^/.]+$/, "")
      .replace(/[^a-zA-Z0-9]/g, " ")
      .trim();

    const fontName = `Uploaded ${cleanName}`;
    const fontUrl = URL.createObjectURL(file);

    try {
      const customFont = new FontFace(fontName, `url(${fontUrl})`, {
        display: "swap",
      });

      await customFont.load();
      document.fonts.add(customFont);

      setUploadedFonts((currentFonts) => {
        const alreadyExists = currentFonts.some(
          (font) => font.name === fontName,
        );

        if (alreadyExists) return currentFonts;

        return [
          ...currentFonts,
          {
            name: fontName,
            fileName: file.name,
          },
        ];
      });

      updateTheme(themeKey, fontName);
      setCustomFontTarget("");

      setCopied(`${file.name} applied!`);
      setTimeout(() => setCopied(""), 1800);
    } catch {
      setCopied("Font upload failed. Try another font file.");
      setTimeout(() => setCopied(""), 2200);
    }

    event.target.value = "";
  }

  function renderCmsControls() {
    if (previewPage === "products") {
      return (
        <ProductCmsControls
          theme={theme}
          products={products}
          updateTheme={updateTheme}
          handleImageUpload={handleImageUpload}
          handleProductImageUpload={handleProductImageUpload}
        />
      );
    }

    if (previewPage === "brandbook") {
      return (
        <BrandBookCmsControls
          theme={theme}
          updateTheme={updateTheme}
          handleImageUpload={handleImageUpload}
        />
      );
    }

    return (
      <LandingCmsControls
        theme={theme}
        updateTheme={updateTheme}
        handleImageUpload={handleImageUpload}
      />
    );
  }

  return (
    <main className="studio" style={cssVars}>
      <aside className="settings-panel">
        <div className="panel-header clean-panel-header">
          <div>
            <p className="eyebrow">Brand Preview Studio</p>
            <h1>{theme.brandName}</h1>
          </div>
        </div>

        <div className="preview-switcher clean-preview-switcher">
          {previewTabs.map((tab) => (
            <button
              key={tab.id}
              className={previewPage === tab.id ? "active" : ""}
              onClick={() => setPreviewPage(tab.id)}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="tabs clean-settings-tabs">
          {settingTabs.map((tab) => (
            <button
              key={tab.id}
              className={activeTab === tab.id ? "active" : ""}
              onClick={() => setActiveTab(tab.id)}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>

        <section className="settings-content">
          {activeTab === "colors" && (
            <div className="control-group">
              <h2>Colors</h2>

              <section className="quick-editor-card">
                <div className="quick-editor-title">
                  <div>
                    <h2>Quick edit</h2>
                    <p>Pick what you want to change first.</p>
                  </div>

                  <div className="quick-actions">
                    <button onClick={toggleMode} title="Theme" type="button">
                      {theme.mode === "light" ? "☀️" : "🌙"}
                    </button>

                    <button onClick={resetTheme} title="Reset" type="button">
                      ↺
                    </button>
                  </div>
                </div>

                <div className="quick-color-grid">
                  {coreColorFields.map(([key, label]) => (
                    <button
                      key={key}
                      className={`quick-color-button ${
                        activeColorKey === key ? "active" : ""
                      }`}
                      onClick={() => setActiveColorKey(key)}
                      type="button"
                    >
                      <span
                        className="quick-color-swatch"
                        style={{ background: theme[key] }}
                      ></span>

                      <span>{label}</span>
                    </button>
                  ))}
                </div>

                <label className="active-color-editor">
                  <span>
                    Editing:{" "}
                    {coreColorFields.find(([key]) => key === activeColorKey)?.[1]}
                  </span>

                  <div className="color-input-wrap">
                    <input
                      type="color"
                      value={theme[activeColorKey]}
                      onChange={(event) =>
                        updateTheme(activeColorKey, event.target.value)
                      }
                    />

                    <input
                      type="text"
                      value={theme[activeColorKey]}
                      onChange={(event) =>
                        updateTheme(activeColorKey, event.target.value)
                      }
                    />
                  </div>
                </label>

                <div className="color-rule-row">
                  <label>
                    <span>Color rule</span>

                    <select
                      value={theme.colorScheme}
                      onChange={(event) =>
                        updateTheme("colorScheme", event.target.value)
                      }
                    >
                      {paletteOptions.map((option) => (
                        <option value={option} key={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>

                  <button onClick={randomizeColors} type="button">
                    Randomize
                  </button>
                </div>
              </section>
            </div>
          )}

          {activeTab === "typography" && (
            <div className="control-group">
              <h2>Typography</h2>

              <button
                className="full-button"
                onClick={randomizeFontPairing}
                type="button"
              >
                Randomize Font Pairing
              </button>

              {lastFontPairing && (
                <p className="helper-text">
                  Last pairing: <strong>{lastFontPairing}</strong>
                </p>
              )}

              <FontSelectControl
                label="Heading Font"
                themeKey="headingFont"
                value={theme.headingFont}
                customFontTarget={customFontTarget}
                availableFonts={availableFonts}
                handleFontSelect={handleFontSelect}
                handleFontUpload={handleFontUpload}
              />

              <FontSelectControl
                label="Body Font"
                themeKey="bodyFont"
                value={theme.bodyFont}
                customFontTarget={customFontTarget}
                availableFonts={availableFonts}
                handleFontSelect={handleFontSelect}
                handleFontUpload={handleFontUpload}
              />

              <FontSelectControl
                label="Button Font"
                themeKey="buttonFont"
                value={theme.buttonFont}
                customFontTarget={customFontTarget}
                availableFonts={availableFonts}
                handleFontSelect={handleFontSelect}
                handleFontUpload={handleFontUpload}
              />

              <div className="typography-rule-card">
                <strong>Best practice</strong>
                <p>
                  Use headings for personality, body text for readability, and
                  button text for clear action.
                </p>
              </div>

              {uploadedFonts.length > 0 && (
                <div className="uploaded-font-list">
                  <strong>Uploaded fonts</strong>

                  {uploadedFonts.map((font) => (
                    <span key={font.name}>{font.fileName}</span>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "layout" && (
            <div className="control-group">
              <h2>Layout</h2>

              <label className="range-control">
                <span>Card Radius: {theme.radius}px</span>

                <input
                  type="range"
                  min="0"
                  max="44"
                  value={theme.radius}
                  onChange={(event) =>
                    updateTheme("radius", Number(event.target.value))
                  }
                />
              </label>

              <label className="range-control">
                <span>Button Radius: {theme.buttonRadius}px</span>

                <input
                  type="range"
                  min="0"
                  max="50"
                  value={theme.buttonRadius}
                  onChange={(event) =>
                    updateTheme("buttonRadius", Number(event.target.value))
                  }
                />
              </label>

              <label className="range-control">
                <span>Border Thickness: {theme.borderSize}px</span>

                <input
                  type="range"
                  min="0"
                  max="6"
                  value={theme.borderSize}
                  onChange={(event) =>
                    updateTheme("borderSize", Number(event.target.value))
                  }
                />
              </label>

              <label className="field-control">
                <span>Spacing</span>

                <select
                  value={theme.spacing}
                  onChange={(event) =>
                    updateTheme("spacing", event.target.value)
                  }
                >
                  <option value="compact">Compact</option>
                  <option value="comfortable">Comfortable</option>
                  <option value="spacious">Spacious</option>
                </select>
              </label>

              <label className="field-control">
                <span>Shadow</span>

                <select
                  value={theme.shadow}
                  onChange={(event) =>
                    updateTheme("shadow", event.target.value)
                  }
                >
                  <option value="none">None</option>
                  <option value="soft">Soft</option>
                  <option value="medium">Medium</option>
                  <option value="strong">Strong</option>
                </select>
              </label>
            </div>
          )}

          {activeTab === "cms" && (
            <div className="control-group">
              <h2>CMS</h2>
              <p className="helper-text">
                Editing content for:{" "}
                <strong>
                  {previewTabs.find((tab) => tab.id === previewPage)?.label}
                </strong>
              </p>

              {renderCmsControls()}
            </div>
          )}

          {activeTab === "motion" && (
            <div className="control-group">
              <h2>Animations</h2>

              <label className="field-control">
                <span>Button Animation</span>

                <select
                  value={theme.buttonAnimation}
                  onChange={(event) =>
                    updateTheme("buttonAnimation", event.target.value)
                  }
                >
                  {buttonAnimations.map(([value, label]) => (
                    <option value={value} key={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="field-control">
                <span>Card Animation</span>

                <select
                  value={theme.cardAnimation}
                  onChange={(event) =>
                    updateTheme("cardAnimation", event.target.value)
                  }
                >
                  {cardAnimations.map(([value, label]) => (
                    <option value={value} key={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="field-control">
                <span>Section Transition</span>

                <select
                  value={theme.sectionTransition}
                  onChange={(event) =>
                    updateTheme("sectionTransition", event.target.value)
                  }
                >
                  {sectionTransitions.map(([value, label]) => (
                    <option value={value} key={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="field-control">
                <span>Ticker Direction</span>

                <select
                  value={theme.tickerDirection}
                  onChange={(event) =>
                    updateTheme("tickerDirection", event.target.value)
                  }
                >
                  <option value="left">Move Left</option>
                  <option value="right">Move Right</option>
                </select>
              </label>

              <label className="range-control">
                <span>Ticker Speed: {theme.tickerSpeed}s</span>

                <input
                  type="range"
                  min="6"
                  max="45"
                  value={theme.tickerSpeed}
                  onChange={(event) =>
                    updateTheme("tickerSpeed", Number(event.target.value))
                  }
                />
              </label>
            </div>
          )}

          {activeTab === "export" && (
            <div className="control-group">
              <h2>Export</h2>

              <label className="field-control">
                <span>Export Format</span>

                <select
                  value={selectedExport}
                  onChange={(event) => setSelectedExport(event.target.value)}
                >
                  {exportOptions.map((option) => (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <div className="export-preview-card">
                <div>
                  <strong>{selectedExport}</strong>
                  <span>Preview</span>
                </div>

                <pre>
                  <code>{exportPreview}</code>
                </pre>
              </div>

              <button className="full-button" onClick={copySelectedExport}>
                Copy Selected Export
              </button>

              <button className="full-button danger" onClick={resetTheme}>
                Reset Everything
              </button>

              {copied && <p className="copied-message">{copied}</p>}
            </div>
          )}
        </section>
      </aside>

      <section
        className={`preview-shell spacing-${theme.spacing} shadow-${theme.shadow} btn-motion-${theme.buttonAnimation} card-motion-${theme.cardAnimation} section-transition-${theme.sectionTransition} product-style-${theme.productCardStyle} product-fit-${theme.productImageFit}`}
      >
        {previewPage === "landing" && <LandingPreview theme={theme} />}

        {previewPage === "products" && (
          <ProductsPreview products={products} theme={theme} />
        )}

        {previewPage === "brandbook" && <BrandBookPreview theme={theme} />}
      </section>
    </main>
  );
}

function FontSelectControl({
  label,
  themeKey,
  value,
  customFontTarget,
  availableFonts,
  handleFontSelect,
  handleFontUpload,
}) {
  const isCustomSelected = customFontTarget === themeKey;

  return (
    <>
      <label className="field-control">
        <span>{label}</span>

        <select
          value={isCustomSelected ? CUSTOM_FONT_OPTION : value}
          onChange={(event) => handleFontSelect(themeKey, event.target.value)}
        >
          {availableFonts.map((font) => (
            <option value={font} key={font}>
              {font}
            </option>
          ))}
        </select>
      </label>

      {isCustomSelected && (
        <UploadBox
          title={`Upload ${label}`}
          helper="TTF, OTF, WOFF, or WOFF2"
          accept=".ttf,.otf,.woff,.woff2"
          onChange={(event) => handleFontUpload(event, themeKey)}
        />
      )}
    </>
  );
}

function LandingCmsControls({ theme, updateTheme, handleImageUpload }) {
  return (
    <>
      <TextField
        label="Brand Name"
        value={theme.brandName}
        onChange={(value) => updateTheme("brandName", value)}
      />

      <UploadBox
        title="Upload Logo"
        helper="PNG, JPG, SVG, or WEBP"
        accept="image/*"
        onChange={(event) => handleImageUpload(event, "logoImage")}
      />

      <TextAreaField
        label="Landing Hero Title"
        value={theme.landingHeroTitle}
        onChange={(value) => updateTheme("landingHeroTitle", value)}
      />

      <TextAreaField
        label="Landing Hero Text"
        value={theme.landingHeroText}
        onChange={(value) => updateTheme("landingHeroText", value)}
      />

      <TextAreaField
        label="About Title"
        value={theme.landingAboutTitle}
        onChange={(value) => updateTheme("landingAboutTitle", value)}
      />

      <TextAreaField
        label="About Text"
        value={theme.landingAboutText}
        onChange={(value) => updateTheme("landingAboutText", value)}
      />

      <TextField
        label="Footer Text"
        value={theme.landingFooterText}
        onChange={(value) => updateTheme("landingFooterText", value)}
      />
    </>
  );
}

function ProductCmsControls({
  theme,
  products,
  updateTheme,
  handleImageUpload,
  handleProductImageUpload,
}) {
  return (
    <>
      <TextField
        label="Shop Name"
        value={theme.shopName}
        onChange={(value) => updateTheme("shopName", value)}
      />

      <UploadBox
        title="Upload Shop Logo"
        helper="PNG, JPG, SVG, or WEBP"
        accept="image/*"
        onChange={(event) => handleImageUpload(event, "logoImage")}
      />

      <TextAreaField
        label="Product Hero Title"
        value={theme.productHeroTitle}
        onChange={(value) => updateTheme("productHeroTitle", value)}
      />

      <TextAreaField
        label="Product Hero Text"
        value={theme.productHeroText}
        onChange={(value) => updateTheme("productHeroText", value)}
      />

      <TextAreaField
        label="Ticker Text"
        value={theme.tickerText}
        onChange={(value) => updateTheme("tickerText", value)}
      />

      <TextAreaField
        label="Sale Title"
        value={theme.saleTitle}
        onChange={(value) => updateTheme("saleTitle", value)}
      />

      <TextAreaField
        label="Sale Text"
        value={theme.saleText}
        onChange={(value) => updateTheme("saleText", value)}
      />

      <TextField
        label="Sale Date"
        value={theme.saleDate}
        onChange={(value) => updateTheme("saleDate", value)}
      />

      <TextAreaField
        label="App Promo Title"
        value={theme.appPromoTitle}
        onChange={(value) => updateTheme("appPromoTitle", value)}
      />

      <TextAreaField
        label="Newsletter Title"
        value={theme.newsletterTitle}
        onChange={(value) => updateTheme("newsletterTitle", value)}
      />

      <TextAreaField
        label="Newsletter Text"
        value={theme.newsletterText}
        onChange={(value) => updateTheme("newsletterText", value)}
      />

      <label className="field-control">
        <span>Product Card Style</span>

        <select
          value={theme.productCardStyle}
          onChange={(event) =>
            updateTheme("productCardStyle", event.target.value)
          }
        >
          <option value="clean">Clean</option>
          <option value="overlay">Overlay</option>
          <option value="minimal">Minimal</option>
          <option value="bold">Bold</option>
        </select>
      </label>

      <label className="field-control">
        <span>Product Image Fit</span>

        <select
          value={theme.productImageFit}
          onChange={(event) =>
            updateTheme("productImageFit", event.target.value)
          }
        >
          <option value="cover">Cover</option>
          <option value="contain">Contain</option>
        </select>
      </label>

      <div className="upload-grid">
        {products.map((product) => (
          <UploadBox
            key={product.id}
            title={product.name}
            helper="Upload product image"
            accept="image/*"
            onChange={(event) => handleProductImageUpload(event, product.id)}
          />
        ))}
      </div>
    </>
  );
}

function BrandBookCmsControls({ theme, updateTheme, handleImageUpload }) {
  return (
    <>
      <TextField
        label="Brand Name"
        value={theme.brandName}
        onChange={(value) => updateTheme("brandName", value)}
      />

      <TextField
        label="Brand Book Title"
        value={theme.brandBookTitle}
        onChange={(value) => updateTheme("brandBookTitle", value)}
      />

      <TextAreaField
        label="Brand Book Subtitle"
        value={theme.brandBookSubtitle}
        onChange={(value) => updateTheme("brandBookSubtitle", value)}
      />

      <TextField
        label="Slogan"
        value={theme.brandSlogan}
        onChange={(value) => updateTheme("brandSlogan", value)}
      />

      <UploadBox
        title="Main Logo"
        helper="PNG, JPG, SVG, or WEBP"
        accept="image/*"
        onChange={(event) => handleImageUpload(event, "logoImage")}
      />

      <UploadBox
        title="Alternate Logo"
        helper="For light/dark usage"
        accept="image/*"
        onChange={(event) => handleImageUpload(event, "logoAltImage")}
      />

      <UploadBox
        title="Logo Mark"
        helper="Small icon or symbol"
        accept="image/*"
        onChange={(event) => handleImageUpload(event, "logoMarkImage")}
      />

      <UploadBox
        title="Safe Zone Image"
        helper="Clear space guide"
        accept="image/*"
        onChange={(event) => handleImageUpload(event, "safeZoneImage")}
      />

      <TextAreaField
        label="Safe Zone Text"
        value={theme.safeZoneText}
        onChange={(value) => updateTheme("safeZoneText", value)}
      />

      <UploadBox
        title="Misuse Example"
        helper="Incorrect logo usage"
        accept="image/*"
        onChange={(event) => handleImageUpload(event, "misuseImage")}
      />

      <TextAreaField
        label="Misuse Text"
        value={theme.misuseText}
        onChange={(value) => updateTheme("misuseText", value)}
      />

      <TextAreaField
        label="Applications Text"
        value={theme.applicationsText}
        onChange={(value) => updateTheme("applicationsText", value)}
      />

      <UploadBox
        title="Application Mockup"
        helper="Website, poster, or deck mockup"
        accept="image/*"
        onChange={(event) => handleImageUpload(event, "applicationImage")}
      />

      <BrandVoiceEditor
        number="One"
        iconValue={theme.voiceOneIcon}
        wordValue={theme.voiceOneWord}
        quoteValue={theme.voiceOneQuote}
        updateTheme={updateTheme}
      />

      <BrandVoiceEditor
        number="Two"
        iconValue={theme.voiceTwoIcon}
        wordValue={theme.voiceTwoWord}
        quoteValue={theme.voiceTwoQuote}
        updateTheme={updateTheme}
      />

      <BrandVoiceEditor
        number="Three"
        iconValue={theme.voiceThreeIcon}
        wordValue={theme.voiceThreeWord}
        quoteValue={theme.voiceThreeQuote}
        updateTheme={updateTheme}
      />

      <BrandVoiceEditor
        number="Four"
        iconValue={theme.voiceFourIcon}
        wordValue={theme.voiceFourWord}
        quoteValue={theme.voiceFourQuote}
        updateTheme={updateTheme}
      />

      <BrandVoiceEditor
        number="Five"
        iconValue={theme.voiceFiveIcon}
        wordValue={theme.voiceFiveWord}
        quoteValue={theme.voiceFiveQuote}
        updateTheme={updateTheme}
      />
    </>
  );
}

function BrandVoiceEditor({
  number,
  iconValue,
  wordValue,
  quoteValue,
  updateTheme,
}) {
  const iconKey = `voice${number}Icon`;
  const wordKey = `voice${number}Word`;
  const quoteKey = `voice${number}Quote`;

  return (
    <div className="brand-voice-editor">
      <strong>Voice {number}</strong>

      <TextField
        label="Icon"
        value={iconValue}
        onChange={(value) => updateTheme(iconKey, value)}
      />

      <TextField
        label="Voice Word"
        value={wordValue}
        onChange={(value) => updateTheme(wordKey, value)}
      />

      <TextAreaField
        label="Quote"
        value={quoteValue}
        onChange={(value) => updateTheme(quoteKey, value)}
      />
    </div>
  );
}

function TextField({ label, value, onChange }) {
  return (
    <label className="field-control">
      <span>{label}</span>

      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function TextAreaField({ label, value, onChange }) {
  return (
    <label className="field-control">
      <span>{label}</span>

      <textarea
        value={value}
        rows="3"
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function UploadBox({ title, helper, accept, onChange }) {
  return (
    <label className="upload-drop-card">
      <input type="file" accept={accept} onChange={onChange} />

      <span className="upload-icon">☁</span>
      <strong>{title}</strong>
      <small>{helper}</small>
      <em>Browse</em>
    </label>
  );
}

function BrandLogo({ theme, label, image }) {
  const logoSource = image || theme.logoImage;

  return (
    <div className="brand-logo">
      {logoSource ? (
        <img className="brand-logo-image" src={logoSource} alt="Logo" />
      ) : (
        <span></span>
      )}

      <strong>{label}</strong>
    </div>
  );
}

function LandingPreview({ theme }) {
  return (
    <div className="landing-page">
      <nav className="preview-nav">
        <BrandLogo theme={theme} label={theme.brandName} />

        <div className="nav-links">
          <button>Features</button>
          <button>Gallery</button>
          <button>Pricing</button>
          <button>FAQ</button>
        </div>

        <button className="small-cta">Get Started</button>
      </nav>

      <section className="hero-section preview-section">
        <div className="hero-copy">
          <p className="preview-badge">Live brand preview</p>
          <h2>{theme.landingHeroTitle}</h2>

          <p>{theme.landingHeroText}</p>

          <div className="hero-actions">
            <button className="primary-cta">Start Designing</button>
            <button className="secondary-cta">View Demo</button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-card card-one">
            <span className="status-dot success"></span>
            Brand colors synced
          </div>

          <div className="mock-window">
            <div className="window-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="mock-content">
              <div className="mock-line long"></div>
              <div className="mock-line medium"></div>

              <div className="mock-grid">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>

          <div className="floating-card card-two">
            <span className="status-dot accent"></span>
            Typography updated
          </div>
        </div>
      </section>

      <section className="features-section preview-section">
        <PreviewCard
          title="Colors"
          text="Preview primary, secondary, accent, text, and background colors."
        />

        <PreviewCard
          title="Typography"
          text="Try font pairings for headings, body text, buttons, and brand elements."
        />

        <PreviewCard
          title="Layout"
          text="Adjust radius, shadows, borders, and spacing until the page feels right."
        />
      </section>

      <section className="about-section preview-section">
        <div>
          <p className="preview-badge">About the brand</p>
          <h3>{theme.landingAboutTitle}</h3>
        </div>

        <p>{theme.landingAboutText}</p>
      </section>

      <section className="pricing-section preview-section">
        <PreviewPricingCard
          name="Starter"
          price="Free"
          text="Perfect for testing a quick brand direction."
        />

        <PreviewPricingCard
          name="Studio"
          price="$12"
          text="For creators who want to export and reuse brand kits."
          featured
        />

        <PreviewPricingCard
          name="Team"
          price="$29"
          text="For teams designing multiple client brand systems."
        />
      </section>

      <AccordionSection />

      <footer className="preview-footer">
        <p>© 2026 Brand Preview Studio</p>
        <p>{theme.landingFooterText}</p>
      </footer>
    </div>
  );
}

function ProductsPreview({ products, theme }) {
  const heroImage = products.find((product) => product.image)?.image;

  const tickerItems = theme.tickerText
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  const repeatedTickerItems = [...tickerItems, ...tickerItems];

  return (
    <div className="fashion-page landing-page">
      <nav className="preview-nav fashion-preview-nav">
        <BrandLogo theme={theme} label={theme.shopName} />

        <div className="nav-links">
          <button>Catalogue</button>
          <button>Fashion</button>
          <button>Favourite</button>
          <button>Lifestyle</button>
        </div>

        <button className="small-cta">Sign Up</button>
      </nav>

      <section className="fashion-hero preview-section">
        <div className="fashion-hero-copy">
          <h2>{theme.productHeroTitle}</h2>

          <p>{theme.productHeroText}</p>

          <button>Shop Now</button>
        </div>

        <div className="fashion-hero-image">
          {heroImage ? (
            <img src={heroImage} alt="Uploaded hero product" />
          ) : (
            <div className="fashion-placeholder">
              <span>Upload a product image</span>
            </div>
          )}
        </div>
      </section>

      <section className="brand-strip ticker-strip">
        <div
          className={`ticker-track ticker-${theme.tickerDirection}`}
          style={{ "--ticker-speed": `${theme.tickerSpeed}s` }}
        >
          {repeatedTickerItems.map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </section>

      <section className="fashion-section preview-section">
        <h3>NEW ARRIVALS</h3>

        <div className="fashion-product-grid">
          {products.slice(0, 3).map((product) => (
            <FashionProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>

      <section className="sale-banner preview-section">
        <div className="sale-image">
          {products[3]?.image ? (
            <img src={products[3].image} alt={products[3].name} />
          ) : (
            <span>Promo Image</span>
          )}
        </div>

        <div className="sale-copy">
          <h3>{theme.saleTitle}</h3>

          <p>{theme.saleText}</p>

          <strong>{theme.saleDate}</strong>

          <button>Shop Now</button>
        </div>
      </section>

      <section className="fashion-section preview-section">
        <h3>YOUNG&apos;S FAVOURITE</h3>

        <div className="fashion-favorite-grid">
          {products.slice(3, 5).map((product) => (
            <FashionProductCard product={product} key={product.id} wide />
          ))}
        </div>
      </section>

      <section className="app-promo preview-section">
        <div>
          <h3>{theme.appPromoTitle}</h3>
          <p>{theme.appPromoText}</p>

          <div className="app-buttons">
            <button>App Store</button>
            <button>Google Play</button>
          </div>
        </div>

        <div className="phone-mockup">
          <span></span>
          <strong>Match your style</strong>
          <div></div>
          <div></div>
        </div>
      </section>

      <section className="newsletter-section preview-section">
        <h3>{theme.newsletterTitle}</h3>
        <p>{theme.newsletterText}</p>

        <form>
          <input placeholder="Add your email here" />
          <button type="button">Send</button>
        </form>
      </section>

      <footer className="fashion-footer">
        <div>
          <h3>{theme.shopName}</h3>
          <p>Complete your style with awesome products from us.</p>
        </div>

        <div>
          <strong>Company</strong>
          <span>About</span>
          <span>Contact us</span>
          <span>Support</span>
        </div>

        <div>
          <strong>Quick Link</strong>
          <span>Share Location</span>
          <span>Orders Tracking</span>
          <span>FAQs</span>
        </div>

        <div>
          <strong>Legal</strong>
          <span>Terms & conditions</span>
          <span>Privacy Policy</span>
        </div>
      </footer>
    </div>
  );
}

function BrandBookPreview({ theme }) {
  const brandColors = [
    ["Primary", theme.primary],
    ["Secondary", theme.secondary],
    ["Accent", theme.accent],
    ["Background", theme.background],
    ["Text", theme.text],
  ];

  const brandVoices = [
    [theme.voiceOneIcon, theme.voiceOneWord, theme.voiceOneQuote],
    [theme.voiceTwoIcon, theme.voiceTwoWord, theme.voiceTwoQuote],
    [theme.voiceThreeIcon, theme.voiceThreeWord, theme.voiceThreeQuote],
    [theme.voiceFourIcon, theme.voiceFourWord, theme.voiceFourQuote],
    [theme.voiceFiveIcon, theme.voiceFiveWord, theme.voiceFiveQuote],
  ];

  return (
    <div className="brandbook-page landing-page">
      <nav className="preview-nav brandbook-nav">
        <BrandLogo theme={theme} label={theme.brandName} />

        <div className="brandbook-version">
          <span>{theme.brandBookTitle}</span>
          <strong>Version 1.0</strong>
        </div>
      </nav>

      <section className="brandbook-cover preview-section">
        <div>
          <p className="preview-badge">Visual Identity</p>
          <h2>
            {theme.brandName}
            <br />
            {theme.brandBookTitle}
          </h2>

          <p>{theme.brandBookSubtitle}</p>
          <strong className="brandbook-slogan">{theme.brandSlogan}</strong>
        </div>

        <div className="brandbook-logo-stage">
          <BrandLogo theme={theme} label={theme.brandName} />
        </div>
      </section>

      <section className="brandbook-summary-grid preview-section">
        <BrandBookSummary number="01" title="Logo System" />
        <BrandBookSummary number="02" title="Safe Zone" />
        <BrandBookSummary number="03" title="Typography" />
        <BrandBookSummary number="04" title="Brand Voice" />
      </section>

      <section className="brandbook-section preview-section">
        <BrandBookHeading
          number="01"
          title="Logo Usage"
          text="Use the logo consistently across light, dark, and branded backgrounds."
        />

        <div className="brandbook-logo-grid">
          <div className="brandbook-logo-tile light">
            <BrandLogo
              theme={theme}
              label={theme.brandName}
              image={theme.logoImage}
            />
          </div>

          <div className="brandbook-logo-tile dark">
            <BrandLogo
              theme={theme}
              label={theme.brandName}
              image={theme.logoAltImage || theme.logoImage}
            />
          </div>

          <div className="brandbook-logo-tile primary">
            <BrandLogo
              theme={theme}
              label={theme.brandName}
              image={theme.logoMarkImage || theme.logoImage}
            />
          </div>
        </div>
      </section>

      <section className="brandbook-section preview-section">
        <BrandBookHeading
          number="02"
          title="Safe Zone"
          text={theme.safeZoneText}
        />

        <div className="safe-zone-card">
          {theme.safeZoneImage ? (
            <img src={theme.safeZoneImage} alt="Safe zone guide" />
          ) : (
            <div className="safe-zone-demo">
              <span></span>
              <BrandLogo theme={theme} label={theme.brandName} />
              <span></span>
            </div>
          )}
        </div>
      </section>

      <section className="brandbook-section preview-section">
        <BrandBookHeading
          number="03"
          title="Logo Misuse"
          text={theme.misuseText}
        />

        <div className="misuse-grid">
          <MisuseCard label="Do not stretch" />
          <MisuseCard label="Do not rotate" />
          <MisuseCard label="Do not recolor randomly" />

          <div className="misuse-card custom-misuse">
            {theme.misuseImage ? (
              <img src={theme.misuseImage} alt="Uploaded misuse example" />
            ) : (
              <span>Upload misuse example</span>
            )}
          </div>
        </div>
      </section>

      <section className="brandbook-section preview-section">
        <BrandBookHeading
          number="04"
          title="Color Palette"
          text="These are the current colors used across the landing page, product preview, and brand book."
        />

        <div className="brandbook-color-grid">
          {brandColors.map(([label, color]) => (
            <div className="brandbook-swatch" key={label}>
              <div style={{ background: color }}></div>
              <strong>{label}</strong>
              <span>{color}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="brandbook-section preview-section">
        <BrandBookHeading
          number="05"
          title="Typography"
          text="Keep heading, body, and button typography intentional and consistent."
        />

        <div className="brandbook-type-grid">
          <div className="type-card heading-type">
            <span>Heading Typeface</span>
            <strong>{theme.headingFont}</strong>
            <p>AaBbCcDd</p>
          </div>

          <div className="type-card body-type">
            <span>Body Typeface</span>
            <strong>{theme.bodyFont}</strong>
            <p>The quick brown fox jumps over the lazy dog. 0123456789</p>
          </div>

          <div className="type-card button-type">
            <span>Button Typeface</span>
            <strong>{theme.buttonFont}</strong>
            <button type="button">Sample Button</button>
          </div>
        </div>
      </section>

      <section className="brandbook-section preview-section brand-voice-section">
        <BrandBookHeading
          number="06"
          title="Brand Voice"
          text="Define how people should feel when they read or hear the brand."
        />

        <div className="brand-voice-list">
          {brandVoices.map(([icon, word, quote]) => (
            <article className="brand-voice-row" key={`${word}-${quote}`}>
              <div className="brand-voice-icon">{icon}</div>
              <strong>{word}</strong>
              <span></span>
              <p>“{quote}”</p>
            </article>
          ))}
        </div>
      </section>

      <section className="brandbook-section preview-section">
        <BrandBookHeading
          number="07"
          title="Applications"
          text={theme.applicationsText}
        />

        <div className="application-card">
          {theme.applicationImage ? (
            <img src={theme.applicationImage} alt="Brand application mockup" />
          ) : (
            <div>
              <BrandLogo theme={theme} label={theme.brandName} />
              <p>Website · Presentation · Social Post · Campaign</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function BrandBookHeading({ number, title, text }) {
  return (
    <div className="brandbook-section-heading">
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function MisuseCard({ label }) {
  return (
    <div className="misuse-card">
      <span>✕</span>
      <strong>{label}</strong>
    </div>
  );
}

function BrandBookSummary({ number, title }) {
  return (
    <article>
      <span>{number}</span>
      <strong>{title}</strong>
    </article>
  );
}

function FashionProductCard({ product, wide }) {
  return (
    <article className={`fashion-product-card ${wide ? "wide" : ""}`}>
      <div className="fashion-product-image">
        {product.image ? (
          <img src={product.image} alt={product.name} />
        ) : (
          <div className="fashion-product-placeholder">Upload Image</div>
        )}
      </div>

      <div className="fashion-product-info">
        <div>
          <h4>{product.name}</h4>
          <p>{product.description}</p>
        </div>

        <button type="button" className="product-arrow-button">
          →
        </button>
      </div>
    </article>
  );
}

function AccordionSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="accordion-section preview-section">
      <div className="accordion-heading">
        <p className="preview-badge">Questions</p>
        <h3>Frequently asked questions</h3>
      </div>

      <div className="accordion-list">
        {faqItems.map((item, index) => (
          <div
            className={`accordion-item ${openIndex === index ? "open" : ""}`}
            key={item.question}
          >
            <button
              onClick={() =>
                setOpenIndex((current) => (current === index ? -1 : index))
              }
              type="button"
            >
              <span>{item.question}</span>
              <strong>{openIndex === index ? "−" : "+"}</strong>
            </button>

            {openIndex === index && <p>{item.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

function PreviewCard({ title, text }) {
  return (
    <article className="preview-card">
      <div className="card-icon"></div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function PreviewPricingCard({ name, price, text, featured }) {
  return (
    <article className={`pricing-card ${featured ? "featured" : ""}`}>
      <p>{name}</p>
      <h3>{price}</h3>
      <span>{text}</span>
      <button type="button">
        {featured ? "Choose Studio" : "Preview Plan"}
      </button>
    </article>
  );
}

function createExportText(format, theme, cssVars, products) {
  if (format === "Tailwind Config") {
    return `theme: {
  extend: {
    colors: {
      primary: "${theme.primary}",
      secondary: "${theme.secondary}",
      accent: "${theme.accent}",
      background: "${theme.background}",
      text: "${theme.text}",
    },
    borderRadius: {
      card: "${theme.radius}px",
      button: "${theme.buttonRadius}px",
    },
    fontFamily: {
      heading: ["${theme.headingFont}", "sans-serif"],
      body: ["${theme.bodyFont}", "sans-serif"],
      button: ["${theme.buttonFont}", "sans-serif"],
    },
  },
}`;
  }

  if (format === "SCSS Variables") {
    return `$primary: ${theme.primary};
$secondary: ${theme.secondary};
$accent: ${theme.accent};
$background: ${theme.background};
$text: ${theme.text};
$heading-font: "${theme.headingFont}";
$body-font: "${theme.bodyFont}";
$button-font: "${theme.buttonFont}";
$card-radius: ${theme.radius}px;
$button-radius: ${theme.buttonRadius}px;`;
  }

  if (format === "DaisyUI Theme") {
    return `{
  brandify: {
    primary: "${theme.primary}",
    secondary: "${theme.secondary}",
    accent: "${theme.accent}",
    neutral: "${theme.text}",
    "base-100": "${theme.background}",
  },
}`;
  }

  if (format === "shadcn Tokens") {
    return `:root {
  --primary: ${theme.primary};
  --secondary: ${theme.secondary};
  --accent: ${theme.accent};
  --background: ${theme.background};
  --foreground: ${theme.text};
  --radius: ${theme.radius}px;
}`;
  }

  if (format === "Material UI Theme") {
    return `createTheme({
  palette: {
    primary: { main: "${theme.primary}" },
    secondary: { main: "${theme.secondary}" },
    background: { default: "${theme.background}" },
    text: { primary: "${theme.text}" },
  },
  typography: {
    fontFamily: "${theme.bodyFont}, sans-serif",
    h1: { fontFamily: "${theme.headingFont}, sans-serif" },
    button: { fontFamily: "${theme.buttonFont}, sans-serif" },
  },
  shape: {
    borderRadius: ${theme.radius},
  },
});`;
  }

  if (format === "Shades") {
    return `Primary: ${theme.primary}
Secondary: ${theme.secondary}
Accent: ${theme.accent}

Suggested shade usage:
20% - soft backgrounds
40% - borders and subtle UI
60% - hover states
80% - active states
100% - main brand color`;
  }

  if (format === "Gradients") {
    return `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})
linear-gradient(135deg, ${theme.primary}, ${theme.accent})
radial-gradient(circle at top left, ${theme.accent}, transparent 40%)`;
  }

  if (format === "Brand Book Copy") {
    return `${theme.brandName} ${theme.brandBookTitle}

Slogan:
${theme.brandSlogan}

Brand Voice:
- ${theme.voiceOneWord}: "${theme.voiceOneQuote}"
- ${theme.voiceTwoWord}: "${theme.voiceTwoQuote}"
- ${theme.voiceThreeWord}: "${theme.voiceThreeQuote}"
- ${theme.voiceFourWord}: "${theme.voiceFourQuote}"
- ${theme.voiceFiveWord}: "${theme.voiceFiveQuote}"

Safe Zone:
${theme.safeZoneText}

Logo Misuse:
${theme.misuseText}

Applications:
${theme.applicationsText}`;
  }

  if (format === "Brand JSON") {
    return JSON.stringify(
      {
        colors: {
          primary: theme.primary,
          secondary: theme.secondary,
          accent: theme.accent,
          background: theme.background,
          text: theme.text,
        },
        typography: {
          heading: theme.headingFont,
          body: theme.bodyFont,
          button: theme.buttonFont,
        },
        layout: {
          cardRadius: theme.radius,
          buttonRadius: theme.buttonRadius,
          borderSize: theme.borderSize,
          spacing: theme.spacing,
          shadow: theme.shadow,
        },
        content: {
          brandName: theme.brandName,
          shopName: theme.shopName,
          slogan: theme.brandSlogan,
        },
        products: products.map((product) => ({
          name: product.name,
          price: product.price,
          tag: product.tag,
          description: product.description,
        })),
      },
      null,
      2,
    );
  }

  return `:root {
${Object.entries(cssVars)
  .map(([key, value]) => `  ${key}: ${value};`)
  .join("\n")}
}`;
}

function createRandomPalette(scheme) {
  const hue = randomNumber(0, 359);
  const secondaryHue = getSecondaryHue(hue, scheme);
  const accentHue = getAccentHue(hue, scheme);

  return {
    primary: hslToHex(hue, randomNumber(62, 82), randomNumber(42, 56)),
    secondary: hslToHex(
      secondaryHue,
      randomNumber(58, 82),
      randomNumber(42, 58),
    ),
    accent: hslToHex(accentHue, randomNumber(66, 92), randomNumber(48, 64)),
    background: hslToHex(hue, randomNumber(35, 65), randomNumber(94, 98)),
    surface: "#ffffff",
    text: hslToHex(hue, randomNumber(25, 55), randomNumber(7, 14)),
    mutedText: hslToHex(hue, randomNumber(12, 28), randomNumber(38, 48)),
    border: hslToHex(hue, randomNumber(28, 48), randomNumber(84, 91)),
    success: hslToHex(145, 63, 42),
    warning: hslToHex(42, 92, 58),
    error: hslToHex(0, 72, 52),
  };
}

function getSecondaryHue(hue, scheme) {
  if (scheme === "Monochromatic") return hue;
  if (scheme === "Analogous") return rotateHue(hue, 28);
  if (scheme === "Complementary") return rotateHue(hue, 180);
  if (scheme === "Split Complementary") return rotateHue(hue, 150);
  if (scheme === "Triadic") return rotateHue(hue, 120);
  if (scheme === "Tetradic") return rotateHue(hue, 90);

  return rotateHue(hue, randomNumber(35, 180));
}

function getAccentHue(hue, scheme) {
  if (scheme === "Monochromatic") return hue;
  if (scheme === "Analogous") return rotateHue(hue, -28);
  if (scheme === "Complementary") return rotateHue(hue, 210);
  if (scheme === "Split Complementary") return rotateHue(hue, 210);
  if (scheme === "Triadic") return rotateHue(hue, 240);
  if (scheme === "Tetradic") return rotateHue(hue, 180);

  return rotateHue(hue, randomNumber(181, 320));
}

function rotateHue(hue, amount) {
  return (hue + amount + 360) % 360;
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;

  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));

  return `#${[f(0), f(8), f(4)]
    .map((value) =>
      Math.round(255 * value)
        .toString(16)
        .padStart(2, "0"),
    )
    .join("")}`;
}