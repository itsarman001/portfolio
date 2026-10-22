import { cacheLife } from "next/cache";

import { getAge } from "@/lib/utils";

export async function getCurrentAge(birthDate: string) {
  "use cache";
  cacheLife("days");

  return getAge(birthDate);
}
