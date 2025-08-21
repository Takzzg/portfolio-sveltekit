<script lang="ts">
	import { getLocale, locales, setLocale, type Locale } from '$lib/paraglide/runtime';
	import { userPrefersMode, setMode } from 'mode-watcher';

	let currentMode = $derived(userPrefersMode.current);
</script>

{#snippet langBtn(name: Locale)}
	<button
		onclick={() => setLocale(name)}
		disabled={getLocale() == name}
		class="min-w-10 bg-white/15 p-1 hover:cursor-pointer disabled:cursor-default disabled:bg-white/10 disabled:opacity-50"
	>
		{name}
	</button>
{/snippet}

<div class="flex items-center justify-between bg-black/25 p-2">
	<div class="flex items-center p-2">NAVBAR</div>

	<div class="flex items-center gap-2">
		<div>
			<select
				name="mode"
				bind:value={currentMode}
				class="rounded-sm border-1 border-stone-600 p-2 hover:cursor-pointer dark:bg-stone-900"
				onchange={(event) => setMode(event.currentTarget.value as 'dark' | 'light' | 'system')}
			>
				<option value="dark">Dark Mode</option>
				<option value="light">Light Mode</option>
				<option value="system">System Theme</option>
			</select>
		</div>

		<div class="grid grid-cols-2 overflow-hidden rounded-sm border-1 border-stone-600">
			{#each locales as locale}
				{@render langBtn(locale)}
			{/each}
		</div>
	</div>
</div>
