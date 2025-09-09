export interface I_Technology {
	id: string;
	icon: string;
	name: string;
	websiteURL: string;
	githubURL: string;
	readmeURL: string;
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
		websiteURL: "https://svelte.dev/",
		githubURL: "https://github.com/sveltejs/kit#readme",
		readmeURL: "https://raw.githubusercontent.com/sveltejs/kit/refs/heads/main/README.md",
	},
	[E_Technologies.TAILWINDCSS]: {
		id: E_Technologies.TAILWINDCSS,
		icon: "logos:tailwindcss-icon",
		name: "TailwindCSS",
		websiteURL: "https://tailwindcss.com/",
		githubURL: "https://github.com/tailwindlabs/tailwindcss#readme",
		readmeURL: "https://raw.githubusercontent.com/tailwindlabs/tailwindcss/refs/heads/main/README.md",
	},
	[E_Technologies.SHADCN_SVELTE]: {
		id: E_Technologies.SHADCN_SVELTE,
		icon: "vscode-icons:file-type-light-shadcn",
		name: "shadcn-svelte",
		websiteURL: "https://www.shadcn-svelte.com/",
		githubURL: "https://github.com/huntabyte/shadcn-svelte#readme",
		readmeURL: "https://raw.githubusercontent.com/huntabyte/shadcn-svelte/refs/heads/main/README.md",
	},
	[E_Technologies.TYPESCRIPT]: {
		id: E_Technologies.TYPESCRIPT,
		icon: "logos:typescript-icon",
		name: "TypeScript",
		websiteURL: "https://www.typescriptlang.org/",
		githubURL: "https://github.com/microsoft/TypeScript#readme",
		readmeURL: "https://raw.githubusercontent.com/microsoft/TypeScript/refs/heads/main/README.md",
	},
	[E_Technologies.VITE]: {
		id: E_Technologies.VITE,
		icon: "logos:vitejs",
		name: "Vite",
		websiteURL: "https://vite.dev/",
		githubURL: "https://github.com/vitejs/vite#readme",
		readmeURL: "https://raw.githubusercontent.com/vitejs/vite/refs/heads/main/README.md",
	},
	[E_Technologies.PRETTIER_PLUGIN_SVELTE]: {
		id: E_Technologies.PRETTIER_PLUGIN_SVELTE,
		icon: "vscode-icons:file-type-prettier",
		name: "prettier-plugin-svelte",
		websiteURL: "",
		githubURL: "https://github.com/sveltejs/prettier-plugin-svelte#readme",
		readmeURL: "https://raw.githubusercontent.com/sveltejs/prettier-plugin-svelte/refs/heads/master/README.md",
	},
	[E_Technologies.ESLINT_PLUGIN_SVELTE]: {
		id: E_Technologies.ESLINT_PLUGIN_SVELTE,
		icon: "logos:eslint",
		name: "eslint-plugin-svelte",
		websiteURL: "https://sveltejs.github.io/eslint-plugin-svelte/",
		githubURL: "https://github.com/sveltejs/eslint-plugin-svelte#readme",
		readmeURL: "https://raw.githubusercontent.com/sveltejs/eslint-plugin-svelte/refs/heads/main/README.md",
	},
	[E_Technologies.VERCEL]: {
		id: E_Technologies.VERCEL,
		icon: "devicon:vercel",
		name: "Vercel",
		websiteURL: "https://vercel.com/",
		githubURL: "https://github.com/vercel/vercel#readme",
		readmeURL: "https://raw.githubusercontent.com/vercel/vercel/refs/heads/main/README.md",
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
