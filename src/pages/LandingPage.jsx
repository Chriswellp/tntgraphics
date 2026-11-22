
import { Suspense, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import {
  ScrollControls,
  Scroll,
  useScroll,
} from '@react-three/drei';
import { TextureLoader, Vector3 } from 'three';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  ChevronDown,
  MessageCircle,
  MoveDown,
} from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/263781329858';

const SCENES = [
  {
    title: 'Your Vision.',
    highlight: 'Our Creativity.',
    description:
      'We transform ideas into powerful visual experiences through creativity, design and precision.',
    eyebrow: 'WELCOME TO TNT GRAPHICS',
    action: 'Explore Our Services',
  },
  {
    title: 'Make Your Brand',
    highlight: 'Impossible to Ignore.',
    description:
      'Professional vehicle branding, shop signage and road signage that make your business stand out.',
    eyebrow: 'DESIGN. PRINT. BRAND.',
    action: 'Discover Our Services',
  },
  {
    title: 'Step Inside',
    highlight: 'Experience Quality.',
    description:
      'From the first concept to the final print, discover the creativity behind every project.',
    eyebrow: 'CREATIVITY IN EVERY DETAIL',
    action: 'View Our Work',
  },
  {
    title: 'Let’s Create',
    highlight: 'Something Amazing.',
    description:
      'Your next big idea deserves the right creative partner. Let’s bring it to life.',
    eyebrow: 'TNT GRAPHICS',
    action: 'Chat With Our Team',
  },
];

function SceneImages() {
  const textures = useLoader(TextureLoader, [
    '/images/tnt-bakkie.png',
    '/images/tnt-building.png',
    '/images/tnt-entrance.png',
    '/images/tnt-studio.png',
  ]);

  const positions = [0, -24, -48, -72];

  return (
    <group>
      {textures.map((texture, index) => (
        <mesh
          key={index}
          position={[0, 0, positions[index]]}
        >
          <planeGeometry args={[32, 18]} />
          <meshBasicMaterial
            map={texture}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

function World() {
  const scroll = useScroll();
  const target = useRef(new Vector3());

  useFrame((state) => {
    const progress = scroll.offset;

    // Move the camera through the four image scenes.
    const cameraZ = 12 - progress * 72;

    target.current.set(0, 0, cameraZ);

    state.camera.position.lerp(target.current, 0.075);

    state.camera.lookAt(
      0,
      0,
      cameraZ - 12
    );
  });

  return (
    <>
      <ambientLight intensity={1.5} />

      <SceneImages />

      <Scroll html>
        <div className="tnt-story">
          {SCENES.map((scene, index) => (
            <section
              className={`tnt-scene tnt-scene-${index + 1}`}
              key={scene.eyebrow}
            >
              <div className="tnt-scene-content">
                <span className="tnt-eyebrow">
                  {scene.eyebrow}
                </span>

                <h1>
                  {scene.title}
                  <span>{scene.highlight}</span>
                </h1>

                <p>{scene.description}</p>

                {index === 3 ? (
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="tnt-primary-btn"
                  >
                    <MessageCircle size={19} />
                    {scene.action}
                    <ArrowRight size={18} />
                  </a>
                ) : (
                  <a
                    href={
                      index === 2
                        ? '/home#portfolio'
                        : '/services'
                    }
                    className="tnt-primary-btn"
                  >
                    {scene.action}
                    <ArrowRight size={18} />
                  </a>
                )}
              </div>

              {index < 3 && (
                <div className="tnt-scroll-hint">
                  <MoveDown size={20} />
                  <span>SCROLL TO EXPLORE</span>
                </div>
              )}

              <div className="tnt-scene-number">
                0{index + 1} / 04
              </div>
            </section>
          ))}
        </div>
      </Scroll>
    </>
  );
}

function LoadingScreen() {
  return (
    <div className="tnt-loading">
      <div className="tnt-loading-logo">
        TNT<span>GRAPHICS</span>
      </div>
      <div className="tnt-loader" />
      <p>Preparing your experience...</p>
    </div>
  );
}

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <main className="tnt-launch-page">
      <div className="tnt-canvas">
        <Canvas
          camera={{
            position: [0, 0, 12],
            fov: 50,
            near: 0.1,
            far: 150,
          }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: false,
          }}
        >
          <color attach="background" args={['#000000']} />

          <Suspense fallback={null}>
            <ScrollControls
              pages={4}
              damping={0.18}
            >
              <World />
            </ScrollControls>
          </Suspense>
        </Canvas>
      </div>

      <header className="tnt-topbar">
        <button
          className="tnt-logo"
          onClick={() => navigate('/')}
          aria-label="TNT Graphics home"
        >
          TNT
          <span>GRAPHICS</span>
        </button>

        <nav className="tnt-navigation">
          <button onClick={() => navigate('/home')}>
            Home
          </button>
          <button onClick={() => navigate('/services')}>
            Services
          </button>
          <button onClick={() => navigate('/home#portfolio')}>
            Our Work
          </button>
          <button onClick={() => navigate('/home#about')}>
            About
          </button>
          <button onClick={() => navigate('/home#contact')}>
            Contact
          </button>
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="tnt-whatsapp-top"
        >
          <MessageCircle size={17} />
          Chat on WhatsApp
        </a>
      </header>

      <button
        className="tnt-skip-button"
        onClick={() => navigate('/home')}
      >
        Skip Intro <ArrowRight size={16} />
      </button>

      <div className="tnt-bottom-progress">
        <span />
        <span />
        <span />
        <span />
      </div>

      <a
        className="tnt-floating-whatsapp"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with TNT Graphics on WhatsApp"
      >
        <MessageCircle size={25} />
      </a>
    </main>
  );
}
