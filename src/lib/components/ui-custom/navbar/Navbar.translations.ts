import { getTranslation, type I_TranslationsDictionary } from "$lib/utils/translations";

export enum I_TranslationKeyNavbar {
	home = "home",
	skills = "skills",
	about_me = "about_me",
	portfolio = "portfolio",
	projects = "projects",
}

const NavbarDic: I_TranslationsDictionary<I_TranslationKeyNavbar> = {
	[I_TranslationKeyNavbar.home]: {
		en: "Home",
		es: "Inicio",
	},
	[I_TranslationKeyNavbar.skills]: {
		en: "Skills",
		es: "Habilidades",
	},
	[I_TranslationKeyNavbar.about_me]: {
		en: "About Me",
		es: "Sobre mi",
	},
	[I_TranslationKeyNavbar.portfolio]: {
		en: "Portfolio",
		es: "Portfolio",
	},
	[I_TranslationKeyNavbar.projects]: {
		en: "Projects",
		es: "Proyectos",
	},
};

export const findTranslation = (key: I_TranslationKeyNavbar) => {
	return getTranslation(NavbarDic, key);
};
