import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  Clock, 
  Globe, 
  ArrowRight 
} from 'lucide-react';

const ContactPage = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Entrance Animations
    gsap.from(".contact-reveal", {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 1.2,
      ease: "power4.out",
    });

    gsap.from(".info-card", {
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      scrollTrigger: {
        trigger: ".info-grid",
        start: "top 85%",
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-[#FDFDFD] pt-32 pb-40 px-6 lg:px-20 overflow-hidden">
      
      {/* --- CENTERED HERO --- */}
      <header className="max-w-4xl mx-auto mb-20 md:mb-32 text-center flex flex-col items-center">
        <div className="contact-reveal flex items-center gap-3 mb-6">
           <div className="w-8 h-[1px] bg-[#DAA520]" />
           <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#800000]">Admissions Office</span>
           <div className="w-8 h-[1px] bg-[#DAA520]" />
        </div>
        
        <h1 className="contact-reveal text-5xl md:text-8xl font-serif tracking-tighter text-[#1a1a1a] mb-8 leading-[0.9]">
           Connect with <br /> <span className="text-[#800000] italic">The Academy.</span>
        </h1>
        
        <p className="contact-reveal text-gray-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
           Our administrative council is available to facilitate your enrollment and guide your professional trajectory.
        </p>
      </header>

      {/* --- CONTACT INFORMATION GRID --- */}
      <section className="info-grid max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        <div className="info-card bg-white p-10 border border-gray-100 rounded-2xl flex flex-col items-center text-center shadow-sm">
           <div className="w-12 h-12 bg-[#F8F9FA] rounded-full flex items-center justify-center mb-6">
              <MapPin size={20} className="text-[#800000]" />
           </div>
           <h3 className="text-xs font-black uppercase tracking-widest text-[#DAA520] mb-4">Campus Location</h3>
           <p className="text-gray-600 leading-relaxed text-sm">
              Nazglobal Tower, Main Road <br /> Malappuram, Kerala, 676505 <br /> India
           </p>
        </div>

        <div className="info-card bg-[#1a1a1a] p-10 rounded-2xl flex flex-col items-center text-center shadow-2xl text-white">
           <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6">
              <Phone size={20} className="text-[#DAA520]" />
           </div>
           <h3 className="text-xs font-black uppercase tracking-widest text-[#DAA520] mb-4">Direct Lines</h3>
           <p className="leading-relaxed text-sm mb-2">+91 9847 000 000</p>
           <p className="leading-relaxed text-sm">+91 483 273 0000</p>
        </div>

        <div className="info-card bg-white p-10 border border-gray-100 rounded-2xl flex flex-col items-center text-center shadow-sm">
           <div className="w-12 h-12 bg-[#F8F9FA] rounded-full flex items-center justify-center mb-6">
              <Mail size={20} className="text-[#800000]" />
           </div>
           <h3 className="text-xs font-black uppercase tracking-widest text-[#DAA520] mb-4">Institutional Mail</h3>
           <p className="text-gray-600 leading-relaxed text-sm">
              admissions@nazglobal.com <br /> registrar@nazglobal.com
           </p>
        </div>
      </section>

      {/* --- INQUIRY FORM SECTION --- */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
         <div className="flex flex-col">
            <h2 className="text-3xl md:text-5xl font-serif text-[#1a1a1a] mb-8 leading-tight">
               Begin your <span className="text-[#800000] italic">Dossier Submission.</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-10">
               Please provide your preliminary details. Our academic consultants will review your request and contact you within 24 institutional hours.
            </p>
            
            <div className="space-y-6">
               <div className="flex items-center gap-4 text-gray-400">
                  <Clock size={18} className="text-[#DAA520]" />
                  <span className="text-xs font-bold uppercase tracking-widest">Office: 09:00 — 17:00 IST</span>
               </div>
               <div className="flex items-center gap-4 text-gray-400">
                  <Globe size={18} className="text-[#DAA520]" />
                  <span className="text-xs font-bold uppercase tracking-widest">Global Inquiries Open MMXXVI</span>
               </div>
            </div>
         </div>

         {/* PROFESSIONAL FORM */}
         <form className="bg-white p-8 md:p-12 border border-gray-100 rounded-3xl shadow-xl flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <input 
                 type="text" 
                 placeholder="Full Legal Name" 
                 className="w-full bg-gray-50 p-4 rounded-xl text-xs font-medium focus:outline-none focus:ring-1 focus:ring-[#DAA520] transition-all"
               />
               <input 
                 type="email" 
                 placeholder="Email Address" 
                 className="w-full bg-gray-50 p-4 rounded-xl text-xs font-medium focus:outline-none focus:ring-1 focus:ring-[#DAA520] transition-all"
               />
            </div>
            <select className="w-full bg-gray-50 p-4 rounded-xl text-xs font-medium text-gray-400 focus:outline-none">
               <option>Select Program of Interest</option>
               <option>Advanced Leadership</option>
               <option>Global Compliance</option>
               <option>Digital Synergy</option>
            </select>
            <textarea 
              rows="4" 
              placeholder="Inquiry Details" 
              className="w-full bg-gray-50 p-4 rounded-xl text-xs font-medium focus:outline-none focus:ring-1 focus:ring-[#DAA520] transition-all"
            ></textarea>
            
            <button className="w-full py-5 bg-[#800000] text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-full hover:bg-[#1a1a1a] transition-all shadow-lg flex items-center justify-center gap-3">
               Submit Inquiry <ArrowRight size={14} />
            </button>
         </form>
      </section>

      {/* --- REFINED INSTITUTIONAL FOOTER --- */}
      <footer className="max-w-7xl mx-auto mt-40 pt-16 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
         <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Nazglobal Academy Institutional Heritage</span>
            <span className="text-[10px] font-bold text-[#DAA520] uppercase tracking-widest italic">MMXXIV — MMXXVI</span>
         </div>
         
         <div className="flex gap-8">
            <MessageSquare size={18} className="text-gray-200 hover:text-[#800000] cursor-pointer transition-colors" />
            <Globe size={18} className="text-gray-200 hover:text-[#800000] cursor-pointer transition-colors" />
            <div className="w-10 h-[1px] bg-gray-100 self-center" />
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Kerala / India</span>
         </div>
      </footer>

    </div>
  );
};

export default ContactPage;