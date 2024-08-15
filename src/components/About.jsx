import React from "react";
// import img from "../assets/about-pic.jpg";
import { techStack } from "../constants";

function About() {
  return (
    <section className="accent-lt px-10 py-20 md:px-14 lg:px-28 md:py-28 lg:py-40">
      <div className="font-medium text-lg mb-5">00. ABOUT ME</div>
      <div className=" lg:flex items-start justify-start gap-4 mb-3">
        <div className="mb-4">
          <h3 className="text-3xl md:text-5xl lg:text-6xl mb-4 ">
            We recognized a gap in the creative industry—small businesses often
            struggle to find high-quality, yet affordable, design solutions.
            That's why we exist.
          </h3>
          <div>
            <h3 className="font-medium text-lg mb-3">Tech Stack</h3>
            <ul className="flex items-start gap-3 flex-wrap">
              {techStack.map((e, index) => (
                <li
                  className="accent-bg px-3 py-2 rounded-full font-medium cursor-pointer"
                  key={index}
                >
                  {e.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* <div>
          <img src={img} alt="About Pic" />
        </div> */}
      </div>
    </section>
  );
}

export default About;
