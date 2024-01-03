import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;

        if (scrollY > 50) {
          setShowScrollButton(true);
        } else {
          setShowScrollButton(false);
        }
      };

      document.addEventListener("scroll", handleScroll);

      return () => {
        document.removeEventListener("scroll", handleScroll);
      };
    }, []);
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  return (
    <div>
      {showScrollButton && (
        <div className=" bg-white hidden md:inline-block fixed bottom-0 w-[50px] h-[50px] p-5 right-10">
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
