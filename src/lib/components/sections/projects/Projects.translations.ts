import { getTranslation, type I_TranslationsDictionary } from "$lib/utils/translations";

export enum E_TranslationKeyProjects {
	title = "title",
}

const ProjectsDic: I_TranslationsDictionary<E_TranslationKeyProjects> = {
	[E_TranslationKeyProjects.title]: {
		en: "Check out my Github profile",
		es: "Visitá mi perfil de Github",
	},
};

export const findTranslation = (key: E_TranslationKeyProjects) => {
	return getTranslation(ProjectsDic, key);
};
