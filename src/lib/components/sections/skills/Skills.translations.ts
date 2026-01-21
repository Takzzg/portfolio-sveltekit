import { getTranslation, type I_TranslationsDictionary } from "$lib/utils/translations";

export enum I_TranslationKeySkills {
	md_title = "md_title",
}

const SkillsDic: I_TranslationsDictionary<I_TranslationKeySkills> = {
	[I_TranslationKeySkills.md_title]: {
		en: "Main skills",
		es: "Habilidades principales",
	},
};

export const findTranslation = (key: I_TranslationKeySkills) => {
	return getTranslation(SkillsDic, key);
};
