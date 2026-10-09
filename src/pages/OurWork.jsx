import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function OurWork({ onOpenDonate }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const programs = [
    {
      id: 'education',
      title: 'Education & Scholarships',
      category: 'Education',
      badge: 'Primary Pillar',
      tagline: 'Knowledge & Growth',
      description: 'Expanding access to foundational learning, secondary STEM mentorships, and merit-cum-means financial stipends for adolescent students in remote clusters.',
      outcomes: [
        '12,000+ Students supported across elementary & secondary schools',
        '34 Rural STEM & Digital Literacy Centers established',
        'Special higher education fellowships for first-generation college scholars'
      ],
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
      icon: 'school'
    },
    {
      id: 'healthcare',
      title: 'Healthcare & Well-being',
      category: 'Healthcare',
      badge: 'Vital Care',
      tagline: 'Clinical Resilience',
      description: 'Mobile diagnostic clinics, seasonal vaccination camps, maternal triage centers, and preventive health literacy in hard-to-reach pockets.',
      outcomes: [
        '45,000+ Free clinical consultations delivered',
        '12 Mobile Dispensaries reaching off-road tribal villages',
        'Maternal & infant health monitoring with local ASHAs'
      ],
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
      icon: 'medical_services'
    },
    {
      id: 'food',
      title: 'Food & Essential Support',
      category: 'Nutrition',
      badge: 'Nutrition & Relief',
      tagline: 'Food Security',
      description: 'Eradicating seasonal hunger through decentralized grain granaries, maternal nutrition hampers, and emergency drought food relief drives.',
      outcomes: [
        '180,000+ Nutritious warm meals distributed during crises',
        'Village Grain Banks managing community food reserves',
        'High-protein nutrition hampers for expectant mothers'
      ],
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
      icon: 'nutrition'
    },
    {
      id: 'women',
      title: 'Women Empowerment',
      category: 'Livelihoods',
      badge: 'Sovereign Agency',
      tagline: 'Economic Dignity',
      description: 'Micro-enterprise incubation, artisan self-help cooperatives, financial literacy drives, and vocational tailoring collectives giving women financial sovereignty.',
      outcomes: [
        '3,800+ Women self-employed through vocational micro-grants',
        '48 Self-Help Groups (SHGs) linked to formal banking',
        'Market linkage partnerships for rural handicraft artisans'
      ],
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      icon: 'female'
    },
    {
      id: 'children',
      title: 'Child Welfare & Protection',
      category: 'Child Welfare',
      badge: 'Safe Havens',
      tagline: 'Holistic Childhood',
      description: 'Safe shelter networks, trauma counselling, anti-child-labour vigilance taskforces, and inclusive childhood recreation and learning hubs.',
      outcomes: [
        '28 Village Child Rights Committees active',
        'Zero-tolerance child labor monitoring across quarry clusters',
        'Psychosocial counseling and creative learning spaces'
      ],
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
      icon: 'child_care'
    },
    {
      id: 'infrastructure',
      title: 'Community Infrastructure',
      category: 'Infrastructure',
      badge: 'Lasting Resilience',
      tagline: 'Civic Systems',
      description: 'Decentralized solar microgrids for school classrooms, deep-borewell clean drinking water filters, and village-owned sustainable assets.',
      outcomes: [
        '42 Clean Drinking Water Borewells commissioned',
        '18 Rural school solar microgrids eliminating power blackouts',
        '100% maintenance operated by trained youth panchayats'
      ],
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
      icon: 'water_drop'
    }
  ];

  const categories = ['All', 'Education', 'Healthcare', 'Nutrition', 'Livelihoods', 'Child Welfare', 'Infrastructure'];

  const filteredPrograms = activeCategory === 'All'
    ? programs
    : programs.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full pt-28 pb-20">
      {/* 1. HERO HEADER */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eae8e4] text-[#0B192C] mb-4 text-xs font-semibold uppercase tracking-widest border border-[#e4e2de]">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
            Programs & Initiatives
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0B192C] font-bold tracking-tight leading-tight mb-6">
            Pillars of Groundwork & <span className="italic text-[#386380]">Transformation</span>.
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#1E252D] leading-relaxed">
            Our programmatic focus areas are deliberately structured not as temporary relief, but as foundational systems designed for enduring village-led self-reliance.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-[#0B192C] text-white shadow-sm'
                  : 'bg-white text-[#5C6470] hover:text-[#0B192C] border border-[#e4e2de] hover:bg-[#fbf9f5]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 2. PROGRAM CARDS GRID */}
      <section className="w-full bg-[#fbf9f5] py-12 lg:py-16">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => (
              <motion.article
                key={program.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden border border-[#e4e2de] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-[#eae8e4]">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#0B192C] text-white text-[11px] font-bold px-3 py-1 rounded tracking-wider uppercase">
                      {program.badge}
                    </span>
                  </div>

                  <div className="p-6 sm:p-7 space-y-3">
                    <p className="text-xs uppercase tracking-wider text-[#D4AF37] font-bold">
                      {program.tagline}
                    </p>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0B192C] group-hover:text-[#386380] transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-sm text-[#5C6470] leading-relaxed">
                      {program.description}
                    </p>

                    <div className="pt-3 border-t border-[#f5f3ef] space-y-2">
                      <span className="text-xs font-bold text-[#0B192C] uppercase tracking-wider block">
                        Direct Ground Outcomes:
                      </span>
                      {program.outcomes.map((out, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#5C6470]">
                          <span className="material-symbols-outlined text-[16px] text-[#386380] shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <span>{out}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={onOpenDonate}
                    className="w-full py-2.5 px-4 rounded-lg bg-[#fbf9f5] hover:bg-[#D4AF37] hover:text-[#0B192C] text-[#0B192C] border border-[#e4e2de] text-xs font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Support This Program</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. METHODOLOGY: 4-STAGE INTERVENTION MODEL */}
      <section className="w-full bg-white py-20 lg:py-24 border-t border-[#e4e2de]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-[#386380] font-bold">
              Execution Rigor
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#0B192C] font-bold mt-1">
              How We Deliver Ground Transformation
            </h2>
            <p className="text-sm text-[#5C6470] mt-2">
              Every initiative adheres to our 4-stage participatory governance lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#fbf9f5] border border-[#e4e2de] relative">
              <span className="font-serif text-3xl font-bold text-[#D4AF37] block mb-2">01</span>
              <h3 className="font-serif text-lg font-bold text-[#0B192C] mb-2">Needs Assessment</h3>
              <p className="text-xs text-[#5C6470] leading-relaxed">
                Direct village sabha dialogues and household audits to identify systemic bottlenecks, not just symptoms.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#fbf9f5] border border-[#e4e2de] relative">
              <span className="font-serif text-3xl font-bold text-[#D4AF37] block mb-2">02</span>
              <h3 className="font-serif text-lg font-bold text-[#0B192C] mb-2">Co-Design</h3>
              <p className="text-xs text-[#5C6470] leading-relaxed">
                Local stakeholders form project committees that decide budget allocations, logistics, and milestone tracking.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#fbf9f5] border border-[#e4e2de] relative">
              <span className="font-serif text-3xl font-bold text-[#D4AF37] block mb-2">03</span>
              <h3 className="font-serif text-lg font-bold text-[#0B192C] mb-2">Field Execution</h3>
              <p className="text-xs text-[#5C6470] leading-relaxed">
                Mobilization of local talent, teachers, health workers, and suppliers with full financial transparency.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#fbf9f5] border border-[#e4e2de] relative">
              <span className="font-serif text-3xl font-bold text-[#D4AF37] block mb-2">04</span>
              <h3 className="font-serif text-lg font-bold text-[#0B192C] mb-2">Sustainable Exit</h3>
              <p className="text-xs text-[#5C6470] leading-relaxed">
                Assets and programs are transferred completely to self-sustaining village councils for perpetual ownership.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
