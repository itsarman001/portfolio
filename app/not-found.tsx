import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <section className="mx-auto px-4 w-full lg:w-2/3 xl:w-1/2 pt-6 sm:pt-12">
      <div className="space-y-2">
        <p className="text-base font-normal text-muted-foreground">
          404, page not found
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-primary/90">
          Nothing here.
        </h1>

        <p className="text-base font-normal text-primary/90">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>

        <div className="pt-2">
          <Link href="/" className={cn(buttonVariants(), "rounded-sm")}>
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
