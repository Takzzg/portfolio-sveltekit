import { getLang } from "$lib/state/language.svelte";

export type I_Translation = {
	en: string;
	es: string;
};

export type I_TranslationsDictionary<K extends string> = Record<K, I_Translation>;

export const getTranslation = <K extends string>(dictionary: I_TranslationsDictionary<K>, key: K) => {
	if (!Object.hasOwn(dictionary, key)) {
		console.error(`Translation key not found, key: ${key}`);
		return "ERROR_MISSING_TRANSLATION_KEY";
	}

	return translate(dictionary[key], key);
};

export const translate = (translation: I_Translation, key?: string) => {
	let value = translation[getLang().key];

	if (value == "") {
		console.error(`Empty translation found, lang: ${getLang().key}, key: ${key ?? "inlined_translation"}`);
		return "ERROR_EMPTY_TRANSLATION";
	}

	return value;
};
