export type I_Technology = {
	id: string;
	icon: string;
	name: string;
	website: string;
	github: string;
};

enum E_Technologies {
	// frontend
	HTML = "html",
	CSS = "css",
	JAVASCRIPT = "javascript",
	TYPESCRIPT = "typescript",
	REACT_JS = "react.js",
	NEXT_JS = "next.js",
	SVELTE_KIT = "svelte-kit",
	REDUX = "redux",

	// backend
	NODE_JS = "node.js",
	EXPRESS_JS = "express.js",
	POSTGRES = "postgres",
	MONGO_DB = "mongdb",
	PRISMA_ORM = "prisma-orm",
	SEQUELIZE_ORM = "sequelize-orm",
	MONGOOSE = "mongoose",

	// testing
	JEST = "jest",
	MOCHA = "mocha",
	CYPRESS = "cypress",
	INSOMNIA = "insomnia",

	// hosting
	HEROKU = "herouk",
	NETLIFY = "netlify",
	VERCEL = "vercel",
	SUPABASE = "supabase",

	// styling
	TAILWINDCSS = "tailwind",
	SHADCN_SVELTE = "shadcn-svelte",
	BOOTSTRAP = "bootstrap",
	SASS = "sass",
	LESS = "less",
	POST_CSS = "post-css",
	STYLED_COMPONENTS = "styled-components",

	// development
	GIT = "git",
	DOCKER = "docker",
	VITE = "vite",
	PRETTIER_PLUGIN_SVELTE = "prettier-plugin-svelte",
	ESLINT_PLUGIN_SVELTE = "eslint-plugin-svelte",
}

export const AllTechnologies: Record<E_Technologies, I_Technology> = {
	// ------------------------------------- frontend -------------------------------------
	[E_Technologies.HTML]: {
		id: E_Technologies.HTML,
		icon: "akar-icons:html-fill",
		name: "HTML",
		github: "whatwg/html",
		website: "https://html.spec.whatwg.org/",
	},
	[E_Technologies.CSS]: {
		id: E_Technologies.CSS,
		icon: "simple-icons:css",
		name: "CSS",
		github: "CSS-Next/css-next",
		website: "https://www.w3.org/Style/CSS/",
	},
	[E_Technologies.JAVASCRIPT]: {
		id: E_Technologies.JAVASCRIPT,
		icon: "akar-icons:javascript-fill",
		name: "JavaScript",
		github: "tc39/ecma262",
		website: "https://ecma-international.org/",
	},
	[E_Technologies.TYPESCRIPT]: {
		id: E_Technologies.TYPESCRIPT,
		icon: "akar-icons:typescript-fill",
		name: "TypeScript",
		github: "microsoft/TypeScript",
		website: "https://www.typescriptlang.org/",
	},
	[E_Technologies.REACT_JS]: {
		id: E_Technologies.REACT_JS,
		icon: "simple-icons:react",
		name: "React.js",
		github: "facebook/react",
		website: "https://react.dev/",
	},
	[E_Technologies.NEXT_JS]: {
		id: E_Technologies.NEXT_JS,
		icon: "akar-icons:nextjs-fill",
		name: "Next.js",
		github: "vercel/next.js",
		website: "https://nextjs.org/",
	},
	[E_Technologies.SVELTE_KIT]: {
		id: E_Technologies.SVELTE_KIT,
		icon: "simple-icons:svelte",
		name: "SvelteKit",
		github: "sveltejs/kit",
		website: "https://svelte.dev/",
	},
	[E_Technologies.REDUX]: {
		id: E_Technologies.REDUX,
		icon: "simple-icons:redux",
		name: "Redux",
		github: "reduxjs/redux",
		website: "https://redux.js.org/",
	},

	// ------------------------------------- backend -------------------------------------
	[E_Technologies.NODE_JS]: {
		id: E_Technologies.NODE_JS,
		icon: "akar-icons:node-fill",
		name: "Node.js",
		github: "nodejs/node",
		website: "https://nodejs.org/",
	},

	[E_Technologies.EXPRESS_JS]: {
		id: E_Technologies.EXPRESS_JS,
		icon: "simple-icons:express",
		name: "Express.js",
		github: "expressjs/express",
		website: "https://expressjs.com/",
	},

	[E_Technologies.POSTGRES]: {
		id: E_Technologies.POSTGRES,
		icon: "simple-icons:postgresql",
		name: "PostgreSQL",
		github: "postgres/postgres",
		website: "https://www.postgresql.org/",
	},

	[E_Technologies.MONGO_DB]: {
		id: E_Technologies.MONGO_DB,
		icon: "simple-icons:mongodb",
		name: "MongoDB",
		github: "mongodb/mongo",
		website: "https://www.mongodb.com/",
	},

	[E_Technologies.PRISMA_ORM]: {
		id: E_Technologies.PRISMA_ORM,
		icon: "simple-icons:prisma",
		name: "Prisma ORM",
		github: "prisma/prisma",
		website: "https://www.prisma.io/",
	},

	[E_Technologies.SEQUELIZE_ORM]: {
		id: E_Technologies.SEQUELIZE_ORM,
		icon: "simple-icons:sequelize",
		name: "Sequalize ORM",
		github: "sequelize/sequelize",
		website: "https://sequelize.org/",
	},

	[E_Technologies.MONGOOSE]: {
		id: E_Technologies.MONGOOSE,
		icon: "simple-icons:mongoose",
		name: "Mongoose",
		github: "Automattic/mongoose",
		website: "https://mongoosejs.com/",
	},

	// ------------------------------------- testing -------------------------------------
	[E_Technologies.JEST]: {
		id: E_Technologies.JEST,
		icon: "simple-icons:jest",
		name: "Jest",
		github: "jestjs/jest",
		website: "https://jestjs.io/",
	},

	[E_Technologies.MOCHA]: {
		id: E_Technologies.MOCHA,
		icon: "devicon-plain:mocha",
		name: "Mocha",
		github: "mochajs/mocha",
		website: "https://mochajs.org/",
	},

	[E_Technologies.CYPRESS]: {
		id: E_Technologies.CYPRESS,
		icon: "simple-icons:cypress",
		name: "Cypress",
		github: "cypress-io/cypress",
		website: "https://www.cypress.io/",
	},

	[E_Technologies.INSOMNIA]: {
		id: E_Technologies.INSOMNIA,
		icon: "simple-icons:insomnia",
		name: "Insomnia",
		github: "Kong/insomnia",
		website: "https://insomnia.rest/",
	},

	// ------------------------------------- hosting -------------------------------------
	[E_Technologies.HEROKU]: {
		id: E_Technologies.HEROKU,
		icon: "simple-icons:heroku",
		name: "Heroku",
		github: "heroku/cli",
		website: "https://www.heroku.com/",
	},

	[E_Technologies.NETLIFY]: {
		id: E_Technologies.NETLIFY,
		icon: "simple-icons:netlify",
		name: "Netlify",
		github: "netlify/cli",
		website: "https://www.netlify.com/",
	},

	[E_Technologies.VERCEL]: {
		id: E_Technologies.VERCEL,
		icon: "simple-icons:vercel",
		name: "Vercel",
		github: "vercel/vercel",
		website: "https://vercel.com/",
	},

	[E_Technologies.SUPABASE]: {
		id: E_Technologies.SUPABASE,
		icon: "simple-icons:supabase",
		name: "Supabase",
		github: "postgres/postgres",
		website: "https://www.postgresql.org/",
	},

	// ------------------------------------- styling -------------------------------------

	[E_Technologies.TAILWINDCSS]: {
		id: E_Technologies.TAILWINDCSS,
		icon: "simple-icons:tailwindcss",
		name: "TailwindCSS",
		github: "tailwindlabs/tailwindcss",
		website: "https://tailwindcss.com/",
	},

	[E_Technologies.SHADCN_SVELTE]: {
		id: E_Technologies.SHADCN_SVELTE,
		icon: "simple-icons:shadcnui",
		name: "shadcn-svelte",
		github: "huntabyte/shadcn-svelte",
		website: "https://www.shadcn-svelte.com/",
	},

	[E_Technologies.BOOTSTRAP]: {
		id: E_Technologies.BOOTSTRAP,
		icon: "akar-icons:bootstrap-fill",
		name: "Bootstrap",
		github: "twbs/bootstrap",
		website: "https://getbootstrap.com/",
	},

	[E_Technologies.SASS]: {
		id: E_Technologies.SASS,
		icon: "cib:sass-alt",
		name: "Sass",
		github: "sass/sass",
		website: "https://sass-lang.com/",
	},

	[E_Technologies.LESS]: {
		id: E_Technologies.LESS,
		icon: "simple-icons:less",
		name: "Less",
		github: "less/less.js",
		website: "https://lesscss.org/",
	},

	[E_Technologies.POST_CSS]: {
		id: E_Technologies.POST_CSS,
		icon: "simple-icons:postcss",
		name: "PostCSS",
		github: "postcss/postcss",
		website: "https://postcss.org/",
	},

	[E_Technologies.STYLED_COMPONENTS]: {
		id: E_Technologies.STYLED_COMPONENTS,
		icon: "simple-icons:styledcomponents",
		name: "styled-components",
		github: "styled-components/styled-components",
		website: "https://styled-components.com/",
	},

	// ------------------------------------- development -------------------------------------
	[E_Technologies.GIT]: {
		id: E_Technologies.GIT,
		icon: "simple-icons:git",
		name: "Git",
		github: "git/git",
		website: "https://git-scm.com/",
	},

	[E_Technologies.DOCKER]: {
		id: E_Technologies.DOCKER,
		icon: "simple-icons:docker",
		name: "Docker",
		github: "docker/docs",
		website: "https://www.docker.com/",
	},

	[E_Technologies.VITE]: {
		id: E_Technologies.VITE,
		icon: "file-icons:vite",
		name: "Vite",
		github: "vitejs/vite",
		website: "https://vite.dev/",
	},

	[E_Technologies.PRETTIER_PLUGIN_SVELTE]: {
		id: E_Technologies.PRETTIER_PLUGIN_SVELTE,
		icon: "simple-icons:prettier",
		name: "prettier-plugin-svelte",
		github: "sveltejs/prettier-plugin-svelte",
		website: "",
	},

	[E_Technologies.ESLINT_PLUGIN_SVELTE]: {
		id: E_Technologies.ESLINT_PLUGIN_SVELTE,
		icon: "simple-icons:eslint",
		name: "eslint-plugin-svelte",
		github: "sveltejs/eslint-plugin-svelte",
		website: "https://sveltejs.github.io/eslint-plugin-svelte/",
	},
};

export type I_Category = {
	id: string;
	icon: string;
	title: string;
	techs: I_Technology[];
};

enum E_Categories {
	FRONT_END = "front_end",
	BACK_END = "back_end",
	TESTING = "testing",
	HOSTING = "hosting",
	STYLING = "styling",
	DEVELOPMENT = "development",
}

export const TechCategories: Record<E_Categories, I_Category> = {
	[E_Categories.FRONT_END]: {
		id: E_Categories.FRONT_END,
		icon: "lucide:monitor",
		title: "Front End",
		techs: [
			AllTechnologies[E_Technologies.HTML],
			AllTechnologies[E_Technologies.CSS],
			AllTechnologies[E_Technologies.JAVASCRIPT],
			AllTechnologies[E_Technologies.TYPESCRIPT],
			AllTechnologies[E_Technologies.REACT_JS],
			AllTechnologies[E_Technologies.NEXT_JS],
			AllTechnologies[E_Technologies.SVELTE_KIT],
			AllTechnologies[E_Technologies.REDUX],
		],
	},
	[E_Categories.BACK_END]: {
		id: E_Categories.BACK_END,
		icon: "lucide:server",
		title: "Back End",
		techs: [
			AllTechnologies[E_Technologies.NODE_JS],
			AllTechnologies[E_Technologies.EXPRESS_JS],
			AllTechnologies[E_Technologies.POSTGRES],
			AllTechnologies[E_Technologies.MONGO_DB],
			AllTechnologies[E_Technologies.PRISMA_ORM],
			AllTechnologies[E_Technologies.SEQUELIZE_ORM],
			AllTechnologies[E_Technologies.MONGOOSE],
		],
	},
	[E_Categories.TESTING]: {
		id: E_Categories.TESTING,
		icon: "lucide:bug",
		title: "Testing",
		techs: [
			AllTechnologies[E_Technologies.JEST],
			AllTechnologies[E_Technologies.MOCHA],
			AllTechnologies[E_Technologies.CYPRESS],
			AllTechnologies[E_Technologies.INSOMNIA],
		],
	},
	[E_Categories.HOSTING]: {
		id: E_Categories.HOSTING,
		icon: "lucide:network",
		title: "Hosting",
		techs: [
			AllTechnologies[E_Technologies.HEROKU],
			AllTechnologies[E_Technologies.NETLIFY],
			AllTechnologies[E_Technologies.VERCEL],
			AllTechnologies[E_Technologies.SUPABASE],
		],
	},
	[E_Categories.STYLING]: {
		id: E_Categories.STYLING,
		icon: "lucide:paintbrush",
		title: "Styling",
		techs: [
			AllTechnologies[E_Technologies.TAILWINDCSS],
			AllTechnologies[E_Technologies.SHADCN_SVELTE],
			AllTechnologies[E_Technologies.BOOTSTRAP],
			AllTechnologies[E_Technologies.SASS],
			AllTechnologies[E_Technologies.LESS],
			AllTechnologies[E_Technologies.POST_CSS],
			AllTechnologies[E_Technologies.STYLED_COMPONENTS],
		],
	},
	[E_Categories.DEVELOPMENT]: {
		id: E_Categories.DEVELOPMENT,
		icon: "lucide:code-xml",
		title: "Development",
		techs: [
			AllTechnologies[E_Technologies.GIT],
			AllTechnologies[E_Technologies.DOCKER],
			AllTechnologies[E_Technologies.VITE],
			AllTechnologies[E_Technologies.PRETTIER_PLUGIN_SVELTE],
			AllTechnologies[E_Technologies.ESLINT_PLUGIN_SVELTE],
		],
	},
};

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
