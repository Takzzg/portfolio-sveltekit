<script lang="ts">
	import { getLocale, setLocale, type Locale } from "$lib/paraglide/runtime";
	import { ToggleGroup, ToggleGroupItem } from "$lib/components/ui/toggle-group";

	import IconifyIcon from "../IconifyIcon.svelte";
</script>

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

<ToggleGroup variant="outline" type="single" value={getLocale()} onValueChange={(value) => setLocale(value as Locale)}>
	<!-- english -->
	<ToggleGroupItem disabled={getLocale() == "en"} class="hover:cursor-pointer" value={"en"} aria-label={"English"}>
		{@render langOption("en")}
	</ToggleGroupItem>

	<!-- español -->
	<ToggleGroupItem disabled={getLocale() == "es"} class="hover:cursor-pointer" value={"es"} aria-label={"Español"}>
		{@render langOption("es")}
	</ToggleGroupItem>
</ToggleGroup>
