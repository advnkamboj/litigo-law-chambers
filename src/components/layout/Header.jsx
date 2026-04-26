import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function Header() {
  const { isDark, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header id="navbar" className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      <div className="bg-white/95 dark:bg-[#0a0d12]/92 backdrop-blur-md border-b border-stone-200 dark:border-stone-800/60 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-8 h-8 border border-gold-400 rotate-45 flex items-center justify-center group-hover:rotate-0 transition-transform duration-500">
              <div className="w-3 h-3 bg-gold-400 rotate-45"></div>
            </div>
            <div>
              <div className="font-display text-lg font-semibold tracking-wide leading-tight text-gold">Litigo</div>
              <div className="text-[9px] uppercase tracking-[0.2em] dark:text-stone-400 text-stone-500 -mt-0.5">Law Chambers</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#about" className="nav-link relative text-[0.78rem] tracking-[0.12em] uppercase after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:bg-gold after:transition-[width] after:duration-300 hover:after:w-full dark:text-stone-300 text-stone-600 hover:text-gold-400 dark:hover:text-gold-400 transition-colors">About</a>
            <a href="#services" className="nav-link relative text-[0.78rem] tracking-[0.12em] uppercase after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:bg-gold after:transition-[width] after:duration-300 hover:after:w-full dark:text-stone-300 text-stone-600 hover:text-gold-400 dark:hover:text-gold-400 transition-colors">Services</a>
            <a href="#courts" className="nav-link relative text-[0.78rem] tracking-[0.12em] uppercase after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:bg-gold after:transition-[width] after:duration-300 hover:after:w-full dark:text-stone-300 text-stone-600 hover:text-gold-400 dark:hover:text-gold-400 transition-colors">Courts</a>
            {/* <a href="#team" className="nav-link relative text-[0.78rem] tracking-[0.12em] uppercase after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:bg-gold after:transition-[width] after:duration-300 hover:after:w-full dark:text-stone-300 text-stone-600 hover:text-gold-400 dark:hover:text-gold-400 transition-colors">Team</a> */}
            <a href="#values" className="nav-link relative text-[0.78rem] tracking-[0.12em] uppercase after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:bg-gold after:transition-[width] after:duration-300 hover:after:w-full dark:text-stone-300 text-stone-600 hover:text-gold-400 dark:hover:text-gold-400 transition-colors">Values</a>
            <a href="#contact" className="nav-link relative text-[0.78rem] tracking-[0.12em] uppercase after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:bg-gold after:transition-[width] after:duration-300 hover:after:w-full dark:text-stone-300 text-stone-600 hover:text-gold-400 dark:hover:text-gold-400 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button id="themeToggle" onClick={toggleTheme} className="w-9 h-9 rounded-full border border-stone-300 dark:border-stone-700 flex items-center justify-center hover:border-gold-400 transition-colors" aria-label="Toggle theme">
              <svg id="sunIcon" className={`${isDark ? 'hidden ' : ''}w-4 h-4 text-gold-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" /><path strokeLinecap="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
              <svg id="moonIcon" className={`${!isDark ? 'hidden ' : ''}w-4 h-4 dark:text-stone-300 text-stone-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
            </button>

            {/* CTA */}
            <a href="#contact" className="hidden lg:inline-flex items-center gap-2 px-5 py-2 border border-gold text-gold text-xs uppercase tracking-widest transition-all duration-300 hover:bg-gold-400 hover:text-stone-950 hover:border-gold-400">
              Consult Now
            </a>

            {/* Hamburger */}
            <button id="hamburger" onClick={toggleMenu} className="lg:hidden w-8 flex flex-col gap-1.5 items-end" aria-label="Menu">
              <span className="block h-px w-6 bg-current transition-all duration-300"></span>
              <span className="block h-px w-4 bg-current transition-all duration-300"></span>
              <span className="block h-px w-6 bg-current transition-all duration-300"></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="lg:hidden overflow-hidden" style={{ maxHeight: menuOpen ? "500px" : "0", opacity: menuOpen ? 1 : 0 }}>
          <div className="py-4 space-y-1 border-t border-stone-200 dark:border-stone-800">
            <a href="#about" onClick={closeMenu} className="mobile-nav-link block py-2.5 px-2 text-sm uppercase tracking-widest dark:text-stone-400 text-stone-600">About</a>
            <a href="#services" onClick={closeMenu} className="mobile-nav-link block py-2.5 px-2 text-sm uppercase tracking-widest dark:text-stone-400 text-stone-600">Services</a>
            <a href="#courts" onClick={closeMenu} className="mobile-nav-link block py-2.5 px-2 text-sm uppercase tracking-widest dark:text-stone-400 text-stone-600">Courts</a>
            <a href="#team" onClick={closeMenu} className="mobile-nav-link block py-2.5 px-2 text-sm uppercase tracking-widest dark:text-stone-400 text-stone-600">Team</a>
            <a href="#values" onClick={closeMenu} className="mobile-nav-link block py-2.5 px-2 text-sm uppercase tracking-widest dark:text-stone-400 text-stone-600">Values</a>
            <a href="#contact" onClick={closeMenu} className="mobile-nav-link block py-2.5 px-2 text-sm uppercase tracking-widest dark:text-stone-400 text-stone-600">Contact</a>
          </div>
        </div>
      </div>
    </header>
  );
}
