export const projects = [
  {
    id: "krafon",

    name: "Krafon",

    description:
      "An AI-powered social media management SaaS built at Wiseboxs where users schedule and publish content across multiple platforms from a single dashboard.",

    features: [
      "Schedule and publish content to Facebook, Instagram, Threads, LinkedIn, and YouTube.",
      "Single dashboard for managing every connected platform.",
      "Scheduling and publishing features built with Vue 3 and Nuxt 4.",
      "REST API integration with the backend team within sprint cycles.",
    ],

    technologies: [
      "Vue.js 3",
      "Nuxt 4",
      "TypeScript",
      "Vuetify",
      "Tailwind CSS",
      "Git",
    ],

    links: {
      live: "",
      source: "",
    },
  },

  {
    id: "crewbase",

    name: "Crewbase",

    status: "In Progress",

    description:
      "A full-stack team access management app built with Next.js 16 to learn backend development: custom JWT authentication, relational data modeling, and role-based access control.",

    features: [
      "Custom login and registration with JWTs stored in HTTP-only cookies.",
      "Role-based access control with Admin, Manager, and User roles.",
      "Role-specific dashboards that render based on the signed-in user's role.",
      "Relational schema for teams and users using Prisma ORM and PostgreSQL.",
      "Secure API route handlers with request validation and bcrypt password hashing.",
      "React 19 server mutations with useActionState and useTransition.",
    ],

    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "bcrypt",
      "Tailwind CSS",
    ],

    links: {
      live: "",
      source: "",
    },
  },

  {
    id: "quick-links",

    name: "Quick Links",

    description:
      "A URL shortening platform that allows users to create, manage, and share short URLs with custom aliases.",

    features: [
      "Create short URLs from long URLs.",
      "Create custom aliases for shortened URLs.",
      "Authentication and data management with Supabase.",
      "Responsive interface optimized for desktop and mobile.",
      "QR code generation for shortened URLs.",
    ],

    technologies: [
      "React",
      "Supabase",
      "ShadCN UI",
      "React Router DOM",
      "Yup",
      "Tailwind CSS",
      "Vite",
      "React Spinners",
      "React QR Code Logo",
    ],

    links: {
      live: "https://qwklink.vercel.app/",
      source: "https://github.com/itsarman001/Quick-Link",
    },
  },
];
