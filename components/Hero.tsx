import { Mail } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { cn } from "@/lib/utils";

import { about } from "@/data/about";

const socials = [
  {
    label: "Email",
    href: `mailto:${about.social.email}`,
    Icon: Mail,
    external: false,
  },
  {
    label: "GitHub",
    href: about.social.github,
    Icon: GithubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    href: about.social.linkedin,
    Icon: LinkedinIcon,
    external: true,
  },
];

export const Hero = () => {
  return (
    <section className="pt-12">
      <div className="space-y-2">
        <p className="text-base font-normal text-muted-foreground">
          hi there👋, I&apos;m
        </p>
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-primary/90">
            {about.name}
          </h1>
          <div className="flex flex-col gap-0 text-base font-normal text-primary/90">
            <p>20 he/him</p>
            <p>
              Passionate about building high-performance and scalable web
              applications.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Button className="rounded-sm">Resume</Button>

          {socials.map(({ label, href, Icon, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "rounded-sm",
              )}
              {...(external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              <Icon className="size-[18px]" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
