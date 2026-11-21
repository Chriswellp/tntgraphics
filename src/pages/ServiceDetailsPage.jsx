
import Navbar from '../components/Navbar';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
  Sparkles
} from 'lucide-react';

import { getServiceBySlug, services } from '../data/services';

export default function ServiceDetailsPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const whatsappMessage = encodeURIComponent(
    `Hello TNT Graphics, I am interested in your ${service.title} service. I would like to discuss my project and request a quotation.`
  );

  const whatsappLink = `https://wa.me/263781329858?text=${whatsappMessage}`;

  const relatedServices = services.filter(
    (item) => item.slug !== service.slug
  );

  const galleryImages = service.gallery?.length
    ? service.gallery
    : [service.image];

  return (
    <>
      <Navbar />

      <main className="tnt-service-page">

        {/* SERVICE HERO */}
        <section className="tnt-service-hero">
          <div className="tnt-service-hero-glow" />

          <div className="services-container">

            <Link to="/services" className="tnt-service-back">
              <ArrowLeft size={17} />
              Back to all services
            </Link>

            <div className="tnt-service-hero-grid">

              <motion.div
                className="tnt-service-hero-copy"
                initial={{ opacity: 0, x: -35 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <span className="tnt-service-eyebrow">
                  <Sparkles size={15} />
                  {service.category}
                </span>

                <span className="tnt-service-number">
                  SERVICE {service.number} / TNT GRAPHICS
                </span>

                <h1>
                  {service.title}
                  <span>.</span>
                </h1>

                <p>{service.description}</p>

                <div className="tnt-service-hero-actions">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="tnt-service-primary-btn"
                  >
                    <MessageCircle size={19} />
                    Request a Quote
                    <ArrowUpRight size={18} />
                  </a>

                  <a
                    href="#service-gallery"
                    className="tnt-service-secondary-btn"
                  >
                    Explore Our Work
                    <ArrowRight size={17} />
                  </a>
                </div>

                <div className="tnt-service-hero-note">
                  <span />
                  CREATIVE WORK. PROFESSIONAL RESULTS.
                </div>
              </motion.div>

              <motion.div
                className="tnt-service-hero-visual"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="tnt-service-image-frame">
                  <img
                    src={service.image}
                    alt={`${service.title} by TNT Graphics`}
                  />
                </div>

                <div className="tnt-service-image-stamp">
                  <span>TNT</span>
                  <strong>GRAPHICS</strong>
                  <small>CREATIVE DESIGN STUDIO</small>
                </div>

                <div className="tnt-service-image-caption">
                  <span>01 / OUR EXPERTISE</span>
                  <strong>{service.title}</strong>
                </div>
              </motion.div>

            </div>
          </div>
        </section>


        {/* SERVICE INTRO STRIP */}
        <section className="tnt-service-strip">
          <div className="services-container tnt-service-strip-inner">
            <span>CREATIVITY</span>
            <i>✳</i>
            <span>QUALITY</span>
            <i>✳</i>
            <span>ORIGINALITY</span>
            <i>✳</i>
            <span>TNT GRAPHICS</span>
          </div>
        </section>


        {/* WHAT WE OFFER */}
        <section className="tnt-service-offer">
          <div className="services-container tnt-service-offer-grid">

            <motion.div
              className="tnt-service-offer-heading"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="tnt-service-section-label">
                01 / WHAT WE DO
              </span>

              <h2>
                Designed to make
                <span> an impression.</span>
              </h2>

              <p>
                Every project deserves attention to detail.
                Discover what we can create for you through our
                {` ${service.title.toLowerCase()} `} services.
              </p>

              <a href={whatsappLink} target="_blank" rel="noreferrer">
                Discuss your project
                <ArrowUpRight size={18} />
              </a>
            </motion.div>

            <div className="tnt-service-offer-list">
              {service.highlights.map((item, index) => (
                <motion.div
                  className="tnt-service-offer-item"
                  key={item}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <span className="tnt-service-offer-index">
                    0{index + 1}
                  </span>

                  <strong>{item}</strong>

                  <CheckCircle2 size={20} />
                </motion.div>
              ))}
            </div>

          </div>
        </section>


        {/* PORTFOLIO GALLERY */}
        <section
          className="tnt-service-gallery-section"
          id="service-gallery"
        >
          <div className="services-container">

            <div className="tnt-service-gallery-heading">
              <div>
                <span className="tnt-service-section-label">
                  02 / SELECTED WORK
                </span>

                <h2>
                  Work that speaks
                  <span> for itself.</span>
                </h2>
              </div>

              <p>
                A closer look at some of the creative work from
                TNT Graphics.
              </p>
            </div>

            <div className="tnt-service-gallery-grid">
              {galleryImages.map((image, index) => (
                <motion.div
                  className="tnt-service-gallery-card"
                  key={image}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.5,
                    delay: (index % 3) * 0.08
                  }}
                >
                  <div className="tnt-service-gallery-image">
                    <img
                      src={image}
                      alt={`${service.title} project ${index + 1}`}
                      loading="lazy"
                    />

                    <span>
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div className="tnt-service-gallery-overlay">
                      TNT GRAPHICS
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="tnt-service-gallery-footer">
              <span>CREATIVE IDEAS. REAL PROJECTS.</span>

              <Link to="/home#portfolio">
                View Full Portfolio
                <ArrowRight size={17} />
              </Link>
            </div>

          </div>
        </section>


        {/* WHY CHOOSE THIS SERVICE */}
        <section className="tnt-service-benefits">
          <div className="services-container">

            <div className="tnt-service-benefits-heading">
              <span className="tnt-service-section-label">
                03 / THE TNT DIFFERENCE
              </span>

              <h2>
                Why choose
                <span> TNT Graphics?</span>
              </h2>

              <p>
                We believe good design should do more than look
                attractive. It should help communicate your message
                and make your business stand out.
              </p>
            </div>

            <div className="tnt-service-benefits-grid">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  className="tnt-service-benefit-card"
                  key={benefit}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                >
                  <span className="tnt-benefit-number">
                    0{index + 1}
                  </span>

                  <div className="tnt-benefit-icon">
                    <CheckCircle2 size={25} />
                  </div>

                  <h3>{benefit}</h3>

                  <span className="tnt-benefit-line" />
                </motion.div>
              ))}
            </div>

          </div>
        </section>


        {/* WHATSAPP CTA */}
        <section className="tnt-service-cta">
          <div className="services-container tnt-service-cta-inner">

            <div className="tnt-service-cta-copy">
              <span className="tnt-service-section-label">
                04 / LET'S CREATE SOMETHING
              </span>

              <h2>
                Have a project
                <span> in mind?</span>
              </h2>

              <p>
                Let's bring your ideas to life. Contact TNT Graphics
                today and tell us what you need.
              </p>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="tnt-service-cta-button"
            >
              <MessageCircle size={21} />
              Start Your Enquiry
              <ArrowUpRight size={20} />
            </a>

          </div>
        </section>


        {/* RELATED SERVICES */}
        <section className="tnt-related-services">
          <div className="services-container">

            <div className="tnt-related-heading">
              <div>
                <span className="tnt-service-section-label">
                  05 / DISCOVER MORE
                </span>

                <h2>Explore our other services.</h2>
              </div>

              <Link to="/services">
                All Services
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="tnt-related-grid">
              {relatedServices.map((item, index) => (
                <Link
                  to={`/services/${item.slug}`}
                  className="tnt-related-card"
                  key={item.id}
                >
                  <div className="tnt-related-image">
                    <img src={item.image} alt={item.title} />

                    <span>0{index + 1}</span>

                    <div className="tnt-related-image-arrow">
                      <ArrowUpRight size={22} />
                    </div>
                  </div>

                  <div className="tnt-related-content">
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                    <p>{item.shortDescription}</p>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>

      </main>
    </>
  );
}
