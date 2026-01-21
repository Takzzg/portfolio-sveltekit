import { getTranslation, type I_TranslationsDic } from "$lib/utils/translations";

export enum I_TraKeyAboutMe {
	title = "title",
	blob = "blob",
}

const AboutMeDic: I_TranslationsDic<I_TraKeyAboutMe> = {
	en: {
		[I_TraKeyAboutMe.title]: "About me",
		[I_TraKeyAboutMe.blob]:
			"I'm Guido, Full Stack Developer with years of experience creating web applications. I specialize in the React/JS environment, and am passionate about clean code, intuitive UI/UX, and efficient development.",
	},
	es: {
        [I_TraKeyAboutMe.title]: "Sobre mí",
		[I_TraKeyAboutMe.blob]: "Soy Guido, desarrollador fullstack con años de experiencia. Me especializo en el ambiente React/JS, y me apasionan el codigo limpio, UI/UX intuitivas, y el desarrollo eficiente.",
	},
};

export const translateKey = (key: I_TraKeyAboutMe) => {
	return getTranslation(AboutMeDic, key);
};
