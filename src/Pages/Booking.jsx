import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AboutHeader from '../Components/AboutHeader';
import BookingAbout from '../Components/BookingAbout';
import BookingForm from '../Components/BookingForm';
import Footer from '../Components/Footer';
import ScrollToTop from '../Components/ScrollToTop';

const Booking = () => {
    const location = useLocation();

    useEffect(() => {
      if (location.pathname.includes("booking")) {
        window.scrollTo(0, 0);
      }
    }, [location]);
  return (
    <div className="bg-white">
      <AboutHeader />
      <BookingAbout />
      <BookingForm />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Booking