export interface I_Technology {
	id: string;
	icon: string;
	name: string;
	website: string;
	github: string;
}

enum E_Technologies {
	SVELTE_KIT = "svelte-kit",
	TAILWINDCSS = "tailwindcss",
	SHADCN_SVELTE = "shadcn-svelte",
	TYPESCRIPT = "typescript",
	VITE = "vite",
	PRETTIER_PLUGIN_SVELTE = "prettier-plugin-svelte",
	ESLINT_PLUGIN_SVELTE = "eslint-plugin-svelte",
	VERCEL = "vercel",
}

const AllTechnologies: { [key in E_Technologies]: I_Technology } = {
	[E_Technologies.SVELTE_KIT]: {
		id: E_Technologies.SVELTE_KIT,
		icon: "logos:svelte-icon",
		name: "SvelteKit",
		github: "sveltejs/kit",
		website: "https://svelte.dev/",
	},
	[E_Technologies.TAILWINDCSS]: {
		id: E_Technologies.TAILWINDCSS,
		icon: "logos:tailwindcss-icon",
		name: "TailwindCSS",
		github: "tailwindlabs/tailwindcss",
		website: "https://tailwindcss.com/",
	},
	[E_Technologies.SHADCN_SVELTE]: {
		id: E_Technologies.SHADCN_SVELTE,
		icon: "vscode-icons:file-type-light-shadcn",
		name: "shadcn-svelte",
		github: "huntabyte/shadcn-svelte",
		website: "https://www.shadcn-svelte.com/",
	},
	[E_Technologies.TYPESCRIPT]: {
		id: E_Technologies.TYPESCRIPT,
		icon: "logos:typescript-icon",
		name: "TypeScript",
		github: "microsoft/TypeScript",
		website: "https://www.typescriptlang.org/",
	},
	[E_Technologies.VITE]: {
		id: E_Technologies.VITE,
		icon: "logos:vitejs",
		name: "Vite",
		github: "vitejs/vite",
		website: "https://vite.dev/",
	},
	[E_Technologies.PRETTIER_PLUGIN_SVELTE]: {
		id: E_Technologies.PRETTIER_PLUGIN_SVELTE,
		icon: "vscode-icons:file-type-prettier",
		name: "prettier-plugin-svelte",
		github: "sveltejs/prettier-plugin-svelte",
		website: "",
	},
	[E_Technologies.ESLINT_PLUGIN_SVELTE]: {
		id: E_Technologies.ESLINT_PLUGIN_SVELTE,
		icon: "logos:eslint",
		name: "eslint-plugin-svelte",
		github: "sveltejs/eslint-plugin-svelte",
		website: "https://sveltejs.github.io/eslint-plugin-svelte/",
	},
	[E_Technologies.VERCEL]: {
		id: E_Technologies.VERCEL,
		icon: "devicon:vercel",
		name: "Vercel",
		github: "vercel/vercel",
		website: "https://vercel.com/",
	},
};

export const Experience: I_Technology[] = Object.values(AllTechnologies);

export const Portfolio: I_Technology[] = [
	AllTechnologies[E_Technologies.SVELTE_KIT],
	AllTechnologies[E_Technologies.TAILWINDCSS],
	AllTechnologies[E_Technologies.SHADCN_SVELTE],
	AllTechnologies[E_Technologies.TYPESCRIPT],
	AllTechnologies[E_Technologies.VITE],
	AllTechnologies[E_Technologies.PRETTIER_PLUGIN_SVELTE],
	AllTechnologies[E_Technologies.ESLINT_PLUGIN_SVELTE],
	AllTechnologies[E_Technologies.VERCEL],
];
