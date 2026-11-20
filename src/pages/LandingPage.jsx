
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const gallery = [
  {
    image: '/images/tnt-social-media.png',
    title: 'Social Media',
    className: 'launch-card-main',
    number: '01'
  },
  {
    image: '/images/tnt-flyers.png',
    title: 'Flyers & Posters',
    className: 'launch-card-left',
    number: '02'
  },
  {
    image: '/images/tnt-stationery.png',
    title: 'Corporate Identity',
    className: 'launch-card-right',
    number: '03'
  },
  {
    image: '/images/tnt-merchandise.png',
    title: 'Branded Merchandise',
    className: 'launch-card-bottom-left',
    number: '04'
  },
  {
    image: '/images/tnt-packaging.png',
    title: 'Product Packaging',
    className: 'launch-card-bottom-right',
    number: '05'
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16
    }
  }
};

const revealUp = {
  hidden: {
    opacity: 0,
    y: 35
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 6000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const enterWebsite = () => {
    navigate('/home');
  };

  return (
    <main className="launch-page">

      {/* BACKGROUND EFFECTS */}
      <div className="launch-background-grid" />
      <div className="launch-glow launch-glow-one" />
      <div className="launch-glow launch-glow-two" />
      <div className="launch-glow launch-glow-three" />

      {/* HEADER */}
      <motion.header
        className="launch-header"
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <a href="#top" className="launch-brand">
          <span className="launch-brand-tnt">TNT</span>
          <span className="launch-brand-graphics">GRAPHICS</span>
          <small>CREATIVE DESIGN STUDIO</small>
        </a>

        <div className="launch-header-right">
          <span className="launch-live-dot" />
          <span>CREATIVE STUDIO</span>
          <span className="launch-header-line" />
          <span className="launch-location">ZIMBABWE</span>
        </div>
      </motion.header>

      {/* MAIN CONTENT */}
      <section className="launch-main" id="top">

        {/* LEFT SIDE */}
        <motion.div
          className="launch-copy"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="launch-eyebrow"
            variants={revealUp}
          >
            <span className="launch-eyebrow-line" />
            WELCOME TO TNT GRAPHICS
          </motion.div>

          <motion.h1 variants={revealUp}>
            IDEAS
            <span className="launch-heading-blue"> INTO</span>
            <br />
            <span className="launch-heading-outline">
              VISUAL
            </span>
            <br />
            IMPACT<span className="launch-period">.</span>
          </motion.h1>

          <motion.div
            className="launch-heading-caption"
            variants={revealUp}
          >
            <span />
            CREATIVITY MEETS DESIGN
          </motion.div>

          <motion.p
            className="launch-description"
            variants={revealUp}
          >
            We transform imagination into powerful visual experiences.
            Explore creative branding, graphic design and original
            concepts designed to make your ideas stand out.
          </motion.p>

          <motion.div
            className="launch-actions"
            variants={revealUp}
          >
            <button
              className="launch-enter-button"
              onClick={enterWebsite}
            >
              EXPLORE OUR WORLD
              <ArrowRight size={19} />
            </button>

            <a
              href="https://wa.me/263781329858"
              target="_blank"
              rel="noreferrer"
              className="launch-contact-link"
            >
              <MessageCircle size={17} />
              LET'S TALK
            </a>
          </motion.div>

          <motion.div
            className="launch-social-row"
            variants={revealUp}
          >
            <a
              href="https://instagram.com/tntgraphics_zw"
              target="_blank"
              rel="noreferrer"
            >
              INSTAGRAM ↗
            </a>

            <span className="launch-social-divider" />

            <span>CREATIVITY WITHOUT LIMITS.</span>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - ANIMATED IMAGE COLLAGE */}
        <div className="launch-gallery">

          <motion.div
            className="launch-gallery-heading"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span>SELECTED CREATIVE WORK</span>
            <strong>01 — 05</strong>
          </motion.div>

          <div className="launch-gallery-stage">

            <motion.div
              className="launch-gallery-ring launch-ring-one"
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: 'linear'
              }}
            />

            <motion.div
              className="launch-gallery-ring launch-ring-two"
              animate={{ rotate: -360 }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: 'linear'
              }}
            />

            {gallery.map((item, index) => (
              <motion.div
                key={item.number}
                className={`launch-image-card ${item.className}`}
                initial={{
                  opacity: 0,
                  scale: 0.75,
                  y: 45,
                  rotate: index % 2 === 0 ? -8 : 8
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  rotate: 0
                }}
                transition={{
                  delay: 0.55 + index * 0.18,
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{
                  scale: 1.055,
                  zIndex: 10,
                  transition: { duration: 0.25 }
                }}
              >
                <div className="launch-image-frame">
                  <img
                    src={item.image}
                    alt={`TNT Graphics ${item.title} portfolio concept`}
                  />
                </div>

                <div className="launch-image-label">
                  <span>{item.number}</span>
                  <strong>{item.title}</strong>
                </div>
              </motion.div>
            ))}

            <motion.div
              className="launch-floating-symbol"
              animate={{
                y: [0, -13, 0],
                rotate: [0, 8, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              ✳
            </motion.div>

            <motion.div
              className="launch-floating-tnt"
              animate={{
                y: [0, 12, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              TNT
            </motion.div>
          </div>

          <motion.div
            className="launch-gallery-footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <span>THINK. CREATE. INSPIRE.</span>
            <span>DESIGN WITH PURPOSE.</span>
          </motion.div>
        </div>
      </section>

      {/* MOVING BRAND STRIP */}
      <div className="launch-marquee">
        <div className="launch-marquee-track">
          {Array.from({ length: 2 }).map((_, index) => (
            <div className="launch-marquee-content" key={index}>
              <span>GRAPHIC DESIGN</span>
              <b>✳</b>
              <span>BRAND IDENTITY</span>
              <b>✳</b>
              <span>CREATIVE THINKING</span>
              <b>✳</b>
              <span>DIGITAL ARTWORK</span>
              <b>✳</b>
              <span>POWERFUL VISUALS</span>
              <b>✳</b>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER AND PROGRESS */}
      <motion.footer
        className="launch-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span>© 2026 TNT GRAPHICS</span>

        <span className="launch-footer-center">
          CREATIVE DESIGN. POWERFUL IMPACT.
        </span>

        <div className="launch-progress-area">
          <span>ENTERING WEBSITE</span>
          <div className="launch-progress-track">
            <motion.div
              className="launch-progress-fill"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{
                duration: 6,
                ease: 'linear'
              }}
            />
          </div>
        </div>
      </motion.footer>

    </main>
  );
}
