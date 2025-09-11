<script lang="ts">
	import IconifyIcon from "../IconifyIcon.svelte";
	import { Button } from "../ui/button";
	import { TechCategories, type I_Category, type I_Technology } from "./technologies";
</script>

{#snippet category(cat: I_Category)}
	<div class="flex w-full flex-col overflow-hidden rounded-sm lg:w-auto">
		<span class="flex items-center gap-2 bg-background p-2 px-3 text-2xl">
			<IconifyIcon icon={cat.icon} height="24px" width="24px" />
			{cat.title}
		</span>
		<div class="flex h-full w-full gap-2 overflow-auto bg-background/50 p-2">
			{#each cat.techs as tech (tech.id)}
				<Button variant="ghost" class="flex h-auto items-center rounded-sm p-2 hover:cursor-pointer">
					<IconifyIcon icon={tech.icon} height="64px" width="64px" />
				</Button>
			{/each}
		</div>
	</div>
{/snippet}

<div class="grid h-full max-w-screen grid-rows-[auto_1fr] overflow-hidden bg-orange-400">
	<h2 class="bg-stone-200 p-4 text-4xl text-black">What I do</h2>
	<div class="flex h-full flex-col items-center justify-center overflow-hidden">
		<div class="m-4 flex items-center justify-center rounded-md bg-background/75 p-8">Flavour text</div>
		<div class="grid max-h-full gap-2 overflow-y-auto p-4 lg:flex lg:flex-wrap">
			{@render category(TechCategories.FRONT_END)}
			{@render category(TechCategories.STYLING)}
			{@render category(TechCategories.DEVELOPMENT)}
			{@render category(TechCategories.BACK_END)}
			{@render category(TechCategories.DATA_BASE)}
			{@render category(TechCategories.HOSTING)}
		</div>
	</div>
</div>
