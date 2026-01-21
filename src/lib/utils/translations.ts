import { getLang } from "$lib/state/GlobalState.svelte";

export type I_TraKey = string;

export type I_Translation = {
	en: string;
	es: string;
};

export type I_TranslationsDicNew<K extends I_TraKey> = Record<K, I_Translation>;

export type I_TranslationsDic<T extends I_TraKey> = {
	en: Record<T, string>;
	es: Record<T, string>;
};

export const getTranslationNew = <T extends I_TraKey>(dictionary: I_TranslationsDicNew<T>, key: T) => {
	if (!Object.hasOwn(dictionary, key)) {
		console.error(`Translation key not found, key: ${key}`);
		return "ERROR_MISSING_TRANSLATION_KEY";
	}

	return translate(dictionary[key]);
};

export const translate = (translation: I_Translation) => {
	let lang = getLang().key;

	if (!Object.hasOwn(translation, lang)) {
		console.error(`No translation found, lang: ${lang}`);
		return "ERROR_MISSING_TRANSLATION";
	}

	let value = translation[lang];

	if (value == "") {
		console.error(`Empty translation found, lang: ${lang}`);
		return "ERROR_EMPTY_TRANSLATION";
	}

	return value;
};

export const getTranslation = <T extends I_TraKey>(dictionary: I_TranslationsDic<T>, key: T) => {
	let lang = getLang().key;

	if (!Object.hasOwn(dictionary[lang], key)) {
		console.error(`No translation found, lang: ${lang}, key: ${key}`);
		return "ERROR_NO_TRANSLATION";
	}

	let value = dictionary[lang][key];

	if (value == "") {
		console.error(`Empty translation found, lang: ${lang}, key: ${key}`);
		return "ERROR_EMPTY_TRANSLATION";
	}

	return value;
};
