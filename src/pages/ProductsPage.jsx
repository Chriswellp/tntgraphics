
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {
  ShoppingCart,
  Plus,
  Minus,
  X,
  ArrowUpRight,
  Trash2,
  MessageCircle,
  ShoppingBag,
  Sparkles
} from 'lucide-react';

import Navbar from '../components/Navbar';

const WHATSAPP_NUMBER = '263781329858';

const products = [
  {
    id: 1,
    name: 'Custom T-Shirt Branding',
    category: 'Merchandise',
    type: 'Physical Product',
    description: 'Custom-designed branded T-shirts for businesses, events and personal use.',
    image: '/images/tnt-merchandise.png',
    tag: 'POPULAR'
  },
  {
    id: 2,
    name: 'Branded Caps',
    category: 'Merchandise',
    type: 'Physical Product',
    description: 'Give your brand visibility with professionally designed branded caps.',
    image: '/images/tnt-merchandise.png'
  },
  {
    id: 3,
    name: 'Business Cards',
    category: 'Print & Stationery',
    type: 'Physical Product',
    description: 'Make a strong first impression with professional business card designs.',
    image: '/images/tnt-stationery.png'
  },
  {
    id: 4,
    name: 'Flyers & Posters',
    category: 'Print & Stationery',
    type: 'Physical Product',
    description: 'Promote your business, products and events with eye-catching designs.',
    image: '/images/tnt-flyers.png',
    tag: 'POPULAR'
  },
  {
    id: 5,
    name: 'Product Labels & Packaging',
    category: 'Packaging',
    type: 'Physical Product',
    description: 'Professional labels and packaging designs that make products stand out.',
    image: '/images/tnt-packaging.png'
  },
  {
    id: 6,
    name: 'Logo Design',
    category: 'Digital Design',
    type: 'Digital Service',
    description: 'A distinctive logo created to represent your business and its identity.',
    image: '/images/tnt-stationery.png'
  },
  {
    id: 7,
    name: 'Social Media Design Package',
    category: 'Digital Design',
    type: 'Digital Service',
    description: 'Creative digital graphics to help your business stand out online.',
    image: '/images/tnt-social-media.png',
    tag: 'POPULAR'
  },
  {
    id: 8,
    name: 'Custom Advertising Artwork',
    category: 'Digital Design',
    type: 'Digital Service',
    description: 'Professional advertising artwork for campaigns, promotions and outdoor displays.',
    image: '/images/tnt-advertising.png'
  }
];

const categories = [
  'All Products',
  'Merchandise',
  'Print & Stationery',
  'Packaging',
  'Digital Design'
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All Products');
  const [cartOpen, setCartOpen] = useState(false);

  const navigate = useNavigate();

  // Shared cart connected to the checkout page
  const {
    cart,
    cartCount,
    addToCart,
    updateQuantity,
    removeFromCart
  } = useCart();

  const filteredProducts =
    activeCategory === 'All Products'
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );

  // Send cart selection directly to WhatsApp
  const sendCartToWhatsApp = () => {
    if (cart.length === 0) return;

    const orderDetails = cart
      .map(
        (item) =>
          `• ${item.name} (${item.type}) — Quantity: ${item.quantity}`
      )
      .join('\n');

    const message = `Hello TNT Graphics! I would like to enquire about the following items:\n\n${orderDetails}\n\nPlease provide me with a quotation. Thank you.`;

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  // Navigate to checkout
  const proceedToCheckout = () => {
    setCartOpen(false);
    navigate('/checkout');
  };

  return (
    <>
      <Navbar />

      <main className="products-page">

        {/* HERO */}
        <section className="products-hero">
          <div className="products-hero-content">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="products-eyebrow">
                <Sparkles size={15} /> THE TNT GRAPHICS COLLECTION
              </p>

              <h1>
                CREATIVE
                <span> PRODUCTS.</span>
                <br />
                POWERFUL
                <span> IMPRESSIONS.</span>
              </h1>

              <p className="products-hero-description">
                Explore our collection of branded merchandise,
                professional print materials and creative digital
                design services. Whatever your idea, let's bring
                it to life.
              </p>

              <a href="#product-catalogue" className="products-hero-button">
                EXPLORE PRODUCTS <ArrowUpRight size={19} />
              </a>
            </motion.div>
          </div>

          <motion.div
            className="products-hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
          >
            <img
              src="/images/tnt-merchandise.png"
              alt="TNT Graphics branded merchandise"
            />

            <div className="products-floating-label">
              <span>DESIGN.</span>
              <span>CREATE.</span>
              <span>INSPIRE.</span>
            </div>
          </motion.div>

          <div className="products-hero-bottom">
            <span>PHYSICAL PRODUCTS</span>
            <span className="products-hero-line"></span>
            <span>DIGITAL DESIGN SERVICES</span>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="products-intro">
          <div>
            <p className="products-eyebrow">EXPLORE WHAT WE CREATE</p>
            <h2>
              EVERYTHING YOUR
              <span> BRAND NEEDS.</span>
            </h2>
          </div>

          <p>
            From physical branded products to custom digital
            artwork, discover creative solutions designed to
            help your business stand out.
          </p>
        </section>

        {/* PRODUCT CATALOGUE */}
        <section
          className="products-catalogue"
          id="product-catalogue"
        >
          <div className="products-catalogue-heading">
            <div>
              <p className="products-eyebrow">OUR COLLECTION</p>
              <h2>EXPLORE PRODUCTS</h2>
            </div>

            <button
              className="products-cart-button"
              onClick={() => setCartOpen(true)}
              type="button"
            >
              <ShoppingCart size={19} />
              MY CART
              <span>{cartCount}</span>
            </button>
          </div>

          {/* CATEGORY FILTERS */}
          <div className="products-filters">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? 'product-filter active'
                    : 'product-filter'
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* PRODUCT GRID */}
          <div className="products-grid">
            {filteredProducts.map((product, index) => (
              <motion.article
                className="product-card"
                key={product.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <div className="product-card-image">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                  />

                  {product.tag && (
                    <span className="product-tag">
                      {product.tag}
                    </span>
                  )}

                  <span className="product-type">
                    {product.type}
                  </span>
                </div>

                <div className="product-card-content">
                  <span className="product-category">
                    {product.category}
                  </span>

                  <h3>{product.name}</h3>

                  <p>{product.description}</p>

                  <div className="product-card-footer">
                    <span className="product-quote-label">
                      REQUEST A QUOTE
                    </span>

                    <button
                      type="button"
                      className="product-add-button"
                      onClick={() => {
                        addToCart(product);
                        setCartOpen(true);
                      }}
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <Plus size={21} />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="products-empty">
              No products found in this category.
            </p>
          )}
        </section>

        {/* BOTTOM CTA */}
        <section className="products-bottom-cta">
          <div>
            <p className="products-eyebrow">
              HAVE SOMETHING DIFFERENT IN MIND?
            </p>

            <h2>
              LET'S CREATE
              <span> IT TOGETHER.</span>
            </h2>

            <p>
              Need a custom design or a product that you cannot
              find here? Talk to our creative team.
            </p>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello TNT Graphics! I would like to enquire about a custom design.')}`}
            target="_blank"
            rel="noreferrer"
            className="products-bottom-button"
          >
            MAKE AN ENQUIRY <ArrowUpRight size={19} />
          </a>
        </section>

        {/* CART OVERLAY */}
        <AnimatePresence>
          {cartOpen && (
            <>
              <motion.div
                className="cart-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setCartOpen(false)}
              />

              <motion.aside
                className="products-cart-panel"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
              >
                <div className="cart-panel-header">
                  <div>
                    <p className="products-eyebrow">YOUR SELECTION</p>
                    <h2>MY CART ({cartCount})</h2>
                  </div>

                  <button
                    type="button"
                    className="cart-close-button"
                    onClick={() => setCartOpen(false)}
                    aria-label="Close cart"
                  >
                    <X size={23} />
                  </button>
                </div>

                {cart.length === 0 ? (
                  <div className="cart-empty">
                    <ShoppingBag size={45} />

                    <h3>Your cart is empty</h3>

                    <p>
                      Explore our collection and add something
                      creative to your cart.
                    </p>

                    <button
                      type="button"
                      onClick={() => setCartOpen(false)}
                    >
                      EXPLORE PRODUCTS
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="cart-items">
                      {cart.map((item) => (
                        <div className="cart-item" key={item.id}>
                          <img src={item.image} alt={item.name} />

                          <div className="cart-item-info">
                            <span>{item.type}</span>
                            <h3>{item.name}</h3>

                            <div className="cart-quantity">
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(item.id, -1)
                                }
                                aria-label={`Decrease ${item.name} quantity`}
                              >
                                <Minus size={14} />
                              </button>

                              <strong>{item.quantity}</strong>

                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(item.id, 1)
                                }
                                aria-label={`Increase ${item.name} quantity`}
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                          </div>

                          <button
                            type="button"
                            className="cart-remove-button"
                            onClick={() => removeFromCart(item.id)}
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 size={17} />
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="cart-panel-footer">
                      <div className="cart-quote-note">
                        <MessageCircle size={18} />

                        <p>
                          Prices are provided on request.
                          Send your selection to us for a quotation.
                        </p>
                      </div>

                      {/* NEW CHECKOUT BUTTON */}
                      <button
                        type="button"
                        className="cart-checkout-button"
                        onClick={proceedToCheckout}
                      >
                        PROCEED TO CHECKOUT
                        <ArrowUpRight size={19} />
                      </button>

                      {/* EXISTING WHATSAPP OPTION */}
                      <button
                        type="button"
                        className="cart-whatsapp-button"
                        onClick={sendCartToWhatsApp}
                      >
                        SEND ENQUIRY ON WHATSAPP
                        <ArrowUpRight size={19} />
                      </button>

                      <button
                        type="button"
                        className="cart-continue-button"
                        onClick={() => setCartOpen(false)}
                      >
                        CONTINUE BROWSING
                      </button>
                    </div>
                  </>
                )}
              </motion.aside>
            </>
          )}
        </AnimatePresence>

      </main>
    </>
  );
}
