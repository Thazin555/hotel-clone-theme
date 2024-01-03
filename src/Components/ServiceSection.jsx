import React, { useState } from "react";
import { CheckCircle, Star, Triangle } from "@phosphor-icons/react";
import BgImg from "../img/triangle.svg";
import ServiceCard from "./ServiceCard";

const ServiceSection = () => {
    const [services, setService] = useState([
      {
        id: 1,
        image:
          "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-slide-1-e1535645648206.jpg",
        subImg:
          "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-services-1-1.jpg",
        title: "Sky Bar & Lounge",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget commodo orci. Integer varius nibh eu mattis porta. Pellentesque dictum sem eget cursus semper. Nullam quis blandit lorem.Pellentesque dictum sem eget cursus semper. Nullam quis blandit lorem. Morbi blandit orci urna, eu congue magna faucibus at. In bibendum in mauris nec ultrices.",
        subPara:
          "Pellentesque dictum sem eget cursus semper. Nullam quis blandit lorem. Morbi blandit orci urna, eu congue magna faucibus at. In bibendum in mauris nec ultrices.",
        reverse: false,
        subTitle: false,
        link: true,
      },
      {
        id: 2,
        image:
          "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-slide-1-e1535645648206.jpg",
        subImg:
          "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-services-1-1.jpg",
        title: "Private Dining",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget commodo orci. Integer varius nibh eu mattis porta. Pellentesque dictum sem eget cursus semper. Nullam quis blandit lorem.Pellentesque dictum sem eget cursus semper. Nullam quis blandit lorem. Morbi blandit orci urna, eu congue magna faucibus at. In bibendum in mauris nec ultrices.",
        subPara:
          "Pellentesque dictum sem eget cursus semper. Nullam quis blandit lorem. Morbi blandit orci urna, eu congue magna faucibus at. In bibendum in mauris nec ultrices.",
        reverse: true,
        subTitle: true,
        link: true,
      },
      {
        id: 3,
        image:
          "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-slide-1-e1535645648206.jpg",
        subImg:
          "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-services-1-1.jpg",
        title: "Conference & Events",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget commodo orci. Integer varius nibh eu mattis porta. Pellentesque dictum sem eget cursus semper. Nullam quis blandit lorem.",
        subPara:
          "Pellentesque dictum sem eget cursus semper. Nullam quis blandit lorem. Morbi blandit orci urna, eu congue magna faucibus at. In bibendum in mauris nec ultrices.",
        reverse: false,
        subTitle: true,
        link: false,
      },
      {
        id: 4,
        image:
          "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-slide-1-e1535645648206.jpg",
        subImg:
          "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-services-1-1.jpg",
        title: "Wedding Venue",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget commodo orci. Integer varius nibh eu mattis porta. Pellentesque dictum sem eget cursus semper. Nullam quis blandit lorem.",
        subPara:
          "Pellentesque dictum sem eget cursus semper. Nullam quis blandit lorem. Morbi blandit orci urna, eu congue magna faucibus at. In bibendum in mauris nec ultrices.",
        reverse: true,
        subTitle: true,
        link: false,
      },
      {
        id: 5,
        image:
          "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-services-5-1.jpg",
        subImg:
          "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-gallery-15.jpg",
        title: "Spa & Beauty Center",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget commodo orci. Integer varius nibh eu mattis porta. Pellentesque dictum sem eget cursus semper. Nullam quis blandit lorem.",
        subPara:
          "Pellentesque dictum sem eget cursus semper. Nullam quis blandit lorem. Morbi blandit orci urna, eu congue magna faucibus at. In bibendum in mauris nec ultrices.",
        reverse: false,
        subTitle: true,
        link: false,
      },
      {
        id: 6,
        image:
          "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-slide-3-e1535645623956.jpg",
        subImg:
          "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-gallery-17.jpg",
        title: "Swimming Pool",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget commodo orci. Integer varius nibh eu mattis porta. Pellentesque dictum sem eget cursus semper. Nullam quis blandit lorem.",
        subPara:
          "Pellentesque dictum sem eget cursus semper. Nullam quis blandit lorem. Morbi blandit orci urna, eu congue magna faucibus at. In bibendum in mauris nec ultrices.",
        reverse: true,
        subTitle: true,
        link: false,
      },
    ]);
  return(
    <section>
      {/* title wrapper  */}
      <div className="relative">
        <img
          src="https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-services-6-1.jpg"
          alt=""
          className="w-full h-full top-0 right-0 fixed object-cover -z-30 xl:block lg:block md:block hidden"
        />
        {/* overlay  */}
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-r from-white via-white to-transparent -z-20"></div>
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-white to-transparent -z-20" />

        {/* text section  */}
        <div className="max-w-[1300px] mx-auto py-[100px] xl:px-[60px] lg:px-[60px] md:px-[60px] px-[40px] flex">
          <div className="xl:w-[60%] lg:w-[60%] md:w-[60%] xl:text-left lg:text-left md:text-left text-center w-full text-[#24324a] font-san relative z-50">
            <h4 className="text-xs font-heading uppercase text-[#d77b5d] font-bold tracking-[2px] mb-2.5">
              DEFAULT PAGE
            </h4>
            <h1 className="xl:text-5xl lg:text-5xl md:text-5xl text-[34px] xl:mb-10 lg:mb-10 md:mb-10 mb-5">
              Services
            </h1>
            <p className="xl:text-lg lg:text-lg md:text-lg text-sm xl:leading-[30px] lg:leading-[30px] md:leading-[30px] leading-[26px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque eget commodo orci. Integer varius nibh eu mattis
              porta. Pellentesque dictum sem eget cursus semper. Nullam quis
              blandit lorem. Morbi blandit orci urna, eu congue magna faucibus
              at. In bibendum in mauris nec ultrices. Nunc et magna velit.
            </p>
          </div>
        </div>
      </div>

      {/* card wrapper  */}
      <div className="bg-[#f5f5f5] xl:-mt-[100px] lg:-mt-[30px] md:-mt-[120px] -mt-[150px] ">
        <div className="w-full h-8 relative z-30">
          <div
            className="h-8 bg-repeat-x -translate-y-[70%]"
            style={{ backgroundImage: `url(${BgImg})` }}
          ></div>
        </div>
        <div className="max-w-[1300px] mx-auto xl:pt-[50px] lg:pt-[40px] md:pt-[20px] pt-[30px] pb-1 xl:px-[60px] lg:px-[60px] md:px-[60px] px-10 relative z-30">
          {services.map(
            ({
              id,
              image,
              subImg,
              title,
              para,
              subPara,
              reverse,
              subTitle,
              link,
            }) => (
              <ServiceCard
                key={id}
                img={image}
                subImg={subImg}
                title={title}
                para={para}
                subPara={subPara}
                reverse={reverse}
                subTitle={subTitle}
                link={link}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
