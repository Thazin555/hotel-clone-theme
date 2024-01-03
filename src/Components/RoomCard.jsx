import { CheckCircle, Star } from "@phosphor-icons/react";
import React from "react";

const RoomCard = ({ img, title, description, discount, price, services }) => {
  const length = 3;
  const stars = Array.from({ length }, (_, index) => index + 1);

  return (
    <div className="flex xl:flex-row lg:flex-row md:flex-col flex-col shadow-lg md:relative mb-10">
      <div className="">
        <a href="#">
          <img className="h-full w-full" src={img} alt="" />
        </a>
      </div>
      <div className=" xl:p-10 lg:p-10 md:p-10 p-5 xl:text-left lg:text-left md:text-left text-center bg-white shadow-md z-10">
        <a
          href="#"
          className="text-[#24324a] text-3xl font-san hover:text-[#d77b5d] duration-300 mb-2.5 inline-block"
        >
          {title}
        </a>
        <p className="text-[#818a9c] font-san xl:text-lg lg:text-lg md:text-lg text-sm leading-[26px] mb-[30px]">
          {description}
        </p>

        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 grid-cols-1 xl:divide-x xl:divide-y-0 lg:divide-x lg:divide-y-0 md:divide-x md:divide-y-0 divide-y border-b">
          <div className="p-3 flex items-center gap-2 uppercase">
            <CheckCircle size={20} className="text-[#d77b5d]" />
            <p className="text-[10px] font-heading text-[#24324a] tracking-[1px] lg:line-clamp-1">
              Breakfast
            </p>
          </div>
          <div className="p-3 flex items-center gap-2 uppercase">
            <CheckCircle size={20} className="text-[#d77b5d]" />
            <p className="text-[10px] font-heading text-[#24324a] tracking-[1px] lg:line-clamp-1">
              wi-fi
            </p>
          </div>
          <div className="p-3 flex items-center gap-2 uppercase">
            <CheckCircle size={20} className="text-[#d77b5d]" />
            <p className="text-[10px] font-heading text-[#24324a] tracking-[1px] lg:line-clamp-1">
              Hair dryer
            </p>
          </div>
        </div>

        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 grid-cols-1 xl:divide-x xl:divide-y-0 lg:divide-x lg:divide-y-0 md:divide-x md:divide-y-0 divide-y border-b">
          <div className="p-3 flex items-center gap-2 uppercase">
            <CheckCircle size={20} className="text-[#d77b5d]" />
            <p className="text-[10px] font-heading text-[#24324a] tracking-[1px] lg:line-clamp-1">
              LCD TV
            </p>
          </div>
          <div className="p-3 flex items-center gap-2 uppercase">
            <CheckCircle size={20} className="text-[#d77b5d]" />
            <p className="text-[10px] font-heading text-[#24324a] tracking-[1px] lg:line-clamp-1">
              Shower and tab
            </p>
          </div>
          <div className="p-3 flex items-center gap-2 uppercase">
            <CheckCircle size={20} className="text-[#d77b5d]" />
            <p className="text-[10px] font-heading text-[#24324a] tracking-[1px] lg:line-clamp-1">
              Security System
            </p>
          </div>
        </div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 grid-cols-1 xl:divide-x xl:divide-y-0 lg:divide-x lg:divide-y-0 md:divide-x md:divide-y-0 divide-y">
          <div className="p-3 flex items-center gap-2 uppercase">
            <CheckCircle size={20} className="text-[#d77b5d]" />
            <p className="text-[10px] font-heading text-[#24324a] tracking-[1px] lg:line-clamp-1">
              Air conditioning
            </p>
          </div>
          <div className="p-3 flex items-center gap-2 uppercase">
            <CheckCircle size={20} className="text-[#d77b5d]" />
            <p className="text-[10px] font-heading text-[#24324a] tracking-[1px] lg:line-clamp-1">
              Tea and coffee set
            </p>
          </div>
          <div className="p-3 flex items-center gap-2 uppercase">
            <CheckCircle size={20} className="text-[#d77b5d]" />
            <p className="text-[10px] font-heading text-[#24324a] tracking-[1px] lg:line-clamp-1">
              Tea and coffee set
            </p>
          </div>
        </div>
      </div>

      <div className="md:absolute md:right-5 md:top-5 xl:static lg:static bg-white text-center xl:w-[40%] lg:w-[50%] md:w-[33%] md:py-8 xl:py-0 lg:py-0 py-5 flex flex-col items-center justify-center">
        <div className="flex gap-1 text-[#d77b5d] mb-1">
          {stars.map((star) => (
            <Star key={star} size={17} weight="fill" />
          ))}
        </div>
        <div>
          <p className="mb-2.5 text-3xl font-[900] font-heading tracking-wide">
            $ {discount}
          </p>
          <p className="line-through text-[#999] text-lg font-heading font-bold mb-5">
            $ {price}
          </p>
          <p className="text-[10px] font-[900] text-[#24324a] tracking-[2px] font-heading mb-2.5">
            PER NIGHT
          </p>
          <button className="px-8 py-3 bg-[#d77b5d] rounded-full uppercase text-white text-[11px] font-heading font-bold tracking-widest hover:bg-[#f48965] duration-200">
            Room detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
