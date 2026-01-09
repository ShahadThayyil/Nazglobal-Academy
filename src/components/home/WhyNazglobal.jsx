import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const VALUES = [
  {
    id: "01",
    year: "2024",
    title: "Faculty Mastery",
    desc: "A collective of industry veterans and academic cohorts reimagining global leadership schooling.",
    subDesc: "It marked a moment of return and renewal, where the Academy Charter was drafted as a shared beginning.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "02",
    year: "2025",
    title: "Digital Synergy",
    desc: "Infrastructure equipped with 2026-grade technology for high-impact technical mastery.",
    subDesc: "Our labs serve as the drafting grounds for next-generation professional excellence and global compliance.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "03",
    year: "2026",
    title: "Global Reach",
    desc: "Establishing direct conduits to corporate giants ensuring graduates a strategic advantage.",
    subDesc: "This homecoming of industry and academia defines our role as a global leader in private education.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
  }
];

const WhyNazglobal = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const items = gsap.utils.toArray(".value-item");
    
    // Desktop only animations
    let mm = gsap.matchMedia();
    
    mm.add("(min-width: 1024px)", () => {
      items.forEach((item) => {
        const image = item.querySelector(".img-container");
        const line = item.querySelector(".growth-line");

        gsap.from(image, {
          clipPath: "inset(0 100% 0 0)",
          duration: 1.5,
          ease: "expo.inOut",
          scrollTrigger: {
            trigger: item,
            start: "top 70%",
          }
        });

        gsap.from(line, {
          scaleY: 0,
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom center",
            scrub: true,
          }
        });
      });
    });

    // Mobile reveal
    mm.add("(max-width: 1023px)", () => {
      items.forEach((item) => {
        gsap.from(item, {
          y: 30,
          autoAlpha: 0,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          }
        });
      });
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative bg-[#FDFDFD] py-24 md:py-40 overflow-hidden">
      <div className="px-6 lg:px-20 max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="mb-24 md:mb-40 max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-[#DAA520]" />
            <span className="text-[10px] font-black text-[#800000] uppercase tracking-[0.5em]">The Blueprint</span>
          </div>
          <h2 className="text-6xl md:text-[10vw] font-serif leading-[0.8] text-[#1a1a1a] tracking-tighter">
            Why <br /> <span className="text-[#800000] italic ml-[5vw]">Academy.</span>
          </h2>
        </div>

        {/* TIMELINE CONTENT */}
        <div className="flex flex-col gap-32 md:gap-64">
          {VALUES.map((item, i) => (
            <div key={item.id} className="value-item group grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start relative">
              
              {/* LEFT SIDE: Sticky Year & ID */}
              <div className="lg:col-span-3 lg:sticky lg:top-40 flex lg:flex-col justify-between lg:justify-start items-baseline lg:items-start gap-4 h-fit">
                <span className="text-6xl md:text-8xl font-serif text-[#1a1a1a] opacity-10 leading-none">{item.id}</span>
                <div className="flex flex-col">
                  <span className="text-xl md:text-2xl font-serif italic text-[#800000]">{item.year}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#DAA520] mt-2">Institutional Phase</span>
                </div>
                {/* Vertical Progress Line (Desktop Only) */}
                <div className="growth-line hidden lg:block w-[1px] h-40 bg-gray-100 absolute left-4 -bottom-48 pointer-events-none">
                  <div className="w-full h-full bg-[#DAA520] scale-y-0 origin-top" />
                </div>
              </div>

              {/* CENTER: Image with Clip-path reveal */}
              <div className="lg:col-span-5 img-container relative aspect-[4/5] overflow-hidden rounded-sm bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" 
                />
              </div>

              {/* RIGHT SIDE: Narrative Content */}
              <div className="lg:col-span-4 lg:pt-20">
                <div className="flex flex-col gap-6 md:gap-10">
                  <h3 className="text-3xl md:text-5xl font-serif text-[#1a1a1a] leading-tight tracking-tight">
                    {item.title}
                  </h3>
                  <div className="flex flex-col gap-6">
                    <p className="text-lg md:text-xl font-bold uppercase leading-tight text-[#1a1a1a]/80">
                      {item.desc}
                    </p>
                    <p className="text-sm md:text-base font-medium leading-relaxed text-gray-500 max-w-sm">
                      {item.subDesc}
                    </p>
                  </div>
                  {/* Detailed Link */}
                  <div className="mt-4 overflow-hidden h-fit">
                    <button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-[#800000] border-b border-[#DAA520] pb-2 group-hover:gap-8 transition-all">
                      Read Archive <span>→</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* REFINED FOOTER WATERMARK */}
        <div className="mt-40 pt-20 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-10">
           <div className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.4em]">Nazglobal Academy — Institutional Heritage</div>
           <div className="flex gap-10">
              <span className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-[10px] font-bold text-[#DAA520]">01</span>
              <span className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-200">02</span>
              <span className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-200">03</span>
           </div>
        </div>

      </div>
    </section>
  );
};

export default WhyNazglobal;