import React from "react";
import img from "../assets/about-pic.jpg";

function About() {
  const techStack = [
    { name: "HTML", path: "" },
    { name: "CSS", path: "" },
    { name: "JAVASCRIPT", path: "" },
    { name: "JQUERY", path: "" },
    { name: "BOOTSTRAP", path: "" },
    { name: "TAILWIND CSS", path: "" },
    { name: "REACT", path: "" },
  ];
  return (
    <section className="accent-bg px-10 py-6">
      <div className="font-medium text-lg mb-3">00. About me</div>
      <div className=" lg:flex items-start justify-start gap-4 mb-3">
        <div className="mb-4">
          <h3 className="text-2xl md:tex-3xl lg:text-4xl mb-4 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            facilis porro repudiandae voluptatem quod! Quo excepturi sapiente
            consectetur recusandae dolore sequi aliquam nesciunt?
          </h3>
          <ul className="flex items-start gap-3 flex-wrap">
            {techStack.map((e, index) => (
              <li
                className="accent-lt px-3 py-2 rounded-full font-medium cursor-pointer"
                key={index}
              >
                {e.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img src={img} alt="About Pic" />
        </div>
      </div>
    </section>
  );
}

export default About;
