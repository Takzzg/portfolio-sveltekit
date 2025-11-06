<script lang="ts">
	import Button from "../ui/button/button.svelte";
	import MarkdownHeader from "../markdown/MarkdownHeader.svelte";
	import MarkdownBody from "../markdown/MarkdownBody.svelte";
	import IconifyIcon from "../ui-custom/IconifyIcon.svelte";
	import { PortfolioTechs, type I_Technology } from "../../assets/technologies";

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
		class="{selectedTech?.id &&
			tech.id == selectedTech?.id &&
			'border-l-16 border-orange-400'} grid h-auto grid-cols-[auto_1fr] justify-start gap-0 rounded-none p-0 text-2xl hover:cursor-pointer hover:bg-inherit!"
		aria-label="tech logo banner"
		onclick={() => setSelectedTech(tech)}
	>
		<span class="flex items-center bg-primary/25 p-2">
			<IconifyIcon icon={tech.icon} width="64px" height="64px" />
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
			{#each PortfolioTechs as tech (tech.id)}
				{@render techButton(tech)}
			{/each}
		</div>
	</div>
{/snippet}

<div class="h-full bg-teal-700 lg:grid lg:grid-cols-[22rem_1fr]">
	{@render techList()}

	<div bind:this={refParent} class="grid grid-rows-[auto_1fr] items-start overflow-hidden py-4">
		<div class="techHeader m-auto max-w-[896px] w-full gap-8 text-black lg:px-0">
			<MarkdownHeader selected={selectedTech} btnVariant="secondary" defaultTitle="About this portfolio" />
		</div>

		<MarkdownBody selected={selectedTech} />
	</div>
</div>

<style lang="postcss">
	@reference 'tailwindcss';

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
