import Navbar from '../components/Navbar';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
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

  const relatedServices = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

 return (
  <>
    <Navbar />

    <main className="service-details-page">
      <section className="service-details-hero">
        <div className="service-details-glow" />

        <div className="services-container">
          <Link to="/services" className="service-back-link">
            <ArrowLeft size={17} /> Back to all services
          </Link>

          <div className="service-details-hero-grid">
            <motion.div
              className="service-details-copy"
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="services-eyebrow">
                <Sparkles size={15} />
                {service.category}
              </span>

              <span className="service-details-number">
                SERVICE {service.number}
              </span>

              <h1>{service.title}</h1>

              <p>{service.description}</p>

              <a
                href={`https://wa.me/263781329858?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="services-primary-btn"
              >
                <MessageCircle size={18} />
                Request a Quote
              </a>
            </motion.div>

            <motion.div
              className="service-details-image"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img src={service.image} alt={service.title} />
              <div className="service-image-label">
                <span>TNT GRAPHICS</span>
                <strong>Creative excellence.</strong>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="service-inclusions">
        <div className="services-container service-inclusions-grid">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="services-eyebrow">WHAT WE OFFER</span>
            <h2>
              What's included
              <span> in this service?</span>
            </h2>
            <p>
              We provide creative solutions designed around your
              business, your audience and your communication goals.
            </p>
          </motion.div>

          <div className="service-inclusions-list">
            {service.highlights.map((item, index) => (
              <motion.div
                className="service-inclusion-item"
                key={item}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
              >
                <CheckCircle2 size={21} />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-benefits">
        <div className="services-container">
          <div className="service-benefits-heading">
            <span className="services-eyebrow">WHY IT MATTERS</span>
            <h2>
              Give your brand
              <span> the advantage.</span>
            </h2>
          </div>

          <div className="service-benefits-grid">
            {service.benefits.map((benefit, index) => (
              <motion.div
                className="service-benefit-card"
                key={benefit}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
              >
                <span>0{index + 1}</span>
                <p>{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-quote-section">
        <div className="services-container service-quote-inner">
          <div>
            <span className="services-eyebrow">YOUR IDEA. OUR CREATIVITY.</span>
            <h2>
              Ready to bring
              <br />
              <span>your idea to life?</span>
            </h2>
            <p>
              Get in touch with TNT Graphics and let's discuss
              what we can create together.
            </p>
          </div>

          <a
            href={`https://wa.me/263781329858?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="services-primary-btn"
          >
            <MessageCircle size={18} />
            Request a Quote
          </a>
        </div>
      </section>

      <section className="related-services">
        <div className="services-container">
          <div className="related-services-heading">
            <div>
              <span className="services-eyebrow">DISCOVER MORE</span>
              <h2>Explore other services</h2>
            </div>

            <Link to="/services">
              All Services <ArrowRight size={17} />
            </Link>
          </div>

          <div className="related-services-grid">
            {relatedServices.map((item) => (
              <Link
                to={`/services/${item.slug}`}
                className="related-service-card"
                key={item.id}
              >
                <img src={item.image} alt={item.title} />
                <div>
                  <span>{item.number} / {item.category}</span>
                  <h3>{item.title}</h3>
                  <ArrowRight size={18} />
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
