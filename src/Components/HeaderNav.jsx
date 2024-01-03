import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeaderNav = () => {
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
    <header className="min-h-[110px] bg-gray">
      <div className=" max-w-[1300px] px-0 mx-auto my-0">
        <div className=" flex  lg:items-start justify-center lg:justify-around relative md:pb-0 pb-[60px]">
          <ul className="lg:flex lg:space-x-2 hidden lg:flex-row">
            <li>
              <Link
                to="/"
                className="mx-[10px] uppercase text-[12px] lg:mb-0 mb-[10px] hover:text-[#d77b5d] font-bold leading-[44px] tracking-[2px] duration-200 cursor-pointer text-white font-heading"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="mx-[10px] uppercase text-[12px] lg:mb-0 mb-[10px] hover:text-[#d77b5d] font-bold leading-[44px] tracking-[2px] duration-200 cursor-pointer text-white font-heading"
                aria-current="page"
              >
                About Us
              </Link>
            </li>
            <li onMouseEnter={handleRoomOpen} onMouseLeave={handleRoomClose}>
              <Link
                to="/rooms"
                className={`p-[10px] uppercase text-[12px] lg:mb-0 mb-[10px] ${
                  roomOpen && " border-t border-[#d77b5d] bg-[#1a2436]"
                } font-bold leading-[44px] tracking-[2px] duration-200 cursor-pointer text-white font-heading`}
                aria-current="page"
              >
                Rooms
              </Link>
              <div
                className={`z-10  mt-5 absolute p-1 ${
                  roomOpen
                    ? " -translate-y-7 translate-x-0  opacity-100 duration-300"
                    : "-translate-y-7 translate-x-0 opacity-0 pointer-events-none duration-300"
                } -translate-x-10  font-normal bg-[#1a2436] divide-y divide-gray-100 shadow w-fit `}
              >
                <ul className="py-2 text-sm text-white">
                  <li>
                    <Link
                      to="/rooms"
                      className="block uppercase px-2 text-[11px] font-heading tracking-[2px] font-extrabold py-2  dark:hover:bg-gray-600 dark:hover:text-white hover:text-[#d77b5d] "
                    >
                      Room Listing
                    </Link>
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
              <Link
                to="/services"
                className="mx-[10px] uppercase text-[12px] lg:mb-0 mb-[10px] hover:text-[#d77b5d] font-bold leading-[44px] tracking-[2px] duration-200 cursor-pointer text-white font-heading"
                aria-current="page"
              >
                Services
              </Link>
            </li>
          </ul>

          <Link to="/">
            <img
              className="h-[70px] w-[220px]"
              src="https://ninetheme.com/themes/grandium/wp-content/themes/grandium/img/logo.png"
              alt=""
            />
          </Link>
          <ul className="lg:flex lg:space-x-2 hidden lg:flex-row">
            <li>
              <Link
                to="/gallery"
                className="mx-[10px] uppercase text-[12px] lg:mb-0 mb-[10px] hover:text-[#d77b5d] font-bold leading-[44px] tracking-[2px] duration-200 cursor-pointer text-white font-heading"
                aria-current="page"
              >
                Gallery
              </Link>
            </li>
            <li
              onMouseEnter={handleBookingOpen}
              onMouseLeave={handleBookingClose}
            >
              <Link
                to="/booking"
                className={`p-[10px] uppercase text-[12px] lg:mb-0 mb-[10px] ${
                  bookingOpen && " border-t border-[#d77b5d] bg-[#1a2436]"
                } font-bold leading-[44px] tracking-[2px] duration-200 cursor-pointer text-white font-heading`}
                aria-current="page"
              >
                Booking
              </Link>
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
                  <li>
                    <Link
                      to="/booking"
                      className="block uppercase px-2 text-[11px] font-heading tracking-[2px] font-extrabold py-2  dark:hover:bg-gray-600 dark:hover:text-white hover:text-[#d77b5d] "
                    >
                      Booking - Contact Form
                    </Link>
                  </li>
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
                className={`p-[10px] uppercase text-[12px] lg:mb-0 mb-[10px] ${
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
              <a
                href="#"
                className="mx-[10px] uppercase text-[12px] lg:mb-0 mb-[10px] hover:text-[#d77b5d] font-bold leading-[44px] tracking-[2px] duration-200 cursor-pointer text-white font-heading"
                aria-current="page"
              >
                Contact
              </a>
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
        <div
          className={`z-10 ${
            open ? "" : "hidden"
          } font-normal rounded-lg w-full`}
        >
          <ul className=" text-sm text-white text-center py-[40px] w-full">
            <li>
              <Link
                to="/"
                className=" uppercase text-[12px] lg:mb-0 mb-[10px] hover:text-[#d77b5d] font-bold leading-[44px] tracking-[2px] duration-200 cursor-pointer text-white font-heading "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className=" uppercase text-[12px] lg:mb-0 mb-[10px] hover:text-[#d77b5d] font-bold leading-[44px] tracking-[2px] duration-200 cursor-pointer text-white font-heading "
              >
                About Us
              </Link>
            </li>
            <li className={`${roomSOpen ? " bg-black" : " bg-transparent"}`}>
              <Link
                to="/rooms"
                className={`p-[10px] uppercase text-[12px] lg:mb-0 mb-[10px] font-bold leading-[44px] tracking-[2px] duration-200 cursor-pointer text-white font-heading`}
                aria-current="page"
                onClick={handleRoomSOpen}
                onBlur={handleRoomSOpen}
              >
                Rooms
              </Link>

              <div
                className={`z-10 ${
                  roomSOpen ? "" : "hidden"
                } font-normal rounded-lg w-full`}
              >
                <ul className="py-2 text-sm text-white">
                  <li>
                    <Link
                      to="/rooms"
                      className="block uppercase px-2 text-[11px] font-heading tracking-[2px] font-extrabold pb-2  dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Room Listing
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block uppercase px-2 text-[11px] font-heading tracking-[2px] font-extrabold py-2  dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Rooms Details
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link
                to="/services"
                className=" uppercase text-[12px] lg:mb-0 mb-[10px] hover:text-[#d77b5d] font-bold leading-[44px] tracking-[2px] duration-200 cursor-pointer text-white font-heading "
              >
                Services
              </Link>
            </li>
            <li>
              <a
                href=""
                className=" uppercase text-[12px] lg:mb-0 mb-[10px] hover:text-[#d77b5d] font-bold leading-[44px] tracking-[2px] duration-200 cursor-pointer text-white font-heading "
              >
                Gallery
              </a>
            </li>
            <li className={`${bookingSOpen ? " bg-black" : " bg-transparent"}`}>
              <a
                href="#"
                className={`p-[10px] uppercase text-[12px] lg:mb-0 mb-[10px] font-bold leading-[44px] tracking-[2px] duration-200 cursor-pointer text-white font-heading`}
                aria-current="page"
                onClick={handleBookingSOpen}
                onBlur={handleBookingSOpen}
              >
                Booking
              </a>
              <div
                className={`z-10 ${
                  bookingSOpen ? "" : "hidden"
                } font-normal rounded-lg w-full`}
              >
                <ul className="py-2 text-sm text-white">
                  <li>
                    <a
                      href="#"
                      className="block uppercase px-2 text-[11px] font-heading tracking-[2px] font-extrabold pb-2  dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Booking appointment
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block uppercase px-2 text-[11px] font-heading tracking-[2px] font-extrabold py-2  dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Booking - contact form
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block uppercase px-2 text-[11px] font-heading tracking-[2px] font-extrabold py-2  dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Hotel booking
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className={`${blogSOpen ? " bg-black" : " bg-transparent"}`}>
              <a
                href="#"
                className={`p-[10px] uppercase text-[12px] lg:mb-0 mb-[10px] font-bold leading-[44px] tracking-[2px] duration-200 cursor-pointer text-white font-heading`}
                aria-current="page"
                onClick={handleBlogSOpen}
                onBlur={handleBlogSOpen}
              >
                Blog
              </a>
              <div
                className={`z-10 ${
                  blogSOpen ? "" : "hidden"
                } font-normal rounded-lg w-full`}
              >
                <ul className="py-2 text-sm text-white">
                  <li>
                    <a
                      href="#"
                      className="block uppercase px-2 text-[11px] font-heading tracking-[2px] font-extrabold pb-2  dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Blog Listing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block uppercase px-2 text-[11px] font-heading tracking-[2px] font-extrabold py-2  dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Blog single vimeo
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block uppercase px-2 text-[11px] font-heading tracking-[2px] font-extrabold py-2  dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Blog single youtube
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block uppercase px-2 text-[11px] font-heading tracking-[2px] font-extrabold py-2  dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Blog single photo
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block uppercase px-2 text-[11px] font-heading tracking-[2px] font-extrabold py-2  dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Blog single gallery
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href=""
                className=" uppercase text-[12px] lg:mb-0 mb-[10px] hover:text-[#d77b5d] font-bold leading-[44px] tracking-[2px] duration-200 cursor-pointer text-white font-heading "
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
