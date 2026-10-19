import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { Mail } from "lucide-react";

import { about } from "@/data/about";

export const Hero = () => {
  return (
    <section className="pt-12">
      <div className="space-y-2">
        <p className="text-base font-normal text-muted-foreground">
          hi there👋, I'm
        </p>
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-primary/90">
            {about?.name}
          </h1>
          <h2 className="flex flex-col gap-0 text-base font-normal text-primary/90">
            <p>20 he/him</p>
            <p>
              Passionate about building high-performance and scalable web
              applications.
            </p>
          </h2>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Button className="rounded-sm">Resume</Button>

          <Button asChild variant="ghost" size="icon" className="rounded-sm">
            <a href={`mailto:${about?.socialLinks?.email}`} aria-label="Email">
              <Mail />
            </a>
          </Button>

          <Button asChild variant="ghost" className="rounded-sm">
            <a
              href={about?.socialLinks?.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon className="size-[18px]" />
            </a>
          </Button>

          <Button asChild variant="ghost" className="rounded-sm">
            <a
              href={about?.socialLinks?.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="size-[18px]" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
