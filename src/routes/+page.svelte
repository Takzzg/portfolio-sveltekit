<script>
	import 'iconify-icon';
	import { m } from '$lib/paraglide/messages';
	import Icon from '$lib/ui/Icon.svelte';
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

		<Icon icon="logos:svelte-kit" height={64} width={300} />
		<Icon icon="logos:tailwindcss" height={64} width={300} />

		<div class="flex gap-8">
			<Icon icon="logos:prettier" height={48} width={48} />
			<Icon icon="logos:eslint" height={48} width={48} />
		</div>
	</div>
</div>
