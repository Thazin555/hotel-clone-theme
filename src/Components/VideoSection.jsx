import { Play } from "@phosphor-icons/react";
import React, { useState } from "react";

const VideoSection = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  return (
    <section>
      <div className="relative">
        <img
          alt="gallery"
          className="xl:aspect-video lg:w-full md:aspect-square xl:h-[756px] lg:h-[786px] md:h-auto h-[610px] object-cover"
          src="https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/thumb-video-full.jpg?id=87"
        />
        <div className="flex flex-wrap xl:top-0 lg:absolute lg:left-0 lg:right-0 lg:mx-auto lg:top-12 md:absolute md:top-0 md:left-0 md:right-0 md:mx-auto absolute top-0 left-0 right-0 mx-auto">
          <div className="xl:py-[100px] lg:py-[100px] md:py-[100px] py-10 relative z-10 w-full">
            <div className="text-center xl:mb-[100px] lg:mb-[100px] md:mb-[100px] mb-12">
              <h4 className="text-[#d77b5d] font-heading text-xs tracking-[2px] font-semibold">
                OVERVIEW
              </h4>
              <h1 className="xl:text-5xl lg:text-5xl md:text-5xl text-[34px] font-san text-[#24324a]">
                Video Tour
              </h1>
              <p className="xl:text-lg lg:text-lg text-sm leading-6 font-san text-[#24324a] xl:max-w-[50vw] md:max-w-[70vw] lg:max-w-[70vw] max-w-[75vw] mx-auto xl:mt-[30px] lg:mt-[30px] md:mt-[30px] mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque eget commodo orci. Integer varius nibh eu mattis
                porta. Pellentesque dictum sem eget cursus semper. Nullam quis
                blandit lorem.
              </p>
            </div>
            <div className="">
              <button
                onClick={() => setPopupOpen(true)}
                className="w-[200px] h-[200px] bg-[#24324a]/50 rounded-full border-[10px] border-white block mx-auto relative hover:scale-110 duration-300"
              >
                <Play
                  size={36}
                  weight="fill"
                  className="text-white absolute left-0 right-0 top-0 bottom-0 m-auto"
                />
              </button>

              {isPopupOpen && (
                <div className="fixed xl:w-dvw lg:w-dvw md:w-dvw w-full xl:min-h-screen lg:min-h-screen md:min-h-screen h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80">
                  <button
                    onClick={() => setPopupOpen(false)}
                    className="absolute xl:right-[21%] xl:top-[85px] lg:top-[27%] lg:right-[5%] md:top-[27.5%] md:right-[3%] top-[31%] text-gray-400 hover:text-white xl:w-[58%] lg:w-[90%] md:w-[95%] w-[95%] xl:text-base lg:text-2xl custom-btn"
                  >
                    <span className="block translate-x-[49.5%]">&#x2716;</span>
                  </button>
                  <iframe
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 xl:w-[68%] xl:h-[68%] lg:w-[90%] lg:h-[90%] md:w-[95%] md:h-[95%] w-[95%] h-[95%] before:content-['something'] before:block before:absolute before:top-0 before:right-0 before:w-5 before:h-5 before:bg-green-500 custom-video"
                    src="https://player.vimeo.com/video/39493181?h=8dd641931a"
                    width={640}
                    height={360}
                    frameBorder={0}
                    allow="autoplay; fullscreen; picture-in-picture"
                    // allowFullScreen
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
