import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import AboutHeader from '../Components/AboutHeader';
import GalleryAbout from "../Components/GalleryAbout";
import GalleryAlbum from "../Components/GalleryAlbum";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import GalleriesProvider from "../contexts/Galleries";

const Gallery = () => {
    const location = useLocation();

    useEffect(() => {
      if (location.pathname.includes("gallery")) {
        window.scrollTo(0, 0);
      }
    }, [location]);
  return (
    <div className=" bg-gray-50">
      <AboutHeader />
      <GalleriesProvider>
        <GalleryAbout />
        <GalleryAlbum />
        <Footer />
        <ScrollToTop />
      </GalleriesProvider>
    </div>
  );
}

export default Gallery