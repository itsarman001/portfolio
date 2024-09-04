import React from "react";
import { Heading } from "../components";

function Home() {
  const paragraph =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, similique!";
  return (
    <section className="min-h-dvh grid place-content-center gap-4">
      <div className="text-center text-7xl md:text-8xl lg:text-9xl">
        <Heading label="FRONTEND" />
        <Heading label="DEVELOPER" />
      </div>
      <div className="text-center w-4/5 mx-auto">
        <p>{paragraph}</p>
      </div>
      <div className="grid place-items-center">
        <button className="px-2 py-1 text-xl md:text-2xl lg:text-3xl bg-red-300 hover:bg-red-500 transition rounded-md">contact</button>
      </div>
    </section>
  );
}

export default Home;
