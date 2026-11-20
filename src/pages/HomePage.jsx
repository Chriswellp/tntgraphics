import ContactSection from '../components/ContactSection';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Mail,
  MessageCircle,
  Palette,
  PenTool,
  Megaphone,
  PanelsTopLeft
} from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Logo Design',
    description:
      'Unique logos and visual identities that make your brand memorable.'
  },
  {
    icon: Megaphone,
    title: 'Flyers & Posters',
    description:
      'Eye-catching promotional designs that communicate your message.'
  },
  {
    icon: PanelsTopLeft,
    title: 'Social Media Design',
    description:
      'Professional digital graphics that elevate your online presence.'
  },
  {
    icon: PenTool,
    title: 'Brand Identity',
    description:
      'Consistent visual branding that gives your business its own identity.'
  }
];

const projects = [
  {
    title: 'Branded Caps & Merchandise',
    category: 'APPAREL & MERCHANDISE',
    image: '/images/tnt-merchandise.png',
    number: '01',
    description:
      'Creative branded apparel, caps and promotional merchandise.'
  },
  {
    title: 'Corporate Stationery',
    category: 'BUSINESS BRANDING',
    image: '/images/tnt-stationery.png',
    number: '02',
    description:
      'Professional stationery and corporate identity concepts.'
  },
  {
    title: 'Promotional Flyers & Posters',
    category: 'PRINT DESIGN',
    image: '/images/tnt-flyers.png',
    number: '03',
    description:
      'Bold promotional materials designed to capture attention.'
  },
  {
    title: 'Social Media Campaigns',
    category: 'DIGITAL MARKETING',
    image: '/images/tnt-social-media.png',
    number: '04',
    description:
      'Creative digital campaigns for stronger online visibility.'
  },
  {
    title: 'Product Packaging & Labels',
    category: 'PACKAGING DESIGN',
    image: '/images/tnt-packaging.png',
    number: '05',
    description:
      'Distinctive packaging and label concepts for memorable products.'
  },
  {
    title: 'Outdoor Advertising',
    category: 'ADVERTISING & SIGNAGE',
    image: '/images/tnt-advertising.png',
    number: '06',
    description:
      'Billboards, signage and large-format promotional concepts.'
  },
  {
    title: 'Creative Digital Artwork',
    category: 'DIGITAL ART',
    image: '/images/tnt-digital-art.png',
    number: '07',
    description:
      'Original digital compositions and imaginative visual concepts.'
  }
];

const reviews = [
  {
    number: '01',
    name: 'Sample Client 01',
    project: 'Branding Project',
    quote:
      'The design was creative, professional and exactly what I needed to give my brand a fresh identity.'
  },
  {
    number: '02',
    name: 'Sample Client 02',
    project: 'Graphic Design Project',
    quote:
      'I love the attention to detail. The visual presentation communicated my ideas beautifully.'
  },
  {
    number: '03',
    name: 'Sample Client 03',
    project: 'Promotional Design',
    quote:
      'The creativity and presentation made the entire experience feel professional and exciting.'
  }
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="website">

      {/* HEADER */}
      <header className="main-header">
        <a href="#home" className="main-brand" onClick={closeMenu}>
          <span>TNT</span> GRAPHICS
          <small>CREATIVE DESIGN STUDIO</small>
        </a>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? 'main-nav nav-open' : 'main-nav'}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
         <Link to="/services" onClick={closeMenu}>Services</Link>
          <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
          <a href="#reviews" onClick={closeMenu}>Reviews</a>
          <Link to="/products" onClick={closeMenu}>Products</Link>
          <a href="#contact" onClick={closeMenu}>Contact</a>

          <a
            href="#contact"
            className="nav-order"
            onClick={closeMenu}
          >
            Start an Order <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      <main>

        {/* HERO SECTION */}
        <section className="home-hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              <span /> YOUR CREATIVE DESIGN PARTNER
            </p>

            <h1>
              WE TURN
              <span> IDEAS INTO</span>
              <span className="blue-text"> VISUAL IMPACT.</span>
            </h1>

            <p className="hero-description">
              Welcome to TNT Graphics, where creativity, imagination
              and professional design come together to bring your ideas
              to life.
            </p>

            <div className="hero-actions">
              <a href="#portfolio" className="primary-button">
                EXPLORE OUR WORK <ArrowRight size={18} />
              </a>

              <a href="#services" className="secondary-button">
                OUR SERVICES
              </a>
            </div>

            <div className="hero-note">
              <span className="status-dot" />
              CREATIVITY. QUALITY. ORIGINALITY.
            </div>
          </div>

          <div className="hero-artwork">
            <div className="hero-image-main">
              <img
                src="/images/tnt-social-media.png"
                alt="TNT Graphics original social media design portfolio concept"
              />
            </div>

            <div className="hero-image-overlay">
              <span>CREATIVE</span>
              <strong>EXPRESSION</strong>
              <span>THROUGH DESIGN.</span>
            </div>

            <div className="floating-label">
              <span>01</span>
              <div>
                <strong>THINK.</strong>
                <strong>CREATE.</strong>
                <strong>INSPIRE.</strong>
              </div>
            </div>

            <div className="hero-decoration">TNT</div>
          </div>
        </section>

        {/* BRAND STRIP */}
        <section className="brand-strip">
          <span>GRAPHIC DESIGN</span>
          <span>✳</span>
          <span>CREATIVE THINKING</span>
          <span>✳</span>
          <span>VISUAL IDENTITY</span>
          <span>✳</span>
          <span>DIGITAL CREATIVITY</span>
        </section>

        {/* ABOUT SECTION */}
        <section className="about-section section-padding" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / WHO WE ARE</p>

            <h2>
              DESIGN THAT
              <span> SPEAKS FOR ITSELF.</span>
            </h2>
          </div>

          <div className="about-content">
            <p>
              TNT Graphics is a creative graphic design brand dedicated
              to transforming ideas into compelling visual experiences.
              We believe great design does more than look beautiful —
              it communicates, inspires and creates lasting impressions.
            </p>

            <a href="#services" className="text-link">
              DISCOVER WHAT WE DO <ArrowUpRight size={18} />
            </a>
          </div>
        </section>

      
{/* SERVICES SECTION */}
<section className="services-section section-padding" id="services">
  <div className="section-top">
    <div>
      <p className="eyebrow">02 / WHAT WE OFFER</p>

      <h2>
        CREATIVE SOLUTIONS.
        <span> POWERFUL IMPACT.</span>
      </h2>
    </div>

    <p>
      From building distinctive brands to creating powerful
      visual experiences, we bring ideas to life through design.
    </p>
  </div>

  <div className="services-grid">
    {[
      {
        number: '01',
        title: 'Branding & Visual Identity',
        description:
          'Build a memorable brand with professional logos, corporate identity and stationery.',
        image: '/images/tnt-stationery.png',
        link: '/services/branding'
      },
      {
        number: '02',
        title: 'Marketing & Promotional Design',
        description:
          'Capture attention with creative flyers, posters, brochures and promotional materials.',
        image: '/images/tnt-flyers.png',
        link: '/services/marketing'
      },
      {
        number: '03',
        title: 'Social Media & Digital Design',
        description:
          'Strengthen your online presence with engaging social media graphics and digital campaigns.',
        image: '/images/tnt-social-media.png',
        link: '/services/social-media'
      },
      {
        number: '04',
        title: 'Merchandise & Apparel Branding',
        description:
          'Bring your identity to life through branded clothing, caps and promotional merchandise.',
        image: '/images/tnt-merchandise.png',
        link: '/services/merchandise'
      }
    ].map((service, index) => (
      <Link
        to={service.link}
        className="service-card"
        key={service.number}
      >
        <div className="home-service-image">
          <img src={service.image} alt={service.title} />

          <span className="service-number">
            {service.number}
          </span>

          <span className="home-service-arrow">
            <ArrowUpRight size={21} />
          </span>
        </div>

        <div className="home-service-content">
          <h3>{service.title}</h3>
          <p>{service.description}</p>

          <span className="home-service-link">
            Explore Service <ArrowUpRight size={16} />
          </span>
        </div>
      </Link>
    ))}
  </div>

  <div className="home-services-bottom">
    <div>
      <span className="eyebrow">MORE CREATIVE POSSIBILITIES</span>
      <h3>Discover everything we can create for you.</h3>
    </div>

    <Link to="/services" className="home-services-button">
      Explore All Services <ArrowUpRight size={19} />
    </Link>
  </div>
</section>


        {/* PORTFOLIO SECTION */}
        <section className="portfolio-section section-padding" id="portfolio">
          <div className="section-top">
            <div>
              <p className="eyebrow">03 / SELECTED CREATIONS</p>

              <h2>
                OUR CREATIVE
                <span> WORLD.</span>
              </h2>
            </div>

            <p>
              Explore a collection of creative sample concepts
              showcasing the possibilities of TNT Graphics.
            </p>
          </div>

          <div className="tnt-portfolio-grid">
            {projects.map((project) => (
              <article className="tnt-portfolio-card" key={project.number}>
                <div className="tnt-portfolio-image">
                  <img
                    src={project.image}
                    alt={`${project.title} - TNT Graphics sample design`}
                    loading="lazy"
                  />

                  <span className="tnt-image-number">
                    {project.number}
                  </span>

                  <div className="tnt-image-overlay">
                    <span>VIEW DESIGN</span>
                    <ArrowUpRight size={24} />
                  </div>
                </div>

                <div className="tnt-portfolio-info">
                  <div>
                    <p>{project.category}</p>
                    <h3>{project.title}</h3>
                    <span>{project.description}</span>
                  </div>

                  <span className="tnt-portfolio-arrow">
                    ↗
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="portfolio-bottom">
            <span>CREATIVITY. QUALITY. ORIGINALITY.</span>
            <a href="#contact">
              HAVE A PROJECT IN MIND? LET'S TALK <ArrowUpRight size={17} />
            </a>
          </div>

          <p className="gallery-disclaimer">
            These are illustrative sample portfolio concepts created
            to demonstrate the creative possibilities of TNT Graphics.
            They are not presented as completed client commissions.
          </p>
        </section>

        {/* CUSTOMER REVIEWS SECTION */}
        <section className="reviews-section section-padding" id="reviews">
          <div className="section-top">
            <div>
              <p className="eyebrow">04 / CLIENT EXPERIENCES</p>

              <h2>
                WORDS THAT
                <span> INSPIRE US.</span>
              </h2>
            </div>

            <p>
              We believe great creative experiences begin with
              understanding your ideas and bringing them to life.
            </p>
          </div>

          <div className="reviews-grid">
            {reviews.map((review) => (
              <article className="review-card" key={review.number}>
                <div className="review-card-top">
                  <span className="review-stars">★★★★★</span>
                  <span className="review-number">
                    {review.number}
                  </span>
                </div>

                <p className="review-quote">
                  "{review.quote}"
                </p>

                <div className="review-client">
                  <div className="review-avatar">
                    {review.number}
                  </div>

                  <div>
                    <h3>{review.name}</h3>
                    <span>{review.project}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="reviews-disclaimer">
            These are illustrative sample testimonials, not verified
            customer reviews.
          </p>
        </section>
{/* CONTACT SECTION */}
<ContactSection />

      </main>

      {/* FOOTER */}
      <footer className="main-footer">
        <div>
          <a href="#home" className="main-brand footer-brand">
            <span>TNT</span> GRAPHICS
            <small>CREATIVE DESIGN STUDIO</small>
          </a>

          <p>
            Creative Design. Powerful Branding. Lasting Impressions.
          </p>
        </div>

        <div className="footer-socials">
          <a
            href="https://instagram.com/tntgraphics_zw"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <span style={{ fontSize: '20px' }}>◎</span>
          </a>

          <a
            href="mailto:tntgraphics.zw@gmail.com"
            aria-label="Email"
          >
            <Mail />
          </a>

          <a
            href="https://wa.me/263781329858"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <MessageCircle />
          </a>
        </div>

        <div className="footer-bottom">
          <span>© 2026 TNT GRAPHICS. ALL RIGHTS RESERVED.</span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>

    </div>
  );
}
