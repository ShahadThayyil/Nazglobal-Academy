import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Compass, Shield, Rocket, ArrowDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // 1. Centered Hero Text Stagger
    gsap.from(".hero-line", {
      y: 80,
      autoAlpha: 0,
      stagger: 0.2,
      duration: 1.2,
      ease: "power4.out"
    });

    // 2. Continuous Floating for Icons
    gsap.to(".floating-icon", {
      y: -15,
      repeat: -1,
      yoyo: true,
      duration: 2.5,
      ease: "sine.inOut"
    });

    // 3. Section Reveal
    gsap.utils.toArray(".reveal-section").forEach(section => {
      gsap.from(section, {
        y: 40,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
        }
      });
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-[#FDFDFD] text-[#1a1a1a]">
      
      {/* --- CENTERED HERO SECTION --- */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#800000]/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#DAA520]/5 rounded-full blur-[100px] animate-pulse delay-700" />

        <div className="relative z-10 max-w-5xl mx-auto">
         

          <h1 className="hero-line text-5xl md:text-8xl font-serif leading-[1.1] tracking-tighter mb-10">
            Crafting the Next <br /> 
            <span className="text-[#800000] italic">Standard of Excellence.</span>
          </h1>

          <p className="hero-line text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-12">
            Nazglobal Academy is a premier institutional sanctuary dedicated to bridging the divide between academic rigor and global professional mastery.
          </p>

          <div className="hero-line">
            <div className="animate-bounce">
              <ArrowDown className="w-6 h-6 text-[#DAA520] mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE STATS (Centered Grid) --- */}
      <section className="reveal-section py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Global Reach", val: "24+" },
            { label: "Expert Mentors", val: "120+" },
            { label: "Success Ratio", val: "98%" },
            { label: "Legacy Years", val: "12" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="text-4xl md:text-5xl font-serif text-[#1a1a1a]">{stat.val}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#800000]">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- NARRATIVE SECTION (Centered) --- */}
      <section className="reveal-section py-24 md:py-40 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-serif mb-10">Our Philosophy</h2>
        <p className="text-lg text-gray-600 leading-[1.8] mb-12">
          Nazglobal Academy was founded with a singular purpose: to empower individuals with the ethical grounding and technical precision required for international leadership. We believe that professional integrity is the cornerstone of every successful career trajectory.
        </p>
        <div className="flex justify-center gap-2">
           <div className="w-2 h-2 rounded-full bg-[#800000]" />
           <div className="w-2 h-2 rounded-full bg-[#DAA520]" />
           <div className="w-2 h-2 rounded-full bg-[#1a1a1a]" />
        </div>
      </section>

      {/* --- VALUES GRID (Modern Centered Cards) --- */}
      <section className="reveal-section py-24 md:py-40 bg-[#F8F9FA] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#DAA520] text-xs font-black uppercase tracking-widest mb-4 block">The Charter</span>
            <h2 className="text-4xl md:text-6xl font-serif">Foundational Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Precision", 
                desc: "Rigorous attention to every technical detail within our curriculum.", 
                icon: <Compass className="w-10 h-10" /> 
              },
              { 
                title: "Integrity", 
                desc: "Upholding absolute transparency and strong moral principles.", 
                icon: <Shield className="w-10 h-10" /> 
              },
              { 
                title: "Impact", 
                desc: "Ensuring every lesson translates into real-world professional advantage.", 
                icon: <Rocket className="w-10 h-10" /> 
              }
            ].map((v, i) => (
              <div key={i} className="group bg-white p-12 rounded-2xl text-center border border-gray-100 hover:shadow-2xl transition-all duration-500">
                <div className="floating-icon text-[#800000] flex justify-center mb-8 group-hover:text-[#DAA520] transition-colors">
                  {v.icon}
                </div>
                <h4 className="text-xl font-bold uppercase tracking-tight mb-4">{v.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CALL TO ACTION (Centered) --- */}
      <section className="reveal-section py-24 md:py-40 px-6 text-center">
        <h3 className="text-3xl md:text-5xl font-serif mb-12">Ready to define your future?</h3>
        <button className="px-12 py-5 bg-[#1a1a1a] text-white text-[11px] font-black uppercase tracking-[0.3em] group relative overflow-hidden rounded-full">
           <span className="relative z-10">Join Nazglobal Academy</span>
           <div className="absolute inset-0 bg-[#800000] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </button>
      </section>

    </div>
  );
};

export default AboutPage;