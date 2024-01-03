import React from 'react'

const BookingAbout = () => {
  return (
    <section className="mx-0 lg:mx-11 grid grid-cols-1 md:grid-cols-12 lg:xl:2xl:grid-cols-12 pt-0 md:pt-[50px] w-full h-full  xl:container xl:mx-auto">
      <div className="col-span-7 text-center   md:text-left lg:xl:2xl:text-left  pt-20 md:pl-14 lg:pl-24  ">
        <div className='relative z-30'>
        <div >
          <p className="text-[#d77b5d] font-heading font-bold text-xs md:text-sm lg:xl:2xl:text-sm tracking-[0.2rem] mb-3">
            
            DEFAULT PAGE
          </p>
          <h1 className="text-[#24324a] font-san text-3xl md:text-4xl lg:xl:2xl:text-6xl">
            Booking - Contact Form
          </h1>
        </div>
        <div className="mt-5 md:mt-10 -mb-12">
          <p
            className="leading-8 text-[#24324a] px-5  md:px-0 lg:xl:2xl:px-0 md:text-sm lg:xl:2xl:text-xl text-sm md:text-left lg:xl:2xl:3xl:text-left  break-all font-san mb-10"
            style={{ wordSpacing: "0.3em" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eget commodo orci. Integer varius nibh eu mattis porta.
            Pellentesque dictum sem eget cursus semper. Nullam quis blandit
            lorem. Morbi blandit orci urna, eu congue magna faucibus at. In
            bibendum in mauris nec ultrices. Nunc et magna velit.
          </p>
        </div>
        </div>
       

        {/* <nav className="hidden font-heading md:flex uppercase" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center  cursor-pointer">
            <a
              href="#"
              className="inline-flex items-center text-xs font-semibold text-gray-400 hover:text-[#d77b5d] dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </a>
          </li>
          <li className="cursor-pointer">
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
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
              <a
                href="#"
                className="ms-1 text-xs font-semibold text-gray-400 hover:text-[#d77b5d] md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                Page
              </a>
            </div>
          </li>
          <li aria-current="page" className="cursor-pointer">
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
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
              <span className="ms-1  text-xs font-semibold text-[#d77b5d]  md:ms-2 dark:text-gray-400">
                Gallery Page
              </span>
            </div>
          </li>
        </ol>
      </nav> */}
      </div>
      <div className=" md:col-span-5 lg:xl:2xl:md:col-span-5">
        <div className="w-full bg-gradient-to-r from-white  to-transparent h-full"></div>
      </div>
    </section>
  );
}

export default BookingAbout