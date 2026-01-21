import { getTranslation, type I_TranslationsDictionary } from "$lib/utils/translations";

export enum I_TranslationKeyContact {
	title = "title",
	action_github = "action_github",
}

const ContactDic: I_TranslationsDictionary<I_TranslationKeyContact> = {
	[I_TranslationKeyContact.title]: {
		en: "Get in contact!",
		es: "Contactáme!",
	},
	[I_TranslationKeyContact.action_github]: {
		en: "Check out my Github profile",
		es: "Visitá mi perfil de Github",
	},
};

export const findTranslation = (key: I_TranslationKeyContact) => {
	return getTranslation(ContactDic, key);
};
