import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const linksRef = useRef([]);

  // GSAP Entrance Animation
  useEffect(() => {
    gsap.fromTo(navRef.current, 
      { y: -100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
    );
  }, []);

  // Mobile Menu Stagger Animation
  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, { x: 0, duration: 0.8, ease: "expo.out" });
      gsap.fromTo(linksRef.current, 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out", delay: 0.3 }
      );
      document.body.style.overflow = 'hidden';
    } else {
      gsap.to(menuRef.current, { x: '100%', duration: 0.6, ease: "expo.in" });
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const navLinks = [
    { title: 'Admissions', path: '/admissions' },
    { title: 'Academic Programs', path: '/courses' },
    { title: 'Research', path: '/research' },
    { title: 'Campus Life', path: '/campus' },
    { title: 'About Nazglobal', path: '/about' },
  ];

  return (
    <>
      <nav 
        ref={navRef}
        className={`fixed top-0 w-full z-[1000] transition-all duration-500 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          scrolled 
          ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50 py-3' 
          : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* BRANDING - Modern Centered Approach */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white overflow-hidden shadow-blue-200 shadow-lg">
              <span className="font-bold text-lg relative z-10">N</span>
              <div className="absolute inset-0 bg-blue-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tight leading-none transition-colors duration-300 ${scrolled ? 'text-slate-900' : 'text-slate-800'}`}>
                Nazglobal
              </span>
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-blue-600 mt-1">
                Academy of Excellence
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV - Perfectly Centered Links */}
          <div className="hidden lg:flex gap-10 items-center">
            {navLinks.map((item) => (
              <Link 
                key={item.title} 
                to={item.path} 
                className="text-[12px] font-semibold uppercase tracking-wider text-slate-600 hover:text-blue-600 transition-colors relative group"
              >
                {item.title}
                <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </Link>
            ))}
          </div>

          {/* CTA BUTTON */}
          <div className="hidden lg:block">
            <Link 
              to='/contact'
              className="group flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white text-[12px] font-bold uppercase tracking-wider rounded-full hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-slate-200"
            >
              Apply Now
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* MOBILE TRIGGER */}
          <button 
            onClick={() => setIsMenuOpen(true)} 
            className="lg:hidden p-2 text-slate-900"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY - GSAP Animated */}
      <div 
        ref={menuRef}
        className="fixed inset-0 z-[1500] bg-white translate-x-full lg:hidden flex flex-col"
      >
        <div className="p-8 flex justify-between items-center border-b border-slate-100">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Menu</span>
          <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-slate-100 rounded-full">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-center px-10 gap-8">
          {navLinks.map((item, index) => (
            <Link 
              key={item.title} 
              ref={el => linksRef.current[index] = el}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="group"
            >
              <span className="block text-4xl font-bold text-slate-900 group-hover:text-blue-600 group-hover:pl-4 transition-all duration-300">
                {item.title}
              </span>
            </Link>
          ))}
          
          <div ref={el => linksRef.current[navLinks.length] = el} className="mt-8">
             <Link 
                to='/contact'
                className="inline-block w-full text-center py-5 bg-blue-600 text-white font-bold uppercase tracking-widest text-sm rounded-xl shadow-xl shadow-blue-100"
             >
               Start Your Application
             </Link>
          </div>
        </div>

        <div className="p-10 bg-slate-50 flex justify-between items-center">
            <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
              Global Standards • Local Impact
            </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;