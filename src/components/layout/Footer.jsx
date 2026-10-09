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
              Committed to breaking cycles of intergenerational disadvantage through sustainable education, healthcare access, and self-reliance initiatives across India's most underserved regions.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-[#0F203C] hover:bg-[#D4AF37] hover:text-[#0B192C] text-[#D4AF37] flex items-center justify-center transition-colors border border-white/10"
              >
                <span className="material-symbols-outlined text-[20px]">photo_camera</span>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-[#0F203C] hover:bg-[#D4AF37] hover:text-[#0B192C] text-[#D4AF37] flex items-center justify-center transition-colors border border-white/10"
              >
                <span className="material-symbols-outlined text-[20px]">share</span>
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
                <Link to="/join-community" className="hover:text-[#D4AF37] transition-colors">
                  Join Community
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
                  Education & Literacy
                </Link>
              </li>
              <li>
                <Link to="/our-work" className="hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                  Preventative Healthcare
                </Link>
              </li>
              <li>
                <Link to="/our-work" className="hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                  Food & Essential Support
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
                  Community Resilience
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Tax Exemption */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-semibold text-base text-white tracking-wide">
              Get in Touch
            </h4>
            <div className="space-y-2.5 text-xs text-[#c5c6ce]">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-[#D4AF37] shrink-0 mt-0.5">mail</span>
                <a href="mailto:hopewisefoundation26@gmail.com" className="hover:text-white transition-colors">
                  hopewisefoundation26@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-[#D4AF37] shrink-0 mt-0.5">location_on</span>
                <span>Institutional Area, New Delhi, India</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-[#D4AF37] shrink-0 mt-0.5">verified_user</span>
                <span>Registered Section 8 Non-Profit Organisation</span>
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
