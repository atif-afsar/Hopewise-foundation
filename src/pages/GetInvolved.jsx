import React from 'react';
import { Link } from 'react-router-dom';
import CommunityForm from '../components/forms/CommunityForm';

export default function GetInvolved({ onOpenDonate }) {
  const volunteerRoles = [
    {
      title: 'Academic & STEM Mentors',
      commitment: '2–4 hrs/week (Remote or In-Person)',
      desc: 'Conduct evening virtual tutoring sessions in mathematics, sciences, and English for first-generation secondary school students.',
      icon: 'school'
    },
    {
      title: 'Visiting Health Specialists',
      commitment: 'Weekend Camps',
      desc: 'Join mobile health van expeditions to provide pediatric, dental, eye, or general physician consultations in rural villages.',
      icon: 'medical_services'
    },
    {
      title: 'Digital & Creative Volunteers',
      commitment: 'Flexible / Project-Based',
      desc: 'Help design educational learning worksheets, translate curriculum materials, or support media communications and storytelling.',
      icon: 'palette'
    },
    {
      title: 'Community Organizers',
      commitment: 'Cluster-Level',
      desc: 'Work directly with village panchayats, conduct grain bank inventory audits, and coordinate safe-haven child protection committees.',
      icon: 'diversity_3'
    }
  ];

  return (
    <div className="w-full pt-28 pb-20">
      {/* 1. HERO SECTION */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eae8e4] text-[#0B192C] text-xs font-semibold uppercase tracking-widest border border-[#e4e2de]">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
              Participate In the Mission
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0B192C] font-bold tracking-tight leading-tight">
              Avenues of Meaningful <span className="italic text-[#386380]">Engagement</span>.
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#1E252D] leading-relaxed">
              Every contribution—whether capital, professional mentorship, or corporate alliance—is structured to maximize grassroots autonomy and self-reliance across underserved regions of India.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#volunteer-form"
                className="inline-flex items-center gap-2 bg-[#0B192C] hover:bg-[#00081c] text-white text-sm font-semibold px-6 py-3.5 rounded-lg shadow-md transition-all"
              >
                <span>Apply as Volunteer</span>
                <span className="material-symbols-outlined text-[18px]">person_add</span>
              </a>
              <button
                type="button"
                onClick={onOpenDonate}
                className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#c5a059] text-[#0B192C] text-sm font-bold px-6 py-3.5 rounded-lg shadow-sm transition-all"
              >
                <span>Direct Support Details</span>
                <span className="material-symbols-outlined text-[18px]">favorite</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-[#eae8e4] border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                alt="Hopewise volunteers working with village children"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 bg-white rounded-xl p-4 shadow-xl border border-[#e4e2de] max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#F4EBD9] flex items-center justify-center text-[#D4AF37]">
                  <span className="material-symbols-outlined text-[24px]">groups</span>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#0B192C]">1,240+ Active Volunteers</h4>
                  <p className="text-xs text-[#5C6470]">Impacting 18 rural districts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE PATHWAYS */}
      <section className="w-full bg-[#fbf9f5] py-20 lg:py-24 border-y border-[#e4e2de]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-[#386380] font-bold">
              Pathways of Engagement
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#0B192C] font-bold mt-1">
              Three Ways to Ignite Enduring Change
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1. Direct Contribution */}
            <div className="bg-white rounded-2xl p-8 border border-[#e4e2de] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37] bg-[#F4EBD9] px-2.5 py-1 rounded">
                  Financial Stewardship
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#0B192C] mt-4 mb-3">
                  Direct Donation
                </h3>
                <p className="text-sm text-[#5C6470] leading-relaxed mb-6">
                  Direct tax-exempt financial contributions fund solar digital classrooms, student nutrition baskets, and community clean-water borewells.
                </p>
                <div className="space-y-2 text-xs text-[#5C6470]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#386380] text-[18px]">verified</span>
                    <span>Section 80G tax benefit certificate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#386380] text-[18px]">receipt_long</span>
                    <span>Bank & UPI with zero transaction fee cut</span>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <button
                  type="button"
                  onClick={onOpenDonate}
                  className="w-full bg-[#D4AF37] hover:bg-[#c5a059] text-[#0B192C] font-bold text-xs uppercase tracking-wider py-3 rounded-lg transition-colors"
                >
                  View Transfer Details
                </button>
              </div>
            </div>

            {/* 2. Volunteer */}
            <div className="bg-white rounded-2xl p-8 border-2 border-[#0F203C] shadow-md flex flex-col justify-between relative">
              <span className="absolute -top-3 right-6 bg-[#0B192C] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">
                Most Active
              </span>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#386380] bg-[#b2dcfe]/40 px-2.5 py-1 rounded">
                  Field & Remote
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#0B192C] mt-4 mb-3">
                  Volunteer & Mentor
                </h3>
                <p className="text-sm text-[#5C6470] leading-relaxed mb-6">
                  Dedicate your skills in teaching, healthcare, counseling, or creative workshops to directly empower underserved rural children.
                </p>
                <div className="space-y-2 text-xs text-[#5C6470]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#386380] text-[18px]">schedule</span>
                    <span>Flexible weekly or weekend commitments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#386380] text-[18px]">badge</span>
                    <span>Official Volunteer Impact Certificate</span>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <a
                  href="#volunteer-form"
                  className="block text-center w-full bg-[#0B192C] hover:bg-[#00081c] text-white font-bold text-xs uppercase tracking-wider py-3 rounded-lg transition-colors"
                >
                  Apply Online Below
                </a>
              </div>
            </div>

            {/* 3. CSR Alliances */}
            <div className="bg-white rounded-2xl p-8 border border-[#e4e2de] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B192C] bg-[#eae8e4] px-2.5 py-1 rounded">
                  Institutional
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#0B192C] mt-4 mb-3">
                  CSR Partnerships
                </h3>
                <p className="text-sm text-[#5C6470] leading-relaxed mb-6">
                  Partner your corporate ESG or CSR mandate with auditable, compliant community programs delivering measurable social return on investment.
                </p>
                <div className="space-y-2 text-xs text-[#5C6470]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#386380] text-[18px]">fact_check</span>
                    <span>Section 135 CSR compliant documentation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#386380] text-[18px]">analytics</span>
                    <span>Quarterly progress & financial auditing</span>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <Link
                  to="/contact"
                  className="block text-center w-full bg-[#fbf9f5] hover:bg-[#eae8e4] text-[#0B192C] border border-[#e4e2de] font-bold text-xs uppercase tracking-wider py-3 rounded-lg transition-colors"
                >
                  Inquire With CSR Desk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VOLUNTEER PROFILES */}
      <section className="w-full bg-white py-20 lg:py-24">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-[#386380] font-bold">
              Volunteer Opportunities
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#0B192C] font-bold mt-1">
              Where Your Talents Make an Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {volunteerRoles.map((role) => (
              <div
                key={role.title}
                className="p-6 rounded-2xl bg-[#fbf9f5] border border-[#e4e2de] flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#386380] mb-4">
                    <span className="material-symbols-outlined text-[24px]">{role.icon}</span>
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#0B192C] mb-1">
                    {role.title}
                  </h3>
                  <span className="text-[11px] font-semibold text-[#D4AF37] block mb-2">
                    {role.commitment}
                  </span>
                  <p className="text-xs text-[#5C6470] leading-relaxed">
                    {role.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. APPLICATION FORM EMBED */}
      <section className="w-full bg-[#fbf9f5] py-20 lg:py-24 border-t border-[#e4e2de]" id="volunteer-form">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <CommunityForm />
        </div>
      </section>
    </div>
  );
}
