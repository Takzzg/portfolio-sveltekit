// dark / light mode
type I_SystemMode = "dark" | "light";
type I_Mode = I_SystemMode | "system";

// language
export type I_LangKey = "en" | "es";
export type I_Lang = {
    key: I_LangKey,
    name: string,
    flag: string
}

export const LANGUAGES: Record<I_LangKey, I_Lang> = {
    en: {
        key: "en",
        name: "English",
        flag: 'flag:gb-1x1'
    },
    es: {
        key: "es",
        name: "Español",
        flag: 'flag:ar-1x1'
    },
}

// nav bar tabs
type I_SectionBtn = {
	text: string;
	index: number;
};

type I_State = {
	test: string;
	lang: I_Lang;
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
	lang: LANGUAGES["en"],
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
