import { useEffect, useRef } from 'react';

const MOBILE_BP = 768;

export default function GrainOverlay() {
  const canvasRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < MOBILE_BP;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const scale = isMobile ? 0.5 : 1;

    const resize = () => {
      canvas.width = Math.round(window.innerWidth * scale);
      canvas.height = Math.round(window.innerHeight * scale);
    };
    resize();
    window.addEventListener('resize', resize);

    const drawGrain = () => {
      const { width, height } = canvas;
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const v = Math.random() * 255;
        data[i] = v;
        data[i + 1] = v;
        data[i + 2] = v;
        data[i + 3] = 6;
      }
      ctx.putImageData(imageData, 0, 0);
    };

    if (prefersReduced || isMobile) {
      drawGrain();
      return () => window.removeEventListener('resize', resize);
    }

    const animate = () => {
      drawGrain();
      frameRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed', inset: 0, width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 2, opacity: 0.022, mixBlendMode: 'overlay',
      }}
    />
  );
}
