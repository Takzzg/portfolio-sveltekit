<script>
	import 'iconify-icon';
	import { m } from '$lib/paraglide/messages';
	import Icon from '$lib/ui/Icon.svelte';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="grid h-full grid-rows-[100%_auto]">
	<div class="bg-primary/10 flex flex-col items-center justify-center">
		<h1 class="text-5xl">{m.tiny_crisp_skate_lead()}</h1>

		<div class="p-10">
			<h3 class="text-3xl">{m.new_free_cougar_leap()}</h3>
			<h5 class="text-2xl">{m.sharp_trite_bulldog_dash()}</h5>
		</div>
	</div>

	<div class="m-auto flex w-full max-w-[800px] flex-col gap-4 p-4">
		<Button>Click me</Button>

		<h3 class="text-center text-xl">This portfolio was made using:</h3>

		<div class="flex flex-row flex-wrap justify-center gap-1">
			<Icon icon="logos:svelte-kit" size="banner" />
			<Icon icon="logos:tailwindcss" size="banner" />
			<Icon icon="logos:vercel" size="banner" />
		</div>

		<div class="flex justify-center gap-6">
			<Icon icon="logos:prettier" size="icon" />
			<Icon icon="logos:eslint" size="icon" />
			<Icon icon="logos:typescript-icon" size="icon" />
		</div>
	</div>
</div>
