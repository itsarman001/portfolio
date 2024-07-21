import React from "react";

const NavItem = ({ link, label, className = "" }) => {
  return (
    <li>
      <span
        className={`uppercase tracking-normal font-medium text-sm cursor-pointer ${className}`}
      >
        {label}
      </span>
    </li>
  );
};

export default NavItem;
