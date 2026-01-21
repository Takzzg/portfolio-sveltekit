import { getTranslation, type I_TranslationsDictionary } from "$lib/utils/translations";

export enum I_TranslationKeyPortfolio {
	list_header = "list_header",
	md_header = "md_header",
}

const PortfolioDic: I_TranslationsDictionary<I_TranslationKeyPortfolio> = {
	[I_TranslationKeyPortfolio.list_header]: {
		en: "This portfolio was made using",
		es: "Este portfolio fue creado usando",
	},
	[I_TranslationKeyPortfolio.md_header]: {
		en: "About this portfolio",
		es: "Sobre este portfolio",
	},
};

export const findTranslation = (key: I_TranslationKeyPortfolio) => {
	return getTranslation(PortfolioDic, key);
};
