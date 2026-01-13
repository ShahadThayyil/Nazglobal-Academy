import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Trophy, Star, TrendingUp, Award, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SUCCESS_STORY = [
  { id: "01", name: "Sarah Malik", rank: "AIR 01", year: "2025", firm: "Global Strategy Corp", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" },
  { id: "02", name: "Rahul Das", rank: "AIR 05", year: "2025", firm: "Urban Design Group", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop" },
  { id: "03", name: "Ayesha Khan", rank: "AIR 12", year: "2024", firm: "Integrity Labs", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" },
  { id: "04", name: "Kevin Joseph", rank: "AIR 18", year: "2024", firm: "Future Systems", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" },
];

const ResultsPage = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // 1. Hero Reveal
    gsap.from(".results-header > *", {
      y: 40,
      autoAlpha: 0,
      stagger: 0.2,
      duration: 1.2,
      ease: "power3.out",
    });

    // 2. Infinite Ticker
    gsap.to(".ticker-track", {
      xPercent: -50,
      ease: "none",
      duration: 20,
      repeat: -1,
    });

    // 3. Card Entrance
    gsap.from(".result-card", {
      y: 60,
      autoAlpha: 0,
      stagger: 0.1,
      duration: 1,
      scrollTrigger: {
        trigger: ".results-grid",
        start: "top 85%",
      }
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-[#FDFDFD] pt-32 pb-40 overflow-hidden">
      
      {/* --- CENTERED HERO --- */}
      <section className="px-6 max-w-5xl mx-auto text-center mb-24 md:mb-40 results-header flex flex-col items-center">
        <div className="flex items-center gap-3 mb-8">
           <div className="w-8 h-[1px] bg-[#DAA520]" />
           <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#800000]">Performance Index</span>
           <div className="w-8 h-[1px] bg-[#DAA520]" />
        </div>
        <h1 className="text-5xl md:text-8xl font-serif leading-[0.9] tracking-tighter text-[#1a1a1a] mb-10">
          The Proof of <br /> <span className="text-[#800000] italic">Excellence.</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
          Tracking the trajectory of our graduates as they define new standards in global leadership and industrial compliance.
        </p>
      </section>

      {/* --- INFINITE SUCCESS TICKER --- */}
      <div className="bg-[#800000] py-6 mb-32 md:mb-48 relative overflow-hidden border-y border-[#DAA520]/20">
        <div className="ticker-track flex whitespace-nowrap gap-10 items-center">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-10">
              <span className="text-white font-serif italic text-2xl flex items-center gap-4">
                <Trophy size={20} className="text-[#DAA520]" /> All India Rank 01
              </span>
              <div className="w-2 h-2 rounded-full bg-[#DAA520]" />
              <span className="text-white/60 font-black uppercase tracking-widest text-xs">
                Class of MMXXVI
              </span>
              <div className="w-2 h-2 rounded-full bg-white/20" />
            </div>
          ))}
        </div>
      </div>

      {/* --- RESULTS GRID --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="results-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SUCCESS_STORY.map((item, i) => (
            <div key={item.id} className="result-card group flex flex-col items-center text-center">
              {/* Image Frame with Subtle Reveal */}
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm bg-gray-100 border border-gray-100">
                <img 
                  src={item.img} 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" 
                  alt={item.name} 
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#1a1a1a] text-white text-[9px] font-black px-3 py-1.5 uppercase tracking-widest shadow-xl">
                    {item.rank}
                  </span>
                </div>
              </div>

              {/* Centered Content */}
              <div className="pt-8 pb-4 w-full border-b border-gray-50 flex flex-col items-center">
                <span className="text-[10px] font-black text-[#DAA520] uppercase tracking-widest mb-2 block">
                  {item.year} Graduate
                </span>
                <h3 className="text-2xl font-serif text-[#1a1a1a] mb-4 group-hover:text-[#800000] transition-colors">
                  {item.name}
                </h3>
                <div className="flex items-center gap-2 text-gray-400">
                  <TrendingUp size={14} className="text-[#DAA520]" />
                  <span className="text-[10px] font-bold uppercase tracking-tighter">Placed at {item.firm}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- STATS SECTION (Centered) --- */}
      <section className="mt-40 md:mt-64 px-6 text-center">
         <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10 border-y border-gray-100 py-20">
            <div className="flex flex-col items-center gap-3">
               <Award size={32} className="text-[#800000] mb-2" />
               <span className="text-5xl font-serif text-[#1a1a1a]">98%</span>
               <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Placement Success</span>
            </div>
            <div className="flex flex-col items-center gap-3 border-y md:border-y-0 md:border-x border-gray-100 py-10 md:py-0">
               <Star size={32} className="text-[#800000] mb-2" />
               <span className="text-5xl font-serif text-[#1a1a1a]">45+</span>
               <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Global Partners</span>
            </div>
            <div className="flex flex-col items-center gap-3">
               <Trophy size={32} className="text-[#800000] mb-2" />
               <span className="text-5xl font-serif text-[#1a1a1a]">12+</span>
               <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">AIR Ranks</span>
            </div>
         </div>
      </section>

      {/* --- FINAL CTA --- */}
      <footer className="mt-40 text-center px-6">
         <h3 className="text-3xl md:text-5xl font-serif text-[#1a1a1a] mb-12">
            Your name could be <span className="text-[#800000] italic">next.</span>
         </h3>
         <button className="px-12 py-5 bg-[#1a1a1a] text-white text-[11px] font-black uppercase tracking-[0.4em] hover:bg-[#800000] transition-all rounded-full group">
            <span className="flex items-center gap-4">
               Apply for MMXXVI Class <ArrowUpRight size={16} />
            </span>
         </button>
      </footer>

    </div>
  );
};

export default ResultsPage;