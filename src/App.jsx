import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

import Navbar from './components/common/Navbar';
import Hero from './components/home/Hero';
import LeadStats from './components/home/LeadStats';
import FeaturedPrograms from './components/home/FeaturedPrograms';
import WhyNazglobal from './components/home/WhyNazglobal';
import FacultySection from './components/home/FacultySection';
import SuccessArchives from './components/home/SuccessArchives';
import PhilosophySection from './components/home/PhilosophySection';
import Footer from './components/common/Footer';

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  
  useEffect(() => {
    // 1. Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // 2. Synchronize Lenis with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Cleanup
    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <main className="bg-[#F8F7F5] selection:bg-[#800000] selection:text-white">
      <Navbar />
      <Hero />
      <LeadStats />
      <FeaturedPrograms />
      <WhyNazglobal />
      <FacultySection />
      <SuccessArchives />
      <PhilosophySection />
      <Footer />
      {/* Other sections will come here */}
    </main>
  );
}

export default App;