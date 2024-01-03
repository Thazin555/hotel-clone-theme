import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Facilities from '../Components/Facilities';
import VideoSection from '../Components/VideoSection';
import OfferSection from '../Components/OfferSection';
import BlogSection from '../Components/BlogSection';
import Testimonials from '../Components/Testimonials';
import Footer from '../Components/Footer';
import ScrollToTop from '../Components/ScrollToTop';
import FacilitesGalleryProvider from '../contexts/FacilitesGallery';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
      if (location.pathname === "/") {
        window.scrollTo(0, 0);
      }
    }, [location]);
  return (
    <div>
      <Header />
      <FacilitesGalleryProvider>
        <Facilities />
      </FacilitesGalleryProvider>
      <VideoSection />
      <OfferSection />
      <BlogSection />
      <Testimonials />
      <Footer/>
      <ScrollToTop />
    </div>
  );
}

export default Home