import React from "react";
import { useUserContext } from "../context/userContext";

function SocialLinks() {
  const { SOCIAL_LINKS } = useUserContext();
  return (<ul>
    {SOCIAL_LINKS.map((item)=> ())}
  </ul>)
}

export default SocialLinks;
