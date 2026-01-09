import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const HeritageAcademyHero = () => {
  const containerRef = useRef(null);
  const imageWrapRef = useRef(null);

  useGSAP(() => {
    // 1. Initial Entrance Animation
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1.6 } });

    tl.from(".hero-title span", { y: 110, opacity: 0, stagger: 0.15 })
      .from(imageWrapRef.current, { 
        clipPath: "inset(100% 0% 0% 0%)", 
        scale: 1.1,
        duration: 2 
      }, "-=1.2");

    // 2. THE STACKING LOGIC (The Fix)
    // ഈ സെക്ഷനെ സ്ക്രീനിൽ ലോക്ക് ചെയ്തു നിർത്തുന്നു
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom top", // അടുത്ത സെക്ഷൻ വരുന്നത് വരെ ഇത് ഇവിടെ നിൽക്കും
      pin: true,
      pinSpacing: false, // അടുത്ത സെക്ഷന് ഇതിന് മുകളിലേക്ക് കയറാൻ ഇത് അത്യാവശ്യമാണ്
      scrub: true,
    });

    // പശ്ചാത്തലത്തിലുള്ള ഇമേജിന് ചെറിയൊരു പാരാലാക്സ് ഇഫക്റ്റ് കൂടി നൽകാം
    gsap.to(imageWrapRef.current, {
      y: 100,
      scale: 0.95,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef} 
      // z-index കുറച്ചു നൽകുക (ഉദാഹരണത്തിന് 10)
      className="relative w-full h-screen bg-[#FDFDFD] text-[#1a1a1a] overflow-hidden flex flex-col z-10"
    >
      <div className="h-20 md:h-24 w-full shrink-0" />

      <section className="flex-1 w-full px-6 md:px-12 lg:px-20 relative flex flex-col items-center">
        <div className="w-full text-center z-20 mt-4 md:mt-8">
          <h1 className="hero-title text-5xl md:text-7xl lg:text-[7vw] font-serif leading-[0.95] tracking-tighter">
            <span className="block overflow-hidden">Architecting a</span>
            <span className="block overflow-hidden text-[#800000] italic py-2">Legacy of Wisdom.</span>
          </h1>
        </div>

        <div className="relative w-full max-w-6xl flex-1 mt-[-2vh] md:mt-[-5vh] z-10 group">
          <div 
            ref={imageWrapRef}
            className="w-full h-full rounded-t-full overflow-hidden shadow-[0_50px_100px_rgba(128,0,0,0.12)] border-x-[1px] border-t-[1px] border-gray-100 bg-white"
          >
            <img 
              src="/Forground.png" 
              className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000" 
              alt="Academy Campus" 
            />
          </div>
        </div>
      </section>

      <div className="absolute -bottom-10 -right-10 pointer-events-none opacity-[0.03] select-none">
        <h2 className="text-[18vw] font-serif font-black leading-none uppercase tracking-tighter">Nazglobal</h2>
      </div>
    </div>
  );
};

export default HeritageAcademyHero;