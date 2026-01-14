import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Linkedin, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FACULTY = [
  {
    name: "Dr. Adrian Thorne",
    role: "Director of Global Strategy",
    bio: "Former lead consultant at UN-International with 20+ years in institutional compliance.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Elena Moretti",
    role: "Architectural Lead",
    bio: "Pioneering sustainable design systems for modern, high-performance institutional spaces.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
  },
  {
    name: "Prof. Julian Vane",
    role: "Head of Digital Synergy",
    bio: "Expert in AI-integrated educational environments and strategic technical mastery.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  }
];

const FacultySection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // 1. Header Entrance - Aligned to your LeadStats scale
    gsap.from(".faculty-header-block > *", {
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".faculty-header-block",
        start: "top 90%",
      }
    });

    // 2. Card Staggered Reveal
    gsap.from(".faculty-item", {
      y: 60,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".faculty-grid-container",
        start: "top 85%",
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-white py-24 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        
        {/* SECTION HEADER */}
        <div className="faculty-header-block flex flex-col items-center text-center mb-24 md:mb-32">
          <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
            Academic Leadership
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight lowercase">
            the faculty <span className="text-blue-600 italic font-serif">collective.</span>
          </h2>
          <p className="mt-6 text-slate-500 max-w-xl text-lg font-medium leading-relaxed">
            Distinguished scholars and industry pioneers dedicated to global mentorship and institutional excellence.
          </p>
        </div>

        {/* FACULTY GRID */}
        <div className="faculty-grid-container grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20">
          {FACULTY.map((member, i) => (
            <div 
              key={i} 
              className="faculty-item group flex flex-col items-center text-center"
            >
              {/* IMAGE PORTAL */}
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-slate-50 border border-slate-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-700 group-hover:shadow-blue-100/50 group-hover:shadow-2xl">
                <img 
                  src={member.image} 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  alt={member.name} 
                />
                
                {/* SOCIAL OVERLAY: Always visible on Mobile, Reveal on Hover for Desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6 md:pb-8">
                    <div className="flex gap-4">
                        <a 
                          href="#" 
                          className="p-3.5 bg-white rounded-full text-blue-600 shadow-xl cursor-pointer hover:bg-blue-600 hover:text-white transition-all transform active:scale-90"
                          aria-label="LinkedIn"
                        >
                            <Linkedin size={18} />
                        </a>
                        <a 
                          href="#" 
                          className="p-3.5 bg-white rounded-full text-blue-600 shadow-xl cursor-pointer hover:bg-blue-600 hover:text-white transition-all transform active:scale-90"
                          aria-label="Email"
                        >
                            <Mail size={18} />
                        </a>
                    </div>
                </div>
              </div>

              {/* TEXT CONTENT - ALIGNED SIZES */}
              <div className="mt-10 flex flex-col items-center">
                <span className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-3">
                  {member.role}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                  {member.name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium max-w-[280px]">
                  {member.bio}
                </p>
                
                {/* Visual Anchor Line */}
                <div className="w-8 h-[1px] bg-slate-200 mt-8 group-hover:w-16 group-hover:bg-blue-600 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

      
      </div>

      {/* BACKGROUND DECORATIVE ELEMENTS */}
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-blue-50 rounded-full blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-80 h-80 bg-slate-50 rounded-full blur-[120px] opacity-40 pointer-events-none" />
    </section>
  );
};

export default FacultySection;