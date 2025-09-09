<script lang="ts">
	import "iconify-icon";

	import StyledMarkdown from "$lib/components/markdown/StyledMarkdown.svelte";
	import { Portfolio, type I_Technology } from "./technologies";
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

{#snippet techLogo(icon: string, height: number = 64)}
	<iconify-icon
		{icon}
		style="width: {height}px; height: {height}px;"
		height="{height}px"
		width="{height}px"
	></iconify-icon>
{/snippet}

{#snippet techHeader()}
	<div class="techHeader m-auto flex w-full max-w-[980px] grow gap-8 p-4 text-black lg:px-0">
		{#if selectedTech}
			<span class="flex w-full items-center gap-4 text-2xl">
				{@render techLogo(selectedTech.icon, 32)}
				{selectedTech.name}
			</span>
			<span class="flex flex-col gap-2 lg:flex-row">
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
			<span class="px-2 text-2xl">About this Portfolio</span>
		{/if}
	</div>
{/snippet}

{#snippet techButton(tech: I_Technology)}
	<Button
		variant="ghost"
		class="{selectedTech?.id &&
			tech.id == selectedTech?.id &&
			'border-l-16 border-orange-400'} grid h-auto grid-cols-[auto_1fr] justify-start gap-0 rounded-none p-0 text-2xl hover:cursor-pointer hover:bg-inherit!"
		aria-label="tech logo banner"
		onclick={() => setSelectedTech(tech)}
	>
		<span class="flex items-center bg-stone-200 p-2">
			{@render techLogo(tech.icon)}
		</span>
		<span class="h-full w-full py-2">
			<span class="flex h-full w-full items-center bg-primary/10 p-2">
				{tech.name}
			</span>
		</span>
	</Button>
{/snippet}

{#snippet techList()}
	<div class="flex flex-col justify-around bg-background py-4">
		<span class="p-4 text-center text-2xl text-wrap whitespace-break-spaces">This portfolio was made using:</span>

		<div class="flex flex-col gap-1">
			{#each Portfolio as tech (tech.id)}
				{@render techButton(tech)}
			{/each}
		</div>
	</div>
{/snippet}

<div class="h-full bg-teal-700/50 lg:grid lg:grid-cols-[22rem_1fr]">
	{@render techList()}

	<div class="grid grid-rows-[auto_1fr] items-start overflow-hidden py-4">
		{@render techHeader()}

		<StyledMarkdown {md} />
	</div>
</div>

<style lang="postcss">
	@reference '@/app.css';

	.techHeader {
		position: relative;
	}
	.techHeader,
	.techHeader::before,
	.techHeader::after {
		@apply bg-stone-200;
	}
	.techHeader::before,
	.techHeader::after {
		content: " ";
		position: absolute;
		width: 2rem;
		height: 100%;
		padding: 0;
		top: 0;
	}
	.techHeader::before {
		right: 100%;
	}
	.techHeader::after {
		left: 100%;
	}
</style>
