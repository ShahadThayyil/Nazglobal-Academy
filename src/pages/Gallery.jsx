import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Maximize2, LayoutGrid, ArrowUpRight } from 'lucide-react';

const CATEGORIES = ["All", "Campus", "Academic", "Events"];

const GALLERY_ITEMS = [
  { id: 1, category: "Campus", title: "Main Library", img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" },
  { id: 2, category: "Academic", title: "Strategic Lab", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" },
  { id: 3, category: "Events", title: "Convocation 2025", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" },
  { id: 4, category: "Campus", title: "Green Lounge", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" },
  { id: 5, category: "Academic", title: "Digital Synergy Hub", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop" },
  { id: 6, category: "Events", title: "Industry Symposium", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" },
];

const GalleryPage = () => {
  const [filter, setFilter] = useState("All");
  const containerRef = useRef(null);

  const filteredItems = filter === "All" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  // 1. ഫസ്റ്റ് ടൈം ലോഡ് ആകുമ്പോൾ മാത്രം ഹെഡർ ആനിമേറ്റ് ചെയ്യാൻ
  useGSAP(() => {
    gsap.from(".gallery-header-reveal", {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 1.2,
      ease: "power4.out",
    });
  }, { scope: containerRef }); // No dependencies: runs once

  // 2. ഫിൽട്ടർ മാറുമ്പോൾ മാത്രം ഗ്രിഡ് ഐറ്റംസ് ആനിമേറ്റ് ചെയ്യാൻ
  useGSAP(() => {
    gsap.fromTo(".gallery-item", 
      { scale: 0.9, opacity: 0, y: 20 },
      { 
        scale: 1, 
        opacity: 1, 
        y: 0, 
        stagger: 0.05, 
        duration: 0.6, 
        ease: "back.out(1.2)",
        clearProps: "all" 
      }
    );
  }, [filter]); // Dependency strictly on 'filter'

  return (
    <div ref={containerRef} className="bg-[#FDFDFD] pt-32 pb-40 px-6 lg:px-20 overflow-hidden">
      
      {/* --- HEADER (Animated only once) --- */}
      <header className="max-w-5xl mx-auto mb-20 md:mb-32 text-center flex flex-col items-center">
        <div className="gallery-header-reveal flex items-center gap-3 mb-6">
           <div className="w-8 h-[1px] bg-[#DAA520]" />
           <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#800000]">Gallery Archive</span>
           <div className="w-8 h-[1px] bg-[#DAA520]" />
        </div>
        
        <h1 className="gallery-header-reveal text-5xl md:text-8xl font-serif tracking-tighter text-[#1a1a1a] mb-8 leading-[0.9]">
           Campus <br /> <span className="text-[#800000] italic">Moments.</span>
        </h1>
        
        <p className="gallery-header-reveal text-gray-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mb-12">
           A visual documentation of our academic environment, milestones, and student life.
        </p>

        {/* --- FILTER BAR --- */}
        <div className="gallery-header-reveal flex flex-wrap justify-center gap-6 md:gap-12 border-b border-gray-100 pb-6 w-full max-w-2xl">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-300 relative pb-3 ${
                filter === cat ? "text-[#800000]" : "text-gray-300 hover:text-gray-500"
              }`}
            >
              {cat}
              {filter === cat && (
                <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#DAA520]" />
              )}
            </button>
          ))}
        </div>
      </header>

      {/* --- GALLERY GRID --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="gallery-item group relative aspect-[4/5] overflow-hidden bg-gray-50 rounded-sm"
          >
            {/* Image */}
            <img 
              src={item.img} 
              className="w-full h-full object-cover transition-all duration-1000 lg:grayscale lg:group-hover:grayscale-0 group-hover:scale-110" 
              alt={item.title} 
            />

            {/* Content Overlay (Stronger visibility for texts) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
               <span className="text-[10px] font-bold text-[#DAA520] uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                 {item.category}
               </span>
               <h3 className="text-2xl font-serif text-white tracking-tight drop-shadow-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                 {item.title}
               </h3>
               <div className="mt-6 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-150">
                  <Maximize2 size={18} className="text-white/70 hover:text-white transition-colors cursor-pointer" />
                  <ArrowUpRight size={18} className="text-[#DAA520]" />
               </div>
            </div>

            {/* Mobile Tag (Simple & Readable) */}
            <div className="lg:hidden absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 shadow-sm rounded-sm">
               <span className="text-[9px] font-bold uppercase text-[#800000] tracking-widest">
                 {item.category}
               </span>
            </div>
          </div>
        ))}
      </div>

      {/* --- FOOTER CTA --- */}
      <footer className="max-w-xl mx-auto mt-32 text-center flex flex-col items-center">
         <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center mb-8">
            <LayoutGrid size={16} className="text-[#DAA520]" />
         </div>
         <p className="text-gray-400 font-medium uppercase tracking-[0.3em] text-[10px] mb-4">Established MMXXIV</p>
         <h3 className="text-2xl md:text-3xl font-serif text-[#1a1a1a] mb-8">
            Experience the Excellence.
         </h3>
         <button className="px-10 py-4 bg-[#1a1a1a] text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-[#800000] transition-all rounded-full shadow-lg active:scale-95">
            View Academic Calendar
         </button>
      </footer>

    </div>
  );
};

export default GalleryPage;