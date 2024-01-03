import React from 'react'

const AboutEscape = () => {
    const containerStyle = {
      position: "relative",
    };
    const gradientOverlayStyle = {
      content: '""',
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: "50%",
      height: "100%",
      background: "white",
      zIndex: 1,
    };
  return (
    <div className="bg-white lg:h-[280px] md:h-[360px]" style={containerStyle}>
      <div className="relative bg-white  gradient-before bg-no-repeat lg:bg-[url(https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-services-4-2.jpg)] md:bg-[url(src/img/background-jar.jpeg)] h-full !bg-fixed bg-cover lg:bg-right-center md:bg-center bg-opacity-20 gradient-after">
        <div style={gradientOverlayStyle} />
        <div className=" max-w-[1300px] z-10  relative mx-auto my-0 lg:px-[60px] px-[40px] md:pt-[100px] pt-[70px] md:text-start text-center ">
          <p className=" text-[#d77b5d] tracking-[0.125rem] md:w-[60%] text-[12px] mb-[10px] md:mt-0 mt-[20px] font-heading font-black">
            YOUR PERFECT ESCAPE
          </p>
          <h2 className="md:w-[60%] md:text-[48px] text-[34px] sm:leading-[37.4px] md:mb-[40px] !mb-[20px]">
            About Page
          </h2>
          <p className="md:w-[60%] md:text-[18px] text-[14px] leading-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eget commodo orci. Integer varius nibh eu mattis porta.
            Pellentesque dictum sem eget cursus semper. Nullam quis blandit
            lorem. Morbi blandit orci urna, eu congue magna faucibus at. In
            bibendum in mauris nec ultrices. Nunc et magna velit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutEscape