import React, { useEffect, useState } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import AboutMember from "./AboutMember";

const AboutTeamMember = () => {
  const members = [
    {
      id: 1,
      img: "src/img/user-1.jpeg",
      mName: "MARİLYN SHUTTLE",
      role: "GENERAL MANAGER",
    },
    {
      id: 2,
      img: "src/img/user-2.jpeg",
      mName: "JACK MASON",
      role: "EXECUTİVE HEAD CHEF",
    },
    {
      id: 3,
      img: "src/img/user-3.jpeg",
      mName: "MİCHAEL FELSTEIN",
      role: "FRONT OF HOUSE MANAGER",
    },
    {
      id: 4,
      img: "src/img/user-4.jpeg",
      mName: "JOHN FEDERICO",
      role: "RECEPTIN MANAGER",
    },
    {
      id: 5,
      img: "src/img/user-1.jpeg",
      mName: "MARİLYN SHUTTLE",
      role: "GENERAL MANAGER",
    },
    {
      id: 6,
      img: "src/img/user-2.jpeg",
      mName: "JACK MASON",
      role: "EXECUTİVE HEAD CHEF",
    },
    {
      id: 7,
      img: "src/img/user-3.jpeg",
      mName: "MİCHAEL FELSTEIN",
      role: "FRONT OF HOUSE MANAGER",
    },
    {
      id: 8,
      img: "src/img/user-4.jpeg",
      mName: "JOHN FEDERICO",
      role: "RECEPTIN MANAGER",
    },
  ];
  const [selectedBullet, setSelectedBullet] = useState(0);

  const handleBullet = (index) => {
    setSelectedBullet(index);
  };
  useEffect(() => {
    // Initialize Glide after the component mounts
    const glide_two = new Glide(".glide-instance-unique-class", {
      gap: 30,
      type: "carousel",
      startAt: 0,
      autoplay: false,
      rewind: false,
      animationDuration: 1500,
    });

    glide_two.on(["resize", "mount.before"], function () {
      if (window.innerWidth >= 1024) {
        glide_two.settings.perView = 4;
      } else if (window.innerWidth >= 640) {
        glide_two.settings.perView = 2;
      } else {
        glide_two.settings.perView = 1;
      }
    });

    glide_two.mount();

    // Clean up the Glide instance when the component unmounts
    return () => glide_two.destroy();
  }, []);

  return (
    <div className="glide glide glide-instance-unique-class">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {members.map(({ id, img, mName, role }) => (
            <div key={id}>
              <AboutMember id={id} img={img} mName={mName} role={role} />
            </div>
          ))}
        </ul>

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
            data-glide-dir="=4"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutTeamMember;
