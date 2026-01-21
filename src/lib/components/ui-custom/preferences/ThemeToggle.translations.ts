import { getTranslation, type I_TranslationsDic } from "$lib/utils/translations";

export const enum I_traKeyThemeToggle {
	dark = "dark",
	light = "light",
	system = "system",
	dark_theme = "dark_theme",
	light_theme = "light_theme",
	system_theme = "system_theme",
}

const ThemeToggleDic: I_TranslationsDic<I_traKeyThemeToggle> = {
	en: {
		dark: "Dark",
		light: "Light",
		system: "System",
		dark_theme: "Dark theme",
		light_theme: "Light theme",
		system_theme: "System theme",
	},
	es: {
		dark: "Oscuro",
		light: "Claro",
		system: "Sistema",
		dark_theme: "Tema oscuro",
		light_theme: "Tema claro",
		system_theme: "Tema del sistema",
	},
};

export const findTranslation = (key: I_traKeyThemeToggle) => {
	return getTranslation(ThemeToggleDic, key);
};
