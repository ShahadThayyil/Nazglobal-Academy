import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ParallaxSection = () => {
  const containerRef = useRef(null);
  const bgImageRef = useRef(null);

  useGSAP(() => {
    // 1. Background Image Pinning
    // ഇമേജിനെ സ്ക്രീനിൽ ഉറപ്പിച്ചു നിർത്തുന്നു, കണ്ടന്റ് അതിനു മുകളിലൂടെ സ്ക്രോൾ ചെയ്യും.
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: bgImageRef.current,
      pinSpacing: false, // ഇമേജ് ഫിക്സ് ആവുമ്പോൾ സ്പേസ് വരാതിരിക്കാൻ
      scrub: true,
    });

    // 2. Text Parallax (Subtle Movement)
    // ടെക്സ്റ്റ് ബ്ലോക്കുകൾക്ക് ഇമേജിനേക്കാൾ അല്പം വേഗത കുറച്ച് സ്ക്രോൾ നൽകുന്നു.
    gsap.utils.toArray(".parallax-text-block").forEach((block) => {
      gsap.to(block, {
        y: -100, // മുകളിലേക്ക് പതുക്കെ നീങ്ങുന്നു
        ease: "none",
        scrollTrigger: {
          trigger: block,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
        }
      });
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative">
      
      {/* --- FIXED BACKGROUND IMAGE LAYER (Z-0) --- */}
      <div ref={bgImageRef} className="absolute inset-0 w-full h-screen z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" 
          alt="Campus Architecture" 
          className="w-full h-full object-cover grayscale-[20%] scale-105 contrast-[1.1]"
        />
        {/* Light Overlay to ensure text readability if needed */}
        <div className="absolute inset-0 bg-white/10 mix-blend-overlay" />
      </div>


      {/* --- SCROLLING CONTENT LAYERS (Z-10) --- */}
      <div className="relative z-10">

        {/* PANEL 1: Intro Box (White Background) */}
        <div className="bg-[#FDFDFD] pt-32 pb-20 md:pt-40 md:pb-32 px-6lg:px-20 border-b border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.05)] relative">
          <div className="max-w-7xl mx-auto parallax-text-block">
             <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-[1px] bg-[#DAA520]" />
               <span className="text-[10px] font-black text-[#800000] uppercase tracking-[0.5em]">The Foundation</span>
             </div>
             <h2 className="text-6xl md:text-[8vw] font-serif leading-[0.9] text-[#1a1a1a] tracking-tighter">
               Built on <br /> <span className="text-[#800000] italic">Principles.</span>
             </h2>
          </div>
        </div>

        {/* GAP 1 (Image Reveal Area) */}
        <div className="h-[40vh] md:h-[60vh] w-full pointer-events-none">
           {/* This empty space reveals the fixed background image */}
        </div>

        {/* PANEL 2: Middle Content (White Background) */}
        <div className="bg-[#FDFDFD] py-24 md:py-40 px-6 lg:px-20 border-y border-gray-100 shadow-[0_-20px_40px_rgba(0,0,0,0.05)] relative">
           <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center parallax-text-block">
              <div className="md:w-1/2">
                 <h3 className="text-4xl md:text-6xl font-serif text-[#1a1a1a] tracking-tight leading-none mb-8">
                    Space that <br className="hidden md:block"/> <span className="text-[#DAA520] italic">Inspires.</span>
                 </h3>
              </div>
              <div className="md:w-1/2">
                 <p className="text-gray-500 text-base md:text-lg leading-relaxed font-medium max-w-xl">
                    Our campus isn't just a backdrop; it's an active participant in the learning process. Designed to foster collaboration, contemplation, and the free exchange of groundbreaking ideas.
                 </p>
                 <div className="mt-12">
                   <button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-[#800000] border-b border-[#DAA520] pb-2 hover:gap-8 transition-all">
                      Explore Campus Map <span>→</span>
                   </button>
                 </div>
              </div>
           </div>
        </div>

         {/* GAP 2 (Image Reveal Area) */}
        <div className="h-[40vh] md:h-[60vh] w-full pointer-events-none flex items-center justify-center">
            {/* Optional: A floating text in the gap */}
            <h4 className="text-white/80 text-[5vw] font-serif font-black uppercase tracking-tighter backdrop-blur-sm px-8">
               Global Vision
            </h4>
        </div>

        {/* PANEL 3: Final Statement (White Background) */}
        <div className="bg-[#FDFDFD] py-32 px-6 lg:px-20 border-t border-gray-100 shadow-[0_-20px_40px_rgba(0,0,0,0.05)] relative">
           <div className="max-w-4xl mx-auto text-center parallax-text-block">
              <h3 className="text-3xl md:text-5xl font-serif text-[#1a1a1a] tracking-tight leading-tight mb-10">
                 We don't just teach the future. <br/> We architect the environment for it.
              </h3>
              <div className="flex justify-center gap-4">
                 <div className="w-2 h-2 rounded-full bg-[#800000]" />
                 <div className="w-2 h-2 rounded-full bg-[#DAA520]" />
                 <div className="w-2 h-2 rounded-full bg-[#1a1a1a]" />
              </div>
           </div>
        </div>

      </div>

    </section>
  );
};

export default ParallaxSection;