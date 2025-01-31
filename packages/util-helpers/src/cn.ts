import { twMerge } from "tailwind-merge";

export function cn(...classes: unknown[]): string {
  return twMerge(classes.filter(Boolean).join(" "));
}
