import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Plus, MoveUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const LeadStats = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    // 1. Reveal Header
    gsap.from(".stats-header > *", {
      y: 40,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".stats-header",
        start: "top 85%",
      }
    });

    // 2. Line & Number Animations
    const items = gsap.utils.toArray(".stat-row");
    items.forEach((item) => {
      const num = item.querySelector(".count-val");
      const line = item.querySelector(".stat-line");
      const target = parseInt(num.getAttribute('data-target'));

      // Draw the line from center out
      gsap.from(line, {
        scaleX: 0,
        opacity: 0,
        duration: 1.5,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
        }
      });

      // Count up animation
      gsap.to(num, {
        innerText: target,
        duration: 2,
        snap: { innerText: 1 },
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: num,
          start: "top 95%",
        }
      });
    });
  }, { scope: sectionRef });

  const stats = [
    { label: 'Academic Excellence', val: '25', unit: 'Years', desc: 'Cultivating leadership and academic rigor since our inception.' },
    { label: 'Success Velocity', val: '98', unit: '%', desc: 'Our graduates consistently secure placements in Fortune 500 companies.' },
    { label: 'Global Mentors', val: '200', unit: '+', desc: 'Distinguished faculty members from the world\'s top-tier universities.' },
    { label: 'Strategic Partners', val: '85', unit: 'Global', desc: 'International collaborations driving research and innovation.' },
  ];

  return (
    <section 
      ref={sectionRef} 
      className="relative z-30 bg-white py-24 md:py-40 overflow-hidden"
    >
      <div ref={containerRef} className="max-w-7xl mx-auto px-6 lg:px-20">
        
        {/* SECTION HEADER */}
        <div className="stats-header flex flex-col items-center text-center mb-24">
            <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
                Institutional Performance
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight lowercase">
                Measurable <span className="text-blue-600 italic font-serif">Impact.</span>
            </h2>
            <p className="mt-6 text-slate-500 max-w-xl text-lg font-medium leading-relaxed">
                Defining the future of education through transparent metrics and proven global success.
            </p>
        </div>

        {/* LIST LAYOUT */}
        <div className="flex flex-col">
          {stats.map((item, i) => (
            <div 
              key={i} 
              className="stat-row group relative py-12 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 transition-all duration-500 hover:px-6"
            >
              {/* Background Hover Effect */}
              <div className="absolute inset-0 bg-slate-50 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom -z-10 rounded-3xl" />
              
              {/* Vertical Line */}
              <div className="stat-line absolute top-0 left-0 w-full h-[1px] bg-slate-100" />

              {/* Label Part */}
              <div className="flex flex-col gap-2 md:w-1/4">
                <span className="text-blue-600 font-bold text-[10px] uppercase tracking-widest">Metric {i + 1}</span>
                <h4 className="text-xl font-bold text-slate-900 tracking-tight">{item.label}</h4>
              </div>

              {/* Value Part - LARGE & BOLD */}
              <div className="flex items-baseline md:w-1/3 md:justify-center group-hover:scale-110 transition-transform duration-500">
                <span 
                  className="count-val text-7xl md:text-9xl font-black leading-none tracking-tighter text-slate-900"
                  data-target={item.val}
                >
                  0
                </span>
                <span className="text-2xl font-bold text-blue-600 ml-2">{item.unit}</span>
              </div>

              {/* Description Part */}
              <div className="md:w-1/4 flex flex-col gap-4">
                <p className="text-slate-500 leading-relaxed text-sm font-medium">
                  {item.desc}
                </p>
                <div className="flex items-center gap-2 text-slate-900 font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More <Plus size={14} />
                </div>
              </div>
            </div>
          ))}
          <div className="w-full h-[1px] bg-slate-100" />
        </div>

        {/* FOOTER ACTION */}
       
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute top-1/2 -left-20 w-64 h-64 bg-blue-50 rounded-full blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-slate-100 rounded-full blur-[120px] opacity-40 pointer-events-none" />
    </section>
  );
};

export default LeadStats;