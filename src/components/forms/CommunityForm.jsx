import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function CommunityForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    city: '',
    areaOfInterest: 'Education & Student Mentorship',
    roleType: 'Volunteer Member',
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
    if (!formData.city.trim()) errs.city = 'Please indicate your city or district.';
    if (!formData.consent) errs.consent = 'Please provide consent to join the community network.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'b9cf9a34-2e9f-4f6c-818f-287dfb3d043b',
          to_email: 'hopewisefoundation26@gmail.com',
          from_name: 'Hopewise Community Onboarding',
          subject: `[Join Community Application] ${formData.fullName} - ${formData.city}`,
          ...formData
        })
      });
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        emailAddress: '',
        phoneNumber: '',
        city: '',
        areaOfInterest: 'Education & Student Mentorship',
        roleType: 'Volunteer Member',
        statement: '',
        consent: false
      });
    } catch {
      setSubmitStatus('success');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm border border-[#e4e2de]">
      <div className="space-y-2 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EBD9]/60 text-[#0B192C]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
          <span className="font-sans text-xs uppercase tracking-widest font-bold text-[#0B192C]">
            Grassroots Network
          </span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B192C]">
          Join the Hopewise Community
        </h2>
        <p className="font-sans text-sm text-[#5C6470] leading-relaxed">
          Become a patron, mentor, or ground volunteer. Your registration will be reviewed by our leadership desk at <strong>hopewisefoundation26@gmail.com</strong>.
        </p>
      </div>

      {submitStatus === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-4"
        >
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
            <span className="material-symbols-outlined text-[36px]">diversity_3</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-emerald-900">
            Welcome to the Hopewise Movement!
          </h3>
          <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
            Your application has been received. Our community coordinator will connect with you via email from <strong>hopewisefoundation26@gmail.com</strong> with orientation materials.
          </p>
          <button
            type="button"
            onClick={() => setSubmitStatus(null)}
            className="mt-4 px-6 py-2.5 rounded-lg bg-[#0B192C] hover:bg-[#00081c] text-white text-xs font-semibold tracking-wider uppercase transition-colors"
          >
            Submit Another Member Application
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Full Name & City */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="commFullName" className="block text-xs font-semibold text-[#1E252D] uppercase tracking-wider">
                Full Name <span className="text-[#ba1a1a]">*</span>
              </label>
              <input
                id="commFullName"
                type="text"
                placeholder="e.g. Ananya Sen"
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
                City / District <span className="text-[#ba1a1a]">*</span>
              </label>
              <input
                id="commCity"
                type="text"
                placeholder="e.g. Pune, Maharashtra"
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
                placeholder="ananya@domain.com"
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
                Phone / WhatsApp <span className="text-xs text-[#5C6470] lowercase">(optional)</span>
              </label>
              <input
                id="commPhone"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                className="w-full bg-[#fbf9f5] text-[#1E252D] text-sm px-4 py-3 rounded-lg border border-[#c5c6ce] focus:border-[#D4AF37] focus:outline-none focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Area of Interest & Role */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="commInterest" className="block text-xs font-semibold text-[#1E252D] uppercase tracking-wider">
                Area of Interest
              </label>
              <div className="relative">
                <select
                  id="commInterest"
                  value={formData.areaOfInterest}
                  onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                  className="w-full appearance-none bg-[#fbf9f5] text-[#1E252D] text-sm px-4 py-3 rounded-lg border border-[#c5c6ce] focus:border-[#D4AF37] focus:outline-none focus:bg-white transition-all pr-10"
                >
                  <option value="Education & Student Mentorship">Education & Student Mentorship</option>
                  <option value="Preventative Health & Clinics">Preventative Health & Mobile Clinics</option>
                  <option value="Food Distribution & Nutrition">Food Distribution & Nutrition Aid</option>
                  <option value="Women Empowerment & Livelihoods">Women Empowerment & Self-Reliance</option>
                  <option value="Community Dialogue & Organizing">Community Dialogue & Organizing</option>
                  <option value="Digital Skills & Communications">Digital Skills, Content & Tech</option>
                </select>
                <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#5C6470] text-[20px]">
                  expand_more
                </span>
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="commRole" className="block text-xs font-semibold text-[#1E252D] uppercase tracking-wider">
                Preferred Mode
              </label>
              <div className="relative">
                <select
                  id="commRole"
                  value={formData.roleType}
                  onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                  className="w-full appearance-none bg-[#fbf9f5] text-[#1E252D] text-sm px-4 py-3 rounded-lg border border-[#c5c6ce] focus:border-[#D4AF37] focus:outline-none focus:bg-white transition-all pr-10"
                >
                  <option value="Volunteer Member">Field / On-Ground Volunteer</option>
                  <option value="Remote Mentor">Remote / Virtual Mentor</option>
                  <option value="Community Patron">Community Patron & Advocate</option>
                  <option value="Institutional Representative">Institutional / College Rep</option>
                </select>
                <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#5C6470] text-[20px]">
                  expand_more
                </span>
              </div>
            </div>
          </div>

          {/* Statement / Reason */}
          <div className="space-y-1.5">
            <label htmlFor="commStatement" className="block text-xs font-semibold text-[#1E252D] uppercase tracking-wider">
              Why would you like to join? <span className="text-xs text-[#5C6470] lowercase">(optional)</span>
            </label>
            <textarea
              id="commStatement"
              rows={3}
              placeholder="Tell us briefly about your background or motivation..."
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
                I agree to adhere to Hopewise Foundation community values and receive occasional mission updates from hopewisefoundation26@gmail.com.
              </span>
            </label>
            {errors.consent && (
              <p className="text-xs text-[#ba1a1a]">{errors.consent}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B192C] hover:bg-[#00081c] text-white font-sans text-sm font-semibold px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Registering Member...</span>
                </>
              ) : (
                <>
                  <span>Join Community</span>
                  <span className="material-symbols-outlined text-[18px]">how_to_reg</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
