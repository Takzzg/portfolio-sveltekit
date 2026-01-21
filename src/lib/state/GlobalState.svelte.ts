import type { E_TranslationKeyNavbar } from "$lib/components/ui-custom/navbar/Navbar.translations";

// dark / light theme
export type I_SystemTheme = "dark" | "light";
export type I_Theme = I_SystemTheme | "system";

export const THEMES: Record<I_Theme, I_Theme> = {
	dark: "dark",
	light: "light",
	system: "system",
};

// nav bar tabs
type I_SectionBtn = {
	translationKey: E_TranslationKeyNavbar;
	index: number;
};

type I_State = {
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

export let globalState = $state<I_State>(INITIAL_STATE);

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
