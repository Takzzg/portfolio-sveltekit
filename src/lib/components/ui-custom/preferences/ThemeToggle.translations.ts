import { getTranslation, type I_TranslationsDictionary } from "$lib/utils/translations";

export const enum E_TranslationKeyThemeToggle {
	dark = "dark",
	light = "light",
	system = "system",
	dark_theme = "dark_theme",
	light_theme = "light_theme",
	system_theme = "system_theme",
}

const ThemeToggleDic: I_TranslationsDictionary<E_TranslationKeyThemeToggle> = {
	[E_TranslationKeyThemeToggle.dark]: {
		en: "Dark",
		es: "Oscuro",
	},
	[E_TranslationKeyThemeToggle.light]: {
		en: "Light",
		es: "Claro",
	},
	[E_TranslationKeyThemeToggle.system]: {
		en: "System",
		es: "Sistema",
	},
	[E_TranslationKeyThemeToggle.dark_theme]: {
		en: "Dark theme",
		es: "Tema oscuro",
	},
	[E_TranslationKeyThemeToggle.light_theme]: {
		en: "Light theme",
		es: "Tema claro",
	},
	[E_TranslationKeyThemeToggle.system_theme]: {
		en: "System theme",
		es: "Tema del sistema",
	},
};

export const findTranslation = (key: E_TranslationKeyThemeToggle) => {
	return getTranslation(ThemeToggleDic, key);
};
