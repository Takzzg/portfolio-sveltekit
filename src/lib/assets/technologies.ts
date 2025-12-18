import { Icons } from "./icons";

export type I_Technology = {
	id: string;
	icon: string;
	name: string;
	website: string;
	github: string;
};

export enum E_Technologies {
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
	SHADCN_UI = "shadcn-ui",
	MATERIAL_UI = "material-ui",
	BOOTSTRAP = "bootstrap",
	SASS = "sass",
	LESS = "less",
	POST_CSS = "post-css",
	STYLED_COMPONENTS = "styled-components",

	// development
	GIT = "git",
	DOCKER = "docker",
	VITE = "vite",
	ESLINT = "eslint",
	PRETTIER = "prettier",
	GITHUB = "github",

	// portfolio specific
	SHADCN_SVELTE = "shadcn-svelte",
	ESLINT_PLUGIN_SVELTE = "eslint-plugin-svelte",
	PRETTIER_PLUGIN_SVELTE = "prettier-plugin-svelte",
}

export const AllTechnologies: Record<E_Technologies, I_Technology> = {
	// ------------------------------------- frontend -------------------------------------

	[E_Technologies.HTML]: {
		id: E_Technologies.HTML,
		icon: Icons.HTML,
		name: "HTML",
		github: "whatwg/html",
		website: "https://html.spec.whatwg.org/",
	},

	[E_Technologies.CSS]: {
		id: E_Technologies.CSS,
		icon: Icons.CSS,
		name: "CSS",
		github: "CSS-Next/css-next",
		website: "https://www.w3.org/Style/CSS/",
	},

	[E_Technologies.JAVASCRIPT]: {
		id: E_Technologies.JAVASCRIPT,
		icon: Icons.JAVASCRIPT,
		name: "JavaScript",
		github: "tc39/ecma262",
		website: "https://ecma-international.org/",
	},

	[E_Technologies.TYPESCRIPT]: {
		id: E_Technologies.TYPESCRIPT,
		icon: Icons.TYPESCRIPT,
		name: "TypeScript",
		github: "microsoft/TypeScript",
		website: "https://www.typescriptlang.org/",
	},

	[E_Technologies.REACT_JS]: {
		id: E_Technologies.REACT_JS,
		icon: Icons.REACT_JS,
		name: "React.js",
		github: "facebook/react",
		website: "https://react.dev/",
	},

	[E_Technologies.NEXT_JS]: {
		id: E_Technologies.NEXT_JS,
		icon: Icons.NEXT_JS,
		name: "Next.js",
		github: "vercel/next.js",
		website: "https://nextjs.org/",
	},

	[E_Technologies.SVELTE_KIT]: {
		id: E_Technologies.SVELTE_KIT,
		icon: Icons.SVELTE_KIT,
		name: "SvelteKit",
		github: "sveltejs/kit",
		website: "https://svelte.dev/",
	},

	[E_Technologies.REDUX]: {
		id: E_Technologies.REDUX,
		icon: Icons.REDUX,
		name: "Redux",
		github: "reduxjs/redux",
		website: "https://redux.js.org/",
	},

	// ------------------------------------- backend -------------------------------------
	[E_Technologies.NODE_JS]: {
		id: E_Technologies.NODE_JS,
		icon: Icons.NODE_JS,
		name: "Node.js",
		github: "nodejs/node",
		website: "https://nodejs.org/",
	},

	[E_Technologies.EXPRESS_JS]: {
		id: E_Technologies.EXPRESS_JS,
		icon: Icons.EXPRESS_JS,
		name: "Express.js",
		github: "expressjs/express",
		website: "https://expressjs.com/",
	},

	[E_Technologies.POSTGRES]: {
		id: E_Technologies.POSTGRES,
		icon: Icons.POSTGRES,
		name: "PostgreSQL",
		github: "postgres/postgres",
		website: "https://www.postgresql.org/",
	},

	[E_Technologies.MONGO_DB]: {
		id: E_Technologies.MONGO_DB,
		icon: Icons.MONGO_DB,
		name: "MongoDB",
		github: "mongodb/mongo",
		website: "https://www.mongodb.com/",
	},

	[E_Technologies.PRISMA_ORM]: {
		id: E_Technologies.PRISMA_ORM,
		icon: Icons.PRISMA_ORM,
		name: "Prisma ORM",
		github: "prisma/prisma",
		website: "https://www.prisma.io/",
	},

	[E_Technologies.SEQUELIZE_ORM]: {
		id: E_Technologies.SEQUELIZE_ORM,
		icon: Icons.SEQUELIZE_ORM,
		name: "Sequalize ORM",
		github: "sequelize/sequelize",
		website: "https://sequelize.org/",
	},

	[E_Technologies.MONGOOSE]: {
		id: E_Technologies.MONGOOSE,
		icon: Icons.MONGOOSE,
		name: "Mongoose",
		github: "Automattic/mongoose",
		website: "https://mongoosejs.com/",
	},

	// ------------------------------------- testing -------------------------------------
	[E_Technologies.JEST]: {
		id: E_Technologies.JEST,
		icon: Icons.JEST,
		name: "Jest",
		github: "jestjs/jest",
		website: "https://jestjs.io/",
	},

	[E_Technologies.MOCHA]: {
		id: E_Technologies.MOCHA,
		icon: Icons.MOCHA,
		name: "Mocha",
		github: "mochajs/mocha",
		website: "https://mochajs.org/",
	},

	[E_Technologies.CYPRESS]: {
		id: E_Technologies.CYPRESS,
		icon: Icons.CYPRESS,
		name: "Cypress",
		github: "cypress-io/cypress",
		website: "https://www.cypress.io/",
	},

	[E_Technologies.INSOMNIA]: {
		id: E_Technologies.INSOMNIA,
		icon: Icons.INSOMNIA,
		name: "Insomnia",
		github: "Kong/insomnia",
		website: "https://insomnia.rest/",
	},

	// ------------------------------------- hosting -------------------------------------
	[E_Technologies.HEROKU]: {
		id: E_Technologies.HEROKU,
		icon: Icons.HEROKU,
		name: "Heroku",
		github: "heroku/cli",
		website: "https://www.heroku.com/",
	},

	[E_Technologies.NETLIFY]: {
		id: E_Technologies.NETLIFY,
		icon: Icons.NETLIFY,
		name: "Netlify",
		github: "netlify/cli",
		website: "https://www.netlify.com/",
	},

	[E_Technologies.VERCEL]: {
		id: E_Technologies.VERCEL,
		icon: Icons.VERCEL,
		name: "Vercel",
		github: "vercel/vercel",
		website: "https://vercel.com/",
	},

	[E_Technologies.SUPABASE]: {
		id: E_Technologies.SUPABASE,
		icon: Icons.SUPABASE,
		name: "Supabase",
		github: "postgres/postgres",
		website: "https://www.postgresql.org/",
	},

	// ------------------------------------- styling -------------------------------------

	[E_Technologies.TAILWINDCSS]: {
		id: E_Technologies.TAILWINDCSS,
		icon: Icons.TAILWINDCSS,
		name: "TailwindCSS",
		github: "tailwindlabs/tailwindcss",
		website: "https://tailwindcss.com/",
	},

	[E_Technologies.SHADCN_UI]: {
		id: E_Technologies.SHADCN_UI,
		icon: Icons.SHADCN_UI,
		name: "shadcn-ui",
		github: "shadcn-ui/ui",
		website: "https://ui.shadcn.com/",
	},
	[E_Technologies.MATERIAL_UI]: {
		id: E_Technologies.MATERIAL_UI,
		icon: Icons.MATERIAL_UI,
		name: "Material UI",
		github: "mui/material-ui",
		website: "https://mui.com/material-ui/",
	},

	[E_Technologies.BOOTSTRAP]: {
		id: E_Technologies.BOOTSTRAP,
		icon: Icons.BOOTSTRAP,
		name: "Bootstrap",
		github: "twbs/bootstrap",
		website: "https://getbootstrap.com/",
	},

	[E_Technologies.SASS]: {
		id: E_Technologies.SASS,
		icon: Icons.SASS,
		name: "Sass",
		github: "sass/sass",
		website: "https://sass-lang.com/",
	},

	[E_Technologies.LESS]: {
		id: E_Technologies.LESS,
		icon: Icons.LESS,
		name: "Less",
		github: "less/less.js",
		website: "https://lesscss.org/",
	},

	[E_Technologies.POST_CSS]: {
		id: E_Technologies.POST_CSS,
		icon: Icons.POST_CSS,
		name: "PostCSS",
		github: "postcss/postcss",
		website: "https://postcss.org/",
	},

	[E_Technologies.STYLED_COMPONENTS]: {
		id: E_Technologies.STYLED_COMPONENTS,
		icon: Icons.STYLED_COMPONENTS,
		name: "styled-components",
		github: "styled-components/styled-components",
		website: "https://styled-components.com/",
	},

	// ------------------------------------- development -------------------------------------
	[E_Technologies.GIT]: {
		id: E_Technologies.GIT,
		icon: Icons.GIT,
		name: "Git",
		github: "git/git",
		website: "https://git-scm.com/",
	},

	[E_Technologies.DOCKER]: {
		id: E_Technologies.DOCKER,
		icon: Icons.DOCKER,
		name: "Docker",
		github: "docker/docs",
		website: "https://www.docker.com/",
	},

	[E_Technologies.VITE]: {
		id: E_Technologies.VITE,
		icon: Icons.VITE,
		name: "Vite",
		github: "vitejs/vite",
		website: "https://vite.dev/",
	},

	[E_Technologies.ESLINT]: {
		id: E_Technologies.ESLINT,
		icon: Icons.ESLINT,
		name: "eslint",
		github: "eslint/eslint",
		website: "https://eslint.org/",
	},

	[E_Technologies.PRETTIER]: {
		id: E_Technologies.PRETTIER,
		icon: Icons.PRETTIER,
		name: "prettier",
		github: "prettier/prettier",
		website: "https://prettier.io/",
    },
    
	[E_Technologies.GITHUB]: {
		id: E_Technologies.GITHUB,
		icon: Icons.GITHUB,
		name: "github",
		github: "github/docs",
		website: "https://github.com/",
	},

	// ------------------------------------- portfolio specific -------------------------------------
	[E_Technologies.SHADCN_SVELTE]: {
		id: E_Technologies.SHADCN_SVELTE,
		icon: Icons.SHADCN_SVELTE,
		name: "shadcn-svelte",
		github: "huntabyte/shadcn-svelte",
		website: "https://www.shadcn-svelte.com/",
    },
    
	[E_Technologies.ESLINT_PLUGIN_SVELTE]: {
		id: E_Technologies.ESLINT_PLUGIN_SVELTE,
		icon: Icons.ESLINT_PLUGIN_SVELTE,
		name: "eslint-plugin-svelte",
		github: "sveltejs/eslint-plugin-svelte",
		website: "https://sveltejs.github.io/eslint-plugin-svelte/",
    },
    
	[E_Technologies.PRETTIER_PLUGIN_SVELTE]: {
		id: E_Technologies.PRETTIER_PLUGIN_SVELTE,
		icon: Icons.PRETTIER_PLUGIN_SVELTE,
		name: "prettier-plugin-svelte",
		github: "sveltejs/prettier-plugin-svelte",
		website: "https://svelte.dev/docs/cli/prettier",
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
	BACK_END = "back_end",
	TESTING = "testing",
	HOSTING = "hosting",
	STYLING = "styling",
	DEVELOPMENT = "development",
}

export const TechCategories: Record<E_Categories, I_Category> = {
	[E_Categories.FRONT_END]: {
		id: E_Categories.FRONT_END,
		icon: Icons.FRONT_END,
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
		icon: Icons.BACK_END,
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
		icon: Icons.TESTING,
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
		icon: Icons.HOSTING,
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
		icon: Icons.STYLING,
		title: "Styling",
		techs: [
			AllTechnologies[E_Technologies.TAILWINDCSS],
			AllTechnologies[E_Technologies.SHADCN_UI],
			AllTechnologies[E_Technologies.MATERIAL_UI],
			AllTechnologies[E_Technologies.BOOTSTRAP],
			AllTechnologies[E_Technologies.SASS],
			AllTechnologies[E_Technologies.LESS],
			AllTechnologies[E_Technologies.POST_CSS],
			AllTechnologies[E_Technologies.STYLED_COMPONENTS],
		],
	},
	[E_Categories.DEVELOPMENT]: {
		id: E_Categories.DEVELOPMENT,
		icon: Icons.DEVELOPMENT,
		title: "Development",
		techs: [
			AllTechnologies[E_Technologies.GIT],
			AllTechnologies[E_Technologies.GITHUB],
			AllTechnologies[E_Technologies.DOCKER],
			AllTechnologies[E_Technologies.VITE],
			AllTechnologies[E_Technologies.PRETTIER],
			AllTechnologies[E_Technologies.ESLINT],
		],
	},
};

export const PortfolioTechs: I_Technology[] = [
	AllTechnologies[E_Technologies.TYPESCRIPT],
	AllTechnologies[E_Technologies.SVELTE_KIT],
	AllTechnologies[E_Technologies.TAILWINDCSS],
	AllTechnologies[E_Technologies.SHADCN_SVELTE],
	AllTechnologies[E_Technologies.VERCEL],
	AllTechnologies[E_Technologies.PRETTIER_PLUGIN_SVELTE],
	AllTechnologies[E_Technologies.ESLINT_PLUGIN_SVELTE],
	AllTechnologies[E_Technologies.VITE],
];
