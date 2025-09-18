<script lang="ts">
	import IconifyIcon from "../IconifyIcon.svelte";
	import { AllGames, AllProjects } from "./projects";
</script>

{#snippet LinkBtn(text: string, icon: string, link?: string, disabled?: boolean)}
	<span class="flex items-center gap-2 {disabled ? 'text-secondary' : 'hover:cursor-pointer'}">
		<IconifyIcon {icon} height="32px" width="32px" />
		{#if disabled}
			<span>{text}</span>
		{:else}
			<a href={link} target="_blank">{text}</a>
		{/if}
	</span>
{/snippet}

<div>
	<span>Check out my projects</span>
	<div class="flex flex-wrap items-start justify-center gap-2 p-2">
		{#each Object.values(AllProjects) as project (project.id)}
			<div class="flex w-full max-w-lg flex-col bg-red-500 p-2">
				<span>{project.title} - {project.year}</span>
				<span>{project.description}</span>
				{@render LinkBtn("Github", "logos:github-icon", project.github)}
				{@render LinkBtn(
					project.websiteURL ? "Website" : (project.websiteError as string),
					"lucide:globe",
					project.websiteURL,
					project.websiteURL ? false : true,
				)}
			</div>
		{/each}
	</div>

	<span>I also made some games...</span>
	<div class="flex flex-wrap items-start justify-center gap-2 p-2">
		{#each Object.values(AllGames) as game (game.id)}
			<div class="flex w-full max-w-lg flex-col bg-red-500 p-2">
				<span>{game.title} - {game.year}</span>
				<span>{game.description}</span>
				{@render LinkBtn("Github", "logos:github-icon", game.github)}
			</div>
		{/each}
	</div>
</div>
