<script lang="ts">
	import { getLocale, locales, setLocale, type Locale } from '$lib/paraglide/runtime';
	import { userPrefersMode, setMode } from 'mode-watcher';

	let current = $derived(userPrefersMode.current);
</script>

{#snippet langBtn(name: Locale)}
	<button
		onclick={() => setLocale(name)}
		disabled={getLocale() == name}
		class="min-w-10 p-1 hover:cursor-pointer disabled:cursor-default disabled:opacity-50"
	>
		{name}
	</button>
{/snippet}

<div class="flex items-center justify-between p-2">
	<div class="flex items-center p-2">NAVBAR</div>

	<div class="flex items-center gap-2">
		<div>
			<select
				bind:value={current}
				onchange={(event) => setMode(event.currentTarget.value as 'dark' | 'light' | 'system')}
			>
				<option value="dark">Dark Theme</option>
				<option value="light">Light Theme</option>
				<option value="system">System Theme</option>
			</select>
		</div>

		<div class="grid grid-cols-2 overflow-hidden rounded-sm">
			{#each locales as locale}
				{@render langBtn(locale)}
			{/each}
		</div>
	</div>
</div>
