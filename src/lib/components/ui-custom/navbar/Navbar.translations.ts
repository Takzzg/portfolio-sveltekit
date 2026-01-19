import { getTranslation, type I_TranslationsDic } from "$lib/utils/translations";

export enum I_TraKeyNavbar {
	home = "home",
	skills = "skills",
	about_me = "about_me",
	portfolio = "portfolio",
	projects = "projects",
}

const NavbarDic: I_TranslationsDic<I_TraKeyNavbar> = {
	en: {
		home: "Home",
		skills: "Skills",
		about_me: "About Me",
		portfolio: "Portfolio",
		projects: "Projects",
	},
	es: {
		home: "Inicio",
		skills: "Habilidades",
		about_me: "Sobre mi",
		portfolio: "Portfolio",
		projects: "Proyectos",
	},
};

export const translateKey = (key: I_TraKeyNavbar) => {
	return getTranslation(NavbarDic, key);
};
