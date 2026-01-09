import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const RESULTS = [
  { rank: "AIR 01", name: "Sarah Malik", year: "2025", firm: "Global Design Corp", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" },
  { rank: "AIR 05", name: "Rahul Das", year: "2025", firm: "Urban Arch Group", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop" },
  { rank: "AIR 12", name: "Ayesha Khan", year: "2024", firm: "Integrity Labs", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" },
];

const SuccessArchives = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // 1. Ticker Animation (Continuous Loop)
    gsap.to(".results-ticker", {
      xPercent: -50,
      ease: "none",
      duration: 20,
      repeat: -1,
    });

    // 2. Card Reveal Animation
    gsap.from(".result-card", {
      y: 60,
      autoAlpha: 0,
      stagger: 0.15,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".results-grid",
        start: "top 85%",
      }
    });

    // 3. Staggered Background Text Parallax
    gsap.to(".bg-archive-text", {
      x: -100,
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: 1,
      }
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative bg-[#FDFDFD] py-24 md:py-40 overflow-hidden border-t border-gray-100">
      
      {/* KINETIC BG TEXT */}
      <div className="absolute top-1/4 left-0 pointer-events-none opacity-[0.02] select-none z-0">
        <h2 className="bg-archive-text text-[30vw] font-serif font-black uppercase whitespace-nowrap leading-none">
          Proven Excellence
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
        
        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[#DAA520]" />
              <span className="text-[10px] font-black text-[#800000] uppercase tracking-[0.5em]">The Outcome</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-serif leading-[0.85] tracking-tighter text-[#1a1a1a]">
              Success <br /> <span className="italic text-[#800000]">Archives.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4 text-left md:text-right">
             <span className="text-4xl md:text-6xl font-serif text-[#DAA520]">98%</span>
             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-loose max-w-[180px]">
                Global Placement Rate Across 24 Countries.
             </p>
          </div>
        </div>

        {/* DYNAMIC MARQUEE (Results Ticker) */}
        <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden mb-32 border-y border-gray-100 py-6 bg-white rotate-[-1deg]">
          <div className="results-ticker flex whitespace-nowrap gap-12 items-center">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-12">
                <span className="text-xl md:text-2xl font-serif italic text-[#800000]">All India Rank 01 — 2025</span>
                <div className="w-2 h-2 rounded-full bg-[#DAA520]" />
                <span className="text-xl md:text-2xl font-bold uppercase tracking-widest text-[#1a1a1a]">Strategic Compliance Mastery</span>
                <div className="w-2 h-2 rounded-full bg-gray-200" />
              </div>
            ))}
          </div>
        </div>

        {/* RESULTS GRID */}
        <div className="results-grid grid grid-cols-1 md:grid-cols-3 gap-10">
          {RESULTS.map((item, i) => (
            <div key={i} className="result-card group flex flex-col gap-6">
              {/* Image Frame */}
              <div className="relative aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-6 left-6 bg-[#800000] text-white text-[10px] font-bold px-4 py-2 uppercase tracking-widest shadow-xl">
                  {item.rank}
                </div>
              </div>
              
              {/* Info */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-baseline">
                   <h4 className="text-2xl font-serif text-[#1a1a1a]">{item.name}</h4>
                   <span className="text-[10px] font-black text-[#DAA520]">{item.year} Class</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-6 h-[1px] bg-gray-200" />
                   <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">Placed at: {item.firm}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER ACTION */}
        <div className="mt-24 pt-16 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-10">
           <div className="flex items-center gap-6">
              <div className="text-center md:text-left">
                 <p className="text-[9px] font-bold text-gray-300 uppercase tracking-[0.4em] mb-2">Audit Report Status</p>
                 <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-green-600">Verified Results MMXXVI</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                 </div>
              </div>
           </div>
           
           <button className="group relative overflow-hidden bg-[#1a1a1a] px-12 py-5 text-white transition-all">
              <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em]">Full Placement Report</span>
              <div className="absolute inset-0 bg-[#800000] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
           </button>
        </div>

      </div>
    </section>
  );
};

export default SuccessArchives;