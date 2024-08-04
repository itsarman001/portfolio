import React from "react";
import { Container } from "../../components";
import { html, css, js, tailwind, bootstrap, react } from "../../assets";

function About({ className }) {
  const icons = [html, css, js, tailwind, bootstrap, react];
  return (
    <Container className={`py-[4%] h-screen ${className}`}>
      <div className="mb-4">
        <h1 className="text-[16.279vw] sm:text-[110px] lg:text-[135px] leading-[85%]">
          ABOUT ME
        </h1>
      </div>

      <div className="w-3/4 mx-auto mb-5 text-lg sm:text-xl md:text-2xl lg:text-3xl">
        Come take a peek into my world, where I do my thing, offer my services,
        and explore my developer career recognitions.
      </div>

      <div className="w-full min-h-[80%] bg-slate-400">
        Click a picture for portfolio
      </div>

      <div className="grid grid-cols-2 content-start justify-between w-full mx-auto my-8 py-4">
        <div className="self-start justify-self-start">(Skills)</div>
        <ul className="flex items-center justify-between gap-2">
          {icons.map((icon) => (
            <li key={icon}>
              <img src={icon} alt={icon} className="w-10 h-10" />
            </li>
          ))}
        </ul>

        <div className="my-4 justify-self-start align-text-top self-start">\(Services)\</div>

        <p className="my-4 text-start">
          You can count on my exceptional development and design services to
          bring your ideas to life and leave a lasting impact. From web
          development to sleek UI/UX design, I've got the expertise and
          creativity from making your vision a reality.
        </p>
      </div>
    </Container>
  );
}

export default About;
