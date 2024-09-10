import React from "react";
import { Heading, SocialLinks } from "./index.js";
import { useUserContext } from "../context/userContext.jsx";

function Hero({className=""}) {
  const { USER, SOCIAL_LINKS } = useUserContext();
  return (
    <section className={`h-dvh text-center ${className}`}>
      <div className="mt-[30%] md:mt-0">
        <Heading label="FRONTEND" />
        <Heading label="DEVELOPER" />
      </div>
      <p className="text-xl my-2 md:text-2xl lg:text-3xl">{USER.intro}</p>
      <div className="">
        <ul className="flex items-center justify-center gap-2">
          {SOCIAL_LINKS.map((item) => (
            <li key={item.label} className="hover:bg-secondary rounded-full transition-colors hover:text-primary">
              <SocialLinks
                className="flex items-center p-2 text-xl"
                icon={item.icon}
                href={item.href}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Hero;
