import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ROUTE_SEO = {
  '/': {
    title: 'Hopewise Foundation | Educate · Empower · Elevate | Official NGO',
    description: 'Hopewise Foundation (hopewisefoundation) is an official Indian NGO headquartered in Aligarh, UP. Dedicated to child education, scholarships, free healthcare, and women empowerment. Govt. Reg: IN-UP53986355713268Y.',
    keywords: 'hopewisefoundation, hopewise foundation, hopewise, hopewise foundation aligarh, hopewise ngo, official hopewise foundation'
  },
  '/about': {
    title: 'About Us | Hopewise Foundation | Origins, Vision & Team',
    description: 'Discover the founding story and vision of Hopewise Foundation. Founded in 2011 to transform grassroots communities through education, care, and self-reliance in Aligarh and across India.',
    keywords: 'about hopewise foundation, hopewise foundation history, hopewise leadership, hopewise team, hopewise aligarh'
  },
  '/our-work': {
    title: 'Our Work & Programs | Hopewise Foundation | Education & Health',
    description: 'Explore Hopewise Foundation pillars: child education scholarships, mobile health clinics, emergency nutrition banks, and women artisan cooperatives.',
    keywords: 'hopewise programs, hopewise education, hopewise healthcare, hopewise foundation initiatives'
  },
  '/impact': {
    title: 'Verified Ground Impact | Hopewise Foundation | Audits & Reports',
    description: '42,000+ students supported, 45,000+ clinical consultations, and 180,000+ nutritious meals served. View verified social impact audits of Hopewise Foundation.',
    keywords: 'hopewise foundation impact, hopewise audit reports, hopewise 80G tax exemption'
  },
  '/get-involved': {
    title: 'Get Involved & Volunteer | Hopewise Foundation',
    description: 'Partner with Hopewise Foundation. Opportunities for academic mentors, health professionals, CSR institutional alliances, and direct contributions.',
    keywords: 'volunteer hopewise foundation, CSR partnership hopewise, donate hopewise foundation'
  },
  '/join-community': {
    title: 'Join Community & Member Registration | Hopewise Foundation',
    description: 'Register as an official inducted member or coordinator with Hopewise Foundation. Monthly mission circles, direct mentorship, and verified service credentials.',
    keywords: 'join hopewise community, hopewise member registration, hopewise induction'
  },
  '/contact': {
    title: 'Contact Secretariat | Hopewise Foundation | Aligarh, Uttar Pradesh',
    description: 'Reach Hopewise Foundation headquarters at Grand Bazaar, Lal Diggi Road, Aligarh 202001, UP. Email: hopewisefoundation26@gmail.com, Phone: +91 90846 90469.',
    keywords: 'contact hopewise foundation, hopewise foundation address, hopewise email, hopewise phone, hopewise aligarh address'
  }
};

export default function SEO() {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const seoData = ROUTE_SEO[currentPath] || ROUTE_SEO['/'];

    // Update document title
    document.title = seoData.title;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seoData.description);
    }

    // Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', seoData.keywords);
    }

    // Update Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      const canonicalUrl = `https://hopewisefoundation.org${currentPath === '/' ? '' : currentPath}`;
      canonical.setAttribute('href', canonicalUrl);
    }
  }, [location.pathname]);

  return null;
}
