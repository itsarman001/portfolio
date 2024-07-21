import React from "react";
import { Container, NavItem, BrandName } from "./components";
import { Home } from "./pages";
import "./App.css";

const App = () => {
  return (
    <div>
      <Container className="flex items-center justify-between px-4 pt-4 primary-bg">
        <ul className="flex gap-2">
          <NavItem
            className="text-base font-semibold inter-tight "
            label="github"
          />
          <NavItem
            className="text-base font-semibold inter-tight"
            label="linkedin"
          />
          <NavItem
            className="text-base font-semibold inter-tight"
            label="twitter"
          />
        </ul>

        <BrandName label="ARMAN" />

        <ul className="flex gap-2">
          <NavItem
            className="text-base font-semibold inter-tight"
            label="Projects"
          />
          <NavItem
            className="text-base font-semibold inter-tight"
            label="about"
          />
          <NavItem
            className="text-base font-semibold inter-tight"
            label="contact"
          />
        </ul>
      </Container>

      <Container className="text-center font-semibold inter-tight flex items-center justify-center primary-bg">
        <Home className=" h-screen w-full" />
      </Container>
    </div>
  );
};

export default App;
