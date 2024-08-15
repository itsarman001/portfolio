import React from "react";
import {Navbar, Hero, About, Projects} from "./components"

const App = () => {
  return (
    <div className="primary-bg w-dvw min-h-dvh">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
    </div>
  );
};

export default App;
