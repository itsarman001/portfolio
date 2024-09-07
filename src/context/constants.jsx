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

export const USER = {
  fullName: "Arman",
  intro: "I turn your imagination into thing for people",
  aboutMe: "",
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
  {
    title: "",
    categories: [],
    href: "",
    screenshotes: [],
    altText: "",
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
