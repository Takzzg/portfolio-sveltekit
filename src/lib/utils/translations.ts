import type { I_TranslationKey } from "$lib/assets/translations/keys";
import { getLang } from "$lib/state/GlobalState.svelte";
import en from "../assets/translations/en";
import es from "../assets/translations/es";

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

export type I_TraKey = string;

export type I_TranslationsDic<T extends I_TraKey> = {
	en: Record<T, string>;
	es: Record<T, string>;
};

export const getTranslation = <T extends I_TraKey>(dictionary: I_TranslationsDic<T>, key: T) => {
	let lang = getLang().key;

	if (!Object.hasOwn(dictionary[lang], key)) {
		console.error(`No translation found, lang: ${lang}, key: ${key}`);
		return "ERROR_NO_TRANSLATION";
	}

	return dictionary[lang][key];
};
