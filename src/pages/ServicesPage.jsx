import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { services } from '../data/services';

export default function ServicesPage() {
  return (
  <>
    <Navbar />
    <main className="services-page">
      <section className="services-hero">
        <div className="services-hero-glow" />

        <div className="services-container">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="services-hero-content"
          >
            <span className="services-eyebrow">
              <Sparkles size={15} />
              WHAT WE CREATE
            </span>

            <h1>
              Creative Solutions.
              <br />
              <span>Powerful Impressions.</span>
            </h1>

            <p>
              From building distinctive brands to creating powerful
              promotional designs, we bring ideas to life through
              creativity, strategy and visual excellence.
            </p>

            <a href="#all-services" className="services-primary-btn">
              Explore Our Services <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div
            className="services-hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
          >
            <img
              src="/images/tnt-social-media.png"
              alt="TNT Graphics creative design work"
            />
            <div className="services-visual-caption">
              <span>IDEAS INTO VISUALS</span>
              <strong>Designed to stand out.</strong>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="services-intro" id="all-services">
        <div className="services-container">
          <div className="services-section-heading">
            <span className="services-eyebrow">OUR EXPERTISE</span>
            <h2>
              Everything your brand needs
              <span> to make an impact.</span>
            </h2>
            <p>
              Explore our creative services and discover how we can
              help bring your next project to life.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.article
                className="service-card"
                key={service.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="service-card-link"
                  aria-label={`Explore ${service.title}`}
                >
                  <div className="service-card-image">
                    <img src={service.image} alt={service.title} />
                    <span className="service-number">
                      {service.number}
                    </span>
                    <span className="service-image-arrow">
                      <ArrowRight size={20} />
                    </span>
                  </div>

                  <div className="service-card-content">
                    <span className="service-category">
                      {service.category}
                    </span>

                    <h3>{service.title}</h3>
                    <p>{service.shortDescription}</p>

                    <span className="service-explore">
                      Explore Service <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="services-container services-cta-inner">
          <div>
            <span className="services-eyebrow">LET'S WORK TOGETHER</span>
            <h2>
              Have a project
              <br />
              <span>in mind?</span>
            </h2>
            <p>
              Tell us what you have in mind. Let's create something
              remarkable together.
            </p>
          </div>

          <a
            href="https://wa.me/263781329858?text=Hello%20TNT%20Graphics%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
            target="_blank"
            rel="noreferrer"
            className="services-primary-btn"
          >
            Start a Conversation <ArrowRight size={18} />
          </a>
        </div>
      </section>
   </main>
  </>
);
}
    