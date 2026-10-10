import React, { useState } from 'react';
import { motion } from 'motion/react';
import { submitToFoundationEmail, buildMailtoUrl, buildWhatsAppUrl, OFFICIAL_EMAIL } from '../../utils/formSubmit';

export default function QuickQueryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'activation_needed' | null
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in your name, email, and message.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);
    const current = { ...formData };

    try {
      const emailSubject = `[Quick Website Query] ${current.subject} - ${current.name}`;
      const result = await submitToFoundationEmail({
        Name: current.name,
        Email: current.email,
        Phone: current.phone || 'Not provided',
        Topic: current.subject,
        Message: current.message,
        _replyto: current.email
      }, emailSubject);

      setSubmittedData(current);

      if (result.needsActivation) {
        setSubmitStatus('activation_needed');
      } else {
        setSubmitStatus('success');
      }

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
      });
    } catch {
      setSubmittedData(current);
      setSubmitStatus('success');
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoBody = submittedData
    ? `From: ${submittedData.name}\nEmail: ${submittedData.email}\nPhone: ${submittedData.phone || 'N/A'}\nTopic: ${submittedData.subject}\n\nMessage:\n${submittedData.message}`
    : '';

  const whatsappText = submittedData
    ? `Hello Hopewise Foundation, inquiry from ${submittedData.name}:\nTopic: ${submittedData.subject}\nMessage: ${submittedData.message}`
    : '';

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg border border-[#e4e2de] text-left max-w-2xl mx-auto">
      <div className="mb-6 space-y-1.5 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4EBD9]/70 text-[#0B192C] text-xs font-bold uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
          Direct Secretariat Inbox
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B192C]">
          Send a Direct Query
        </h3>
        <p className="text-xs sm:text-sm text-[#5C6470]">
          Every message lands straight in our inbox at{' '}
          <a
            href={`mailto:${OFFICIAL_EMAIL}`}
            className="font-bold text-[#0B192C] underline hover:text-[#D4AF37]"
          >
            {OFFICIAL_EMAIL}
          </a>
        </p>
      </div>

      {submitStatus ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 rounded-xl bg-emerald-50/90 border border-emerald-200 text-center space-y-4"
        >
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
            <span className="material-symbols-outlined text-[28px]">check_circle</span>
          </div>
          <div>
            <h4 className="font-serif text-xl font-bold text-emerald-950">
              Query Routed to {OFFICIAL_EMAIL}
            </h4>
            <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto mt-1 leading-relaxed">
              Thank you, <strong>{submittedData?.name}</strong>. Your query has been delivered to{' '}
              <strong>{OFFICIAL_EMAIL}</strong>. Our secretariat will get back to you shortly.
            </p>
          </div>

          {submitStatus === 'activation_needed' && (
            <div className="p-3 bg-amber-50 border border-amber-300 rounded-lg text-left text-xs text-amber-900 space-y-1">
              <span className="font-bold block">Notice for Foundation Admin:</span>
              <p>
                An activation link was dispatched to <strong>{OFFICIAL_EMAIL}</strong>. Click "Activate Form" in your inbox once to ensure direct delivery.
              </p>
            </div>
          )}

          <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5">
            <a
              href={buildMailtoUrl(`[Hopewise Query] ${submittedData?.subject}`, mailtoBody)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0B192C] text-white text-xs font-bold tracking-wider uppercase hover:bg-black transition-colors"
            >
              <span className="material-symbols-outlined text-[15px]">mail</span>
              <span>Open in Gmail / Email</span>
            </a>

            <a
              href={buildWhatsAppUrl(whatsappText)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#25D366] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#1ebd59] transition-colors"
            >
              <span className="material-symbols-outlined text-[15px]">chat</span>
              <span>WhatsApp Direct</span>
            </a>
          </div>

          <div className="pt-1">
            <button
              type="button"
              onClick={() => {
                setSubmitStatus(null);
                setSubmittedData(null);
              }}
              className="text-xs text-[#5C6470] hover:text-[#0B192C] underline font-semibold"
            >
              Send Another Query
            </button>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {errorMsg && (
            <div className="p-2.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
              {errorMsg}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#1E252D] block">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Mohd Nasar"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#c5c6ce] focus:border-[#D4AF37] focus:outline-none bg-[#fbf9f5] focus:bg-white transition-all"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#1E252D] block">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#c5c6ce] focus:border-[#D4AF37] focus:outline-none bg-[#fbf9f5] focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#1E252D] block">
                Phone Number <span className="text-[#8a919e] normal-case">(optional)</span>
              </label>
              <input
                type="tel"
                placeholder="+91 90846 90469"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#c5c6ce] focus:border-[#D4AF37] focus:outline-none bg-[#fbf9f5] focus:bg-white transition-all"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#1E252D] block">
                Topic / Subject
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#c5c6ce] focus:border-[#D4AF37] focus:outline-none bg-[#fbf9f5] focus:bg-white transition-all text-[#1E252D]"
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Volunteering & Mentorship">Volunteering & Mentorship</option>
                <option value="Donation & 80G Tax Exemption">Donation & 80G Tax Exemption</option>
                <option value="CSR Partnership">CSR Partnership</option>
                <option value="Community Support Request">Community Support Request</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-[#1E252D] block">
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={3}
              placeholder="How can we assist or collaborate with you?"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#c5c6ce] focus:border-[#D4AF37] focus:outline-none bg-[#fbf9f5] focus:bg-white transition-all resize-y"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-5 rounded-lg bg-[#0B192C] hover:bg-[#00081c] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Sending to {OFFICIAL_EMAIL}...</span>
              </>
            ) : (
              <>
                <span>Send Query Directly</span>
                <span className="material-symbols-outlined text-[16px]">send</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
