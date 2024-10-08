import React from "react";
import { useUserContext } from "../context/userContext";
import { TechStack } from "../components";

function About({className=""}) {
  const { USER, TECH_STACK } = useUserContext();
  return (
    <section className={`${className} flex items-start flex-col md:flex-row`}>
      <div className="my-3">
      <h3 className="mb-4 font-semibold">00. About Me: </h3>
        <p>{USER.aboutMe}</p>
      </div>
      <div className="my-3">
        <h3 className="mb-4 font-medium">Tech Stack: </h3>
        <ul className="flex items-center flex-wrap gap-4">
          {TECH_STACK.map((item) => (
            <li key={item.label} className="px-2 py-1 bg-red-50 rounded-full hover:bg-accent transition">
              <TechStack className="flex items-center gap-2" label={item.label} icon={item.icon} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;
