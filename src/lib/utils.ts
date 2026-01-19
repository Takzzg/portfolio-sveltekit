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

export const translation = (key: I_TranslationKey) => {
	let lang = getLang().key;
	let text = undefined;

	if (lang == "en") text = en[key];
	else if (lang == "es") text = es[key];

	if (text == undefined) {
		console.error(`No translation found, lang: ${lang}, key: ${key}`);
		text = "ERROR_NO_TRANSLATION";
    }
    
	return text;
};
