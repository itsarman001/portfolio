import React from "react";

function SocialLinks({ href, icon, label, className = "" }) {
  return (
    <a href={href} className={`${className}`} target="_blank">
      <span>{icon}</span>
      <span>{label}</span>
    </a>
  );
}

export default SocialLinks;
