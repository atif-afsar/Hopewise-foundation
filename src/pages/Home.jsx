import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import heroStudentsImg from '../assets/images/hero_students.jpg';
import communityDialogueImg from '../assets/images/community_dialogue.jpg';
import scholarRajeshwariImg from '../assets/images/scholar_rajeshwari.jpg';
import artisanSunitaImg from '../assets/images/artisan_sunita.jpg';
import { CORE_MEMBERS, OFFICIAL_CERT_NUMBER } from '../data/membersData';

export default function Home({ onOpenDonate }) {
  const focusAreas = [
    {
      title: 'Education & Scholarships',
      icon: 'school',
      badge: 'Primary Pillar',
      desc: 'Equipping promising young minds with comprehensive tuition assistance, books, STEM mentorship, and digital laboratory access.',
      stat: '12,000+ Scholars',
      link: '/our-work'
    },
    {
      title: 'Healthcare & Well-being',
      icon: 'medical_services',
      badge: 'Vital Care',
      desc: 'Mobile diagnostic clinics, seasonal vaccination camps, maternal triage centers, and preventive health literacy in hard-to-reach pockets.',
      stat: '45,000+ Checkups',
      link: '/our-work'
    },
    {
      title: 'Food & Essential Support',
      icon: 'nutrition',
      badge: 'Relief & Nourishment',
      desc: 'Eradicating seasonal hunger through decentralized grain granaries, maternal nutrition hampers, and emergency drought food relief drives.',
      stat: '180,000+ Meals',
      link: '/our-work'
    },
    {
      title: 'Women Empowerment',
      icon: 'female',
      badge: 'Sovereign Agency',
      desc: 'Micro-enterprise incubation, artisan self-help cooperatives, financial literacy drives, and vocational tailoring collectives.',
      stat: '3,800+ Women Entrepreneurs',
      link: '/our-work'
    },
    {
      title: 'Child Welfare & Protection',
      icon: 'child_care',
      badge: 'Safe Havens',
      desc: 'Safe shelter networks, trauma counselling, anti-child-labour vigilance taskforces, and inclusive childhood learning hubs.',
      stat: '28 Safe Spaces',
      link: '/our-work'
    },
    {
      title: 'Community Infrastructure',
      icon: 'water_drop',
      badge: 'Lasting Resilience',
      desc: 'Solar microgrids for remote schools, clean-water filtration borewells, and village-governed sustainable ecological assets.',
      stat: '42 Village Borewells',
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
      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-[#fbf9f5] pt-32 pb-20 lg:pt-36 lg:pb-28">
        {/* Ambient Backdrop Highlights */}
        <div className="absolute -top-32 right-0 w-96 h-96 rounded-full bg-[#F4EBD9]/40 blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-[#b2dcfe]/20 blur-3xl pointer-events-none -z-10" />

        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-6"
            >
              {/* Sovereign Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eae8e4]/80 text-[#0B192C] mb-5 shadow-sm border border-[#e4e2de]">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                <span className="font-sans text-xs uppercase tracking-widest text-[#0B192C] font-semibold">
                  Hopewise Foundation · Empowering Futures
                </span>
              </div>

              {/* Hero Headline */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0B192C] font-bold leading-[1.15] mb-5 tracking-tight">
                Every Life Deserves a <span className="italic font-normal text-[#386380]">Chance</span> to Thrive.
              </h1>

              {/* Narrative Subtext */}
              <p className="font-sans text-base sm:text-lg text-[#1E252D] max-w-xl mb-8 leading-relaxed">
                Together, we create sustained pathways to dignity—empowering marginalized communities, securing education for children, and cultivating enduring self-reliance across India's heartlands.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8">
                <button
                  type="button"
                  onClick={onOpenDonate}
                  className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#c5a059] text-[#0B192C] font-sans text-sm font-bold px-7 py-3.5 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>Support Our Mission</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
                <Link
                  to="/our-work"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#f5f3ef] text-[#0B192C] font-sans text-sm font-semibold px-6 py-3.5 rounded-lg shadow-sm hover:shadow border border-[#e4e2de] transition-all duration-200"
                >
                  <span>Discover Our Work</span>
                  <span className="material-symbols-outlined text-[18px]">explore</span>
                </Link>
              </div>

              {/* Trust Credentials Strip */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-[#5C6470] text-xs pt-1 border-t border-[#e4e2de]/60 w-full">
                <div className="flex items-center gap-1.5 font-semibold uppercase tracking-wider text-[#0B192C]">
                  <span className="material-symbols-outlined text-[#D4AF37] text-[18px]">verified</span>
                  <span>80G Tax Exemption Certified</span>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5c6ce] hidden sm:block" />
                <div className="flex items-center gap-1.5 font-semibold uppercase tracking-wider text-[#386380]">
                  <span className="material-symbols-outlined text-[#386380] text-[18px]">account_balance</span>
                  <span>100% Transparency Guarantee</span>
                </div>
              </div>
            </motion.div>

            {/* Right Visual Presentation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5 relative mt-6 lg:mt-0"
            >
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-[#eae8e4] aspect-[4/3] lg:aspect-[5/4] border-4 border-white">
                <img
                  alt="Hopewise classroom learning environment in community school"
                  className="w-full h-full object-cover"
                  src={heroStudentsImg}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Metric Badge */}
              <div className="absolute -bottom-6 -left-2 sm:left-4 bg-white rounded-xl p-4 sm:p-5 shadow-2xl max-w-xs flex items-center gap-3.5 border border-[#e4e2de]">
                <div className="w-12 h-12 rounded-lg bg-[#F4EBD9] flex items-center justify-center shrink-0 text-[#0B192C]">
                  <span className="material-symbols-outlined text-[#D4AF37] text-[28px]">pie_chart</span>
                </div>
                <div>
                  <div className="font-serif text-base sm:text-lg text-[#0B192C] font-bold leading-tight">
                    94% Direct Funds
                  </div>
                  <p className="text-xs text-[#5C6470] leading-tight mt-0.5">
                    Disbursed directly into grassroots initiatives & student aid.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
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
                Turning Compassion Into Measurable, Enduring Action.
              </h2>
              <p className="text-base text-[#1E252D] leading-relaxed">
                Hopewise Foundation stands as a dedicated institutional beacon, engineered to bridge systemic disparities across India's remote and disenfranchised ecosystems. Founded on the principle that charity is most meaningful when it unlocks genuine autonomy, we craft generational solutions rather than transient aid.
              </p>
              <p className="text-sm text-[#5C6470] leading-relaxed">
                Through sustained village dialogues, grassroots educational endowments, community-led preventive clinics, and micro-entrepreneurship incubation, we restore agency directly to families.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#fbf9f5] rounded-xl border border-[#e4e2de]">
                  <span className="material-symbols-outlined text-[#D4AF37] text-[26px] mb-1">balance</span>
                  <h3 className="font-serif font-bold text-sm text-[#0B192C]">Dignity First</h3>
                  <p className="text-xs text-[#5C6470] mt-1">
                    Every community decides its own priorities through local councils.
                  </p>
                </div>
                <div className="p-4 bg-[#fbf9f5] rounded-xl border border-[#e4e2de]">
                  <span className="material-symbols-outlined text-[#386380] text-[26px] mb-1">handshake</span>
                  <h3 className="font-serif font-bold text-sm text-[#0B192C]">Civic Resilience</h3>
                  <p className="text-xs text-[#5C6470] mt-1">
                    Fostering participatory governance and grassroots leadership.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-[#0F203C] hover:bg-[#0B192C] text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-sm transition-all"
                >
                  <span>Learn About Our Heritage</span>
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
                <span className="italic">Community dialogue in grassroots initiatives, Rural Hubs</span>
                <span className="uppercase tracking-wider text-[#386380] font-semibold">Participatory Action</span>
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
                  Where Hope Meets Action
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#0B192C] font-bold tracking-tight">
                Pillars of Sustainable Transformation
              </h2>
            </div>
            <p className="text-sm text-[#5C6470] max-w-md">
              Targeted interventions engineered to dismantle institutional cycles of poverty through interconnected programs.
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

      {/* 5.5. FOUNDATION TEAM & MEMBERS SHOWCASE */}
      <section className="w-full bg-white py-20 lg:py-24 border-y border-[#e4e2de]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
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
              <span>View All 16 Members &amp; Certificates</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>

          {/* Featured 4 Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_MEMBERS.slice(0, 4).map((member) => (
              <div
                key={member.id}
                className="group bg-[#fbf9f5] rounded-2xl border border-[#e4e2de] hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-square overflow-hidden bg-[#eae8e4]">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                    <div className="absolute top-3 right-3 bg-[#0B192C]/90 backdrop-blur-sm text-[#D4AF37] text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 border border-white/20">
                      <span className="material-symbols-outlined text-[12px]">verified</span>
                      <span>Inducted</span>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <span className="text-[11px] font-semibold text-white/90 bg-black/40 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-white/10">
                        {member.badge}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif font-bold text-base text-[#0B192C] group-hover:text-[#1B4965] transition-colors leading-tight mb-1">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#386380] mb-2">
                      {member.role}
                    </p>
                    <p className="text-xs text-[#5C6470] line-clamp-2 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
                <div className="p-5 pt-0">
                  <Link
                    to="/about#team"
                    className="w-full py-2 bg-white hover:bg-[#0B192C] text-[#0B192C] hover:text-white rounded-lg text-xs font-bold border border-[#e4e2de] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Inspect Certificate</span>
                    <span className="material-symbols-outlined text-[14px]">visibility</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Member Avatars Strip */}
          <div className="mt-8 p-4 bg-[#fbf9f5] rounded-2xl border border-[#e4e2de] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2 overflow-hidden">
                {CORE_MEMBERS.map((m) => (
                  <img
                    key={m.id}
                    src={m.avatar}
                    alt={m.name}
                    title={`${m.name} (${m.role})`}
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                  />
                ))}
              </div>
              <div className="text-xs text-[#0B192C] font-semibold">
                <span>16 Active Foundation Leaders &amp; 22 Induction Certificates</span>
              </div>
            </div>

            <Link
              to="/about#team"
              className="text-xs font-bold text-[#386380] hover:text-[#0B192C] flex items-center gap-1 transition-colors"
            >
              <span>Explore Full Roster &amp; Induction Gallery</span>
              <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. ENGAGEMENT PATHWAYS */}
      <section className="w-full bg-[#fbf9f5] py-20 lg:py-24" id="get-involved">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center mb-14">
            <span className="text-xs uppercase tracking-widest text-[#386380] font-bold">
              Be the Reason Someone Smiles
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#0B192C] font-bold mt-1">
              Meaningful Avenues of Engagement
            </h2>
            <p className="text-sm text-[#5C6470] mt-2">
              Whether through financial patronage, personal expertise, or institutional alliance, your participation fuels lasting change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pathway 1 */}
            <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-center items-center border border-[#e4e2de]">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#F4EBD9] flex items-center justify-center text-[#D4AF37] mb-5">
                  <span className="material-symbols-outlined text-[32px]">volunteer_activism</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#0B192C] mb-2">
                  Direct Foundation Contribution
                </h3>
                <p className="text-sm text-[#5C6470] leading-relaxed mb-6">
                  Support through verified direct bank transfer or UPI with 100% allocation into education kits, medical camps, and food packs.
                </p>
              </div>
              <button
                type="button"
                onClick={onOpenDonate}
                className="w-full py-3 px-6 rounded-lg bg-[#D4AF37] hover:bg-[#c5a059] text-[#0B192C] text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
              >
                Contribute Now (80G)
              </button>
            </div>

            {/* Pathway 2 */}
            <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-center items-center border border-[#e4e2de]">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#f5f3ef] flex items-center justify-center text-[#386380] mb-5">
                  <span className="material-symbols-outlined text-[32px]">group_add</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#0B192C] mb-2">
                  Volunteer & Mentor
                </h3>
                <p className="text-sm text-[#5C6470] leading-relaxed mb-6">
                  Dedicate your time and skills. Mentor first-generation college students, support health camps, or volunteer on the ground.
                </p>
              </div>
              <Link
                to="/join-community"
                className="w-full py-3 px-6 rounded-lg bg-[#0F203C] hover:bg-[#0B192C] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all text-center"
              >
                Join Community
              </Link>
            </div>

            {/* Pathway 3 */}
            <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-center items-center border border-[#e4e2de]">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#F4EBD9] flex items-center justify-center text-[#386380] mb-5">
                  <span className="material-symbols-outlined text-[32px]">corporate_fare</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#0B192C] mb-2">
                  Corporate CSR Alliance
                </h3>
                <p className="text-sm text-[#5C6470] leading-relaxed mb-6">
                  Align company CSR and ESG commitments with auditable, compliant grassroots projects delivering verified social impact.
                </p>
              </div>
              <Link
                to="/contact"
                className="w-full py-3 px-6 rounded-lg bg-[#eae8e4] hover:bg-[#e4e2de] text-[#0B192C] text-xs font-bold uppercase tracking-wider shadow-sm transition-all text-center"
              >
                Inquire With Desk
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL SOVEREIGN CALL TO ACTION */}
      <section className="w-full bg-[#0B192C] py-20 lg:py-28 relative overflow-hidden" id="donate">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#D4AF37] text-xs uppercase tracking-widest font-semibold backdrop-blur-sm border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              Your Partnership Writes Tomorrow's Story
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-white font-bold tracking-tight leading-tight">
              Together, We Can Make Hope Possible.
            </h2>

            <p className="text-base sm:text-lg text-[#c5c6ce] max-w-2xl mx-auto leading-relaxed">
              Your generosity directly funds accredited scholarships, mobile clinics, and self-reliance collectives across India's most underserved regions.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={onOpenDonate}
                className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#c5a059] text-[#0B192C] font-sans text-sm font-bold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Direct Support Details</span>
                <span className="material-symbols-outlined text-[18px]">favorite</span>
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-sans text-sm font-semibold px-8 py-4 rounded-lg shadow-sm transition-all duration-200 backdrop-blur-sm border border-white/10"
              >
                <span>Connect With Secretariat</span>
                <span className="material-symbols-outlined text-[18px]">mail</span>
              </Link>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-[#c5c6ce] text-xs">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#D4AF37] text-[18px]">lock</span>
                Direct Official Transfers Only
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <span>Section 80G Tax Exemption Receipts Generated Directly</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
