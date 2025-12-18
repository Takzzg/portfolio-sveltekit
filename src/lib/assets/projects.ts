import { AllTechnologies, E_Technologies, PortfolioTechs } from "./technologies";
import { Icons } from "./icons";

const GITHUB_URL = "https://github.com/Takzzg/";

export type I_Project = {
	id: string;
	title: string;
	description: string;
	github: string;
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
		title: "Portfolio",
		description: "SvelteKit portfolio app. Check the source code for the website you are on right now!",
		github: GITHUB_URL + E_Projects.PORTFOLIO_SVELTE,
		website: "https://guidoq.vercel.app",
		techs: PortfolioTechs.map((tech) => tech.icon),
	},
	CONTACTS_APP: {
		id: E_Projects.CONTACTS_APP,
		title: "Contacts App",
		description: "Next.js app focused on drag-n-drop functionality, part of a technical interview for Front.id",
		github: GITHUB_URL + E_Projects.CONTACTS_APP,
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
		title: "25 Watts challenge",
		description: "Static HTML site using Bootstrap and JQuery, part of a technical interview for 25Watts",
		github: GITHUB_URL + E_Projects.CHALLENGE_25WATTS,
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
		title: "El Patio - Menu",
		description: "React.js single page application online menu",
		github: GITHUB_URL + E_Projects.PATIO_MENU,
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
		title: "MercadoLibre challenge",
		description: "Next.js app part of a technical interview for MercadoLibre",
		github: GITHUB_URL + E_Projects.MELI_TECH_TEST,
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
		title: "NextDots challenge",
		description: "React-Native app part of a technical interview for NextDots",
		github: GITHUB_URL + E_Projects.NEXTDOTS_CHALLENGE,
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
		title: "Inividual Project - SoyHenry",
		description: "Mono-repo containing an Express.js backend and a React.js frontend",
		github: GITHUB_URL + E_Projects.PI_HENRY_VIDEOGAMES,
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
		title: "Group Project - SoyHenry",
		description: "Mono-repo containing an Express.js backend, a React.js frontend and a telegram bot",
		github: GITHUB_URL + E_Projects.PG_HENRY_FOODFAST,
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
		title: "Pong - LibGDX",
		description: "Pong implemented using LibGDX, targeting windows and web",
		github: GITHUB_URL + E_Projects.LIBGDX_PONG,
		techs: [Icons.LIBGDX, Icons.JAVA],
	},
	GODOT_HORDE_SURVIVOR: {
		id: E_Projects.GODOT_HORDE_SURVIVOR,
		title: "Horde Survivor - Godot",
		description: "Horde Survivor game implemented using PyGame",
		github: GITHUB_URL + E_Projects.GODOT_HORDE_SURVIVOR,
		techs: [Icons.GODOT, Icons.C_SHARP],
	},
	GRIDDLERS_ULP: {
		id: E_Projects.GRIDDLERS_ULP,
		title: "Griddlers ULP",
		description: "Griddlers game as a console app",
		github: GITHUB_URL + E_Projects.GRIDDLERS_ULP,
		techs: [Icons.TERMINAL, Icons.C_PP],
	},
	PYTHON_TETRIS: {
		id: E_Projects.PYTHON_TETRIS,
		title: "Tetris - Python",
		description: "Tetris game implemented using PyGame",
		github: GITHUB_URL + E_Projects.PYTHON_TETRIS,
		techs: [Icons.PYTHON],
	},
	PYTHON_SNAKE: {
		id: E_Projects.PYTHON_SNAKE,
		title: "Snake - Python",
		description: "Snake game implemented using PyGame",
		github: GITHUB_URL + E_Projects.PYTHON_SNAKE,
		techs: [Icons.PYTHON],
	},
	PYTHON_PONG: {
		id: E_Projects.PYTHON_PONG,
		title: "Pong - Python",
		description: "Pong game implemented using PyGame",
		github: GITHUB_URL + E_Projects.PYTHON_PONG,
		techs: [Icons.PYTHON],
	},
	PYTHON_CONNECT_FOUR: {
		id: E_Projects.PYTHON_CONNECT_FOUR,
		title: "Connect Four - Python",
		description: "Connect-Four game implemented using PyGame",
		github: GITHUB_URL + E_Projects.PYTHON_CONNECT_FOUR,
		techs: [Icons.PYTHON],
	},
};
