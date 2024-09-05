import React from "react";
import { useUserContext } from "../../context/userContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { NAVIGATION_LINK } = useUserContext();
  return <nav>
    <div><h4>Portfolio</h4></div>
    <ul>
        {NAVIGATION_LINK.map((item)=>(
            <li><Link to={item.href}>{item.label}</Link></li>
        ))}
    </ul>
  </nav>;
}

export default Navbar;
