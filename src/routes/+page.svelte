<script lang="ts">
	import { m } from "$lib/paraglide/messages";
	import Technologies from "$lib/components/technologies/Technologies.svelte";

	let height = $state();
</script>

<div class="grid h-full" bind:clientHeight={height}>
	<div style="height: {height}px;" class="flex flex-col items-center justify-center bg-primary/10">
		<h1 class="text-5xl">{m.tiny_crisp_skate_lead()}</h1>

		<div class="p-10">
			<h3 class="text-3xl">{m.new_free_cougar_leap()}</h3>
			<h5 class="text-2xl">{m.sharp_trite_bulldog_dash()}</h5>
		</div>
	</div>

	<div style="height: {height}px;">
		<Technologies />
	</div>
</div>
