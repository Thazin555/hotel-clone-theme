import Glide from "@glidejs/glide";
import React, { useEffect } from "react";

const BlogSection = () => {
  useEffect(() => {
    const glide = new Glide(".glide-card", {
      type: "carousel",
      perView: 4,
      gap: 0,
      breakpoints: {
        1280: {
          perView: 4,
        },
        1024: {
          perView: 3,
        },
        820: {
          perView: 2,
          //   autoplay: 6000,
          //   type: "carousel",
        },
        640: {
          perView: 1,
          //   autoplay: 6000,
        },
      },
    });

    glide.mount();
  }, []);

  useEffect(() => {
    const glide = new Glide(".glide-img", {
      type: "slider",
      bound: true,
      pagination: {
        el: ".img-bullets",
        clickable: true,
      },
    });

    glide.mount();
  }, []);

  return (
    <section className="bg-[#f5f5f5]">
      <div className="mx-auto xl:py-[100px] lg:py-[100px] md:py-[100px] pt-[40px] ">
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
          <div className="glide glide-card">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                <li className="glide__slide">
                  <div>
                    <div className="relative">
                      <img
                        src="https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-blog-big-3-319x319.jpg"
                        alt=""
                        className="w-full object-cover"
                      />
                      <div className="w-[50px] h-[72px] absolute bottom-0 bg-[#d77b5d] px-[5px] py-2.5 text-center text-white font-heading font-bold">
                        <p>
                          <span className="text-2xl">20</span> JULY
                        </p>
                      </div>
                    </div>
                    <div className="p-[30px] pb-[70px] border-x-[1px] border-gray-300 bg-white text-[#24324a] font-san relative xl:text-left md:text-left text-center">
                      <a href="#" className="text-2xl inline-block mb-2.5">
                        The Ultimate Father’s Day Gift: The Grandium Hotel
                      </a>
                      <p className="text-sm mb-2.5">admin</p>
                      <p className="text-sm xl:mb-0 lg:mb-3 md:mb-3 mb-3">
                        Ne duo laudem complectitur, et dicta scripserit hi
                      </p>
                      <a
                        href="#"
                        className="font-heading uppercase text-[#d77b5d] text-xs tracking-wider font-bold xl:absolute bottom-0 py-[25px]"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </li>
                <li className="glide__slide">
                  <div>
                    <div className="relative">
                      {/* <img
                        src="https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-blog-big-3-319x319.jpg"
                        alt=""
                        className="w-full object-cover relative"
                      /> */}
                      <iframe
                        className="aspect-square w-full"
                        src="https://www.youtube.com/embed/SqeYP8EU79M"
                        allowFullScreen
                        id="fitvid665966"
                      />
                      <div className="w-[50px] h-[72px] absolute z-20 bottom-0 bg-[#d77b5d] px-[5px] py-2.5 text-center text-white font-heading font-bold">
                        <p>
                          <span className="text-2xl">20</span> JULY
                        </p>
                      </div>
                    </div>
                    <div className="p-[30px] pb-[70px] border-x-[1px] border-gray-300 bg-white text-[#24324a] font-san relative">
                      <a href="#" className="text-2xl inline-block mb-2.5">
                        Top Events in London This February
                      </a>
                      <p className="text-sm mb-2.5">admin</p>
                      <p className="text-sm">
                        Ne duo laudem complectitur, et dicta scripserit hi
                      </p>
                      <a
                        href="#"
                        className="font-heading uppercase text-[#d77b5d] text-xs tracking-wider font-bold xl:absolute bottom-0 py-[25px]"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </li>
                <li className="glide__slide">
                  <div>
                    <div className="glide glide-img">
                      <div className="glide__track" data-glide-el="track">
                        <ul className="glide__slides">
                          <li className="glide__slide">
                            <div className="relative">
                              <img
                                src="https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-blog-big-3-319x319.jpg"
                                alt=""
                                className="w-full object-cover"
                              />
                              <div className="w-[50px] h-[72px] absolute bottom-0 bg-[#d77b5d] px-[5px] py-2.5 text-center text-white font-heading font-bold">
                                <p>
                                  <span className="text-2xl">20</span> JULY
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="glide__slide">
                            <div className="relative">
                              <img
                                src="https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-gallery-17-319x319.jpg"
                                alt=""
                                className="w-full object-cover"
                              />
                              <div className="w-[50px] h-[72px] absolute bottom-0 bg-[#d77b5d] px-[5px] py-2.5 text-center text-white font-heading font-bold">
                                <p>
                                  <span className="text-2xl">20</span> JULY
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="glide__slide">
                            <div className="relative">
                              <img
                                src="https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-slide-1-e1535645648206-319x319.jpg"
                                alt=""
                                className="w-full object-cover"
                              />
                              <div className="w-[50px] h-[72px] absolute bottom-0 bg-[#d77b5d] px-[5px] py-2.5 text-center text-white font-heading font-bold">
                                <p>
                                  <span className="text-2xl">20</span> JULY
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div
                        className="glide__bullets img-bullets"
                        data-glide-el="controls[nav]"
                      >
                        <button className="glide__bullet" data-glide-dir="=0" />
                        <button className="glide__bullet" data-glide-dir="=1" />
                        <button className="glide__bullet" data-glide-dir="=2" />
                      </div>
                    </div>

                    <div className="p-[30px] pb-[70px] border-x-[1px] border-gray-300 bg-white text-[#24324a] font-san relative">
                      <a href="#" className="text-2xl inline-block mb-2.5">
                        A Walk from The Grandium Hotel Around
                      </a>
                      <p className="text-sm mb-2.5">admin</p>
                      <p className="text-sm xl:mb-0 lg:mb-3 md:mb-3 mb-3">
                        Ne duo laudem complectitur, et dicta scripserit hi
                      </p>
                      <a
                        href="#"
                        className="font-heading uppercase text-[#d77b5d] text-xs tracking-wider font-bold xl:absolute bottom-0 py-[25px]"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </li>
                <li className="glide__slide">
                  <div>
                    <div className="relative">
                      <img
                        src="https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-services-2-1-319x319.jpg"
                        alt=""
                        className="w-full object-cover"
                      />
                      <div className="w-[50px] h-[72px] absolute bottom-0 bg-[#d77b5d] px-[5px] py-2.5 text-center text-white font-heading font-bold">
                        <p>
                          <span className="text-2xl">20</span> JULY
                        </p>
                      </div>
                    </div>
                    <div className="p-[30px] pb-[70px] border-x-[1px] border-gray-300 bg-white text-[#24324a] font-san relative">
                      <a href="#" className="text-2xl inline-block mb-2.5">
                        Best Things to Do In London Enjoy the Nightlife
                      </a>
                      <p className="text-sm mb-2.5">admin</p>
                      <p className="text-sm">
                        Ne duo laudem complectitur, et dicta scripserit hi
                      </p>
                      <a
                        href="#"
                        className="font-heading uppercase text-[#d77b5d] text-xs tracking-wider font-bold xl:absolute bottom-0 py-[25px]"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* bullets  */}
            <div
              className="glide__bullets w-full py-4 -mb-10 bg-[#f5f5f5] xl:hidden flex justify-center"
              data-glide-el="controls[nav]"
            >
              <button
                className="glide__bullet bg-gray-300 focus:bg-gray-400 focus:border-gray-400"
                data-glide-dir="=0"
              />
              <button
                className="glide__bullet bg-gray-300 focus:bg-gray-400 focus:border-gray-400"
                data-glide-dir="=1"
              />
              <button
                className="glide__bullet bg-gray-300 focus:bg-gray-400 focus:border-gray-400 lg:hidden md:hidden"
                data-glide-dir="=2"
              />
              <button
                className="glide__bullet bg-gray-300 focus:bg-gray-400 focus:border-gray-400 lg:hidden md:hidden"
                data-glide-dir="=3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection