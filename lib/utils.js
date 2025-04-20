import { DIFERRENCE_IN_DAYS } from "@/data";
import { clsx } from "clsx";
import { differenceInDays, isFuture } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const prosexwsFlag = (eventStartDate) => {
  return (
    isFuture(eventStartDate) &&
    differenceInDays(eventStartDate, new Date()) < DIFERRENCE_IN_DAYS
  );
};
