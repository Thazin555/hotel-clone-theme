import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import AboutHeader from '../Components/AboutHeader';
import RoomSection from '../Components/RoomSection';
import Footer from '../Components/Footer';
import ScrollToTop from '../Components/ScrollToTop';

const Room = () => {
    const location = useLocation();

    useEffect(() => {
      if (location.pathname.includes("rooms")) {
        window.scrollTo(0, 0);
      }
    }, [location]);
  return (
    <div>
        <AboutHeader/>
        <RoomSection/>
        <Footer/>
        <ScrollToTop/>
    </div>
  )
}

export default Room