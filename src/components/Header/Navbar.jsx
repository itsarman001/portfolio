import React from "react";
import { Container, BrandName, NavItem } from "../index";

function Navbar() {
  const navitems = [
    {
      id: 1,
      className: "text-base font-semibold inter-tight",
      label: "github",
      to: "/github",
    },
    {
      id: 2,
      className: "text-base font-semibold inter-tight",
      label: "linkedin",
      to: "/linkedin",
    },
    {
      id: 3,
      className: "text-base font-semibold inter-tight",
      label: "twitter",
      to: "/twitter",
    },
    {
      id: 4,
      className: "text-base font-semibold inter-tight",
      label: "about",
      to: "/about",
    },
    {
      id: 5,
      className: "text-base font-semibold inter-tight",
      label: "contact",
      to: "/contact",
    },
    {
      id: 6,
      className: "text-base font-semibold inter-tight",
      label: "projects",
      to: "/projects",
    },
  ];
  return (
    <nav>
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
            to="/projects"
          />
          <NavItem
            className="text-base font-semibold inter-tight"
            label="about"
            to="/about"
          />
          <NavItem
            className="text-base font-semibold inter-tight"
            label="/contact"
          />
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
