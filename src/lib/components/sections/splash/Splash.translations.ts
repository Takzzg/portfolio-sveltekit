import { getTranslation, type I_TranslationsDictionary } from "$lib/utils/translations";

export enum E_TranslationKeySplash {
	center_text_1 = "center_text_1",
	center_text_2 = "center_text_2",
	center_text_3 = "center_text_3",
	prefs_language = "prefs_language",
	prefs_theme = "prefs_theme",
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
    [E_TranslationKeySplash.prefs_language]: {
        en: "Language",
        es: "Lenguage"
    },
    [E_TranslationKeySplash.prefs_theme]: {
        en: "Theme",
        es: "Tema"
    },
};

export const findTranslation = (key: E_TranslationKeySplash) => {
	return getTranslation(SplashDic, key);
};
