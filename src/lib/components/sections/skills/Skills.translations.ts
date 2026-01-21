import { getTranslation, type I_TranslationsDictionary } from "$lib/utils/translations";

export enum E_TranslationKeySkills {
	md_title = "md_title",
}

const SkillsDic: I_TranslationsDictionary<E_TranslationKeySkills> = {
	[E_TranslationKeySkills.md_title]: {
		en: "Main skills",
		es: "Habilidades principales",
	},
};

export const findTranslation = (key: E_TranslationKeySkills) => {
	return getTranslation(SkillsDic, key);
};
