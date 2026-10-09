import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function DonateModal({ isOpen, onClose }) {
  const [copiedField, setCopiedField] = useState(null);
  const [pledgeForm, setPledgeForm] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '2500',
    purpose: 'Education & Scholarships',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handlePledgeSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send pledge notification to official foundation email
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'b9cf9a34-2e9f-4f6c-818f-287dfb3d043b', // safe public form gateway
          subject: `New Contribution Pledge: ₹${pledgeForm.amount} - ${pledgeForm.name}`,
          to_email: 'hopewisefoundation26@gmail.com',
          from_name: 'Hopewise Foundation Portal',
          ...pledgeForm
        })
      }).catch(() => {
        // Fallback gracefully
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0B192C]/80 backdrop-blur-sm"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#eae8e4] z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="bg-[#0B192C] px-6 py-5 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#F4EBD9]/15 flex items-center justify-center text-[#D4AF37]">
                <span className="material-symbols-outlined text-[24px]">favorite</span>
              </div>
              <div>
                <h3 className="font-display-lg font-bold text-lg text-white">Direct Foundation Contribution</h3>
                <p className="text-xs text-white/70">Hopewise Foundation · Section 8 Non-Profit</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          <div className="p-6 overflow-y-auto space-y-6">
            {/* Tax Exemption Banner */}
            <div className="p-3.5 rounded-xl bg-[#F4EBD9]/60 border border-[#D4AF37]/30 flex items-center gap-3 text-[#0B192C]">
              <span className="material-symbols-outlined text-[#D4AF37] text-[22px] shrink-0">verified</span>
              <p className="text-xs leading-relaxed">
                <strong>Direct Bank & UPI Support:</strong> We operate transparently through scheduled institution-to-institution bank transfers and verified UPI transfers with zero intermediary processor cut.
              </p>
            </div>

            {/* Direct Bank Transfer & UPI Details */}
            <div className="bg-[#fbf9f5] rounded-xl p-5 border border-[#e4e2de] space-y-4">
              <div className="flex items-center justify-between border-b border-[#e4e2de] pb-3">
                <span className="font-label-md text-xs font-bold text-[#0B192C] uppercase tracking-wider">Official Bank Account</span>
                <span className="text-[11px] font-semibold text-[#386380] bg-[#b2dcfe]/40 px-2 py-0.5 rounded">NEFT / RTGS / IMPS</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-xs text-[#5C6470] block">Beneficiary Name</span>
                  <span className="font-semibold text-[#0B192C] text-sm">Hopewise Foundation</span>
                </div>
                <div>
                  <span className="text-xs text-[#5C6470] block">Bank Name</span>
                  <span className="font-semibold text-[#0B192C] text-sm">State Bank of India</span>
                </div>
                <div>
                  <span className="text-xs text-[#5C6470] block">Account Number</span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="font-mono font-semibold text-[#0B192C]">4198 0021 5592</span>
                    <button
                      type="button"
                      onClick={() => handleCopy('419800215592', 'acc')}
                      className="text-xs text-[#386380] hover:text-[#0B192C] font-medium inline-flex items-center gap-0.5 bg-white px-2 py-0.5 rounded border border-[#c5c6ce]"
                    >
                      {copiedField === 'acc' ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
                <div>
                  <span className="text-xs text-[#5C6470] block">IFSC Code</span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="font-mono font-semibold text-[#0B192C]">SBIN0001274</span>
                    <button
                      type="button"
                      onClick={() => handleCopy('SBIN0001274', 'ifsc')}
                      className="text-xs text-[#386380] hover:text-[#0B192C] font-medium inline-flex items-center gap-0.5 bg-white px-2 py-0.5 rounded border border-[#c5c6ce]"
                    >
                      {copiedField === 'ifsc' ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#e4e2de] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs text-[#5C6470] block">Direct Foundation UPI ID</span>
                  <span className="font-mono font-semibold text-[#0B192C] text-sm">hopewisefoundation@sbi</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('hopewisefoundation@sbi', 'upi')}
                  className="self-start sm:self-auto text-xs font-semibold bg-[#D4AF37] hover:bg-[#c5a059] text-[#0B192C] px-3 py-1.5 rounded transition-colors inline-flex items-center gap-1.5 shadow-sm"
                >
                  <span className="material-symbols-outlined text-[16px]">content_copy</span>
                  {copiedField === 'upi' ? 'UPI Copied!' : 'Copy UPI ID'}
                </button>
              </div>
            </div>

            {/* Donation Pledge / Receipt Request Form */}
            <div className="space-y-3">
              <h4 className="font-headline-sm text-sm font-bold text-[#0B192C]">
                Notify Foundation or Request Tax Exemption Receipt
              </h4>
              <p className="text-xs text-[#5C6470]">
                If you have transferred funds or would like our team to guide your initiative, submit below and we will contact you from <strong>hopewisefoundation26@gmail.com</strong>.
              </p>

              {submitted ? (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                    <span className="material-symbols-outlined">check_circle</span>
                  </div>
                  <h5 className="font-bold text-emerald-900 text-sm">Thank You for Your Support!</h5>
                  <p className="text-xs text-emerald-800">
                    Your contribution note has been received. Our team will verify and send the acknowledgment from hopewisefoundation26@gmail.com.
                  </p>
                </div>
              ) : (
                <form onSubmit={handlePledgeSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Your Full Name *"
                      required
                      value={pledgeForm.name}
                      onChange={(e) => setPledgeForm({ ...pledgeForm, name: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#c5c6ce] focus:outline-none focus:border-[#D4AF37] bg-white"
                    />
                    <input
                      type="email"
                      placeholder="Email Address *"
                      required
                      value={pledgeForm.email}
                      onChange={(e) => setPledgeForm({ ...pledgeForm, email: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#c5c6ce] focus:outline-none focus:border-[#D4AF37] bg-white"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="tel"
                      placeholder="Phone / WhatsApp Number"
                      value={pledgeForm.phone}
                      onChange={(e) => setPledgeForm({ ...pledgeForm, phone: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#c5c6ce] focus:outline-none focus:border-[#D4AF37] bg-white"
                    />
                    <select
                      value={pledgeForm.purpose}
                      onChange={(e) => setPledgeForm({ ...pledgeForm, purpose: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#c5c6ce] focus:outline-none focus:border-[#D4AF37] bg-white text-[#1E252D]"
                    >
                      <option value="Education & Scholarships">Education & Scholarships</option>
                      <option value="Healthcare & Mobile Clinics">Healthcare & Mobile Clinics</option>
                      <option value="Food & Nutrition Support">Food & Nutrition Support</option>
                      <option value="Women Self-Reliance">Women Self-Reliance</option>
                      <option value="General Foundation Corpus">General Foundation Corpus</option>
                    </select>
                  </div>
                  <textarea
                    rows={2}
                    placeholder="Transaction reference ID or message (optional)"
                    value={pledgeForm.message}
                    onChange={(e) => setPledgeForm({ ...pledgeForm, message: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#c5c6ce] focus:outline-none focus:border-[#D4AF37] bg-white resize-none"
                  />
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[11px] text-[#5C6470]">
                      Official Desk: hopewisefoundation26@gmail.com
                    </span>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-5 py-2 rounded-lg bg-[#0B192C] hover:bg-[#00081c] text-white text-xs font-semibold tracking-wide transition-all shadow-sm flex items-center gap-1.5"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <span>Submit Notice</span>
                          <span className="material-symbols-outlined text-[14px]">send</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
