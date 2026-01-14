import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Shield, Target, Zap, Microscope, BookOpen, Plus } from 'lucide-react';

const PILLARS = [
  {
    icon: <Shield size={32} strokeWidth={1.5} />,
    tag: "Governance",
    title: "Global Academic Stewardship",
    desc: "Our programs are architected under the supervision of international regents to meet the most stringent professional benchmarks.",
    detail: "Metric 01 — Accreditation Tier 1"
  },
  {
    icon: <Zap size={32} strokeWidth={1.5} />,
    tag: "Innovation",
    title: "Technical Synergy & Labs",
    desc: "Bridging the gap between theory and industry with high-fidelity laboratories designed for 2026-grade technical mastery.",
    detail: "Metric 02 — Next-Gen Research"
  },
  {
    icon: <Microscope size={32} strokeWidth={1.5} />,
    tag: "Intelligence",
    title: "AI-Integrated Pedagogy",
    desc: "Harnessing advanced neural networks to personalize the learning trajectory for every individual student in real-time.",
    detail: "Metric 03 — Adaptive Learning 2.0"
  },
  {
    icon: <BookOpen size={32} strokeWidth={1.5} />,
    tag: "Curriculum",
    title: "Dynamic Industry Mapping",
    desc: "We pivot our syllabi quarterly based on real-time data from global architectural and tech corporate ecosystems.",
    detail: "Metric 04 — Agile Framework"
  },
  {
    icon: <Target size={32} strokeWidth={1.5} />,
    tag: "Outcomes",
    title: "Strategic Career Trajectory",
    desc: "Success is engineered. Through direct pipelines into global corporate ecosystems, our graduates lead the market.",
    detail: "Metric 05 — 98% Placement Rate"
  }
];

const WhyNazglobal = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // 1. Reveal Header
    tl.from(".main-title-reveal > *", {
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });

    // 2. Staggered Entrance for Rows
    tl.from(".pillar-row", {
      y: 60,
      opacity: 0,
      stagger: 0.15,
      duration: 1.2,
      ease: "power3.out"
    }, "-=0.6");

    // 3. Floating icon effect
    gsap.to(".icon-portal", {
      y: -8,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.2
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative bg-white py-24 md:py-40 overflow-hidden">
      
      {/* BACKGROUND BRANDING */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.015] pointer-events-none select-none">
        <h2 className="text-[30vw] font-black uppercase tracking-tighter">Charter</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="main-title-reveal flex flex-col items-center text-center mb-24">
          <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
            Institutional Foundation
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight lowercase">
            the core <span className="text-blue-600 italic font-serif">pillars.</span>
          </h2>
          <p className="mt-8 text-slate-500 max-w-xl text-lg font-medium leading-relaxed">
            Defining the future of education through a rigid framework of ethics and academic rigor.
          </p>
        </div>

        {/* LIST LAYOUT - FIXED VISIBILITY ISSUES */}
        <div className="flex flex-col border-t border-slate-100">
          {PILLARS.map((item, i) => (
            <div 
              key={i} 
              className="pillar-row group relative py-12 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 transition-all duration-500 hover:px-8"
            >
              {/* Hover Background */}
              <div className="absolute inset-0 bg-slate-50 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom -z-10 rounded-[2rem]" />
              
              {/* Bottom Border */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-slate-100" />

              {/* Column 1: Icon & Pillar Number */}
              <div className="flex items-center gap-6 md:w-1/4">
                 <div className="icon-portal w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shrink-0">
                    {item.icon}
                 </div>
                 <div className="flex flex-col">
                    <span className="text-blue-600 font-bold text-[10px] uppercase tracking-widest">Pillar 0{i + 1}</span>
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">{item.tag}</span>
                 </div>
              </div>

              {/* Column 2: Large Title */}
              <div className="md:w-1/3 group-hover:translate-x-2 transition-transform duration-500">
                 <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter leading-tight lowercase">
                   {item.title}
                 </h3>
              </div>

              {/* Column 3: Description & Detail */}
              <div className="md:w-1/4 flex flex-col gap-4">
                <p className="text-slate-500 leading-relaxed text-sm font-medium">
                  {item.desc}
                </p>
                <div className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                   <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] italic">
                     {item.detail}
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      
      </div>

      {/* BLUR ACCENTS */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-50 rounded-full blur-[120px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-96 h-96 bg-slate-50 rounded-full blur-[120px] opacity-40 pointer-events-none" />
    </section>
  );
};

export default WhyNazglobal;