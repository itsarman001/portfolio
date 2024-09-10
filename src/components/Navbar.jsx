import React from "react";
import { useUserContext } from "../context/userContext";
import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const { NAVIGATION_LINKS } = useUserContext(); // Fix the variable name here
  return (
    <nav className="flex items-center justify-between px-5 py-4 absolute top-0 w-full">
      <div>
        <Link to="/">
          <h4 className="flex items-center gap-1 curve-font">
            <FaRegCopyright />
            <span>Code by Arman</span>
          </h4>
        </Link>
      </div>
      <ul className="md:flex items-end gap-6 hidden">
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
