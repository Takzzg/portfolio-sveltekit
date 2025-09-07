<script lang="ts">
	import "iconify-icon";

	import StyledMarkdown from "$lib/components/markdown/StyledMarkdown.svelte";
	import { Technologies, type I_Technology } from "./technologies";

	let defaultMarkdown = `## Want to learn more ?\nClick on any item on the left and take a peek at it's readme.md file!`;

	let selectedTech: I_Technology | null = $state(null);
	let md = $state(defaultMarkdown);

	const fetchReadme = async (url: string) => {
		const res = await fetch(url);
		const data = await res.text();
		md = data;
	};

	const setSelectedTech = (tech: I_Technology) => {
		if (selectedTech?.id == tech.id) {
			selectedTech = null;
			md = defaultMarkdown;
		} else {
			selectedTech = tech;
			fetchReadme(tech.readmeURL);
		}
	};
</script>

{#snippet techButton(tech: I_Technology)}
	<button
		class="{selectedTech?.id &&
			tech.id == selectedTech?.id &&
			'border-2'} flex items-center rounded-sm p-2 align-sub hover:cursor-pointer hover:bg-white/5"
		aria-label="tech logo banner"
		onclick={() => setSelectedTech(tech)}
	>
		{#if tech.type == "banner"}
			<iconify-icon icon={tech.icon} class="h-[64px] w-[300px]" height="64px" width="300px"></iconify-icon>
		{:else}
			<iconify-icon icon={tech.icon} class="h-[64px] w-[64px]" height="64px" width="64px"></iconify-icon>
			<span class="text-2xl">{tech.name}</span>
		{/if}
	</button>
{/snippet}

<div class="m-auto grid w-full grid-cols-[auto_1fr] items-center gap-4 p-4">
	<h3 class="col-span-2 text-center text-xl">This portfolio was made using:</h3>

	<div class="flex flex-col justify-center gap-1">
		{#each Technologies as tech (tech.id)}
			{@render techButton(tech)}
		{/each}
	</div>

	<StyledMarkdown {md} />
</div>
