export enum E_Projects {
	CONTACTS_APP = "contacts-app",
}

export interface I_Project {
	id: string;
    title: string;
    description: string;
	website: string;
	github: string;
}

export const AllProjects: Record<keyof typeof E_Projects, I_Project> = {
    CONTACTS_APP: {
        id: E_Projects.CONTACTS_APP,
        title: "Contacts App",
        description: "Exercise project focused on drag-n-drop functionality", 
        website: "https://contacts-app-guidoq.vercel.app",
        github: "https://github.com/Takzzg/contacts-app"
    },
};
