// TECH STACK ICONS
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";

// SOCIAL ICONS
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const aboutMe =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.";

export const USER = {
  fullName: "Arman",
  intro: "I turn your imagination into thing for people",
  aboutMe: aboutMe,
  email: "",
};

export const NAVIGATION_LINKS = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Works",
    href: "/works",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const SOCIAL_LINKS = [
  {
    label: "LINKEDIN",
    href: "",
    icon: <FaLinkedin />,
  },
  {
    label: "X",
    href: "",
    icon: <FaXTwitter />,
  },
  {
    label: "GITHUB",
    href: "",
    icon: <FaGithub />,
  },
];

export const WORKS = [
  // Money Manager
  {
    title: "Money Manager",
    about: "",
    categories: ["Productivity", "Web App", "Full Stack"],
    href: "#",
    screenshotes: [
      {
        path: "",
        altText: "",
      },
    ],
  },
  // Tick Tick Clone
  {
    title: "Tick Tick Clone",
    about: "",
    categories: ["Productivity", "Web App", "Full Stack"],
    href: "#",
    screenshotes: [
      {
        path: "",
        altText: "",
      },
    ],
  },
  // Spotify Clone
  {
    title: "Spotify Clone",
    about: "",
    categories: ["Music Stream App", "Web App", "Full Stack"],
    href: "#",
    screenshotes: [
      {
        path: "",
        altText: "",
      },
    ],
  },
  // e-commerce
  {
    title: "E-commerce",
    about: "",
    categories: ["Online Shopping", "Web App", "Full Stack"],
    href: "#",
    screenshotes: [
      {
        path: "",
        altText: "",
      },
    ],
  },
  // Landing Page
  {
    title: "Landing Page",
    about: "",
    categories: ["Landing Page", "Full Stack"],
    href: "#",
    screenshotes: [
      {
        path: "",
        altText: "",
      },
    ],
  },
];

export const TECH_STACK = [
  { label: "HTML5", icon: <FaHtml5 /> },
  { label: "CSS", icon: <FaCss3 /> },
  { label: "JS", icon: <FaJs /> },
  { label: "TAILWIND CSS", icon: <RiTailwindCssFill /> },
  { label: "BOOTSTRAP", icon: <FaBootstrap /> },
  { label: "JQUERY", icon: <DiJqueryLogo /> },
  { label: "REACT JS", icon: <FaReact /> },
  { label: "ANGULAR JS", icon: <FaAngular /> },
];
