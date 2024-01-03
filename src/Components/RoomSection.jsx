import React from 'react'
import { CheckCircle, Star, Triangle } from "@phosphor-icons/react";
import BgImg from "../img/triangle.svg";
import RoomCard from "./RoomCard";

const RoomSection = () => {
  const rooms = [
    {
      id: 1,
      img: "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-room-detail-1-600x600.jpg",
      title: "Royal Suit Room",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac scelerisque leo. Curabitur sed ornare orci. Nulla molestie pretium libero q",
      discountPrice: 589,
      price: 620,
      services: [
        "breakfast",
        "wi-fi",
        "hair dryer",
        "lcd TV",
        "shower and tab",
        "security system",
        "air conditioning",
        "tea and coffee set",
        "tea and coffee set",
      ],
    },
    {
      id: 2,
      img: "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-room-detail-2-600x600.jpg",
      title: "Deluxe Double Room",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac scelerisque leo. Curabitur sed ornare orci. Nulla molestie pretium libero q",
      discountPrice: 540,
      price: 5200,
      services: [
        "breakfast",
        "wi-fi",
        "hair dryer",
        "lcd TV",
        "shower and tab",
        "security system",
        "air conditioning",
        "tea and coffee set",
        "tea and coffee set",
      ],
    },
    {
      id: 3,
      img: "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-room-detail-3-600x600.jpg",
      title: "Deluxe Single Room",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac scelerisque leo. Curabitur sed ornare orci. Nulla molestie pretium libero q",
      discountPrice: 420,
      price: 500,
      services: [
        "breakfast",
        "wi-fi",
        "hair dryer",
        "lcd TV",
        "shower and tab",
        "security system",
        "air conditioning",
        "tea and coffee set",
        "tea and coffee set",
      ],
    },
    {
      id: 4,
      img: "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-room-detail-4-600x600.jpg",
      title: "Double Room",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget commodo orci. Integer varius nibh eu mattis porta. Pellentesque di",
      discountPrice: 300,
      price: 320,
      services: [
        "breakfast",
        "wi-fi",
        "hair dryer",
        "lcd TV",
        "shower and tab",
        "security system",
        "air conditioning",
        "tea and coffee set",
        "tea and coffee set",
      ],
    },
    {
      id: 5,
      img: "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-room-5-600x600.jpg",
      title: "Single Room",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget commodo orci. Integer varius nibh eu mattis porta. Pellentesque di",
      discountPrice: 160,
      price: 320,
      services: [
        "breakfast",
        "wi-fi",
        "hair dryer",
        "lcd TV",
        "shower and tab",
        "security system",
        "air conditioning",
        "tea and coffee set",
        "tea and coffee set",
      ],
    },
  ];

  return (
    <section className="bg-white">
      {/* title wrapper  */}
      <div className="relative z-30">
        <div className="max-w-[1300px] mx-auto py-[100px] xl:px-[60px] lg:px-[60px] md:px-[60px] px-[40px]">
          {/* text section  */}
          <div className="xl:w-[60%] lg:w-[60%] md:w-[60%] xl:text-left lg:text-left md:text-left text-center w-full text-[#24324a] font-san">
            <h4 className="text-xs font-heading uppercase text-[#d77b5d] font-bold tracking-[2px] mb-2.5">
              DEFAULT PAGE
            </h4>
            <h1 className="xl:text-5xl lg:text-5xl md:text-5xl text-[34px] xl:mb-10 lg:mb-10 md:mb-10 mb-5">
              Custom rooms
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
      <div className="bg-[#f5f5f5] xl:-mt-[100px] lg:-mt-[30px] md:-mt-[120px] -mt-[150px]">
        <div className="w-full h-8">
          <div
            className="h-8 bg-repeat-x -translate-y-[70%]"
            style={{ backgroundImage: `url(${BgImg}) ` }}
          ></div>
        </div>
        <div className="max-w-[1300px] mx-auto xl:pt-[50px] lg:pt-[40px] md:pt-[20px] pt-[30px] xl:pb-[120px] md:pb-[120px] pb-10 xl:px-[60px] lg:px-[60px] md:px-[40px] px-10">
          {rooms.map(
            ({
              id,
              img,
              title,
              description,
              discountPrice,
              price,
              services,
            }) => (
              <RoomCard
                key={id}
                img={img}
                title={title}
                description={description}
                discount={discountPrice}
                price={price}
                services={services}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default RoomSection