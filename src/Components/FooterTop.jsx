import React from 'react'

const FooterTop = () => {
  return (
    <div className=" !bg-[#344157] ">
      <div className=" relative lg:before:content-[''] lg:before:absolute lg:before:top-0 lg:before:left-[50%] lg:before:w-[1px] lg:before:h-full lg:before:bg-[#24324a] pt-[60px] pb-[60px]">
        <div className=" max-w-[1300px] my-0 mx-auto md:px-[60px] px-[40px]">
          <div className=" grid lg:grid-cols-12 md:grid-flow-row">
            <div className=" lg:col-span-6 lg:text-start text-center">
              <h5 className=" mb-5 uppercase text-xs font-heading font-extrabold tracking-[0.125rem]">
                Social Media
              </h5>
              <p className=" text-[11px] font-heading uppercase tracking-[0.125rem] ">
                Follow the Grandium
              </p>
              <div className="flex flex-wrap mt-10 items-center lg:justify-normal justify-center">
                <div className="w-11 h-11 inline-flex items-center hover:bg-[#d77b5d] justify-center rounded-full bg-[#5c677b] mx-[10px] flex-shrink-0 duration-200">
                  <a
                    href=""
                    className=" !w-[6px] rounded-full flex justify-center items-center "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      fill="white"
                    >
                      <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                    </svg>
                  </a>
                </div>

                <div className="w-11 h-11 bg-[#5c677b] hover:bg-[#d77b5d] mx-[10px] flex items-center justify-center rounded-full flex-shrink-0 duration-200">
                  <a
                    href=""
                    className=" !w-[10px] rounded-full flex justify-center items-center  "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 512 512"
                    >
                      <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                    </svg>
                  </a>
                </div>
                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#5c677b] hover:bg-[#d77b5d] mx-[10px] flex-shrink-0 duration-200">
                  <a
                    href=""
                    className=" w-4 rounded-full flex justify-center items-center  "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 640 512"
                    >
                      <path d="M386.1 228.5c1.8 9.7 3.1 19.4 3.1 32C389.2 370.2 315.6 448 204.8 448c-106.1 0-192-85.9-192-192s85.9-192 192-192c51.9 0 95.1 18.9 128.6 50.3l-52.1 50c-14.1-13.6-39-29.6-76.5-29.6-65.5 0-118.9 54.2-118.9 121.3 0 67.1 53.4 121.3 118.9 121.3 76 0 104.5-54.7 109-82.8H204.8v-66h181.3zm185.4 6.4V179.2h-56v55.7h-55.7v56h55.7v55.7h56v-55.7H627.2v-56h-55.7z" />
                    </svg>
                  </a>
                </div>
                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#5c677b] hover:bg-[#d77b5d] mx-[10px] flex-shrink-0 duration-200">
                  <a
                    href=""
                    className="flex items-center justify-center w-3 rounded-full  "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      width="14"
                      viewBox="0 0 448 512"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 lg:text-right text-center lg:mt-0 mt-10">
              <h5 className="mb-5 uppercase text-xs font-heading font-extrabold tracking-[0.125rem]">
                Newsletter
              </h5>
              <p className="text-[11px] font-heading uppercase tracking-[0.125rem]">
                WE LOVE TO SHARE NEW OFFERS AND EXCLUSIVE PROMOTIONS
              </p>
              <div className=" mt-10 inline-block w-[300px] relative">
                <div className=" block relative">
                  <div className="leading-6 m-0  mb-[10px]">
                    <span className=" ">
                      <input
                        type="text"
                        className="w-full h-[44px] leading-[44px] py-0 ps-5 pe-16 bg-[#5C677B] text-[10px] font-heading m-0 border-0 outline-0 text-white placeholder:text-white placeholder:font-heading placeholder:tracking-widest"
                        placeholder="ENTER YOUR E-MAIL ADDRESS"
                      />
                    </span>
                    <br />
                    <input
                      className="right-0 top-0 block absolute bottom-0  bg-[#d77b5d] h-full px-[30px] py-0 leading-10 font-bold text-[10px] text-white font-heading tracking-[0.125rem]"
                      type="submit"
                      value="SEND"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterTop