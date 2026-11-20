import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  MessageCircle,
  CheckCircle2,
  Package,
  Truck
} from 'lucide-react';

import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';

const WHATSAPP_NUMBER = '263781329858';

export default function CheckoutPage() {
  const navigate = useNavigate();

  const {
    cart,
    cartCount,
    updateQuantity,
    removeFromCart
  } = useCart();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    orderType: 'Delivery',
    address: '',
    instructions: ''
  });

  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));

    setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (cart.length === 0) {
      setError('Your cart is empty. Please select products before continuing.');
      return;
    }

    const orderItems = cart
      .map(
        (item, index) =>
          `${index + 1}. ${item.name}\n   Type: ${item.type}\n   Quantity: ${item.quantity}`
      )
      .join('\n\n');

    const message = `
HELLO TNT GRAPHICS!

I would like to submit an order enquiry.

CUSTOMER DETAILS
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}

ORDER DETAILS
${orderItems}

ORDER PREFERENCE
${formData.orderType}
${formData.orderType === 'Delivery' ? `Delivery Address: ${formData.address}` : 'Collection requested'}

ADDITIONAL INSTRUCTIONS
${formData.instructions || 'None'}

Please review my order and provide a quotation.

Thank you!
    `.trim();

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Navbar />

      <main className="checkout-page">

        {/* CHECKOUT HERO */}
        <section className="checkout-hero">
          <div className="checkout-hero-inner">
            <p className="checkout-eyebrow">
              TNT GRAPHICS / ORDER CHECKOUT
            </p>

            <h1>
              COMPLETE
              <span> YOUR ORDER.</span>
            </h1>

            <p>
              You're one step closer to bringing your creative
              ideas to life. Review your selection and tell us
              how we can reach you.
            </p>
          </div>
        </section>

        <section className="checkout-main">

          <div className="checkout-top-link">
            <button
              type="button"
              onClick={() => navigate('/products')}
            >
              <ArrowLeft size={17} />
              BACK TO PRODUCTS
            </button>

            <span>{cartCount} ITEM(S) IN YOUR CART</span>
          </div>

          {cart.length === 0 ? (
            <div className="checkout-empty">
              <ShoppingBag size={55} />

              <h2>Your cart is empty</h2>

              <p>
                You haven't selected any products or design
                services yet. Explore our collection to get started.
              </p>

              <Link to="/products">
                EXPLORE PRODUCTS <ArrowUpRight size={18} />
              </Link>
            </div>
          ) : (
            <div className="checkout-layout">

              {/* CUSTOMER FORM */}
              <motion.div
                className="checkout-form-card"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="checkout-section-heading">
                  <span className="checkout-step">01</span>

                  <div>
                    <p>YOUR INFORMATION</p>
                    <h2>Customer Details</h2>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>

                  <div className="checkout-fields-grid">

                    <div className="checkout-field checkout-field-full">
                      <label htmlFor="checkout-name">
                        Full Name *
                      </label>

                      <input
                        id="checkout-name"
                        type="text"
                        name="fullName"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="checkout-field">
                      <label htmlFor="checkout-email">
                        Email Address *
                      </label>

                      <input
                        id="checkout-email"
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="checkout-field">
                      <label htmlFor="checkout-phone">
                        Phone Number *
                      </label>

                      <input
                        id="checkout-phone"
                        type="tel"
                        name="phone"
                        placeholder="+263..."
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                  </div>

                  {/* ORDER PREFERENCE */}
                  <div className="checkout-section-heading checkout-second-heading">
                    <span className="checkout-step">02</span>

                    <div>
                      <p>HOW SHOULD WE GET IT TO YOU?</p>
                      <h2>Order Preference</h2>
                    </div>
                  </div>

                  <div className="checkout-order-options">

                    <label
                      className={
                        formData.orderType === 'Delivery'
                          ? 'checkout-order-option selected'
                          : 'checkout-order-option'
                      }
                    >
                      <input
                        type="radio"
                        name="orderType"
                        value="Delivery"
                        checked={formData.orderType === 'Delivery'}
                        onChange={handleChange}
                      />

                      <Truck size={23} />

                      <span>
                        <strong>Delivery</strong>
                        <small>Have your order delivered</small>
                      </span>
                    </label>

                    <label
                      className={
                        formData.orderType === 'Collection'
                          ? 'checkout-order-option selected'
                          : 'checkout-order-option'
                      }
                    >
                      <input
                        type="radio"
                        name="orderType"
                        value="Collection"
                        checked={formData.orderType === 'Collection'}
                        onChange={handleChange}
                      />

                      <Package size={23} />

                      <span>
                        <strong>Collection</strong>
                        <small>Arrange to collect your order</small>
                      </span>
                    </label>

                  </div>

                  {formData.orderType === 'Delivery' && (
                    <div className="checkout-field checkout-field-full checkout-address-field">
                      <label htmlFor="checkout-address">
                        Delivery Address *
                      </label>

                      <textarea
                        id="checkout-address"
                        name="address"
                        placeholder="Enter your delivery address and location..."
                        rows="3"
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  )}

                  {/* ADDITIONAL INSTRUCTIONS */}
                  <div className="checkout-field checkout-field-full checkout-instructions">
                    <label htmlFor="checkout-instructions">
                      Additional Instructions (Optional)
                    </label>

                    <textarea
                      id="checkout-instructions"
                      name="instructions"
                      rows="4"
                      placeholder="Tell us about sizes, colours, quantities, design preferences or anything else we should know..."
                      value={formData.instructions}
                      onChange={handleChange}
                    />
                  </div>

                  {error && (
                    <div className="checkout-error" role="alert">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="checkout-submit-button"
                  >
                    SUBMIT ORDER ENQUIRY
                    <MessageCircle size={19} />
                  </button>

                  <p className="checkout-submit-note">
                    Your order details will open in WhatsApp so
                    you can send them directly to TNT Graphics.
                  </p>

                </form>
              </motion.div>

              {/* ORDER SUMMARY */}
              <motion.aside
                className="checkout-summary-card"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
              >
                <div className="checkout-summary-heading">
                  <div>
                    <p>YOUR SELECTION</p>
                    <h2>Order Summary</h2>
                  </div>

                  <ShoppingBag size={24} />
                </div>

                <div className="checkout-summary-items">

                  {cart.map((item) => (
                    <div className="checkout-summary-item" key={item.id}>
                      <img
                        src={item.image}
                        alt={item.name}
                      />

                      <div className="checkout-summary-info">
                        <span>{item.type}</span>
                        <h3>{item.name}</h3>

                        <div className="checkout-quantity">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, -1)
                            }
                            aria-label={`Decrease ${item.name} quantity`}
                          >
                            <Minus size={13} />
                          </button>

                          <strong>{item.quantity}</strong>

                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, 1)
                            }
                            aria-label={`Increase ${item.name} quantity`}
                          >
                            <Plus size={13} />
                          </button>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="checkout-remove-item"
                        onClick={() => removeFromCart(item.id)}
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}

                </div>

                <div className="checkout-summary-total">
                  <span>Total items</span>
                  <strong>{cartCount}</strong>
                </div>

                <div className="checkout-no-price">
                  <span>QUOTATION</span>
                  <h3>Price on request</h3>
                  <p>
                    Our team will review your selection and
                    provide a quotation based on your requirements.
                  </p>
                </div>

                <div className="checkout-trust-note">
                  <CheckCircle2 size={18} />
                  <p>
                    No payment is required at this stage.
                    Your order will be reviewed by our team.
                  </p>
                </div>

                <Link
                  to="/products"
                  className="checkout-add-more"
                >
                  CONTINUE SHOPPING
                  <ArrowUpRight size={17} />
                </Link>

              </motion.aside>

            </div>
          )}

        </section>

      </main>
    </>
  );
}