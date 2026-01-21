import { getTranslation, type I_TranslationsDictionary } from "$lib/utils/translations";

export enum I_TranslationKeyProjects {
	title = "title",
}

const ProjectsDic: I_TranslationsDictionary<I_TranslationKeyProjects> = {
	[I_TranslationKeyProjects.title]: {
		en: "Check out my Github profile",
		es: "Visitá mi perfil de Github",
	},
};

export const findTranslation = (key: I_TranslationKeyProjects) => {
	return getTranslation(ProjectsDic, key);
};
