import { getLang } from "$lib/state/GlobalState.svelte";

export type I_TranslationKey = string;

export type I_Translation = {
	en: string;
	es: string;
};

export type I_TranslationsDictionary<K extends I_TranslationKey> = Record<K, I_Translation>;

export const getTranslation = <T extends I_TranslationKey>(dictionary: I_TranslationsDictionary<T>, key: T) => {
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
