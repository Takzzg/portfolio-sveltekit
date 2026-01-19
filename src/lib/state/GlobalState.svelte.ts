import type { I_TraKeyNavbar } from "$lib/components/ui-custom/navbar/Navbar.translations";

// dark / light theme
type I_SystemTheme = "dark" | "light";
export type I_Theme = I_SystemTheme | "system";

export const THEMES: Record<I_Theme, I_Theme> = {
	dark: "dark",
	light: "light",
	system: "system",
};

// language
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

// nav bar tabs
type I_SectionBtn = {
	translationKey: I_TraKeyNavbar;
	index: number;
};

type I_State = {
	lang: I_Lang;
	theme: {
		currentTheme: I_Theme;
		systemTheme: I_SystemTheme;
	};
	scroll: {
		currentSection: number;
		sectionButtons: I_SectionBtn[];
		scrollToIndex: (index: number) => void;
	};
};

const INITIAL_STATE: I_State = {
	lang: LANGUAGES["en"],
	theme: {
		currentTheme: "system",
		systemTheme: "dark",
	},
	scroll: {
		currentSection: 0,
		sectionButtons: [],
		scrollToIndex: (index) => {
			throw new Error("function scrollToIndex not implemented");
		},
	},
};

let globalState = $state<I_State>(INITIAL_STATE);

// ------------- Language -------------

export const getLang = () => {
	return globalState.lang;
};

export const setLang = (lang: I_LangKey) => {
	globalState.lang = LANGUAGES[lang];
};

// ------------- Theme -------------

export const getTheme = () => {
	return globalState.theme.currentTheme;
};

export const setTheme = (theme: I_Theme) => {
	let enabled: boolean = theme == "dark" || (theme == "system" && globalState.theme.systemTheme == "dark");
	globalState.theme.currentTheme = theme;
	document.body.classList.toggle("dark", enabled);
};

export const getSystemTheme = () => {
	return globalState.theme.systemTheme;
};

export const setSystemTheme = (theme: I_SystemTheme) => {
	globalState.theme.systemTheme = theme;
	setTheme("system");
};

// ------------- Scroll -------------

export const getScrollCurrent = () => {
	return globalState.scroll.currentSection;
};

export const setScrollCurrent = (index: number) => {
	globalState.scroll.currentSection = index;
};

export const getScrollButtons = () => {
	return globalState.scroll.sectionButtons;
};

export const setScrollButtons = (buttons: I_SectionBtn[]) => {
	globalState.scroll.sectionButtons = buttons;
};

export const setScrollFn = (fn: (index: number) => void) => {
	globalState.scroll.scrollToIndex = fn;
};

export const scrollToIndex = (index: number) => {
	globalState.scroll.scrollToIndex(index);
};
