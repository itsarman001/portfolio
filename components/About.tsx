import { about } from "@/data/about";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const About = () => (
  <section id="about-me" className="py-10">
    <SectionHeading>about me.</SectionHeading>
    <p className="mt-4 flex flex-col gap-12 text-base font-normal text-primary/90">
      <span>
        {about?.summary}
        <span className="hidden sm:inline">{about?.expertise}</span>
      </span>
    </p>
  </section>
);
