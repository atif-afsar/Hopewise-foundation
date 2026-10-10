import React, { useState } from 'react';
import ContactForm from '../components/forms/ContactForm';

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'Are donations to Hopewise Foundation eligible for tax deduction?',
      a: 'Yes. Hopewise Foundation is registered under Section 80G of the Indian Income Tax Act. All eligible Indian donors receive a 50% tax deduction on their contributions, accompanied by an official digital certificate.'
    },
    {
      q: 'How does Hopewise Foundation disburse and track contributions?',
      a: 'Over 94% of our received funds are directly deployed into village programs, school learning kits, mobile clinic fuel/supplies, and community water projects. Financial ledgers are independently audited and published annually.'
    },
    {
      q: 'Can I volunteer remotely if I cannot travel to field clusters?',
      a: 'Absolutely. Many of our academic mentors, curriculum translators, digital teachers, and administrative supporters contribute 2 to 4 hours per week entirely online from anywhere in India and globally.'
    },
    {
      q: 'How can corporate organizations partner for Section 135 CSR projects?',
      a: 'We provide end-to-end Section 135 CSR compliance documentation, quarterly monitoring milestones, and third-party Social Return on Investment (SROI) audits tailored to corporate sustainability mandates.'
    }
  ];

  return (
    <div className="w-full pt-28 pb-20">
      {/* 1. HERO SECTION */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eae8e4] text-[#0B192C] mb-3 text-xs font-semibold uppercase tracking-widest border border-[#e4e2de]">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
            We Are Here to Help
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#0B192C] font-bold tracking-tight leading-tight mb-4">
            Get in Touch With <span className="italic text-[#386380]">Hopewise</span>
          </h1>
          <p className="font-sans text-base text-[#5C6470] leading-relaxed">
            Have a question, want to volunteer, or support our community programs? Reach out directly to our team.
          </p>
        </div>
      </section>

      {/* 2. FOUR CONTACT CARDS */}
      <section className="w-full bg-[#fbf9f5] py-12 border-y border-[#e4e2de]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Email */}
            <div className="bg-white rounded-2xl p-6 border border-[#e4e2de] shadow-xs flex flex-col justify-between hover:border-[#D4AF37] transition-all">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#F4EBD9] flex items-center justify-center text-[#D4AF37] mb-4">
                  <span className="material-symbols-outlined text-[22px]">mail</span>
                </div>
                <span className="text-[11px] uppercase tracking-wider text-[#386380] font-bold">
                  Email Desk
                </span>
                <h3 className="font-serif text-base font-bold text-[#0B192C] mt-1 mb-2">
                  Write to Us
                </h3>
                <a
                  href="mailto:hopewisefoundation26@gmail.com"
                  className="text-xs font-semibold text-[#0B192C] hover:text-[#386380] transition-colors break-all block"
                >
                  hopewisefoundation26@gmail.com
                </a>
              </div>
              <p className="text-[11px] text-[#5C6470] pt-3 mt-3 border-t border-[#f5f3ef]">
                Fast response within 24 hours.
              </p>
            </div>

            {/* Card 2: Phone & WhatsApp */}
            <div className="bg-white rounded-2xl p-6 border border-[#e4e2de] shadow-xs flex flex-col justify-between hover:border-[#D4AF37] transition-all">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#f5f3ef] flex items-center justify-center text-[#386380] mb-4">
                  <span className="material-symbols-outlined text-[22px]">call</span>
                </div>
                <span className="text-[11px] uppercase tracking-wider text-[#386380] font-bold">
                  Call &amp; WhatsApp
                </span>
                <h3 className="font-serif text-base font-bold text-[#0B192C] mt-1 mb-2">
                  Direct Line
                </h3>
                <a
                  href="tel:+919084690469"
                  className="text-sm font-semibold text-[#0B192C] hover:text-[#386380] transition-colors block mb-1.5"
                >
                  +91 90846 90469
                </a>
                <a
                  href="https://wa.me/919084690469"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#25D366] hover:underline"
                >
                  <span className="material-symbols-outlined text-[15px]">chat</span>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
              <p className="text-[11px] text-[#5C6470] pt-3 mt-3 border-t border-[#f5f3ef]">
                Mon – Sat, 9:00 AM – 7:00 PM.
              </p>
            </div>

            {/* Card 3: Instagram */}
            <div className="bg-white rounded-2xl p-6 border border-[#e4e2de] shadow-xs flex flex-col justify-between hover:border-[#D4AF37] transition-all">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#F4EBD9] flex items-center justify-center text-[#D4AF37] mb-4">
                  <span className="material-symbols-outlined text-[22px]">photo_camera</span>
                </div>
                <span className="text-[11px] uppercase tracking-wider text-[#386380] font-bold">
                  Instagram
                </span>
                <h3 className="font-serif text-base font-bold text-[#0B192C] mt-1 mb-2">
                  Official Profile
                </h3>
                <a
                  href="https://www.instagram.com/hopewisefoundation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#0B192C] hover:text-[#D4AF37] transition-colors block mb-1.5"
                >
                  @hopewisefoundation
                </a>
                <a
                  href="https://www.instagram.com/hopewisefoundation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#386380] hover:text-[#0B192C]"
                >
                  <span>Follow on Instagram</span>
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>
              </div>
              <p className="text-[11px] text-[#5C6470] pt-3 mt-3 border-t border-[#f5f3ef]">
                Daily field stories &amp; photo updates.
              </p>
            </div>

            {/* Card 4: Address */}
            <div className="bg-white rounded-2xl p-6 border border-[#e4e2de] shadow-xs flex flex-col justify-between hover:border-[#D4AF37] transition-all">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#eae8e4] flex items-center justify-center text-[#0B192C] mb-4">
                  <span className="material-symbols-outlined text-[22px]">location_on</span>
                </div>
                <span className="text-[11px] uppercase tracking-wider text-[#386380] font-bold">
                  Registered Office
                </span>
                <h3 className="font-serif text-base font-bold text-[#0B192C] mt-1 mb-2">
                  Aligarh Secretariat
                </h3>
                <p className="text-xs font-semibold text-[#0B192C] leading-snug">
                  Grand Bazaar, Lal Diggi Road, Aligarh 202001, Uttar Pradesh
                </p>
              </div>
              <p className="text-[11px] text-[#5C6470] pt-3 mt-3 border-t border-[#f5f3ef]">
                Reg. IN-UP53986355713268Y
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SPLIT SECTION: FORM + SECRETARIAT DETAILS */}
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* FAQs & Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#fbf9f5] rounded-2xl p-6 sm:p-8 border border-[#e4e2de] space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#386380] font-bold block">
                  Institutional Governance
                </span>
                <h3 className="font-serif text-xl font-bold text-[#0B192C]">
                  Registered Section 8 Entity
                </h3>
                <p className="text-xs sm:text-sm text-[#5C6470] leading-relaxed">
                  Hopewise Foundation is duly incorporated under Section 8 of the Indian Companies Act as a non-profit company with recognized social welfare objectives, subject to statutory filing regulations and independent audits.
                </p>
                <div className="pt-2 border-t border-[#e4e2de] flex items-center gap-2 text-xs font-semibold text-[#0B192C]">
                  <span className="material-symbols-outlined text-[#D4AF37] text-[18px]">verified</span>
                  <span>Section 80G Certified for Donor Tax Relief</span>
                </div>
              </div>

              {/* FAQ Accordion */}
              <div className="space-y-3">
                <h4 className="font-serif text-xl font-bold text-[#0B192C] mb-4">
                  Frequently Answered Questions
                </h4>
                {faqs.map((faq, index) => (
                  <div
                    key={faq.q}
                    className="border border-[#e4e2de] rounded-xl overflow-hidden bg-white"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                      className="w-full text-left p-4 flex items-center justify-between text-xs sm:text-sm font-semibold text-[#0B192C] hover:bg-[#fbf9f5] transition-colors"
                    >
                      <span className="pr-4">{faq.q}</span>
                      <span className="material-symbols-outlined text-[18px] text-[#386380] shrink-0">
                        {openFaq === index ? 'remove' : 'add'}
                      </span>
                    </button>
                    {openFaq === index && (
                      <div className="p-4 pt-0 text-xs text-[#5C6470] leading-relaxed border-t border-[#f5f3ef] bg-[#fbf9f5]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
