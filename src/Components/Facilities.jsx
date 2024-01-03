import React, { useContext } from "react";
import { FacilitesGalleryContext } from "../contexts/FacilitesGallery";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Facilities = () => {
  const CustomPrevArrow = (props) => (
    <div
      className="custom-prev-arrow p-3 md:py-3 md:px-5  bg-white inline-block absolute top-[35%] left-0 md:left-[20%] lg:xl:2xl:left-[26%] z-20"
      onClick={props.onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8 text-[#d77b5d]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
        />
      </svg>
    </div>
  );

  const CustomNextArrow = (props) => (
    <div
      className="custom-next-arrow p-3 md:py-3 md:px-5  bg-white inline-block absolute top-[35%] right-0 md:right-[20%] lg:xl:2xl:right-[27%] z-30"
      onClick={props.onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8 text-[#d77b5d]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
        />
      </svg>
    </div>
  );
  const { gallery } = useContext(FacilitesGalleryContext);
  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    focusOnSelect: true,
    infinite: true,
    speed: 600,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="">
      <div className="relative bg-no-repeat lg:bg-[url(https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-about.jpg)] bg-right ">
        <div className=" max-w-[1300px] bg-perfect-before md:py-[100px] py-[40px] lg:px-[60px] px-[40px] mx-auto">
          <div className="relative lg:w-[50%] w-full inline-block  lg:text-left ">
            <div>
              <p className="text-[#d77b5d] tracking-[0.125rem] text-[12px] mb-[10px] md:mt-0 mt-[20px] font-heading font-black">
                ABOUT THE GRANDIUM{" "}
              </p>
              <h1 className="md:text-[48px] text-[34px] sm:leading-[37.4px] md:mb-[40px] !mb-[20px]">
                Your Perfect Escape
              </h1>
            </div>
            <div className="my-8">
              <p className="md:text-[18px] text-[14px] leading-[30px] text-justify text-[#24324a]  lg:text-left  break-all font-san mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque eget commodo orci. Integer varius nibh eu mattis
                porta. Pellentesque dictum sem eget cursus semper. Nullam quis
                blandit lorem. Morbi blandit orci urna, eu congue magna faucibus
                at. In bibendum in mauris nec ultrices. Nunc et magna velit.
              </p>
              <p className="md:text-[18px] text-[14px] leading-[30px] text-[#24324a]  lg:text-left text-justify  break-all font-san mb-14">
                Nulla vel nisi felis. Vivamus vitae ex a magna cursus pretium.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Pellentesque nec ante euismod, posuere
                turpis facilisis, fringilla odio. Nunc eget purus at dolor
                venenatis cursus et non arcu. Praesent rutrum condimentum risus,
                sed interdum purus euismod eget.
              </p>
            </div>
            <a className="uppercase w-full md:w-auto block py-3 text-xs font-heading bg-[#d77b5d] text-white tracking-widest  font-semibold  md:inline-block lg:xl:2xl:inline-block md:py-2  md:px-6 lg:xl:2xl:px-6 md:lg:xl:2xl:py-3 cursor-pointer text-center ">
              learn More
            </a>
          </div>
        </div>
      </div>
      <section className="bg-white h-full">
        <div className="container px-5 pt-5 md:lg:xl:pt-24 md:lg:xl:pb-10 mx-auto ">
          <div className="flex flex-col text-center w-full mb-12 md:mb-15 lg:mb-20">
            <h2 className="text-[#d77b5d] font-heading font-bold text-sm tracking-widest mb-1">
              OUR FACILITIES
            </h2>
            <h1 className="text-2xl text-[#24324a] font-san lg:text-5xl">
              Explore The Grandium
            </h1>
            <p className="lg:w-[52%] text-center mx-auto leading-8 text-[#24324a] text-sm md:text-lg md:mx-5 lg:mx-auto lg:text-xl font-san mt-3 md:mt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque eget commodo orci. Integer varius nibh eu mattis
              porta. Pellentesque dictum sem eget cursus semper. Nullam quis
              blandit lorem.
            </p>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-10 px-5 md:px-28">
          <div className="md:col-span-1 lg:col-span-4">
            <div className="border-[20px] border-white inline-block   mb-10">
              <div className=" relative bg-[url(https://preview.locotheme.com/grandium-html/assets/img/photo-services-1-2.jpg)]  w-[380px] h-[450px] overflow-hidden bg-cover">
                <div className="absolute w-full bg-gradient-to-t from-[#24324a] to-transparent px-8 pt-10 h-2/3 bottom-0 translate-y-28 hover:translate-y-20 duration-300">
                  <h1 className=" font-san text-3xl text-white mb-3">
                    Sky Bar & Lounge
                  </h1>
                  <p className="text-white leading-5 font-san">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque eget commodo orci. Integer varius nibh eu
                    mattis porta.
                  </p>
                </div>
              </div>
            </div>
            <div className=" border-[20px] border-white inline-block  mb-10 ">
              <div className=" relative bg-[url(https://preview.locotheme.com/grandium-html/assets/img/photo-services-4-1.jpg)] w-[380px] h-[450px] overflow-hidden bg-cover">
                <div className="absolute w-full bg-gradient-to-t from-[#24324a] to-transparent px-8 pt-10 h-2/3 bottom-0 translate-y-28 hover:translate-y-20 duration-300">
                  <h1 className=" font-san text-3xl text-white mb-3">
                    Private Dining
                  </h1>
                  <p className="text-white leading-5 font-san">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque eget commodo orci. Integer varius nibh eu
                    mattis porta.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-1 lg:col-span-4">
            {" "}
            <div className=" border-[20px] border-white inline-block mb-10 ">
              <div className=" relative bg-[url(https://preview.locotheme.com/grandium-html/assets/img/photo-services-2-1.jpg)]  w-[380px] h-[450px] overflow-hidden bg-cover">
                <div className="absolute w-full bg-gradient-to-t from-[#24324a] to-transparent px-8 pt-10 h-2/3 bottom-0 translate-y-28 hover:translate-y-20 duration-300">
                  <h1 className=" font-san text-3xl text-white mb-3">
                    Conference & Events
                  </h1>
                  <p className="text-white leading-5 font-san">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque eget commodo orci. Integer varius nibh eu
                    mattis porta.
                  </p>
                </div>
              </div>
            </div>
            <div className=" border-[20px] border-white inline-block mb-10 ">
              <div className=" relative bg-[url(https://preview.locotheme.com/grandium-html/assets/img/photo-services-5-1.jpg)]  w-[380px] h-[450px] overflow-hidden bg-cover">
                <div className="absolute w-full bg-gradient-to-t from-[#24324a] to-transparent px-8 pt-10 h-2/3 bottom-0 translate-y-28 hover:translate-y-20 duration-300">
                  <h1 className=" font-san text-3xl text-white mb-3">
                    Wedding Venue
                  </h1>
                  <p className="text-white leading-5 font-san">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque eget commodo orci. Integer varius nibh eu
                    mattis porta.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-1 lg:col-span-4">
            <div className=" border-[20px] border-white inline-block mb-10 ">
              <div className=" relative bg-[url(https://preview.locotheme.com/grandium-html/assets/img/photo-services-3-1.jpg)]  w-[380px] h-[450px] overflow-hidden bg-cover">
                <div className="absolute w-full bg-gradient-to-t from-[#24324a] to-transparent px-8 pt-10 h-2/3 bottom-0 translate-y-28 hover:translate-y-20 duration-300">
                  <h1 className=" font-san text-3xl text-white mb-3">
                    Spa & Beauty Center
                  </h1>
                  <p className="text-white leading-5 font-san">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque eget commodo orci. Integer varius nibh eu
                    mattis porta.
                  </p>
                </div>
              </div>
            </div>
            <div className=" border-[20px] border-white inline-block mb-10  ">
              <div className=" relative bg-[url(https://preview.locotheme.com/grandium-html/assets/img/photo-services-6-1.jpg)]  w-[380px] h-[450px] overflow-hidden bg-cover">
                <div className="absolute w-full bg-gradient-to-t from-[#24324a] to-transparent px-8 pt-10 h-2/3 bottom-0 translate-y-28 hover:translate-y-20 duration-300">
                  <h1 className=" font-san text-3xl text-white mb-3">
                    Swimming Pool
                  </h1>
                  <p className="text-white leading-5 font-san">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque eget commodo orci. Integer varius nibh eu
                    mattis porta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className=" flex flex-wrap    lg:px-28 ">
          <div className="lg:w-1/3 md:w-1/2 w-full px-2 md:px-10">
            <div className="border-[20px] border-white inline-block   mb-10">
              <div className=" relative bg-[url(https://preview.locotheme.com/grandium-html/assets/img/photo-services-1-2.jpg)]  w-[350px] md:w-[250px] md:h-[250px] lg:w-[380px] h-[450px] lg:xl:2xl:h-[450px] overflow-hidden bg-cover">
                <div className="absolute w-full bg-gradient-to-t from-[#24324a] to-transparent px-8 lg:px-8 md:px-3 pt-10 h-2/3 bottom-0 translate-y-[70%] md:translate-y-0 lg:translate-y-28 hover:translate-y-20 duration-300">
                  <h1 className=" font-san text-3xl md:text-lg lg:text-3xl text-center md:text-left  text-white mb-3">
                    Sky Bar & Lounge
                  </h1>
                  <p className="text-white leading-5 md:text-xs text-base lg:text-base font-san">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque eget commodo orci. Integer varius nibh eu
                    mattis porta.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-2 md:px-10">
            <div className=" border-[20px] border-white inline-block  mb-10 ">
              <div className=" relative bg-[url(https://preview.locotheme.com/grandium-html/assets/img/photo-services-4-1.jpg)] w-[350px] md:w-[250px] md:h-[250px] lg:w-[380px] h-[450px] lg:xl:2xl:h-[450px] overflow-hidden bg-cover">
                <div className="absolute w-full bg-gradient-to-t from-[#24324a] to-transparent px-8 lg:px-8 md:px-3 pt-10 h-2/3 bottom-0 translate-y-[70%] md:translate-y-0 lg:translate-y-28 hover:translate-y-20 duration-300">
                  <h1 className=" font-san md:text-lg text-3xl lg:text-3xl text-center md:text-left  text-white mb-3">
                    Private Dining
                  </h1>
                  <p className="text-white leading-5 md:text-xs text-base lg:text-base font-san">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque eget commodo orci. Integer varius nibh eu
                    mattis porta.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-2 md:px-10">
            <div className=" border-[20px] border-white inline-block mb-10 ">
              <div className=" relative bg-[url(https://preview.locotheme.com/grandium-html/assets/img/photo-services-2-1.jpg)]  w-[350px] md:w-[250px] md:h-[250px] lg:w-[380px] h-[450px] lg:xl:2xl:h-[450px] overflow-hidden bg-cover">
                <div className="absolute w-full bg-gradient-to-t from-[#24324a] to-transparent px-8 lg:px-8 md:px-3 pt-10 h-2/3 bottom-0 translate-y-[70%] md:translate-y-0 lg:translate-y-28 hover:translate-y-20 duration-300">
                  <h1 className="font-san md:text-lg lg:text-3xl text-center text-3xl md:text-left  text-white mb-3">
                    Conference & Events
                  </h1>
                  <p className="text-white leading-5 md:text-xs text-base lg:text-base font-san">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque eget commodo orci. Integer varius nibh eu
                    mattis porta.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-2 md:px-10">
            <div className=" border-[20px] border-white inline-block mb-10 ">
              <div className=" relative bg-[url(https://preview.locotheme.com/grandium-html/assets/img/photo-services-5-1.jpg)]  w-[350px] md:w-[250px] md:h-[250px] lg:w-[380px] h-[450px] lg:xl:2xl:h-[450px] overflow-hidden bg-cover">
                <div className="absolute w-full bg-gradient-to-t from-[#24324a] to-transparent px-8 lg:px-8 md:px-3 pt-10 h-2/3 bottom-0 translate-y-[70%] md:translate-y-0 lg:translate-y-28 hover:translate-y-20 duration-300">
                  <h1 className="font-san md:text-lg lg:text-3xl text-3xl text-center md:text-left  text-white mb-3">
                    Wedding Venue
                  </h1>
                  <p className="text-white leading-5 md:text-xs text-base lg:text-base font-san">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque eget commodo orci. Integer varius nibh eu
                    mattis porta.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-2 md:px-10">
            <div className=" border-[20px] border-white inline-block mb-10 ">
              <div className=" relative bg-[url(https://preview.locotheme.com/grandium-html/assets/img/photo-services-3-1.jpg)]  w-[350px] md:w-[250px] md:h-[250px] lg:w-[380px] h-[450px] lg:xl:2xl:h-[450px] overflow-hidden bg-cover">
                <div className="absolute w-full bg-gradient-to-t from-[#24324a] to-transparent px-8 lg:px-8 md:px-3 pt-10 h-2/3 bottom-0 translate-y-[70%] md:translate-y-0 lg:translate-y-28 hover:translate-y-20 duration-300">
                  <h1 className="font-san md:text-lg lg:text-3xl text-3xl text-center md:text-left  text-white mb-3">
                    Spa & Beauty Center
                  </h1>
                  <p className="text-white leading-5 md:text-xs text-base lg:text-base font-san">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque eget commodo orci. Integer varius nibh eu
                    mattis porta.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-2 md:px-10">
            <div className=" border-[20px] border-white inline-block mb-10 ">
              <div className=" relative bg-[url(https://preview.locotheme.com/grandium-html/assets/img/photo-services-6-1.jpg)]   w-[350px] md:w-[250px] md:h-[250px] lg:w-[380px] h-[450px] lg:xl:2xl:h-[450px] overflow-hidden bg-cover">
                <div className="absolute w-full bg-gradient-to-t from-[#24324a] to-transparent px-8 lg:px-8 md:px-3 pt-10 h-2/3 bottom-0 translate-y-[70%] md:translate-y-0 lg:translate-y-28 hover:translate-y-20 duration-300">
                  <h1 className=" font-san md:text-lg lg:text-3xl text-3xl text-center md:text-left  text-white mb-3">
                    Swimming Pool
                  </h1>
                  <p className="text-white leading-5 md:text-xs text-base lg:text-base font-san">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque eget commodo orci. Integer varius nibh eu
                    mattis porta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container px-5 py-5 md:py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12 md:mb-20">
            <h2 className="text-[#d77b5d] font-heading  font-bold text-sm tracking-widest mb-1">
              GALLERY
            </h2>
            <h1 className="text-2xl text-[#24324a] font-san lg:text-5xl">
              Discover The Grandium
            </h1>
            <p className="lg:w-[52%] text-center mx-auto leading-8 text-[#24324a] text-sm md:text-xl font-san mt-3 md:mt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque eget commodo orci. Integer varius nibh eu mattis
              porta. Pellentesque dictum sem eget cursus semper. Nullam quis
              blandit lorem.
            </p>
          </div>
        </div>

        {/* Slider Section */}
        <div className=" mx-0 opacity-70">
          <Slider {...settings}>
            {gallery.map(({ id, src, title }) => (
              // <div className="" key={id}>
              //   <img className="w-[450px] " src={src} key={id} alt="" />
              //   <h1 className="font-san text-white font-semibold  text-3xl">
              //     {title}
              //   </h1>
              // </div>

              <div
                key={id}
                className=" opacity-100 border-[30px] border-gray-50 inline-block mb-10 "
              >
                <div
                  key={id}
                  className=" relative  w-full h-[500px]  bg-cover bg-center"
                  style={{ backgroundImage: `url(${src})` }}
                >
                  <div
                    key={id}
                    className="absolute w-full bg-transparent px-8 lg:px-8 md:px-3 pt-10 bottom-10"
                  >
                    <h1
                      key={id}
                      className=" font-san md:text-xl  font-medium tracking-wider lg:text-2xl text-3xl text-center  text-white mb-3"
                    >
                      {title}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
            {/* Add more slides as needed */}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
