import React from "react";
import { Hero, About, Projects } from "../components";

function Home() {
  const spacing = {
    padding: "px-10 py-20 md:px-16 md:py-28 lg:px-40 lg:py-40",
  };
  return (
    <main>
      <Hero className={spacing.padding} />
      <About className={`${spacing.padding} bg-secondary text-primary`} />
      <div className="px-10 py-20 md:px-16 md:py-28 lg:px-40 lg:py-40">
        <Projects />
      </div>
    </main>
  );
}

export default Home;
