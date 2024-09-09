import React from "react";
import { useUserContext } from "../context/userContext";
import { TechStack } from "../components";

function About() {
  const { USER, TECH_STACK } = useUserContext();
  return (
    <section>
      <div>
        <p>{USER.aboutMe}</p>
      </div>
      <div>
        <h3 className="mb-4">Tech Stack: </h3>
        <ul className="flex items-center flex-wrap gap-4">
          {TECH_STACK.map((item) => (
            <li key={item.label} className="px-2 py-1 bg-red-50 rounded-full">
              <TechStack className="flex items-center gap-2" label={item.label} icon={item.icon} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;
