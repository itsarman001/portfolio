import React from "react";
import { useUserContext } from "../../context/userContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { NAVIGATION_LINKS } = useUserContext(); // Fix the variable name here
  return (
    <nav className="flex items-center justify-between px-3 py-2 absolute top-0 w-full">
      <div>
        <Link to="/"><h4>Portfolio</h4></Link>
      </div>
      <ul className="flex items-end gap-4">
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
