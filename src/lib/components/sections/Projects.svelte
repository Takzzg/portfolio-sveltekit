<script lang="ts">
	import { AllGames, AllProjects, type I_Game, type I_Project } from "../../assets/projects";
	import IconifyIcon from "../ui-custom/IconifyIcon.svelte";
</script>

{#snippet LinkBtn(text: string, icon: string, link?: string)}
	<a href={link} target="_blank" class="flex items-center gap-2">
		<IconifyIcon {icon} height="32px" width="32px" />
		{text}
	</a>
{/snippet}

{#snippet projectCard(project: I_Project)}
	<div class="flex w-sm flex-col gap-2 bg-background/50 p-2">
		<span class="flex items-center justify-between text-xl">
			<span>{project.title}</span>
			<span class="flex items-center gap-2">
				<IconifyIcon icon={"lucide:calendar-days"} height="24px" width="24px" />
				{project.year}
			</span>
		</span>
        
		<span class="flex items-center gap-2">
			{#each project.techs as icon}
				<IconifyIcon {icon} height="24px" width="24px" />
			{/each}
		</span>

		<span>{project.description}</span>

		{@render LinkBtn("Github", "logos:github-icon", project.github)}

		{#if project.website}
			{@render LinkBtn("Website", "lucide:globe", project.website)}
		{/if}
	</div>
{/snippet}

{#snippet gameCard(game: I_Game)}
	<div class="flex w-sm flex-col gap-2 bg-background/50 p-2">
		<span class="flex items-center justify-between text-xl">
			<span>
				<IconifyIcon icon={game.lang} height="24px" width="24px" />
				{game.title}
			</span>
			<span class="flex items-center gap-2">
				<IconifyIcon icon={"lucide:calendar-days"} height="24px" width="24px" />
				{game.year}
			</span>
		</span>

		<span>{game.description}</span>

		{@render LinkBtn("Github", "logos:github-icon", game.github)}
	</div>
{/snippet}

<div class="flex h-full w-full flex-col items-center bg-blue-500">
	<span class="w-full bg-background p-2 text-2xl">Check out my Github</span>

	<div class="flex max-w-7xl flex-wrap justify-center gap-2 p-2">
		{#each Object.values(AllProjects) as project (project.id)}
			{@render projectCard(project)}
		{/each}

		{#each Object.values(AllGames) as game (game.id)}
			{@render gameCard(game)}
		{/each}
	</div>
</div>
