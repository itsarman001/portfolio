import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ label }) => {
  return (
    <li>
      <span
        className={`uppercase tracking-normal font-medium text-sm cursor-pointer text-base font-semibold inter-tight`}
      >
        {label}
      </span>
    </li>
  );
};

export default NavItem;
