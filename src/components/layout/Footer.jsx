import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.jpg';

export default function Footer({ onOpenDonate }) {
  return (
    <footer className="w-full bg-[#0B192C] text-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="Hopewise Foundation Logo"
                className="h-10 w-auto object-contain rounded bg-white p-0.5"
              />
              <span className="font-serif font-bold text-xl text-white tracking-tight">
                Hopewise Foundation
              </span>
            </Link>
            <p className="font-sans text-xs text-[#D4AF37] tracking-widest uppercase font-semibold">
              Educate · Empower · Elevate
            </p>
            <p className="font-sans text-xs text-[#c5c6ce] leading-relaxed max-w-sm">
              At Hopewise, we believe change begins with care and action. Together, we empower communities and build brighter, stronger futures for all.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/hopewisefoundation/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram (@hopewisefoundation)"
                className="w-9 h-9 rounded-lg bg-[#0F203C] hover:bg-[#D4AF37] hover:text-[#0B192C] text-[#D4AF37] flex items-center justify-center transition-colors border border-white/10"
                title="Follow @hopewisefoundation on Instagram"
              >
                <span className="material-symbols-outlined text-[20px]">photo_camera</span>
              </a>
              <a
                href="https://wa.me/919084690469"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-[#0F203C] hover:bg-[#25D366] hover:text-white text-[#25D366] flex items-center justify-center transition-colors border border-white/10"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
              </a>
              <a
                href="mailto:hopewisefoundation26@gmail.com"
                aria-label="Email Us"
                className="w-9 h-9 rounded-lg bg-[#0F203C] hover:bg-[#D4AF37] hover:text-[#0B192C] text-[#D4AF37] flex items-center justify-center transition-colors border border-white/10"
              >
                <span className="material-symbols-outlined text-[20px]">mail</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-semibold text-base text-white tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#c5c6ce]">
              <li>
                <Link to="/" className="hover:text-[#D4AF37] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#D4AF37] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about#team" className="hover:text-[#D4AF37] transition-colors">
                  Our Team &amp; Members
                </Link>
              </li>
              <li>
                <Link to="/our-work" className="hover:text-[#D4AF37] transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/impact" className="hover:text-[#D4AF37] transition-colors">
                  Impact Reports
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="hover:text-[#D4AF37] transition-colors">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D4AF37] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Focus Areas */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-semibold text-base text-white tracking-wide">
              Focus Pillars
            </h4>
            <ul className="space-y-2 text-xs text-[#c5c6ce]">
              <li>
                <Link to="/our-work" className="hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                  Education &amp; Literacy
                </Link>
              </li>
              <li>
                <Link to="/our-work" className="hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                  Healthcare &amp; Medicine
                </Link>
              </li>
              <li>
                <Link to="/our-work" className="hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                  Food &amp; Relief Support
                </Link>
              </li>
              <li>
                <Link to="/our-work" className="hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                  Women Empowerment
                </Link>
              </li>
              <li>
                <Link to="/our-work" className="hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                  Child Welfare
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-semibold text-base text-white tracking-wide">
              Contact &amp; Secretariat
            </h4>
            <div className="space-y-2.5 text-xs text-[#c5c6ce]">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-[#D4AF37] shrink-0 mt-0.5">location_on</span>
                <span className="leading-snug text-white/90">
                  Grand Bazaar, Lal Diggi Road, Aligarh 202001, Uttar Pradesh
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-[#D4AF37] shrink-0 mt-0.5">call</span>
                <a href="tel:+919084690469" className="hover:text-white transition-colors">
                  +91 90846 90469
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-[#D4AF37] shrink-0 mt-0.5">mail</span>
                <a href="mailto:hopewisefoundation26@gmail.com" className="hover:text-white transition-colors">
                  hopewisefoundation26@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-[#D4AF37] shrink-0 mt-0.5">photo_camera</span>
                <a
                  href="https://www.instagram.com/hopewisefoundation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4AF37] hover:underline font-semibold"
                >
                  @hopewisefoundation
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-[#22c55e] shrink-0 mt-0.5">verified</span>
                <span>Govt. Reg. IN-UP53986355713268Y</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                type="button"
                onClick={onOpenDonate}
                className="w-full bg-[#D4AF37] hover:bg-[#c5a059] text-[#0B192C] font-semibold text-xs py-2.5 px-4 rounded-lg shadow transition-colors flex items-center justify-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[16px]">volunteer_activism</span>
                <span>Support Foundation Projects</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#75777e]">
          <p>© 2025–2026 Hopewise Foundation. All rights reserved. Registered Indian Non-Profit.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-[#D4AF37] transition-colors">
              About Foundation
            </Link>
            <Link to="/contact" className="hover:text-[#D4AF37] transition-colors">
              Contact Desk
            </Link>
            <button
              type="button"
              onClick={onOpenDonate}
              className="hover:text-[#D4AF37] transition-colors text-left"
            >
              80G Details
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
