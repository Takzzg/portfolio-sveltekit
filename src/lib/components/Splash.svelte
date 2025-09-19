<script lang="ts">
	import { m } from "$lib/paraglide/messages";
	import Intersection from "./Intersection.svelte";

	let refPalette = $state<HTMLDivElement>();

	const togglePalette = (entry: IntersectionObserverEntry) => {
		if (!refPalette) return;
		refPalette.classList.toggle("hidePalette", !entry.isIntersecting);
	};
</script>

<div class="relative flex h-full flex-col items-center justify-center bg-teal-700">
	<h1 class="text-5xl">{m.tiny_crisp_skate_lead()}</h1>

	<div class="p-10">
		<h3 class="text-3xl">{m.new_free_cougar_leap()}</h3>
		<h5 class="text-2xl">{m.sharp_trite_bulldog_dash()}</h5>
	</div>

	<Intersection element={refPalette} onObserve={togglePalette} margin="0px 0px 0px 0px" threshold={0.5} >
		<div
			bind:this={refPalette}
			class="palette hidePalette absolute top-4 m-auto flex gap-2 bg-background p-2 transition-all lg:left-4 lg:w-auto lg:flex-col"
		>
			<div class="flex w-8 -rotate-90 items-center justify-center p-2 lg:w-auto lg:rotate-0">background</div>
			<div class="grid grid-cols-3 gap-2 lg:grid-cols-1">
				<div class="flex aspect-square items-center justify-center bg-stone-200 p-2 text-black">stone-200</div>
				<div class="flex aspect-square items-center justify-center bg-orange-400 p-2 text-black">orange-400</div>
				<div class="flex aspect-square items-center justify-center bg-teal-700 p-2 text-white">teal-700</div>
			</div>
		</div>
	</Intersection>
</div>

<style>
	.palette {
        opacity: 1;
		translate: 0;
		transition: all 1s ease-in-out 250ms;
	}
	.hidePalette {
        opacity: 0;
		translate: -100%;
        /* transition: none; */
	}
</style>
