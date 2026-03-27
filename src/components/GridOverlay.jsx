import { useState, useEffect } from 'react';

const MOBILE_BP = 768;

export default function GridOverlay() {
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

  const columns = isMobile ? 4 : 12;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    >
      <div
        className="h-full mx-auto"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: '0',
          maxWidth: '100%',
          padding: '0 2px',
        }}
      >
        {Array.from({ length: columns + 1 }).map((_, i) => (
          <div
            key={i}
            style={{
              borderLeft: i === 0 ? 'none' : '1px solid #2A3F3F',
              height: '100%',
              opacity: isMobile ? 0.35 : 0.6,
            }}
          />
        ))}
      </div>
    </div>
  );
}
