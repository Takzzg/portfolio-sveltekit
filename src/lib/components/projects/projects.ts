const GITHUB_URL = "https://github.com/Takzzg/";

export enum E_Projects {
	CONTACTS_APP = "contacts-app",
	MELI_TECH_TEST = "prueba-tecnica-meli",
	NEXTDOTS_CHALLENGE = "challengeNextDots",
	PI_HENRY_VIDEOGAMES = "PI-Videogames-Guido",
	PG_HENRY_FOODFAST = "food-fast",
	CHALLENGE_25WATTS = "25Watts",
}

export type I_Project = {
	id: string;
	title: string;
	year: number;
	description: string;
	github: string;
	websiteURL?: string;
	websiteError?: string;
};

export const AllProjects: Record<keyof typeof E_Projects, I_Project> = {
	CONTACTS_APP: {
		id: E_Projects.CONTACTS_APP,
		title: "Contacts App",
		year: 2022,
		description: "Next.js app focused on drag-n-drop functionality, part of a technical interview for Front.id",
		github: GITHUB_URL + E_Projects.CONTACTS_APP,
		websiteURL: "https://contacts-app-guidoq.vercel.app",
	},
	MELI_TECH_TEST: {
		id: E_Projects.MELI_TECH_TEST,
		title: "MercadoLibre challenge",
		year: 2024,
		description: "Next.js app part of a technical interview for MercadoLibre",
		github: GITHUB_URL + E_Projects.MELI_TECH_TEST,
		websiteError: "API down",
	},
	NEXTDOTS_CHALLENGE: {
		id: E_Projects.NEXTDOTS_CHALLENGE,
		title: "NextDots challenge",
		year: 2019,
		description: "React-Native app part of a technical interview for NextDots",
		github: GITHUB_URL + E_Projects.NEXTDOTS_CHALLENGE,
		websiteError: "Mobile app",
	},
	CHALLENGE_25WATTS: {
		id: E_Projects.CHALLENGE_25WATTS,
		title: "25 Watts challenge",
		year: 2020,
		description: "Static HTML site using Bootstrap and JQuery, part of a technical interview for 25Watts",
		github: GITHUB_URL + E_Projects.CHALLENGE_25WATTS,
		websiteURL: "https://25-watts-challenge-guidoq.vercel.app/",
	},
	PI_HENRY_VIDEOGAMES: {
		id: E_Projects.PI_HENRY_VIDEOGAMES,
		title: "Inividual Project - SoyHenry",
		year: 2022,
		description: "Mono-repo containing an Express.js backend and a React.js frontend",
        github: GITHUB_URL + E_Projects.PI_HENRY_VIDEOGAMES,
        websiteError: "Host down",
	},
	PG_HENRY_FOODFAST: {
		id: E_Projects.PG_HENRY_FOODFAST,
		title: "Group Project - SoyHenry",
		year: 2022,
		description: "Mono-repo containing an Express.js backend, a React.js frontend and a telegram bot",
		github: GITHUB_URL + E_Projects.PG_HENRY_FOODFAST,
		websiteError: "Host down",
	},
};

export enum E_Games {
	GRIDDLERS_ULP = "Griddlers-ULP-2025",
	PYTHON_TETRIS = "Python_Tetris",
	PYTHON_SNAKE = "Python_Snake",
	PYTHON_PONG = "Python_Pong",
	PYTHON_CONNECT_FOUR = "Python_Connect-Four",
	GODOT_HORDE_SURVIVOR = "Godot_horde-survivor",
	LIBGDX_PONG = "LibGDX_Pong",
}

export type I_Game = {
	id: string;
	title: string;
	year: number;
	description: string;
	github: string;
};

export const AllGames: Record<keyof typeof E_Games, I_Game> = {
	LIBGDX_PONG: {
		id: E_Games.LIBGDX_PONG,
		title: "Pong (LibGDX)",
		year: 2025,
		description: "Pong game implemented using PyGame",
		github: GITHUB_URL + E_Games.LIBGDX_PONG,
	},
	GODOT_HORDE_SURVIVOR: {
		id: E_Games.GODOT_HORDE_SURVIVOR,
		title: "Horde Survivor (Godot)",
		year: 2025,
		description: "Horde Survivor game implemented using PyGame",
		github: GITHUB_URL + E_Games.GODOT_HORDE_SURVIVOR,
	},
	GRIDDLERS_ULP: {
		id: E_Games.GRIDDLERS_ULP,
		title: "Griddlers ULP",
		year: 2016,
		description: "Griddlers game as a console app",
		github: GITHUB_URL + E_Games.GRIDDLERS_ULP,
	},
	PYTHON_TETRIS: {
		id: E_Games.PYTHON_TETRIS,
		title: "Tetris (Python)",
		year: 2021,
		description: "Tetris game implemented using PyGame",
		github: GITHUB_URL + E_Games.PYTHON_TETRIS,
	},
	PYTHON_SNAKE: {
		id: E_Games.PYTHON_SNAKE,
		title: "Snake (Python)",
		year: 2021,
		description: "Snake game implemented using PyGame",
		github: GITHUB_URL + E_Games.PYTHON_SNAKE,
	},
	PYTHON_PONG: {
		id: E_Games.PYTHON_PONG,
		title: "Pong (Python)",
		year: 2021,
		description: "Pong game implemented using PyGame",
		github: GITHUB_URL + E_Games.PYTHON_PONG,
	},
	PYTHON_CONNECT_FOUR: {
		id: E_Games.PYTHON_CONNECT_FOUR,
		title: "Connect-Four (Python)",
		year: 2021,
		description: "Connect-Four game implemented using PyGame",
		github: GITHUB_URL + E_Games.PYTHON_CONNECT_FOUR,
	},
};
