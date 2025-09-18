<script lang="ts">
	import StyledMarkdown from "$lib/components/markdown/StyledMarkdown.svelte";
	import { Portfolio, type I_Technology } from "./technologies";
	import Button from "../ui/button/button.svelte";
	import IconifyIcon from "../IconifyIcon.svelte";

	// github urls
	const GITHUB_URL = "https://github.com";
	const GITHUB_API_URL = "https://api.github.com";

	// dom refs
	let refParent = $state<HTMLDivElement>();
	let refMarkdown = $state<StyledMarkdown>();

	let selectedTech: I_Technology | null = $state(null);
	let loadingMD = $state(false);
	let md = $state<string | null>(null);

	const fetchReadme = async (github: string) => {
        loadingMD = true;
		const res = await fetch(`${GITHUB_API_URL}/repos/${github}/readme`, {
			headers: { Accept: "application/vnd.github.html+json" },
		});
		const data = await res.text();
        loadingMD = false;
		md = data;
	};

	const setSelectedTech = async (tech: I_Technology) => {
		if (selectedTech?.id == tech.id) {
			selectedTech = null;
			md = null;
		} else {
			selectedTech = tech;
			if (tech.github) await fetchReadme(tech.github);
		}
		refParent?.scrollIntoView({ behavior: "smooth" });
		refMarkdown?.scrollTo({ top: 0, behavior: "smooth" });
	};
</script>

{#snippet techHeader()}
	<div class="techHeader m-auto flex w-full max-w-[980px] grow gap-8 p-4 text-black lg:px-0">
		{#if selectedTech}
			<span class="flex w-full items-center gap-4 text-2xl">
				<IconifyIcon icon={selectedTech.icon} width="32px" height="32px" />
				{selectedTech.name}
			</span>
			<span class="flex flex-col gap-2 lg:flex-row">
				<Button
					variant="secondary"
					class="hover:cursor-pointer"
					onclick={() => window.open(selectedTech?.website, "_blank")}
				>
					<iconify-icon icon="lucide:globe" width="24px" class="h-6 w-6"></iconify-icon>
					<span>Visit Website</span>
					<iconify-icon icon="lucide:external-link" width="16px" class="h-4 w-4"></iconify-icon>
				</Button>
				<Button
					variant="secondary"
					class="hover:cursor-pointer"
					onclick={() => window.open(`${GITHUB_URL}/${selectedTech?.github}/#readme`, "_blank")}
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
			<IconifyIcon icon={tech.icon} width="32px" height="32px" />
		</span>
		<span class="h-full w-full py-2">
			<span class="flex h-full w-full items-center bg-primary/10 p-2">
				{tech.name}
			</span>
		</span>
	</Button>
{/snippet}

{#snippet techList()}
	<div class="flex flex-col justify-around overflow-hidden bg-background py-4 lg:h-full">
		<span class="p-4 text-center text-2xl text-wrap whitespace-break-spaces">This portfolio was made using:</span>

		<div class="flex flex-col gap-1 overflow-y-auto">
			{#each Portfolio as tech (tech.id)}
				{@render techButton(tech)}
			{/each}
		</div>
	</div>
{/snippet}

<div class="h-full bg-teal-700 lg:grid lg:grid-cols-[22rem_1fr]">
	{@render techList()}

	<div bind:this={refParent} class="grid grid-rows-[auto_1fr] items-start overflow-hidden py-4">
		{@render techHeader()}

		{#if !selectedTech}
			<div class="bg-red-500">No tech selected</div>
		{:else if loadingMD}
			<div class="bg-red-500">Loading Readme...</div>
		{:else if !md}
			<div class="bg-red-500">No readme for selected tech</div>
		{:else}
			<StyledMarkdown bind:this={refMarkdown} {md} />
		{/if}
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
