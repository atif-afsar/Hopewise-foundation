import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import foundingClassroomImg from '../assets/images/founding_classroom.jpg';
import MembersSection from '../components/team/MembersSection';

export default function About({ onOpenDonate }) {
  const coreValues = [
    {
      title: 'Grassroots Sovereignty',
      desc: 'We never impose paternalistic solutions. Interventions are co-designed, managed, and ultimately owned by village councils and local beneficiaries.',
      icon: 'groups'
    },
    {
      title: 'Radical Transparency',
      desc: 'Every single rupee collected is tracked with auditable ledger reports, independent field monitoring, and transparent impact disclosures.',
      icon: 'verified'
    },
    {
      title: 'Generational Horizon',
      desc: 'Rather than distributing transient relief kits, we invest in foundational skills, health resilience, and ecological stability that endure for decades.',
      icon: 'all_inclusive'
    },
    {
      title: 'Dignity Over Dependency',
      desc: 'True empowerment occurs when a community no longer needs our assistance. Our metric of success is sustainable community exit.',
      icon: 'military_tech'
    }
  ];

  const milestones = [
    { number: '42,000+', label: 'Students Supported', subtext: 'K-12 & higher education fellowships' },
    { number: '18', label: 'States Reached', subtext: 'Active clusters across rural India' },
    { number: '89%', label: 'Self-Sustaining Units', subtext: 'Transitioned to local village governance' },
    { number: '1,240+', label: 'Active Field Volunteers', subtext: 'Youth mentors & clinical professionals' }
  ];

  return (
    <div className="w-full pt-28 pb-20">
      {/* 1. HERO SECTION */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eae8e4] text-[#0B192C] mb-4 text-xs font-semibold uppercase tracking-widest border border-[#e4e2de]">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
            About Hopewise Foundation
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0B192C] font-bold tracking-tight leading-tight mb-6">
            Architects of Lasting <span className="italic text-[#386380]">Human Dignity</span>.
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#1E252D] leading-relaxed">
            Founded on the conviction that authentic charity must unlock permanent autonomy, Hopewise Foundation engineers deep, grassroots systems across education, healthcare, and livelihood development across India.
          </p>
        </div>
      </section>

      {/* 2. FOUNDING STORY */}
      <section className="w-full bg-white py-16 lg:py-24 border-y border-[#e4e2de]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] bg-[#eae8e4] border border-[#e4e2de]">
                <img
                  src={foundingClassroomImg}
                  alt="Rural students learning in outdoor library study circle"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 bg-[#0B192C] text-white p-5 rounded-2xl shadow-xl max-w-xs border border-white/10 hidden sm:block">
                <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-bold block mb-1">
                  Established 2011
                </span>
                <p className="text-xs text-[#c5c6ce] leading-relaxed">
                  From a solitary village study circle to an institutional movement empowering thousands.
                </p>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-0.5 w-8 bg-[#D4AF37] inline-block" />
                <span className="text-xs uppercase tracking-widest text-[#386380] font-bold">
                  Foundational Architecture
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl text-[#0B192C] font-bold tracking-tight">
                How Our Journey Began
              </h2>

              <p className="text-base text-[#1E252D] leading-relaxed">
                In 2011, a small cohort of university lecturers and rural development volunteers journeyed into the tribal belts of central India to document student attrition in isolated primary schools. What they discovered was not a deficit of aspiration, but a total absence of supportive infrastructure.
              </p>

              <blockquote className="p-6 bg-[#F4EBD9]/50 rounded-xl border-l-4 border-[#D4AF37] text-[#0B192C] font-serif italic text-base sm:text-lg leading-relaxed">
                "What started as a spontaneous initiative to support remote tribal classrooms has grown into an institutional alliance transforming education, healthcare, and sovereign livelihoods."
              </blockquote>

              <p className="text-sm text-[#5C6470] leading-relaxed">
                We resolved never to impose top-down philanthropy. Hopewise Foundation took shape not as an external benefactor, but as an enabling companion. By establishing participatory community councils, we ensured that every school rehabilitated, every health clinic routed, and every artisan cooperative seeded would remain governed by the very people it serves.
              </p>

              {/* Milestones grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#e4e2de]">
                {milestones.map((m) => (
                  <div key={m.label} className="p-4 bg-[#fbf9f5] rounded-xl border border-[#e4e2de]">
                    <span className="font-serif font-bold text-2xl text-[#0B192C] block">
                      {m.number}
                    </span>
                    <span className="text-xs font-semibold text-[#386380] mt-1 block">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="w-full bg-[#fbf9f5] py-20 lg:py-24">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-[#386380] font-bold">
              Guiding Purpose
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#0B192C] font-bold mt-1">
              Our North Star
            </h2>
            <p className="text-sm text-[#5C6470] mt-2">
              Two unwavering pillars directing our strategy, ethical compass, and allocation of institutional resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border-t-4 border-[#0F203C] border-x border-b border-[#e4e2de] flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-[#f5f3ef] flex items-center justify-center text-[#0B192C] mb-6">
                  <span className="material-symbols-outlined text-[32px]">explore</span>
                </div>
                <span className="text-xs uppercase tracking-widest text-[#386380] font-bold">
                  The Mandate
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#0B192C] mt-1 mb-4">
                  Our Mission
                </h3>
                <p className="text-base text-[#1E252D] leading-relaxed">
                  To empower marginalized individuals and underserved communities through accessible education, preventive healthcare, and sovereign economic opportunities—catalyzing enduring self-reliance and breaking intergenerational cycles of disadvantage.
                </p>
              </div>
              <div className="pt-8 mt-8 border-t border-[#f5f3ef] flex items-center gap-2 text-xs font-semibold text-[#5C6470]">
                <span className="material-symbols-outlined text-[#386380] text-[20px]">task_alt</span>
                <span>Measurable Grassroots Milestones</span>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border-t-4 border-[#D4AF37] border-x border-b border-[#e4e2de] flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-[#F4EBD9] flex items-center justify-center text-[#D4AF37] mb-6">
                  <span className="material-symbols-outlined text-[32px]">wb_sunny</span>
                </div>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
                  The Horizon
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#0B192C] mt-1 mb-4">
                  Our Vision
                </h3>
                <p className="text-base text-[#1E252D] leading-relaxed">
                  A world where every human being—regardless of geography, gender, or economic circumstance—has the sovereign opportunity to live with uncompromised dignity, realize their fullest human potential, and contribute meaningfully to civil society.
                </p>
              </div>
              <div className="pt-8 mt-8 border-t border-[#f5f3ef] flex items-center gap-2 text-xs font-semibold text-[#5C6470]">
                <span className="material-symbols-outlined text-[#D4AF37] text-[20px]">public</span>
                <span>Intergenerational Equality & Justice</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE INSTITUTIONAL VALUES */}
      <section className="w-full bg-white py-20 lg:py-24 border-y border-[#e4e2de]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-xs uppercase tracking-widest text-[#386380] font-bold">
              Ethical Pillars
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#0B192C] font-bold mt-1">
              Core Values That Guide Every Step
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val) => (
              <div
                key={val.title}
                className="p-6 rounded-2xl bg-[#fbf9f5] border border-[#e4e2de] hover:border-[#D4AF37] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#0B192C] mb-4">
                    <span className="material-symbols-outlined text-[24px] text-[#386380]">{val.icon}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#0B192C] mb-2">{val.title}</h3>
                  <p className="text-xs text-[#5C6470] leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TEAM & MEMBERS SECTION */}
      <MembersSection />

      {/* 6. CTA */}
      <section className="w-full bg-[#0B192C] text-white py-16 lg:py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold mb-4">
            Join Hands With Hopewise Foundation
          </h2>
          <p className="text-sm sm:text-base text-[#c5c6ce] mb-8 leading-relaxed">
            Whether you are an individual wanting to volunteer, a donor seeking 80G tax exemption, or a CSR team looking for auditable impact, we welcome you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenDonate}
              className="bg-[#D4AF37] hover:bg-[#c5a059] text-[#0B192C] font-bold px-7 py-3.5 rounded-lg text-sm shadow transition-all"
            >
              Support Our Projects
            </button>
            <Link
              to="/join-community"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-lg text-sm border border-white/20 transition-all"
            >
              Become a Community Member
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
