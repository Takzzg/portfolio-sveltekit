<script lang="ts">
	import IconifyIcon from "../IconifyIcon.svelte";
	import StyledMarkdown from "../markdown/StyledMarkdown.svelte";
	import { Button } from "../ui/button";
	import { TechCategories, type I_Category, type I_Technology } from "./technologies";

	// markdown files
	import defaultMD from "./default.md?raw";
	import loadingMD from "./loading.md?raw";

	// github urls
	const GITHUB_URL = "https://github.com";
	const GITHUB_API_URL = "https://api.github.com";

	// dom refs
	let parentElement: HTMLDivElement;
	let markdownElement: StyledMarkdown;

	let md = $state(defaultMD);
	let selectedTech: I_Technology | null = $state(null);

	const fetchReadme = async (github: string) => {
		md = loadingMD;
		const res = await fetch(`${GITHUB_API_URL}/repos/${github}/readme`, {
			headers: { Accept: "application/vnd.github.html+json" },
		});
		const data = await res.text();
		md = data;
	};

	const setSelectedTech = async (tech: I_Technology) => {
		if (selectedTech?.id == tech.id) {
			selectedTech = null;
			md = defaultMD;
		} else {
			selectedTech = tech;
			await fetchReadme(tech.github);
		}
		parentElement.scrollIntoView({ behavior: "smooth" });
		markdownElement.scrollTo({ top: 0, behavior: "smooth" });
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

{#snippet techHeader()}
	<div class="flex w-full max-w-[980px] grow gap-8 p-4 lg:px-0">
		{#if selectedTech}
			<span class="flex w-full items-center gap-4 text-2xl">
				<iconify-icon
					icon={selectedTech.icon}
					style="width: 32px; height: 32px;"
					height="32px"
					width="32px"
				></iconify-icon>
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

<div class="grid h-full grid-rows-[auto_1fr] overflow-hidden bg-orange-400">
	<h2 class="bg-background p-4 text-4xl">Main Skills</h2>

	<div bind:this={parentElement} class="grid h-full gap-4 overflow-hidden p-2 lg:grid-cols-[auto_1fr]">
		<div class="h-full overflow-y-auto p-2">
			<div class="grid w-sm gap-2">
				{@render category(TechCategories.FRONT_END)}
				{@render category(TechCategories.STYLING)}
				{@render category(TechCategories.DEVELOPMENT)}
				{@render category(TechCategories.BACK_END)}
				{@render category(TechCategories.DATA_BASE)}
				{@render category(TechCategories.HOSTING)}
			</div>
		</div>

		<div class="grid h-full grid-rows-[auto_1fr] items-center overflow-y-auto">
			<div class="flex w-full justify-center bg-background/75">
				{@render techHeader()}
			</div>

			<StyledMarkdown bind:this={markdownElement} {md} />
		</div>
	</div>
</div>
