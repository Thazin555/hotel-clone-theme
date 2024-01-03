import React, { useState } from "react";
import OfferCard from "./OfferCard";

const OfferSection = () => {
  const [offers, setOffer] = useState([
    {
      id: 1,
      image:
        "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-offers-1.jpg",
      title: "Stay 3 Nights - Save 20%",
      description:
        "Etiam posuere tortor quis nisl maximus placerat. Phasellus in magna ut libero hendrerit molestie. In placerat vulputate mi, ut placerat massa hendrerit ut.",
      link: "Read more",
      reverse: false,
      end: true,
    },
    {
      id: 2,
      image:
        "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-offers-2.jpg",
      title: "Weddings Special Offer 2016",
      description:
        "Etiam posuere tortor quis nisl maximus placerat. Phasellus in magna ut libero hendrerit molestie. In placerat vulputate mi, ut placerat massa hendrerit ut.",
      link: "Read more",
      reverse: true,
      end: false,
    },
    {
      id: 3,
      image:
        "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-offers-3.jpg",
      title: "Spa Treatment Launch Offer",
      description:
        "Etiam posuere tortor quis nisl maximus placerat. Phasellus in magna ut libero hendrerit molestie. In placerat vulputate mi, ut placerat massa hendrerit ut.",
      link: "Read more",
      reverse: true,
      end: false,
    },
    {
      id: 4,
      image:
        "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-offers-4.jpg",
      title: "Free Glass of Wine with Daily Classics Menu",
      description:
        "Etiam posuere tortor quis nisl maximus placerat. Phasellus in magna ut libero hendrerit molestie. In placerat vulputate mi, ut placerat massa hendrerit ut.",
      link: "Read more",
      reverse: false,
      end: false,
    },
  ]);
  return (
    // <div className="bg-yellow-300 max-h-full"> xl:min-h-[180vh] bg-[#f5f5f5]
    <section className="relative xl:h-[1270px] lg:h-[1080px] bg-[#f5f5f5] ">
      <div>
        <img
          src="https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/photo-offers.jpg?id=56"
          alt=""
          className="w-full 2xl:h-[968px] xl:h-[968px] lg:h-[867px] md:h-[1560px] h-[2715px]  object-cover block custom-img"
        />
      </div>

      <div className="absolute max-w-[1300px] top-0 left-0 right-0 mx-auto text-center text-white xl:py-[100px] md:py-[100px] xl:px-[60px] md:px-[40px] p-[40px]">
        {/* title group  */}
        <div className="xl:mb-[100px] lg:mb-[100px] mb-[40px]">
          <h4 className=" font-heading text-xs tracking-[2px] font-semibold">
            OFFERS
          </h4>
          <h1 className="xl:text-5xl lg:text-5xl md:text-5xl text-4xl font-san">
            The Grandium Special Offers
          </h1>
          <p className="xl:text-lg lg:text-lg md:text-lg text-sm leading-6 font-san xl:max-w-[50vw] md:max-w-[70vw] mx-auto mt-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eget commodo orci. Integer varius nibh eu mattis porta.
            Pellentesque dictum sem eget cursus semper. Nullam quis blandit
            lorem.
          </p>
        </div>
        {/* card grid  */}
        <div>
          <div className="grid grid-cols-12 xl:gap-0 lg:gap-0 md:gap-y-10 gap-y-10">
            {offers.map(
              ({
                id,
                image,
                title,
                description,
                link,
                reverse,
                start,
                end,
              }) => (
                <OfferCard
                  key={id}
                  img={image}
                  title={title}
                  des={description}
                  link={link}
                  reverse={reverse}
                  start={start}
                  end={end}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
    // </div>
  );
};

export default OfferSection;
