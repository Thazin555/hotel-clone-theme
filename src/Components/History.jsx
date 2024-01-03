import React from 'react'
import HistoryDetail from "./HistoryDetail";

const History = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1300px] md:py-[100px] pb-[40px] pt-[90px] md:px-[60px] px-[40px] my-0 mx-auto">
        <div className=" text-center md:mb-[100px] mb-[40px]">
          <h5 className="text-[#d77b5d] tracking-[0.125rem] text-[12px] font-black font-heading">
            EXPLORE OUR LEGACY
          </h5>
          <p className=" md:text-[48px] text-[#24324a]  text-[34px] leading-none">
            Our History
          </p>
          <p className=" mt-[30px] leading-[30px] text-[#24324a]  font-[#24324a] md:text-[18px] text-[14px] lg:w-[50vw] md:w-[70vw] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eget commodo orci. Integer varius nibh eu mattis porta.
            Pellentesque dictum sem eget cursus semper. Nullam quis blandit
            lorem.
          </p>
        </div>
        <HistoryDetail />
      </div>
    </section>
  );
}

export default History