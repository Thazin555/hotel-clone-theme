import React from 'react'
import TestimonialTop from "./TestimonialTop";
import TestimonialBottom from "./TestimonialBottom";
const Testimonials = () => {
  return (
    <section className="max-w-[1300px] my-0 lg:px-[60px] lg:mx-auto block pt-[100px] pb-[156px] !px-[40px] md:m-0">
      <TestimonialTop />
      <TestimonialBottom />
    </section>
  );
}

export default Testimonials