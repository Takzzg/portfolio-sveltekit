import { getTranslation, type I_TranslationsDictionary } from "$lib/utils/translations";

export enum E_TranslationKeyAboutMe {
	title = "title",
	blob = "blob",
}

const AboutMeDic: I_TranslationsDictionary<E_TranslationKeyAboutMe> = {
	[E_TranslationKeyAboutMe.title]: {
		en: "About me",
		es: "Sobre mí",
	},
	[E_TranslationKeyAboutMe.blob]: {
		en: "I'm Guido, Full Stack Developer with years of experience creating web applications. I specialize in the React/JS environment, and am passionate about clean code, intuitive UI/UX, and efficient development.",
		es: "Soy Guido, desarrollador fullstack con años de experiencia. Me especializo en el ambiente React/JS, y me apasionan el codigo limpio, UI/UX intuitivas, y el desarrollo eficiente.",
	},
};

export const findTranslation = (key: E_TranslationKeyAboutMe) => {
	return getTranslation(AboutMeDic, key);
};
