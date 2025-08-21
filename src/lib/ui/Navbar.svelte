<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte";
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuGroup,
		DropdownMenuRadioGroup,
		DropdownMenuRadioItem,
		DropdownMenuSeparator,
		DropdownMenuTrigger,
	} from "$lib/components/ui/dropdown-menu";
	import { getLocale, locales, setLocale, type Locale } from "$lib/paraglide/runtime";
	import { userPrefersMode, setMode, resetMode } from "mode-watcher";

	let currentMode = $derived(userPrefersMode.current);
</script>

<!-- (dark / light / system) theme - icon + pretty name -->
{#snippet modeOption(mode: "dark" | "light" | "system")}
	{#if mode == "dark"}
		<iconify-icon icon="lucide:moon" class="h-4 w-4" width="16" height="16"></iconify-icon>
		Dark Mode
	{:else if mode == "light"}
		<iconify-icon icon="lucide:sun" class="h-4 w-4" width="16" height="16"></iconify-icon>
		Light Mode
	{:else if mode == "system"}
		<iconify-icon icon="lucide:monitor-cog" class="h-4 w-4" width="16" height="16"></iconify-icon>
		System Theme
	{/if}
{/snippet}

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
		<!-- dark / light mode select -->
		<DropdownMenu>
            <!-- trigger -->
			<DropdownMenuTrigger>
				<Button variant="outline" class="hover:cursor-pointer">
					{@render modeOption(currentMode)}
				</Button>
			</DropdownMenuTrigger>

            <!-- options group -->
			<DropdownMenuContent>
				<DropdownMenuGroup>
					<DropdownMenuRadioGroup bind:value={currentMode}>
						<DropdownMenuRadioItem onclick={() => setMode("dark")} value="dark">
							{@render modeOption("dark")}
						</DropdownMenuRadioItem>
						<DropdownMenuRadioItem onclick={() => setMode("light")} value="light">
							{@render modeOption("light")}
						</DropdownMenuRadioItem>
						<DropdownMenuSeparator />
						<DropdownMenuRadioItem onclick={() => resetMode()} value="system">
							{@render modeOption("system")}
						</DropdownMenuRadioItem>
					</DropdownMenuRadioGroup>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>

		<!-- lang select -->
		<div class="grid grid-cols-2 overflow-hidden rounded-sm border-1 border-stone-600">
			{#each locales as locale}
				{@render langBtn(locale)}
			{/each}
		</div>
	</div>
</div>
