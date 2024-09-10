import React from "react";
import { useUserContext } from "../../context/userContext";
import { SocialLinks } from "../index";
import { SiMinutemailer } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  const { USER, NAVIGATION_LINKS, SOCIAL_LINKS } = useUserContext();
  return (
    <section className="h-dvh bg-text text-primary">
      <div className="border-b-[1px] border-spacing-4 px-10 py-10 flex items-center">
        <div></div>
        <h3 className="text-2xl md:text-3xl lg:text-4xl">Let's Work Together</h3>
      </div>

      <ul className="px-10 py-8 flex items-center justify-center gap-4">
        <li className="bg-accent px-4 py-3 mb-5 rounded-md hover:bg-secondary transition">
          <a
            className="flex items-center justify-center gap-2"
            href="mailto:armanar6712@gmail.com"
          >
            <SiMinutemailer />
            <span>Send Message</span>
          </a>
        </li>
        <li className="bg-accent px-4 py-3 mb-5 rounded-md hover:bg-secondary transition">
          <a
            className="flex items-center justify-center gap-2"
            href="tel:+916289048250"
          >
            {" "}
            <FaPhoneAlt />
            <span>Call Me</span>
          </a>
        </li>
      </ul>

      {/* Social Media Links */}
      <div className="py-3 px-10">
        <div className="border-b border-b-disable mb-5 w-full">
          <h6 className="mb-2 text-sm ">Social Links</h6>
        </div>
        <ul className="flex items-center gap-4 ">
          {SOCIAL_LINKS.map((item) => (
            <li>
              <SocialLinks
                
                label={item.label}
                href={item.href}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Footer;
