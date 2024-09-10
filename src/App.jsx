import React from "react";
import { UserContextProvider } from "./context/userContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar,  Footer } from "./components";
import { Home, About, Work, Contact, } from "./pages";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
