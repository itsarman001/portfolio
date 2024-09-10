import React from "react";
import { useUserContext } from "../../context/userContext";
import { Link } from "react-router-dom";

function MobileNavigation() {
  const { NAVIGATION_LINKS } = useUserContext();
  return (
    <div>
      <ul>
        <li>
          <p className="underline underline-offset-[1rem]">NAVIGATION</p>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        {NAVIGATION_LINKS.map((item) => (
          <li key={item.label}>
            <Link to={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MobileNavigation;
