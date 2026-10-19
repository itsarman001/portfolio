import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mx-auto flex w-fit cursor-pointer flex-col items-center gap-0 py-10 text-muted-foreground">
      <Button variant="outline" className="flex items-center gap-1">
        Elevate to the top
        <ArrowUp size={20} />
      </Button>
    </footer>
  );
};
