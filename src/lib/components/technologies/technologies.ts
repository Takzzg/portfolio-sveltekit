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
				icon: "devicon-plain:html5-wordmark",
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
				icon: "simple-icons:javascript",
				name: "JavaScript",
				website: "https://ecma-international.org/",
			},
			TYPESCRIPT: {
				id: "typescript",
				icon: "logos:typescript-icon",
				name: "TypeScript",
				github: "microsoft/TypeScript",
				website: "https://www.typescriptlang.org/",
			},
			REACT_JS: {
				id: "react.js",
				icon: "logos:react",
				name: "React.js",
				github: "facebook/react",
				website: "https://react.dev/",
			},
			NEXT_JS: {
				id: "next.js",
				icon: "logos:nextjs-icon",
				name: "Next.js",
				github: "vercel/next.js",
				website: "https://nextjs.org/",
			},
			SVELTE_KIT: {
				id: "svelte-kit",
				icon: "logos:svelte-icon",
				name: "SvelteKit",
				github: "sveltejs/kit",
				website: "https://svelte.dev/",
			},
			REDUX: {
				id: "redux",
				icon: "logos:redux",
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
				icon: "logos:tailwindcss-icon",
				name: "TailwindCSS",
				github: "tailwindlabs/tailwindcss",
				website: "https://tailwindcss.com/",
			},
			SHADCN_SVELTE: {
				id: "shadcn-svelte",
				icon: "vscode-icons:file-type-light-shadcn",
				name: "shadcn-svelte",
				github: "huntabyte/shadcn-svelte",
				website: "https://www.shadcn-svelte.com/",
			},
			BOOTSTRAP: {
				id: "bootstrap",
				icon: "logos:bootstrap",
				name: "Bootstrap",
				github: "twbs/bootstrap",
				website: "https://getbootstrap.com/",
			},
			SASS: {
				id: "sass",
				icon: "logos:sass",
				name: "Sass",
				github: "sass/sass",
				website: "https://sass-lang.com/",
			},
			LESS: {
				id: "less",
				icon: "logos:less",
				name: "Less",
				github: "less/less.js",
				website: "https://lesscss.org/",
			},
			POST_CSS: {
				id: "post-css",
				icon: "logos:postcss",
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
				icon: "logos:nodejs-icon",
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
				icon: "logos:postgresql",
				name: "PostgreSQL",
				github: "postgres/postgres",
				website: "https://www.postgresql.org/",
			},
			MONGO_DB: {
				id: "mongdb",
				icon: "logos:mongodb-icon",
				name: "MongoDB",
				github: "mongodb/mongo",
				website: "https://www.mongodb.com/",
			},
			PRISMA_ORM: {
				id: "prisma-orm",
				icon: "logos:prisma",
				name: "Prisma ORM",
				github: "prisma/prisma",
				website: "https://www.prisma.io/",
			},
			SEQUELIZE_ORM: {
				id: "sequelize-orm",
				icon: "logos:sequelize",
				name: "Sequalize ORM",
				github: "sequelize/sequelize",
				website: "https://sequelize.org/",
			},
			MONGOOSE: {
				id: "mongoose",
				icon: "devicon:mongoose-wordmark",
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
				icon: "logos:heroku-icon",
				name: "Heroku",
				github: "heroku/cli",
				website: "https://www.heroku.com/",
			},
			NETLIFY: {
				id: "netlify",
				icon: "logos:netlify-icon",
				name: "Netlify",
				github: "netlify/cli",
				website: "https://www.netlify.com/",
			},
			VERCEL: {
				id: "vercel",
				icon: "devicon:vercel",
				name: "Vercel",
				github: "vercel/vercel",
				website: "https://vercel.com/",
			},
			SUPABASE: {
				id: "supabase",
				icon: "logos:supabase-icon",
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
				icon: "logos:git-icon",
				name: "Git",
				website: "https://git-scm.com/",
			},
			DOCKER: {
				id: "docker",
				icon: "logos:docker-icon",
				name: "Docker",
				github: "docker/docs",
				website: "https://www.docker.com/",
			},
			VITE: {
				id: "vite",
				icon: "logos:vitejs",
				name: "Vite",
				github: "vitejs/vite",
				website: "https://vite.dev/",
			},
			PRETTIER_PLUGIN_SVELTE: {
				id: "prettier-plugin-svelte",
				icon: "vscode-icons:file-type-prettier",
				name: "prettier-plugin-svelte",
				github: "sveltejs/prettier-plugin-svelte",
				website: "",
			},
			ESLINT_PLUGIN_SVELTE: {
				id: "eslint-plugin-svelte",
				icon: "logos:eslint",
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
