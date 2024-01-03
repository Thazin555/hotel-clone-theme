import React from 'react'

const AboutMember = ({ id, img, mName, role }) => {
  return (
    <div className={`group is`}>
      <a href="">
        <img
          src={img}
          className={`rounded-full border-[20px] border-transparent group-[.is]:hover:border-white `}
          alt=""
        />
      </a>
      <div className="text-center mt-[30px]">
        <h5 className=" text-[#d77b5d] text-[12px] font-black font-heading tracking-[1px] leading-[13.2px] mb-[10px]">
          {mName}
        </h5>
        <h5 className=" font-heading text-[#24324a]  text-[10px] tracking-[1px] leading-[11px]">
          {role}
        </h5>
      </div>
      <div className="w-[154px] mx-auto mt-[30px] border border-[#e1e1e1] rounded-full">
        <ul className=" mx-auto  grid grid-flow-col ">
          <li className=" border-e border-[#e1e1e1] py-1 border-collapse group li-1">
            <a href="" className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-2 h-[13px] mx-auto  group-[.li-1]:hover:fill-[#d77b5d]  duration-300 "
                fill="#818A9C"
                viewBox="0 0 320 512"
              >
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </a>
          </li>
          <li className=" border-e border-[#e1e1e1] group py-1 border-collapse li-2">
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-[13px] mx-auto group-[.li-2]:hover:fill-[#d77b5d]  duration-300"
                fill="#818A9C"
                viewBox="0 0 512 512"
              >
                <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
              </svg>
            </a>
          </li>
          <li className=" border-e border-[#e1e1e1] group py-1 border-collapse li-3">
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-[13px] mx-auto group-[.li-3]:hover:fill-[#d77b5d]  duration-300"
                fill="#818A9C"
                viewBox="0 0 448 512"
              >
                {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.*/}
                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
            </a>
          </li>
          <li className="py-1 group border-collapse li-4">
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-[13px] mx-auto group-[.li-4]:hover:fill-[#d77b5d] duration-300"
                fill="#818A9C"
                viewBox="0 0 640 512"
              >
                <path d="M386.1 228.5c1.8 9.7 3.1 19.4 3.1 32C389.2 370.2 315.6 448 204.8 448c-106.1 0-192-85.9-192-192s85.9-192 192-192c51.9 0 95.1 18.9 128.6 50.3l-52.1 50c-14.1-13.6-39-29.6-76.5-29.6-65.5 0-118.9 54.2-118.9 121.3 0 67.1 53.4 121.3 118.9 121.3 76 0 104.5-54.7 109-82.8H204.8v-66h181.3zm185.4 6.4V179.2h-56v55.7h-55.7v56h55.7v55.7h56v-55.7H627.2v-56h-55.7z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMember