import React from 'react'

const HeroSection = () => {
  return (
    <div>
      <div
        id="controls-carousel"
        className="relative w-full  h-full  mx-auto "
        data-carousel="static"
      >
        {/* Carousel wrapper */}
        <div className="relative  overflow-hidden  h-[700px]">
          {/* Item 1 */}
          <div
            className="hidden duration-1000 ease-in-out "
            data-carousel-item=""
            style={{ backgroundColor: "#24324ab3" }}
          >
            <img
              src="https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-slide-1-e1535645648206.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full object-center !object-cover"
              alt="..."
            />
          </div>
          {/* Item 2 */}
          <div
            className="hidden duration-1000 ease-in-out"
            data-carousel-item=""
          >
            <img
              src="https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-slide-2-e1535645573860.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full object-center !object-cover"
              alt="..."
            />
          </div>
          {/* Item 3 */}
          <div
            className="hidden duration-1000 ease-in-out"
            data-carousel-item=""
          >
            <img
              src="https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-slide-3-e1535645623956.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full !object-center !object-cover"
              alt="..."
            />
          </div>
          {/* Item 4 */}
          <div
            className="hidden duration-1000 ease-in-out"
            data-carousel-item=""
          >
            <img
              src="https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-slide-1-e1535645648206.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full object-center !object-cover"
              alt="..."
            />
          </div>
          {/* Slider controls */}
          <button
            type="button"
            className="absolute hidden lg:flex  top-0 start-0 z-[150]  items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/30  group-hover:border-white/70 ">
              <svg
                className="w-2 h-2 text-white  rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute hidden lg:flex   top-0 end-0 z-[150]  items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/30  group-hover:border-white/70  ">
              <svg
                className="w-2 h-2 text-white  rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
        <div
          className="absolute bg-[#24324ab3] !lg:h-[702px] xl:h-[702px]  lg:!top-0 z-20  text-white w-full 
         sm:!top-[-9%] md:!top-[-9%] mx-auto"
        >
          <div
            className="container mx-auto flex px-5 mt-36 w-fit  p-14
           md:!py-24 items-center justify-center flex-col"
          >
            <div className="text-center  w-full">
              <h5
                className="font-heading 
              text-xs font-extrabold tracking-widest
               text-[#d77b5d] mt-20 mb-6"
              >
                WELCOME TO THE GRANDIUM
              </h5>
              <h1
                className="font-san lg:!text-6xl
               sm:!text-5xl font-normal  text-inherit  mb-3"
              >
                Touch The Sea
              </h1>
              <h2
                className="font-san italic
               text-2xl  text-inherit mb-8"
              >
                - in Monaco -
              </h2>
              <h2 className="font-heading text-xs font-bold  tracking-widest text-[#818a9c] mb-3">
                BOOK NOW YOUR HOTEL
              </h2>

              <form
                action=""
                className="block bg-white/25 !px-4   !pt-4   text-gray-400 p-3 lg:px-2 lg:py-1 rounded-sm lg:!rounded-sm w-full"
              >
                <div className="grid !grid-row-5 lg:!grid-cols-8 pb-8 gap-2">
                  <input
                    type="text"
                    placeholder="CHECK-IN"
                    className="block text-xs  px-4 tracking-wide col-span-2 lg:col-span-2 p-2 text-![16px] text-gray-900 border border-transparent border-r-0 rounded-sm border-r-gray-200 font-heading bg-gray-50  focus:ring-0 focus:border-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  />
                  <input
                    type="text"
                    placeholder="CHECK-OUT"
                    className="block  text-xs px-4 tracking-wide col-span-2 lg:col-span-2 p-2 text-![16px] text-gray-900 border border-transparent border-r-0 rounded-sm border-r-gray-200 font-heading bg-gray-50  focus:ring-0 focus:border-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  />

                  <select
                    id="ADULTS"
                    className="block font-normal text-xs px-3 col-span-2 lg:col-span-1  text-gray-900 rounded-sm border-r-gray-200 font-heading bg-gray-50  focus:ring-0 focus:border-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  >
                    <option>ADULTS</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>

                  <select
                    id="Children"
                    className="block  text-xs font-normal  col-span-2 lg:col-span-1 px-3  text-gray-900 border rounded-sm font-heading  focus:ring-0 focus:border-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  >
                    <option>CHILDREN</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>

                  <button className="bg-[#d77b5d] font-bold lg:ms-1 text-white rounded-sm py-1 lg:!px-6 w-full col-span-2 lg:col-span-2 ">
                    SEARCH
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection