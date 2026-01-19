import { getTranslation, type I_TranslationsDic } from "$lib/utils/translations";

export enum I_TraKeySplash {
	center_text_1 = "center_text_1",
	center_text_2 = "center_text_2",
	center_text_3 = "center_text_3",
}

const SplashDic: I_TranslationsDic<I_TraKeySplash> = {
	en: {
		[I_TraKeySplash.center_text_1]: "Welcome!",
		[I_TraKeySplash.center_text_2]: "I'm Guido",
		[I_TraKeySplash.center_text_3]: "fullstack developer",
	},
	es: {
		[I_TraKeySplash.center_text_1]: "Bienvenido!",
		[I_TraKeySplash.center_text_2]: "Soy Guido",
		[I_TraKeySplash.center_text_3]: "desarrollador fullstack",
	},
};

export const translateKey = (key: I_TraKeySplash) => {
	return getTranslation(SplashDic, key);
};
