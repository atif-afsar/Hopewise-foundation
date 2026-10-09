import React from 'react';
import CommunityForm from '../components/forms/CommunityForm';

export default function JoinCommunity() {
  const memberPerks = [
    {
      title: 'Monthly Mission Circles',
      desc: 'Participate in virtual interactive roundtable calls with our ground directors and grassroots community leaders.',
      icon: 'forum'
    },
    {
      title: 'Direct Mentorship Linkage',
      desc: 'Get paired with aspiring rural high-school and college scholars seeking academic and career guidance.',
      icon: 'school'
    },
    {
      title: 'Field Expedition Access',
      desc: 'Option to join scheduled volunteer visits to community clinics, learning centers, and village borewell sites.',
      icon: 'explore'
    },
    {
      title: 'Verified Impact Recognition',
      desc: 'Receive formal certificates of contribution and service credits recognized by non-profit and educational bodies.',
      icon: 'workspace_premium'
    }
  ];

  return (
    <div className="w-full pt-28 pb-20">
      {/* 1. HERO SECTION */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eae8e4] text-[#0B192C] mb-4 text-xs font-semibold uppercase tracking-widest border border-[#e4e2de]">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
            Community Network
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0B192C] font-bold tracking-tight leading-tight mb-6">
            Join the Hopewise <span className="italic text-[#386380]">Community</span>.
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#1E252D] leading-relaxed">
            Become a part of our national collective of educators, doctors, youth leaders, and patrons uniting to build self-reliant rural communities across India.
          </p>
        </div>
      </section>

      {/* 2. MEMBER BENEFITS */}
      <section className="w-full bg-[#fbf9f5] py-16 border-y border-[#e4e2de]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-12">
            <span className="text-xs uppercase tracking-widest text-[#386380] font-bold">
              What Community Members Do
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#0B192C] font-bold mt-1">
              Engagement Opportunities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {memberPerks.map((p) => (
              <div
                key={p.title}
                className="bg-white p-6 rounded-2xl border border-[#e4e2de] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F4EBD9] flex items-center justify-center text-[#D4AF37] mb-4">
                    <span className="material-symbols-outlined text-[24px]">{p.icon}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#0B192C] mb-2">{p.title}</h3>
                  <p className="text-xs text-[#5C6470] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. REGISTRATION FORM */}
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <CommunityForm />
        </div>
      </section>
    </div>
  );
}
