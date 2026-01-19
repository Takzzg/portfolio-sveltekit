import { getLang } from "$lib/state/GlobalState.svelte";

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
