import React from 'react'
import AboutTeamMember from './AboutTeamMember';


const AboutTeam = () => {
  return (
    <section>
      <div className="max-w-[1300px] py-[100px] px-[60px] my-0 mx-auto">
        <div className=" text-center mb-[100px]">
          <h5 className="text-[#d77b5d] tracking-[0.125rem] text-[12px] font-black font-heading">
            TEAM
          </h5>
          <p className=" text-[48px] leading-none">Our Staff</p>
          <p className=" mt-[30px] leading-[30px] font-[#24324a] text-center text-[18px] lg:w-[50vw] md:w-[70vw] inline-block ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eget commodo orci. Integer varius nibh eu mattis porta.
            Pellentesque dictum sem eget cursus semper. Nullam quis blandit
            lorem.
          </p>
        </div>
        <AboutTeamMember />
      </div>
    </section>
  );
}

export default AboutTeam