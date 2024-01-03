import React, { useEffect } from 'react'
import AboutEscape from '../Components/AboutEscape'
import { useLocation } from 'react-router-dom';
import AboutHeader from '../Components/AboutHeader';
import AboutPerfectEscape from '../Components/AboutPerfectEscape';
import AboutGrandium from '../Components/AboutGrandium';
import AboutTeam from '../Components/AboutTeam';
import AboutKeyFeatures from '../Components/AboutKeyFeatures';
import VideoSection from '../Components/VideoSection';
import History from '../Components/History';
import Testimonials from '../Components/Testimonials';
import Footer from '../Components/Footer';
import ScrollToTop from '../Components/ScrollToTop';

const AboutUs = () => {
    const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("about-us")) {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return (
    <main className=" font-san bg-[#f5f5f5] ">
      {/* placeToMountheader */}
      <AboutHeader/>
      <AboutEscape/>
      <div className="h-[20px]"></div>
      <AboutPerfectEscape/>
      <AboutGrandium/>
      <AboutTeam/>
      <AboutKeyFeatures/>
      <VideoSection/>
      <History/>
      <Testimonials/>
      <Footer/>
      <ScrollToTop />
    </main>
  );
}

export default AboutUs