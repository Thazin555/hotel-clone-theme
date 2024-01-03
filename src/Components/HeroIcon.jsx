import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faFacebookF,
  faGooglePlusG,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const HeroIcon = () => {
  return(
    <div className="flex container  gap-1 px-7 pt-16 absolute   z-50 text-white py-4 w-full ">
      <a
        href="https://twitter.com/"
        className=" text-[#818a9c] flex h-[35px] w-[35px] justify-center   pt-2 text-center transition-all hover:text-white"
      >
        <FontAwesomeIcon className="text-xs" icon={faFacebookF} />
      </a>
      <a
        href="https://twitter.com/"
        className=" text-[#818a9c] flex h-[35px] w-[35px] justify-center   pt-2 text-center transition-all hover:text-white"
      >
        <FontAwesomeIcon className="text-xs" icon={faTwitter} />
      </a>
      <a
        href="https://twitter.com/"
        className=" text-[#818a9c] flex h-[35px] w-[35px] justify-center   pt-2 text-center transition-all hover:text-white"
      >
        <FontAwesomeIcon className="text-xs" icon={faGooglePlusG} />
      </a>
      <a
        href="https://twitter.com/"
        className=" text-[#818a9c] flex h-[35px] w-[35px] justify-center   pt-2 text-center transition-all hover:text-white"
      >
        <FontAwesomeIcon className="text-xs" icon={faInstagram} />
      </a>
    </div>
  );
};

export default HeroIcon;
