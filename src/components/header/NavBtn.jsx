import React from "react";

function NavBtn() {
  const animate = (e) => e.classList.toggle("change");
  return (
    <div className="navBtn-container" onClick={()=> animate(e)}>
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
  );
}

export default NavBtn;
