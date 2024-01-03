import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MultipleItems = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings} className="top-[-40px] z-[250] ">
        {/* Slide 1 */}
        <div className="   ">
          <div className=" shadow-lg pb-10 mb-5 mx-8">
            <a href="#">
              <img
                className="rounded-sm w-full cursor-pointer transform -translate-y-10 filter  "
                src="https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-blog-big-3-353x353.jpg"
                alt="image description"
              />
              <h2 className="px-14  max-w-xl font-san mt-5 mb-5  text-[#24324a] text-center text-2xl font-normal hover:text-[#d77b5d] duration-200 ">
                The Ultimate Father’s Day Gift: The Grandium Hotel
              </h2>
            </a>
            <p className="max-w-md px-14 font-san text-[#818a9c] text-center text-sm">
              Ne duo laudem complectitur, et dicta scripserit his. Cu maiorum
              scriptorem sea, sea graecis temporibus ut
            </p>
          </div>
        </div>
        {/* Slide 2*/}
        <div>
          <div className=" shadow-lg pb-10 mb-5 mx-8">
            <a href="#">
              <img
                className="rounded-sm w-full cursor-pointer  filter  "
                src="https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-blog-4-353x353.jpg"
                alt="image description"
              />
              <h2 className="px-14  max-w-xl font-san mt-5 mb-5  text-[#24324a] text-center text-2xl font-normal hover:text-[#d77b5d] duration-200 ">
                Top Events in London This February
              </h2>
            </a>
            <p className="max-w-md px-14 font-san text-[#818a9c] text-center text-sm">
              Ne duo laudem complectitur, et dicta scripserit his. Cu maiorum
              scriptorem sea, sea graecis temporibus ut
            </p>
          </div>
        </div>
        {/* Slide 3 */}
        <div>
          <div className=" shadow-lg pb-16 mb-5 mx-8">
            <a href="#">
              <img
                className="rounded-sm w-full cursor-pointer  filter  "
                src="https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-slide-1-e1535645648206-353x353.jpg"
                alt="image description"
              />
              <h2 className="px-14  max-w-xl font-san mt-5 mb-5  text-[#24324a] text-center text-2xl font-normal hover:text-[#d77b5d] duration-200 ">
                A Walk from The Grandium Hotel Around{" "}
              </h2>
            </a>
            <p className="max-w-md px-14 font-san text-[#818a9c] text-center text-sm">
              Ne duo laudem complectitur, et dicta scripserit his. Cu maiorum
              scriptorem sea, sea graecis temporibus ut
            </p>
          </div>
        </div>
        {/* Slide 4 */}
        <div>
          <div className=" shadow-lg pb-16 mb-5 mx-8">
            <a href="#">
              <img
                className="rounded-sm w-full cursor-pointer  filter  "
                src="https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-services-2-1-353x353.jpg"
                alt="image description"
              />
              <h2 className="px-14  max-w-xl font-san mt-5 mb-5  text-[#24324a] text-center text-2xl font-normal hover:text-[#d77b5d] duration-200 ">
                Best Things to Do In London Enjoy the Nightlife
              </h2>
            </a>
            <p className="max-w-md px-14 font-san text-[#818a9c] text-center text-sm">
              Ne duo laudem complectitur, et dicta scripserit his. Cu maiorum
              scriptorem sea, sea graecis temporibus ut
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default MultipleItems;
