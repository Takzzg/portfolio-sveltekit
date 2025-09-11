<script lang="ts">
	import Splash from "$lib/components/Splash.svelte";
	import Portfolio from "$lib/components/technologies/Portfolio.svelte";
	import Categories from "$lib/components/technologies/Categories.svelte";

	let height: number = $state(0);
</script>

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
</div>

<style>
	@media (min-width: 767px) {
		.fixedHeight {
			height: calc(var(--height) * 1px);
		}
	}
</style>
