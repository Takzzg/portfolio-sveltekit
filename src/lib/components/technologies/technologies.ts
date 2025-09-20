export type I_Technology = {
	id: string;
    icon: string;
	name: string;
	website: string;
	github?: string;
};

export type I_Category = {
	id: string;
	icon: string;
	title: string;
	techs: Record<string, I_Technology>;
};

export const TechCategories: Record<string, I_Category> = {
	FRONT_END: {
		id: "front_end",
		icon: "lucide:monitor",
		title: "Front End",
		techs: {
			HTML: {
				id: "html",
				icon: "akar-icons:html-fill",
				name: "HTML",
				github: "whatwg/html",
				website: "https://html.spec.whatwg.org/",
			},
			CSS: {
				id: "css",
				icon: "simple-icons:css",
				name: "CSS",
				website: "https://www.w3.org/Style/CSS/",
			},
			JAVASCRIPT: {
				id: "javascript",
				icon: "akar-icons:javascript-fill",
				name: "JavaScript",
				website: "https://ecma-international.org/",
			},
			TYPESCRIPT: {
				id: "typescript",
				icon: "akar-icons:typescript-fill",
				name: "TypeScript",
				github: "microsoft/TypeScript",
				website: "https://www.typescriptlang.org/",
			},
			REACT_JS: {
				id: "react.js",
				icon: "simple-icons:react",
				name: "React.js",
				github: "facebook/react",
				website: "https://react.dev/",
			},
			NEXT_JS: {
				id: "next.js",
				icon: "akar-icons:nextjs-fill",
				name: "Next.js",
				github: "vercel/next.js",
				website: "https://nextjs.org/",
			},
			SVELTE_KIT: {
				id: "svelte-kit",
				icon: "simple-icons:svelte",
				name: "SvelteKit",
				github: "sveltejs/kit",
				website: "https://svelte.dev/",
			},
			REDUX: {
				id: "redux",
				icon: "simple-icons:redux",
				name: "Redux",
				github: "reduxjs/redux",
				website: "https://redux.js.org/",
			},
		},
	},
	STYLING: {
		id: "styling",
		icon: "lucide:paintbrush",
		title: "Styling",
		techs: {
			TAILWINDCSS: {
				id: "tailwind",
				icon: "simple-icons:tailwindcss",
				name: "TailwindCSS",
				github: "tailwindlabs/tailwindcss",
				website: "https://tailwindcss.com/",
			},
			SHADCN_SVELTE: {
				id: "shadcn-svelte",
                icon: "simple-icons:shadcnui",
				name: "shadcn-svelte",
				github: "huntabyte/shadcn-svelte",
				website: "https://www.shadcn-svelte.com/",
			},
			BOOTSTRAP: {
				id: "bootstrap",
				icon: "akar-icons:bootstrap-fill",
				name: "Bootstrap",
				github: "twbs/bootstrap",
				website: "https://getbootstrap.com/",
			},
			SASS: {
				id: "sass",
				icon: "cib:sass-alt",
				name: "Sass",
				github: "sass/sass",
				website: "https://sass-lang.com/",
			},
			LESS: {
				id: "less",
				icon: "simple-icons:less",
				name: "Less",
				github: "less/less.js",
				website: "https://lesscss.org/",
			},
			POST_CSS: {
				id: "post-css",
				icon: "simple-icons:postcss",
				name: "PostCSS",
				github: "postcss/postcss",
				website: "https://postcss.org/",
			},
		},
	},
	BACK_END: {
		id: "development",
		icon: "lucide:server",
		title: "Back End",
		techs: {
			NODE_JS: {
				id: "node.js",
				icon: "akar-icons:node-fill",
				name: "Node.js",
				github: "nodejs/node",
				website: "https://nodejs.org/",
			},
			EXPRESS_JS: {
				id: "express.js",
				icon: "simple-icons:express",
				name: "Express.js",
				github: "expressjs/express",
				website: "https://expressjs.com/",
			},
			POSTGRES: {
				id: "postgres",
				icon: "simple-icons:postgresql",
				name: "PostgreSQL",
				github: "postgres/postgres",
				website: "https://www.postgresql.org/",
			},
			MONGO_DB: {
				id: "mongdb",
				icon: "simple-icons:mongodb",
				name: "MongoDB",
				github: "mongodb/mongo",
				website: "https://www.mongodb.com/",
			},
			PRISMA_ORM: {
				id: "prisma-orm",
				icon: "simple-icons:prisma",
				name: "Prisma ORM",
				github: "prisma/prisma",
				website: "https://www.prisma.io/",
			},
			SEQUELIZE_ORM: {
				id: "sequelize-orm",
				icon: "simple-icons:sequelize",
				name: "Sequalize ORM",
				github: "sequelize/sequelize",
				website: "https://sequelize.org/",
			},
			MONGOOSE: {
				id: "mongoose",
				icon: "simple-icons:mongoose",
				name: "Mongoose",
				github: "Automattic/mongoose",
				website: "https://mongoosejs.com/",
			},
		},
	},
	HOSTING: {
		id: "back_end",
		icon: "lucide:network",
		title: "Hosting",
		techs: {
			HEROKU: {
				id: "herouk",
				icon: "simple-icons:heroku",
				name: "Heroku",
				github: "heroku/cli",
				website: "https://www.heroku.com/",
			},
			NETLIFY: {
				id: "netlify",
				icon: "simple-icons:netlify",
				name: "Netlify",
				github: "netlify/cli",
				website: "https://www.netlify.com/",
			},
			VERCEL: {
				id: "vercel",
				icon: "simple-icons:vercel",
				name: "Vercel",
				github: "vercel/vercel",
				website: "https://vercel.com/",
			},
			SUPABASE: {
				id: "supabase",
				icon: "simple-icons:supabase",
				name: "Supabase",
				github: "postgres/postgres",
				website: "https://www.postgresql.org/",
			},
		},
	},
	DEVELOPMENT: {
		id: "hosting",
		icon: "lucide:code-xml",
		title: "Development",
		techs: {
			GIT: {
				id: "git",
				icon: "simple-icons:git",
				name: "Git",
				website: "https://git-scm.com/",
			},
			DOCKER: {
				id: "docker",
				icon: "simple-icons:docker",
				name: "Docker",
				github: "docker/docs",
				website: "https://www.docker.com/",
			},
			VITE: {
				id: "vite",
				icon: "file-icons:vite",
				name: "Vite",
				github: "vitejs/vite",
				website: "https://vite.dev/",
			},
			PRETTIER_PLUGIN_SVELTE: {
				id: "prettier-plugin-svelte",
				icon: "simple-icons:prettier",
				name: "prettier-plugin-svelte",
				github: "sveltejs/prettier-plugin-svelte",
				website: "",
			},
			ESLINT_PLUGIN_SVELTE: {
				id: "eslint-plugin-svelte",
				icon: "simple-icons:eslint",
				name: "eslint-plugin-svelte",
				github: "sveltejs/eslint-plugin-svelte",
				website: "https://sveltejs.github.io/eslint-plugin-svelte/",
			},
		},
	},
} as const;

export const Portfolio: I_Technology[] = [
	TechCategories.FRONT_END.techs.SVELTE_KIT,
	TechCategories.STYLING.techs.TAILWINDCSS,
	TechCategories.STYLING.techs.SHADCN_SVELTE,
	TechCategories.FRONT_END.techs.TYPESCRIPT,
	TechCategories.DEVELOPMENT.techs.VITE,
	TechCategories.DEVELOPMENT.techs.PRETTIER_PLUGIN_SVELTE,
	TechCategories.DEVELOPMENT.techs.ESLINT_PLUGIN_SVELTE,
	TechCategories.HOSTING.techs.VERCEL,
];
