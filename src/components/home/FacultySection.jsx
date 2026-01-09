import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const FACULTY = [
  {
    name: "Dr. Adrian Thorne",
    role: "Director of Global Strategy",
    bio: "Former lead consultant at UN-International with 20+ years in compliance.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Elena Moretti",
    role: "Architectural Lead",
    bio: "Pioneering sustainable design systems for modern institutional spaces.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
  },
  {
    name: "Prof. Julian Vane",
    role: "Head of Digital Synergy",
    bio: "Expert in AI-integrated educational environments and technical mastery.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  }
];

const FacultySection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // 1. Heading Entrance
    gsap.from(".faculty-header", {
      y: 50,
      autoAlpha: 0,
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".faculty-header",
        start: "top 85%",
      }
    });

    // 2. Card Staggered Reveal
    gsap.from(".faculty-card", {
      y: 100,
      autoAlpha: 0,
      stagger: 0.2,
      duration: 1.2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".faculty-grid",
        start: "top 80%",
      }
    });

    // 3. Magnetic Image Effect (Desktop Only)
    const cards = gsap.utils.toArray(".faculty-card");
    cards.forEach(card => {
      const img = card.querySelector("img");
      
      card.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (clientX - left - width / 2) * 0.15;
        const y = (clientY - top - height / 2) * 0.15;
        
        gsap.to(img, {
          x: x,
          y: y,
          scale: 1.1,
          duration: 0.6,
          ease: "power2.out"
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(img, {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out"
        });
      });
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[#FDFDFD] py-24 md:py-40 px-6 lg:px-20 overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER AREA */}
        <div className="faculty-header flex flex-col md:flex-row justify-between items-start mb-24 gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[#DAA520]" />
              <span className="text-[10px] font-black text-[#800000] uppercase tracking-[0.5em]">Global Mentors</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-serif leading-[0.85] tracking-tighter text-[#1a1a1a]">
              The Faculty <br /> <span className="italic text-[#800000]">Collective.</span>
            </h2>
          </div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-loose max-w-[200px] md:text-right">
            World-class mentors from leading global institutions.
          </p>
        </div>

        {/* FACULTY GRID */}
        <div className="faculty-grid grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {FACULTY.map((member, i) => (
            <div 
              key={i} 
              className="faculty-card group relative flex flex-col bg-white border border-gray-50 rounded-sm overflow-hidden"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                />
                <div className="absolute inset-0 border-[10px] border-white/10 group-hover:border-white/0 transition-all" />
              </div>

              {/* CONTENT AREA */}
              <div className="p-8 flex flex-col gap-4">
                <div>
                   <span className="text-[9px] font-black text-[#DAA520] uppercase tracking-widest block mb-2">{member.role}</span>
                   <h3 className="text-3xl font-serif text-[#1a1a1a] tracking-tight">{member.name}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  {member.bio}
                </p>
                <div className="w-full h-[1px] bg-gray-100 mt-4 relative overflow-hidden">
                   <div className="absolute inset-0 bg-[#800000] -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER CALL TO ACTION */}
        <div className="mt-24 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center mb-6">
             <div className="w-2 h-2 rounded-full bg-[#DAA520] animate-ping" />
          </div>
          <button className="group relative text-[10px] font-black uppercase tracking-[0.4em] text-[#800000]">
             Join the Global Faculty Network
             <div className="w-0 h-[2px] bg-[#DAA520] absolute -bottom-2 left-0 group-hover:w-full transition-all duration-500" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default FacultySection;