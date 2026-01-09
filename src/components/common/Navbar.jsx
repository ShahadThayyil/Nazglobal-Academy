import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Navbar വിസിബിൾ ആണോ എന്ന് നോക്കാൻ
  const [lastScrollY, setLastScrollY] = useState(0); // ലാസ്റ്റ് സ്ക്രോൾ പൊസിഷൻ സ്റ്റോർ ചെയ്യാൻ

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // 1. Background മാറ്റാനുള്ള ലോജിക് (പഴയത് തന്നെ)
      setScrolled(currentScrollY > 50);

      // 2. Hide/Show ലോജിക്
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // താഴേക്ക് സ്ക്രോൾ ചെയ്യുമ്പോൾ (and after a small offset)
        setIsVisible(false);
      } else {
        // മുകളിലേക്ക് സ്ക്രോൾ ചെയ്യുമ്പോൾ
        setIsVisible(true);
      }

      // കറന്റ് പൊസിഷൻ അപ്ഡേറ്റ് ചെയ്യുന്നു
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const navLinks = [
    { title: 'About', id: '01' },
    { title: 'Courses', id: '02' },
    { title: 'Faculty', id: '03' },
    { title: 'Results', id: '04' },
    { title: 'Gallery', id: '05' },
    { title: 'FAQ', id: '06' }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-[110] transition-all duration-500 px-6 md:px-12 lg:px-20 py-6 flex justify-between items-center ${
          // വിസിബിലിറ്റി അനുസരിച്ച് ട്രാൻസ്ലേഷൻ നൽകുന്നു
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-gray-100' 
          : 'bg-transparent'
        }`}
      >
        {/* BRANDING */}
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="w-10 h-10 bg-[#800000] flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg group-hover:bg-[#DAA520] transition-all duration-500">
            N
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-serif text-xl font-bold tracking-tight text-[#1a1a1a] leading-none">
              Nazglobal
            </span>
            <span className="text-[7px] font-black uppercase tracking-[0.3em] text-[#800000] mt-1">
              Academy of Excellence
            </span>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex gap-8 items-center">
          {navLinks.map((item) => (
            <a 
              key={item.title} 
              href={`#${item.title.toLowerCase()}`} 
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a1a1a]/70 hover:text-[#800000] transition-colors relative group"
            >
              {item.title}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#DAA520] transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
          
          <button className="ml-4 px-8 py-3 bg-[#800000] text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black transition-all duration-500 shadow-xl shadow-red-900/10">
            Inquire Now
          </button>
        </div>

        {/* MOBILE TRIGGER */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="lg:hidden p-2 text-[#800000] relative z-[120]"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={28} className="text-white" /> : <Menu size={28} />}
        </button>
      </nav>

      {/* MOBILE OVERLAY */}
      <div 
        className={`fixed inset-0 z-[105] bg-[#800000] transition-all duration-700 ease-[cubic-bezier(0.85, 0, 0.15, 1)] flex flex-col ${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } lg:hidden`}
      >
        <div className="flex-1 flex flex-col justify-center px-10">
          <div className="flex flex-col gap-6">
            {navLinks.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.title.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="group flex items-center gap-6"
              >
                <span className="text-[12px] font-serif italic text-[#DAA520] opacity-40">
                  {item.id}
                </span>
                <span className="text-4xl sm:text-5xl font-serif text-white group-hover:italic group-hover:translate-x-3 transition-all duration-500">
                  {item.title}
                </span>
              </a>
            ))}
            
            <div className="mt-10 pt-10 border-t border-white/10">
               <button className="w-full py-5 bg-[#DAA520] text-[#1a1a1a] font-bold uppercase tracking-[0.2em] text-[11px] shadow-2xl hover:bg-white transition-all">
                 Apply for 2026
               </button>
            </div>
          </div>
        </div>

        <div className="p-10 bg-[#600000] flex justify-between items-center">
            <span className="text-white/40 text-[9px] font-bold uppercase tracking-[0.3em]">
              Kerala / India
            </span>
            <div className="flex gap-2">
                <div className="w-1 h-1 rounded-full bg-[#DAA520]" />
                <div className="w-1 h-1 rounded-full bg-[#DAA520] opacity-50" />
            </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;