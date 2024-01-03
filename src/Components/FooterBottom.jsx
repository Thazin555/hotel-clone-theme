import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const FooterBottom = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#24324a] pt-[100px] pb-[100px] text-white text-center">
      <div className=" max-w-[1300px] md:px-[60px] px-[40px] mx-auto my-0">
        <div className="">
          <div className=" block max-w-[220px] mx-auto">
            <Link to="/">
              <img
                className=" "
                src="https://ninetheme.com/themes/grandium/wp-content/themes/grandium/img/logo.png"
                alt=""
              />
            </Link>
          </div>
          <p className=" !text-[#818a9c] mt-[30px] text-[11px] font-extrabold tracking-[0.125rem] font-heading">
            THE GRANDIUM HOTEL - ninetheme.com
          </p>
          <div className="flex lg:justify-center lg:items-center lg:flex-row flex-col text-[#818a9c] mt-[30px]">
            <div className=" flex justify-center lg:mb-0 mb-[10px] mx-[10px] items-baseline">
              <svg
                className=" h-2 w-2 me-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                fill="#818a9c"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <p className=" text-[11px] font-heading tracking-[0.125rem] font-extrabold">
                LONGRIDGE ROAD, EARLS COURT, LONDON
              </p>
            </div>
            <div className=" flex justify-center lg:mb-0 mb-[10px] mx-[10px] items-baseline">
              <svg
                className=" h-2 w-2 me-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#818a9c"
                viewBox="0 0 512 512"
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
              <p className=" text-[11px] font-heading tracking-[0.125rem] font-extrabold">
                +1-800-123-45-67
              </p>
            </div>
            <a
              href=""
              className=" flex justify-center lg:mb-0 mb-[10px] mx-[10px] items-center duration-200 group flex-column"
            >
              <svg
                className="h-2 w-2 me-1 group-hover:fill-white duration-200"
                xmlns="http://www.w3.org/2000/svg"
                fill="#818a9c"
                viewBox="0 0 512 512"
              >
                <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
              </svg>
              <p className="text-[11px] group-hover:text-white duration-200 font-heading font-bold tracking-[0.125rem]">
                INFO@THEgrandiumHOTEL.COM
              </p>
            </a>
          </div>
          <div className=" mt-[30px]">
            <div className=" max-w-[1300px] mx-auto">
              <nav className="flex flex-wrap lg:items-center lg:flex-row flex-col lg:justify-center pt-[30px] text-white font-heading">
                <Link
                  to="/"
                  className=" mx-[10px] uppercase text-[11px] lg:mb-0 mb-[10px] hover:text-[#d77b5d] hover:font-extrabold duration-200 cursor-pointer"
                >
                  Home
                </Link>

                <Link
                  to="/rooms"
                  className="mx-[10px] uppercase text-[11px] lg:mb-0 mb-[10px] hover:text-[#d77b5d] hover:font-extrabold duration-200 cursor-pointer"
                >
                  Rooms
                </Link>
                <Link
                  to="/about-us"
                  className="mx-[10px] uppercase text-[11px] lg:mb-0 mb-[10px] hover:text-[#d77b5d] hover:font-extrabold duration-200 cursor-pointer"
                >
                  About us
                </Link>
                <a className="mx-[10px] uppercase text-[11px] lg:mb-0 mb-[10px] hover:text-[#d77b5d] hover:font-extrabold duration-200 cursor-pointer">
                  Blog
                </a>
                <Link
                  to="/booking"
                  className="mx-[10px] uppercase text-[11px] lg:mb-0 mb-[10px] hover:text-[#d77b5d] hover:font-extrabold duration-200 cursor-pointer"
                >
                  Booking
                </Link>
                <Link
                  to="/gallery"
                  className="mx-[10px] uppercase text-[11px] lg:mb-0 mb-[10px] hover:text-[#d77b5d] hover:font-extrabold duration-200 cursor-pointer"
                >
                  Gallery
                </Link>

                <Link
                  to="/Contact"
                  className="mx-[10px] uppercase text-[11px] lg:mb-0 mb-[10px] hover:text-[#d77b5d] hover:font-extrabold duration-200 cursor-pointer"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom