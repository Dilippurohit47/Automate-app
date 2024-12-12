import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const fetchPost = async <T>(url: string, data: T) => {
  const result = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return result;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
