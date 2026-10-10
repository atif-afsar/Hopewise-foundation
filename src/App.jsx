import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import DonateModal from './components/ui/DonateModal';
import SEO from './components/common/SEO';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import OurWork from './pages/OurWork';
import Impact from './pages/Impact';
import GetInvolved from './pages/GetInvolved';
import JoinCommunity from './pages/JoinCommunity';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  return (
    <Router>
      <SEO />
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#fbf9f5] text-[#1b1c1a]">
        <Navbar onOpenDonate={() => setIsDonateOpen(true)} />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onOpenDonate={() => setIsDonateOpen(true)} />} />
            <Route path="/about" element={<About onOpenDonate={() => setIsDonateOpen(true)} />} />
            <Route path="/our-work" element={<OurWork onOpenDonate={() => setIsDonateOpen(true)} />} />
            <Route path="/impact" element={<Impact onOpenDonate={() => setIsDonateOpen(true)} />} />
            <Route path="/get-involved" element={<GetInvolved onOpenDonate={() => setIsDonateOpen(true)} />} />
            <Route path="/join-community" element={<JoinCommunity />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer onOpenDonate={() => setIsDonateOpen(true)} />

        {/* Direct Bank / UPI Foundation Support Modal */}
        <DonateModal isOpen={isDonateOpen} onClose={() => setIsDonateOpen(false)} />
      </div>
    </Router>
  );
}

export default App;
