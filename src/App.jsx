import React from "react";
import { Navbar } from "./components";
import { Home, About, Work } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="primary-bg w-dvw min-h-dvh">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
