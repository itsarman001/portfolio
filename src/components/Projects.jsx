import React from "react";
import { MdArrowOutward } from "react-icons/md";

function Projects() {
  return (
    <section className="w-full primary-bg px-10 md:px-16 lg:px-28 py-10">
      <h3 className="mb-10">01. WORK</h3>
      <div>
        <ul>
          <li className=" border-y border-black border-opacity-50 py-8 hover:px-2 primary-bg-hover">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="text-3xl md:text-4xl lg:text-5xl">
                Money Manager
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="dark-bg px-3 py-1 rounded-md">Web</span>
                <span className="dark-bg px-3 py-1 rounded-md">
                  Productivity
                </span>
                <a
                  href="#"
                  className="flex items-center gap-2 accent-bg px-3 py-1 rounded-md"
                >
                  <span>VISIT</span> <MdArrowOutward />
                </a>
              </div>
            </div>
            {/* Project Screen Shots */}
            <div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
