import React from 'react';
import { Link } from 'react-router-dom';

export default function Impact({ onOpenDonate }) {
  const impactReports = [
    {
      year: 'FY 2024–2025',
      title: 'Annual Social Impact & Governance Audit',
      description: 'Comprehensive independent assessment of educational scholarship outcomes, mobile clinics triage, and village water assets across 18 operational districts.',
      status: 'Audited & Verified',
      metrics: '42,000+ Direct Beneficiaries'
    },
    {
      year: 'FY 2023–2024',
      title: 'Grassroots Educational Equity Evaluation',
      description: 'Multi-cluster study evaluating retention rates among first-generation secondary school girls supported by Hopewise STEM fellowships.',
      status: 'Published Report',
      metrics: '88% School Retention Rate'
    },
    {
      year: 'FY 2022–2023',
      title: 'Community Self-Reliance Transition Report',
      description: 'Longitudinal analysis detailing 89% of initial intervention units successfully graduating to full local panchayat financial self-sustenance.',
      status: 'Published Report',
      metrics: '48 Self-Sustaining SHGs'
    }
  ];

  const pillars = [
    {
      metric: '42,000+',
      title: 'Students & Youth Educated',
      desc: 'Provided with textbooks, tuition assistance, digital devices, and specialized secondary school tutoring across rural communities.',
      tag: 'K-12 & STEM'
    },
    {
      metric: '45,000+',
      title: 'Clinical Consultations',
      desc: 'Delivered via mobile clinic vans equipped with vital diagnostics, basic medications, and prenatal monitoring in hard-to-reach terrain.',
      tag: 'Primary Health'
    },
    {
      metric: '180,000+',
      title: 'Nutritious Meals Served',
      desc: 'Distributed during drought emergencies and through localized village grain banks preventing seasonal child malnutrition.',
      tag: 'Food Security'
    },
    {
      metric: '3,800+',
      title: 'Women Gaining Income',
      desc: 'Trained in micro-enterprises, handloom weaving, organic farming, and allied rural trades backed by revolving community funds.',
      tag: 'Sovereign Livelihood'
    }
  ];

  return (
    <div className="w-full pt-28 pb-20">
      {/* 1. HERO SECTION */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eae8e4] text-[#0B192C] mb-4 text-xs font-semibold uppercase tracking-widest border border-[#e4e2de]">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
            Measurable Outcomes
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0B192C] font-bold tracking-tight leading-tight mb-6">
            Transparent Ground <span className="italic text-[#386380]">Impact</span>.
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#1E252D] leading-relaxed">
            We hold ourselves to uncompromising standards of transparency and rigor. Every metric represents real human lives empowered with dignity, education, and lasting independence.
          </p>
        </div>
      </section>

      {/* 2. STATS OVERVIEW */}
      <section className="w-full bg-[#0B192C] text-white py-16 lg:py-24">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-12 gap-4 border-b border-white/10">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
                Verified Ground Indicators
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-white font-bold mt-1">
                Data Across Active Clusters
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] border border-white/10">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span>100% Audited Non-Profit Operations</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
            {pillars.map((item) => (
              <div
                key={item.title}
                className="bg-[#0F203C] rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-[#D4AF37] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-1 bg-[#D4AF37] rounded-full mb-6"></div>
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-white block">
                    {item.metric}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white mt-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#c5c6ce] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-[#c5c6ce] uppercase tracking-wider font-semibold">Focus</span>
                  <span className="text-[#D4AF37] font-semibold">{item.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ANNUAL IMPACT & GOVERNANCE REPORTS */}
      <section className="w-full bg-[#fbf9f5] py-20 lg:py-24">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-[#386380] font-bold">
              Accountability & Disclosure
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#0B192C] font-bold mt-1">
              Annual Governance & Impact Reports
            </h2>
            <p className="text-sm text-[#5C6470] mt-2">
              We publish detailed annual disclosures including expenditure allocation, field metrics, and governance charters.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {impactReports.map((report) => (
              <div
                key={report.title}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e4e2de] shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded bg-[#F4EBD9] text-[#0B192C] text-xs font-bold font-mono">
                      {report.year}
                    </span>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                      {report.status}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#0B192C]">
                    {report.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C6470] max-w-xl leading-relaxed">
                    {report.description}
                  </p>
                  <p className="text-xs font-semibold text-[#386380]">
                    Verified Metric: {report.metrics}
                  </p>
                </div>

                <div className="shrink-0">
                  <a
                    href="mailto:hopewisefoundation26@gmail.com?subject=Request Impact Report Document"
                    className="inline-flex items-center gap-2 bg-[#fbf9f5] hover:bg-[#0B192C] hover:text-white text-[#0B192C] border border-[#e4e2de] px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <span>Request Copy</span>
                    <span className="material-symbols-outlined text-[16px]">description</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Section 80G Notice */}
          <div className="mt-14 max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-white border border-[#D4AF37]/40 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-serif text-lg font-bold text-[#0B192C]">
                Section 80G Tax Exemption Certified
              </h4>
              <p className="text-xs text-[#5C6470]">
                All individual and corporate contributions qualify for 50% tax deductions under Section 80G of the Indian Income Tax Act.
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenDonate}
              className="shrink-0 bg-[#D4AF37] hover:bg-[#c5a059] text-[#0B192C] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow-sm transition-all"
            >
              Direct Contribution Info
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
