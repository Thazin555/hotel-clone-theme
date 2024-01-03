import React, { useContext, useState } from "react";
import { GalleriesContext } from "../contexts/Galleries";
const categories = [
  "ROOMS",
  "SKY BAR & LOUNGE",
  "WELLNESS & SPA",
  "RESTAURANT",
  "WEDDING",
  "CONFERENCE",
];
const GalleryAlbum = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { galleries } = useContext(GalleriesContext);
  // const handleButtonClick = (categories) => {
  //   setSelectedCategory(categories);
  //   // console.log(selectedCategory);
  //   // console.log(categories);
  // };
  // const getButtonStyles = (categories) => {
  //   return {
  //     backgroundColor: selectedCategory === categories ?  "#d77b5d" : "white",
  //     color: selectedCategory === categories?  "white" :"#24324a" ,
  //   };
  // };

  // const filteredClothes =
  //   selectedCategory === "all"
  //     ? galleries
  //     : galleries.filter((gallery) => console.log(gallery.category===selectedCategory));

return (
  <section className="bg-gray-100 ">
    <div className="p-3 md:p-10 font-heading ml-0 md:ml-0 lg:ml-0 lg:px-28 md:pt-10">
      <div className="block   lg:xl:2xl:flex   lg:2xl:xl:flex-wrap  select-none font-semibold text-sm  ">
        <button
          // onClick={() => {
          //   handleButtonClick("all");
          // }}
          className="w-full  md:w-28 lg:xl:2xl:w-1/12 whitespace-nowrap rounded-full mr-0 md:mr-5 lg:mr-10 text-white  bg-[#d77b5d] tracking-widest mt-3 px-3 py-3"
          // style={getButtonStyles("all")}
        >
          ALL PHOTO
        </button>

        <div className=" block  lg:flex  gap-5 ">
          {categories.map((item, index) => (
            <button
              // onClick={() => {
              //   handleButtonClick({ item });
              //   // console.log({item});
              // }}
              className=" whitespace-nowrap tracking-widest w-full mt-3 md:w-auto text-[#24324a] hover:bg-[#d77b5d] hover:text-white bg-white rounded-full text-sm px-7 py-3"
              key={index}
              // style={getButtonStyles({ item })}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap mt-20">
        {galleries.map((gallery) => (
          // console.log(gallery.category)
          <div
            key={gallery.id}
            className="lg:w-1/4 group sm:w-full md:w-1/3 p-4   cursor-pointer relative"
          >
            <img
              src={gallery.src}
              key={gallery.id}
              alt="Photo Name"
              className="aspect-auto border-[20px] lg:xl:2xl:3xl:border-[20px] md:border-[10px] border-white"
            />
            <div className="border-[25px] inline-block border-t-transparent border-r-white border-b-white group-hover:border-r-[#d77b5d] group-hover:border-b-[#d77b5d] border-l-transparent md:right-[25px] md:bottom-6 absolute bottom-9 right-9">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3 text-[#d77b5d] duration-300  group-hover:text-white stroke-[5px] absolute translate-x-1 translate-y-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
}

export default GalleryAlbum