<script lang="ts">
	import { Icons } from "$lib/assets/icons";
	import { AllGames, AllProjects, type I_Game, type I_Project } from "../../assets/projects";
	import IconifyIcon from "../ui-custom/IconifyIcon.svelte";
</script>

{#snippet LinkBtn(text: string, icon: string, link?: string)}
	<a href={link} target="_blank" class="flex items-center gap-2 rounded-md border-2 p-2">
		<IconifyIcon {icon} height="32px" width="32px" />
		{text}
	</a>
{/snippet}

{#snippet projectCard(project: I_Project)}
	<div class="flex w-sm flex-col gap-2 border-2 p-2">
		<span class="flex items-center justify-between text-xl">
			{project.title}
		</span>

		<span class="flex items-center gap-2">
			{#each project.techs as icon}
				<IconifyIcon {icon} height="24px" width="24px" />
			{/each}
		</span>

		<span>{project.description}</span>

		<span class="flex items-center justify-center gap-2">
			{@render LinkBtn("Github", Icons.GITHUB, project.github)}

			{#if project.website}
				{@render LinkBtn("Website", Icons.GLOBE, project.website)}
			{/if}
		</span>
	</div>
{/snippet}

{#snippet gameCard(game: I_Game)}
	<div class="flex w-sm flex-col gap-2 border-2 p-2">
		<span class="flex items-center justify-between text-xl">
			<IconifyIcon icon={game.lang} height="24px" width="24px" />
			{game.title}
		</span>

		<span>{game.description}</span>

		<span class="flex items-center justify-center gap-2">
			{@render LinkBtn("Github", Icons.GITHUB, game.github)}
		</span>
	</div>
{/snippet}

<div class="flex h-full w-full flex-col items-center">
	<span class="w-full bg-background p-2 text-2xl">Check out my Github</span>

	<div class="m-auto flex max-h-full flex-wrap justify-center gap-4">
		{#each Object.values(AllProjects) as project (project.id)}
			{@render projectCard(project)}
		{/each}

		{#each Object.values(AllGames) as game (game.id)}
			{@render gameCard(game)}
		{/each}
	</div>
</div>
