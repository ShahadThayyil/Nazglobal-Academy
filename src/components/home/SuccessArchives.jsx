import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

const RESULTS = [
  { rank: "AIR 01", name: "Sarah Malik", year: "2025", firm: "Global Design Corp", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" },
  { rank: "AIR 05", name: "Rahul Das", year: "2025", firm: "Urban Arch Group", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop" },
  { rank: "AIR 12", name: "Ayesha Khan", year: "2024", firm: "Integrity Labs", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" },
];

const SuccessArchives = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".header-reveal > *", {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.from(".honor-card", {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 1,
      ease: "power2.out",
    });

    gsap.to(".results-ticker", {
      xPercent: -50,
      ease: "none",
      duration: 25,
      repeat: -1,
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 w-full relative z-10">
        
        {/* HEADER */}
        <div className="header-reveal flex flex-col items-center text-center mb-12 md:mb-20">
          <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-3">
            Institutional Honor Wall
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight lowercase leading-none">
            success <span className="text-blue-600 italic font-serif">archives.</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl text-sm md:text-base font-medium">
            The measurable impact of our graduates across the global architectural landscape.
          </p>
        </div>

        {/* FIXED GRID - Optimized for Viewport Size */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {RESULTS.map((item, i) => (
            <div 
              key={i} 
              className="honor-card flex flex-col bg-white rounded-[1.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              {/* Image Container - Aspect ratio controlled */}
              <div className="aspect-[3/4] w-full overflow-hidden bg-slate-100">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover object-top" 
                />
              </div>
              
              {/* Content Block */}
              <div className="p-6 md:p-8 flex flex-col items-center text-center">
                 <div className="inline-block px-3 py-1 bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest rounded-full mb-4">
                    {item.rank}
                 </div>
                 
                 <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-1">
                   {item.name}
                 </h3>
                 
                 <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                    Placed at {item.firm}
                 </p>
                 
                 <div className="w-8 h-[1px] bg-blue-100 mb-4" />
                 
                 <span className="text-slate-300 text-[9px] font-bold uppercase tracking-widest">
                   Class of {item.year}
                 </span>
              </div>
            </div>
          ))}
        </div>

        {/* TICKER */}
        <div className="relative mt-20 overflow-hidden border-y border-slate-100 py-4">
          <div className="results-ticker flex whitespace-nowrap gap-12 items-center opacity-40">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex items-center gap-12">
                <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-slate-900">Verified Outcome 2026</span>
                <ShieldCheck size={14} className="text-blue-600" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center">
           <button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.5em] text-slate-900 border-b-2 border-slate-200 pb-1 hover:border-blue-600 transition-colors">
              Full Institutional Report <ArrowUpRight size={14} className="text-blue-600" />
           </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessArchives;