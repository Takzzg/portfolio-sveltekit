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
	import { ToggleGroup, ToggleGroupItem } from "$lib/components/ui/toggle-group";
	import { getLocale, setLocale, type Locale } from "$lib/paraglide/runtime";
	import type { ContextState } from "@/routes/+layout.svelte";
	import { userPrefersMode, setMode, resetMode } from "mode-watcher";
	import { getContext } from "svelte";
	import Button from "./ui/button/button.svelte";

	let currentMode = $derived(userPrefersMode.current);
	let context = getContext("currentSection") as ContextState;
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

<!-- dark / light mode select -->
{#snippet modeSelect()}
	<DropdownMenu>
		<!-- trigger -->
		<DropdownMenuTrigger
			class="flex items-center gap-2 rounded-md border-1 bg-background p-2 hover:cursor-pointer hover:bg-accent"
		>
			{@render modeOption(currentMode)}
		</DropdownMenuTrigger>

		<!-- options group -->
		<DropdownMenuContent>
			<DropdownMenuGroup>
				<DropdownMenuRadioGroup bind:value={currentMode}>
					<!-- dark -->
					<DropdownMenuRadioItem onclick={() => setMode("dark")} value="dark">
						{@render modeOption("dark")}
					</DropdownMenuRadioItem>

					<!-- light -->
					<DropdownMenuRadioItem onclick={() => setMode("light")} value="light">
						{@render modeOption("light")}
					</DropdownMenuRadioItem>

					<DropdownMenuSeparator />

					<!-- system -->
					<DropdownMenuRadioItem onclick={() => resetMode()} value="system">
						{@render modeOption("system")}
					</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
			</DropdownMenuGroup>
		</DropdownMenuContent>
	</DropdownMenu>
{/snippet}

<!-- (es / en) lang - icon + pretty name -->
{#snippet langOption(locale: Locale)}
	{#if locale == "es"}
		<iconify-icon icon="flag:ar-1x1" class="h-4 w-4" width="16" height="16"></iconify-icon>
		Es
	{:else if locale == "en"}
		<iconify-icon icon="flag:gb-1x1" class="h-4 w-4" width="16" height="16"></iconify-icon>
		En
	{/if}
{/snippet}

<!-- lang toggle -->
{#snippet langToggleGroup()}
	<ToggleGroup
		variant="outline"
		type="single"
		value={getLocale()}
		onValueChange={(value) => setLocale(value as Locale)}
	>
		<!-- english -->
		<ToggleGroupItem disabled={getLocale() == "en"} class="hover:cursor-pointer" value={"en"} aria-label={"English"}>
			{@render langOption("en")}
		</ToggleGroupItem>

		<!-- español -->
		<ToggleGroupItem disabled={getLocale() == "es"} class="hover:cursor-pointer" value={"es"} aria-label={"Español"}>
			{@render langOption("es")}
		</ToggleGroupItem>
	</ToggleGroup>
{/snippet}

<!-- Navbar.svelte -->
<div class="m-auto flex w-full max-w-4xl items-center justify-between p-2">
	<!-- site navigation -->
	<div class="flex items-center gap-2 p-2">
		{#each context.sectionButtons as btn (btn.text)}
			<Button
				onclick={btn.onclick}
				variant={context.currentSection == btn.index ? "default" : "ghost"}
				class="hover:cursor-pointer p-2"
			>
				{btn.text}
			</Button>
		{/each}
	</div>

	<!-- settings -->
	<div class="flex items-center gap-2">
		{@render modeSelect()}
		{@render langToggleGroup()}
	</div>
</div>
