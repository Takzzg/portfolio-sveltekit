<script>
	import "iconify-icon";
	import { m } from "$lib/paraglide/messages";
	import { Button } from "$lib/components/ui/button";
	import TechLogo from "$lib/components/custom/TechLogo.svelte";
</script>

<div class="grid h-full grid-rows-[100%_auto]">
	<div class="flex flex-col items-center justify-center bg-primary/10">
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
			<TechLogo icon="logos:svelte-kit" size="banner" />
			<TechLogo icon="logos:tailwindcss" size="banner" />
			<TechLogo icon="logos:vercel" size="banner" />
		</div>

		<div class="flex justify-center gap-6">
			<TechLogo icon="logos:prettier" size="icon" />
			<TechLogo icon="logos:eslint" size="icon" />
			<TechLogo icon="logos:typescript-icon" size="icon" />
		</div>
	</div>
</div>
