import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const LeadStats = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // 1. Stacking Effect Logic
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "top top",
      scrub: true,
    });

    // 2. Line & Content Animations
    const items = gsap.utils.toArray(".stat-item");
    items.forEach((item) => {
      const num = item.querySelector(".count-val");
      const target = parseInt(num.getAttribute('data-target'));

      gsap.from(item, {
        y: 60,
        autoAlpha: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
        }
      });

      gsap.to(num, {
        innerText: target,
        duration: 2,
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: num,
          start: "top 95%",
        }
      });
    });
  }, { scope: sectionRef });

  const stats = [
    { id: '01', label: 'Academic Legacy', val: '12', unit: 'Years', desc: 'A decade of nurturing disciplined minds and cultural heritage.' },
    { id: '02', label: 'Global Success', val: '98', unit: '%', desc: 'Placement rate across international frontiers.' },
    { id: '03', label: 'Expert Faculty', val: '150', unit: '+', desc: 'Mentors from world-class institutions.' },
    { id: '04', label: 'Global Network', val: '64', unit: 'Partners', desc: 'Collaborations with global universities.' },
  ];

  return (
    <section 
      ref={sectionRef} 
      className="relative z-30 bg-[#FDFDFD] shadow-[0_-50px_100px_rgba(0,0,0,0.03)]"
    >
      <div className="max-w-7xl mx-auto py-20 md:py-32 px-6 lg:px-20">
        
        {/* SECTION HEADER - Refined for Institutional Look */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="stats-title">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-[#DAA520]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#800000]">Impact Assessment</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-[#1a1a1a] leading-[1.1] tracking-tighter">
              Measurable <br />
              <span className="text-[#800000] italic">Excellence.</span>
            </h2>
          </div>
          <div className="max-w-xs border-l border-gray-100 pl-6 pb-1">
            <p className="text-[13px] md:text-sm text-gray-400 uppercase tracking-widest leading-relaxed">
              Established institutional standards through consistent growth and vision.
            </p>
          </div>
        </div>

        {/* MINIMALIST LIST LAYOUT */}
        <div className="space-y-0">
          {stats.map((item, i) => (
            <div 
              key={i} 
              className="stat-item group border-t border-gray-100 py-10 md:py-16 flex flex-col md:flex-row md:items-center justify-between gap-8 transition-colors hover:bg-gray-50/50 px-4"
            >
              <div className="flex items-center gap-6 md:w-1/3">
                <span className="text-[10px] font-bold text-[#DAA520] tracking-widest">{item.id}</span>
                <h4 className="text-lg md:text-xl font-serif text-[#1a1a1a] tracking-tight">{item.label}</h4>
              </div>

              {/* Reduced Count Sizes for Professional look */}
              <div className="flex items-baseline md:w-1/3 md:justify-center">
                <span 
                  className="count-val text-5xl md:text-7xl font-serif leading-none tracking-tighter text-[#1a1a1a]"
                  data-target={item.val}
                >
                  0
                </span>
                <span className="text-lg md:text-xl font-light text-[#800000] ml-2 italic">{item.unit}</span>
              </div>

              <div className="md:w-1/4">
                <p className="text-gray-500 leading-relaxed text-[13px] md:text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t border-gray-100" />
        </div>

        {/* FOOTER ACTION */}
        <div className="mt-20 flex justify-center">
          <button className="group flex flex-col items-center gap-4">
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#800000]">Institutional Report</span>
            <div className="w-[1px] h-16 bg-gray-200 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full bg-[#DAA520] -translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LeadStats;