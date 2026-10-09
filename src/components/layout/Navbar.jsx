import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import logoImg from '../../assets/logo.jpg';

export default function Navbar({ onOpenDonate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'Our Impact', path: '/impact' },
    { name: 'Get Involved', path: '/get-involved' },
    { name: 'Join Community', path: '/join-community' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#e4e2de] shadow-[0_2px_12px_rgba(15,32,60,0.06)] py-2'
          : 'bg-[#fbf9f5] border-b border-[#e4e2de]/60 py-3'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logoImg}
            alt="Hopewise Foundation Logo"
            className="h-11 w-auto object-contain rounded transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg sm:text-xl text-[#0B192C] tracking-tight leading-tight group-hover:text-[#1B4965] transition-colors">
              Hopewise Foundation
            </span>
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-widest uppercase text-[#D4AF37]">
              Educate · Empower · Elevate
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-semibold transition-all pb-1 ${
                  isActive
                    ? 'text-[#0B192C] font-bold border-b-2 border-[#D4AF37]'
                    : 'text-[#44474d] hover:text-[#0B192C] hover:border-b-2 hover:border-[#D4AF37]/40'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={onOpenDonate}
            className="inline-flex items-center justify-center bg-[#D4AF37] hover:bg-[#c5a059] text-[#0B192C] font-sans text-xs sm:text-sm font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            <span className="material-symbols-outlined text-[18px] mr-1.5 text-[#0B192C]">favorite</span>
            <span>Support Us</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-10 h-10 rounded-lg bg-white border border-[#e4e2de] text-[#0B192C] flex items-center justify-center focus:outline-none hover:bg-[#f5f3ef] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden bg-white border-b border-[#e4e2de] shadow-xl overflow-hidden"
          >
            <div className="max-w-[1320px] mx-auto px-6 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-base font-semibold py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-[#F4EBD9]/60 text-[#0B192C] font-bold border-l-4 border-[#D4AF37]'
                        : 'text-[#44474d] hover:bg-[#fbf9f5] hover:text-[#0B192C]'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <span className="material-symbols-outlined text-[18px] text-[#75777e]">chevron_right</span>
                </NavLink>
              ))}

              <div className="pt-3 border-t border-[#e4e2de] flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDonate();
                  }}
                  className="w-full text-center bg-[#D4AF37] hover:bg-[#c5a059] text-[#0B192C] font-bold py-3 rounded-lg text-sm shadow-sm transition-all"
                >
                  Direct Contribution & 80G Receipt
                </button>
                <div className="flex items-center justify-center gap-2 text-xs text-[#5C6470] pt-1">
                  <span className="material-symbols-outlined text-[16px] text-[#D4AF37]">mail</span>
                  <span>hopewisefoundation26@gmail.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
