import React from "react";

function TechStack({ icon, label, className = "" }) {
  return (
    <div className={`${className}`}>
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
}

export default TechStack;
