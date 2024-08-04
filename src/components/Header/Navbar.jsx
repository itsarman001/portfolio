import React from "react";
import { Container, BrandName, NavItem } from "../index";

function Navbar() {
  return (
    <nav>
      <Container className="flex items-center justify-between px-4 pt-4 primary-bg">
        <ul className="flex gap-2">
          <NavItem label="github" />
          <NavItem label="linkedin" />
          <NavItem label="twitter" />
        </ul>

        <BrandName label="ARMAN" />

        <ul className="flex gap-2">
          <NavItem label="Projects" />
          <NavItem label="about" />
          <NavItem label="contact" />
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
