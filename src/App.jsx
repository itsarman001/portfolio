import React from "react";
import {Navbar, Hero, About} from "./components"

const App = () => {
  return (
    <div className="primary-bg w-dvw min-h-dvh">
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  );
};

export default App;
