import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getKVData = async (key: string) => {
  const host = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${host}/radar`);
  return res.json();
}