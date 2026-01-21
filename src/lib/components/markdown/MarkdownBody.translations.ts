import { getTranslation, type I_TranslationsDictionary } from "$lib/utils/translations";

export enum I_TranslationKeyMarkdownBody {
	loading = "loading",
	promtp_title = "promtp_title",
	prompt_click = "prompt_click",
}

const MarkdownBodyDic: I_TranslationsDictionary<I_TranslationKeyMarkdownBody> = {
	[I_TranslationKeyMarkdownBody.loading]: {
		en: "Loading",
		es: "Cargando",
	},
	[I_TranslationKeyMarkdownBody.promtp_title]: {
		en: "Learn more",
		es: "Conoce más",
	},
	[I_TranslationKeyMarkdownBody.prompt_click]: {
		en: "Click on a logo to take a peek at it's",
		es: "Hacé click en un logo para ver su",
	},
};

export const findTranslation = (key: I_TranslationKeyMarkdownBody) => {
	return getTranslation(MarkdownBodyDic, key);
};
