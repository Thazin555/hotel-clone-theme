import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";

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
    <header
      className={`absolute top-0 z-50 block w-full min-h-[110px] px-0 mx-auto my-0 ${
        open ? "bg-[#24324a]" : "bg-tranparent"
      }`}
    >
      <div className=" max-w-[1300px] mx-auto px-[60px] py-[50px]">
        <div className=" flex items-center gap-5">
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" hover:fill-white duration-300  w-[7px] "
              fill="#818a9c"
              viewBox="0 0 320 512"
            >
              <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
            </svg>
          </a>
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" hover:fill-white duration-300  w-3"
              fill="#818a9c"
              viewBox="0 0 512 512"
            >
              <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
            </svg>
          </a>
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" hover:fill-white duration-300  w-[15px]"
              fill="#818a9c"
              viewBox="0 0 640 512"
            >
              <path d="M386.1 228.5c1.8 9.7 3.1 19.4 3.1 32C389.2 370.2 315.6 448 204.8 448c-106.1 0-192-85.9-192-192s85.9-192 192-192c51.9 0 95.1 18.9 128.6 50.3l-52.1 50c-14.1-13.6-39-29.6-76.5-29.6-65.5 0-118.9 54.2-118.9 121.3 0 67.1 53.4 121.3 118.9 121.3 76 0 104.5-54.7 109-82.8H204.8v-66h181.3zm185.4 6.4V179.2h-56v55.7h-55.7v56h55.7v55.7h56v-55.7H627.2v-56h-55.7z" />
            </svg>
          </a>
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" hover:fill-white duration-300  w-3"
              fill="#818a9c"
              viewBox="0 0 448 512"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="max-w-[1300px] mx-auto">
        <div className=" flex  lg:items-start lg:!gap-[5rem] !gap-3 justify-center  relative md:pb-0 pb-[60px]">
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
              <Link
                  to="/Contact"
                className="mx-[10px] uppercase text-[12px] lg:mb-0 mb-[10px] hover:text-[#d77b5d] font-bold leading-[44px] tracking-[2px] duration-200 cursor-pointer text-white font-heading"
                aria-current="page"
              >
                Contact
              </Link>
            </li>
          </ul>
          <button
            onClick={handleOpen}
            onBlur={handleOpen}
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

export default NavSection
