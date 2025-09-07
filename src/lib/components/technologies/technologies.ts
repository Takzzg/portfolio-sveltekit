export interface I_Technology {
	id: string;
	type: "logo" | "banner";
	icon: string;
	name: string;
	readmeURL: string;
	websiteURL: string;
}

export const Technologies: I_Technology[] = [
	{
		id: "svelte_kit",
		type: "banner",
		icon: "logos:svelte-kit",
		name: "SvelteKit",
		readmeURL: "https://raw.githubusercontent.com/sveltejs/kit/refs/heads/main/README.md",
		websiteURL: "https://svelte.dev/",
	},
	{
		id: "tailwindcss",
		type: "banner",
		icon: "logos:tailwindcss",
		name: "TailwindCSS",
		readmeURL: "https://raw.githubusercontent.com/tailwindlabs/tailwindcss/refs/heads/main/README.md",
		websiteURL: "https://tailwindcss.com/",
	},
];

// {@render techLogoBanner("logos:svelte-kit")}
// {@render techLogoBanner("logos:tailwindcss")}

// {@render techLogoIcon("devicon:vercel", "Vercel")}
// {@render techLogoIcon("logos:typescript-icon", "TypeScript")}
// {@render techLogoIcon("vscode-icons:file-type-light-shadcn", "shadcn/ui")}
// {@render techLogoIcon("logos:vitejs", "Vite")}
// {@render techLogoIcon("logos:prettier", "Prettier")}
// {@render techLogoIcon("logos:eslint", "ESLint")}
