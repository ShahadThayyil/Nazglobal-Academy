import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const InquiryFooter = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // 1. Staggered Form Fields Reveal
    gsap.from(".form-element", {
      y: 30,
      autoAlpha: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".form-container",
        start: "top 80%",
      }
    });

    // 2. Footer Logo Animation
    gsap.from(".footer-logo", {
      scale: 0.8,
      autoAlpha: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".footer-main",
        start: "top 90%",
      }
    });

  }, { scope: containerRef });

  return (
    <footer ref={containerRef} className="bg-[#FDFDFD] pt-24 border-t border-gray-100">
      
      {/* --- INQUIRY SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start form-container">
          
          {/* Left: Content */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-8 form-element">
              <div className="w-12 h-[1px] bg-[#DAA520]" />
              <span className="text-[10px] font-black text-[#800000] uppercase tracking-[0.5em]">Admissions 2026</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-[#1a1a1a] leading-none tracking-tighter mb-8 form-element">
              Begin Your <br /> <span className="text-[#800000] italic">Trajectory.</span>
            </h2>
            <p className="text-gray-500 font-medium leading-relaxed max-w-sm mb-12 form-element">
              Connect with our admissions collective to discuss your professional future and campus placement opportunities.
            </p>
            
            <div className="flex flex-col gap-6 form-element">
              <div className="group cursor-pointer">
                <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest block mb-1 group-hover:text-[#DAA520] transition-colors">General Inquiry</span>
                <span className="text-lg font-serif text-[#1a1a1a]">admissions@nazglobal.edu</span>
              </div>
              <div className="group cursor-pointer">
                <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest block mb-1 group-hover:text-[#DAA520] transition-colors">Campus Location</span>
                <span className="text-lg font-serif text-[#1a1a1a]">Malappuram, Kerala, India</span>
              </div>
            </div>
          </div>

          {/* Right: Minimal Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 shadow-[0_40px_80px_rgba(0,0,0,0.03)] border border-gray-50 rounded-sm">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="form-element flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                <input type="text" className="border-b border-gray-200 py-3 focus:border-[#800000] outline-none transition-all bg-transparent text-[#1a1a1a]" placeholder="Ex: Rahul Das" />
              </div>
              <div className="form-element flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                <input type="email" className="border-b border-gray-200 py-3 focus:border-[#800000] outline-none transition-all bg-transparent text-[#1a1a1a]" placeholder="rahul@example.com" />
              </div>
              <div className="form-element md:col-span-2 flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Program of Interest</label>
                <select className="border-b border-gray-200 py-3 focus:border-[#800000] outline-none transition-all bg-transparent text-[#1a1a1a] appearance-none cursor-pointer">
                  <option>Advanced Leadership</option>
                  <option>Global Compliance</option>
                  <option>Strategic Innovation</option>
                </select>
              </div>
              <div className="form-element md:col-span-2 flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Message</label>
                <textarea rows="3" className="border-b border-gray-200 py-3 focus:border-[#800000] outline-none transition-all bg-transparent text-[#1a1a1a] resize-none" placeholder="Your inquiry..."></textarea>
              </div>
              <div className="form-element md:col-span-2 mt-4">
                <button className="w-full md:w-fit px-12 py-5 bg-[#1a1a1a] text-white text-[10px] font-black uppercase tracking-[0.3em] group relative overflow-hidden">
                  <span className="relative z-10">Send Inquiry</span>
                  <div className="absolute inset-0 bg-[#800000] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* --- INSTITUTIONAL FOOTER --- */}
      <div className="footer-main bg-[#1a1a1a] text-white pt-24 pb-12 px-6 lg:px-20 overflow-hidden relative">
        
        {/* BIG BRANDING BACKGROUND */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02] select-none">
           <h2 className="text-[25vw] font-serif font-black uppercase leading-none tracking-tighter">NAZGLOBAL</h2>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-20">
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="footer-logo">
               <div className="w-16 h-16 bg-[#800000] flex items-center justify-center text-white font-serif font-bold text-3xl mb-6">N</div>
               <p className="text-xs text-gray-400 uppercase tracking-widest leading-loose max-w-xs">
                 Architecting the next generation of global professional excellence through rigorous academic heritage.
               </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
              <div className="flex flex-col gap-6">
                <span className="text-[10px] font-bold text-[#DAA520] uppercase tracking-widest">Navigation</span>
                <ul className="flex flex-col gap-4 text-xs font-medium text-gray-400">
                  <li className="hover:text-white transition-colors cursor-pointer">About Academy</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Curriculum</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Faculty</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Archives</li>
                </ul>
              </div>
              <div className="flex flex-col gap-6">
                <span className="text-[10px] font-bold text-[#DAA520] uppercase tracking-widest">Connect</span>
                <ul className="flex flex-col gap-4 text-xs font-medium text-gray-400">
                  <li className="hover:text-white transition-colors cursor-pointer">LinkedIn</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Instagram</li>
                  <li className="hover:text-white transition-colors cursor-pointer">YouTube</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[9px] font-bold text-gray-500 uppercase tracking-[0.4em]">
              © MMXXVI Nazglobal Academy. All Rights Reserved.
            </p>
            <p className="text-[9px] font-bold text-gray-500 uppercase tracking-[0.4em]">
              A Member of <span className="text-white">Pentalks Collective</span>
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default InquiryFooter;