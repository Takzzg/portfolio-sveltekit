import { getTranslation, type I_TranslationsDictionary } from "$lib/utils/translations";

export enum E_TranslationKeyPortfolio {
	list_header = "list_header",
	md_header = "md_header",
}

const PortfolioDic: I_TranslationsDictionary<E_TranslationKeyPortfolio> = {
	[E_TranslationKeyPortfolio.list_header]: {
		en: "This portfolio was made using",
		es: "Este portfolio fue creado usando",
	},
	[E_TranslationKeyPortfolio.md_header]: {
		en: "About this portfolio",
		es: "Sobre este portfolio",
	},
};

export const findTranslation = (key: E_TranslationKeyPortfolio) => {
	return getTranslation(PortfolioDic, key);
};
