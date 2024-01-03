import { Route, Routes } from 'react-router-dom';
import './App.css'
import React from 'react'
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Room from './Pages/Room';
import Service from './Pages/Service';
import Gallery from './Pages/Gallery';
import Booking from './Pages/Booking';
import Contact from './Pages/Contact';
import "/node_modules/@glidejs/glide/dist/css/glide.core.min.css";
import "/node_modules/@glidejs/glide/dist/css/glide.theme.min.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="rooms" element={<Room />} />
      <Route path="services" element={<Service />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="booking" element={<Booking />} />
      <Route path="Contact" element={<Contact />} />
    </Routes>
  )
}

export default App