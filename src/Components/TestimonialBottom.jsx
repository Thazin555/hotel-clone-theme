import React, { useEffect, useState } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import Customer from "./Customer";

const TestimonialBottom = () => {
  const customers = [
    {
      id: 1,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et nisl consequat, semper est non, convallis neque. Phasellus id dictum libero. Etiam nunc libero feugiat vel sem non.",
      img: "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/user-1.jpg",
      customer: "Marilyn Suttle",
      address: "UK, BRIGHTON",
    },
    {
      id: 2,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et nisl consequat, semper est non, convallis neque. Phasellus id dictum libero. Etiam nunc libero feugiat vel sem non.",
      img: "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/user-2.jpg",
      customer: "Jack Mason",
      address: "UK, BRIGHTON",
    },
    {
      id: 3,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et nisl consequat, semper est non, convallis neque. Phasellus id dictum libero. Etiam nunc libero feugiat vel sem non.",
      img: "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/user-3.jpg",
      customer: "MICHAEL FELDSTEIN",
      address: "UK, BRIGHTON",
    },
    {
      id: 4,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et nisl consequat, semper est non, convallis neque. Phasellus id dictum libero. Etiam nunc libero feugiat vel sem non.",
      img: "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/user-4.jpg",
      customer: "JOHN FEDERICO",
      address: "UK, BRIGHTON",
    },
    {
      id: 5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et nisl consequat, semper est non, convallis neque. Phasellus id dictum libero. Etiam nunc libero feugiat vel sem non.",
      img: "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/user-2.jpg",
      customer: "Jack Mason",
      address: "UK, BRIGHTON",
    },
    {
      id: 6,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et nisl consequat, semper est non, convallis neque. Phasellus id dictum libero. Etiam nunc libero feugiat vel sem non.",
      img: "https://ninetheme.com/themes/grandium/wp-content/uploads/2016/07/user-2.jpg",
      customer: "Jack Mason",
      address: "UK, BRIGHTON",
    },
  ];
  const [selectedBullet, setSelectedBullet] = useState(0);

  const handleBullet = (index) => {
    setSelectedBullet(index);
  };
  useEffect(() => {
    // Initialize Glide after the component mounts
    const glidetest = new Glide(".glide-test", {
      gap: 30,
      type: "carousel",
      startAt: 0,
      autoplay: false,
      rewind: false,
      animationDuration: 3000,
    });

    glidetest.on(["resize", "mount.before"], function () {
      if (window.innerWidth >= 1024) {
        glidetest.settings.perView = 3;
      } else if (window.innerWidth >= 640) {
        glidetest.settings.perView = 2;
      } else {
        glidetest.settings.perView = 1;
      }
    });

    glidetest.mount();

    // Clean up the Glide instance when the component unmounts
    return () => glidetest.destroy();
  }, []);
  return (
    <div className="glide glide-test">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {customers.map(({ id, comment, img, customer, address }) => (
            <li className="glide__slide" key={id}>
              <Customer
                id={id}
                comment={comment}
                img={img}
                customer={customer}
                address={address}
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
          data-glide-dir="=3"
        />
      </div>
    </div>
  );
};

export default TestimonialBottom;
