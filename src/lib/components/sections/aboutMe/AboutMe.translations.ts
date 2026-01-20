import { getTranslation, type I_TranslationsDic } from "$lib/utils/translations";

export enum I_TraKeyAboutMe {
	title = "title",
	blob = "blob",
}

const AboutMeDic: I_TranslationsDic<I_TraKeyAboutMe> = {
	en: {
		[I_TraKeyAboutMe.title]: "About me",
		[I_TraKeyAboutMe.blob]:
			"I'm Guido, a Full Stack Developer with years of experience creating web applications. I specialize in the React/JS environment, and am passionate about clean code, intuitive UI/UX, and efficient development workflows.",
	},
	es: {
        [I_TraKeyAboutMe.title]: "Sobre mí",
        // !TODO
		[I_TraKeyAboutMe.blob]: "",
	},
};

export const translateKey = (key: I_TraKeyAboutMe) => {
	return getTranslation(AboutMeDic, key);
};
