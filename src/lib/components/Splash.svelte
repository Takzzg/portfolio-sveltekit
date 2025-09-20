<script lang="ts">
	import { m } from "$lib/paraglide/messages";
	import Intersection from "./Intersection.svelte";

	let refPaletteLeft = $state<HTMLDivElement>();
	let refPaletteRight = $state<HTMLDivElement>();
</script>

{#snippet palette()}
	<div class="flex gap-2 bg-background p-2 lg:flex-col">
		<div class="flex w-8 -rotate-90 items-center justify-center p-2 lg:w-auto lg:rotate-0">background</div>
		<div class="grid grid-cols-3 gap-2 lg:grid-cols-1">
			<div class="flex aspect-square items-center justify-center bg-stone-200 p-2 text-black">stone-200</div>
			<div class="flex aspect-square items-center justify-center bg-orange-400 p-2 text-black">orange-400</div>
			<div class="flex aspect-square items-center justify-center bg-teal-700 p-2 text-white">teal-700</div>
		</div>
	</div>
{/snippet}

<div class="relative flex min-h-[800px] h-full max-w-full overflow-clip flex-col items-center justify-center bg-teal-700">
	<h1 class="text-5xl">{m.tiny_crisp_skate_lead()}</h1>

	<div class="p-10">
		<h3 class="text-3xl">{m.new_free_cougar_leap()}</h3>
		<h5 class="text-2xl">{m.sharp_trite_bulldog_dash()}</h5>
	</div>

	<Intersection
		threshold={1}
		className="absolute top-4 lg:left-4"
		onObserve={(entry) => refPaletteLeft?.classList.toggle("hidePaletteLeft", !entry.isIntersecting)}
	>
		<div bind:this={refPaletteLeft} class="palette hidePaletteLeft">
			{@render palette()}
		</div>
	</Intersection>

	<Intersection
		threshold={1}
		className="absolute bottom-4 lg:bottom-auto lg:top-4 lg:right-4"
		onObserve={(entry) => refPaletteRight?.classList.toggle("hidePaletteRight", !entry.isIntersecting)}
	>
		<div bind:this={refPaletteRight} class="palette hidePaletteRight">
			{@render palette()}
		</div>
	</Intersection>
</div>

<style>
	.palette {
		opacity: 1;
		translate: 0;
		transition: all 1s ease-in-out 250ms;
	}
	.hidePaletteLeft {
		opacity: 0;
		translate: -100%;
		transition-delay: 0s;
	}
	.hidePaletteRight {
		opacity: 0;
		translate: 100%;
		transition-delay: 0s;
	}
</style>
