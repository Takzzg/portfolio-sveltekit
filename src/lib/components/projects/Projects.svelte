<script lang="ts">
	import IconifyIcon from "../IconifyIcon.svelte";
	import { AllProjects } from "./projects";
</script>

{#snippet LinkBtn(text: string, icon: string, link?: string)}
	<span class="flex items-center gap-2 hover:cursor-pointer">
		<IconifyIcon {icon} height="32px" width="32px" />
		<a href={link} target="_blank">{text}</a>
	</span>
{/snippet}

<div class="flex h-full flex-col items-center bg-blue-500">
	<span class="w-full bg-background p-2 text-2xl">Check out my Github</span>

	<div class="flex flex-wrap items-start justify-center gap-2 p-2">
		{#each Object.values(AllProjects) as project (project.id)}
			<div class="flex w-full max-w-md flex-col bg-red-500 p-2 xl:max-w-lg">
				<span>{project.title} - {project.year}</span>
				<span>{project.description}</span>
				<span class="flex items-center justify-center gap-2">
					{@render LinkBtn("Github", "logos:github-icon", project.github)}
					{#if project.websiteURL}
						{@render LinkBtn("Website", "lucide:globe", project.websiteURL)}
					{/if}
				</span>
			</div>
		{/each}
	</div>
</div>
