import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PremiumHero = () => {
  const containerRef = useRef(null);
  const imageWrapRef = useRef(null);
  const contentRef = useRef(null);
  const imageFrameRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.8 } });

    // 1. Initial Entrance Sequence
    tl.from(".hero-sub", { y: 20, opacity: 0, duration: 1 }, 0.2)
      .from(".hero-title span", { y: "100%", opacity: 0, stagger: 0.15, ease: "power4.out" }, 0.4)
      // Reveal the main image frame from bottom to top
      .from(imageFrameRef.current, { 
        clipPath: "inset(100% 0% 0% 0%)", 
        y: 100,
        duration: 2 
      }, 0.6)
      // Subtle scale effect on the image inside
      .from(".hero-image", { scale: 1.3, duration: 2.5, ease: "power2.out" }, 0.6)
      .from(".trust-badge", { x: 20, opacity: 0, duration: 1 }, "-=1.2")
      .from(".scroll-indicator", { y: -20, opacity: 0, duration: 1 }, "-=1");

    // 2. The Pinning & Parallax Logic
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: true,
    });

    // Parallax effect on scroll
    gsap.to(".hero-image", {
      y: 150, // Moves the image down slower than scroll
      scale: 1.05,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    });

  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-screen bg-[#F8FAFC] text-slate-900 overflow-hidden flex flex-col z-10"
    >
      {/* Background subtle noise/gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#F8FAFC,#EFF6FF)] pointer-events-none" />
     
      {/* Spacer for Navbar */}
      <div className="h-24 w-full shrink-0" />

      <section className="flex-1 w-full px-6 md:px-12 relative flex flex-col items-center">
        
        {/* HEADINGS */}
        <div ref={contentRef} className="w-full text-center z-30 mt-6 md:mt-10 max-w-4xl mx-auto">
          <p className="hero-sub text-blue-700 font-bold uppercase tracking-[0.25em] text-[11px] mb-5">
            Nazglobal Academy • Est. 1998
          </p>
          
          <h1 className="hero-title text-[11vw] md:text-[7vw] font-extrabold leading-[0.9] tracking-tighter uppercase">
            <span className="block overflow-hidden text-slate-900">Shape The</span>
            <span className="block overflow-hidden text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-900 italic">
              Future.
            </span>
          </h1>
        </div>

        {/* THE NEW CENTERED PORTAL IMAGE */}
        <div ref={imageWrapRef} className="relative w-full max-w-[900px] flex-1 mt-8 md:mt-12 z-20 mb-8">
            {/* Decorative offset layer behind */}
            <div className="absolute inset-0 top-4 left-4 bg-blue-100/50 rounded-[2.5rem] -z-10 border border-blue-200/30 hidden md:block"></div>
            
            {/* Main Image Frame */}
            <div 
                ref={imageFrameRef}
                className="w-full h-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(30,58,138,0.25)] border border-white/80 bg-slate-100 relative"
            >
                {/* IMPORTANT: Use a tall, vertical/portrait image here for the best effect. 
                   A wide landscape image will get cropped awkwardly.
                   Look for images of grand hallways, tall library atriums, or building facades.
                */}
                <img 
                src="./Forground.png" // REPLACE with a tall, portrait image
                className="hero-image w-full h-full object-cover" 
                alt="Nazglobal Entrance" 
                />

                {/* Overlay Gradient for text readability if needed later */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none"></div>
            </div>

             {/* Floating Trust Badge - Positioned relative to image */}
            <div className="trust-badge absolute bottom-8 -right-4 md:bottom-12 md:-right-12 bg-white p-5 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] border border-slate-50 hidden sm:flex flex-col items-center z-30">
                <span className="text-blue-600 font-black text-4xl leading-none">A+</span>
                <span className="text-[9px] uppercase tracking-widest font-bold text-slate-500 mt-1">Global Accreditation</span>
            </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="scroll-indicator absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 animate-pulse">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">Explore</span>
            <ArrowDown size={18} className="text-blue-600" />
        </div>
      </section>

      {/* Background Watermark */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none leading-none">
        <h2 className="text-[20vw] font-black text-center text-slate-900 tracking-tighter translate-y-1/4">NAZGLOBAL</h2>
      </div>
    </div>
  );
};

export default PremiumHero;