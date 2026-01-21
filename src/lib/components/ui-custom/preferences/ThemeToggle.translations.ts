import { getTranslation, type I_TranslationsDictionary } from "$lib/utils/translations";

export const enum I_traKeyThemeToggle {
	dark = "dark",
	light = "light",
	system = "system",
	dark_theme = "dark_theme",
	light_theme = "light_theme",
	system_theme = "system_theme",
}

const ThemeToggleDic: I_TranslationsDictionary<I_traKeyThemeToggle> = {
	[I_traKeyThemeToggle.dark]: {
		en: "Dark",
		es: "Oscuro",
	},
	[I_traKeyThemeToggle.light]: {
		en: "Light",
		es: "Claro",
	},
	[I_traKeyThemeToggle.system]: {
		en: "System",
		es: "Sistema",
	},
	[I_traKeyThemeToggle.dark_theme]: {
		en: "Dark theme",
		es: "Tema oscuro",
	},
	[I_traKeyThemeToggle.light_theme]: {
		en: "Light theme",
		es: "Tema claro",
	},
	[I_traKeyThemeToggle.system_theme]: {
		en: "System theme",
		es: "Tema del sistema",
	},
};

export const findTranslation = (key: I_traKeyThemeToggle) => {
	return getTranslation(ThemeToggleDic, key);
};
