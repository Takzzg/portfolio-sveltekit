<script lang="ts">
	import "iconify-icon";

	import StyledMarkdown from "$lib/components/markdown/StyledMarkdown.svelte";
	import { Technologies, type I_Technology } from "./technologies";
	import Button from "../ui/button/button.svelte";

	import defaultmd from "./default.md?raw";

	let selectedTech: I_Technology | null = $state(null);
	let md = $state(defaultmd);

	const fetchReadme = async (url: string) => {
		const res = await fetch(url);
		const data = await res.text();
		md = data;
	};

	const setSelectedTech = (tech: I_Technology) => {
		if (selectedTech?.id == tech.id) {
			selectedTech = null;
			md = defaultmd;
		} else {
			selectedTech = tech;
			fetchReadme(tech.readmeURL);
		}
	};
</script>

{#snippet techLogo(tech: I_Technology, height: number = 64, width: number = 300)}
	{#if tech.type == "banner"}
		<iconify-icon
			icon={tech.icon}
			style="height: {height}px; width: {width}px;"
			height="{height}px"
			width="{width}px"
		></iconify-icon>
	{:else}
		<iconify-icon
			icon={tech.icon}
			style="width: {height}px; height: {height}px;"
			height="{height}px"
			width="{height}px"
		></iconify-icon>
		<span class="text-2xl">{tech.name}</span>
	{/if}
{/snippet}

<div class="flex h-full flex-col bg-teal-900 lg:grid lg:grid-cols-[auto_1fr]">
	<div class="flex flex-wrap justify-center gap-1 bg-background p-8 lg:flex-col">
		{#each Technologies as tech (tech.id)}
			<button
				class="{selectedTech?.id &&
					tech.id == selectedTech?.id &&
					'border-2'} flex items-center gap-2 rounded-sm bg-teal-50 p-2 align-sub text-black hover:cursor-pointer hover:bg-white/5"
				aria-label="tech logo banner"
				onclick={() => setSelectedTech(tech)}
			>
				{@render techLogo(tech)}
			</button>
		{/each}
	</div>

	<div class="flex h-full flex-col items-center overflow-hidden">
		<div class="flex items-center gap-8 bg-teal-50 p-4 text-black lg:flex-row">
			{#if selectedTech}
				<span class="flex w-full items-center gap-4">
					{@render techLogo(selectedTech, 32, 150)}
				</span>
				<span class="flex flex-col gap-4 lg:flex-row">
					<Button
						variant="secondary"
						class="hover:cursor-pointer"
						onclick={() => window.open(selectedTech?.websiteURL, "_blank")}
					>
						<iconify-icon icon="lucide:globe" width="24px" class="h-6 w-6"></iconify-icon>
						<span>Visit Website</span>
						<iconify-icon icon="lucide:external-link" width="16px" class="h-4 w-4"></iconify-icon>
					</Button>
					<Button
						variant="secondary"
						class="hover:cursor-pointer"
						onclick={() => window.open(selectedTech?.githubURL, "_blank")}
					>
						<iconify-icon icon="lucide:github" width="24px" class="h-6 w-6"></iconify-icon>
						<span>GitHub Repo</span>
						<iconify-icon icon="lucide:external-link" width="16px" class="h-4 w-4"></iconify-icon>
					</Button>
				</span>
			{:else}
				<span class="text-4xl">About this Portfolio</span>
			{/if}
		</div>

		<StyledMarkdown {md} />
	</div>
</div>
