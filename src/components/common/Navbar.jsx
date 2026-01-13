import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      // Background change on scroll
      setScrolled(currentScrollY > 50);

      // Hide/Show logic on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  // മൊബൈൽ മെനു ഓപ്പൺ ആയിരിക്കുമ്പോൾ സ്ക്രോളിംഗ് ബ്ലോക്ക് ചെയ്യാൻ
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { title: 'About', id: '01', path: '/about' },
    { title: 'Courses', id: '02', path: '/courses' },
    { title: 'Faculty', id: '03', path: '/faculty' },
    { title: 'Results', id: '04', path: '/results' },
    { title: 'Gallery', id: '05', path: '/gallery' },
    { title: 'FAQ', id: '06', path: '/faq' }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-[1000] transition-all duration-500 px-6 md:px-12 lg:px-20 flex justify-between items-center ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-gray-100' 
          : 'bg-transparent py-6'
        }`}
      >
        {/* BRANDING */}
        <Link to="/" className="flex items-center gap-4 group cursor-pointer">
          <div className="w-10 h-10 bg-[#800000] flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg group-hover:bg-[#DAA520] transition-all duration-500">
            N
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-tight text-[#1a1a1a] leading-none">
              Nazglobal
            </span>
            <span className="text-[7px] font-black uppercase tracking-[0.3em] text-[#800000] mt-1">
              Academy of Excellence
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex gap-8 items-center">
          {navLinks.map((item) => (
            <Link 
              key={item.title} 
              to={item.path} 
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a1a1a]/70 hover:text-[#800000] transition-colors relative group"
            >
              {item.title}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#DAA520] transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
          
          <Link 
          to={'/contact'}
           className="ml-4 px-8 py-3 bg-[#800000] text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black transition-all duration-500 shadow-xl">
            Inquire Now
          </Link>
        </div>

        {/* MOBILE TRIGGER */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="lg:hidden p-2 text-[#800000] relative z-[2000]"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={28} className="text-white" /> : <Menu size={28} />}
        </button>
      </nav>

      {/* MOBILE OVERLAY */}
      <div 
        className={`fixed inset-0 z-[1500] bg-[#800000] transition-transform duration-700 ease-[cubic-bezier(0.85, 0, 0.15, 1)] flex flex-col ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
      >
        <div className="flex-1 flex flex-col justify-center px-10">
          <div className="flex flex-col gap-8">
            {navLinks.map((item) => (
              <Link 
                key={item.id} 
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="group flex items-center gap-6"
              >
                <span className="text-[14px] font-serif italic text-[#DAA520] opacity-60">
                  {item.id}
                </span>
                <span className="text-4xl sm:text-5xl font-serif text-white group-hover:italic group-hover:translate-x-4 transition-all duration-500">
                  {item.title}
                </span>
              </Link>
            ))}
            
            <div className="mt-10 pt-10 border-t border-white/10">
               <Link 
               to={'/contact'}
               className="w-full py-5 bg-[#DAA520] text-[#1a1a1a] font-bold uppercase tracking-[0.2em] text-[11px] shadow-2xl active:scale-95 transition-all">
                 Contact
               </Link>
            </div>
          </div>
        </div>

        {/* MOBILE MENU FOOTER */}
        <div className="p-8 bg-[#600000] flex justify-between items-center">
            <span className="text-white/40 text-[9px] font-bold uppercase tracking-[0.3em]">
              Kerala / India
            </span>
            <div className="flex gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#DAA520]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#DAA520] opacity-50" />
            </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;