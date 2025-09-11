<script lang="ts">
	import IconifyIcon from "../IconifyIcon.svelte";
	import { E_Categories, TechCategories, type I_Category, type I_Technology } from "./technologies";
</script>

{#snippet category(cat: I_Category)}
	<div class="flex w-full flex-col overflow-hidden rounded-sm lg:w-auto">
		<span class="flex items-center gap-2 bg-background p-2 px-3 text-2xl">
			<IconifyIcon icon={cat.icon} height="24px" width="24px" />
			{cat.title}
		</span>
		<div class="flex h-full w-full gap-2 overflow-auto bg-background/50 p-2">
			{#each cat.techs as tech (tech.id)}
				{@render techLogo(tech)}
			{/each}
		</div>
	</div>
{/snippet}

{#snippet techLogo(tech: I_Technology)}
	<span class="flex items-center rounded-sm p-4">
		<IconifyIcon icon={tech.icon} height="64px" width="64px" />
	</span>
{/snippet}

<div class="grid h-full max-w-screen grid-rows-[auto_1fr] overflow-hidden bg-orange-400">
	<h2 class="bg-stone-200 p-4 text-4xl text-black">What I do</h2>
	<div class="grid h-full grid-cols-[1fr_auto] overflow-hidden">
		<div class="m-4 flex items-center justify-center rounded-md bg-background/75">Flavour text</div>
		<div class="h-full overflow-hidden">
			<div class="grid max-h-full grid-cols-1 gap-2 overflow-y-auto p-4">
				{@render category(TechCategories.FRONT_END)}
				{@render category(TechCategories.STYLING)}
				{@render category(TechCategories.DEVELOPMENT)}
				{@render category(TechCategories.BACK_END)}
				{@render category(TechCategories.DATA_BASE)}
				{@render category(TechCategories.HOSTING)}
			</div>
		</div>
	</div>
</div>
