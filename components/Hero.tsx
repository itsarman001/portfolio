import { Mail } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { XIcon } from "@/components/icons/XIcon";

import { about } from "@/data/about";
import { getCurrentAge } from "@/lib/getCurrentAge";
import { cn } from "@/lib/utils";

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
  {
    label: "X",
    href: about.social.twitter,
    Icon: XIcon,
    external: true,
  },
];

export const Hero = async () => {
  const age = await getCurrentAge(about.birthDate);
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
            <p>{age} he/him</p>
            <p>{about.tagline}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <a
            href={about.resume}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants(), "rounded-sm")}
          >
            Resume
          </a>

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
