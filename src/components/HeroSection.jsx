import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import NeuralTree from './NeuralTree';
import ScrollCoordinate from './ScrollCoordinate';
import { CAREERS_HREF } from '@/constants/externalLinks';

const EASE_CIRC_OUT = [0.0, 0.55, 0.45, 1.0];
const MOBILE_BP = 768;

function useIsMobile() {
  const [mobile, setMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < MOBILE_BP : false,
  );
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BP - 1}px)`);
    const handler = (e) => setMobile(e.matches);
    mq.addEventListener('change', handler);
    setMobile(mq.matches);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return mobile;
}

function MaskReveal({ children, delay = 0, duration = 0.8 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <div ref={ref} style={{ overflow: 'hidden' }}>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ delay, duration, ease: EASE_CIRC_OUT }}
      >
        {children}
      </motion.div>
    </div>
  );
}

function FadeIn({ children, delay = 0, duration = 0.7 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

function CTAButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => { window.location.href = 'https://www.skeldir.com'; }}
      whileFocus={{ outline: '2px solid #FFFFFF', outlineOffset: '4px' }}
      style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 500,
        fontSize: '12px',
        textTransform: 'uppercase',
        color: '#FFFFFF',
        background: '#3D7878',
        border: 'none',
        padding: '14px 28px',
        cursor: 'pointer',
        outline: 'none',
        minHeight: '44px',
        boxShadow: hovered
          ? '0 0 0 1px #3D7878, 0 8px 32px rgba(61,120,120,0.35)'
          : '0 0 0 1px transparent',
        transition: 'box-shadow 0.25s ease',
      }}
      aria-label="Explore Skeldir"
    >
      <motion.span
        animate={{ letterSpacing: hovered ? '0.22em' : '0.12em' }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        style={{ display: 'inline-block' }}
      >
        Explore Skeldir
      </motion.span>
    </motion.button>
  );
}

function SecondaryLink() {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={CAREERS_HREF}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 400,
        fontSize: '12px',
        letterSpacing: '0.1em',
        color: hovered ? '#FFFFFF' : '#8FA8A8',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        transition: 'color 0.2s ease',
        minHeight: '44px',
      }}
      aria-label="Join us"
    >
      Join us
    </a>
  );
}

export default function HeroSection() {
  const isMobile = useIsMobile();

  return (
    <section
      aria-label="Hero — Research at the Confluence of Artificial & Biological Intelligence"
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 10,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'stretch' : 'center',
          position: 'relative',
          paddingTop: isMobile ? '72px' : '80px',
          paddingBottom: isMobile ? '48px' : '80px',
        }}
      >
        {/* ── TEXT COLUMN ── */}
        <div
          style={{
            width: isMobile ? '100%' : '55%',
            paddingLeft: isMobile ? '20px' : 'clamp(24px, 4vw, 80px)',
            paddingRight: isMobile ? '20px' : '40px',
            position: 'relative',
            zIndex: 15,
            transform: isMobile ? 'none' : 'translateY(calc(-0.9 * 6vmin))',
          }}
        >
          <FadeIn delay={0.15}>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: isMobile ? '10px' : '11px',
                letterSpacing: '0.18em',
                color: '#3D7878',
                textTransform: 'uppercase',
                marginBottom: isMobile ? '20px' : '28px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'wrap',
              }}
            >
              <span>// COORD: 40.7128° N</span>
              <span style={{ color: '#2A3F3F' }}>|</span>
              <span>STATUS: ACTIVE</span>
            </div>
          </FadeIn>

          <MaskReveal delay={0.3} duration={0.9}>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: isMobile ? 'clamp(28px, 8vw, 42px)' : 'clamp(32px, 5.2vw, 68px)',
                lineHeight: isMobile ? 1.0 : 0.92,
                letterSpacing: '-0.03em',
                color: '#FFFFFF',
                textTransform: 'uppercase',
                margin: 0,
                maxWidth: isMobile ? '100%' : '580px',
              }}
            >
              Research at the{' '}
              <span style={{ display: 'block' }}>Confluence of</span>
              <span style={{ display: 'block' }}>
                <span style={{ color: '#8FA8A8', fontWeight: 300 }}>Human</span>
                {' '}and <span style={{ color: '#8FA8A8', fontWeight: 300 }}>Artificial</span>
              </span>
              <span style={{ display: 'block' }}>Intelligence.</span>
            </h1>
          </MaskReveal>

          <FadeIn delay={0.6}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: isMobile ? '15px' : '18px',
                lineHeight: 1.7,
                color: '#A6BCBC',
                marginTop: isMobile ? '20px' : '28px',
                maxWidth: isMobile ? '100%' : '480px',
                letterSpacing: '-0.01em',
              }}
            >
              Synergyscape is a multidisciplinary lab synthesizing applied AI
              research and experimentation into durable, consequence-level
              enterprise infrastructure focused on collective intelligence,
              cognitive architectures, and decentralized systems.
            </p>
          </FadeIn>

          <FadeIn delay={0.85}>
            <div
              style={{
                marginTop: isMobile ? '28px' : '44px',
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: isMobile ? 'flex-start' : 'center',
                gap: isMobile ? '16px' : '28px',
                flexWrap: 'wrap',
              }}
            >
              <CTAButton />
              <SecondaryLink />
            </div>
          </FadeIn>
        </div>

        {/* ── VISUAL COLUMN (NeuralTree) ── */}
        <div
          aria-hidden="true"
          style={{
            position: isMobile ? 'relative' : 'absolute',
            right: isMobile ? undefined : 'clamp(12px, 1.2vw, 20px)',
            top: isMobile ? undefined : 0,
            width: isMobile ? '100%' : '50%',
            height: isMobile ? '320px' : '100%',
            zIndex: 5,
            marginTop: isMobile ? '32px' : undefined,
          }}
        >
          {!isMobile && (
            <div
              style={{
                position: 'absolute', left: 0, top: 0, width: '220px', height: '100%',
                background: 'linear-gradient(to right, #1C2B2B 0%, transparent 100%)',
                zIndex: 8, pointerEvents: 'none',
              }}
            />
          )}
          {isMobile && (
            <div
              style={{
                position: 'absolute', left: 0, top: 0, right: 0, height: '80px',
                background: 'linear-gradient(to bottom, #1C2B2B 0%, transparent 100%)',
                zIndex: 8, pointerEvents: 'none',
              }}
            />
          )}
          <NeuralTree />
        </div>
      </div>

      <ScrollCoordinate />
    </section>
  );
}
