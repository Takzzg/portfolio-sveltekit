<script lang="ts">
	import { m } from "$lib/paraglide/messages";
	import { setMode, userPrefersMode } from "mode-watcher";
	import IconifyIcon from "./IconifyIcon.svelte";
	import Intersection from "./Intersection.svelte";
	import Button from "./ui/button/button.svelte";
	import { getLocale, setLocale, type Locale } from "$lib/paraglide/runtime";
	import { ToggleGroup, ToggleGroupItem } from "$lib/components/ui/toggle-group";

	let refPageSettings = $state<HTMLDivElement>();
	let refPaletteLeft = $state<HTMLDivElement>();
	// let refPaletteRight = $state<HTMLDivElement>();

	let currentMode = $derived(userPrefersMode.current);
</script>

{#snippet palette()}
	<div class="flex gap-2 bg-background p-2 lg:flex-col">
		<div class="flex w-8 -rotate-90 items-center justify-center p-2 lg:w-auto lg:rotate-0">background</div>
		<div class="grid grid-cols-3 gap-2 lg:grid-cols-1">
			<div class="flex aspect-square items-center justify-center bg-stone-200 p-2 text-black">stone-200</div>
			<div class="flex aspect-square items-center justify-center bg-orange-400 p-2 text-black">orange-400</div>
			<div class="flex aspect-square items-center justify-center bg-teal-700 p-2 text-white">teal-700</div>
		</div>
	</div>
{/snippet}

<!-- (dark / light / system) theme icon -->
{#snippet modeOption(mode: "dark" | "light" | "system")}
	<Button
		onclick={() => setMode(mode)}
		disabled={currentMode == mode}
		variant="outline"
		class="aspect-square h-auto cursor-pointer"
	>
		{#if mode == "dark"}
			<!-- Dark Mode -->
			<IconifyIcon icon="lucide:moon" width="24px" height="24px" />
		{:else if mode == "light"}
			<!-- Light Mode -->
			<IconifyIcon icon="lucide:sun" width="24px" height="24px" />
		{:else if mode == "system"}
			<!-- System Theme -->
			<IconifyIcon icon="lucide:monitor-cog" width="24px" height="24px" />
		{/if}
	</Button>
{/snippet}

<!-- (es / en) lang - icon + pretty name -->
{#snippet langOption(locale: Locale)}
	{#if locale == "es"}
		<IconifyIcon icon="flag:ar-1x1" width="16px" height="16px" />
		Español
	{:else if locale == "en"}
		<IconifyIcon icon="flag:gb-1x1" width="16px" height="16px" />
		English
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

<div
	class="relative flex h-full min-h-[800px] max-w-full flex-col items-center justify-center overflow-clip bg-teal-700"
>
	<h1 class="text-center text-5xl">{m.tiny_crisp_skate_lead()}</h1>

	<div class="p-10">
		<h3 class="text-3xl">{m.new_free_cougar_leap()}</h3>
		<h5 class="text-2xl">{m.sharp_trite_bulldog_dash()}</h5>
	</div>

	<Intersection
		threshold={1}
		className="absolute bottom-0 left-0"
		onObserve={(entry) => refPageSettings?.classList.toggle("hideLeft", !entry.isIntersecting)}
	>
		<div bind:this={refPageSettings} class="show hideLeft">
			<div class="m-2 flex flex-col gap-2 rounded-md bg-background p-4">
				<span class="">Language</span>
				<div class="flex justify-center">
					{@render langToggleGroup()}
				</div>

				<span class="">Theme</span>
				<div class="flex justify-center gap-2">
					{@render modeOption("dark")}
					{@render modeOption("light")}
					{@render modeOption("system")}
				</div>
			</div>
		</div>
	</Intersection>

	<Intersection
		threshold={1}
		className="absolute top-4 lg:left-4"
		onObserve={(entry) => refPaletteLeft?.classList.toggle("hideLeft", !entry.isIntersecting)}
	>
		<div bind:this={refPaletteLeft} class="show hideLeft">
			{@render palette()}
		</div>
	</Intersection>

	<!-- <Intersection
		threshold={1}
		className="absolute bottom-4 lg:bottom-auto lg:top-4 lg:right-4"
		onObserve={(entry) => refPaletteRight?.classList.toggle("hideRight", !entry.isIntersecting)}
	>
		<div bind:this={refPaletteRight} class="show hideRight">
			{@render palette()}
		</div>
	</Intersection> -->
</div>

<style>
	.show {
		opacity: 1;
		translate: 0;
		transition: all 1s ease-in-out 250ms;
	}
	.hideLeft {
		opacity: 0;
		translate: -100%;
		transition-delay: 0s;
	}
	/* .hideRight {
		opacity: 0;
		translate: 100%;
		transition-delay: 0s;
	} */
</style>
