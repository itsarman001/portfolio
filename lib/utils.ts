export { cn } from "cn";

/**
 * Returns the age in full years for an ISO date string (YYYY-MM-DD).
 * Parsed manually to avoid timezone shifts from `new Date("YYYY-MM-DD")`.
 */
export function getAge(birthDate: string, today: Date = new Date()): number {
  const [year, month, day] = birthDate.split("-").map(Number);

  let age = today.getFullYear() - year;

  const hasHadBirthdayThisYear =
    today.getMonth() + 1 > month ||
    (today.getMonth() + 1 === month && today.getDate() >= day);

  if (!hasHadBirthdayThisYear) age -= 1;

  return age;
}
