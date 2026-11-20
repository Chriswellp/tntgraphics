import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MessageCircle,
  ArrowUpRight,
  Send,
  CheckCircle2
} from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/263781329858?text=Hello%20TNT%20Graphics%2C%20I%20would%20like%20to%20make%20an%20enquiry.';

const EMAIL_ADDRESS = 'tntgraphics.zw@gmail.com';

// We will add the EmailJS credentials here after configuration.
const EMAILJS_SERVICE_ID = '';
const EMAILJS_TEMPLATE_ID = '';
const EMAILJS_PUBLIC_KEY = '';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));

    if (status) setStatus('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // EmailJS will be connected here after account configuration.
    if (
      !EMAILJS_SERVICE_ID ||
      !EMAILJS_TEMPLATE_ID ||
      !EMAILJS_PUBLIC_KEY
    ) {
      setStatus(
        'The email form is not connected yet. Please contact us through WhatsApp or email while we complete the setup.'
      );
      return;
    }
  };

  return (
    <section className="contact-section section-padding" id="contact">
      <div className="contact-container">

        {/* CONTACT INTRO */}
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">
            05 / LET'S CREATE SOMETHING
          </p>

          <h2>
            YOUR IDEA.
            <span> OUR CREATIVITY.</span>
          </h2>

          <p className="contact-intro">
            Have a project in mind? Let's work together to bring your
            creative vision to life.
          </p>
        </motion.div>

        {/* CONTACT OPTIONS */}
        <div className="contact-options">

          <motion.a
            href={`mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
              'Enquiry for TNT Graphics'
            )}`}
            className="contact-option email-option"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-option-icon">
              <Mail size={25} />
            </div>

            <div>
              <h3>Send an Email</h3>
              <p>Contact us directly</p>
              <span>{EMAIL_ADDRESS}</span>
            </div>

            <ArrowUpRight className="contact-option-arrow" size={23} />
          </motion.a>

          <motion.a
            href={WHATSAPP_URL}
            className="contact-option whatsapp-option"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <div className="contact-option-icon">
              <MessageCircle size={25} />
            </div>

            <div>
              <h3>WhatsApp</h3>
              <p>Chat with our team</p>
              <span>+263 78 132 9858</span>
            </div>

            <ArrowUpRight className="contact-option-arrow" size={23} />
          </motion.a>

        </div>

        {/* CONTACT FORM */}
        <motion.div
          className="contact-form-wrapper"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="contact-form-heading">
            <div>
              <span className="eyebrow">GET IN TOUCH</span>
              <h3>Send us a message</h3>
            </div>

            <div className="contact-form-symbol">
              <Send size={27} />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="contact-form-grid">

              <div className="contact-field">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">Email address</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field contact-field-full">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="What is your enquiry about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field contact-field-full">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell us about your project..."
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            {status && (
              <div className="contact-form-status" role="status">
                {status}
              </div>
            )}

            <button type="submit" className="contact-submit-button">
              SEND MESSAGE <ArrowUpRight size={19} />
            </button>
          </form>
        </motion.div>

        {/* BOTTOM NOTE */}
        <div className="contact-bottom-note">
          <CheckCircle2 size={17} />
          <span>Let's turn your next idea into something exceptional.</span>
        </div>

      </div>
    </section>
  );
}