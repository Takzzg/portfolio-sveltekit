<script lang="ts">
	import Splash from "@/lib/components/Splash.svelte";
	import Technologies from "$lib/components/technologies/Technologies.svelte";

	let height: number = $state(0);
</script>

<div class="grid h-full overflow-y-scroll" bind:clientHeight={height}>
	<div style="height: {height}px;">
		<Splash />
	</div>

	<div class="technologies" style="--height:{height};">
		<Technologies />
	</div>
</div>

<style>
	@media (min-width: 767px) {
		.technologies {
			height: calc(var(--height) * 1px);
		}
	}
</style>
