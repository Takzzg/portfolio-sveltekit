<script lang="ts">
	import IconifyIcon from "../IconifyIcon.svelte";
	import MarkdownHeader from "../markdown/MarkdownHeader.svelte";
	import MarkdownBody from "../markdown/MarkdownBody.svelte";
	import { Button } from "../ui/button";
	import { TechCategories, type I_Category, type I_Technology } from "./technologies";

	// dom refs
	let refParent = $state<HTMLDivElement>();
	let refBody = $state<MarkdownBody>();

	let selectedTech: I_Technology | null = $state(null);

	const setSelectedTech = async (tech: I_Technology) => {
		if (selectedTech?.id == tech.id) {
			selectedTech = null;
		} else {
			selectedTech = tech;
		}
		refParent?.scrollIntoView({ behavior: "smooth" });
	};
</script>

{#snippet category(cat: I_Category)}
	<div class="flex w-full flex-col overflow-hidden rounded-sm lg:w-auto">
		<span class="flex items-center gap-2 bg-background p-2 px-3 text-2xl">
			<IconifyIcon icon={cat.icon} height="24px" width="24px" />
			{cat.title}
		</span>
		<div class="grid h-full w-full grid-cols-4 gap-2 bg-background/75 p-2">
			{#each Object.values(cat.techs) as tech (tech.id)}
				<Button
					variant="ghost"
					onclick={() => setSelectedTech(tech)}
					class="flex aspect-square h-auto items-center border-4 border-transparent p-2 hover:cursor-pointer hover:border-background/50 dark:hover:bg-transparent {tech.id ==
						selectedTech?.id && 'border-white'}"
				>
					<IconifyIcon icon={tech.icon} height="64px" width="64px" />
				</Button>
			{/each}
		</div>
	</div>
{/snippet}

<div class="grid h-full grid-rows-[auto_1fr] bg-orange-400">
	<h2 class="bg-background p-4 text-4xl">Main Skills</h2>

	<div class="flex flex-col items-center overflow-hidden lg:grid lg:grid-cols-[auto_1fr] lg:items-start">
		<div class="max-h-full overflow-y-auto p-2 px-4">
			<div class="grid gap-2">
				{#each Object.values(TechCategories) as cat}
					{@render category(cat)}
				{/each}
			</div>
		</div>

		<div bind:this={refParent} class="grid max-h-full w-full grid-rows-[auto_1fr] items-center overflow-y-auto">
			<div class="flex w-full justify-center bg-background/75">
				<MarkdownHeader selected={selectedTech} />
			</div>

			<MarkdownBody selected={selectedTech} />
		</div>
	</div>
</div>
