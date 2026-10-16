import { ModeToggle } from "@/components/theme/mode-toggle";

const LINKS = [
  { label: "Experience", path: "#experience-section", external: false },
  { label: "Projects", path: "#projects-section", external: false },
];

export const Header = () => {
  return (
    <header className="flex justify-between items-end">
      <h1 className="tracking-tighter font-bold text-xl text-primary/90 cursor-pointer">
        Arman
      </h1>
      <nav className="flex items-center gap-2.5">
        <ul className="flex items-center gap-2">
          {LINKS.map((link) => (
            <li key={link.label}>
              <span className="relative block w-fit leading-[1.2rem] rounded-lg p-0 text-base text-primary/90 whitespace-nowrap sm:px-2 sm:py-1 cursor-pointer">
                {link.label}
              </span>
            </li>
          ))}
        </ul>
        <ModeToggle />
      </nav>
    </header>
  );
};
