import HeroNav from '../components/HeroNav';
import HeroSection from '../components/HeroSection';
import GridOverlay from '../components/GridOverlay';
import GrainOverlay from '../components/GrainOverlay';

export default function Home() {
  return (
    <div className="relative w-full" style={{ background: '#1C2B2B' }}>
      <div className="relative min-h-screen overflow-hidden">
        {/* Architectural grid lines — blueprint feel */}
        <GridOverlay />
        {/* Perlin-style animated grain at 2% opacity */}
        <GrainOverlay />
        {/* Fixed ultra-slim header */}
        <HeroNav />
        {/* Hero content */}
        <HeroSection />
      </div>
    </div>
  );
}