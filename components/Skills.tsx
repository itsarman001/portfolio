import { SectionHeading } from "@/components/shared/SectionHeading";
import { skills } from "@/data/skills";

export const Skills = () => {
  return (
    <section id="skills" className="py-10">
      <SectionHeading>skills.</SectionHeading>

      <ul className="mt-4 flex flex-col gap-2 text-base font-normal text-primary/90">
        {skills.map(
          (skill, index) =>
            skill.visible && (
              <li
                key={index}
                className="grid items-end sm:grid-cols-[170px_1fr]"
              >
                <p>{skill.category}:</p>
                <p className="text-sm text-muted-foreground">
                  {skill.items.join(", ")}
                </p>
              </li>
            ),
        )}
      </ul>
    </section>
  );
};
