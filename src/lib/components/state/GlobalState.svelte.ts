import { type Locale } from "$lib/paraglide/runtime";

type I_SystemMode = "dark" | "light";
type I_Mode = I_SystemMode | "system";

type I_SectionBtn = {
	text: string;
	index: number;
};

type I_State = {
	test: string;
	lang: Locale;
	mode: {
		currentMode: I_Mode;
		systemMode: I_SystemMode;
	};
	scroll: {
		currentSection: number;
		sectionButtons: I_SectionBtn[];
	};
};

const INITIAL_STATE: I_State = {
	test: "Test Message",
	lang: "en",
	mode: {
		currentMode: "system",
		systemMode: "dark",
	},
	scroll: { currentSection: 0, sectionButtons: [] },
};

let globalState = $state<I_State>(INITIAL_STATE);

// ------------- Test -------------

export const getTest = () => {
	return globalState.test;
};

export const setTest = () => {
	globalState.test = globalState.test == "Test Message" ? "Another Test" : "Test Message";
};

// ------------- Language -------------

export const getLang = () => {
	return globalState.lang;
};

export const setLang = (lang: Locale) => {
	globalState.lang = lang;
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

export const updateSystemMode = (mode: I_SystemMode) => {
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
