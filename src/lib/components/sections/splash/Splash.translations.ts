import { getTranslationNew, type I_TranslationsDicNew } from "$lib/utils/translations";

export enum I_TraKeySplash {
	center_text_1 = "center_text_1",
	center_text_2 = "center_text_2",
	center_text_3 = "center_text_3",
}

const SplashDic: I_TranslationsDicNew<I_TraKeySplash> = {
	[I_TraKeySplash.center_text_1]: {
		en: "Welcome!",
		es: "Bienvenido!",
	},
	[I_TraKeySplash.center_text_2]: {
		en: "I'm Guido",
		es: "Soy Guido",
	},
	[I_TraKeySplash.center_text_3]: {
		en: "fullstack developer",
		es: "desarrollador fullstack",
	},
};

export const findTranslation = (key: I_TraKeySplash) => {
	return getTranslationNew(SplashDic, key);
};
