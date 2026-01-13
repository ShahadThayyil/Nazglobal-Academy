import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

// Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/About'; 
import CoursesPage from './pages/Courses';
import FacultyPage from './pages/Faculty';
import ResultsPage from './pages/Results';
import GalleryPage from './pages/Gallery';
import FAQPage from './pages/FAQ';
import Contact from './pages/Contact';

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  const location = useLocation();

  useEffect(() => {
    // 1. Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    // 2. Synchronize Lenis with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // 3. Route മാറ്റുമ്പൊൾ സ്ക്രോൾ ടോപ്പിലേക്ക് പോകാൻ
    lenis.scrollTo(0, { immediate: true });

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, [location]); // location മാറുമ്പോൾ ഇത് റൺ ആകും

  return (
    <main className="bg-[#F8F7F5] selection:bg-[#800000] selection:text-white">
      {/* Navbar എല്ലാ പേജിലും കാണണം */}
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<Contact />} />
        {/* ഭാവിയിൽ കൂടുതൽ പേജുകൾ ഇവിടെ ആഡ് ചെയ്യാം */}
      </Routes>

      {/* Footer എല്ലാ പേജിലും കാണണം */}
      <Footer />
    </main>
  );
}

export default App;