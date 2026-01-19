import type { I_TraKeyNavbar } from "$lib/components/ui-custom/navbar/Navbar.translations";

// dark / light mode
type I_SystemMode = "dark" | "light";
export type I_Mode = I_SystemMode | "system";

export const MODES: Record<I_Mode, I_Mode> = {
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
	mode: {
		currentMode: I_Mode;
		systemMode: I_SystemMode;
	};
	scroll: {
		currentSection: number;
		sectionButtons: I_SectionBtn[];
		scrollToIndex: (index: number) => void;
	};
};

const INITIAL_STATE: I_State = {
	lang: LANGUAGES["en"],
	mode: {
		currentMode: "system",
		systemMode: "dark",
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

// ------------- Mode -------------

export const getMode = () => {
	return globalState.mode.currentMode;
};

export const setMode = (mode: I_Mode) => {
	let enabled: boolean = mode == "dark" || (mode == "system" && globalState.mode.systemMode == "dark");
	globalState.mode.currentMode = mode;
	document.body.classList.toggle("dark", enabled);
};

export const getSystemMode = () => {
	return globalState.mode.systemMode;
};

export const setSystemMode = (mode: I_SystemMode) => {
	globalState.mode.systemMode = mode;
	setMode("system");
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
