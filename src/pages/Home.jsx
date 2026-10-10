import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import logoImg from '../assets/logo.jpg';
import heroStudentsImg from '../assets/images/hero_students.jpg';
import foundingClassroomImg from '../assets/images/founding_classroom.jpg';
import paintedHandsImg from '../assets/images/painted_hands.jpg';
import programEducationImg from '../assets/images/program_education.jpg';
import communityDialogueImg from '../assets/images/community_dialogue.jpg';
import scholarRajeshwariImg from '../assets/images/scholar_rajeshwari.jpg';
import artisanSunitaImg from '../assets/images/artisan_sunita.jpg';
import { CORE_MEMBERS, OFFICIAL_CERT_NUMBER, DEPARTMENTS } from '../data/membersData';
import QuickQueryForm from '../components/forms/QuickQueryForm';
import FounderSection from '../components/team/FounderSection';

export default function Home({ onOpenDonate }) {
  const [selectedLeaderModal, setSelectedLeaderModal] = useState(null);
  const [activeLeaderDept, setActiveLeaderDept] = useState('All');
  const [visibleLeaderCount, setVisibleLeaderCount] = useState(4);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedLeaderModal) return;
      if (e.key === 'Escape') {
        setSelectedLeaderModal(null);
      } else if (e.key === 'ArrowRight') {
        navigateLeaderModal(1);
      } else if (e.key === 'ArrowLeft') {
        navigateLeaderModal(-1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedLeaderModal, activeLeaderDept]);

  const filteredLeaders = CORE_MEMBERS.filter(
    (m) => activeLeaderDept === 'All' || m.department === activeLeaderDept
  );

  const navigateLeaderModal = (direction) => {
    if (!selectedLeaderModal) return;
    const list = filteredLeaders.length > 0 ? filteredLeaders : CORE_MEMBERS;
    const currentIndex = list.findIndex((m) => m.id === selectedLeaderModal.id);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + direction + list.length) % list.length;
    setSelectedLeaderModal(list[nextIndex]);
  };
  const focusAreas = [
    {
      title: 'Education & Scholarships',
      icon: 'school',
      badge: 'Primary Pillar',
      desc: 'Quality schooling, books, and scholarships to help promising children build their future.',
      stat: '12,000+ Scholars',
      link: '/our-work'
    },
    {
      title: 'Healthcare & Medicine',
      icon: 'medical_services',
      badge: 'Vital Care',
      desc: 'Free mobile medical camps, seasonal medicines, and maternal care for underserved families.',
      stat: '45,000+ Checkups',
      link: '/our-work'
    },
    {
      title: 'Food & Relief Support',
      icon: 'nutrition',
      badge: 'Nourishment',
      desc: 'Daily nutritious meals and emergency grocery hampers so no child goes to bed hungry.',
      stat: '180,000+ Meals',
      link: '/our-work'
    },
    {
      title: 'Women Empowerment',
      icon: 'female',
      badge: 'Self-Reliance',
      desc: 'Vocational training, micro-grants, and artisan cooperatives that create financial independence.',
      stat: '3,800+ Women',
      link: '/our-work'
    },
    {
      title: 'Child Welfare & Protection',
      icon: 'child_care',
      badge: 'Protection',
      desc: 'Safe learning hubs, counseling, and mentorship to safeguard every child’s future.',
      stat: '28 Safe Spaces',
      link: '/our-work'
    },
    {
      title: 'Clean Water & Infrastructure',
      icon: 'water_drop',
      badge: 'Resilience',
      desc: 'Clean drinking water borewells and solar lighting for remote schools and rural communities.',
      stat: '42 Borewells',
      link: '/our-work'
    }
  ];

  const stories = [
    {
      name: 'Rajeshwari M.',
      role: 'STEM Scholar & First-Generation Engineer',
      location: 'Gadchiroli District',
      quote: 'Before the Hopewise Higher Education fellowship, university felt like an unattainable dream. Today, I am graduating in Civil Engineering and tutoring girls in my village.',
      image: scholarRajeshwariImg
    },
    {
      name: 'Sunita Devi',
      role: 'Artisan Cooperative Lead',
      location: 'Sunderbans Cluster',
      quote: 'The micro-grant and financial workshops allowed 32 women in our village to purchase looms together. We are financially independent and our children never skip school.',
      image: artisanSunitaImg
    }
  ];

  return (
    <div className="w-full">
      {/* 1. HERO SECTION - BENTO MOSAIC DESIGN */}
      <section className="relative w-full overflow-hidden bg-[#FAF8F5] pt-28 sm:pt-32 pb-16 lg:pt-36 lg:pb-24 border-b border-[#e4e2de]/60">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Typography Area */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-block text-[#E11D48] text-xs sm:text-sm font-bold tracking-wider uppercase mb-3.5"
            >
              100,000+ Children Supported
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="font-serif text-4xl sm:text-6xl lg:text-[70px] text-[#0B192C] font-bold tracking-tight leading-[1.12] mb-5"
            >
              Help Us Educate Every Child <br className="hidden sm:inline" />
              for a <span className="italic font-serif font-normal text-[#E11D48]">Brighter Future</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="font-sans text-sm sm:text-base text-[#5C6470] max-w-xl mx-auto mb-7 leading-relaxed"
            >
              Providing education, school supplies, and support to help every child learn, grow, and succeed.
            </motion.p>

            {/* Primary Action Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.22 }}
              className="flex items-center justify-center gap-4"
            >
              <button
                type="button"
                onClick={onOpenDonate}
                className="bg-[#18181B] hover:bg-black text-white text-xs sm:text-sm font-bold tracking-wider uppercase px-8 py-3.5 rounded-full shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                Sponsor a Child Today
              </button>
            </motion.div>
          </div>

          {/* 5-COLUMN BENTO MOSAIC GRID */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-4.5 items-stretch"
          >
            {/* COLUMN 1 */}
            <div className="flex flex-col gap-4">
              {/* Card 1A: Smiling Child Photo */}
              <div className="relative rounded-[26px] overflow-hidden shadow-sm aspect-[4/5] sm:h-72 group bg-[#eae8e4]">
                <img
                  src={heroStudentsImg}
                  alt="Be the reason a child smiles"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
                  <h3 className="font-serif font-bold text-2xl sm:text-[26px] leading-[1.15] text-white drop-shadow-sm">
                    Be the<br />reason a<br />child<br />smiles
                  </h3>
                </div>
              </div>

              {/* Card 1B: Dark Emerald Stat Card */}
              <div className="rounded-[24px] p-5 sm:p-6 bg-[#0E3D2F] text-white shadow-sm flex flex-col justify-center flex-1 min-h-[140px] hover:bg-[#0b3327] transition-colors">
                <span className="font-serif text-3xl sm:text-4xl font-bold leading-none mb-2 text-white">
                  8,500+
                </span>
                <p className="text-xs sm:text-[13px] text-white/90 leading-snug">
                  Students show improved academic performance.
                </p>
              </div>
            </div>

            {/* COLUMN 2: Teacher & Mentorship Combined Card */}
            <div className="rounded-[26px] overflow-hidden bg-[#181C20] text-white shadow-sm flex flex-col h-full group hover:shadow-md transition-shadow">
              {/* Top Photo Section */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[#2a2e33]">
                <img
                  src={foundingClassroomImg}
                  alt="Teacher educating students in classroom"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181C20] via-transparent to-transparent opacity-60" />
              </div>
              {/* Bottom Dark Section */}
              <div className="p-5 sm:p-6 flex flex-col justify-center flex-1 bg-[#181C20]">
                <span className="font-serif text-3xl sm:text-4xl font-bold leading-none mb-2 text-white">
                  200+
                </span>
                <p className="text-xs sm:text-[13px] text-[#c5c6ce] leading-snug">
                  Qualified teachers supporting children's education.
                </p>
              </div>
            </div>

            {/* COLUMN 3: Center Featured Royal Blue Card */}
            <div className="rounded-[28px] p-6 sm:p-8 bg-[#3B82F6] text-white shadow-xl flex flex-col justify-between text-center relative overflow-hidden h-full group hover:bg-[#2563EB] transition-all duration-300">
              {/* Ambient Glows */}
              <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-white/15 blur-2xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-44 h-44 rounded-full bg-blue-300/20 blur-2xl pointer-events-none" />

              <div className="my-auto py-8 z-10">
                <h3 className="font-sans font-bold text-2xl sm:text-[28px] text-white leading-[1.25]">
                  Join 1000<br />people<br />building a<br />better<br />tomorrow.
                </h3>
              </div>

              <div className="z-10 pt-4">
                <Link
                  to="/join-community"
                  className="w-full bg-[#18181B] hover:bg-black text-white text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-full shadow-md hover:scale-105 transition-all duration-200 block text-center"
                >
                  Join Community
                </Link>
              </div>
            </div>

            {/* COLUMN 4: Tall Photo Card - Painted Hands Children */}
            <div className="rounded-[26px] overflow-hidden relative shadow-sm h-full min-h-[380px] sm:min-h-[440px] group bg-[#eae8e4]">
              <img
                src={paintedHandsImg}
                alt="Children holding painted hands smiling"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end text-white">
                <p className="font-sans font-bold text-lg sm:text-xl leading-snug drop-shadow-md text-white">
                  Inspire change,<br />Inspire education
                </p>
              </div>
            </div>

            {/* COLUMN 5 */}
            <div className="flex flex-col gap-4">
              {/* Card 5A: Terracotta / Coral Inspirational Card */}
              <div className="rounded-[26px] p-6 sm:p-7 bg-[#EA6345] text-white shadow-sm relative overflow-hidden flex flex-col justify-center flex-1 min-h-[220px] hover:bg-[#e25333] transition-colors">
                <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-white/10 blur-xl pointer-events-none" />
                <h4 className="font-serif font-bold text-xl sm:text-[22px] leading-tight mb-3 text-white">
                  One Child.<br />
                  One Teacher.<br />
                  One Book.
                </h4>
                <p className="font-serif italic text-base sm:text-lg text-white/95 leading-snug">
                  Can Change the World
                </p>
              </div>

              {/* Card 5B: Learning Photo Card */}
              <div className="relative rounded-[24px] overflow-hidden shadow-sm aspect-[4/3] sm:h-44 group bg-[#eae8e4]">
                <img
                  src={programEducationImg}
                  alt="Give the gift of learning"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
                  <p className="font-serif font-bold text-sm sm:text-base leading-snug text-white">
                    Give the gift of learning
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. INTRODUCTION & COMMUNITY DIALOGUE */}
      <section className="w-full bg-white py-20 lg:py-24 border-y border-[#e4e2de]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-0.5 w-8 bg-[#D4AF37] inline-block" />
            <span className="text-xs uppercase tracking-widest text-[#386380] font-bold">
              Who We Are
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Editorial */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="font-serif text-2xl sm:text-4xl text-[#0B192C] font-bold tracking-tight leading-tight">
                Change Begins With Care and Action.
              </h2>
              <p className="text-base text-[#1E252D] leading-relaxed">
                At Hopewise Foundation, we believe every child deserves an education and every family deserves dignity. Based in Aligarh, Uttar Pradesh, our mission is to empower communities and build brighter, stronger futures for all.
              </p>
              <p className="text-sm text-[#5C6470] leading-relaxed">
                We work directly on the ground—funding scholarships, running free medical camps, and creating sustainable livelihoods that help families stand on their own feet.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#fbf9f5] rounded-xl border border-[#e4e2de]">
                  <span className="material-symbols-outlined text-[#D4AF37] text-[26px] mb-1">school</span>
                  <h3 className="font-serif font-bold text-sm text-[#0B192C]">Child Education</h3>
                  <p className="text-xs text-[#5C6470] mt-1">
                    Books, uniforms, and scholarships to help students stay in school.
                  </p>
                </div>
                <div className="p-4 bg-[#fbf9f5] rounded-xl border border-[#e4e2de]">
                  <span className="material-symbols-outlined text-[#386380] text-[26px] mb-1">volunteer_activism</span>
                  <h3 className="font-serif font-bold text-sm text-[#0B192C]">Community Care</h3>
                  <p className="text-xs text-[#5C6470] mt-1">
                    Free health camps, daily meals, and women self-reliance programs.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-[#0F203C] hover:bg-[#0B192C] text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-sm transition-all"
                >
                  <span>Discover Our Story</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Showcase */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/10] bg-[#eae8e4] border border-[#e4e2de]">
                <img
                  alt="Community dialogue in rural development initiatives"
                  className="w-full h-full object-cover"
                  src={communityDialogueImg}
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-[#5C6470] text-xs px-1">
                <span className="italic">On-ground community dialogue in Aligarh and rural clusters</span>
                <span className="uppercase tracking-wider text-[#386380] font-semibold">Grassroots Action</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOCUS AREAS (PILLARS OF TRANSFORMATION) */}
      <section className="w-full bg-[#fbf9f5] py-20 lg:py-24" id="our-work">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-0.5 w-8 bg-[#D4AF37] inline-block" />
                <span className="text-xs uppercase tracking-widest text-[#386380] font-bold">
                  Where Care Meets Action
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#0B192C] font-bold tracking-tight">
                Our Core Focus Pillars
              </h2>
            </div>
            <p className="text-sm text-[#5C6470] max-w-md">
              Focused, sustainable initiatives designed to break the cycle of poverty and nurture self-reliance.
            </p>
          </div>

          {/* 6 Bento Grid Focus Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-[#e4e2de]"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#F4EBD9] flex items-center justify-center text-[#0B192C] group-hover:bg-[#D4AF37] group-hover:text-[#0B192C] transition-colors">
                      <span className="material-symbols-outlined text-[26px]">{area.icon}</span>
                    </div>
                    <span className="text-[11px] uppercase tracking-wider text-[#386380] font-bold bg-[#f5f3ef] px-2.5 py-1 rounded">
                      {area.badge}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#0B192C] mb-2 group-hover:text-[#386380] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-sm text-[#5C6470] leading-relaxed">
                    {area.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#f5f3ef] flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-[#386380] font-bold">
                    {area.stat}
                  </span>
                  <Link
                    to={area.link}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0B192C] group-hover:text-[#D4AF37] transition-colors"
                  >
                    <span>Explore More</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VERIFIED IMPACT STRIP */}
      <section className="w-full bg-[#0B192C] text-white py-16 lg:py-20">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
              Accountability In Action
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
              Verified Operational Milestones
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-[#0F203C] border border-white/10">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#D4AF37] block">
                42,000+
              </span>
              <span className="text-xs uppercase tracking-wider text-[#c5c6ce] mt-2 block font-semibold">
                Students Supported
              </span>
            </div>
            <div className="p-6 rounded-2xl bg-[#0F203C] border border-white/10">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white block">
                18
              </span>
              <span className="text-xs uppercase tracking-wider text-[#c5c6ce] mt-2 block font-semibold">
                States Reached
              </span>
            </div>
            <div className="p-6 rounded-2xl bg-[#0F203C] border border-white/10">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#D4AF37] block">
                89%
              </span>
              <span className="text-xs uppercase tracking-wider text-[#c5c6ce] mt-2 block font-semibold">
                Self-Sustaining Units
              </span>
            </div>
            <div className="p-6 rounded-2xl bg-[#0F203C] border border-white/10">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white block">
                1,240+
              </span>
              <span className="text-xs uppercase tracking-wider text-[#c5c6ce] mt-2 block font-semibold">
                Active Volunteers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STORIES OF HOPE */}
      <section className="w-full bg-white py-20 lg:py-24 border-b border-[#e4e2de]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-[#386380] font-bold">
              Voices of Change
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#0B192C] mt-1">
              Stories of Transformed Lives
            </h2>
            <p className="text-sm text-[#5C6470] mt-2">
              Behind every initiative is a human life restored to purpose, self-worth, and dignity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {stories.map((story) => (
              <div
                key={story.name}
                className="bg-[#fbf9f5] rounded-2xl overflow-hidden border border-[#e4e2de] shadow-sm flex flex-col"
              >
                <div className="h-64 w-full overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                  <blockquote className="font-serif italic text-base sm:text-lg text-[#0B192C] leading-relaxed">
                    "{story.quote}"
                  </blockquote>
                  <div className="pt-4 border-t border-[#e4e2de] flex items-center justify-between">
                    <div>
                      <h4 className="font-serif font-bold text-base text-[#0B192C]">{story.name}</h4>
                      <p className="text-xs text-[#5C6470]">{story.role}</p>
                    </div>
                    <span className="text-xs font-semibold text-[#386380] bg-[#b2dcfe]/40 px-2.5 py-1 rounded">
                      {story.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.3. FOUNDER SPOTLIGHT SECTION */}
      <FounderSection />

      {/* 5.5. FOUNDATION TEAM & MEMBERS SHOWCASE */}
      <section className="w-full bg-[#fcfbfa] py-20 lg:py-24 border-y border-[#e4e2de]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-0.5 w-8 bg-[#D4AF37] inline-block" />
                <span className="text-xs uppercase tracking-widest text-[#386380] font-bold">
                  The People Behind the Movement
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#0B192C] font-bold tracking-tight">
                Meet Our Leadership &amp; Grassroots Team
              </h2>
              <p className="text-sm text-[#5C6470] mt-2 max-w-2xl">
                Dedicated professionals, advocates, and volunteers accredited under Govt. Registration{' '}
                <span className="font-mono text-[#0B192C] font-semibold">{OFFICIAL_CERT_NUMBER}</span>.
              </p>
            </div>

            <Link
              to="/about#team"
              className="inline-flex items-center gap-2 bg-[#0B192C] hover:bg-[#1B4965] text-white px-5 py-2.5 rounded-xl text-xs font-semibold shadow-xs transition-all shrink-0"
            >
              <span>View All {CORE_MEMBERS.length} Members &amp; Registry</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>

          {/* Department Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            <span className="text-xs font-semibold text-[#8a919e] uppercase tracking-wider whitespace-nowrap mr-2">
              Filter Pillar:
            </span>
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept}
                type="button"
                onClick={() => {
                  setActiveLeaderDept(dept);
                  setVisibleLeaderCount(4);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  activeLeaderDept === dept
                    ? 'bg-[#0B192C] text-white shadow-xs'
                    : 'bg-white text-[#5C6470] border border-[#e4e2de] hover:border-[#0B192C] hover:text-[#0B192C]'
                }`}
              >
                {dept === 'All' ? `All Members (${CORE_MEMBERS.length})` : dept}
              </button>
            ))}
          </div>

          {/* Featured Full Graphic Induction Posters Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredLeaders.slice(0, visibleLeaderCount).map((member) => (
              <div
                key={member.id}
                className="group bg-white rounded-2xl border border-[#e4e2de] hover:border-[#D4AF37] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xs"
              >
                <div>
                  {/* Full Induction Graphic Poster (Natural 4:5 Aspect Ratio) */}
                  <div
                    onClick={() => setSelectedLeaderModal(member)}
                    className="relative aspect-[4/5] overflow-hidden bg-[#0a192f] cursor-pointer"
                  >
                    <img
                      src={member.certPoster}
                      alt={`${member.name} - Official Induction Graphic`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />

                    {/* Quick View Hover Overlay */}
                    <div className="absolute inset-0 bg-[#0B192C]/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center backdrop-blur-[2px]">
                      <span className="w-12 h-12 rounded-full bg-[#D4AF37] text-[#0B192C] flex items-center justify-center mb-3 shadow-xl transform group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-[24px]">zoom_in</span>
                      </span>
                      <span className="text-white font-serif font-bold text-base block mb-1">
                        {member.name}
                      </span>
                      <span className="text-xs text-[#F4EBD9] block mb-2">
                        {member.role}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-white/80 font-mono bg-black/40 px-3 py-1 rounded-full border border-white/20">
                        Inspect High-Res Graphic
                      </span>
                    </div>
                  </div>

                  {/* Member Meta Information */}
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-bold text-[#1B4965] bg-[#1B4965]/10 px-2.5 py-0.5 rounded-full border border-[#1B4965]/15">
                        {member.badge}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#D4AF37]">
                        <span className="material-symbols-outlined text-[13px]">verified</span>
                        <span>Inducted</span>
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-lg text-[#0B192C] group-hover:text-[#1B4965] transition-colors leading-tight mb-1">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#386380] mb-2 leading-snug">
                      {member.role}
                    </p>
                    <p className="text-xs text-[#5C6470] line-clamp-2 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* Card Action Controls */}
                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-[#f2f0ec] flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedLeaderModal(member)}
                      className="flex-1 py-2.5 bg-[#0B192C] hover:bg-[#1B4965] text-white rounded-xl text-xs font-semibold shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Inspect Graphic</span>
                      <span className="material-symbols-outlined text-[15px]">zoom_in</span>
                    </button>
                    <Link
                      to="/about#team"
                      className="p-2.5 text-[#5C6470] hover:text-[#0B192C] hover:bg-[#eae8e4] rounded-xl border border-[#e4e2de] transition-colors flex items-center justify-center"
                      title="View on Official Registry"
                    >
                      <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More / Show Less Toggle if more items exist */}
          {filteredLeaders.length > 4 && (
            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() =>
                  setVisibleLeaderCount((prev) =>
                    prev >= filteredLeaders.length ? 4 : filteredLeaders.length
                  )
                }
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#0B192C] text-[#0B192C] hover:bg-[#0B192C] hover:text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
              >
                <span>
                  {visibleLeaderCount >= filteredLeaders.length
                    ? 'Show Less'
                    : `Show All ${filteredLeaders.length} Members in this Pillar`}
                </span>
                <span className="material-symbols-outlined text-[16px]">
                  {visibleLeaderCount >= filteredLeaders.length
                    ? 'expand_less'
                    : 'expand_more'}
                </span>
              </button>
            </div>
          )}

          {/* Interactive Roster Strip */}
          <div className="mt-10 p-5 bg-white rounded-2xl border border-[#e4e2de] shadow-xs flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2.5 overflow-hidden py-1">
                {CORE_MEMBERS.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setSelectedLeaderModal(m)}
                    className="relative group/avatar focus:outline-none cursor-pointer"
                    title={`Click to inspect ${m.name}'s official induction graphic`}
                  >
                    <img
                      src={m.certPoster}
                      alt={m.name}
                      className="inline-block h-10 w-8 rounded-md ring-2 ring-white hover:ring-[#D4AF37] object-cover hover:scale-125 hover:z-20 transition-all duration-200 shadow-xs"
                    />
                  </button>
                ))}
              </div>
              <div>
                <p className="text-xs text-[#0B192C] font-bold">
                  16 Official Foundation Inductions &amp; 22 Verified Archive Records
                </p>
                <p className="text-[11px] text-[#5C6470]">
                  Click any induction mini-poster above to inspect full credentials.
                </p>
              </div>
            </div>

            <Link
              to="/about#team"
              className="text-xs font-bold text-[#1B4965] hover:text-[#0B192C] flex items-center gap-1.5 transition-colors bg-[#eae8e4]/60 hover:bg-[#eae8e4] px-4 py-2 rounded-xl border border-[#e4e2de]"
            >
              <span>Explore Full Roster &amp; Certificate Archive</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* HIGH-RES INDUCTION GRAPHIC LIGHTBOX MODAL */}
        <AnimatePresence>
          {selectedLeaderModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
              onClick={() => setSelectedLeaderModal(null)}
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
                  onClick={() => setSelectedLeaderModal(null)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer"
                  aria-label="Close modal"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>

                {/* Left: Graphic Poster Image Viewport */}
                <div className="lg:w-3/5 bg-black/50 flex items-center justify-center p-4 sm:p-6 relative overflow-hidden group">
                  <img
                    src={selectedLeaderModal.certPoster}
                    alt={`${selectedLeaderModal.name} Official Induction Graphic`}
                    className="max-h-[60vh] lg:max-h-[80vh] w-auto object-contain rounded-xl shadow-2xl border border-white/10"
                  />

                  {/* Previous / Next Navigation Arrows */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateLeaderModal(-1);
                    }}
                    className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer"
                    aria-label="Previous induction poster"
                  >
                    <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateLeaderModal(1);
                    }}
                    className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer"
                    aria-label="Next induction poster"
                  >
                    <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                  </button>
                </div>

                {/* Right: Meta & Official Registry Column */}
                <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
                  <div>
                    {/* Organization Brand */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
                      <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
                        Official Induction Announcement
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                      {selectedLeaderModal.name}
                    </h3>

                    <div className="inline-block px-3 py-1 bg-[#1B4965]/60 border border-[#386380] rounded-lg text-xs font-semibold text-[#8ac4d0] mb-4">
                      {selectedLeaderModal.role}
                    </div>

                    <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
                      <div className="flex justify-between items-center py-1 border-b border-white/5">
                        <span className="text-[#8a919e]">Department:</span>
                        <span className="font-semibold text-white">{selectedLeaderModal.department}</span>
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
                        <span className="text-[#8a919e]">Pillar Focus:</span>
                        <span className="text-white/90">{selectedLeaderModal.badge}</span>
                      </div>
                    </div>

                    {selectedLeaderModal.bio && (
                      <div className="mt-5 p-3.5 bg-white/5 rounded-xl border border-white/10 text-xs text-[#c5c6ce] leading-relaxed">
                        <p className="font-semibold text-white/90 mb-1">Focus &amp; Grassroots Scope:</p>
                        {selectedLeaderModal.bio}
                      </div>
                    )}
                  </div>

                  {/* Modal Footer */}
                  <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                    <a
                      href={selectedLeaderModal.certPoster}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#D4AF37] hover:bg-[#c5a059] text-[#0B192C] font-bold text-xs py-3 px-4 rounded-xl text-center flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                      <span>Open Full Graphic</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSelectedLeaderModal(null)}
                      className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold py-3 px-4 rounded-xl transition-all cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 5.8. OFFICIAL INSTAGRAM PROFILE & COMMUNITY CONNECT */}
      <section className="w-full bg-white py-20 lg:py-24 border-b border-[#e4e2de]" id="instagram">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="h-0.5 w-8 bg-[#E1306C] inline-block" />
              <span className="text-xs uppercase tracking-widest text-[#E1306C] font-bold">
                Follow Us on Instagram
              </span>
              <span className="h-0.5 w-8 bg-[#E1306C] inline-block" />
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#0B192C] font-bold tracking-tight">
              Care &amp; Action in Real Time
            </h2>
            <p className="text-sm text-[#5C6470] mt-2">
              Daily grassroots moments, field updates, and student smiles directly from our community.
            </p>
          </div>

          {/* Instagram Profile Card */}
          <div className="max-w-4xl mx-auto bg-[#FAF8F5] rounded-3xl border border-[#e4e2de] shadow-sm hover:shadow-md transition-all overflow-hidden">
            <div className="p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
              {/* Profile Avatar with Instagram Story Ring */}
              <div className="relative shrink-0">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-[3.5px] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-sm flex items-center justify-center">
                  <div className="w-full h-full bg-white rounded-full p-1.5 flex items-center justify-center overflow-hidden">
                    <img
                      src={logoImg}
                      alt="Hopewise Foundation Official Instagram"
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                </div>
                <div className="absolute bottom-1 right-1 bg-[#25D366] text-white p-1 rounded-full border-2 border-white shadow-xs">
                  <span className="material-symbols-outlined text-[13px] block">verified</span>
                </div>
              </div>

              {/* Profile Bio & Details */}
              <div className="flex-1 text-center md:text-left space-y-3.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center justify-center md:justify-start gap-1.5">
                      <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#0B192C]">
                        hopewisefoundation
                      </h3>
                      <span className="material-symbols-outlined text-[#3897f0] text-[20px]">verified</span>
                    </div>
                    <p className="text-xs text-[#8a919e] font-semibold">
                      Hopewise Foundation • Non-Profit Organization
                    </p>
                  </div>

                  <a
                    href="https://www.instagram.com/hopewisefoundation/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-95 text-white text-xs font-bold px-6 py-2.5 rounded-xl shadow-sm transition-all"
                  >
                    <span className="material-symbols-outlined text-[16px]">photo_camera</span>
                    <span>Follow on Instagram</span>
                  </a>
                </div>

                {/* Authentic Bio Quote */}
                <p className="text-xs sm:text-sm text-[#1E252D] leading-relaxed font-sans">
                  At Hopewise, we believe change begins with care and action. Together, we empower communities and build brighter, stronger futures for all 💚
                </p>

                {/* Official Address Pin */}
                <div className="pt-1 flex items-center justify-center md:justify-start gap-1.5 text-xs font-semibold text-[#0B192C]">
                  <span className="material-symbols-outlined text-[#E11D48] text-[18px]">location_on</span>
                  <span>Grand Bazaar, Lal Diggi Road, Aligarh 202001, Uttar Pradesh</span>
                </div>
              </div>
            </div>

            {/* Field Moments Preview Strip */}
            <div className="bg-white border-t border-[#e4e2de] p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider text-[#5C6470] font-bold">
                  Recent Moments &amp; Field Stories
                </span>
                <a
                  href="https://www.instagram.com/hopewisefoundation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#E1306C] hover:underline flex items-center gap-1"
                >
                  <span>@hopewisefoundation</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <a
                  href="https://www.instagram.com/hopewisefoundation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square rounded-2xl overflow-hidden bg-[#0B192C] shadow-xs"
                >
                  <img
                    src={heroStudentsImg}
                    alt="Student distribution drive"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#0B192C]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-[24px]">favorite</span>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/hopewisefoundation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square rounded-2xl overflow-hidden bg-[#0B192C] shadow-xs"
                >
                  <img
                    src={foundingClassroomImg}
                    alt="Classroom education"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#0B192C]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-[24px]">favorite</span>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/hopewisefoundation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square rounded-2xl overflow-hidden bg-[#0B192C] shadow-xs"
                >
                  <img
                    src={paintedHandsImg}
                    alt="Inspiring children"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#0B192C]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-[24px]">favorite</span>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/hopewisefoundation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square rounded-2xl overflow-hidden bg-[#0B192C] shadow-xs"
                >
                  <img
                    src={communityDialogueImg}
                    alt="Community empowerment"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#0B192C]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-[24px]">favorite</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ENGAGEMENT PATHWAYS */}
      <section className="w-full bg-[#fbf9f5] py-20 lg:py-24" id="get-involved">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-[#386380] font-bold">
              Ways to Make a Difference
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#0B192C] font-bold mt-1">
              Be the Reason Someone Smiles
            </h2>
            <p className="text-sm text-[#5C6470] mt-2">
              Every action counts. Choose how you want to be part of the change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Pathway 1 */}
            <div className="bg-white rounded-2xl p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-center items-center border border-[#e4e2de]">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-[#F4EBD9] flex items-center justify-center text-[#D4AF37] mb-4">
                  <span className="material-symbols-outlined text-[28px]">volunteer_activism</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0B192C] mb-2">
                  Donate Directly
                </h3>
                <p className="text-xs text-[#5C6470] leading-relaxed mb-6">
                  100% of your donation directly funds student kits, medical checkups, and food relief packs.
                </p>
              </div>
              <button
                type="button"
                onClick={onOpenDonate}
                className="w-full py-2.5 px-5 rounded-xl bg-[#D4AF37] hover:bg-[#c5a059] text-[#0B192C] text-xs font-bold uppercase tracking-wider shadow-xs transition-all cursor-pointer"
              >
                Donate with 80G Relief
              </button>
            </div>

            {/* Pathway 2 */}
            <div className="bg-white rounded-2xl p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-center items-center border border-[#e4e2de]">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-[#f5f3ef] flex items-center justify-center text-[#386380] mb-4">
                  <span className="material-symbols-outlined text-[28px]">group_add</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0B192C] mb-2">
                  Volunteer &amp; Mentor
                </h3>
                <p className="text-xs text-[#5C6470] leading-relaxed mb-6">
                  Share your knowledge. Mentor a child, teach a workshop, or join our on-ground drives.
                </p>
              </div>
              <Link
                to="/join-community"
                className="w-full py-2.5 px-5 rounded-xl bg-[#0F203C] hover:bg-[#0B192C] text-white text-xs font-bold uppercase tracking-wider shadow-xs transition-all text-center"
              >
                Join Volunteer Circle
              </Link>
            </div>

            {/* Pathway 3 */}
            <div className="bg-white rounded-2xl p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-center items-center border border-[#e4e2de]">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-[#F4EBD9] flex items-center justify-center text-[#386380] mb-4">
                  <span className="material-symbols-outlined text-[28px]">corporate_fare</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0B192C] mb-2">
                  Partner with Us
                </h3>
                <p className="text-xs text-[#5C6470] leading-relaxed mb-6">
                  Collaborate for verified CSR initiatives and institutional social impact projects.
                </p>
              </div>
              <Link
                to="/contact"
                className="w-full py-2.5 px-5 rounded-xl bg-[#eae8e4] hover:bg-[#e4e2de] text-[#0B192C] text-xs font-bold uppercase tracking-wider shadow-xs transition-all text-center"
              >
                Contact CSR Desk
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION & DIRECT CONTACT */}
      <section className="w-full bg-[#0B192C] py-20 lg:py-24 relative overflow-hidden" id="contact-query">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#D4AF37] text-xs uppercase tracking-widest font-semibold border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              Educate · Empower · Elevate
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-white font-bold tracking-tight leading-tight">
              Together, We Can Make Hope Possible.
            </h2>

            <p className="text-sm sm:text-base text-[#c5c6ce] leading-relaxed">
              Every child deserves an education. Every community deserves dignity. Send your query directly to our secretariat at <strong>hopewisefoundation26@gmail.com</strong> or support our ongoing drives.
            </p>
          </div>

          {/* Quick Query Form Card */}
          <div className="mb-12">
            <QuickQueryForm />
          </div>

          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={onOpenDonate}
                className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#c5a059] text-[#0B192C] font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-xl shadow-lg transition-all cursor-pointer"
              >
                <span>Support a Child</span>
                <span className="material-symbols-outlined text-[16px]">favorite</span>
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider px-7 py-3.5 rounded-xl transition-all border border-white/10"
              >
                <span>Full Contact & Secretariat Page</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-[#c5c6ce] text-xs">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#D4AF37] text-[16px]">verified</span>
                Reg. IN-UP53986355713268Y
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <span>Section 80G Tax Exemption Certified</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <span>Inbox: hopewisefoundation26@gmail.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
