import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { projects } from "@/data/projects";

const GITHUB_URL = "https://github.com/itsarman001";

export const Projects = () => {
  return (
    <section id="projects-section" className="py-10">
      <SectionHeading>projects.</SectionHeading>

      <ul
        className={`mt-4 ${
          projects.length > 3 ? "grid md:grid-cols-2" : "flex flex-col"
        } gap-12 text-base font-normal text-primary/90`}
      >
        {projects.map((project) => {
          const links = [
            { label: "Live Preview", href: project.links.live },
            { label: "Source Code", href: project.links.source },
          ].filter((link) => link.href);

          return (
            <li
              key={project.id}
              className="size-full border-l border-muted-foreground pl-4 transition-all duration-300 hover:border-primary"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-lg text-primary/90">{project.name}</p>

                  <p className="flex items-center gap-1 text-sm">
                    {links.map((link) => (
                      <a
                        key={link.label}
                        className="ml-2 flex items-center gap-1"
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label} <ArrowUpRight size={18} />
                      </a>
                    ))}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                {project.description}
              </p>

              <ul className="mt-4 list-disc space-y-1 pl-3 text-justify text-sm text-muted-foreground">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <ul className="mt-2 flex flex-wrap items-center gap-2 pl-3">
                {project.technologies.map((tech) => (
                  <li key={tech} className="rounded bg-muted px-2 py-1 text-xs">
                    {tech}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>

      <div className="mt-8 flex justify-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          href={GITHUB_URL}
        >
          View all projects
        </a>
      </div>
    </section>
  );
};