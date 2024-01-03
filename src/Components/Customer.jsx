import React from 'react'

const Customer = ({ id, comment, img, customer, address }) => {
  // Empty dependency array ensures that this effect runs only once

  return (
    <div className=" text-center">
      <div className="relative mb-10 text-[14px] text-[#24324A] leading-[22px] text-wrap rounded-lg after:absolute bg-white p-[30px] after:top-[100%] after:left-[50%] after:content-[''] after:inline-block after:w-0 after:h-0 after:-ml-5 after:border-solid after:border-[20px] after:border-l-transparent after:border-r-transparent after:border-b-0 after:border-white">
        {comment}
      </div>
      <div className="">
        <img
          className=" w-20 h-20 rounded-full mb-5 inline-block "
          src={img}
          alt=""
        />
        <p className=" font-heading font-bold text-[#d77b5d] text-xs uppercase tracking-[0.125rem]">
          {customer}
        </p>
        <p className=" font-heading text-[rgb(36, 50, 74)] text-[11px] tracking-[0.125rem]">
          {address}
        </p>
      </div>
    </div>
  );
};

export default Customer