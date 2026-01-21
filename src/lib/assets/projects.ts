import { AllTechnologies, E_Technologies, PortfolioTechs } from "./technologies";
import { Icons } from "./icons";
import type { I_Translation } from "$lib/utils/translations";

export type I_Project = {
	id: string;
	title: I_Translation;
	description: I_Translation;
	repo: string;
	website?: string;
	techs: string[];
};

export enum E_Projects {
	PORTFOLIO_SVELTE = "portfolio-sveltekit",
	CONTACTS_APP = "contacts-app",
	CHALLENGE_25WATTS = "25Watts",
	PATIO_MENU = "patio-menu",
	MELI_TECH_TEST = "prueba-tecnica-meli",
	NEXTDOTS_CHALLENGE = "challengeNextDots",
	PI_HENRY_VIDEOGAMES = "PI-Videogames-Guido",
	PG_HENRY_FOODFAST = "food-fast",

	// ------------- games -------------
	GRIDDLERS_ULP = "Griddlers-ULP-2025",
	PYTHON_TETRIS = "Python_Tetris",
	PYTHON_SNAKE = "Python_Snake",
	PYTHON_PONG = "Python_Pong",
	PYTHON_CONNECT_FOUR = "Python_Connect-Four",
	GODOT_HORDE_SURVIVOR = "Godot_horde-survivor",
	LIBGDX_PONG = "LibGDX_Pong",
}

export const AllProjects: Record<keyof typeof E_Projects, I_Project> = {
	PORTFOLIO_SVELTE: {
		id: E_Projects.PORTFOLIO_SVELTE,
		title: {
			en: "Web Portfolio",
			es: "Portfolio Web",
		},
		description: {
			en: "SvelteKit portfolio app. Check the source code for the website you are on right now!",
			es: "!TODO",
		},
		repo: E_Projects.PORTFOLIO_SVELTE,
		website: "https://guidoq.vercel.app",
		techs: PortfolioTechs.map((tech) => tech.icon),
	},
	CONTACTS_APP: {
		id: E_Projects.CONTACTS_APP,
		title: {
			en: "Contacts App",
			es: "!TODO",
		},
		description: {
			en: "Next.js app focused on drag-n-drop functionality, part of a technical interview for Front.id",
			es: "!TODO",
		},
		repo: E_Projects.CONTACTS_APP,
		website: "https://contacts-app-guidoq.vercel.app",
		techs: [
			AllTechnologies[E_Technologies.HTML].icon,
			AllTechnologies[E_Technologies.CSS].icon,
			AllTechnologies[E_Technologies.JAVASCRIPT].icon,
			AllTechnologies[E_Technologies.NEXT_JS].icon,
			AllTechnologies[E_Technologies.STYLED_COMPONENTS].icon,
			AllTechnologies[E_Technologies.ESLINT].icon,
			AllTechnologies[E_Technologies.VERCEL].icon,
		],
	},
	CHALLENGE_25WATTS: {
		id: E_Projects.CHALLENGE_25WATTS,
		title: {
			en: "25 Watts challenge",
			es: "!TODO",
		},
		description: {
			en: "Static HTML site using Bootstrap and JQuery, part of a technical interview for 25Watts",
			es: "!TODO",
		},
		repo: E_Projects.CHALLENGE_25WATTS,
		website: "https://25-watts-challenge-guidoq.vercel.app/",
		techs: [
			AllTechnologies[E_Technologies.HTML].icon,
			AllTechnologies[E_Technologies.CSS].icon,
			AllTechnologies[E_Technologies.JAVASCRIPT].icon,
			AllTechnologies[E_Technologies.VERCEL].icon,
		],
	},
	PATIO_MENU: {
		id: E_Projects.PATIO_MENU,
		title: {
			en: "El Patio - Menu",
			es: "!TODO",
		},
		description: {
			en: "React.js single page application online menu",
			es: "!TODO",
		},
		repo: E_Projects.PATIO_MENU,
		website: "https://elpatiomerlosl.netlify.app/",
		techs: [
			AllTechnologies[E_Technologies.HTML].icon,
			AllTechnologies[E_Technologies.CSS].icon,
			AllTechnologies[E_Technologies.JAVASCRIPT].icon,
			AllTechnologies[E_Technologies.REACT_JS].icon,
			AllTechnologies[E_Technologies.MATERIAL_UI].icon,
			AllTechnologies[E_Technologies.SASS].icon,
			AllTechnologies[E_Technologies.PRETTIER].icon,
			AllTechnologies[E_Technologies.NETLIFY].icon,
		],
	},
	MELI_TECH_TEST: {
		id: E_Projects.MELI_TECH_TEST,
		title: {
			en: "MercadoLibre challenge",
			es: "!TODO",
		},
		description: {
			en: "Next.js app part of a technical interview for MercadoLibre",
			es: "!TODO",
		},
		repo: E_Projects.MELI_TECH_TEST,
		techs: [
			AllTechnologies[E_Technologies.HTML].icon,
			AllTechnologies[E_Technologies.CSS].icon,
			AllTechnologies[E_Technologies.TYPESCRIPT].icon,
			AllTechnologies[E_Technologies.NEXT_JS].icon,
			AllTechnologies[E_Technologies.SASS].icon,
			AllTechnologies[E_Technologies.ESLINT].icon,
			AllTechnologies[E_Technologies.CYPRESS].icon,
			AllTechnologies[E_Technologies.VERCEL].icon,
		],
	},
	NEXTDOTS_CHALLENGE: {
		id: E_Projects.NEXTDOTS_CHALLENGE,
		title: {
			en: "NextDots challenge",
			es: "!TODO",
		},
		description: {
			en: "React-Native app part of a technical interview for NextDots",
			es: "!TODO",
		},
		repo: E_Projects.NEXTDOTS_CHALLENGE,
		techs: [
			AllTechnologies[E_Technologies.HTML].icon,
			AllTechnologies[E_Technologies.CSS].icon,
			AllTechnologies[E_Technologies.JAVASCRIPT].icon,
			AllTechnologies[E_Technologies.REACT_JS].icon,
			AllTechnologies[E_Technologies.REDUX].icon,
			AllTechnologies[E_Technologies.PRETTIER].icon,
			AllTechnologies[E_Technologies.ESLINT].icon,
		],
	},
	PI_HENRY_VIDEOGAMES: {
		id: E_Projects.PI_HENRY_VIDEOGAMES,
		title: {
			en: "Inividual Project - SoyHenry",
			es: "!TODO",
		},
		description: {
			en: "Mono-repo containing an Express.js backend and a React.js frontend",
			es: "!TODO",
		},
		repo: E_Projects.PI_HENRY_VIDEOGAMES,
		techs: [
			AllTechnologies[E_Technologies.REACT_JS].icon,
			AllTechnologies[E_Technologies.REDUX].icon,
			Icons.AXIOS,
			Icons.REACT_ROUTER,
			AllTechnologies[E_Technologies.STYLED_COMPONENTS].icon,
			AllTechnologies[E_Technologies.EXPRESS_JS].icon,
			AllTechnologies[E_Technologies.POSTGRES].icon,
			AllTechnologies[E_Technologies.SEQUELIZE_ORM].icon,
			AllTechnologies[E_Technologies.MOCHA].icon,
			Icons.CHAI,
			AllTechnologies[E_Technologies.HEROKU].icon,
		],
	},
	PG_HENRY_FOODFAST: {
		id: E_Projects.PG_HENRY_FOODFAST,
		title: {
			en: "Group Project - SoyHenry",
			es: "!TODO",
		},
		description: {
			en: "Mono-repo containing an Express.js backend, a React.js frontend and a telegram bot",
			es: "!TODO",
		},
		repo: E_Projects.PG_HENRY_FOODFAST,
		techs: [
			AllTechnologies[E_Technologies.REACT_JS].icon,
			AllTechnologies[E_Technologies.REDUX].icon,
			Icons.AXIOS,
			Icons.REACT_ROUTER,
			AllTechnologies[E_Technologies.SASS].icon,
			AllTechnologies[E_Technologies.STYLED_COMPONENTS].icon,
			Icons.LOTTIE,
			AllTechnologies[E_Technologies.EXPRESS_JS].icon,
			AllTechnologies[E_Technologies.POSTGRES].icon,
			AllTechnologies[E_Technologies.SEQUELIZE_ORM].icon,
			AllTechnologies[E_Technologies.HEROKU].icon,
		],
	},

	// ------------- games -------------
	LIBGDX_PONG: {
		id: E_Projects.LIBGDX_PONG,
		title: {
			en: "Pong - LibGDX",
			es: "!TODO",
		},
		description: {
			en: "Pong simulation implemented using LibGDX, targeting windows and web",
			es: "!TODO",
		},
		repo: E_Projects.LIBGDX_PONG,
		techs: [Icons.LIBGDX, Icons.JAVA],
	},
	GODOT_HORDE_SURVIVOR: {
		id: E_Projects.GODOT_HORDE_SURVIVOR,
		title: {
			en: "Horde Survivor - Godot",
			es: "!TODO",
		},
		description: {
			en: "2D horde Survivor made using C# and the Godot game engine, targeting desktop and web",
			es: "!TODO",
		},
		repo: E_Projects.GODOT_HORDE_SURVIVOR,
		techs: [Icons.GODOT, Icons.C_SHARP],
	},
	GRIDDLERS_ULP: {
		id: E_Projects.GRIDDLERS_ULP,
		title: {
			en: "Griddlers ULP",
			es: "!TODO",
		},
		description: {
			en: "Griddlers game console application, created as part of an assignment for college",
			es: "!TODO",
		},
		repo: E_Projects.GRIDDLERS_ULP,
		techs: [Icons.TERMINAL, Icons.C_PP],
	},
	PYTHON_TETRIS: {
		id: E_Projects.PYTHON_TETRIS,
		title: {
			en: "Tetris - Python",
			es: "!TODO",
		},
		description: {
			en: "Basic Tetris game implemented using PyGame",
			es: "!TODO",
		},
		repo: E_Projects.PYTHON_TETRIS,
		techs: [Icons.PYTHON],
	},
	PYTHON_SNAKE: {
		id: E_Projects.PYTHON_SNAKE,
		title: {
			en: "Snake - Python",
			es: "!TODO",
		},
		description: {
			en: "Basic Snake game implemented using PyGame",
			es: "!TODO",
		},
		repo: E_Projects.PYTHON_SNAKE,
		techs: [Icons.PYTHON],
	},
	PYTHON_PONG: {
		id: E_Projects.PYTHON_PONG,
		title: {
			en: "Pong - Python",
			es: "!TODO",
		},
		description: {
			en: "Basic Pong game implemented using PyGame",
			es: "!TODO",
		},
		repo: E_Projects.PYTHON_PONG,
		techs: [Icons.PYTHON],
	},
	PYTHON_CONNECT_FOUR: {
		id: E_Projects.PYTHON_CONNECT_FOUR,
		title: {
			en: "Connect Four - Python",
			es: "!TODO",
		},
		description: {
			en: "Basic Connect-Four game implemented using PyGame",
			es: "!TODO",
		},
		repo: E_Projects.PYTHON_CONNECT_FOUR,
		techs: [Icons.PYTHON],
	},
};
