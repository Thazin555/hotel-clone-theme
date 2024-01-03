import React, { useEffect, useState } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import AboutFeature from "./AboutFeature";

const AboutKeyFeatures = () => {
  const features = [
    {
      id: 1,
      img: "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/ico-coffee.png",
      fName: "BREAKFAST",
      setWidth: "h-20",
    },
    {
      id: 2,
      img: "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/ico-roomservice.png",
      fName: "Room service",
      setWidth: "h-20",
    },
    {
      id: 3,
      img: "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/ico-food.png",
      fName: "Bistro % Bar",
      setWidth: "h-20",
    },
    {
      id: 4,
      img: "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/ico-wifi.png",
      fName: "wi-fi service",
      setWidth: "h-20",
    },
    {
      id: 5,
      img: "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/ico-car.png",
      fName: "free parking",
      setWidth: "h-20",
    },
    {
      id: 6,
      img: "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/ico-food.png",
      fName: "Bistro % Bar",
      setWidth: "h-20",
    },
    {
      id: 7,
      img: "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/ico-coffee.png",
      fName: "BREAKFAST",
      setWidth: "h-20",
    },
    {
      id: 8,
      img: "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/ico-roomservice.png",
      fName: "Room service",
      setWidth: "h-20",
    },
    {
      id: 9,
      img: "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/ico-car.png",
      fName: "free parking",
      setWidth: "h-20",
    },
    {
      id: 10,
      img: "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/ico-wifi.png",
      fName: "wi-fi service",
      setWidth: "h-20",
    },
  ];
  const [selectedBullet, setSelectedBullet] = useState(0);

  const handleBullet = (index) => {
    setSelectedBullet(index);
  };

  useEffect(() => {
    const glide_key = new Glide(".glide-instance-key-features", {
      gap: 40,
      type: "carousel",
      startAt: 0,
      rewind: false,
      animationDuration: 1500,
    });

    glide_key.on(["resize", "mount.before"], function () {
      if (window.innerWidth >= 1024) {
        glide_key.settings.perView = 5;
      } else if (window.innerWidth >= 640) {
        glide_key.settings.perView = 2;
      } else {
        glide_key.settings.perView = 1;
      }
    });

    glide_key.mount();
  }, []);

  return (
    <section>
      <div className="max-w-[1300px] py-[100px] px-[60px] my-0 mx-auto">
        <div className=" text-center md:mb-[100px] mb-[40px]">
          <h5 className="text-[#d77b5d] tracking-[0.125rem] text-[12px] font-black font-heading">
            KEY FEATURES
          </h5>
          <p className=" text-[#24324a]  md:text-[48px] text-[34px] leading-none">
            Explore The Grandium
          </p>
          <p className=" mt-[30px] text-[#24324a]  leading-[30px] font-[#24324a] md:text-[18px] text-[14px] lg:w-[50vw] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eget commodo orci. Integer varius nibh eu mattis porta.
            Pellentesque dictum sem eget cursus semper. Nullam quis blandit
            lorem.
          </p>
        </div>
        <div>
          <div className="glide glide-instance-key-features">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                {features.map(({ id, img, fName, setWidth }) => (
                  <li key={id} className="glide__slide">
                    <AboutFeature
                      id={id}
                      img={img}
                      fName={fName}
                      setWidth={setWidth}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="glide__bullets !-bottom-16 gap-2"
              data-glide-el="controls[nav]"
            >
              <button
                className={`glide__bullet ${
                  selectedBullet === 0
                    ? " !bg-[#869791] !border-[#869791]"
                    : "bg-[#d6d6d6]"
                }`}
                onClick={() => handleBullet(0)}
                onFocus={() => handleBullet(0)}
                data-glide-dir="=0"
              />
              <button
                className={`glide__bullet ${
                  selectedBullet === 1
                    ? " !bg-[#869791] !border-[#869791]"
                    : "bg-[#d6d6d6]"
                }`}
                onClick={() => handleBullet(1)}
                onFocus={() => handleBullet(1)}
                data-glide-dir="=5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutKeyFeatures;