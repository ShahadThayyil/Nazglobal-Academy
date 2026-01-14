import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Clock, BarChart, Globe, ShieldCheck, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FeaturedPrograms = () => {
  const containerRef = useRef(null);

  const programs = [
    {
      id: "01",
      title: "Strategic Leadership & Global Governance",
      category: "Executive Management",
      duration: "24 Months",
      level: "Executive Tier",
      desc: "An elite academic framework architected for visionary leaders. This program integrates global organizational dynamics with strategic foresight, preparing candidates to navigate the complexities of international markets and institutional change.",
      features: ["International Board Mentorship", "Strategic Risk Assessment", "Global Market Integration"],
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Global Commerce & Digital Economy",
      category: "International Business",
      duration: "18 Months",
      level: "Advanced Professional",
      desc: "A rigorous exploration of international trade standards, digital economy regulations, and ethical governance. Designed for professionals aiming to master technical precision in global fiscal operations and regulatory compliance.",
      features: ["Trade Policy Analysis", "Digital Asset Regulation", "Ethical Leadership Protocols"],
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Digital Systems & Computational Architecture",
      category: "Technological Systems",
      duration: "12 Months",
      level: "Technical Specialist",
      desc: "Leading technological transformation through computational thinking and advanced systems design. This program provides a high-fidelity environment for mastering architectural planning and next-generation technical innovation.",
      features: ["Systemic Design Thinking", "High-Fidelity Prototyping", "Technical Synergy Labs"],
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    }
  ];

  useGSAP(() => {
    // 1. Header Reveal
    gsap.from(".prog-header-inner > *", {
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".prog-header-inner",
        start: "top 90%",
      }
    });

    // 2. Snappy Card Reveal
    const cards = gsap.utils.toArray(".prog-item");
    cards.forEach((card) => {
      gsap.from(card, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-white py-24 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        
        {/* SECTION HEADER */}
        <div className="prog-header-inner flex flex-col items-center text-center mb-24 md:mb-40">
          <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
            Academic Portfolios
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight lowercase leading-none">
            Curated <span className="text-blue-600 italic font-serif">Pathways.</span>
          </h2>
          <p className="mt-8 text-slate-500 max-w-xl text-lg font-medium leading-relaxed">
            Standardizing professional mastery through specialized educational trajectories and high-fidelity research environments.
          </p>
        </div>

        {/* VERTICAL PROGRAMS LIST - Reduced to 3 with increased depth */}
        <div className="flex flex-col gap-40 md:gap-64">
          {programs.map((item, i) => (
            <div key={i} className="prog-item group flex flex-col items-center text-center">
              
              {/* IMAGE WRAPPER */}
              <div className="relative w-full max-w-5xl aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(30,58,138,0.12)] bg-slate-50 border border-slate-100">
                <img 
                  src={item.img} 
                  className="prog-img w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  alt={item.title}
                />
                <div className="absolute top-8 left-8">
                  <span className="bg-white/95 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 shadow-sm border border-white">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* CONTENT AREA - Increased Content */}
              <div className="prog-content mt-16 max-w-3xl px-4">
                <div className="flex justify-center gap-10 mb-8 text-slate-400">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-blue-600" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">{item.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart size={16} className="text-blue-600" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">{item.level}</span>
                  </div>
                </div>

                <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-8">
                  {item.title}
                </h3>
                
                <p className="text-slate-500 text-sm md:text-lg leading-relaxed mb-12 font-medium">
                  {item.desc}
                </p>

                {/* ADDITIONAL CONTENT BARS - The "Increase" */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center gap-2 py-3 px-4 bg-slate-50 rounded-xl border border-slate-100/50">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="w-16 h-[1px] bg-slate-200 mx-auto group-hover:w-32 group-hover:bg-blue-600 transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM ACTION */}
        <div className="mt-56 text-center">
          <button className="group relative p-16 md:p-24 bg-slate-50 rounded-[3rem] w-full border border-slate-100 hover:border-blue-200 transition-all duration-700 overflow-hidden">
            <div className="relative z-10 flex flex-col items-center">
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                Institutional Academic Catalog 2026
              </span>
              <h4 className="text-3xl md:text-5xl font-black text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">
                View All <span className="italic font-serif lowercase text-blue-600">Academic Specializations.</span>
              </h4>
            </div>
            <span className="absolute bottom-0 right-0 text-[15vw] font-black text-slate-200/20 translate-y-1/2 translate-x-1/4 uppercase tracking-tighter select-none pointer-events-none group-hover:text-blue-600/5 transition-colors">Nazglobal</span>
          </button>
        </div>
      </div>

      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-blue-50 rounded-full blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-[30rem] h-[30rem] bg-slate-100 rounded-full blur-[120px] opacity-40 pointer-events-none" />
    </section>
  );
};

export default FeaturedPrograms;  