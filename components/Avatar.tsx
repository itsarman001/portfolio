import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const MyAvatar = () => {
  return (
    <Link href="/" aria-label="Home" className="shrink-0">
      <Avatar className="size-8 rounded-lg after:rounded-lg ring-1 ring-border transition-shadow hover:ring-2">
        <AvatarImage src="/avatar.png" alt="Md Arman" className="rounded-lg" />
        <AvatarFallback className="rounded-lg text-sm font-semibold">
          MA
        </AvatarFallback>
      </Avatar>
    </Link>
  );
};
