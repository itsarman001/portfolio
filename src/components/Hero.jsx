import React from "react";

function Hero() {
  return (
    <section className="w-full text-center pt-[6%] pb-6 px-4 mb-8">
      <h2 className="text-7xl md:text-8xl lg:text-9xl font-semibold mb-3">
        FRONTEND <br /> DEVELOPER
      </h2>
      <p className="text-xl md:text-3xl lg:text-3xl w-4/5 mx-auto mb-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ducimus
        perspiciatis ut accusantium nulla
      </p>
      <button className="text-lg px-3 py-2 secondary-bg rounded-lg uppercase accent-lt font-semibold">Contact me</button>
    </section>
  );
}

export default Hero;
