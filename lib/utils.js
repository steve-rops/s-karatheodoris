import { DIFERRENCE_IN_DAYS } from "@/data";
import { clsx } from "clsx";
import { addDays, differenceInDays, isFuture } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const prosexwsFlag = (eventStartDate) => {
  return (
    differenceInDays(eventStartDate, new Date()) < DIFERRENCE_IN_DAYS &&
    isFuture(addDays(eventStartDate, 1))
  );
};
