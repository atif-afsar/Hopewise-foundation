import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FOUNDER_INFO } from '../../data/membersData';

export default function FounderSection() {
  const [isPosterOpen, setIsPosterOpen] = useState(false);

  return (
    <>
      <section className="w-full bg-[#fbf9f5] py-20 lg:py-24 border-b border-[#e4e2de]" id="founder">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Eyebrow Header */}
          <div className="flex items-center gap-3 mb-3">
            <span className="h-0.5 w-8 bg-[#D4AF37] inline-block" />
            <span className="text-xs uppercase tracking-widest text-[#386380] font-bold">
              Visionary Leadership
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Founder Graphic Showcase */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div 
                className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group cursor-pointer"
                onClick={() => setIsPosterOpen(true)}
              >
                <div className="aspect-square w-full overflow-hidden bg-[#0B192C]">
                  <img
                    src={FOUNDER_INFO.poster}
                    alt={`${FOUNDER_INFO.name} — ${FOUNDER_INFO.title}`}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                </div>

                {/* Inspect Overlay Prompt */}
                <div className="absolute inset-0 bg-[#0B192C]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#0B192C] text-xs font-bold shadow-lg">
                    <span className="material-symbols-outlined text-[18px]">zoom_in</span>
                    <span>View Full Graphic</span>
                  </span>
                </div>

                {/* Verified Ribbon Bottom */}
                <div className="p-4 bg-gradient-to-r from-[#0B192C] to-[#18283e] text-white flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-base text-white">{FOUNDER_INFO.name}</h4>
                    <p className="text-[11px] text-[#D4AF37] font-semibold">{FOUNDER_INFO.tagline}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30">
                    <span className="material-symbols-outlined text-[13px]">verified</span>
                    <span>Founder</span>
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-[#5C6470] mt-3 italic text-center">
                Click image to inspect high-resolution founder poster
              </p>
            </div>

            {/* Right: Editorial & Mission Message */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EBD9] text-[#0B192C] text-xs font-bold uppercase tracking-wider mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  Founder &amp; Philanthropist
                </div>
                <h2 className="font-serif text-3xl sm:text-5xl text-[#0B192C] font-bold tracking-tight leading-tight">
                  {FOUNDER_INFO.name}
                </h2>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#386380] mt-1">
                  Founder — Hopewise Foundation · {FOUNDER_INFO.tagline}
                </p>
              </div>

              {/* Founder Quote Card */}
              <blockquote className="p-6 bg-white rounded-2xl border-l-4 border-[#D4AF37] shadow-sm text-[#0B192C] space-y-2">
                <span className="font-serif italic text-lg sm:text-xl text-[#0B192C] leading-relaxed block">
                  "{FOUNDER_INFO.quote}"
                </span>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold block pt-1">
                  — {FOUNDER_INFO.motto}
                </span>
              </blockquote>

              <p className="text-sm sm:text-base text-[#1E252D] leading-relaxed">
                Under the visionary guidance of <strong>Yasir Ali</strong>, Hopewise Foundation was established with a singular conviction: that no child’s dreams should be curtailed by lack of opportunity, and no family should live without health and dignity.
              </p>

              {/* Three Core Foundation Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                {FOUNDER_INFO.pillars.map((pillar) => (
                  <div key={pillar.title} className="p-4 rounded-xl bg-white border border-[#e4e2de] shadow-xs">
                    <div className="w-9 h-9 rounded-lg bg-[#F4EBD9] flex items-center justify-center text-[#0B192C] mb-2.5">
                      <span className="material-symbols-outlined text-[20px]">{pillar.icon}</span>
                    </div>
                    <h4 className="font-serif font-bold text-sm text-[#0B192C]">{pillar.title}</h4>
                    <p className="text-[11px] text-[#5C6470] mt-1 leading-snug">{pillar.desc}</p>
                  </div>
                ))}
              </div>

              {/* Action / Credentials strip */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#5C6470] border-t border-[#e4e2de]">
                <div className="flex items-center gap-1.5 font-semibold text-[#0B192C]">
                  <span className="material-symbols-outlined text-[#D4AF37] text-[18px]">verified</span>
                  <span>Govt. Reg. {FOUNDER_INFO.certNumber}</span>
                </div>
                <span className="text-[#c5c6ce] hidden sm:inline">•</span>
                <div className="flex items-center gap-1.5 font-semibold text-[#0B192C]">
                  <span className="material-symbols-outlined text-[#386380] text-[18px]">location_on</span>
                  <span>Headquarters: Aligarh, Uttar Pradesh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Resolution Modal Lightbox */}
      <AnimatePresence>
        {isPosterOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-2xl w-full max-h-[92vh] flex flex-col items-center bg-[#0B192C] rounded-2xl overflow-hidden shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full p-4 flex items-center justify-between text-white border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#D4AF37]">military_tech</span>
                  <span className="font-serif font-bold text-sm">{FOUNDER_INFO.name} — Founder Graphic</span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsPosterOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>

              <div className="p-3 w-full flex items-center justify-center overflow-auto max-h-[80vh]">
                <img
                  src={FOUNDER_INFO.poster}
                  alt={`${FOUNDER_INFO.name} — Official Founder Graphic`}
                  className="max-h-[75vh] w-auto object-contain rounded-xl shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
