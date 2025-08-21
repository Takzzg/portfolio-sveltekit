<script>
	import 'iconify-icon';
	import { m } from '$lib/paraglide/messages';
</script>

<div class="grid h-full grid-rows-[100%_auto]">
	<div class="flex flex-col items-center justify-center bg-primary/10">
		<h1 class="text-5xl">{m.tiny_crisp_skate_lead()}</h1>

		<div class="p-10">
			<h3 class="text-3xl">{m.new_free_cougar_leap()}</h3>
			<h5 class="text-2xl">{m.sharp_trite_bulldog_dash()}</h5>
		</div>
	</div>

	<div class="flex flex-col gap-4 p-4">
		<h3 class="text-xl">This portfolio was made using:</h3>

		<iconify-icon icon="logos:svelte-kit" class="h-[64px] w-[300px]" width="300px"></iconify-icon>
		<iconify-icon icon="logos:tailwindcss" class="h-[64px] w-[300px]" width="300px"></iconify-icon>

		<div class="flex gap-8">
			<iconify-icon icon="logos:prettier" class="h-[48px] w-[48px]" width="48px" height="48px"
			></iconify-icon>
			<iconify-icon icon="logos:eslint" class="h-[48px] w-[48px]" width="48px" height="48px"
			></iconify-icon>
		</div>
	</div>
</div>
