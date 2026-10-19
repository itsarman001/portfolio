import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { experiences } from "@/data/experience";

export const Experience = () => {
  return (
    <section id="experience-section" className="py-10">
      <SectionHeading>experience.</SectionHeading>

      <ul className="mt-4 flex flex-col gap-12 text-base font-normal text-primary/90">
        {experiences.map((item) => (
          <li
            key={item.id}
            className="size-full border-l border-muted-foreground pl-4 transition-all duration-300 hover:border-primary"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-lg text-primary/90">
                  {item.role}
                  <span className="ml-2 inline-block rounded bg-secondary px-2 py-1 text-xs max-sm:mb-2">
                    {item.employment.location}
                  </span>
                </p>

                <p className="flex items-center text-sm">
                  at,
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 flex items-center gap-1"
                    href={item.company.website}
                  >
                    {item.company.name} <ArrowUpRight size={18} />
                  </a>
                </p>
              </div>

              <p className="text-sm text-muted-foreground">
                {item.employment.startDate} -{" "}
                {item.employment.endDate ?? "Present"}
              </p>
            </div>

            <ul className="mt-4 list-disc space-y-1 pl-3 text-justify text-sm text-muted-foreground">
              {item.responsibilities.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>

            <ul className="mt-2 flex flex-wrap items-center gap-2 pl-3">
              {item.technologies.map((tech) => (
                <li key={tech} className="rounded bg-muted px-2 py-1 text-xs">
                  {tech}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};