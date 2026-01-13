import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Linkedin, Mail, ArrowDown, Globe } from 'lucide-react';

const MENTORS = [
  {
    name: "Dr. Adrian Thorne",
    role: "Strategic Governance",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    bio: "Focusing on high-stakes institutional leadership and global ethics."
  },
  {
    name: "Elena Moretti",
    role: "Systems Architecture",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    bio: "Pioneering resilient infrastructure models for modern economies."
  },
  {
    name: "Prof. Julian Vane",
    role: "Digital Intelligence",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    bio: "Bridging the divide between AI and human-centric pedagogy."
  },
  {
    name: "Dr. Sarah Chen",
    role: "Global Compliance",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    bio: "Expert in international regulatory frameworks and trade integrity."
  }
];

const FacultyPage = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Initial Entrance Animation
    gsap.from(".header-reveal", {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.from(".faculty-card", {
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      delay: 0.4,
      ease: "power2.out",
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-[#FDFDFD] pt-32 pb-40 px-6 lg:px-20 overflow-hidden">
      
      {/* --- CENTERED HEADER --- */}
      <header className="max-w-4xl mx-auto mb-24 md:mb-40 text-center flex flex-col items-center">
        <div className="flex items-center gap-3 mb-8 header-reveal">
           <div className="w-8 h-[1px] bg-[#DAA520]" />
           <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#800000]">The Directory</span>
           <div className="w-8 h-[1px] bg-[#DAA520]" />
        </div>
        
        <h1 className="header-reveal text-5xl md:text-8xl font-serif tracking-tighter text-[#1a1a1a] mb-10 leading-[0.9]">
           The Global <br /> <span className="text-[#800000] italic">Collective.</span>
        </h1>
        
        <p className="header-reveal text-gray-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
           A gathered circle of academic minds and industry veterans dedicated to the evolution of global professional standards.
        </p>
        
        <div className="mt-12 header-reveal animate-bounce">
           <ArrowDown size={20} className="text-[#DAA520]" />
        </div>
      </header>

      {/* --- MODERN GRID --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {MENTORS.map((mentor, i) => (
          <div 
            key={i} 
            className="faculty-card group bg-white border border-gray-100 rounded-sm overflow-hidden flex flex-col items-center text-center shadow-sm lg:shadow-none"
          >
            {/* Image Section */}
            <div className="relative w-full aspect-[3/4] overflow-hidden">
               {/* Base Image (Grayscale on desktop, color/mild-grayscale on mobile) */}
               <img 
                 src={mentor.img} 
                 className="w-full h-full object-cover lg:grayscale transition-all duration-700 lg:group-hover:scale-105 lg:group-hover:grayscale-0" 
                 alt={mentor.name} 
               />
               
               {/* Modern Clip-Path Overlay (Visible ONLY on Desktop) */}
               <div 
                 className="hidden lg:flex absolute inset-0 bg-[#800000] p-8 flex-col justify-center items-center 
                 [clip-path:inset(100%_0%_0%_0%)] group-hover:[clip-path:inset(0%_0%_0%_0%)] 
                 transition-all duration-700 ease-in-out"
               >
                  <p className="text-white/90 text-sm leading-relaxed mb-8 italic max-w-[200px] translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                    "{mentor.bio}"
                  </p>
                  <div className="flex gap-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-200">
                     <Linkedin className="text-white w-5 h-5 cursor-pointer hover:text-[#DAA520] transition-colors" />
                     <Mail className="text-white w-5 h-5 cursor-pointer hover:text-[#DAA520] transition-colors" />
                  </div>
               </div>
            </div>

            {/* Centered Info Bar */}
            <div className="p-6 md:p-8 flex flex-col items-center justify-center w-full bg-white border-t border-gray-50 relative z-10">
               <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#DAA520] mb-3">
                  {mentor.role}
               </span>
               <h3 className="text-xl md:text-2xl font-serif text-[#1a1a1a] tracking-tight group-hover:text-[#800000] transition-colors">
                  {mentor.name}
               </h3>
               
               {/* Mobile Details (Visible ONLY on Mobile) */}
               <div className="lg:hidden mt-4 flex flex-col items-center">
                  <p className="text-gray-500 text-sm italic mb-5 px-4 leading-snug">
                    "{mentor.bio}"
                  </p>
                  <div className="flex gap-6">
                    <Linkedin className="text-[#800000] w-5 h-5" />
                    <Mail className="text-[#800000] w-5 h-5" />
                  </div>
               </div>

               <div className="w-6 h-[1px] bg-gray-100 mt-6 lg:group-hover:w-12 lg:group-hover:bg-[#800000] transition-all duration-500" />
            </div>
          </div>
        ))}
      </div>

      {/* --- CENTERED CALL TO ACTION --- */}
      <footer className="max-w-4xl mx-auto mt-40 pt-24 border-t border-gray-100 flex flex-col items-center text-center gap-10">
         <div className="flex flex-col items-center gap-4">
            <Globe size={24} className="text-[#DAA520]" />
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.5em]">
               Nazglobal Academy Institutional Heritage — MMXXVI
            </span>
         </div>
         
         <div className="flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-serif text-[#1a1a1a]">Want to join our global collective?</h3>
            <button className="mx-auto px-12 py-5 bg-[#1a1a1a] text-white text-[10px] font-black uppercase tracking-[0.4em] hover:bg-[#800000] transition-all rounded-full shadow-lg active:scale-95">
               Apply for Faculty
            </button>
         </div>
      </footer>

    </div>
  );
};

export default FacultyPage;