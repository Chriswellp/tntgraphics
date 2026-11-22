import ContactSection from '../components/ContactSection';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
  PanelsTopLeft,
  ChevronLeft,
  ChevronRight
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


const portfolioGroups = [
  {
    category: 'Vehicle Branding',
    images: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
      15, 16, 17, 18, 19, 20, 21, 22, 27, 32, 34, 36, 37, 38
    ]
  },
  {
    category: 'Shop Signage & Road Signage',
    images: [25, 28, 30, 31, 33, 35]
  },
  {
    category: 'Portraits & Banners',
    images: [23, 24, 26, 29]
  }
];

const projects = portfolioGroups.flatMap((group) =>
  group.images.map((number) => {
    const filename = number === 10
      ? 'imag10.jpeg'
      : `Image${number}.jpeg`;

    return {
      number: String(number).padStart(2, '0'),
      title: group.category,
      category: group.category.toUpperCase(),
      image: `/images/portfolio/${filename}`
    };
  })
);


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
const [portfolioFilter, setPortfolioFilter] = useState('All');
const [selectedProject, setSelectedProject] = useState(null);

const closeMenu = () => setMenuOpen(false);

const filteredProjects = projects.filter((project) =>
  portfolioFilter === 'All' ||
  project.category === portfolioFilter.toUpperCase()
);

const changeProject = (direction) => {
  if (!selectedProject) return;

  const currentIndex = filteredProjects.findIndex(
    (project) => project.number === selectedProject.number
  );

  const nextIndex =
    (currentIndex + direction + filteredProjects.length) %
    filteredProjects.length;

  setSelectedProject(filteredProjects[nextIndex]);
};

useEffect(() => {
  const handleKeyDown = (event) => {
    if (!selectedProject) return;

    if (event.key === 'Escape') {
      setSelectedProject(null);
    }

    if (event.key === 'ArrowRight') {
      changeProject(1);
    }

    if (event.key === 'ArrowLeft') {
      changeProject(-1);
    }
  };

  window.addEventListener('keydown', handleKeyDown);

  return () => window.removeEventListener('keydown', handleKeyDown);
}, [selectedProject, filteredProjects]);
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
  <div className="brand-strip-track">
    {[1, 2].map((item) => (
      <div className="brand-strip-content" key={item}>
        <span>GRAPHIC DESIGN</span>
        <span className="brand-strip-star">✳</span>
        <span>CREATIVE THINKING</span>
        <span className="brand-strip-star">✳</span>
        <span>VISUAL IDENTITY</span>
        <span className="brand-strip-star">✳</span>
        <span>DIGITAL CREATIVITY</span>
        <span className="brand-strip-star">✳</span>
      </div>
    ))}
  </div>
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
      From transforming vehicles into moving advertisements
      to creating striking signage and personalised visual
      designs, we bring your ideas to life.
    </p>
  </div>

  <div className="services-grid">
    {[
      {
        title: 'Vehicle Branding',
        description:
          'Give your vehicle a powerful identity with professional car and bakkie branding that gets your business noticed wherever you go.',
        image: '/images/portfolio/Image5.jpeg',
        link: '/services/vehicle-branding'
      },
      {
        title: 'Shop Signage & Road Signage',
        description:
          'Make your business stand out with eye-catching shop signs and clear, professionally designed road signage.',
        image: '/images/portfolio/Image31.jpeg',
        link: '/services/shop-road-signage'
      },
      {
        title: 'Portraits & Banners',
        description:
          'Bring your ideas to life with creative portrait designs and attractive banners for personal, business and promotional use.',
        image: '/images/portfolio/Image23.jpeg',
        link: '/services/portraits-banners'
      }
    ].map((service) => (
      <Link
        to={service.link}
        className="service-card"
        key={service.title}
      >
        <div className="home-service-image">
          <img src={service.image} alt={service.title} />

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
      <span className="eyebrow">OUR CREATIVE SERVICES</span>
      <h3>Let's bring your next idea to life.</h3>
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
      <p className="eyebrow">03 / OUR ACTUAL WORK</p>

      <h2>
        MADE TO MAKE
        <span> AN IMPRESSION.</span>
      </h2>
    </div>

    <p>
      Take a closer look at our creative work, from vehicle
      branding and professional signage to portraits and
      promotional banners.
    </p>
  </div>

 {/* PORTFOLIO FILTERS */}
<div className="portfolio-filters">
  {[
    'All',
    'Vehicle Branding',
    'Shop Signage & Road Signage',
    'Portraits & Banners'
  ].map((category) => (
    <button
      key={category}
      type="button"
      className={
        portfolioFilter === category
          ? 'portfolio-filter active'
          : 'portfolio-filter'
      }
      onClick={() => {
        setPortfolioFilter(category);
        setSelectedProject(null);
      }}
    >
      {category}
    </button>
  ))}
</div>

  {/* PORTFOLIO GALLERY */}
  <div className="tnt-portfolio-grid">
    {filteredProjects.map((project) => (
        <article
          className="tnt-portfolio-card"
          key={project.number}
        >
          <button
            type="button"
            className="portfolio-image-button"
            onClick={() => setSelectedProject(project)}
            aria-label={`View ${project.title} photograph ${project.number}`}
          >
            <div className="tnt-portfolio-image">
              <img
                src={project.image}
                alt={`${project.title} - TNT Graphics`}
                loading="lazy"
              />


              <div className="tnt-image-overlay">
                <span>VIEW IMAGE</span>
                <ArrowUpRight size={24} />
              </div>
            </div>
          </button>

          <div className="tnt-portfolio-info">
            <div>
              <p>{project.category}</p>
              <h3>{project.title}</h3>
            </div>

            <span className="tnt-portfolio-arrow">↗</span>
          </div>
        </article>
      ))}
  </div>

  <div className="portfolio-bottom">
    <span>CREATIVITY. QUALITY. ORIGINALITY.</span>

    <a href="#contact">
      HAVE A PROJECT IN MIND? LET'S TALK
      <ArrowUpRight size={17} />
    </a>
  </div>

  {/* IMAGE VIEWER */}
{selectedProject && (
  <div
    className="portfolio-lightbox"
    onClick={() => setSelectedProject(null)}
  >
    <button
      type="button"
      className="portfolio-lightbox-close"
      onClick={() => setSelectedProject(null)}
      aria-label="Close image viewer"
    >
      <X size={28} />
    </button>

    <button
      type="button"
      className="portfolio-lightbox-nav portfolio-lightbox-prev"
      onClick={(event) => {
        event.stopPropagation();
        changeProject(-1);
      }}
      aria-label="Previous project"
    >
      <ChevronLeft size={32} />
    </button>

    <div
      className="portfolio-lightbox-content"
      onClick={(event) => event.stopPropagation()}
    >
      <img
        src={selectedProject.image}
        alt={`${selectedProject.title} - TNT Graphics`}
      />

      <div className="portfolio-lightbox-caption">
        <span>{selectedProject.category}</span>
        <h3>{selectedProject.title}</h3>
        <p>
          PROJECT {selectedProject.number} / {filteredProjects.length}
        </p>
      </div>
    </div>

    <button
      type="button"
      className="portfolio-lightbox-nav portfolio-lightbox-next"
      onClick={(event) => {
        event.stopPropagation();
        changeProject(1);
      }}
      aria-label="Next project"
    >
      <ChevronRight size={32} />
    </button>
  </div>
)}

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
