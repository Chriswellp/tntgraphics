import { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ScrollControls, Text, useScroll } from '@react-three/drei';
import { CatmullRomCurve3, Vector3 } from 'three';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, MessageCircle, MoveDown } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/263781329858';

const STORY = [
  {
    eyebrow: 'WELCOME TO TNT GRAPHICS',
    title: 'Your Vision.',
    highlight: 'Our Creativity.',
    body: 'We transform ideas into powerful visual experiences through creativity, design and precision.',
    action: 'Explore Our Services',
    href: '/services',
  },
  {
    eyebrow: '01 / VEHICLE BRANDING',
    title: 'Make Your Brand',
    highlight: 'Move.',
    body: 'Turn every journey into an opportunity with bold, professional vehicle branding.',
    action: 'Explore Vehicle Branding',
    href: '/services/vehicle-branding',
  },
  {
    eyebrow: '02 / SHOP & ROAD SIGNAGE',
    title: 'Get Seen.',
    highlight: 'Get Remembered.',
    body: 'From shop fronts to roadside signs, make your business impossible to miss.',
    action: 'Explore Signage',
    href: '/services/shop-road-signage',
  },
  {
    eyebrow: '03 / PORTRAITS & BANNERS',
    title: 'Bring Your Ideas',
    highlight: 'To Life.',
    body: 'Discover the creativity behind every design, portrait and printed banner.',
    action: 'View Our Work',
    href: '/services/portraits-banners',
  },
];

function Box({ position, size, color = '#ffffff', roughness = 0.65, metalness = 0, ...props }) {
  return (
    <mesh position={position} castShadow receiveShadow {...props}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} roughness={roughness} metalness={metalness} />
    </mesh>
  );
}

function Glass({ position, size, opacity = 0.28, color = '#9bd9ee' }) {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshPhysicalMaterial
        color={color}
        metalness={0.12}
        roughness={0.08}
        transmission={0.28}
        transparent
        opacity={opacity}
        thickness={0.18}
        ior={1.35}
      />
    </mesh>
  );
}

function Wheel({ position }) {
  return (
    <group position={position} rotation={[0, 0, Math.PI / 2]}>
      <mesh castShadow>
        <cylinderGeometry args={[0.48, 0.48, 0.28, 32]} />
        <meshStandardMaterial color="#101215" roughness={0.88} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.27, 0.27, 0.30, 32]} />
        <meshStandardMaterial color="#c6d0d8" metalness={0.8} roughness={0.22} />
      </mesh>
      <mesh position={[0, 0, 0.16]}>
        <cylinderGeometry args={[0.11, 0.11, 0.02, 24]} />
        <meshStandardMaterial color="#00BFFF" metalness={0.45} roughness={0.3} />
      </mesh>
    </group>
  );
}

function BrandedPickup() {
  return (
    <group position={[-5.1, 0, -5.2]} rotation={[0, -0.12, 0]}>
      {/* Chassis and lower body */}
      <Box position={[0, 0.72, 0]} size={[2.35, 0.48, 4.5]} color="#f4f7f9" roughness={0.32} metalness={0.22} />
      <Box position={[0, 1.04, 1.35]} size={[2.32, 0.2, 1.55]} color="#00BFFF" roughness={0.28} metalness={0.25} />
      <Box position={[0, 1.04, -1.25]} size={[2.28, 0.22, 1.55]} color="#00BFFF" roughness={0.32} metalness={0.2} />
      {/* Cabin */}
      <Box position={[0, 1.68, 0.12]} size={[2.05, 1.12, 1.95]} color="#f5f7f8" roughness={0.26} metalness={0.18} />
      <Glass position={[0, 1.72, 1.105]} size={[1.76, 0.72, 0.035]} opacity={0.8} color="#142a3a" />
      <Glass position={[0, 1.72, -0.865]} size={[1.72, 0.7, 0.035]} opacity={0.8} color="#142a3a" />
      <Glass position={[-1.04, 1.72, 0.12]} size={[0.035, 0.72, 1.52]} opacity={0.8} color="#142a3a" />
      <Glass position={[1.04, 1.72, 0.12]} size={[0.035, 0.72, 1.52]} opacity={0.8} color="#142a3a" />
      {/* Tray rails */}
      {[-1, 1].map((side) => (
        <Box key={side} position={[side * 1.08, 1.34, -1.25]} size={[0.12, 0.55, 1.65]} color="#f7f9fa" />
      ))}
      <Box position={[0, 1.3, -2.02]} size={[2.1, 0.48, 0.12]} color="#f7f9fa" />
      {/* Cyan side stripe */}
      <Box position={[1.19, 0.88, -0.15]} size={[0.025, 0.16, 2.55]} color="#00BFFF" />
      <Text position={[1.205, 1.02, -0.35]} rotation={[0, Math.PI / 2, 0]} fontSize={0.28} color="#00BFFF" anchorX="center" anchorY="middle" fontWeight="bold">TNT</Text>
      <Text position={[1.21, 0.81, -0.35]} rotation={[0, Math.PI / 2, 0]} fontSize={0.095} color="#101820" anchorX="center" anchorY="middle">GRAPHICS</Text>
      {/* Front details */}
      <Box position={[0, 0.75, 2.27]} size={[0.9, 0.22, 0.05]} color="#101820" />
      {[-1, 1].map((side) => (
        <group key={side}>
          <Box position={[side * 0.87, 1.05, 2.28]} size={[0.34, 0.19, 0.06]} color="#eaf8ff" />
          <Box position={[side * 1.12, 0.48, 1.25]} size={[0.06, 0.24, 0.18]} color="#111111" />
          <Wheel position={[side * 1.13, 0.48, 1.3]} />
          <Wheel position={[side * 1.13, 0.48, -1.35]} />
        </group>
      ))}
    </group>
  );
}

function RoadAndApproach() {
  return (
    <group>
      <Box position={[0, -0.25, -13]} size={[30, 0.35, 76]} color="#202429" roughness={0.96} />
      <Box position={[0, -0.045, -13]} size={[9.5, 0.035, 76]} color="#30353b" roughness={0.98} />
      {Array.from({ length: 15 }).map((_, i) => (
        <Box key={i} position={[0, -0.015, 20 - i * 4.8]} size={[0.13, 0.025, 2.1]} color="#f2f4f5" />
      ))}
      {/* Curbs and forecourt */}
      <Box position={[-10.5, -0.03, -13]} size={[1.2, 0.18, 76]} color="#aeb5bb" />
      <Box position={[10.5, -0.03, -13]} size={[1.2, 0.18, 76]} color="#aeb5bb" />
      <Box position={[0, -0.08, -17.5]} size={[24, 0.18, 9]} color="#c4cbd0" roughness={0.9} />
      {[-10, 10].map((x) => (
        <group key={x} position={[x, 0, -12]}>
          <Box position={[0, 0.55, 0]} size={[0.28, 1.1, 0.28]} color="#252a30" />
          <Box position={[0, 1.15, 0]} size={[0.45, 0.16, 0.45]} color="#00BFFF" />
        </group>
      ))}
      {/* Low landscaping planters */}
      {[-9, 9].map((x) => (
        <group key={x} position={[x, 0, -18]}>
          <Box position={[0, 0.35, 0]} size={[2.2, 0.7, 2.2]} color="#242a2e" />
          {[-0.55, 0, 0.55].map((offset) => (
            <mesh key={offset} position={[offset, 1.15 + Math.abs(offset) * 0.2, 0]} castShadow>
              <sphereGeometry args={[0.68, 16, 12]} />
              <meshStandardMaterial color="#315c46" roughness={0.9} />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
}

function BuildingExterior() {
  return (
    <group>
      {/* Main building shell; front is toward positive Z */}
      <Box position={[0, -0.02, -31]} size={[20, 0.3, 28]} color="#d8dde1" roughness={0.78} />
      <Box position={[-9.65, 4.1, -31]} size={[0.55, 8.2, 27]} color="#e8ecef" />
      <Box position={[9.65, 4.1, -31]} size={[0.55, 8.2, 27]} color="#e8ecef" />
      <Box position={[0, 4.1, -44.4]} size={[20, 8.2, 0.55]} color="#e8ecef" />
      {/* Front portal, central entrance left open */}
      <Box position={[-7.3, 4.1, -17.5]} size={[5.4, 8.2, 0.65]} color="#f2f4f6" />
      <Box position={[7.3, 4.1, -17.5]} size={[5.4, 8.2, 0.65]} color="#f2f4f6" />
      <Box position={[0, 7.75, -17.5]} size={[9.2, 0.9, 0.8]} color="#151a20" />
      <Box position={[0, 7.68, -17.02]} size={[8.2, 0.56, 0.12]} color="#00BFFF" roughness={0.3} metalness={0.25} />
      <Text position={[0, 7.68, -16.93]} fontSize={0.43} color="#00131b" anchorX="center" anchorY="middle" fontWeight="bold">TNT GRAPHICS</Text>
      {/* Cyan architectural fins */}
      {[-9.3, -5.1, 5.1, 9.3].map((x) => (
        <Box key={x} position={[x, 4.05, -17.02]} size={[0.14, 7.9, 0.14]} color="#00BFFF" metalness={0.25} roughness={0.32} />
      ))}
      {/* Glass entrance doors */}
      <Glass position={[-0.88, 3.45, -17.42]} size={[1.7, 6.7, 0.09]} opacity={0.46} />
      <Glass position={[0.88, 3.45, -17.42]} size={[1.7, 6.7, 0.09]} opacity={0.46} />
      <Box position={[-1.78, 3.45, -17.32]} size={[0.055, 6.9, 0.08]} color="#a7b5bf" metalness={0.75} />
      <Box position={[1.78, 3.45, -17.32]} size={[0.055, 6.9, 0.08]} color="#a7b5bf" metalness={0.75} />
      <Box position={[0, 0.06, -17.25]} size={[3.6, 0.12, 0.45]} color="#00BFFF" />
      {/* Tall side glazing inside */}
      {[-8.9, 8.9].map((x) => (
        <Glass key={x} position={[x, 4.2, -30.8]} size={[0.08, 5.6, 22]} opacity={0.22} color="#a6d9e9" />
      ))}
      {/* Interior ceiling beams and acoustic ceiling strips */}
      {Array.from({ length: 7 }).map((_, i) => (
        <Box key={i} position={[0, 7.95, -20.5 - i * 3.5]} size={[19, 0.18, 0.22]} color="#b9c2c9" />
      ))}
      {/* External side signage panels */}
      <Box position={[-7.2, 3.1, -17.04]} size={[4.3, 2.2, 0.13]} color="#111820" />
      <Text position={[-7.2, 3.1, -16.94]} fontSize={0.3} color="#00BFFF" anchorX="center" anchorY="middle" textAlign="center">VEHICLE BRANDING</Text>
      <Box position={[7.2, 3.1, -17.04]} size={[4.3, 2.2, 0.13]} color="#111820" />
      <Text position={[7.2, 3.1, -16.94]} fontSize={0.3} color="#ffffff" anchorX="center" anchorY="middle" textAlign="center">SHOP SIGNAGE</Text>
    </group>
  );
}

function StudioFurniture() {
  return (
    <group>
      {/* Reception counter */}
      <Box position={[-5.4, 0.72, -25.5]} size={[4.4, 1.35, 1.2]} color="#111820" roughness={0.38} />
      <Box position={[-5.4, 1.43, -25.5]} size={[4.48, 0.09, 1.28]} color="#00BFFF" roughness={0.28} metalness={0.2} />
      <Text position={[-5.4, 1.15, -24.87]} fontSize={0.32} color="#00BFFF" anchorX="center" anchorY="middle" fontWeight="bold">TNT GRAPHICS</Text>
      {/* Reception back feature wall */}
      <Box position={[-5.4, 3.6, -43.9]} size={[7.4, 6.8, 0.22]} color="#10171e" />
      <Box position={[-5.4, 3.7, -43.75]} size={[5.8, 0.09, 0.08]} color="#00BFFF" />
      <Text position={[-5.4, 4.2, -43.7]} fontSize={0.9} color="#00BFFF" anchorX="center" anchorY="middle" fontWeight="bold">TNT</Text>
      <Text position={[-5.4, 3.35, -43.7]} fontSize={0.3} color="#ffffff" anchorX="center" anchorY="middle" letterSpacing={0.12}>GRAPHICS</Text>
      {/* Work desks */}
      {[-1.2, 4.2].map((x) => (
        <group key={x} position={[x, 0, -31.5]}>
          <Box position={[0, 0.92, 0]} size={[4.1, 0.14, 1.8]} color="#d9e0e5" roughness={0.35} />
          {[-1.7, 1.7].map((leg) => (
            <Box key={leg} position={[leg, 0.43, 0]} size={[0.12, 0.85, 1.45]} color="#252d34" />
          ))}
          <Box position={[0, 1.72, -0.48]} size={[1.65, 1.05, 0.12]} color="#141b22" />
          <Box position={[0, 1.72, -0.39]} size={[1.48, 0.87, 0.035]} color="#172b38" />
          <Box position={[0, 1.12, -0.22]} size={[0.45, 0.06, 0.32]} color="#aeb8c0" />
          <Box position={[0.9, 1.04, 0.28]} size={[0.65, 0.05, 0.5]} color="#00BFFF" />
        </group>
      ))}
      {/* Large format printer / plotter */}
      <group position={[7.2, 0, -34.8]}>
        <Box position={[0, 1.05, 0]} size={[2.1, 2.1, 3.1]} color="#e9eef1" roughness={0.34} />
        <Box position={[0, 2.15, 0.25]} size={[1.85, 0.12, 2.45]} color="#252d34" />
        <Box position={[0, 0.25, 0.1]} size={[2.3, 0.35, 3.25]} color="#151a20" />
        <Box position={[0, 1.85, 1.57]} size={[1.55, 0.55, 0.08]} color="#00BFFF" />
        <Text position={[0, 1.88, 1.63]} fontSize={0.18} color="#00131b" anchorX="center" anchorY="middle">LARGE FORMAT</Text>
      </group>
      {/* Roll media beside printer */}
      {[6.35, 7.15, 7.95].map((x) => (
        <mesh key={x} position={[x, 0.65, -37.2]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <cylinderGeometry args={[0.19, 0.19, 1.15, 24]} />
          <meshStandardMaterial color="#f3f5f6" roughness={0.55} />
        </mesh>
      ))}
      {/* Print and design samples on back wall */}
      {[-1.8, 2.0, 5.8].map((x, i) => (
        <group key={x} position={[x, 4.5, -43.95]}>
          <Box position={[0, 0, 0]} size={[3.1, 2.55, 0.12]} color={i === 1 ? '#00BFFF' : '#f1f4f6'} />
          <Text position={[0, 0, 0.075]} fontSize={0.25} color={i === 1 ? '#00131b' : '#00BFFF'} anchorX="center" anchorY="middle" textAlign="center">
            {i === 0 ? 'PORTRAITS' : i === 1 ? 'BOLD IDEAS' : 'BANNERS'}
          </Text>
        </group>
      ))}
      {/* Ceiling light strips */}
      {[-5, 0, 5].map((x) => (
        <group key={x}>
          <Box position={[x, 7.68, -27]} size={[3.2, 0.07, 0.35]} color="#ffffff" />
          <Box position={[x, 7.68, -36]} size={[3.2, 0.07, 0.35]} color="#ffffff" />
        </group>
      ))}
      {/* Plant pots */}
      {[-8, 8].map((x) => (
        <group key={x} position={[x, 0, -25]}>
          <mesh position={[0, 0.45, 0]} castShadow>
            <cylinderGeometry args={[0.42, 0.32, 0.9, 24]} />
            <meshStandardMaterial color="#252c31" roughness={0.8} />
          </mesh>
          <mesh position={[0, 1.45, 0]} castShadow>
            <sphereGeometry args={[0.72, 20, 16]} />
            <meshStandardMaterial color="#315d46" roughness={0.92} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Lighting() {
  return (
    <>
      <ambientLight intensity={0.65} />
      <hemisphereLight args={['#dceeff', '#28323a', 1.1]} />
      <directionalLight
        position={[-12, 18, 10]}
        intensity={2.1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={90}
        shadow-camera-left={-25}
        shadow-camera-right={25}
        shadow-camera-top={25}
        shadow-camera-bottom={-25}
      />
      <pointLight position={[0, 5.8, -22]} color="#d9f6ff" intensity={18} distance={20} />
      <pointLight position={[0, 6.8, -34]} color="#ffffff" intensity={20} distance={20} />
      <pointLight position={[-5, 5, -42]} color="#00BFFF" intensity={10} distance={13} />
    </>
  );
}

function CameraJourney() {
  const scroll = useScroll();
  const curve = useMemo(() => new CatmullRomCurve3([
    new Vector3(0, 2.65, 15),
    new Vector3(0, 2.55, 7),
    new Vector3(-1.1, 2.45, -3),
    new Vector3(-0.4, 2.45, -12),
    new Vector3(0, 2.45, -18.5),
    new Vector3(0, 2.45, -25),
    new Vector3(0.9, 2.5, -34),
    new Vector3(0.4, 2.55, -40.5),
  ], false, 'centripetal'), []);
  const cameraTarget = useRef(new Vector3());
  const lookTarget = useRef(new Vector3());

  useFrame((state, delta) => {
    const progress = Math.min(1, Math.max(0, scroll.offset));
    const position = curve.getPointAt(progress);
    const lookAhead = curve.getPointAt(Math.min(1, progress + 0.018));

    cameraTarget.current.copy(position);
    lookTarget.current.copy(lookAhead);

    // Frame-rate independent smoothing keeps the camera movement continuous.
    const smoothing = 1 - Math.exp(-5.5 * delta);
    state.camera.position.lerp(cameraTarget.current, smoothing);
    state.camera.lookAt(lookTarget.current);
  });

  return null;
}

function World() {
  return (
    <>
      <Lighting />
      <RoadAndApproach />
      <BrandedPickup />
      <BuildingExterior />
      <StudioFurniture />
      <CameraJourney />
      <Scroll html>
        <div className="launch-story">
          {STORY.map((scene, index) => (
            <section className={`launch-scene launch-scene-${index + 1}`} key={scene.eyebrow}>
              <div className="launch-copy">
                <span className="launch-kicker">{scene.eyebrow}</span>
                <h1>{scene.title}<span>{scene.highlight}</span></h1>
                <p>{scene.body}</p>
                <a className="launch-primary-btn" href={scene.href}>
                  {scene.action}<ArrowRight size={18} />
                </a>
              </div>
              {index < STORY.length - 1 && (
                <div className="launch-scroll-hint">
                  <MoveDown size={17} /> <span>SCROLL TO WALK THROUGH</span>
                </div>
              )}
              <span className="launch-scene-index">0{index + 1} / 04</span>
            </section>
          ))}
          <section className="launch-scene launch-scene-final">
            <div className="launch-final-copy">
              <span className="launch-kicker">TNT GRAPHICS / ZIMBABWE</span>
              <h2>LET'S CREATE<span> SOMETHING AMAZING.</span></h2>
              <p>Your next big idea deserves the right creative partner.</p>
              <a className="launch-primary-btn" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> Chat with our team <ArrowRight size={18} />
              </a>
            </div>
          </section>
        </div>
      </Scroll>
    </>
  );
}

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <main className="launch-page">
      <div className="launch-canvas">
        <Canvas
          shadows
          camera={{ position: [0, 2.65, 15], fov: 52, near: 0.1, far: 140 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: false }}
          onCreated={({ gl }) => {
            gl.setClearColor('#b9c8d1', 1);
          }}
        >
          <color attach="background" args={['#b9c8d1']} />
          <fog attach="fog" args={['#b9c8d1', 48, 105]} />
          <Suspense fallback={null}>
            <ScrollControls pages={5} damping={0.16}>
              <World />
            </ScrollControls>
          </Suspense>
        </Canvas>
      </div>

      <header className="launch-topbar">
        <button className="launch-logo" onClick={() => navigate('/')} aria-label="TNT Graphics home">
          <strong>TNT</strong><span>GRAPHICS<small>CREATIVE DESIGN STUDIO</small></span>
        </button>
        <div className="launch-topbar-status"><i /> CREATIVE STUDIO / ZIMBABWE</div>
        <button className="launch-skip-button" onClick={() => navigate('/home')}>
          SKIP INTRO <ArrowRight size={16} />
        </button>
      </header>

      <div className="launch-bottom-note">
        <span>THINK. CREATE. INSPIRE.</span>
        <span>SCROLL TO EXPERIENCE TNT GRAPHICS</span>
      </div>
      <a className="launch-floating-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Chat with TNT Graphics on WhatsApp">
        <MessageCircle size={23} />
      </a>
    </main>
  );
}
