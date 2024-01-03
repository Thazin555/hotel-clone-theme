import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const BlogSection = () => {
  const [blogs, setBlog] = useState([
    {
      id: 1,
      img: "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-blog-big-3-319x319.jpg",
      title: "The Ultimate Father’s Day Gift: The Grandium Hotel",
      subTitle: "admin",
      description: "Ne duo laudem complectitur, et dicta scripserit hi",
      video: false,
      subImg: false,
    },
    {
      id: 2,
      img: "https://www.youtube.com/embed/SqeYP8EU79M",
      title: "Top Events in London This February",
      subTitle: "admin",
      description: "Ne duo laudem complectitur, et dicta scripserit hi",
      video: true,
      subImg: false,
    },
    {
      id: 3,
      img: "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-blog-big-3-319x319.jpg",
      title: "A Walk from The Grandium Hotel Around",
      subTitle: "admin",
      description: "Ne duo laudem complectitur, et dicta scripserit hi",
      video: false,
      subImg: true,
      images: [
        "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-blog-big-3-319x319.jpg",
        "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-gallery-17-319x319.jpg",
        "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-slide-1-e1535645648206-319x319.jpg",
      ],
    },
    {
      id: 4,
      img: "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-services-2-1-319x319.jpg",
      title: "Best Things to Do In London Enjoy the Nightlife",
      subTitle: "admin",
      description: "Ne duo laudem complectitur, et dicta scripserit hi",
      video: false,
      subImg: false,
    },
  ]);

  return (
    <section className="bg-[#f5f5f5]">
      <div className="mx-auto xl:pt-[100px] lg:pt-[100px] md:pt-[100px] pt-[40px] ">
        {/* text group  */}
        <div className="text-center text-[#24324a] xl:mb-[100px] md:mb-[100px] mb-[40px]">
          <h4 className="text-[#d77b5d] font-heading text-xs tracking-[2px] font-semibold">
            BLOG
          </h4>
          <h1 className="xl:text-5xl md:text-5xl text-4xl font-san">
            Latest News
          </h1>
          <p className="xl:text-lg md:text-lg text-sm leading-6 font-san xl:max-w-[50vw] md:max-w-[70vw] max-w-[80vw] mx-auto mt-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eget commodo orci. Integer varius nibh eu mattis porta.
            Pellentesque dictum sem eget cursus semper. Nullam quis blandit
            lorem.
          </p>
        </div>
        {/* card group  */}
        <div>
          <Swiper
            spaceBetween={0}
            slidesPerView={4}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              renderBullet: function (index, className) {
                return `<span class="${className} custom-outer-bullet"></span>`;
              },
            }}
            breakpoints={{
              280: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 0,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="xl:pb-0 pb-[60px]"
          >
            {blogs.map(
              ({
                id,
                img,
                title,
                subTitle,
                description,
                video,
                subImg,
                images,
              }) => (
                <SwiperSlide key={id}>
                  <div className="!h-full">
                    {subImg ? (
                      <Swiper
                        slidesPerView={1}
                        pagination={{
                          clickable: true,
                          renderBullet: function (index, className) {
                            return `<span class="${className} custom-bullet"></span>`;
                          },
                        }}
                        modules={[Pagination]}
                      >
                        {images.map((image, index) => (
                          <SwiperSlide key={index}>
                            <div className="relative">
                              <img
                                src={image}
                                alt=""
                                className="w-full object-cover"
                              />
                              <div className="w-[50px] h-[72px] absolute bottom-0 bg-[#d77b5d] px-[5px] py-2.5 text-center text-white font-heading font-bold">
                                <p>
                                  <span className="text-2xl">20</span> JULY
                                </p>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    ) : (
                      <div className="relative">
                        <img src={img} alt="" className="w-full object-cover" />
                        {video && (
                          <iframe
                            className="aspect-square w-full"
                            src="https://www.youtube.com/embed/SqeYP8EU79M"
                            allowFullScreen
                            id="fitvid665966"
                          />
                        )}
                        <div className="w-[50px] h-[72px] absolute bottom-0 bg-[#d77b5d] px-[5px] py-2.5 text-center text-white font-heading font-bold">
                          <p>
                            <span className="text-2xl">20</span> JULY
                          </p>
                        </div>
                      </div>
                    )}
                    <div className="p-[30px] pb-[70px] border-x-[1px] border-gray-300 bg-white text-[#24324a] font-san relative xl:text-left md:text-left text-center">
                      <a
                        href="#"
                        className="text-2xl inline-block xl:mb-2.5 lg:mb-2.5 md:mb-2.5 lg:line-clamp-2 hover:text-[#d77b5d] duration-200 my-5"
                      >
                        {title}
                      </a>
                      <p className="text-sm xl:mb-2.5 lg:mb-2.5 md:mb-2.5 mb-5">
                        {subTitle}
                      </p>
                      <p className="text-sm xl:mb-0 lg:mb-3 md:mb-3 mb-5">
                        {description}
                      </p>
                      <a
                        href="#"
                        className="font-heading uppercase text-[#d77b5d] text-xs tracking-wider font-bold xl:absolute bottom-0 py-[25px]"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
