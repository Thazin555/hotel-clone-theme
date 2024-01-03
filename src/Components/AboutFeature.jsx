import React from 'react'

const AboutFeature = ({ id, img, fName, setWidth }) => {
  return (
    <div className=" h-[204px]  bg-white p-10 box-border">
      <img src={img} className={`${setWidth} block mx-auto`} alt="" />
      <h6 className="text-center mt-10 font-heading font-bold text-[#24324A] text-[12px] tracking-[2px] leading-[13.2px] uppercase">
        {fName}
      </h6>
    </div>
  );
};

export default AboutFeature