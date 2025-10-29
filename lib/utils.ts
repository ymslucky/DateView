import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const getKVData = async (key: string) => {
	const host = process.env.NODE_ENV === 'development' ? 'https://date-view.edgeone.app' : '';
	const res = await fetch(`${host}/${key}`);
	return res.json();
}