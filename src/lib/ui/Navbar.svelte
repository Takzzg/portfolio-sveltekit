<script lang="ts">
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuGroup,
		DropdownMenuRadioGroup,
		DropdownMenuRadioItem,
		DropdownMenuSeparator,
		DropdownMenuTrigger,
	} from "$lib/components/ui/dropdown-menu";
	import SunIcon from "@lucide/svelte/icons/sun";
	import MoonIcon from "@lucide/svelte/icons/moon";
	import { getLocale, locales, setLocale, type Locale } from "$lib/paraglide/runtime";
	import { userPrefersMode, setMode, resetMode } from "mode-watcher";

	let currentMode = $derived(userPrefersMode.current);

	const getPrettyName = (mode: "dark" | "light" | "system"): string => {
		switch (mode) {
			case "dark":
				return "Dark Mode";
			case "light":
				return "Light Mode";
			case "system":
				return "System Theme";
		}
	};
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
		<DropdownMenu>
			<DropdownMenuTrigger>{getPrettyName(currentMode)}</DropdownMenuTrigger>

			<DropdownMenuContent>
				<DropdownMenuGroup>
					<DropdownMenuRadioGroup bind:value={currentMode}>
						<DropdownMenuRadioItem onclick={() => setMode("dark")} value="dark">
                            <MoonIcon />
                            {getPrettyName("dark")}
						</DropdownMenuRadioItem>
						<DropdownMenuRadioItem onclick={() => setMode("light")} value="light">
                            <SunIcon />
							{getPrettyName("light")}
						</DropdownMenuRadioItem>
						<DropdownMenuSeparator />
						<DropdownMenuRadioItem onclick={() => resetMode()} value="system">
							{getPrettyName("system")}
						</DropdownMenuRadioItem>
					</DropdownMenuRadioGroup>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>

		<div class="grid grid-cols-2 overflow-hidden rounded-sm border-1 border-stone-600">
			{#each locales as locale}
				{@render langBtn(locale)}
			{/each}
		</div>
	</div>
</div>
