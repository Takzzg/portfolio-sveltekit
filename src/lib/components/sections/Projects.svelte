<script lang="ts">
	import { Icons } from "$lib/assets/icons";
	import { URL_GITHUB_PROFILE } from "$lib/assets/urls";
	import { translate } from "$lib/utils/translations";
	import { AllProjects, type I_Project } from "../../assets/projects";
	import IconifyIcon from "../ui-custom/IconifyIcon.svelte";
	import ToolTip from "../ui-custom/ToolTip.svelte";
</script>

{#snippet LinkBtn(text: string, icon: string, link?: string)}
	<a href={link} target="_blank" class="flex items-center gap-2 rounded-md border-2 p-2">
		<IconifyIcon {icon} height="32px" width="32px" />
		{text}
	</a>
{/snippet}

{#snippet projectCard(project: I_Project)}
	<div class="flex w-sm flex-col gap-2 rounded-md border-2 p-2">
		<span class="flex items-center justify-between text-xl">
			{translate(project.title)}
		</span>

		<span class="flex items-center gap-2">
			{#each project.techs as icon}
				<span class="group relative flex items-center justify-center">
					<span class="flex group-hover:scale-125">
						<IconifyIcon {icon} height="24px" width="24px" />
					</span>
					<ToolTip classes="hidden group-hover:block" text={icon.split(":").at(-1)?.split("-")[0] ?? "ERROR"} />
				</span>
			{/each}
		</span>

		<span>{translate(project.description)}</span>

		<span class="flex h-full items-end justify-center gap-2">
			{@render LinkBtn("Github repo", Icons.GITHUB, URL_GITHUB_PROFILE + "/" + project.repo)}

			{#if project.website}
				{@render LinkBtn("Website", Icons.GLOBE, project.website)}
			{/if}
		</span>
	</div>
{/snippet}

<div class="flex h-full w-full flex-col items-center overflow-hidden">
	<span class="w-full bg-background p-2 text-2xl">Check out my Github</span>

	<div class="m-auto flex max-h-full flex-wrap justify-center gap-4 overflow-x-auto p-2 pb-4">
		{#each Object.values(AllProjects) as project (project.id)}
			{@render projectCard(project)}
		{/each}
	</div>
</div>
