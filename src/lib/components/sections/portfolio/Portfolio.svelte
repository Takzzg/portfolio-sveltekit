<script lang="ts">
	import Button from "../../ui/button/button.svelte";
	import MarkdownHeader from "../../markdown/MarkdownHeader.svelte";
	import MarkdownBody from "../../markdown/MarkdownBody.svelte";
	import IconifyIcon from "../../ui-custom/IconifyIcon.svelte";
	import { PortfolioTechs, type I_Technology } from "../../../assets/technologies";
	import { I_TranslationKeyPortfolio, findTranslation } from "./Portfolio.translations";

	// dom refs
	let refParent = $state<HTMLDivElement>();

	let selectedTech: I_Technology | null = $state(null);

	const setSelectedTech = async (tech: I_Technology) => {
		if (selectedTech?.id == tech.id) selectedTech = null;
		else selectedTech = tech;

		refParent?.scrollIntoView({ behavior: "smooth" });
	};
</script>

{#snippet techButton(tech: I_Technology)}
	<Button
		variant="ghost"
		class="grid h-auto grid-cols-[auto_1fr] justify-start gap-0 rounded-none border-y-2 p-0 text-2xl hover:cursor-pointer {tech.id ==
			selectedTech?.id && 'border-l-16'}"
		aria-label="tech logo banner"
		onclick={() => setSelectedTech(tech)}
	>
		<span class="flex items-center p-2">
			<IconifyIcon icon={tech.icon} width="64px" height="64px" />
		</span>
		<span class="h-full w-full py-2">
			<span class="flex h-full w-full items-center p-2">
				{tech.name}
			</span>
		</span>
	</Button>
{/snippet}

{#snippet techList()}
	<div class="flex flex-col justify-around overflow-hidden border-r-2 py-4 lg:h-full">
		<span class="p-4 text-center text-2xl text-wrap whitespace-break-spaces">
			{findTranslation(I_TranslationKeyPortfolio.list_header)}:
		</span>

		<div class="flex flex-col gap-1 overflow-y-auto">
			{#each PortfolioTechs as tech (tech.id)}
				{@render techButton(tech)}
			{/each}
		</div>
	</div>
{/snippet}

<div class="h-full lg:grid lg:grid-cols-[22rem_1fr]">
	{@render techList()}

	<div bind:this={refParent} class="grid grid-rows-[auto_1fr] items-start overflow-hidden">
		<div class="w-full border-b-2">
			<div class="m-auto w-full max-w-[896px] gap-8 lg:px-0">
				<MarkdownHeader
					selected={selectedTech}
					btnVariant="secondary"
					defaultTitle={findTranslation(I_TranslationKeyPortfolio.md_header)}
				/>
			</div>
		</div>

		<MarkdownBody selected={selectedTech} />
	</div>
</div>
