import { getLang } from "../components/state/GlobalState.svelte";
import en from "./en";
import es from "./es";

export type I_TranslationKey = "splash_center_text_1" | "splash_center_text_2" | "splash_center_text_3";

export const translate = (key: I_TranslationKey) => {
	let selected = getLang().key;
	if (selected == "en") return en[key];
	else if (selected == "es") return es[key];
};
