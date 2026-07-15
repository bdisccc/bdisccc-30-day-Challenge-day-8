import { useMemo, useState } from "react";

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
  buttonRadius: 999,
  spacing: "comfortable",
  shadow: "soft",
  borderSize: 1,

  mode: "light",
  colorScheme: "All",
  buttonAnimation: "shine",
  cardAnimation: "lift",
  productCardStyle: "clean",
  productImageFit: "cover",

  brandName: "Brandify",
  shopName: "FASHION",
  tickerText: "H&M, OBEY, shopify, LACOSTE, LEVI'S, amazon",
  tickerDirection: "left",
  tickerSpeed: 18,
};

const fontOptions = [
  "Inter",
  "Poppins",
  "Roboto",
  "Montserrat",
  "Nunito",
  "Merriweather",
  "Space Grotesk",
  "Playfair Display",
];

const quickColorFields = [
  ["text", "Text"],
  ["background", "Background"],
  ["primary", "Primary"],
  ["secondary", "Secondary"],
  ["accent", "Accent"],
];

const colorFields = [
  ["primary", "Primary"],
  ["secondary", "Secondary"],
  ["accent", "Accent"],
  ["background", "Background"],
  ["surface", "Surface / Card"],
  ["text", "Text"],
  ["mutedText", "Muted Text"],
  ["border", "Border"],
  ["success", "Success"],
  ["warning", "Warning"],
  ["error", "Error"],
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

  function updateTheme(key, value) {
    setTheme((current) => ({
      ...current,
      [key]: value,
    }));
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

  async function copyCssVariables() {
    const cssText = `:root {
${Object.entries(cssVars)
  .map(([key, value]) => `  ${key}: ${value};`)
  .join("\n")}
}`;

    await navigator.clipboard.writeText(cssText);
    setCopied("CSS variables copied!");
    setTimeout(() => setCopied(""), 1800);
  }

  async function copyColorPalette() {
    const palette = colorFields
      .map(([key, label]) => `${label}: ${theme[key]}`)
      .join("\n");

    await navigator.clipboard.writeText(palette);
    setCopied("Color palette copied!");
    setTimeout(() => setCopied(""), 1800);
  }

  function resetTheme() {
    setTheme(defaultTheme);
    setActiveColorKey("primary");
    setPreviewPage("landing");
    setProducts(starterProducts);
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
  }

  return (
    <main className="studio" style={cssVars}>
      <aside className="settings-panel">
        <div className="panel-header clean-panel-header">
          <div>
            <p className="eyebrow">Brand Preview Studio</p>
            <h1>Customize the preview</h1>
          </div>
        </div>

        <section className="quick-editor-card">
          <div className="quick-editor-title">
            <div>
              <h2>Quick edit</h2>
              <p>Pick what you want to change first.</p>
            </div>

            <div className="quick-actions">
              <button onClick={toggleMode} title="Theme">
                {theme.mode === "light" ? "☀️" : "🌙"}
              </button>

              <button onClick={randomizeColors} title="Randomize colors">
                🎲
              </button>

              <button onClick={resetTheme} title="Reset">
                ↺
              </button>
            </div>
          </div>

          <div className="quick-color-grid">
            {quickColorFields.map(([key, label]) => (
              <button
                key={key}
                className={`quick-color-button ${
                  activeColorKey === key ? "active" : ""
                }`}
                onClick={() => {
                  setActiveColorKey(key);
                  setActiveTab("colors");
                }}
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
              {colorFields.find(([key]) => key === activeColorKey)?.[1]}
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

            <button onClick={randomizeColors}>Randomize</button>
          </div>
        </section>

        <div className="preview-switcher">
          <button
            className={previewPage === "landing" ? "active" : ""}
            onClick={() => setPreviewPage("landing")}
          >
            Landing
          </button>

          <button
            className={previewPage === "products" ? "active" : ""}
            onClick={() => setPreviewPage("products")}
          >
            Products
          </button>
        </div>

        <div className="tabs">
          <button
            className={activeTab === "colors" ? "active" : ""}
            onClick={() => setActiveTab("colors")}
          >
            Colors
          </button>

          <button
            className={activeTab === "typography" ? "active" : ""}
            onClick={() => setActiveTab("typography")}
          >
            Type
          </button>

          <button
            className={activeTab === "layout" ? "active" : ""}
            onClick={() => setActiveTab("layout")}
          >
            Layout
          </button>

          <button
            className={activeTab === "motion" ? "active" : ""}
            onClick={() => setActiveTab("motion")}
          >
            Motion
          </button>

          <button
            className={activeTab === "products" ? "active" : ""}
            onClick={() => {
              setActiveTab("products");
              setPreviewPage("products");
            }}
          >
            Shop
          </button>

          <button
            className={activeTab === "export" ? "active" : ""}
            onClick={() => setActiveTab("export")}
          >
            Export
          </button>
        </div>

        <section className="settings-content">
          {activeTab === "colors" && (
            <div className="control-group">
              <h2>All brand colors</h2>

              <div className="advanced-color-grid open-grid">
                {colorFields.map(([key, label]) => (
                  <label className="color-control" key={key}>
                    <span>{label}</span>

                    <div className="color-input-wrap">
                      <input
                        type="color"
                        value={theme[key]}
                        onChange={(event) =>
                          updateTheme(key, event.target.value)
                        }
                      />

                      <input
                        type="text"
                        value={theme[key]}
                        onChange={(event) =>
                          updateTheme(key, event.target.value)
                        }
                      />
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {activeTab === "typography" && (
            <div className="control-group">
              <h2>Typography</h2>

              <label className="field-control">
                <span>Heading Font</span>

                <select
                  value={theme.headingFont}
                  onChange={(event) =>
                    updateTheme("headingFont", event.target.value)
                  }
                >
                  {fontOptions.map((font) => (
                    <option key={font}>{font}</option>
                  ))}
                </select>
              </label>

              <label className="field-control">
                <span>Body Font</span>

                <select
                  value={theme.bodyFont}
                  onChange={(event) =>
                    updateTheme("bodyFont", event.target.value)
                  }
                >
                  {fontOptions.map((font) => (
                    <option key={font}>{font}</option>
                  ))}
                </select>
              </label>

              <label className="field-control">
                <span>Button Font</span>

                <select
                  value={theme.buttonFont}
                  onChange={(event) =>
                    updateTheme("buttonFont", event.target.value)
                  }
                >
                  {fontOptions.map((font) => (
                    <option key={font}>{font}</option>
                  ))}
                </select>
              </label>
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

              <p className="helper-text">
                Choose an effect, then hover over buttons or cards in the
                preview.
              </p>
            </div>
          )}

          {activeTab === "products" && (
            <div className="control-group">
              <h2>Product Preview</h2>

              <label className="field-control">
                <span>Main Brand Name</span>

                <input
                  type="text"
                  value={theme.brandName}
                  onChange={(event) =>
                    updateTheme("brandName", event.target.value)
                  }
                  placeholder="Brandify"
                />
              </label>

              <label className="field-control">
                <span>Shop Logo Text</span>

                <input
                  type="text"
                  value={theme.shopName}
                  onChange={(event) =>
                    updateTheme("shopName", event.target.value)
                  }
                  placeholder="FASHION"
                />
              </label>

              <label className="field-control">
                <span>Ticker / Brand Strip Text</span>

                <textarea
                  value={theme.tickerText}
                  onChange={(event) =>
                    updateTheme("tickerText", event.target.value)
                  }
                  placeholder="H&M, OBEY, shopify, LACOSTE"
                  rows="3"
                />
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

              <div className="product-upload-list">
                {products.map((product) => (
                  <label className="product-upload-card" key={product.id}>
                    <span>{product.name}</span>

                    <input
                      type="file"
                      accept="image/*"
                      onChange={(event) =>
                        handleProductImageUpload(event, product.id)
                      }
                    />
                  </label>
                ))}
              </div>
            </div>
          )}

          {activeTab === "export" && (
            <div className="control-group">
              <h2>Export</h2>

              <button className="full-button" onClick={copyCssVariables}>
                Copy CSS Variables
              </button>

              <button
                className="full-button secondary"
                onClick={copyColorPalette}
              >
                Copy Color Palette
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
        className={`preview-shell spacing-${theme.spacing} shadow-${theme.shadow} btn-motion-${theme.buttonAnimation} card-motion-${theme.cardAnimation} product-style-${theme.productCardStyle} product-fit-${theme.productImageFit}`}
      >
        {previewPage === "landing" ? (
          <LandingPreview theme={theme} />
        ) : (
          <ProductsPreview products={products} theme={theme} />
        )}
      </section>
    </main>
  );
}

function LandingPreview({ theme }) {
  return (
    <div className="landing-page">
      <nav className="preview-nav">
        <div className="brand-logo">
          <span></span>
          {theme.brandName}
        </div>

        <div className="nav-links">
          <button>Features</button>
          <button>Gallery</button>
          <button>Pricing</button>
          <button>FAQ</button>
        </div>

        <button className="small-cta">Get Started</button>
      </nav>

      <section className="hero-section">
        <div className="hero-copy">
          <p className="preview-badge">Live brand preview</p>
          <h2>Build a website look before writing code.</h2>

          <p>
            Test your colors, fonts, rounded corners, buttons, cards, and
            overall landing page style in real time.
          </p>

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

      <section className="features-section">
        <PreviewCard
          title="Colors"
          text="Preview primary, secondary, accent, text, background, and status colors."
        />

        <PreviewCard
          title="Typography"
          text="Try different fonts for headings, body text, buttons, and brand elements."
        />

        <PreviewCard
          title="Layout"
          text="Adjust radius, shadows, borders, and spacing until the page feels right."
        />
      </section>

      <section className="about-section">
        <div>
          <p className="preview-badge">About the brand</p>
          <h3>Make your visual identity easier to test.</h3>
        </div>

        <p>
          This preview behaves like a real landing page, so you can see whether
          your brand feels playful, premium, modern, soft, bold, or minimal.
        </p>
      </section>

      <section className="pricing-section">
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
        <p>Made for fast visual branding experiments.</p>
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
        <div className="brand-logo">
          <span></span>
          {theme.shopName}
        </div>

        <div className="nav-links">
          <button>Catalogue</button>
          <button>Fashion</button>
          <button>Favourite</button>
          <button>Lifestyle</button>
        </div>

        <button className="small-cta">Sign Up</button>
      </nav>

      <section className="fashion-hero">
        <div className="fashion-hero-copy">
          <h2>
            LET&apos;S EXPLORE <mark>UNIQUE</mark> PRODUCTS.
          </h2>

          <p>
            This product page uses the same brand colors, fonts, radius, and
            button styles as the main preview.
          </p>

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

      <section className="fashion-section">
        <h3>NEW ARRIVALS</h3>

        <div className="fashion-product-grid">
          {products.slice(0, 3).map((product) => (
            <FashionProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>

      <section className="sale-banner">
        <div className="sale-image">
          {products[3]?.image ? (
            <img src={products[3].image} alt={products[3].name} />
          ) : (
            <span>Promo Image</span>
          )}
        </div>

        <div className="sale-copy">
          <h3>
            PAYDAY
            <br />
            SALE NOW
          </h3>

          <p>
            Spend minimal $100 get 30% off voucher code for your next purchase.
          </p>

          <strong>1 June - 10 June 2026</strong>

          <button>Shop Now</button>
        </div>
      </section>

      <section className="fashion-section">
        <h3>YOUNG&apos;S FAVOURITE</h3>

        <div className="fashion-favorite-grid">
          {products.slice(3, 5).map((product) => (
            <FashionProductCard product={product} key={product.id} wide />
          ))}
        </div>
      </section>

      <section className="app-promo">
        <div>
          <h3>DOWNLOAD APP & GET THE VOUCHER!</h3>
          <p>Test how your brand would look in a campaign section.</p>

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

      <section className="newsletter-section">
        <h3>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h3>
        <p>Type your email down below and be young wild generation.</p>

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
    <section className="accordion-section">
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
      <button>{featured ? "Choose Studio" : "Preview Plan"}</button>
    </article>
  );
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
