import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MOBILE_BP = 768;

export default function ScrollCoordinate() {
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < MOBILE_BP : false,
  );

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BP - 1}px)`);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    setIsMobile(mq.matches);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;
      setProgress(pct);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (isMobile) return null;

  const padded = String(progress).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 0.8 }}
      style={{
        position: 'fixed', bottom: '32px', left: '32px', zIndex: 20,
        display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
        gap: '4px', pointerEvents: 'none',
      }}
    >
      <div
        style={{
          width: '1px', height: '48px',
          background: 'linear-gradient(to bottom, transparent, #3D7878)',
          marginBottom: '6px',
        }}
      />
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '10px', letterSpacing: '0.1em', color: '#3D7878',
        }}
      >
        {padded} <span style={{ color: '#2A3F3F' }}>//</span>{' '}
        <span style={{ color: '#8FA8A8' }}>100</span>
      </span>
    </motion.div>
  );
}
