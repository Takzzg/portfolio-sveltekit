import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { getLang } from "./state/GlobalState.svelte";
import type { I_TranslationKey } from "./assets/translations/keys";
import en from "./assets/translations/en";
import es from "./assets/translations/es";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, "child"> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, "children"> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };

export const translate = (key: I_TranslationKey) => {
	let selected = getLang().key;
	if (selected == "en") return en[key];
	else if (selected == "es") return es[key];
};
