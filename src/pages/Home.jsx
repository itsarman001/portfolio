import React from "react";
import { Heading } from "../components";
import { useUserContext } from "../context/userContext";

function Home() {
  const { USER } = useUserContext();
  return (
    <div className="h-dvh px-10 py-20 md:px-16 md:py-28 lg:px-40 lg:py-40 text-center">
      <Heading label="FRONTEND" />
      <Heading label="DEVELOPER" />
      <p className="text-xl my-2 md:text-2xl lg:text-3xl">{USER.intro}</p>
      <div>
        
      </div>
    </div>
  );
}

export default Home;
