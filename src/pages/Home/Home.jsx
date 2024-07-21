import React from "react";

const Home = ({ className = "" }) => {
  return (
    <div className={`py-[8%] h-screen ${className}`}>
      <div className="mb-3">
        <h1 className="text-[16.279vw] sm:text-[110px] lg:text-[135px] leading-[85%]">
          FRONTEND
        </h1>
        <h1 className="text-[16.279vw] sm:text-[110px] lg:text-[135px] leading-[85%]">
          DEVELOPER
        </h1>
      </div>
      <div className="w-3/4 mx-auto mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
        Hi, i am a frontend developer and i transform your imagination into
        reality.
      </div>

      <button className="bg-white px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3  rounded-full uppercase">
        <a href="mailto:armanar6712@gamil.com" className="text-sm sm:text-lg">
          mail me
        </a>
      </button>
    </div>
  );
};

export default Home;
