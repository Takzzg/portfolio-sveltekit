import { getTranslation, type I_TranslationsDic } from "$lib/utils/translations";

export enum I_TraKeySplash {
	list_header = "list_header",
}

const SplashDic: I_TranslationsDic<I_TraKeySplash> = {
	en: {
		list_header: "This portfolio was made using",
	},
	es: {
		list_header: "Este portfolio fue creado usando",
	},
};

export const translateKey = (key: I_TraKeySplash) => {
	return getTranslation(SplashDic, key);
};
