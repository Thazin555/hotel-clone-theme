import React from 'react'
const OfferCard = ({ img, title, des, link, reverse, start, end }) => {
  return (
    <div
      className={`${
        reverse
          ? "xl:flex-row-reverse lg:flex-row-reverse"
          : "xl:flex-row lg:flex-row"
      } xl:col-span-6  lg:col-span-6 ${
        end && "xl:col-start-7 lg:col-start-7"
      }  md:col-span-12 flex  md:flex-row-reverse flex-col-reverse col-span-12 bg-white text-[#24324a] text-left font-san`}
    >
      <div className="xl:basis-1/2 md:basis-3/4 xl:p-[30px] xl:pb-[50px] xl:text-left lg:basis-1/2 lg:p-[30px] lg:pb-[50px] lg:text-left md:text-left md:p-10 p-5 text-center relative">
        <h3 className="text-2xl mb-2.5">{title}</h3>
        <p className="text-sm leading-6 xl:line-clamp-none lg:line-clamp-2 xl:mb-0 lg:mb-0 md:mb-3 mb-3">
          {des}
        </p>
        <a
          href="#"
          className="font-heading uppercase text-[#d77b5d] text-xs tracking-wider font-bold xl:absolute bottom-0 py-[25px] before:w-0 before:h-[2.5px] before:bg-[#d77b5d] before:absolute before:top-0 before:bottom-0 before:my-auto before:-left-[30px]  hover:before:w-4 hover:before:duration-300"
        >
          {link}
        </a>
      </div>
      <div className="xl:basis-1/2 lg:basis-1/2 md:basis-5/12 relative">
        <img src={img} alt="" className="aspect-auto h-full" />
        <div className="border-[25px] inline-block border-t-transparent border-r-[#d77b5d] border-b-[#d77b5d] border-l-transparent absolute bottom-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3 text-white stroke-[5px] absolute translate-x-1 translate-y-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default OfferCard