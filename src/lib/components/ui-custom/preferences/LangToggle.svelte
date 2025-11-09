<script lang="ts">
	import { getLang, setLang, LANGUAGES, type I_Lang } from "$lib/state/GlobalState.svelte";
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuGroup,
		DropdownMenuRadioGroup,
		DropdownMenuRadioItem,
		DropdownMenuTrigger,
	} from "$lib/components/ui/dropdown-menu";
	import PreferenceIcon from "./PreferenceIcon.svelte";

	let { type }: { type: "icons" | "list" } = $props();
</script>

{#snippet listOption(lang: I_Lang)}
	<span class="text-lg">{lang.key.toUpperCase()}</span>
	{lang.name}
{/snippet}

{#if type == "icons"}
	{#each Object.values(LANGUAGES) as lang}
		<PreferenceIcon text={lang.name} selected={getLang().key == lang.key} onClick={() => setLang(lang.key)}>
			{#snippet icon()}
				<span class="text-lg">{lang.key.toUpperCase()}</span>
			{/snippet}
		</PreferenceIcon>
	{/each}
{:else if type == "list"}
	<DropdownMenu>
		<!-- trigger -->
		<DropdownMenuTrigger class="flex items-center gap-2 rounded-md border-2 p-2 hover:cursor-pointer hover:bg-accent">
			{@render listOption(getLang())}
		</DropdownMenuTrigger>

		<!-- options group -->
		<DropdownMenuContent>
			<DropdownMenuGroup>
				<DropdownMenuRadioGroup value={getLang().key}>
					{#each Object.values(LANGUAGES) as lang}
						<DropdownMenuRadioItem onclick={() => setLang(lang.key)} value={lang.key}>
							{@render listOption(lang)}
						</DropdownMenuRadioItem>
					{/each}
				</DropdownMenuRadioGroup>
			</DropdownMenuGroup>
		</DropdownMenuContent>
	</DropdownMenu>
{/if}
