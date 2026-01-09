import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LeadStats = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Divider lines drawing on scroll
      const dividers = gsap.utils.toArray(".line-divider");
      dividers.forEach((line) => {
        gsap.from(line, {
          scaleX: 0,
          transformOrigin: "left",
          ease: "none",
          scrollTrigger: {
            trigger: line,
            start: "top 90%",
            end: "top 70%",
            scrub: 1,
          }
        });
      });

      // 2. Smooth Text Fill Animation for Titles & Numbers
      const fillTexts = gsap.utils.toArray(".stat-fill");
      fillTexts.forEach((text) => {
        gsap.to(text, {
          backgroundPositionX: "0%",
          ease: "none",
          scrollTrigger: {
            trigger: text,
            start: "top 90%",
            end: "top 60%",
            scrub: 0.8, // പതുക്കെ നിറഞ്ഞു വരാൻ
          }
        });
      });

      // 3. Number Counter Logic (Triggered on viewport entry)
      const numbers = gsap.utils.toArray(".stat-count");
      numbers.forEach((num) => {
        const endValue = parseInt(num.innerText);
        gsap.from(num, {
          innerText: 0,
          duration: 2,
          snap: { innerText: 1 },
          ease: "power3.out",
          scrollTrigger: {
            trigger: num,
            start: "top 90%",
            toggleActions: "play none none reverse",
          }
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Design System Style: Text Fill Effect
  const fillStyle = {
    background: 'linear-gradient(to right, #002147 50%, #00214720 50%)',
    backgroundSize: '200% 100%',
    backgroundPositionX: '100%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-[#FDFDFD] py-32 md:py-56 px-6 md:px-10 overflow-hidden"
    >
      <div className="max-w-[1920px] mx-auto">
        
        {/* SECTION INTRO - Clean Typography */}
        <div className="mb-32">
          <h2 className="stat-fill text-[12vw] lg:text-[7vw] font-[950] leading-none text-[#002147] uppercase tracking-tighter mb-10" style={fillStyle}>
            The Performance <br /> Index.
          </h2>
          <p className="max-w-xl text-lg font-bold text-[#002147]/60 uppercase tracking-tight border-l-2 border-[#002147]/10 pl-8">
            Establishing institutional integrity through measurable academic performance and career placement.
          </p>
        </div>

        {/* LINEAR DATA STREAM */}
        <div className="flex flex-col mt-20">
          
          {/* Metric 01: Legacy */}
          <div className="group relative flex flex-col md:flex-row md:items-end justify-between py-16 md:py-24">
            <div className="line-divider absolute top-0 left-0 w-full h-[1px] bg-[#002147]/10"></div>
            
            <div className="flex flex-col gap-6">
              <span className="text-[10px] font-black text-[#002147]/40 uppercase tracking-[0.5em]">Heritage / 01</span>
              <h3 className="stat-fill text-4xl md:text-6xl lg:text-7xl font-[950] text-[#002147] uppercase tracking-tighter" style={fillStyle}>
                Institutional Mastery
              </h3>
            </div>

            <div className="mt-10 md:mt-0 flex items-baseline gap-2">
              <span className="stat-count stat-fill text-8xl md:text-[11rem] font-[950] leading-none tracking-tighter" style={fillStyle}>
                12
              </span>
              <span className="stat-fill text-3xl font-black text-[#002147]" style={fillStyle}>YR</span>
            </div>
          </div>

          {/* Metric 02: Success */}
          <div className="group relative flex flex-col md:flex-row md:items-end justify-between py-16 md:py-24">
            <div className="line-divider absolute top-0 left-0 w-full h-[1px] bg-[#002147]/10"></div>
            
            <div className="flex flex-col gap-6">
              <span className="text-[10px] font-black text-[#002147]/40 uppercase tracking-[0.5em]">Outcome / 02</span>
              <h3 className="stat-fill text-4xl md:text-6xl lg:text-7xl font-[950] text-[#002147] uppercase tracking-tighter" style={fillStyle}>
                Career Placement
              </h3>
            </div>

            <div className="mt-10 md:mt-0 flex items-baseline gap-2">
              <span className="stat-count stat-fill text-8xl md:text-[11rem] font-[950] leading-none tracking-tighter" style={fillStyle}>
                98
              </span>
              <span className="stat-fill text-3xl font-black text-[#002147]" style={fillStyle}>%</span>
            </div>
          </div>

          {/* Metric 03: Reach */}
          <div className="group relative flex flex-col md:flex-row md:items-end justify-between py-16 md:py-24">
            <div className="line-divider absolute top-0 left-0 w-full h-[1px] bg-[#002147]/10"></div>
            <div className="line-divider absolute bottom-0 left-0 w-full h-[1px] bg-[#002147]/10"></div>
            
            <div className="flex flex-col gap-6">
              <span className="text-[10px] font-black text-[#002147]/40 uppercase tracking-[0.5em]">Scale / 03</span>
              <h3 className="stat-fill text-4xl md:text-6xl lg:text-7xl font-[950] text-[#002147] uppercase tracking-tighter" style={fillStyle}>
                Academic Scope
              </h3>
            </div>

            <div className="mt-10 md:mt-0 flex items-baseline gap-2">
              <span className="stat-count stat-fill text-8xl md:text-[11rem] font-[950] leading-none tracking-tighter" style={fillStyle}>
                64
              </span>
              <span className="stat-fill text-3xl font-black text-[#002147]" style={fillStyle}>+</span>
            </div>
          </div>

        </div>

        {/* METADATA FOOTER */}
        
      </div>
    </section>
  );
};

export default LeadStats;