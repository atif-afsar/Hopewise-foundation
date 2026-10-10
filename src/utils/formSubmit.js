/**
 * Unified Form Delivery Service for Hopewise Foundation
 * Target Email: hopewisefoundation26@gmail.com
 * Official Phone/WhatsApp: +91 90846 90469
 */

export const OFFICIAL_EMAIL = 'hopewisefoundation26@gmail.com';
export const OFFICIAL_WHATSAPP = '919084690469';

/**
 * Submits form data via FormSubmit AJAX endpoint directly to hopewisefoundation26@gmail.com
 */
export async function submitToFoundationEmail(payload, subject = 'New Inquiry - Hopewise Foundation') {
  const cleanPayload = {
    _subject: subject,
    _template: 'table',
    _captcha: 'false',
    ...payload
  };

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${OFFICIAL_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(cleanPayload)
    });

    const data = await response.json().catch(() => null);

    return {
      success: response.ok && (!data || data.success === 'true' || data.success === true),
      needsActivation: Boolean(data && data.message && data.message.toLowerCase().includes('activation')),
      message: data?.message || (response.ok ? 'Message delivered successfully' : 'Submission error')
    };
  } catch (error) {
    // If fetch was blocked by network/adblocker, report graceful fallback
    return {
      success: true,
      needsActivation: false,
      fallbackNeeded: true,
      error: error.message
    };
  }
}

/**
 * Builds pre-filled mailto URL for direct email dispatch
 */
export function buildMailtoUrl(subject, bodyText) {
  return `mailto:${OFFICIAL_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
}

/**
 * Builds pre-filled WhatsApp link for direct chat
 */
export function buildWhatsAppUrl(messageText) {
  return `https://wa.me/${OFFICIAL_WHATSAPP}?text=${encodeURIComponent(messageText)}`;
}
