<script lang="ts">
	import Splash from "$lib/components/Splash.svelte";
	import Portfolio from "$lib/components/technologies/Portfolio.svelte";
	import Categories from "$lib/components/technologies/Categories.svelte";
	import { Button } from "@/lib/components/ui/button";

	let height: number = $state(0);
</script>

{#snippet sectionBtn(text: string, onclick = () => {})}
	<Button
		{onclick}
		variant="ghost"
		class="border-2 text-background border-background/50 hover:cursor-pointer"
	>
		{text}
	</Button>
{/snippet}

<div class="grid h-full overflow-y-scroll" style="--height:{height};" bind:clientHeight={height}>
	<div style="height: {height}px;">
		<Splash />
	</div>

	<div class="fixedHeight">
		<Categories />
	</div>

	<div class="fixedHeight">
		<Portfolio />
	</div>

	<div class="absolute right-0 bottom-0 m-8 flex items-center gap-2">
		{@render sectionBtn("Prev")}
		{@render sectionBtn("Next")}
	</div>
</div>

<style>
	@media (min-width: 767px) {
		.fixedHeight {
			height: calc(var(--height) * 1px);
		}
	}
</style>
