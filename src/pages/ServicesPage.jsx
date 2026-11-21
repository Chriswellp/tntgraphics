
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react';
import { services } from '../data/services';

const serviceBenefits = [
  'Professional creative work',
  'Custom designs for your needs',
  'Quality-focused results',
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="services-page">

        {/* HERO SECTION */}
        <section className="services-hero">
          <div className="services-hero-glow" />

          <div className="services-container services-hero-layout">

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="services-hero-content"
            >
              <span className="services-eyebrow">
                <Sparkles size={16} />
                WHAT WE DO
              </span>

              <h1>
                Creative Work.
                <br />
                <span>Powerful Visibility.</span>
              </h1>

              <p>
                From professional vehicle branding to eye-catching
                signage, portraits and banners, TNT Graphics helps
                businesses and individuals make a lasting visual
                impression.
              </p>

              <div className="services-hero-actions">
                <a
                  href="#all-services"
                  className="services-primary-btn"
                >
                  Explore Our Services
                  <ArrowRight size={18} />
                </a>

                <a
                  href="https://wa.me/263781329858?text=Hello%20TNT%20Graphics%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
                  target="_blank"
                  rel="noreferrer"
                  className="services-secondary-btn"
                >
                  <MessageCircle size={18} />
                  Talk to Us
                </a>
              </div>

              <div className="services-hero-points">
                {serviceBenefits.map((benefit) => (
                  <span key={benefit}>
                    <CheckCircle2 size={16} />
                    {benefit}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="services-hero-visual"
              initial={{ opacity: 0, scale: 0.92, x: 25 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9 }}
            >
              <div className="services-hero-image-frame">
                <img
                  src="/images/portfolio/Image1.jpeg"
                  alt="TNT Graphics vehicle branding project"
                />

                <div className="services-visual-caption">
                  <span>CREATIVITY THAT SPEAKS</span>
                  <strong>Designed to stand out.</strong>
                </div>
              </div>

              <div className="services-visual-floating">
                <Sparkles size={20} />
                <div>
                  <strong>Make an Impression</strong>
                  <span>Bring your ideas to life.</span>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* SERVICES INTRODUCTION */}
        <section className="services-intro" id="all-services">
          <div className="services-container">

            <motion.div
              className="services-section-heading"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="services-eyebrow">
                OUR EXPERTISE
              </span>

              <h2>
                Our Services.
                <br />
                <span>Our Creative Solutions.</span>
              </h2>

              <p>
                We focus on three key creative services, delivering
                designs and branding solutions that help your ideas,
                business and identity stand out.
              </p>
            </motion.div>

            <div className="services-grid">
              {services.map((service, index) => (
                <motion.article
                  className="service-card"
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.12,
                  }}
                >
                  <Link
                    to={`/services/${service.slug}`}
                    className="service-card-link"
                    aria-label={`Explore ${service.title}`}
                  >
                    <div className="service-card-image">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                      />

                      <span className="service-number">
                        {service.number}
                      </span>

                      <span className="service-image-arrow">
                        <ArrowUpRight size={22} />
                      </span>
                    </div>

                    <div className="service-card-content">
                      <span className="service-category">
                        {service.category}
                      </span>

                      <h3>{service.title}</h3>

                      <p>{service.shortDescription}</p>

                      <span className="service-explore">
                        Explore Service
                        <ArrowRight size={17} />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="services-why">
          <div className="services-container services-why-layout">

            <motion.div
              className="services-why-heading"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="services-eyebrow">
                WHY TNT GRAPHICS
              </span>

              <h2>
                Your ideas deserve
                <span> to be seen.</span>
              </h2>

              <p>
                We believe great visuals do more than look good.
                They communicate, attract attention and help create
                memorable impressions.
              </p>
            </motion.div>

            <div className="services-why-list">
              {[
                {
                  number: '01',
                  title: 'Creative Approach',
                  description:
                    'We bring fresh ideas and thoughtful design into every project.',
                },
                {
                  number: '02',
                  title: 'Attention to Detail',
                  description:
                    'We focus on the details that make your branding and designs stand out.',
                },
                {
                  number: '03',
                  title: 'Made for Your Needs',
                  description:
                    'Every project is approached with your specific requirements in mind.',
                },
              ].map((item, index) => (
                <motion.div
                  className="services-why-item"
                  key={item.number}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="services-why-number">
                    {item.number}
                  </span>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>

                  <ArrowUpRight size={20} />
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* FINAL CTA */}
        <section className="services-cta">
          <div className="services-container services-cta-inner">

            <div>
              <span className="services-eyebrow">
                LET'S CREATE SOMETHING
              </span>

              <h2>
                Have a project
                <br />
                <span>in mind?</span>
              </h2>

              <p>
                Tell us what you need. Let's work together to turn
                your ideas into something remarkable.
              </p>
            </div>

            <a
              href="https://wa.me/263781329858?text=Hello%20TNT%20Graphics%2C%20I%20have%20a%20project%20I%20would%20like%20to%20discuss."
              target="_blank"
              rel="noreferrer"
              className="services-primary-btn"
            >
              Start a Conversation
              <ArrowRight size={18} />
            </a>

          </div>
        </section>

      </main>
    </>
  );
}
