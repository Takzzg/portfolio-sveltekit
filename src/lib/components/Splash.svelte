<script lang="ts">
	import { m } from "$lib/paraglide/messages";
</script>

<div class="relative flex h-full flex-col items-center justify-center bg-teal-700/25">
	<h1 class="text-5xl">{m.tiny_crisp_skate_lead()}</h1>

	<div class="p-10">
		<h3 class="text-3xl">{m.new_free_cougar_leap()}</h3>
		<h5 class="text-2xl">{m.sharp_trite_bulldog_dash()}</h5>
	</div>

	<div class="absolute top-4 m-auto flex gap-2 bg-background p-2 lg:right-4 lg:w-auto lg:flex-col">
		<div class="flex w-8 -rotate-90 items-center justify-center p-2 lg:w-auto lg:rotate-0">background</div>
		<div class="grid grid-cols-3 gap-2 lg:grid-cols-1">
			<div class="flex aspect-square items-center justify-center bg-stone-200 p-2 text-black">stone-200</div>
			<div class="flex aspect-square items-center justify-center bg-orange-400 p-2 text-black">orange-400</div>
			<div class="flex aspect-square items-center justify-center bg-teal-700 p-2 text-white">teal-700</div>
		</div>
	</div>
</div>
