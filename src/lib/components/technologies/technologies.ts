export interface I_Technology {
	id: string;
	type: "logo" | "banner";
	icon: string;
	name: string;
	githubURL: string;
	websiteURL: string;
	readmeURL: string;
}

export const Technologies: I_Technology[] = [
	{
		id: "svelte_kit",
		type: "banner",
		icon: "logos:svelte-kit",
		name: "SvelteKit",
		githubURL: "https://github.com/sveltejs/kit#readme",
		websiteURL: "https://svelte.dev/",
		readmeURL: "https://raw.githubusercontent.com/sveltejs/kit/refs/heads/main/README.md",
	},
	{
		id: "tailwindcss",
		type: "banner",
		icon: "logos:tailwindcss",
		name: "TailwindCSS",
		githubURL: "https://github.com/tailwindlabs/tailwindcss#readme",
		websiteURL: "https://tailwindcss.com/",
		readmeURL: "https://raw.githubusercontent.com/tailwindlabs/tailwindcss/refs/heads/main/README.md",
	},
];

// {@render techLogoIcon("devicon:vercel", "Vercel")}
// {@render techLogoIcon("logos:typescript-icon", "TypeScript")}
// {@render techLogoIcon("vscode-icons:file-type-light-shadcn", "shadcn/ui")}
// {@render techLogoIcon("logos:vitejs", "Vite")}
// {@render techLogoIcon("logos:prettier", "Prettier")}
// {@render techLogoIcon("logos:eslint", "ESLint")}
