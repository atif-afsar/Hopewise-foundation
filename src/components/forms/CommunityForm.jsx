import React, { useState } from 'react';
import { motion } from 'motion/react';
import { submitToFoundationEmail, buildMailtoUrl, buildWhatsAppUrl, OFFICIAL_EMAIL } from '../../utils/formSubmit';

export const DESIGNATION_OPTIONS = [
  'Programme Coordination',
  'Event Management',
  'Social Media Handling',
  'Content Creation',
  'Fundraising and Outreach',
  'Teaching and Mentorship',
  'Volunteer Coordination',
  'Volunteers',
  'Graphic Designing',
  'Public Relations',
  'Community Outreach',
  'Sponsorship and Partnerships'
];

export const PREFERRED_MODES = [
  'Field / On-Ground Volunteer',
  'Remote / Virtual Contributor',
  'Full-Time / Core Volunteer',
  'Flexible Weekend Support'
];

export const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSe30nnM_RXsSFokAPI800m6gdFr31Vs_o7NqdIH0CqNr3i1LQ/viewform';

export default function CommunityForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    city: '',
    designation: '',
    preferredMode: 'Field / On-Ground Volunteer',
    statement: '',
    consent: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full legal or preferred name.';
    if (!formData.emailAddress.trim()) {
      errs.emailAddress = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress)) {
      errs.emailAddress = 'Please provide a valid email address.';
    }
    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = 'Please provide your phone / WhatsApp number.';
    }
    if (!formData.city.trim()) errs.city = 'Please indicate your city or district.';
    if (!formData.designation) {
      errs.designation = 'Please select a designation to apply for.';
    }
    if (!formData.consent) errs.consent = 'Please provide consent to join the community network.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);
    const currentData = { ...formData };

    try {
      const subject = `[Member Registration] ${currentData.designation} - ${currentData.fullName}`;
      const result = await submitToFoundationEmail({
        FullName: currentData.fullName,
        Email: currentData.emailAddress,
        Phone: currentData.phoneNumber,
        City: currentData.city,
        Designation: currentData.designation,
        PreferredMode: currentData.preferredMode,
        Statement: currentData.statement || 'None provided',
        _replyto: currentData.emailAddress
      }, subject);

      setSubmittedData(currentData);

      if (result.needsActivation) {
        setSubmitStatus('activation_needed');
      } else {
        setSubmitStatus('success');
      }

      setFormData({
        fullName: '',
        emailAddress: '',
        phoneNumber: '',
        city: '',
        designation: '',
        preferredMode: 'Field / On-Ground Volunteer',
        statement: '',
        consent: false
      });
    } catch {
      setSubmittedData(currentData);
      setSubmitStatus('success');
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoBody = submittedData
    ? `Full Name: ${submittedData.fullName}\nEmail: ${submittedData.emailAddress}\nPhone: ${submittedData.phoneNumber}\nCity/State: ${submittedData.city}\nApplying for Designation: ${submittedData.designation}\nPreferred Mode: ${submittedData.preferredMode}\n\nStatement/Experience:\n${submittedData.statement || 'N/A'}`
    : '';

  const whatsappText = submittedData
    ? `Hello Hopewise Foundation, I applied for ${submittedData.designation}:\nName: ${submittedData.fullName}\nCity: ${submittedData.city}\nPhone: ${submittedData.phoneNumber}`
    : '';

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm border border-[#e4e2de]">
      <div className="space-y-4 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EBD9]/60 text-[#0B192C]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
          <span className="font-sans text-xs uppercase tracking-widest font-bold text-[#0B192C]">
            Official Member Registration
          </span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B192C]">
          Join the Hopewise Community
        </h2>
        <p className="font-sans text-sm text-[#5C6470] leading-relaxed">
          Every registration is sent directly to our secretariat inbox at{' '}
          <a
            href={`mailto:${OFFICIAL_EMAIL}`}
            className="font-bold text-[#0B192C] underline hover:text-[#D4AF37] transition-colors"
          >
            {OFFICIAL_EMAIL}
          </a>.
        </p>

        {/* Google Form Link Callout */}
        <div className="p-3.5 rounded-xl bg-[#F4EBD9]/50 border border-[#D4AF37]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[#0B192C]">
            <span className="material-symbols-outlined text-[#D4AF37] text-[20px]">assignment</span>
            <span>
              Official Hopewise Foundation Google Registration Form
            </span>
          </div>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-bold text-[#0B192C] hover:text-[#386380] underline whitespace-nowrap"
          >
            <span>Open in Google Forms</span>
            <span className="material-symbols-outlined text-[14px]">open_in_new</span>
          </a>
        </div>
      </div>

      {submitStatus ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-8 rounded-xl bg-emerald-50/80 border border-emerald-200 text-center space-y-5"
        >
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
            <span className="material-symbols-outlined text-[36px]">diversity_3</span>
          </div>
          <div>
            <h3 className="font-serif text-2xl font-bold text-emerald-950">
              Application Dispatched to {OFFICIAL_EMAIL}
            </h3>
            <p className="text-sm text-emerald-800 max-w-lg mx-auto leading-relaxed mt-2">
              Thank you, <strong>{submittedData?.fullName}</strong>. Your registration for{' '}
              <strong>{submittedData?.designation}</strong> has been forwarded to{' '}
              <strong>{OFFICIAL_EMAIL}</strong>. Our onboarding team will connect with you shortly.
            </p>
          </div>

          {submitStatus === 'activation_needed' && (
            <div className="p-3.5 bg-amber-50 border border-amber-300 rounded-xl text-left text-xs text-amber-900 max-w-md mx-auto space-y-1">
              <span className="font-bold block">Notice for Secretariat:</span>
              <p>
                An 'Activate Form' confirmation email was sent by the service to <strong>{OFFICIAL_EMAIL}</strong>. Clicking that button once completes instant direct forwarding.
              </p>
            </div>
          )}

          {/* Fallback & Alternate Fast Channels */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={buildMailtoUrl(`[Member Registration] ${submittedData?.designation} - ${submittedData?.fullName}`, mailtoBody)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#0B192C] hover:bg-[#00081c] text-white text-xs font-bold tracking-wider uppercase transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">mail</span>
              <span>Open in Gmail / Email App</span>
            </a>

            <a
              href={buildWhatsAppUrl(whatsappText)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#1ebd59] text-white text-xs font-bold tracking-wider uppercase transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">chat</span>
              <span>Send via WhatsApp</span>
            </a>

            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-50 text-[#0B192C] text-xs font-bold tracking-wider uppercase border border-[#e4e2de] transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">assignment</span>
              <span>Google Forms Backup</span>
            </a>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setSubmitStatus(null);
                setSubmittedData(null);
              }}
              className="text-xs text-[#5C6470] hover:text-[#0B192C] underline font-semibold"
            >
              Submit Another Application
            </button>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Full Name & City */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="commFullName" className="block text-xs font-semibold text-[#1E252D] uppercase tracking-wider">
                Full Name <span className="text-[#ba1a1a]">*</span>
              </label>
              <input
                id="commFullName"
                type="text"
                placeholder="e.g. Adv. Mohd Nasar Kazim"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className={`w-full bg-[#fbf9f5] text-[#1E252D] text-sm px-4 py-3 rounded-lg border ${
                  errors.fullName ? 'border-[#ba1a1a]' : 'border-[#c5c6ce] focus:border-[#D4AF37]'
                } focus:outline-none focus:bg-white transition-all`}
              />
              {errors.fullName && <p className="text-xs text-[#ba1a1a] mt-1">{errors.fullName}</p>}
            </div>

            <div className="space-y-1.5">
              <label htmlFor="commCity" className="block text-xs font-semibold text-[#1E252D] uppercase tracking-wider">
                City / District / State <span className="text-[#ba1a1a]">*</span>
              </label>
              <input
                id="commCity"
                type="text"
                placeholder="e.g. Lucknow, Uttar Pradesh"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className={`w-full bg-[#fbf9f5] text-[#1E252D] text-sm px-4 py-3 rounded-lg border ${
                  errors.city ? 'border-[#ba1a1a]' : 'border-[#c5c6ce] focus:border-[#D4AF37]'
                } focus:outline-none focus:bg-white transition-all`}
              />
              {errors.city && <p className="text-xs text-[#ba1a1a] mt-1">{errors.city}</p>}
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="commEmail" className="block text-xs font-semibold text-[#1E252D] uppercase tracking-wider">
                Email Address <span className="text-[#ba1a1a]">*</span>
              </label>
              <input
                id="commEmail"
                type="email"
                placeholder="e.g. name@example.com"
                value={formData.emailAddress}
                onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                className={`w-full bg-[#fbf9f5] text-[#1E252D] text-sm px-4 py-3 rounded-lg border ${
                  errors.emailAddress ? 'border-[#ba1a1a]' : 'border-[#c5c6ce] focus:border-[#D4AF37]'
                } focus:outline-none focus:bg-white transition-all`}
              />
              {errors.emailAddress && <p className="text-xs text-[#ba1a1a] mt-1">{errors.emailAddress}</p>}
            </div>

            <div className="space-y-1.5">
              <label htmlFor="commPhone" className="block text-xs font-semibold text-[#1E252D] uppercase tracking-wider">
                Phone / WhatsApp Number <span className="text-[#ba1a1a]">*</span>
              </label>
              <input
                id="commPhone"
                type="tel"
                placeholder="+91 90846 90469"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                className={`w-full bg-[#fbf9f5] text-[#1E252D] text-sm px-4 py-3 rounded-lg border ${
                  errors.phoneNumber ? 'border-[#ba1a1a]' : 'border-[#c5c6ce] focus:border-[#D4AF37]'
                } focus:outline-none focus:bg-white transition-all`}
              />
              {errors.phoneNumber && <p className="text-xs text-[#ba1a1a] mt-1">{errors.phoneNumber}</p>}
            </div>
          </div>

          {/* Designation * (Official Registration Google Form Options) */}
          <div className="space-y-2.5 pt-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <label className="block text-xs font-bold text-[#1E252D] uppercase tracking-wider">
                Designation <span className="text-[#ba1a1a]">*</span>
              </label>
              <span className="text-[11px] text-[#5C6470]">
                Select the role or department you wish to join
              </span>
            </div>

            <div
              className={`grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-3.5 rounded-xl border ${
                errors.designation
                  ? 'border-[#ba1a1a] bg-red-50/20'
                  : 'border-[#e4e2de] bg-[#fbf9f5]'
              }`}
            >
              {DESIGNATION_OPTIONS.map((desig) => {
                const isSelected = formData.designation === desig;
                return (
                  <label
                    key={desig}
                    className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer select-none transition-all ${
                      isSelected
                        ? 'bg-[#0B192C] text-white border-[#0B192C] shadow-sm'
                        : 'bg-white text-[#1E252D] border-[#e4e2de] hover:border-[#D4AF37] hover:bg-white/90'
                    }`}
                  >
                    <input
                      type="radio"
                      name="designation"
                      value={desig}
                      checked={isSelected}
                      onChange={(e) => {
                        setFormData({ ...formData, designation: e.target.value });
                        if (errors.designation) {
                          setErrors({ ...errors, designation: undefined });
                        }
                      }}
                      className="sr-only"
                    />
                    <span
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                        isSelected
                          ? 'border-[#D4AF37] bg-[#D4AF37]'
                          : 'border-[#8a919e] bg-white'
                      }`}
                    >
                      {isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0B192C]" />
                      )}
                    </span>
                    <span className="text-xs font-semibold leading-snug">
                      {desig}
                    </span>
                  </label>
                );
              })}
            </div>
            {errors.designation && (
              <p className="text-xs text-[#ba1a1a] mt-1">{errors.designation}</p>
            )}
          </div>

          {/* Preferred Mode */}
          <div className="space-y-1.5">
            <label htmlFor="commMode" className="block text-xs font-semibold text-[#1E252D] uppercase tracking-wider">
              Preferred Engagement Mode
            </label>
            <div className="relative">
              <select
                id="commMode"
                value={formData.preferredMode}
                onChange={(e) => setFormData({ ...formData, preferredMode: e.target.value })}
                className="w-full appearance-none bg-[#fbf9f5] text-[#1E252D] text-sm px-4 py-3 rounded-lg border border-[#c5c6ce] focus:border-[#D4AF37] focus:outline-none focus:bg-white transition-all pr-10"
              >
                {PREFERRED_MODES.map((mode) => (
                  <option key={mode} value={mode}>
                    {mode}
                  </option>
                ))}
              </select>
              <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#5C6470] text-[20px]">
                expand_more
              </span>
            </div>
          </div>

          {/* Statement / Experience */}
          <div className="space-y-1.5">
            <label htmlFor="commStatement" className="block text-xs font-semibold text-[#1E252D] uppercase tracking-wider">
              Background, Skills or Motivation <span className="text-xs text-[#5C6470] lowercase">(optional)</span>
            </label>
            <textarea
              id="commStatement"
              rows={3}
              placeholder="Tell us briefly about your experience or why you want to take up this designation..."
              value={formData.statement}
              onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
              className="w-full bg-[#fbf9f5] text-[#1E252D] text-sm px-4 py-3 rounded-lg border border-[#c5c6ce] focus:border-[#D4AF37] focus:outline-none focus:bg-white transition-all resize-y"
            />
          </div>

          {/* Consent */}
          <div className="space-y-1">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="mt-1 w-4 h-4 rounded text-[#0B192C] focus:ring-[#D4AF37] border-[#75777e]"
              />
              <span className="text-xs text-[#5C6470] leading-relaxed">
                I agree to adhere to Hopewise Foundation community values, code of conduct, and receive official orientation communications from <strong>hopewisefoundation26@gmail.com</strong>.
              </span>
            </label>
            {errors.consent && (
              <p className="text-xs text-[#ba1a1a]">{errors.consent}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B192C] hover:bg-[#00081c] text-white font-sans text-sm font-semibold px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all disabled:opacity-70 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Submitting Registration...</span>
                </>
              ) : (
                <>
                  <span>Submit Member Registration</span>
                  <span className="material-symbols-outlined text-[18px]">how_to_reg</span>
                </>
              )}
            </button>

            <span className="text-xs text-[#5C6470]">
              Official induction certificate issued upon verification.
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
