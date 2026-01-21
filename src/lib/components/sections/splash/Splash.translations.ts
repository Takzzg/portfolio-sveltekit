import { getTranslation, type I_TranslationsDictionary } from "$lib/utils/translations";

export enum I_TranslationKeySplash {
	center_text_1 = "center_text_1",
	center_text_2 = "center_text_2",
	center_text_3 = "center_text_3",
}

const SplashDic: I_TranslationsDictionary<I_TranslationKeySplash> = {
	[I_TranslationKeySplash.center_text_1]: {
		en: "Welcome!",
		es: "Bienvenido!",
	},
	[I_TranslationKeySplash.center_text_2]: {
		en: "I'm Guido",
		es: "Soy Guido",
	},
	[I_TranslationKeySplash.center_text_3]: {
		en: "fullstack developer",
		es: "desarrollador fullstack",
	},
};

export const findTranslation = (key: I_TranslationKeySplash) => {
	return getTranslation(SplashDic, key);
};
