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
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/', icon: 'home' },
    { name: 'About Us', path: '/about', icon: 'info' },
    { name: 'Our Work', path: '/our-work', icon: 'volunteer_activism' },
    { name: 'Our Impact', path: '/impact', icon: 'trending_up' },
    { name: 'Get Involved', path: '/get-involved', icon: 'handshake' },
    { name: 'Join Community', path: '/join-community', icon: 'diversity_3' },
    { name: 'Contact', path: '/contact', icon: 'mail' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#e4e2de] shadow-[0_4px_20px_rgba(11,25,44,0.06)] py-2.5 sm:py-3'
            : 'bg-[#FAF8F5]/90 backdrop-blur-sm border-b border-[#e4e2de]/70 py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-[1360px] mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand Logo & Title */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 group min-w-0 shrink"
            aria-label="Hopewise Foundation Home"
          >
            <img
              src={logoImg}
              alt="Hopewise Foundation Logo"
              className="h-10 sm:h-12 lg:h-16 w-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300 shrink-0"
            />
            <div className="flex flex-col justify-center min-w-0">
              <span className="font-serif font-bold text-base sm:text-lg lg:text-[21px] text-[#0B192C] tracking-tight leading-tight group-hover:text-[#18181B] transition-colors truncate">
                Hopewise Foundation
              </span>
              <span className="text-[10px] sm:text-xs font-sans font-semibold tracking-wider uppercase text-[#8B6E32] hidden sm:block mt-0.5">
                Educate · Empower · Elevate
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Visible on lg: 1024px+) */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 shrink-0">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-[13px] xl:text-sm font-semibold tracking-wide transition-all relative py-1 ${
                    isActive
                      ? 'text-[#0B192C] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#18181B] after:rounded-full'
                      : 'text-[#4B5563] hover:text-[#0B192C] after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:h-[2px] after:bg-[#18181B] after:rounded-full hover:after:left-0 hover:after:right-0 after:transition-all after:duration-200'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Action CTAs (Desktop & Mobile) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Mobile Compact Donate Button (Hidden on sm+) */}
            <button
              type="button"
              onClick={onOpenDonate}
              className="sm:hidden w-9 h-9 rounded-full bg-[#18181B] hover:bg-black text-white flex items-center justify-center shadow-xs active:scale-95 transition-all cursor-pointer shrink-0"
              aria-label="Support Us / Donate"
              title="Support Us"
            >
              <span className="material-symbols-outlined text-[17px] text-[#E11D48]">
                favorite
              </span>
            </button>

            {/* Desktop & Tablet Full Pill Donate CTA (Visible on sm+) */}
            <button
              type="button"
              onClick={onOpenDonate}
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#18181B] hover:bg-black text-white text-[11px] sm:text-xs font-bold tracking-wider uppercase px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shrink-0"
            >
              <span className="material-symbols-outlined text-[15px] sm:text-[17px] text-[#E11D48]">
                favorite
              </span>
              <span>Support Us</span>
            </button>

            {/* Mobile Hamburger Toggle Button (Always visible on mobile & tablet < lg) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-xl bg-white border border-[#e4e2de] text-[#0B192C] flex items-center justify-center shadow-xs hover:bg-[#FAF8F5] active:scale-95 transition-all focus:outline-none cursor-pointer shrink-0"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-5 h-5 text-[#0B192C]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer & Backdrop Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
              aria-hidden="true"
            />

            {/* Slide-Down Mobile Menu Container */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed top-[68px] sm:top-[80px] left-0 right-0 max-h-[calc(100vh-68px)] sm:max-h-[calc(100vh-80px)] overflow-y-auto bg-white/98 backdrop-blur-xl border-b border-[#e4e2de] shadow-2xl z-50 lg:hidden"
            >
              <div className="max-w-[1360px] mx-auto px-5 py-5 sm:px-6 sm:py-6 flex flex-col">
                {/* Navigation Links */}
                <div className="flex flex-col space-y-1">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `text-sm font-semibold py-2.5 px-3.5 rounded-xl transition-all flex items-center justify-between ${
                          isActive
                            ? 'bg-[#FAF8F5] text-[#0B192C] font-bold border-l-4 border-[#18181B] shadow-xs'
                            : 'text-[#4B5563] hover:bg-[#fbf9f5] hover:text-[#0B192C]'
                        }`
                      }
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[20px] text-[#8B6E32]">
                          {link.icon}
                        </span>
                        <span>{link.name}</span>
                      </div>
                      <span className="material-symbols-outlined text-[18px] text-[#9CA3AF]">
                        chevron_right
                      </span>
                    </NavLink>
                  ))}
                </div>

                {/* Primary Action Buttons */}
                <div className="mt-5 pt-4 border-t border-[#e4e2de] flex flex-col gap-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenDonate();
                    }}
                    className="w-full bg-[#18181B] hover:bg-black text-white text-xs font-bold uppercase tracking-wider py-3.5 px-5 rounded-full shadow-md text-center flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-95"
                  >
                    <span className="material-symbols-outlined text-[18px] text-[#E11D48]">
                      favorite
                    </span>
                    <span>Sponsor a Child / Direct Support</span>
                  </button>

                  <Link
                    to="/join-community"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white text-xs font-bold uppercase tracking-wider py-3 px-5 rounded-full shadow-sm text-center flex items-center justify-center gap-2 transition-transform active:scale-95"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      groups
                    </span>
                    <span>Join Community & Volunteer</span>
                  </Link>
                </div>

                {/* Direct Contact & Social Footer */}
                <div className="mt-5 pt-4 border-t border-[#e4e2de]/80 flex flex-col gap-2 text-xs text-[#5C6470]">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <a
                      href="tel:+919084690469"
                      className="inline-flex items-center gap-1.5 py-1 px-2 rounded-lg bg-[#FAF8F5] text-[#0B192C] font-medium hover:bg-[#f3f0e8] transition-colors"
                    >
                      <span className="material-symbols-outlined text-[16px] text-[#386380]">
                        call
                      </span>
                      <span>+91 90846 90469</span>
                    </a>

                    <a
                      href="https://www.instagram.com/hopewisefoundation/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 py-1 px-2 rounded-lg bg-[#FAF8F5] text-[#0B192C] font-medium hover:bg-[#f3f0e8] transition-colors"
                    >
                      <span className="material-symbols-outlined text-[16px] text-[#E11D48]">
                        photo_camera
                      </span>
                      <span>@hopewisefoundation</span>
                    </a>
                  </div>

                  <a
                    href="mailto:hopewisefoundation26@gmail.com"
                    className="inline-flex items-center gap-1.5 py-1 px-2 rounded-lg bg-[#FAF8F5] text-[#0B192C] font-medium hover:bg-[#f3f0e8] transition-colors break-all"
                  >
                    <span className="material-symbols-outlined text-[16px] text-[#8B6E32]">
                      mail
                    </span>
                    <span>hopewisefoundation26@gmail.com</span>
                  </a>

                  <p className="text-[11px] text-[#8C93A0] text-center pt-2">
                    Verified NGO · Tax Exemption under Section 80G
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
