<script lang="ts">
	import Splash from "@/lib/components/Splash.svelte";
	import Portfolio from "@/lib/components/technologies/Portfolio.svelte";
	import Experience from "@/lib/components/technologies/Experience.svelte";

	let height: number = $state(0);
</script>

<div class="grid h-full overflow-y-scroll" style="--height:{height};" bind:clientHeight={height}>
	<div style="height: {height}px;">
		<Splash />
	</div>

	<div class="fixedHeight">
		<Experience />
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
