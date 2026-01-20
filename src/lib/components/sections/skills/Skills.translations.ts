import { getTranslation, type I_TranslationsDic } from "$lib/utils/translations";

export enum I_TraKeySkills {
	md_title = "md_title",
}

const SkillsDic: I_TranslationsDic<I_TraKeySkills> = {
	en: {
        md_title: "Main skills"
    },
	es: {
        md_title: "Habilidades principales"
    },
};

export const translateKey = (key: I_TraKeySkills) => {
	return getTranslation(SkillsDic, key);
};
