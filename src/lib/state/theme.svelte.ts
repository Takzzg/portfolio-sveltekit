// dark / light theme
export type I_SystemTheme = "dark" | "light";
export type I_Theme = I_SystemTheme | "system";

export const THEMES: Record<I_Theme, I_Theme> = {
	dark: "dark",
	light: "light",
	system: "system",
};

type I_StateTheme = {
	currentTheme: I_Theme;
	systemTheme: I_SystemTheme;
};

const INITIAL_STATE: I_StateTheme = {
	currentTheme: "system",
	systemTheme: "dark",
};

let themeState = $state<I_StateTheme>(INITIAL_STATE);

export const getTheme = () => {
	return themeState.currentTheme;
};

export const setTheme = (theme: I_Theme) => {
	let enabled: boolean = theme == "dark" || (theme == "system" && themeState.systemTheme == "dark");
	themeState.currentTheme = theme;
	document.body.classList.toggle("dark", enabled);
};

export const getSystemTheme = () => {
	return themeState.systemTheme;
};

export const setSystemTheme = (theme: I_SystemTheme) => {
	themeState.systemTheme = theme;
	setTheme("system");
};
