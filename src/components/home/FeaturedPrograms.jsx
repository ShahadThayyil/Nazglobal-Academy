import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const FeaturedPrograms = () => {
  const scrollRef = useRef(null);
  const triggerRef = useRef(null);

  const programs = [
    {
      id: "01",
      title: "Advanced Leadership",
      category: "Management",
      desc: "Designed for high-potential individuals aiming to master global strategies.",
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Global Compliance",
      category: "Professional",
      desc: "Navigating international standards and industrial regulations with precision.",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Strategic Innovation",
      category: "Technology",
      desc: "Leading change through architectural thinking and technological foresight.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    }
  ];

  useGSAP(() => {
    let mm = gsap.matchMedia();

    // --- DESKTOP LOGIC (Horizontal Pinning) ---
    mm.add("(min-width: 1024px)", () => {
      const scrollTween = gsap.to(scrollRef.current, {
        x: () => -(scrollRef.current.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${scrollRef.current.scrollWidth}`,
          invalidateOnRefresh: true,
        }
      });

      programs.forEach((_, i) => {
        gsap.from(`.prog-card-${i} .img-reveal`, {
          scale: 1.5,
          scrollTrigger: {
            trigger: `.prog-card-${i}`,
            containerAnimation: scrollTween,
            start: "left center",
            scrub: true,
          }
        });
      });
    });

    // --- MOBILE LOGIC (Simple Vertical Reveal) ---
    mm.add("(max-width: 1023px)", () => {
      programs.forEach((_, i) => {
        gsap.from(`.prog-card-${i}`, {
          y: 50,
          autoAlpha: 0,
          duration: 1,
          scrollTrigger: {
            trigger: `.prog-card-${i}`,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        });
      });
    });

    // Common Section Title Entrance
    gsap.from(".section-header-reveal", {
      y: 50,
      autoAlpha: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top 80%",
      }
    });

    return () => mm.revert();
  }, { scope: triggerRef });

  return (
    <div ref={triggerRef} className="bg-[#FDFDFD] overflow-hidden">
      {/* Mobile: flex-col (Vertical)
          Desktop: flex-row h-screen (Horizontal Pin)
      */}
      <div 
        ref={scrollRef} 
        className="relative flex flex-col lg:flex-row lg:h-screen w-full lg:w-fit items-center px-6 md:px-[10vw] py-20 lg:py-0 gap-16 lg:gap-40"
      >
        
        {/* SECTION INTRO PANEL */}
        <div className="flex flex-col justify-center w-full lg:min-w-[40vw] section-header-reveal">
          <div className="flex items-center gap-4 mb-6 lg:mb-8">
            <div className="w-10 lg:w-12 h-[1px] bg-[#DAA520]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] lg:tracking-[0.5em] text-[#800000]">Programmes</span>
          </div>
          <h2 className="text-5xl lg:text-[10vw] font-serif leading-[0.9] lg:leading-[0.8] tracking-tighter text-[#1a1a1a]">
            Curated <br /> <span className="italic text-[#800000]">Pathways.</span>
          </h2>
          <p className="mt-8 lg:mt-12 text-gray-400 max-w-sm font-medium leading-relaxed uppercase text-[9px] lg:text-[10px] tracking-widest">
            A comprehensive curriculum architected to define the leaders of tomorrow.
          </p>
        </div>

        {/* PROGRAM CARDS */}
        {programs.map((item, i) => (
          <div 
            key={i} 
            className={`prog-card-${i} relative flex flex-col lg:flex-row items-center gap-8 lg:gap-20 w-full lg:min-w-[70vw] h-auto lg:h-[70vh]`}
          >
            {/* LARGE BACKGROUND NUMBER (Desktop Only for clarity) */}
            <span className="hidden lg:block absolute -top-10 -left-10 text-[20vw] font-serif font-black text-gray-50 opacity-[0.05] select-none -z-10">
              {item.id}
            </span>

            {/* IMAGE WRAPPER */}
            <div className="relative w-full lg:w-1/2 aspect-[4/3] lg:h-full overflow-hidden rounded-sm shadow-xl lg:shadow-2xl border border-gray-100">
              <img 
                src={item.img} 
                className="img-reveal w-full h-full object-cover grayscale lg:transition-all lg:duration-1000 lg:group-hover:grayscale-0"
                alt={item.title}
              />
              <div className="absolute top-4 left-4 lg:top-6 lg:left-6">
                <span className="bg-[#800000] text-white text-[8px] font-bold px-3 py-1.5 lg:px-4 lg:py-2 uppercase tracking-widest">
                  {item.category}
                </span>
              </div>
            </div>

            {/* TEXT CONTENT */}
            <div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-1/3">
              <div>
                <span className="text-[#DAA520] text-[10px] lg:text-xs font-black tracking-widest mb-2 block">{item.id}</span>
                <h3 className="text-3xl lg:text-6xl font-serif text-[#1a1a1a] tracking-tight leading-none mb-4 lg:mb-6">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm lg:text-base text-gray-500 font-medium leading-relaxed">
                {item.desc}
              </p>
              <div className="mt-4">
                <button className="flex items-center gap-4 border-b border-[#800000] pb-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#800000]">Explore Syllabus</span>
                  <span className="text-[#DAA520]">→</span>
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* MOBILE VIEW ALL (Simple) */}
        <div className="w-full lg:min-w-[30vw] flex justify-center lg:justify-start pt-10 lg:pt-0 lg:pr-[10vw]">
           <button className="w-full lg:w-auto py-5 lg:p-24 border border-gray-200 lg:rounded-full text-[#800000] font-serif italic text-xl lg:text-4xl hover:bg-[#800000] hover:text-white transition-all">
              View All
           </button>
        </div>

      </div>
    </div>
  );
};

export default FeaturedPrograms;