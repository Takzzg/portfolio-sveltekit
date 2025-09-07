export interface I_Technology {
	id: string;
	type: "icon" | "banner";
	icon: string;
	name: string;
	websiteURL: string;
	githubURL: string;
	readmeURL: string;
}

export const Technologies: I_Technology[] = [
	{
		id: "svelte_kit",
		type: "banner",
		icon: "logos:svelte-kit",
		name: "SvelteKit",
		websiteURL: "https://svelte.dev/",
		githubURL: "https://github.com/sveltejs/kit#readme",
		readmeURL: "https://raw.githubusercontent.com/sveltejs/kit/refs/heads/main/README.md",
	},
	{
		id: "tailwindcss",
		type: "banner",
		icon: "logos:tailwindcss",
		name: "TailwindCSS",
		websiteURL: "https://tailwindcss.com/",
		githubURL: "https://github.com/tailwindlabs/tailwindcss#readme",
		readmeURL: "https://raw.githubusercontent.com/tailwindlabs/tailwindcss/refs/heads/main/README.md",
	},
	{
		id: "typescript",
		type: "icon",
		icon: "logos:typescript-icon",
		name: "TypeScript",
		websiteURL: "https://www.typescriptlang.org/",
		githubURL: "https://github.com/microsoft/TypeScript#readme",
		readmeURL: "https://raw.githubusercontent.com/microsoft/TypeScript/refs/heads/main/README.md",
	},
	{
		id: "vercel",
		type: "icon",
		icon: "devicon:vercel",
		name: "Vercel",
		websiteURL: "https://vercel.com/",
		githubURL: "https://github.com/vercel/vercel#readme",
		readmeURL: "https://raw.githubusercontent.com/vercel/vercel/refs/heads/main/README.md",
	},
];

// {@render techLogoIcon("logos:typescript-icon", "TypeScript")}
// {@render techLogoIcon("vscode-icons:file-type-light-shadcn", "shadcn/ui")}
// {@render techLogoIcon("logos:vitejs", "Vite")}
// {@render techLogoIcon("logos:prettier", "Prettier")}
// {@render techLogoIcon("logos:eslint", "ESLint")}
