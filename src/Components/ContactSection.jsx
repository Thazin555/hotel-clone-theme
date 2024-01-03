import React from 'react'

const ContactSection = () => {
  return (
    <div>
      <section className="container   mx-auto">
        <div className="m-5 pt-10 pb-10 w-[640px]  text-center md:text-left lg:text-left">
          <h1
            className="font-heading leading-3 
            mt-4 font-black text-xs uppercase text-[#d77b5d] tracking-[2px]"
          >
            Default Page
          </h1>
          <h1
            className="font-san text-5xl font-medium leading-9 mt-4 mb-12 break-words
             text-[#24324a] tracking-[1px]"
          >
            Contact
          </h1>

          <span className="font-san  text-[#202735] text-lg font-medium  leading-7 mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eget commodo orci. Integer varius nibh eu mattis porta.
            Pellentesque dictum sem eget cursus semper. Nullam quis blandit
            lorem. Morbi blandit orci urna, eu congue magna faucibus at. In
            bibendum in mauris nec ultrices. Nunc et magna velit.
          </span>
        </div>
      </section>
    </div>
  );
};

export default ContactSection