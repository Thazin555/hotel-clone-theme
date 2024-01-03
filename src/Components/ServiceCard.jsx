import React from 'react'

const ServiceCard = ({
  img,
  subImg,
  title,
  para,
  subPara,
  reverse,
  subTitle,
  link,
}) => {
  return (
    <div
      className={`flex ${
        reverse && "xl:flex-row-reverse lg:flex-row-reverse"
      } xl:flex-row lg:flex-row md:flex-col flex-col shadow-xl xl:mb-[100px] lg:mb-[100px] md:mb-[100px] mb-[50px] ${
        link === false && "xl:h-[450px]"
      }`}
    >
      {/* img group  */}
      <div className="xl:w-2/5 lg:w-2/5 xl:h-auto lg:h-auto xl:border-[29.6px] lg:border-[29.6px] md:border-[29.6px] border-[20px] border-white xl:shadow-xl lg:shadow-xl relative z-10">
        <img
          className={`xl:h-full lg:h-full md:aspect-square aspect-square object-cover ${
            link === false && "xl:w-full"
          }`}
          src={img}
          alt=""
        />
        <div
          className={`${
            reverse
              ? "xl:-left-[80px] lg:-left-[80px] md:-left-[29.6px]"
              : "xl:-right-[80px] lg:-right-[80px] md:-right-[29.6px]"
          } w-3/5 h-3/5 absolute xl:block lg:block md:block hidden xl:-bottom-[80px] lg:-bottom-[80px] md:-bottom-[29.6px] xl:border-[20px] lg:border-[20px] md:border-[29.6px] border-white xl:shadow-2xl lg:shadow-2xl`}
        >
          <img
            className={`h-full object-cover ${link === false && "xl:w-full"}`}
            src={subImg}
            alt=""
          />
        </div>
        {link && (
          <a
            href="#"
            className={`${
              reverse
                ? "xl:-translate-x-[163%] lg:-translate-x-[163%]"
                : "xl:translate-x-[278%] lg:translate-x-[214%]"
            } xl:block lg:block md:hidden xl:w-auto lg:w-auto bg-[#d77b5d] text-white uppercase font-heading font-bold text-[10px] tracking-widest px-[30px] py-3 absolute xl:translate-y-[75%] lg:translate-y-[75%] -translate-y-full block w-full text-center`}
          >
            {reverse ? "Read More" : "Read more details"}
          </a>
        )}
      </div>
      {/* text group  */}
      <div
        className={`${
          reverse ? "xl:pe-[90px] lg:pe-[90px]" : "xl:ps-[90px] lg:ps-[90px]"
        } xl:w-3/5 lg:w-3/5 xl:p-[60px] lg:p-[60px]  md:p-[60px] md:pt-[40px] p-5 pt-[5px] bg-white xl:text-left lg:text-left md:text-left text-center text-[#24324a]`}
      >
        {subTitle && (
          <h5 className="text-[#d77b5d] text-xs font-heading font-bold tracking-[2px] mb-2.5">
            OUR FACILITIES
          </h5>
        )}
        <h3 className="xl:text-5xl lg:text-5xl md:text-5xl text-[28px] font-san xl:mb-[30px] lg:mb-[30px] md:mb-[30px] mb-5">
          {title}
        </h3>
        <div
          style={link === false ? { wordSpacing: "1px" } : {}}
          className="xl:text-lg xl:leading-[30px] lg:text-lg lg:leading-[30px] md:text-lg md:leading-[30px] font-san xl:text-justify lg:text-justify md:text-justify text-sm leading-[26px]"
        >
          <p className="mb-2.5">{para}</p>
          <p>{subPara}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard