import React from "react";
import { Heading, SocialLinks } from "../components";
import { useUserContext } from "../context/userContext";

function Home() {
  const { USER, SOCIAL_LINKS } = useUserContext();
  return (
    <div className="h-dvh px-10 py-20 md:px-16 md:py-28 lg:px-40 lg:py-40 text-center">
      <Heading label="FRONTEND" />
      <Heading label="DEVELOPER" />
      <p className="text-xl my-2 md:text-2xl lg:text-3xl">{USER.intro}</p>
      <div>
        <ul className="flex items-center gap-2">
          {SOCIAL_LINKS.map((item) => (
            <li key={item.label}>
            <SocialLinks
            className="flex items-center p-2 text-xl"
              icon={item.icon}
              href={item.href}
            />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
