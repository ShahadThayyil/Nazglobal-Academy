import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeaturedPrograms = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom", // സെക്ഷൻ താഴെ എത്തുമ്പോൾ തുടങ്ങുന്നു
          end: "top 10%",    // സെക്ഷൻ ടോപ്പിൽ എത്തുമ്പോഴേക്കും അസംബ്ലി കഴിയണം
          scrub: 1.5,        // സ്ക്രോളിന് അനുസരിച്ചുള്ള സ്മൂത്ത് മൂവ്മെന്റ്
        }
      });

      // 1. എലമെന്റുകൾ സൈഡുകളിൽ നിന്ന് വന്ന് അസംബിൾ ചെയ്യുന്ന ആനിമേഷൻ
      tl.from(".prog-img-1", { xPercent: 100, opacity: 0, rotate: 5 }, 0)
        .from(".prog-img-2", { xPercent: -100, opacity: 0, rotate: -5 }, 0.2)
        .from(".prog-text-1", { xPercent: -120, opacity: 0 }, 0.1)
        .from(".prog-text-2", { xPercent: 120, opacity: 0 }, 0.3)
        .from(".prog-header", { y: 100, opacity: 0, filter: "blur(20px)" }, 0);

      // 2. Text Fill Effect for the assembled title
      gsap.to(".assemble-title", {
        backgroundPositionX: "0%",
        scrollTrigger: {
          trigger: ".assemble-title",
          start: "top 80%",
          end: "top 40%",
          scrub: 1
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
      className="relative min-h-screen bg-[#FDFDFD] py-32 overflow-hidden border-t border-[#002147]/5"
    >
      <div className="px-6 md:px-10 max-w-[1920px] mx-auto">
        
        {/* SECTION HEADER - Assembles from Bottom */}
        <div className="prog-header mb-32">
          <span className="text-[10px] font-black text-[#002147]/40 uppercase tracking-[0.5em] block mb-6">
            Curriculum / 2026
          </span>
          <h2 className="assemble-title text-[12vw] lg:text-[8vw] font-[950] leading-[0.8] text-[#002147] uppercase tracking-tighter" style={fillStyle}>
            Strategic <br /> Programs.
          </h2>
        </div>

        {/* THE ASSEMBLY GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          
          {/* Program 01 - Assemble from Left */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div className="prog-text-1 max-w-md">
              <span className="text-[10px] font-black text-[#002147] border border-[#002147]/20 px-4 py-2 uppercase tracking-widest">
                Academic Excellence
              </span>
              <h3 className="text-4xl md:text-5xl font-[950] text-[#002147] uppercase tracking-tighter mt-8 mb-6">
                Advanced <br /> Leadership
              </h3>
              <p className="text-sm font-bold text-[#002147]/60 uppercase leading-relaxed tracking-tight">
                Designed for high-potential individuals aiming to master global management strategies and ethical integrity.
              </p>
            </div>
            
            <div className="prog-img-2 relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                alt="Program Environment"
              />
            </div>
          </div>

          {/* Program 02 - Assemble from Right */}
          <div className="lg:col-span-7 flex flex-col gap-12 lg:pt-32">
            <div className="prog-img-1 relative aspect-video overflow-hidden rounded-sm shadow-2xl bg-[#002147]">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                className="w-full h-full object-cover mix-blend-luminosity opacity-80 hover:opacity-100 transition-all duration-1000"
                alt="Collaborative Mastery"
              />
              <div className="absolute top-6 right-6 text-white text-[10px] font-black uppercase tracking-[0.4em]">
                Verified Course Vol. 02
              </div>
            </div>

            <div className="prog-text-2 flex flex-col items-end text-right">
              <div className="max-w-md">
                <h3 className="text-4xl md:text-5xl font-[950] text-[#002147] uppercase tracking-tighter mb-6">
                  Global <br /> Compliance
                </h3>
                <p className="text-sm font-bold text-[#002147]/60 uppercase leading-relaxed tracking-tight mb-10">
                  Navigating the complex landscape of international professional standards and industrial regulations.
                </p>
                <button className="bg-[#002147] text-white px-10 py-5 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-black transition-all">
                   Explore Syllabus
                </button>
              </div>
            </div>
          </div>

        </div>

       

      </div>
    </section>
  );
};

export default FeaturedPrograms;