<script lang="ts">
	import { ToggleGroup, ToggleGroupItem } from "$lib/components/ui/toggle-group";

	import { getLang, setLang, type I_Lang, type I_LangKey, LANGUAGES } from "../../state/GlobalState.svelte";
	import IconifyIcon from "../ui-custom/IconifyIcon.svelte";
</script>

<!-- (es / en) lang - icon + pretty name -->
{#snippet langOption(lang: I_Lang)}
	<IconifyIcon icon={lang.flag} width="16px" height="16px" />
	{lang.name}
{/snippet}

<ToggleGroup
	variant="outline"
	type="single"
	value={getLang().key}
	onValueChange={(value) => setLang(value as I_LangKey)}
>
	{#each Object.entries(LANGUAGES) as [key, lang]}
		<ToggleGroupItem disabled={getLang().key == key} class="hover:cursor-pointer" value={key} aria-label={lang.name}>
			{@render langOption(lang)}
		</ToggleGroupItem>
	{/each}
</ToggleGroup>
