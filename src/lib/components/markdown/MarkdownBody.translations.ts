import { getTranslation, type I_TranslationsDic } from "$lib/utils/translations";

export enum I_TraKeyMarkdownBody {
	loading = "loading",
	promtp_title = "promtp_title",
	prompt_click = "prompt_click",
}

const MarkdownBodyDic: I_TranslationsDic<I_TraKeyMarkdownBody> = {
	en: {
        [I_TraKeyMarkdownBody.loading]: "Loading",
        [I_TraKeyMarkdownBody.promtp_title]: "Learn more",
        [I_TraKeyMarkdownBody.prompt_click]: "Click on a logo to take a peek at it's",
    },
	es: {
        [I_TraKeyMarkdownBody.loading]: "Cargando",
        [I_TraKeyMarkdownBody.promtp_title]: "Conoce más",
        [I_TraKeyMarkdownBody.prompt_click]: "Hacé click en un logo para ver su",
    },
};

export const findTranslation = (key: I_TraKeyMarkdownBody) => {
	return getTranslation(MarkdownBodyDic, key);
};
