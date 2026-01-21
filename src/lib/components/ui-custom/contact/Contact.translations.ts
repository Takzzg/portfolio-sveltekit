import { getTranslation, type I_TranslationsDictionary } from "$lib/utils/translations";

export enum E_TranslationKeyContact {
	title = "title",
	action_github = "action_github",
}

const ContactDic: I_TranslationsDictionary<E_TranslationKeyContact> = {
	[E_TranslationKeyContact.title]: {
		en: "Get in contact!",
		es: "Contactáme!",
	},
	[E_TranslationKeyContact.action_github]: {
		en: "Check out my Github profile",
		es: "Visitá mi perfil de Github",
	},
};

export const findTranslation = (key: E_TranslationKeyContact) => {
	return getTranslation(ContactDic, key);
};
