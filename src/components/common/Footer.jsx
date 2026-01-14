import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const InquiryFooter = () => {
  const footerRef = useRef(null);
  const revealTextRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    // DESKTOP: Mountain Reveal Animation
    mm.add("(min-width: 1024px)", () => {
      gsap.fromTo(revealTextRef.current, 
        { 
          y: "100%", 
          scale: 0.8,
          opacity: 0 
        }, 
        {
          y: "0%",
          scale: 1,
          opacity: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: 1.5,
          }
        }
      );
    });

    // Simple Stagger for Links
    gsap.from(".footer-link-group", {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 80%",
      }
    });

  }, { scope: footerRef });

  return (
    <footer ref={footerRef} className="relative bg-[#0A0A0A] pt-32 pb-12 overflow-hidden">
      
      {/* 1. THE MOUNTAIN REVEAL (BRAND APEX) */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none select-none z-0 px-4">
        <h2 
          ref={revealTextRef}
          className="text-[22vw] font-black text-white/[0.03] leading-none tracking-tighter uppercase mb-[-2vw]"
        >
          nazglobal
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
        
        {/* 2. TOP NAV SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-32">
          
          <div className="footer-link-group max-w-sm">
            <div className="w-12 h-12 bg-blue-600 flex items-center justify-center text-white font-black text-2xl mb-8 rounded-xl">
              N
            </div>
            <h3 className="text-3xl font-bold text-white tracking-tight lowercase mb-6">
              architecting professional <span className="text-blue-600 italic font-serif">excellence.</span>
            </h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed uppercase tracking-widest">
              Standardizing Global Academy Credentials Since MMXXVI.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24 w-full md:w-auto">
            <div className="footer-link-group flex flex-col gap-8">
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.4em]">Directory</span>
              <ul className="flex flex-col gap-4 text-sm font-bold text-slate-400 lowercase">
                <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">the academy <ArrowUpRight size={12}/></li>
                <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">curriculum <ArrowUpRight size={12}/></li>
                <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">faculty <ArrowUpRight size={12}/></li>
                <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">archives <ArrowUpRight size={12}/></li>
              </ul>
            </div>

            <div className="footer-link-group flex flex-col gap-8">
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.4em]">Connect</span>
              <ul className="flex flex-col gap-4 text-sm font-bold text-slate-400 lowercase">
                <li className="hover:text-white transition-colors cursor-pointer">linkedin</li>
                <li className="hover:text-white transition-colors cursor-pointer">instagram</li>
                <li className="hover:text-white transition-colors cursor-pointer">research gate</li>
              </ul>
            </div>
            
            <div className="footer-link-group hidden lg:flex flex-col gap-8">
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.4em]">Location</span>
              <p className="text-slate-400 text-xs font-bold leading-relaxed uppercase tracking-widest">
                Academic Campus Hub<br/>
                Malappuram, Kerala<br/>
                India — 676505
              </p>
            </div>
          </div>
        </div>

        {/* 3. BOTTOM LEGAL BAR */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <p className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.4em]">
              Institutional Status: Fully Accredited MMXXVI
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <p className="text-[9px] font-bold text-slate-600 uppercase tracking-[0.3em]">
              © MMXXVI Nazglobal Academy.
            </p>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em]">
              A Member of <span className="text-white">Pentalks Collective</span>
            </p>
          </div>
        </div>

      </div>

      {/* SUBTLE GLOW ACCENT */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[20vw] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  );
};

export default InquiryFooter;