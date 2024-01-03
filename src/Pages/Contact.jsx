import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AboutHeader from '../Components/AboutHeader';
import ContactSection from '../Components/ContactSection';
import Footer from '../Components/Footer';
import ScrollToTop from '../Components/ScrollToTop';

const Contact = () => {
    const location = useLocation();

    useEffect(() => {
      if (location.pathname.includes("Contact")) {
        window.scrollTo(0, 0);
      }
    }, [location]);
  return (
    <div>
      <AboutHeader />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Contact