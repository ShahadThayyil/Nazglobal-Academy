import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: 'About', id: '01' },
    { title: 'Programs', id: '02' },
    { title: 'Faculty', id: '03' },
    { title: 'Results', id: '04' },
    { title: 'Gallery', id: '05' },
    { title: 'FAQ', id: '06' }
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-[110] bg-white/80 backdrop-blur-md px-6 md:px-10 py-6 flex justify-between items-center border-b border-gray-100">
        {/* BRANDING */}
        <div className="font-[950] text-2xl tracking-tighter text-[#002147] uppercase">
          Nazglobal
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex gap-8 items-center">
          {navLinks.map((item) => (
            <a 
              key={item.title} 
              href={`#${item.title.toLowerCase()}`} 
              className="text-[10px] font-black uppercase tracking-widest text-[#002147]/70 hover:text-[#002147] transition-colors"
            >
              {item.title}
            </a>
          ))}
          <button className="bg-[#002147] text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest ml-4 shadow-lg shadow-blue-900/20 hover:bg-black transition-all">
            Contact Us
          </button>
        </div>

        {/* MOBILE MENU TRIGGER */}
        <button 
          className="lg:hidden text-[#002147] p-1 z-[120]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={30} strokeWidth={1.5} /> : <Menu size={30} strokeWidth={1.5} />}
        </button>
      </nav>

      {/* MOBILE OVERLAY MENU */}
      <div 
        className={`fixed inset-0 z-[105] bg-[#002147] transition-transform duration-700 cubic-bezier(0.85, 0, 0.15, 1) flex flex-col ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } lg:hidden`}
      >
        {/* PADDING ADJUSTED FOR CLEAN LOOK */}
        <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 pt-20">
          <div className="flex flex-col gap-6">
            {navLinks.map((item) => (
              <a 
                key={item.title} 
                href={`#${item.title.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="group flex items-start gap-4"
              >
                {/* Index Number for Editorial Style */}
                <span className="text-[10px] font-black text-white/40 mt-3 tracking-widest uppercase">
                  {item.id}
                </span>
                <span className="text-5xl sm:text-6xl font-[950] text-white uppercase tracking-tighter leading-none group-hover:italic transition-all">
                  {item.title}
                </span>
              </a>
            ))}
            
            <div className="mt-12 w-full max-w-xs">
               <button 
                onClick={() => setIsMenuOpen(false)}
                className="w-full bg-white text-[#002147] py-5 rounded-sm font-[950] uppercase tracking-[0.2em] text-[11px] shadow-2xl"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU FOOTER */}
        <div className="p-8 border-t border-white/10 flex justify-between items-center bg-[#001835]">
          <span className="text-white/30 text-[9px] font-black uppercase tracking-[0.3em]">
            Kerala / India
          </span>
          <span className="text-white/30 text-[9px] font-black uppercase tracking-[0.3em]">
            © 2026 NAZGLOBAL
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;