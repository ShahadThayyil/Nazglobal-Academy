import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { BookOpen, Globe, Award, ShieldCheck, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const COURSES = [
  {
    id: "01",
    title: "Advanced Leadership",
    category: "Strategic Management",
    desc: "A clinical approach to global leadership, focusing on high-stakes decision making and organizational psychology.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
    features: ["Global Strategy", "Ethics", "Crisis Mgmt"]
  },
  {
    id: "02",
    title: "Global Compliance",
    category: "Professional Standards",
    desc: "Navigating the complex landscape of international regulations and ethical professional frameworks.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    features: ["ISO Standards", "Legal Frameworks", "Audit"]
  },
  {
    id: "03",
    title: "Technological Synergy",
    category: "Digital Transformation",
    desc: "Mastering the integration of AI and next-gen digital infrastructure into institutional workflows.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
    features: ["AI Ethics", "Systems Design", "Big Data"]
  }
];

const CoursesPage = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    // DESKTOP: HIGH-END PARALLAX
    mm.add("(min-width: 1024px)", () => {
      // 1. Kinetic Background Text (Scrolls at different speed)
      gsap.to(".bg-parallax-text", {
        xPercent: -30,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });

      // 2. Image Shift Parallax (Image moves inside its container)
      gsap.utils.toArray(".course-img").forEach((img) => {
        gsap.to(img, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            scrub: true,
          }
        });
      });

      // 3. Staggered Content Reveal
      gsap.utils.toArray(".course-card").forEach((card) => {
        gsap.from(card.querySelector(".content-reveal"), {
          y: 100,
          autoAlpha: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          }
        });
      });
    });

    // MOBILE: SIMPLE FADE-UP
    mm.add("(max-width: 1023px)", () => {
      gsap.utils.toArray(".course-card").forEach((card) => {
        gsap.from(card, {
          y: 40,
          opacity: 0,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          }
        });
      });
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-[#FDFDFD] text-[#1a1a1a] pt-32 md:pt-48 overflow-hidden">
      
      {/* --- KINETIC BACKGROUND --- */}
      <div className="absolute top-1/4 left-0 pointer-events-none opacity-[0.03] select-none z-0 whitespace-nowrap">
        <h2 className="bg-parallax-text text-[35vw] font-serif font-black uppercase italic">
          Curriculum MMXXVI
        </h2>
      </div>

      {/* --- CENTERED HERO --- */}
      <section className="relative z-10 px-6 max-w-5xl mx-auto text-center mb-32 md:mb-56">
       
        <h1 className="text-5xl md:text-8xl font-serif leading-none tracking-tighter mb-10">
          Strategic <br /> <span className="text-[#800000] italic">Curriculum.</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          A rigorous selection of programs architected to transform high-potential individuals into global industry leaders.
        </p>
      </section>

      {/* --- COURSE LISTING (PARALLAX CARDS) --- */}
      <section className="relative z-10 px-6 lg:px-20 max-w-7xl mx-auto flex flex-col gap-24 md:gap-48 pb-40">
        {COURSES.map((course, i) => (
          <div 
            key={i} 
            className="course-card grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center"
          >
            {/* Image Side (Staggered Layout) */}
            <div className={`lg:col-span-7 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <div className="relative aspect-video md:aspect-[16/10] overflow-hidden rounded-sm bg-gray-100 shadow-2xl">
                <img 
                  src={course.image} 
                  className="course-img w-full h-[120%] absolute top-[-10%] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  alt={course.title} 
                />
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="bg-[#800000] text-white text-[9px] font-bold px-4 py-2 uppercase tracking-widest">
                    Course {course.id}
                  </span>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className={`lg:col-span-5 content-reveal flex flex-col gap-8 ${i % 2 !== 0 ? 'lg:order-1 lg:text-right lg:items-end' : ''}`}>
              <div className="flex flex-col gap-2">
                <span className="text-[#DAA520] text-xs font-black uppercase tracking-widest">{course.category}</span>
                <h3 className="text-4xl md:text-6xl font-serif text-[#1a1a1a] tracking-tight">{course.title}</h3>
              </div>
              
              <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                {course.desc}
              </p>

              <div className={`flex flex-wrap gap-4 ${i % 2 !== 0 ? 'justify-end' : ''}`}>
                {course.features.map((f, index) => (
                  <div key={index} className="flex items-center gap-2 border border-gray-100 px-4 py-2 rounded-full bg-white shadow-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#DAA520]" />
                    <span className="text-[10px] font-bold uppercase tracking-tighter text-gray-400">{f}</span>
                  </div>
                ))}
              </div>

              <button className="group mt-4 flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-[#800000]">
                 <span className="border-b-2 border-[#DAA520] pb-1 transition-all group-hover:pr-10">Download Syllabus</span>
                 <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="bg-[#1a1a1a] py-24 md:py-40 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <Globe className="w-12 h-12 text-[#DAA520] mx-auto mb-10 animate-pulse" />
          <h2 className="text-white text-4xl md:text-6xl font-serif mb-12 leading-tight">
            The Class of <span className="text-[#DAA520] italic">MMXXVI</span> is now forming.
          </h2>
          <button className="px-16 py-6 bg-white text-[#1a1a1a] text-[11px] font-black uppercase tracking-[0.4em] hover:bg-[#800000] hover:text-white transition-all duration-500 rounded-sm">
            Begin Application
          </button>
        </div>
      </section>

    </div>
  );
};

export default CoursesPage;