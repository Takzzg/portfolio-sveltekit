<script lang="ts">
	import IconifyIcon from "../IconifyIcon.svelte";
	import { AllGames, AllProjects } from "./projects";
</script>

{#snippet LinkBtn(text: string, icon: string, link?: string)}
	<span class="flex items-center gap-2 hover:cursor-pointer">
		<IconifyIcon {icon} height="32px" width="32px" />
		<a href={link} target="_blank">{text}</a>
	</span>
{/snippet}

<div class="flex h-full w-full flex-col items-center bg-blue-500">
	<span class="w-full bg-background p-2 text-2xl">Check out my Github</span>

	<div class="flex flex-wrap max-w-7xl gap-2 p-2 justify-center">
		{#each Object.values(AllProjects) as project (project.id)}
			<div class="flex flex-col bg-background/50 p-2 w-sm">
				<span>{project.title} - {project.year}</span>
				<span>{project.description}</span>
				<span class="flex items-center justify-center gap-2">
					{@render LinkBtn("Github", "logos:github-icon", project.github)}
					{#if project.website}
						{@render LinkBtn("Website", "lucide:globe", project.website)}
					{/if}
				</span>
			</div>
		{/each}
	</div>

	<div class="flex flex-wrap max-w-7xl gap-2 p-2 justify-center">
		{#each Object.values(AllGames) as game (game.id)}
			<div class="flex flex-col bg-background/50 p-2 w-sm">
				<span>{game.title} - {game.year}</span>
				<span>{game.description}</span>
				{@render LinkBtn("Github", "logos:github-icon", game.github)}
			</div>
		{/each}
	</div>
</div>
