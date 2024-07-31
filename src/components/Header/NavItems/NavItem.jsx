import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ link, label, className = "" }) => {
  return (
    <li>
      <span
        to={link}
        className={`uppercase tracking-normal font-medium text-sm cursor-pointer ${className}`}
      >
        {label}
      </span>
    </li>
  );
};

export default NavItem;
