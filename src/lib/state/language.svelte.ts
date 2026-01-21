export type I_LangKey = "en" | "es";

export type I_Lang = {
	key: I_LangKey;
	name: string;
	flag: string;
};

export const LANGUAGES: Record<I_LangKey, I_Lang> = {
	en: {
		key: "en",
		name: "English",
		flag: "flag:gb-1x1",
	},
	es: {
		key: "es",
		name: "Español",
		flag: "flag:ar-1x1",
	},
};

const INITIAL_STATE: I_Lang = LANGUAGES.en;
let currentLang = $state<I_Lang>(INITIAL_STATE);

export const getLang = () => {
	return currentLang;
};

export const setLang = (lang: I_LangKey) => {
	currentLang = LANGUAGES[lang];
};
