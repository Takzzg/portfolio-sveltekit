import { getTranslation, type I_TranslationsDic } from "$lib/utils/translations";

export enum I_TraKeyContact {
	title = "title",
	action_github = "action_github",
}

const ContactDic: I_TranslationsDic<I_TraKeyContact> = {
	en: {
		title: "Get in contact!",
		action_github: "Check out my Github profile",
	},
	es: {
		title: "Contactáme!",
		action_github: "Visitá mi perfil de Github",
	},
};

export const translateKey = (key: I_TraKeyContact) => {
	return getTranslation(ContactDic, key);
};
