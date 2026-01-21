import { getTranslation, type I_TranslationsDictionary } from "$lib/utils/translations";

export enum E_TranslationKeyMarkdownBody {
	loading = "loading",
	promtp_title = "promtp_title",
	prompt_click = "prompt_click",
}

const MarkdownBodyDic: I_TranslationsDictionary<E_TranslationKeyMarkdownBody> = {
	[E_TranslationKeyMarkdownBody.loading]: {
		en: "Loading",
		es: "Cargando",
	},
	[E_TranslationKeyMarkdownBody.promtp_title]: {
		en: "Learn more",
		es: "Conoce más",
	},
	[E_TranslationKeyMarkdownBody.prompt_click]: {
		en: "Click on a logo to take a peek at it's",
		es: "Hacé click en un logo para ver su",
	},
};

export const findTranslation = (key: E_TranslationKeyMarkdownBody) => {
	return getTranslation(MarkdownBodyDic, key);
};
