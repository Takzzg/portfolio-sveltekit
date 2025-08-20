<script lang="ts">
	import { getLocale, locales, setLocale, type Locale } from '$lib/paraglide/runtime';
</script>

{#snippet langBtn(name: Locale)}
	<button
		onclick={() => setLocale(name)}
		disabled={getLocale() == name}
		class="min-w-10 bg-stone-800 p-1 hover:cursor-pointer disabled:cursor-default disabled:opacity-50"
	>
		{name}
	</button>
{/snippet}

<div class="flex items-center justify-between bg-black/75 p-2">
	<div class="flex items-center p-2">NAVBAR</div>

	<div class="grid grid-cols-2 overflow-hidden rounded-sm">
		{#each locales as locale}
			{@render langBtn(locale)}
		{/each}
	</div>
</div>
