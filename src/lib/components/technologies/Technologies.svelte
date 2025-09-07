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

{#snippet techLogo(tech: I_Technology, height: number = 64)}
	<iconify-icon
		icon={tech.icon}
		style="width: {height}px; height: {height}px;"
		height="{height}px"
		width="{height}px"
	></iconify-icon>
	<span class="text-2xl">{tech.name}</span>
{/snippet}

<div class="flex h-full flex-col bg-teal-900 lg:grid lg:grid-cols-[22rem_1fr]">
	<div class="flex flex-col justify-around bg-background py-4">
		<span class="p-4 text-center text-4xl text-wrap whitespace-break-spaces">This portfolio was made using:</span>
		<div class="flex flex-col gap-1">
			{#each Technologies as tech (tech.id)}
				<button
					class=" {selectedTech?.id &&
						tech.id == selectedTech?.id &&
						'border-l-16 border-teal-700'} box-border flex items-center gap-2 bg-stone-300 p-2 align-sub text-black hover:cursor-pointer"
					aria-label="tech logo banner"
					onclick={() => setSelectedTech(tech)}
				>
					{@render techLogo(tech)}
				</button>
			{/each}
		</div>
	</div>

	<div class="flex h-full flex-col items-center overflow-hidden pb-4">
		<div class="w-full bg-stone-200">
			<div class="m-auto flex w-full max-w-[980px] items-center gap-8 p-4 text-black lg:flex-row">
				{#if selectedTech}
					<span class="flex w-full items-center gap-4">
						{@render techLogo(selectedTech, 32)}
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
					<span class="text-3xl">About this Portfolio</span>
				{/if}
			</div>
		</div>

		<StyledMarkdown {md} />
	</div>
</div>
