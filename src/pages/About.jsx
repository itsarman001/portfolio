import React from "react";
import TechStackConstent from '../context/TechStackConstent'
import { TechStack } from "../components";

function About() {
  const aboutme =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, at explicabo minus possimus rem exercitationem quia ipsam maxime itaque voluptas expedita hic veritatis distinctio nihil? Deleniti minus itaque, hic reprehenderit vitae ipsam modi voluptates, earum repellat dolorem cumque recusandae ab nostrum.";
  return (
    <section className="min-h-dvh">
      <div>
        <span>01.</span>
        <span>About me</span>
      </div>
      <div>
        <p>{aboutme}</p>
      </div>
      <div>
        <div>Tech Stack</div>
        <div>
          {TechStackConstent.map((elem) => (
            <TechStack key={elem.label} label={elem.label} icon={elem.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
