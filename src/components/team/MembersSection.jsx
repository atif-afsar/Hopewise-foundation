import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CORE_MEMBERS,
  ALL_CERTIFICATES,
  DEPARTMENTS,
  OFFICIAL_CERT_NUMBER
} from '../../data/membersData';

export default function MembersSection() {
  const [activeTab, setActiveTab] = useState('team'); // 'team' | 'certificates'
  const [selectedDept, setSelectedDept] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModalItem, setSelectedModalItem] = useState(null); // certificate or member

  // Filter core members
  const filteredMembers = CORE_MEMBERS.filter((m) => {
    const matchesDept = selectedDept === 'All' || m.department === selectedDept;
    const matchesSearch =
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.department.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  // Filter all certificates
  const filteredCertificates = ALL_CERTIFICATES.filter((c) => {
    const matchesDept = selectedDept === 'All' || c.department === selectedDept;
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.department.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  // Handle URL hash smooth scroll if navigating to #team
  useEffect(() => {
    if (window.location.hash === '#team') {
      const el = document.getElementById('team');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, []);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedModalItem) return;
      if (e.key === 'Escape') {
        setSelectedModalItem(null);
      } else if (e.key === 'ArrowRight') {
        navigateModal(1);
      } else if (e.key === 'ArrowLeft') {
        navigateModal(-1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedModalItem, activeTab, selectedDept, searchQuery]);

  const navigateModal = (direction) => {
    if (!selectedModalItem) return;
    const list = activeTab === 'team' ? filteredMembers : filteredCertificates;
    const currentIndex = list.findIndex(
      (item) => item.id === selectedModalItem.id
    );
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + direction + list.length) % list.length;
    setSelectedModalItem(list[nextIndex]);
  };

  const getPosterForModal = (item) => {
    if (!item) return null;
    return item.certPoster || item.image;
  };

  return (
    <section id="team" className="w-full bg-[#fbf9f5] py-20 lg:py-28 border-b border-[#e4e2de]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eae8e4] text-[#0B192C] mb-4 text-xs font-semibold uppercase tracking-widest border border-[#e4e2de]">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
            Official NGO Personnel & Volunteers
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0B192C] font-bold tracking-tight leading-tight mb-4">
            Our Dedicated Team &amp; <span className="italic text-[#386380]">Foundation Members</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#5C6470] leading-relaxed">
            The passionate advocates, grassroots educators, and creative volunteers on the front lines
            of Hopewise Foundation. Every member is officially inducted and accredited under Registration{' '}
            <span className="font-semibold text-[#0B192C]">{OFFICIAL_CERT_NUMBER}</span>.
          </p>

          {/* Quick Stats Pill Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 max-w-2xl mx-auto">
            <div className="bg-white p-3 rounded-xl border border-[#e4e2de] shadow-xs text-center">
              <span className="font-serif font-bold text-xl text-[#0B192C] block">16</span>
              <span className="text-[11px] font-semibold text-[#5C6470] uppercase tracking-wider">Core Leaders</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#e4e2de] shadow-xs text-center">
              <span className="font-serif font-bold text-xl text-[#D4AF37] block">22</span>
              <span className="text-[11px] font-semibold text-[#5C6470] uppercase tracking-wider">Induction Records</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#e4e2de] shadow-xs text-center">
              <span className="font-serif font-bold text-xl text-[#386380] block">5</span>
              <span className="text-[11px] font-semibold text-[#5C6470] uppercase tracking-wider">Departments</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#e4e2de] shadow-xs text-center">
              <span className="font-serif font-bold text-xl text-[#1B4965] block">100%</span>
              <span className="text-[11px] font-semibold text-[#5C6470] uppercase tracking-wider">Grassroots Driven</span>
            </div>
          </div>
        </div>

        {/* View Switcher & Search Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8 pb-6 border-b border-[#e4e2de]">
          {/* View Mode Toggle */}
          <div className="inline-flex p-1 bg-[#eae8e4] rounded-xl border border-[#e4e2de]">
            <button
              type="button"
              onClick={() => setActiveTab('team')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'team'
                  ? 'bg-white text-[#0B192C] shadow-sm'
                  : 'text-[#5C6470] hover:text-[#0B192C]'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">badge</span>
              <span>Team Profiles ({CORE_MEMBERS.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('certificates')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'certificates'
                  ? 'bg-white text-[#0B192C] shadow-sm'
                  : 'text-[#5C6470] hover:text-[#0B192C]'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span>All Induction Certificates ({ALL_CERTIFICATES.length})</span>
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#5C6470] text-[20px]">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search member or role..."
              className="w-full pl-10 pr-4 py-2 bg-white rounded-xl border border-[#e4e2de] text-sm text-[#0B192C] placeholder-[#8a919e] focus:outline-none focus:border-[#0B192C] focus:ring-1 focus:ring-[#0B192C] transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8a919e] hover:text-[#0B192C]"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            )}
          </div>
        </div>

        {/* Department Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <span className="text-xs font-semibold text-[#8a919e] uppercase tracking-wider whitespace-nowrap mr-2">
            Filter:
          </span>
          {DEPARTMENTS.map((dept) => (
            <button
              key={dept}
              type="button"
              onClick={() => setSelectedDept(dept)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                selectedDept === dept
                  ? 'bg-[#0B192C] text-white shadow-xs'
                  : 'bg-white text-[#5C6470] border border-[#e4e2de] hover:border-[#0B192C] hover:text-[#0B192C]'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* CONTENT VIEW 1: TEAM PROFILES */}
        {activeTab === 'team' && (
          <div>
            {filteredMembers.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-[#e4e2de] p-8">
                <span className="material-symbols-outlined text-4xl text-[#8a919e] mb-2">person_search</span>
                <p className="text-[#0B192C] font-semibold">No team members match your criteria</p>
                <button
                  onClick={() => { setSelectedDept('All'); setSearchQuery(''); }}
                  className="mt-3 text-xs text-[#386380] font-bold hover:underline"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredMembers.map((member) => (
                  <motion.div
                    key={member.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-white rounded-2xl border border-[#e4e2de] hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      {/* Avatar Image Header */}
                      <div className="relative aspect-square overflow-hidden bg-[#eae8e4]">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                        
                        {/* Certificate Badge */}
                        <div className="absolute top-3 right-3 bg-[#0B192C]/90 backdrop-blur-sm border border-white/20 text-[#D4AF37] text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                          <span className="material-symbols-outlined text-[13px]">verified</span>
                          <span>Inducted</span>
                        </div>

                        {/* Department Tag */}
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                          <span className="text-[11px] font-semibold text-white/90 bg-black/40 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-white/10">
                            {member.badge}
                          </span>
                        </div>
                      </div>

                      {/* Member Info */}
                      <div className="p-5">
                        <h3 className="font-serif font-bold text-lg text-[#0B192C] group-hover:text-[#1B4965] transition-colors leading-tight mb-1">
                          {member.name}
                        </h3>

                        <p className="text-xs font-semibold text-[#386380] mb-3 leading-snug">
                          {member.role}
                        </p>

                        <p className="text-xs text-[#5C6470] line-clamp-2 leading-relaxed mb-4">
                          {member.bio}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer Actions */}
                    <div className="px-5 pb-5 pt-0">
                      <div className="pt-3 border-t border-[#f2f0ec] flex items-center justify-between">
                        <span className="text-[10px] font-mono text-[#8a919e] uppercase tracking-wider">
                          {OFFICIAL_CERT_NUMBER.slice(0, 11)}...
                        </span>
                        
                        <button
                          type="button"
                          onClick={() => setSelectedModalItem(member)}
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#0B192C] hover:text-[#D4AF37] transition-colors"
                        >
                          <span>Certificate</span>
                          <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* CONTENT VIEW 2: ALL 22 INDUCTION CERTIFICATES */}
        {activeTab === 'certificates' && (
          <div>
            <div className="mb-6 flex items-center justify-between text-xs text-[#5C6470]">
              <span>
                Showing <strong>{filteredCertificates.length}</strong> official Hopewise Foundation induction records
              </span>
              <span className="hidden sm:inline font-mono text-[11px] text-[#8a919e]">
                Certification Authority: Uttar Pradesh State Register
              </span>
            </div>

            {filteredCertificates.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-[#e4e2de] p-8">
                <span className="material-symbols-outlined text-4xl text-[#8a919e] mb-2">find_in_page</span>
                <p className="text-[#0B192C] font-semibold">No certificates match your search</p>
                <button
                  onClick={() => { setSelectedDept('All'); setSearchQuery(''); }}
                  className="mt-3 text-xs text-[#386380] font-bold hover:underline"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredCertificates.map((cert) => (
                  <motion.div
                    key={cert.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.25 }}
                    onClick={() => setSelectedModalItem(cert)}
                    className="group bg-white rounded-2xl border border-[#e4e2de] hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
                  >
                    {/* Certificate Poster Preview (4:5 vertical poster aspect ratio) */}
                    <div className="relative aspect-[4/5] bg-[#0B192C] overflow-hidden">
                      <img
                        src={cert.image}
                        alt={`${cert.name} - Induction Certificate`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-[#0B192C]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center text-white backdrop-blur-[2px]">
                        <span className="w-12 h-12 rounded-full bg-[#D4AF37] text-[#0B192C] flex items-center justify-center mb-3 shadow-lg transform group-hover:scale-110 transition-transform">
                          <span className="material-symbols-outlined text-[24px]">zoom_in</span>
                        </span>
                        <span className="font-serif font-bold text-base text-white block mb-1">
                          {cert.name}
                        </span>
                        <span className="text-xs text-[#F4EBD9] block mb-2">
                          {cert.role}
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-white/70 font-mono">
                          Click to Inspect
                        </span>
                      </div>

                      {/* Corner Badge */}
                      <div className="absolute top-3 left-3 bg-[#0B192C]/80 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/20">
                        {cert.edition}
                      </div>
                    </div>

                    {/* Meta Bar */}
                    <div className="p-4 bg-white border-t border-[#f2f0ec]">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-serif font-bold text-sm text-[#0B192C] truncate">
                          {cert.name}
                        </h4>
                        <span className="text-[10px] font-semibold text-[#D4AF37] bg-[#F4EBD9]/60 px-2 py-0.5 rounded-full shrink-0">
                          Verified
                        </span>
                      </div>
                      <p className="text-xs text-[#5C6470] truncate mb-2">
                        {cert.role}
                      </p>
                      <div className="flex items-center justify-between text-[10px] text-[#8a919e] font-mono pt-2 border-t border-[#f5f3ef]">
                        <span>Cert #{OFFICIAL_CERT_NUMBER.slice(0, 10)}...</span>
                        <span className="text-[#386380] font-sans font-bold flex items-center gap-0.5">
                          <span>View Full</span>
                          <span className="material-symbols-outlined text-[12px]">open_in_new</span>
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* LIGHTBOX / FULL CERTIFICATE MODAL */}
        <AnimatePresence>
          {selectedModalItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
              onClick={() => setSelectedModalItem(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-[#0B192C] text-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-white/10 my-auto flex flex-col lg:flex-row max-h-[92vh]"
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedModalItem(null)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer"
                  aria-label="Close certificate modal"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>

                {/* Left/Poster Image Column */}
                <div className="lg:w-3/5 bg-black/40 flex items-center justify-center p-4 sm:p-6 relative overflow-hidden group">
                  <img
                    src={getPosterForModal(selectedModalItem)}
                    alt={`${selectedModalItem.name} Official Certificate`}
                    className="max-h-[60vh] lg:max-h-[80vh] w-auto object-contain rounded-xl shadow-2xl border border-white/10"
                  />

                  {/* Previous / Next Navigation Arrows */}
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); navigateModal(-1); }}
                    className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer"
                    aria-label="Previous certificate"
                  >
                    <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); navigateModal(1); }}
                    className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer"
                    aria-label="Next certificate"
                  >
                    <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                  </button>
                </div>

                {/* Right/Metadata Column */}
                <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
                  <div>
                    {/* Organization Brand */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
                      <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
                        Hopewise Foundation Official Induction
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                      {selectedModalItem.name}
                    </h3>

                    <div className="inline-block px-3 py-1 bg-[#1B4965]/60 border border-[#386380] rounded-lg text-xs font-semibold text-[#8ac4d0] mb-4">
                      {selectedModalItem.role}
                    </div>

                    <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
                      <div className="flex justify-between items-center py-1 border-b border-white/5">
                        <span className="text-[#8a919e]">Department:</span>
                        <span className="font-semibold text-white">{selectedModalItem.department}</span>
                      </div>

                      <div className="flex justify-between items-center py-1 border-b border-white/5">
                        <span className="text-[#8a919e]">Certification No:</span>
                        <span className="font-mono font-semibold text-[#D4AF37]">{OFFICIAL_CERT_NUMBER}</span>
                      </div>

                      <div className="flex justify-between items-center py-1 border-b border-white/5">
                        <span className="text-[#8a919e]">Status:</span>
                        <span className="inline-flex items-center gap-1 text-[#22c55e] font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"></span>
                          Active Official Member
                        </span>
                      </div>

                      <div className="flex justify-between items-center py-1 border-b border-white/5">
                        <span className="text-[#8a919e]">Document Type:</span>
                        <span className="text-white/90">Official Induction Certificate</span>
                      </div>
                    </div>

                    {selectedModalItem.bio && (
                      <div className="mt-5 p-3.5 bg-white/5 rounded-xl border border-white/10 text-xs text-[#c5c6ce] leading-relaxed">
                        <p className="font-semibold text-white/90 mb-1">Focus &amp; Contribution:</p>
                        {selectedModalItem.bio}
                      </div>
                    )}
                  </div>

                  {/* Modal Footer */}
                  <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                    <a
                      href={getPosterForModal(selectedModalItem)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#D4AF37] hover:bg-[#c5a059] text-[#0B192C] font-bold text-xs py-3 px-4 rounded-xl text-center flex items-center justify-center gap-2 transition-all"
                    >
                      <span className="material-symbols-outlined text-[16px]">visibility</span>
                      <span>Open Original Image</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSelectedModalItem(null)}
                      className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold py-3 px-4 rounded-xl transition-all"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
