import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MOBILE_BP = 768;

export default function NeuralTree() {
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

  const prefersReduced =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const disableFloat = prefersReduced || isMobile;

  return (
    <motion.div
      aria-hidden="true"
      initial={{ scale: 1.05, opacity: 0 }}
      animate={
        disableFloat
          ? { scale: 1, opacity: 1 }
          : { scale: 1, opacity: 1, y: [0, -15, 0] }
      }
      transition={
        disableFloat
          ? { duration: 1.2, ease: 'easeOut' }
          : {
              scale: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 1.2, ease: 'easeOut' },
              y: { duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 },
            }
      }
      style={{
        position: 'absolute',
        right: isMobile ? '0' : '-40px',
        top: isMobile ? '0' : '-40px',
        width: isMobile ? '100%' : '62%',
        maxWidth: isMobile ? 'none' : '780px',
        height: isMobile ? '100%' : '115%',
        zIndex: 5,
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          position: 'absolute', inset: 0,
          background: isMobile
            ? 'radial-gradient(ellipse at 50% 50%, transparent 30%, #1C2B2B 75%)'
            : 'radial-gradient(ellipse at 60% 45%, transparent 40%, #1C2B2B 82%)',
          zIndex: 6, pointerEvents: 'none',
        }}
      />
      <img
        src="https://media.base44.com/images/public/69c187a19eec16572d4b3df0/e0ddb5179_generated_image.png"
        alt="" aria-hidden="true"
        style={{
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center center',
          display: 'block', filter: 'contrast(1.08) saturate(0.9)',
        }}
      />
    </motion.div>
  );
}
