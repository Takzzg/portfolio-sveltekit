<script lang="ts">
	import MarkdownHeader from "../../markdown/MarkdownHeader.svelte";
	import MarkdownBody from "../../markdown/MarkdownBody.svelte";
	import { Button } from "../../ui/button";
	import IconifyIcon from "../../ui-custom/IconifyIcon.svelte";
	import { TechCategories, type I_Category, type I_Technology } from "$lib/assets/technologies";
	import { I_TraKeySkills, findTranslation } from "./Skills.translations";

	// dom refs
	let refParent = $state<HTMLDivElement>();

	let selectedTech: I_Technology | null = $state(null);

	const setSelectedTech = async (tech: I_Technology) => {
		if (selectedTech?.id == tech.id) selectedTech = null;
		else selectedTech = tech;

		refParent?.scrollIntoView({ behavior: "smooth" });
	};
</script>

{#snippet category(cat: I_Category)}
	<div class="flex w-full flex-col overflow-hidden rounded-sm border-2 lg:w-auto">
		<span class="flex items-center gap-2 border-b-2 p-2 px-3 text-2xl">
			<IconifyIcon icon={cat.icon} height="24px" width="24px" />
			{cat.title}
		</span>
		<div class="grid h-full w-full grid-cols-4 gap-2 p-2">
			{#each Object.values(cat.techs) as tech (tech.id)}
				<Button
					variant="ghost"
					onclick={() => setSelectedTech(tech)}
					class="flex aspect-square h-auto items-center border-2 border-transparent p-2 hover:cursor-pointer dark:hover:bg-accent/50 {tech.id ==
						selectedTech?.id && 'border-primary bg-background/50'}"
				>
					<IconifyIcon icon={tech.icon} height="64px" width="64px" />
				</Button>
			{/each}
		</div>
	</div>
{/snippet}

<div class="flex h-full flex-col items-center gap-2 overflow-hidden lg:grid lg:grid-cols-[auto_1fr] lg:items-start">
	<div class="max-h-full overflow-y-auto p-4 px-4">
		<div class="grid gap-2">
			{#each Object.values(TechCategories) as cat}
				{@render category(cat)}
			{/each}
		</div>
	</div>

	<div bind:this={refParent} class="grid h-full w-full grid-rows-[auto_1fr] items-center overflow-hidden border-l-2">
		<div class="flex w-full justify-center border-b-2">
			<MarkdownHeader selected={selectedTech} defaultTitle={findTranslation(I_TraKeySkills.md_title)} />
		</div>

		<MarkdownBody selected={selectedTech} />
	</div>
</div>
