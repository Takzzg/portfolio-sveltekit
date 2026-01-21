import { getTranslation, type I_TranslationsDictionary } from "$lib/utils/translations";

export enum E_TranslationKeyNavbar {
	home = "home",
	skills = "skills",
	about_me = "about_me",
	portfolio = "portfolio",
	projects = "projects",
}

const NavbarDic: I_TranslationsDictionary<E_TranslationKeyNavbar> = {
	[E_TranslationKeyNavbar.home]: {
		en: "Home",
		es: "Inicio",
	},
	[E_TranslationKeyNavbar.skills]: {
		en: "Skills",
		es: "Habilidades",
	},
	[E_TranslationKeyNavbar.about_me]: {
		en: "About Me",
		es: "Sobre mi",
	},
	[E_TranslationKeyNavbar.portfolio]: {
		en: "Portfolio",
		es: "Portfolio",
	},
	[E_TranslationKeyNavbar.projects]: {
		en: "Projects",
		es: "Proyectos",
	},
};

export const findTranslation = (key: E_TranslationKeyNavbar) => {
	return getTranslation(NavbarDic, key);
};
