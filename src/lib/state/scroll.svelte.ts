import type { E_TranslationKeyNavbar } from "$lib/components/ui-custom/navbar/Navbar.translations";

type I_SectionBtn = {
	translationKey: E_TranslationKeyNavbar;
	index: number;
};

type I_StateScroll = {
	currentSection: number;
	sectionButtons: I_SectionBtn[];
	scrollToIndex: (index: number) => void;
};

const INITIAL_STATE: I_StateScroll = {
	currentSection: 0,
	sectionButtons: [],
	scrollToIndex: (index) => {
		throw new Error("function scrollToIndex not implemented");
	},
};

let scrollState = $state<I_StateScroll>(INITIAL_STATE);

export const getScrollCurrent = () => {
	return scrollState.currentSection;
};

export const setScrollCurrent = (index: number) => {
	scrollState.currentSection = index;
};

export const getScrollButtons = () => {
	return scrollState.sectionButtons;
};

export const setScrollButtons = (buttons: I_SectionBtn[]) => {
	scrollState.sectionButtons = buttons;
};

export const setScrollFn = (fn: (index: number) => void) => {
	scrollState.scrollToIndex = fn;
};

export const scrollToIndex = (index: number) => {
	scrollState.scrollToIndex(index);
};
