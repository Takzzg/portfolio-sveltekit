import { getTranslation, type I_TranslationsDic } from "$lib/utils/translations";

export enum I_TraKeyPortfolio {
	list_header = "list_header",
	md_header = "md_header",
}

const PortfolioDic: I_TranslationsDic<I_TraKeyPortfolio> = {
	en: {
        [I_TraKeyPortfolio.list_header]: "This portfolio was made using",
        [I_TraKeyPortfolio.md_header]: "About this portfolio"
    },
	es: {
        [I_TraKeyPortfolio.list_header]: "Este portfolio fue creado usando",
        [I_TraKeyPortfolio.md_header]: "Sobre este portfolio"
    },
};

export const findTranslation = (key: I_TraKeyPortfolio) => {
	return getTranslation(PortfolioDic, key);
};
