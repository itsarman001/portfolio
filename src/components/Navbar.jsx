import React, { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { NAVIGATION_LINKS, SOCIAL_LINKS } from "../constants";
import { motion } from "framer-motion"

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleNav = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between w-full py-3 px-5 relative">
      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center justify-between w-full">
        <ul className="flex gap-2 items-center justify-between">
          {SOCIAL_LINKS.map((item, index) => (
            <li
              className="uppercase font-medium cursor-pointer text-base tracking-tight"
              key={index}
            >
              {item.label}
            </li>
          ))}
        </ul>

        <div className="text-lg font-bold tracking-wide">ARMAN</div>

        <ul className="flex items-center justify-between gap-2 uppercase">
          {NAVIGATION_LINKS.map((item, index) => (
            <li
              className="uppercase font-medium cursor-pointer text-base tracking-tight"
              key={index}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Nav */}
      <div className="lg:hidden flex items-center justify-between w-full px-5">
        <div className="lg:hidden text-lg font-bold tracking-wide relative z-50">ARMAN</div>
        <button className="lg:hidden relative z-50" onClick={toggleNav}>
          {isMobileMenuOpen ? (
            <RxCross2 className=" text-2xl font-semibold" />
          ) : (
            <HiBars3BottomRight className=" text-2xl font-semibold" />
          )}
        </button>
        {isMobileMenuOpen && (
          <div className="fixed top-0 left-0 right-0 py-10 px-5 mx-5 lg:hidden flex items-center justify-between flex-col gap-3">
            <ul className=" flex items-center flex-col justify-between gap-4 uppercase">
              {NAVIGATION_LINKS.map((item, index) => (
                <li
                  className="uppercase font-medium cursor-pointer text-5xl tracking-wide hover:line-through"
                  key={index}
                >
                  {item.label}
                </li>
              ))}
            </ul>

            <ul className="flex gap-4 items-center justify-between ">
              {SOCIAL_LINKS.map((item, index) => (
                <li
                  className="uppercase font-medium cursor-pointer text-xl tracking-wide hover:line-through"
                  key={index}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
