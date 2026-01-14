import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Quote, Sparkles, Fingerprint, Target } from 'lucide-react';

const PHILOSOPHIES = [
  {
    icon: <Fingerprint size={32} strokeWidth={1} />,
    title: "individual trajectory.",
    desc: "We reject the mass-production model of education. Every student is a unique architectural project, requiring a bespoke roadmap to global mastery.",
    tag: "bespoke growth"
  },
  {
    icon: <Sparkles size={32} strokeWidth={1} />,
    title: "unfiltered innovation.",
    desc: "Excellence is not found in textbooks. It is forged in our labs through trial, error, and the relentless pursuit of technical synergy.",
    tag: "innovation lab"
  },
  {
    icon: <Target size={32} strokeWidth={1} />,
    title: "ethical governance.",
    desc: "Standardizing architectural ethics at a global level. We teach our graduates not just how to build, but why their structures matter to humanity.",
    tag: "stewardship"
  }
];

const PhilosophySection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".philosophy-header > *", {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power4.out"
    })
    .from(".creed-panel", {
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 1.2,
      ease: "power3.out"
    }, "-=0.6");
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative bg-white py-16 md:py-32 lg:py-48 overflow-hidden">
      
      {/* KINETIC WATERMARK - Scale adjusted for smaller screens */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] select-none flex items-center justify-center z-0">
        <h2 className="text-[40vw] md:text-[35vw] font-black uppercase tracking-tighter rotate-[-5deg]">creed</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
        
        {/* HEADER AREA - Responsive Typography */}
        <div className="philosophy-header flex flex-col items-center text-center mb-16 md:mb-32 lg:mb-40">
           <div className="flex items-center gap-3 mb-6">
              <div className="w-8 md:w-10 h-[1.5px] bg-blue-600" />
              <span className="text-blue-600 font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px]">The Ethos</span>
              <div className="w-8 md:w-10 h-[1.5px] bg-blue-600" />
           </div>
           <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-slate-900 tracking-tight lowercase leading-[0.9] md:leading-[0.85]">
             institutional <br /> <span className="text-blue-600 italic font-serif">philosophy.</span>
           </h2>
           <p className="mt-6 md:mt-10 text-slate-400 max-w-lg text-xs md:text-sm lg:text-lg font-medium leading-relaxed uppercase tracking-widest px-4">
             defining the moral and technical compass of the next generation.
           </p>
        </div>

        {/* CORE CREED PANELS - Responsive Grid (1 col mobile, 3 col desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 items-stretch">
          {PHILOSOPHIES.map((item, i) => (
            <div 
              key={i} 
              className={`creed-panel group relative bg-slate-50 p-8 md:p-10 lg:p-14 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 transition-all duration-700 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-2 flex flex-col h-full ${i === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="flex flex-col h-full">
                
                {/* ICON & INDEX */}
                <div className="flex items-start justify-between mb-8 md:mb-12">
                   <div className="text-blue-600 p-3 md:p-4 bg-white rounded-xl md:rounded-2xl shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shrink-0">
                      {React.cloneElement(item.icon, { size: 28, className: "md:w-[32px] md:h-[32px]" })}
                   </div>
                   <span className="text-slate-200 font-black text-xl md:text-2xl group-hover:text-blue-100 transition-colors">
                     0{i + 1}
                   </span>
                </div>

                {/* CONTENT */}
                <div className="flex flex-col gap-4 md:gap-6">
                   <span className="text-blue-600 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em]">
                     {item.tag}
                   </span>
                   <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight lowercase leading-none">
                     {item.title}
                   </h3>
                   <p className="text-slate-500 text-sm md:text-base lg:text-lg font-medium leading-relaxed">
                     {item.desc}
                   </p>
                </div>

                {/* VISUAL DIVIDER */}
                <div className="mt-auto pt-8 md:pt-10">
                   <div className="w-12 h-[1px] bg-slate-200 group-hover:w-20 lg:group-hover:w-24 group-hover:bg-blue-600 transition-all duration-700" />
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* FINAL STATEMENT BLOCK - Optimized for all viewports */}
        <div className="mt-24 md:mt-40 lg:mt-64 flex flex-col items-center text-center">
            <div className="p-3 md:p-4 bg-slate-50 rounded-full mb-6 md:mb-10">
               <Quote className="text-blue-600 fill-blue-600 opacity-20 w-8 h-8 md:w-10 md:h-10" />
            </div>
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight lowercase leading-tight max-w-4xl px-4">
              "we do not just build careers; we <span className="text-blue-600 italic font-serif">architect</span> the leaders who will define the coming century."
            </h3>
            
            <div className="mt-12 md:mt-16 flex items-center gap-3 md:gap-4 opacity-30">
               <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-slate-900" />
               <div className="w-16 md:w-24 h-[1px] bg-slate-200" />
               <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-slate-900" />
            </div>
        </div>

      </div>

    </section>
  );
};

export default PhilosophySection;