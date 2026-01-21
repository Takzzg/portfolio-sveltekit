import type { E_TranslationKeyNavbar } from "$lib/components/ui-custom/navbar/Navbar.translations";

// nav bar tabs
type I_SectionBtn = {
	translationKey: E_TranslationKeyNavbar;
	index: number;
};

type I_State = {
	scroll: {
		currentSection: number;
		sectionButtons: I_SectionBtn[];
		scrollToIndex: (index: number) => void;
	};
};

const INITIAL_STATE: I_State = {
	scroll: {
		currentSection: 0,
		sectionButtons: [],
		scrollToIndex: (index) => {
			throw new Error("function scrollToIndex not implemented");
		},
	},
};

export let globalState = $state<I_State>(INITIAL_STATE);

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
