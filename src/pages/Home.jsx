import React from "react";
import { Hero, About, Projects } from "../components";

function Home() {
  
  return (
    <div className="px-10 py-20 md:px-16 md:py-28 lg:px-40 lg:py-40 ">
      <Hero/>
      <About/>
      <Projects/>
    </div>
  );
}

export default Home;
