import React from "react";
import { Accordian } from "./index";
import { useUserContext } from "../context/userContext";

function Projects({ className = "" }) {
  const { WORKS } = useUserContext();
  return (
    <section className={` ${className}`}>
      <div>
        <p>001. Works</p>
      </div>
      <div>
        <ul>
          {WORKS.map((work) => (
            <li key={work.title}>
              <Accordian accordianData={work} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
