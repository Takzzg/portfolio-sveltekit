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

{#snippet techLogo(tech: I_Technology)}
	{#if tech.type == "banner"}
		<iconify-icon icon={tech.icon} class="h-[64px] w-[300px]" height="64px" width="300px"></iconify-icon>
	{:else}
		<iconify-icon icon={tech.icon} class="h-[64px] w-[64px]" height="64px" width="64px"></iconify-icon>
		<span class="text-2xl">{tech.name}</span>
	{/if}
{/snippet}

<div class="m-auto grid w-full grow-0 grid-cols-[auto_1fr] items-center">
	<div class="flex flex-col justify-center gap-1 p-8">
		{#each Technologies as tech (tech.id)}
			<button
				class="{selectedTech?.id &&
					tech.id == selectedTech?.id &&
					'border-2'} flex items-center gap-4 rounded-sm p-2 align-sub hover:cursor-pointer hover:bg-white/5"
				aria-label="tech logo banner"
				onclick={() => setSelectedTech(tech)}
			>
				{@render techLogo(tech)}
			</button>
		{/each}
	</div>

	<div class="flex h-full w-full flex-col items-center bg-primary/25 p-4">
		{#if selectedTech}
			<div class="flex w-full items-center gap-8 p-2">
				<span class="flex w-full items-center gap-4">
					{@render techLogo(selectedTech)}
				</span>
				<Button
					variant="outline"
					class="hover:cursor-pointer hover:bg-white/5"
					onclick={() => window.open(selectedTech?.websiteURL, "_blank")}
				>
					<iconify-icon icon="lucide:globe" width="24px" class="h-6 w-6"></iconify-icon>
					<span>Visit Website</span>
					<iconify-icon icon="lucide:external-link" width="16px" class="h-4 w-4"></iconify-icon>
				</Button>
				<Button
					variant="outline"
					class="hover:cursor-pointer hover:bg-white/5"
					onclick={() => window.open(selectedTech?.githubURL, "_blank")}
				>
					<iconify-icon icon="lucide:github" width="24px" class="h-6 w-6"></iconify-icon>
					<span>GitHub Repo</span>
					<iconify-icon icon="lucide:external-link" width="16px" class="h-4 w-4"></iconify-icon>
				</Button>
			</div>
		{/if}

		<StyledMarkdown {md} />
	</div>
</div>
