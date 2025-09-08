export interface I_Technology {
	id: string;
	icon: string;
	name: string;
	websiteURL: string;
	githubURL: string;
	readmeURL: string;
}

export const Technologies: I_Technology[] = [
	{
		id: "svelte_kit",
		icon: "logos:svelte-icon",
		name: "SvelteKit",
		websiteURL: "https://svelte.dev/",
		githubURL: "https://github.com/sveltejs/kit#readme",
		readmeURL: "https://raw.githubusercontent.com/sveltejs/kit/refs/heads/main/README.md",
	},
	{
		id: "tailwindcss",
		icon: "logos:tailwindcss-icon",
		name: "TailwindCSS",
		websiteURL: "https://tailwindcss.com/",
		githubURL: "https://github.com/tailwindlabs/tailwindcss#readme",
		readmeURL: "https://raw.githubusercontent.com/tailwindlabs/tailwindcss/refs/heads/main/README.md",
	},
	{
		id: "shadcn-svelte",
		icon: "vscode-icons:file-type-light-shadcn",
		name: "shadcn-svelte",
		websiteURL: "https://www.shadcn-svelte.com/",
		githubURL: "https://github.com/huntabyte/shadcn-svelte#readme",
		readmeURL: "https://raw.githubusercontent.com/huntabyte/shadcn-svelte/refs/heads/main/README.md",
	},
	{
		id: "typescript",
		icon: "logos:typescript-icon",
		name: "TypeScript",
		websiteURL: "https://www.typescriptlang.org/",
		githubURL: "https://github.com/microsoft/TypeScript#readme",
		readmeURL: "https://raw.githubusercontent.com/microsoft/TypeScript/refs/heads/main/README.md",
	},
	{
		id: "vite",
		icon: "logos:vitejs",
		name: "Vite",
		websiteURL: "https://vite.dev/",
		githubURL: "https://github.com/vitejs/vite#readme",
		readmeURL: "https://raw.githubusercontent.com/vitejs/vite/refs/heads/main/README.md",
	},
	{
		id: "prettier-plugin-svelte",
		icon: "vscode-icons:file-type-prettier",
		name: "prettier-plugin-svelte",
		websiteURL: "",
		githubURL: "https://github.com/sveltejs/prettier-plugin-svelte#readme",
		readmeURL: "https://raw.githubusercontent.com/sveltejs/prettier-plugin-svelte/refs/heads/master/README.md",
	},
	{
		id: "eslint-plugin-svelte",
		icon: "logos:eslint",
		name: "eslint-plugin-svelte",
		websiteURL: "https://sveltejs.github.io/eslint-plugin-svelte/",
		githubURL: "https://github.com/sveltejs/eslint-plugin-svelte#readme",
		readmeURL: "https://raw.githubusercontent.com/sveltejs/eslint-plugin-svelte/refs/heads/main/README.md",
	},
	{
		id: "vercel",
		icon: "devicon:vercel",
		name: "Vercel",
		websiteURL: "https://vercel.com/",
		githubURL: "https://github.com/vercel/vercel#readme",
		readmeURL: "https://raw.githubusercontent.com/vercel/vercel/refs/heads/main/README.md",
	},
];
