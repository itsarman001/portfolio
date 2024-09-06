import React from "react";
import { useUserContext } from "../../context/userContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { NAVIGATION_LINKS } = useUserContext(); // Fix the variable name here
  return (
    <nav>
      <div>
        <Link to="/"><h4>Portfolio</h4></Link>
      </div>
      <ul>
        {NAVIGATION_LINKS.map((item) => (
          <li key={item.label}>
            <Link to={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
