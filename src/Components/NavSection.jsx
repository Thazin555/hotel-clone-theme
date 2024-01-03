import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

const NavSection = () => {
  const [roomOpen, setRoomOpen] = useState(false);
  const handleRoomOpen = () => {
    setRoomOpen(!roomOpen);
  };
  const handleRoomClose = () => {
    setRoomOpen(!roomOpen);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const [roomSOpen, setRoomSOpen] = useState(false);
  const handleRoomSOpen = () => {
    setRoomSOpen(!roomSOpen);
  };
  const [bookingOpen, setBookingOpen] = useState(false);
  const handleBookingOpen = () => {
    setBookingOpen(!bookingOpen);
  };
  const [bookingSOpen, setBookingSOpen] = useState(false);
  const handleBookingSOpen = () => {
    setBookingSOpen(!bookingSOpen);
  };
  const handleBookingClose = () => {
    setBookingOpen(!bookingOpen);
  };
  const [blogOpen, setBlogOpen] = useState(false);
  const handleBlogOpen = () => {
    setBlogOpen(!blogOpen);
  };
  const handleBlogClose = () => {
    setBlogOpen(!blogOpen);
  };
  const [blogSOpen, setBlogSOpen] = useState(false);
  const handleBlogSOpen = () => {
    setBlogSOpen(!blogSOpen);
  };
  return (
    <div>
      <div
        className="absolute  flex  lg:items-start  lg:justify-around
           top-0   overflow-hidden cursor-pointer mx-auto
            lg:!top-28 container justify-center font-bold  z-[100]
             text-white   tracking-wide  gap-0 py-14 w-full pb-[300px]  h-16 "
      >
        <ul className="lg:flex lg:space-x-2 hidden lg:flex-row">
          <li>
            <NavLink
              to="/"
              className="mx-[5px] uppercase text-[10px] lg:mb-0 mb-[10px] hover:text-[#d77b5d] font-bold leading-[44px] tracking-[2px] duration-200 cursor-pointer text-white font-heading"
              aria-current="page"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className="mx-[5px] uppercase text-[10px] lg:mb-0 mb-[10px] hover:text-[#d77b5d] font-bold leading-[44px] tracking-[2px] duration-200 cursor-pointer text-white font-heading"
              aria-current="page"
            >
              About Us
            </NavLink>
          </li>
          <li onMouseEnter={handleRoomOpen} onMouseLeave={handleRoomClose}>
            <NavLink
              to="/rooms"
              className={`p-[10px] uppercase text-[10px] lg:mb-0 mb-[10px] ${
                roomOpen && " border-t border-[#d77b5d] bg-[#1a2436]"
              } font-bold leading-[44px] tracking-[2px] duration-200 cursor-pointer text-white font-heading`}
              aria-current="page"
            >
              Rooms
            </NavLink>
            <div
              className={`z-10  mt-5 absolute p-1 ${
                roomOpen
                  ? " -translate-y-7 translate-x-0  opacity-100 duration-300"
                  : "-translate-y-7 translate-x-0 opacity-0 pointer-events-none duration-300"
              } -translate-x-10  font-normal bg-[#1a2436] divide-y divide-gray-100 shadow w-fit `}
            >
              <ul className="py-2 text-sm text-white">
                <li>
                  <NavLink
                    to="/rooms"
                    className="block uppercase px-2 text-[11px] font-heading tracking-[2px] font-extrabold py-2  dark:hover:bg-gray-600 dark:hover:text-white hover:text-[#d77b5d] "
                  >
                    Room Listing
                  </NavLink>
                </li>
                <li>
                  <a
                    href="#"
                    className="block uppercase px-2 text-[11px] font-heading tracking-[2px] font-extrabold py-2  dark:hover:bg-gray-600 dark:hover:text-white hover:text-[#d77b5d] "
                  >
                    Rooms Details
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NavLink
              to="/services"
              className="mx-[5px] uppercase text-[10px] lg:mb-0 mb-[10px] hover:text-[#d77b5d] font-bold leading-[44px] tracking-[2px] duration-200 cursor-pointer text-white font-heading"
              aria-current="page"
            >
              Services
            </NavLink>
          </li>
        </ul>

        <NavLink to="/">
          <img
            className="h-[70px] w-[220px] "
            src="https://ninetheme.com/themes/grandium/wp-content/themes/grandium/img/logo.png"
            alt=""
          />
        </NavLink>
        <ul className="lg:flex lg:space-x-2 hidden lg:flex-row">
          <li>
            <NavLink
              to="/gallery"
              className="mx-[5px] uppercase text-[10px] lg:mb-0 mb-[10px] hover:text-[#d77b5d] font-bold leading-[44px] tracking-[2px] duration-200 cursor-pointer text-white font-heading"
              aria-current="page"
            >
              Gallery
            </NavLink>
          </li>
          <li
            onMouseEnter={handleBookingOpen}
            onMouseLeave={handleBookingClose}
          >
            <a
              href="#"
              className={`p-[10px] uppercase text-[10px] lg:mb-0 mb-[10px] ${
                bookingOpen && " border-t border-[#d77b5d] bg-[#1a2436]"
              } font-bold leading-[44px] tracking-[2px] duration-200 cursor-pointer text-white font-heading`}
              aria-current="page"
            >
              Booking
            </a>
            <div
              className={`z-10  mt-5 absolute p-1 ${
                bookingOpen
                  ? " -translate-y-7 translate-x-0  opacity-100 duration-300"
                  : "-translate-y-7 translate-x-0 opacity-0 pointer-events-none duration-300"
              } -translate-x-10  font-normal bg-[#1a2436] divide-y divide-gray-100 shadow w-fit `}
            >
              <ul className="py-2 text-sm text-white">
                <li>
                  <a
                    href="#"
                    className="block uppercase px-2 text-[11px] font-heading tracking-[2px] font-extrabold py-2  dark:hover:bg-gray-600 dark:hover:text-white hover:text-[#d77b5d] "
                  >
                    Booking Appointment
                  </a>
                </li>
                <NavLink
                  to="/Booking"
                  className="mx-[5px] uppercase text-[10px] lg:mb-0 mb-[10px] hover:text-[#d77b5d] font-bold leading-[44px] tracking-[2px] duration-200 cursor-pointer text-white font-heading"
                  aria-current="page"
                >
                  Booking - Contact Form
                </NavLink>

                <li>
                  <a
                    href="#"
                    className="block uppercase px-2 text-[11px] font-heading tracking-[2px] font-extrabold py-2  dark:hover:bg-gray-600 dark:hover:text-white hover:text-[#d77b5d] "
                  >
                    Hotel Booking
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li onMouseEnter={handleBlogOpen} onMouseLeave={handleBlogClose}>
            <a
              href="#"
              className={`p-[10px] uppercase text-[10px] lg:mb-0 mb-[10px] ${
                blogOpen && " border-t border-[#d77b5d] bg-[#1a2436]"
              } font-bold leading-[44px] tracking-[2px] duration-200 cursor-pointer text-white font-heading`}
              aria-current="page"
            >
              Blog
            </a>
            <div
              className={`z-10  mt-5 absolute p-1 ${
                blogOpen
                  ? " -translate-y-7 translate-x-0  opacity-100 duration-300"
                  : "-translate-y-7 translate-x-0 opacity-0 pointer-events-none duration-300"
              } -translate-x-10  font-normal bg-[#1a2436] divide-y divide-gray-100 shadow w-fit `}
            >
              <ul className="py-2 text-sm text-white">
                <li>
                  <a
                    href="#"
                    className="block uppercase px-2 text-[11px] font-heading tracking-[2px] font-extrabold py-2  dark:hover:bg-gray-600 dark:hover:text-white hover:text-[#d77b5d] "
                  >
                    Blog Listing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block uppercase px-2 text-[11px] font-heading tracking-[2px] font-extrabold py-2  dark:hover:bg-gray-600 dark:hover:text-white hover:text-[#d77b5d] "
                  >
                    Blog single vimeo
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block uppercase px-2 text-[11px] font-heading tracking-[2px] font-extrabold py-2  dark:hover:bg-gray-600 dark:hover:text-white hover:text-[#d77b5d] "
                  >
                    Blog single youtube
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block uppercase px-2 text-[11px] font-heading tracking-[2px] font-extrabold py-2  dark:hover:bg-gray-600 dark:hover:text-white hover:text-[#d77b5d] "
                  >
                    Blog single photo
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block uppercase px-2 text-[11px] font-heading tracking-[2px] font-extrabold py-2  dark:hover:bg-gray-600 dark:hover:text-white hover:text-[#d77b5d] "
                  >
                    Blog single gallery
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="mx-[5px] uppercase text-[10px] lg:mb-0 mb-[10px] hover:text-[#d77b5d] font-bold leading-[44px] tracking-[2px] duration-200 cursor-pointer text-white font-heading"
              aria-current="page"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <button
          onClick={handleOpen}
          className="flex items-center absolute md:top-2 md:right-[40px] -bottom-[30px] z-20 p-2 w-[60px] h-[60px] justify-center text-sm text-white bg-[#d77b5d] rounded-full lg:hidden"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-[12px] h-[14px]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NavSection