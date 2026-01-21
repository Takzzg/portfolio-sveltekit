import { getTranslation, type I_TranslationsDic } from "$lib/utils/translations";

export enum I_TraKeyPortfolio {
	list_header = "list_header",
}

const PortfolioDic: I_TranslationsDic<I_TraKeyPortfolio> = {
	en: {
		list_header: "This portfolio was made using",
	},
	es: {
		list_header: "Este portfolio fue creado usando",
	},
};

export const translateKey = (key: I_TraKeyPortfolio) => {
	return getTranslation(PortfolioDic, key);
};
