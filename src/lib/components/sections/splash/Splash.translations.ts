import { getTranslation, type I_TranslationsDictionary } from "$lib/utils/translations";

export enum E_TranslationKeySplash {
	center_text_1 = "center_text_1",
	center_text_2 = "center_text_2",
	center_text_3 = "center_text_3",
}

const SplashDic: I_TranslationsDictionary<E_TranslationKeySplash> = {
	[E_TranslationKeySplash.center_text_1]: {
		en: "Welcome!",
		es: "Bienvenido!",
	},
	[E_TranslationKeySplash.center_text_2]: {
		en: "I'm Guido",
		es: "Soy Guido",
	},
	[E_TranslationKeySplash.center_text_3]: {
		en: "fullstack developer",
		es: "desarrollador fullstack",
	},
};

export const findTranslation = (key: E_TranslationKeySplash) => {
	return getTranslation(SplashDic, key);
};
