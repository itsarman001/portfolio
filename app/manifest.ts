import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Md Arman | Frontend Developer",
    short_name: "Md Arman",
    description:
      "Md Arman is a frontend developer who builds fast, accessible, and scalable web experiences.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
  };
}
