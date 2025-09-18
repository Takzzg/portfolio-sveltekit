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
		refBody?.scrollTo({ top: 0, behavior: "smooth" });
	};
</script>

{#snippet category(cat: I_Category)}
	<div class="flex w-full flex-col overflow-hidden rounded-sm lg:w-auto">
		<span class="flex items-center gap-2 bg-background p-2 px-3 text-2xl">
			<IconifyIcon icon={cat.icon} height="24px" width="24px" />
			{cat.title}
		</span>
		<div class="flex h-full w-full gap-2 overflow-auto bg-background/50 p-2">
			{#each cat.techs as tech (tech.id)}
				<Button
					variant="ghost"
					onclick={() => setSelectedTech(tech)}
					class="flex aspect-square h-auto items-center rounded-sm border-2 border-transparent p-2 hover:cursor-pointer {tech.id ==
						selectedTech?.id && 'border-white'}"
				>
					<IconifyIcon icon={tech.icon} height="64px" width="64px" />
				</Button>
			{/each}
		</div>
	</div>
{/snippet}

<div class="grid h-full grid-rows-[auto_1fr] overflow-hidden bg-orange-400">
	<h2 class="bg-background p-4 text-4xl">Main Skills</h2>

	<div bind:this={refParent} class="grid h-full gap-4 overflow-hidden p-2 lg:grid-cols-[1fr_auto]">
		<div class="grid h-full grid-rows-[auto_1fr] items-center overflow-y-auto">
			<div class="flex w-full justify-center bg-background/75">
				<MarkdownHeader selected={selectedTech} />
			</div>

			<MarkdownBody bind:this={refBody} selected={selectedTech} />
		</div>

		<div class="h-full overflow-y-auto p-2">
			<div class="grid w-sm gap-2">
				{#each Object.values(TechCategories) as cat}
					{@render category(cat)}
				{/each}
			</div>
		</div>
	</div>
</div>
