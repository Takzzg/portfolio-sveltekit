export type I_Technology = {
	id: string;
	icon: string;
	name: string;
	website: string;
	github?: string;
};

enum E_Technologies {
	HTML = "html",
	CSS = "css",
	BOOTSTRAP = "bootstrap",
	SASS = "sass",
	LESS = "less",
	POST_CSS = "post-css",
	TAILWINDCSS = "tailwindcss",
	JAVASCRIPT = "javascript",
	TYPESCRIPT = "typescript",
	REACT_JS = "react.js",
	NEXT_JS = "next.js",
	SVELTE_KIT = "svelte-kit",
	SHADCN_SVELTE = "shadcn-svelte",
	VITE = "vite",
	PRETTIER_PLUGIN_SVELTE = "prettier-plugin-svelte",
	ESLINT_PLUGIN_SVELTE = "eslint-plugin-svelte",
	VERCEL = "vercel",
	GIT = "git",
	DOCKER = "docker",
	REDUX = "redux",
	NODE_JS = "node.js",
	EXPRESS_JS = "express.js",
	PRISMA_ORM = "prisma-orm",
	SEQUELIZE_ORM = "sequelize-orm",
	MONGOOSE = "mongoose",
	MONGO_DB = "mongo-db",
	POSTGRES = "postgres",
	SUPABASE = "supabase",
	NETLIFY = "netlify",
	HEROKU = "heroku",
}

const AllTechnologies: Record<keyof typeof E_Technologies, I_Technology> = {
	HTML: {
		id: E_Technologies.HTML,
		icon: "logos:html-5",
		name: "HTML",
		github: "whatwg/html",
		website: "https://html.spec.whatwg.org/",
	},
	CSS: {
		id: E_Technologies.CSS,
		icon: "logos:css-3",
		name: "CSS",
		website: "https://www.w3.org/Style/CSS/",
	},
	BOOTSTRAP: {
		id: E_Technologies.BOOTSTRAP,
		icon: "logos:bootstrap",
		name: "Bootstrap",
		github: "twbs/bootstrap",
		website: "https://getbootstrap.com/",
	},
	SASS: {
		id: E_Technologies.SASS,
		icon: "logos:sass",
		name: "Sass",
		github: "sass/sass",
		website: "https://sass-lang.com/",
	},
	LESS: {
		id: E_Technologies.LESS,
		icon: "logos:less",
		name: "Less",
		github: "less/less.js",
		website: "https://lesscss.org/",
	},
	POST_CSS: {
		id: E_Technologies.POST_CSS,
		icon: "logos:postcss",
		name: "PostCSS",
		github: "postcss/postcss",
		website: "https://postcss.org/",
	},
	TAILWINDCSS: {
		id: E_Technologies.TAILWINDCSS,
		icon: "logos:tailwindcss-icon",
		name: "TailwindCSS",
		github: "tailwindlabs/tailwindcss",
		website: "https://tailwindcss.com/",
	},
	JAVASCRIPT: {
		id: E_Technologies.JAVASCRIPT,
		icon: "logos:javascript",
		name: "JavaScript",
		website: "https://ecma-international.org/",
	},
	TYPESCRIPT: {
		id: E_Technologies.TYPESCRIPT,
		icon: "logos:typescript-icon",
		name: "TypeScript",
		github: "microsoft/TypeScript",
		website: "https://www.typescriptlang.org/",
	},
	REACT_JS: {
		id: E_Technologies.REACT_JS,
		icon: "logos:react",
		name: "React.js",
		github: "facebook/react",
		website: "https://react.dev/",
	},
	NEXT_JS: {
		id: E_Technologies.NEXT_JS,
		icon: "logos:nextjs-icon",
		name: "Next.js",
		github: "vercel/next.js",
		website: "https://nextjs.org/",
	},
	SVELTE_KIT: {
		id: E_Technologies.SVELTE_KIT,
		icon: "logos:svelte-icon",
		name: "SvelteKit",
		github: "sveltejs/kit",
		website: "https://svelte.dev/",
	},
	SHADCN_SVELTE: {
		id: E_Technologies.SHADCN_SVELTE,
		icon: "vscode-icons:file-type-light-shadcn",
		name: "shadcn-svelte",
		github: "huntabyte/shadcn-svelte",
		website: "https://www.shadcn-svelte.com/",
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
	GIT: {
		id: E_Technologies.GIT,
		icon: "logos:git-icon",
		name: "Git",
		website: "https://git-scm.com/",
	},
	DOCKER: {
		id: E_Technologies.DOCKER,
		icon: "logos:docker-icon",
		name: "Docker",
		github: "docker/docs",
		website: "https://www.docker.com/",
	},
	REDUX: {
		id: E_Technologies.REDUX,
		icon: "logos:redux",
		name: "Redux",
		github: "reduxjs/redux",
		website: "https://redux.js.org/",
	},
	NODE_JS: {
		id: E_Technologies.NODE_JS,
		icon: "logos:nodejs-icon",
		name: "Node.js",
		github: "nodejs/node",
		website: "https://nodejs.org/",
	},
	EXPRESS_JS: {
		id: E_Technologies.EXPRESS_JS,
		icon: "simple-icons:express",
		name: "Express.js",
		github: "expressjs/express",
		website: "https://expressjs.com/",
	},
	PRISMA_ORM: {
		id: E_Technologies.PRISMA_ORM,
		icon: "logos:prisma",
		name: "Prisma ORM",
		github: "prisma/prisma",
		website: "https://www.prisma.io/",
	},
	SEQUELIZE_ORM: {
		id: E_Technologies.SEQUELIZE_ORM,
		icon: "logos:sequelize",
		name: "Sequalize ORM",
		github: "sequelize/sequelize",
		website: "https://sequelize.org/",
	},
	MONGOOSE: {
		id: E_Technologies.MONGOOSE,
		icon: "devicon:mongoose-wordmark",
		name: "Mongoose",
		github: "Automattic/mongoose",
		website: "https://mongoosejs.com/",
	},
	MONGO_DB: {
		id: E_Technologies.MONGO_DB,
		icon: "logos:mongodb-icon",
		name: "MongoDB",
		github: "mongodb/mongo",
		website: "https://www.mongodb.com/",
	},
	POSTGRES: {
		id: E_Technologies.POSTGRES,
		icon: "logos:postgresql",
		name: "PostgreSQL",
		github: "postgres/postgres",
		website: "https://www.postgresql.org/",
	},
	SUPABASE: {
		id: E_Technologies.SUPABASE,
		icon: "logos:supabase-icon",
		name: "Supabase",
		github: "postgres/postgres",
		website: "https://www.postgresql.org/",
	},
	NETLIFY: {
		id: E_Technologies.NETLIFY,
		icon: "logos:netlify-icon",
		name: "Netlify",
		github: "netlify/cli",
		website: "https://www.netlify.com/",
	},
	HEROKU: {
		id: E_Technologies.HEROKU,
		icon: "logos:heroku-icon",
		name: "Heroku",
		github: "heroku/cli",
		website: "https://www.heroku.com/",
	},
};

export type I_Category = {
	id: string;
	icon: string;
	title: string;
	techs: I_Technology[];
};

export enum E_Categories {
	FRONT_END = "front_end",
	STYLING = "styling",
	DEVELOPMENT = "development",
	BACK_END = "back_end",
	HOSTING = "hosting",
}

export const TechCategories: Record<keyof typeof E_Categories, I_Category> = {
	FRONT_END: {
		id: E_Categories.FRONT_END,
		icon: "lucide:monitor",
		title: "Front End",
		techs: [
			AllTechnologies.HTML,
			AllTechnologies.CSS,
			AllTechnologies.JAVASCRIPT,
			AllTechnologies.TYPESCRIPT,
			AllTechnologies.REACT_JS,
			AllTechnologies.NEXT_JS,
			AllTechnologies.SVELTE_KIT,
			AllTechnologies.REDUX,
		],
	},
	STYLING: {
		id: E_Categories.STYLING,
		icon: "lucide:paintbrush",
		title: "Styling",
		techs: [
			AllTechnologies.TAILWINDCSS,
			AllTechnologies.SHADCN_SVELTE,
			AllTechnologies.BOOTSTRAP,
			AllTechnologies.SASS,
			AllTechnologies.LESS,
			AllTechnologies.POST_CSS,
		],
	},
	BACK_END: {
		id: E_Categories.BACK_END,
		icon: "lucide:server",
		title: "Back End",
		techs: [
			AllTechnologies.NODE_JS,
			AllTechnologies.EXPRESS_JS,
			AllTechnologies.POSTGRES,
			AllTechnologies.MONGO_DB,
			AllTechnologies.PRISMA_ORM,
			AllTechnologies.SEQUELIZE_ORM,
			AllTechnologies.MONGOOSE,
		],
	},
	HOSTING: {
		id: E_Categories.HOSTING,
		icon: "lucide:network",
		title: "Hosting",
		techs: [AllTechnologies.HEROKU, AllTechnologies.NETLIFY, AllTechnologies.VERCEL, AllTechnologies.SUPABASE],
	},
	DEVELOPMENT: {
		id: E_Categories.DEVELOPMENT,
		icon: "lucide:code-xml",
		title: "Development",
		techs: [
			AllTechnologies.GIT,
			AllTechnologies.DOCKER,
			AllTechnologies.VITE,
			AllTechnologies.PRETTIER_PLUGIN_SVELTE,
			AllTechnologies.ESLINT_PLUGIN_SVELTE,
		],
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
