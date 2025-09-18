export type I_Technology = {
	id: string;
	icon: string;
	name: string;
	website: string;
	github: string;
}

enum E_Technologies {
	REACT = "react",
	SVELTE_KIT = "svelte-kit",
	TAILWINDCSS = "tailwindcss",
	SHADCN_SVELTE = "shadcn-svelte",
	TYPESCRIPT = "typescript",
	VITE = "vite",
	PRETTIER_PLUGIN_SVELTE = "prettier-plugin-svelte",
	ESLINT_PLUGIN_SVELTE = "eslint-plugin-svelte",
	VERCEL = "vercel",
}

const AllTechnologies: Record<keyof typeof E_Technologies, I_Technology> = {
	REACT: {
		id: E_Technologies.REACT,
		icon: "logos:react",
		name: "React",
		github: "facebook/react",
		website: "https://react.dev/",
	},
	SVELTE_KIT: {
		id: E_Technologies.SVELTE_KIT,
		icon: "logos:svelte-icon",
		name: "SvelteKit",
		github: "sveltejs/kit",
		website: "https://svelte.dev/",
	},
	TAILWINDCSS: {
		id: E_Technologies.TAILWINDCSS,
		icon: "logos:tailwindcss-icon",
		name: "TailwindCSS",
		github: "tailwindlabs/tailwindcss",
		website: "https://tailwindcss.com/",
	},
	SHADCN_SVELTE: {
		id: E_Technologies.SHADCN_SVELTE,
		icon: "vscode-icons:file-type-light-shadcn",
		name: "shadcn-svelte",
		github: "huntabyte/shadcn-svelte",
		website: "https://www.shadcn-svelte.com/",
	},
	TYPESCRIPT: {
		id: E_Technologies.TYPESCRIPT,
		icon: "logos:typescript-icon",
		name: "TypeScript",
		github: "microsoft/TypeScript",
		website: "https://www.typescriptlang.org/",
	},
	VITE: {
		id: E_Technologies.VITE,
		icon: "logos:vitejs",
		name: "Vite",
		github: "vitejs/vite",
		website: "https://vite.dev/",
	},
	PRETTIER_PLUGIN_SVELTE: {
		id: E_Technologies.PRETTIER_PLUGIN_SVELTE,
		icon: "vscode-icons:file-type-prettier",
		name: "prettier-plugin-svelte",
		github: "sveltejs/prettier-plugin-svelte",
		website: "",
	},
	ESLINT_PLUGIN_SVELTE: {
		id: E_Technologies.ESLINT_PLUGIN_SVELTE,
		icon: "logos:eslint",
		name: "eslint-plugin-svelte",
		github: "sveltejs/eslint-plugin-svelte",
		website: "https://sveltejs.github.io/eslint-plugin-svelte/",
	},
	VERCEL: {
		id: E_Technologies.VERCEL,
		icon: "devicon:vercel",
		name: "Vercel",
		github: "vercel/vercel",
		website: "https://vercel.com/",
	},
};

export type I_Category = {
	id: string;
	icon: string;
	title: string;
	techs: I_Technology[];
}

export enum E_Categories {
	FRONT_END = "front_end",
	STYLING = "styling",
	DEVELOPMENT = "development",
	BACK_END = "back_end",
	DATA_BASE = "data_base",
	HOSTING = "hosting",
}

export const TechCategories: Record<keyof typeof E_Categories, I_Category> = {
	FRONT_END: {
		id: E_Categories.FRONT_END,
		icon: "lucide:monitor",
		title: "Front End",
		techs: [AllTechnologies.REACT, AllTechnologies.SVELTE_KIT, AllTechnologies.TYPESCRIPT],
	},
	STYLING: {
		id: E_Categories.STYLING,
		icon: "lucide:paintbrush",
		title: "Styling",
		techs: [AllTechnologies.TAILWINDCSS, AllTechnologies.SHADCN_SVELTE],
	},
	DEVELOPMENT: {
		id: E_Categories.DEVELOPMENT,
		icon: "lucide:code-xml",
		title: "Development",
		techs: [AllTechnologies.VITE, AllTechnologies.PRETTIER_PLUGIN_SVELTE, AllTechnologies.ESLINT_PLUGIN_SVELTE],
	},
	BACK_END: {
		id: E_Categories.BACK_END,
		icon: "lucide:server",
		title: "Back End",
		techs: [],
	},
	DATA_BASE: {
		id: E_Categories.DATA_BASE,
		icon: "lucide:database",
		title: "Data Bases",
		techs: [],
	},
	HOSTING: {
		id: E_Categories.HOSTING,
		icon: "lucide:network",
		title: "Hosting",
		techs: [AllTechnologies.VERCEL],
	},
};

export const Portfolio: I_Technology[] = [
	AllTechnologies.SVELTE_KIT,
	AllTechnologies.TAILWINDCSS,
	AllTechnologies.SHADCN_SVELTE,
	AllTechnologies.TYPESCRIPT,
	AllTechnologies.VITE,
	AllTechnologies.PRETTIER_PLUGIN_SVELTE,
	AllTechnologies.ESLINT_PLUGIN_SVELTE,
	AllTechnologies.VERCEL,
];
