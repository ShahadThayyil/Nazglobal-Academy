import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const containerRef = useRef(null);
  const wordRef = useRef(null);
  const fillTextRef = useRef(null);
  const words = ["Mastery.", "Excellence.", "Legacy."];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.8 } });

      // 1. Entrance: Typography reveal with Blur
      tl.from(".reveal-main", {
        y: 80,
        opacity: 0,
        filter: "blur(20px)",
        stagger: 0.1,
        delay: 0.5 
      })
      // 2. The Text-Fill Animation (Light to Dark Blue)
      .to(".text-fill-animate", {
        backgroundPositionX: "0%",
        duration: 2,
        stagger: 0.05,
        ease: "power2.inOut"
      }, "-=1")
      .from(".reveal-sub", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 1
      }, "-=1.5")
      .from(".hero-visual", {
        clipPath: "inset(100% 0% 0% 0%)", 
        duration: 1.8,
      }, "-=1.8");

      // 3. Seamless Word Cycling Logic
      let i = 0;
      const cycle = () => {
        const next = (i + 1) % words.length;
        const cycleTl = gsap.timeline({ onComplete: () => { i = next; cycle(); } });

        cycleTl.to(wordRef.current, {
          y: "-30%", opacity: 0, filter: "blur(15px)", duration: 0.7, ease: "power3.in", delay: 2.5
        })
        .set(wordRef.current, { innerText: words[next], y: "30%" })
        .to(wordRef.current, {
          y: "0%", opacity: 1, filter: "blur(0px)", duration: 0.9, ease: "expo.out"
        });
      };
      
      tl.add(() => cycle());
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen bg-[#FDFDFD] flex flex-col px-6 md:px-10 pt-32 md:pt-40 pb-20 overflow-hidden"
    >
      <div className="w-full flex-1 flex flex-col justify-center">
        
        {/* MASSIVE HEADLINE */}
        <div className="flex flex-col mb-12 md:mb-16">
          <div className="overflow-hidden">
            <h1 className="reveal-main text-[16vw] lg:text-[13vw] font-[950] leading-[0.8] tracking-tighter uppercase text-[#002147]">
              The New
            </h1>
          </div>
          <div className="overflow-hidden h-[15vw] lg:h-[12vw] flex items-center">
            <h1 
              ref={wordRef}
              className="text-[16vw] lg:text-[13vw] font-[950] leading-[0.8] tracking-tighter uppercase text-[#002147]"
            >
              Mastery.
            </h1>
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end">
          
          {/* EXPANDED NARRATIVE AREA */}
          <div className="lg:col-span-6 order-2 lg:order-1">
             <div className="max-w-2xl">
                {/* TEXT-FILL ANIMATION TEXT */}
                <h3 
                  className="text-fill-animate text-2xl md:text-4xl font-[950] uppercase tracking-tighter leading-[0.9] mb-8"
                  style={{
                    background: 'linear-gradient(to right, #002147 50%, #00214720 50%)',
                    backgroundSize: '200% 100%',
                    backgroundPositionX: '100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Architecting the Future of Global Leadership and Professional Integrity.
                </h3>

                <div className="reveal-sub space-y-6">
                  <p className="text-lg md:text-xl font-bold text-[#002147]/80 leading-snug uppercase tracking-tight">
                    Nazglobal Academy is a premier private educational institute dedicated to high-performance learning and world-class career placement.
                  </p>
                  
                  <p className="text-sm md:text-base font-medium text-[#002147]/60 leading-relaxed uppercase tracking-tight border-l-2 border-[#002147] pl-6">
                    Pioneering elite educational standards through a synthesis of rigorous academic inquiry and practical global career strategies. Our curriculum is engineered to transform high-potential students into world-class leaders, equipped for the complexities of the 2026 landscape.
                  </p>

                  <div className="pt-4">
                    <button className="group relative border-b-2 border-[#002147] pb-1 text-[11px] font-black uppercase tracking-[0.3em] text-[#002147] hover:text-blue-600 hover:border-blue-600 transition-all">
                      Enrollment 2026 Phase I
                    </button>
                  </div>
                </div>
             </div>
          </div>

          {/* VISUAL AREA */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="hero-visual relative aspect-video overflow-hidden rounded-sm bg-gray-100 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale opacity-90 transition-all duration-1000 hover:grayscale-0"
                alt="Institutional Excellence"
              />
            </div>
            <div className="reveal-sub mt-4 flex justify-between text-[9px] font-black uppercase tracking-widest text-[#002147]/40">
              <span>( 01 ) Global Performance Metrics</span>
              <span>Nazglobal Academy 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* BACKGROUND BRANDING */}
      <div className="absolute -bottom-10 -right-5 text-[22vw] font-[950] text-[#002147]/[0.01] pointer-events-none select-none uppercase leading-none">
        Nazglobal
      </div>
    </section>
  );
};

export default Hero;