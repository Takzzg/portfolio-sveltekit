<script lang="ts">
	import IconifyIcon from "../IconifyIcon.svelte";
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuGroup,
		DropdownMenuRadioGroup,
		DropdownMenuRadioItem,
		DropdownMenuSeparator,
		DropdownMenuTrigger,
	} from "$lib/components/ui/dropdown-menu";
	import { getTheme, THEMES, setTheme, type I_Theme } from "$lib/state/GlobalState.svelte";
	import PreferenceIcon from "./PreferenceIcon.svelte";
	import { Icons } from "$lib/assets/icons";
	import { I_traKeyThemeToggle, findTranslation } from "./ThemeToggle.translations";

	let { type }: { type: "icons" | "list" } = $props();
</script>

{#snippet themeIcon(theme: I_Theme, pxSize: number = 16)}
	{#if theme == "dark"}
		<!-- Dark Theme -->
		<IconifyIcon icon={Icons.THEME_DARK} width={pxSize + "px"} height={pxSize + "px"} />
	{:else if theme == "light"}
		<!-- Light Theme -->
		<IconifyIcon icon={Icons.THEME_LIGHT} width={pxSize + "px"} height={pxSize + "px"} />
	{:else if theme == "system"}
		<!-- System Theme -->
		<IconifyIcon icon={Icons.THEME_SYSTEM} width={pxSize + "px"} height={pxSize + "px"} />
	{/if}
{/snippet}

<!-- (dark / light / system) theme - icon + pretty name -->
{#snippet listOption(theme: I_Theme)}
	{@render themeIcon(theme)}
	{findTranslation((theme + "_theme") as I_traKeyThemeToggle)}
{/snippet}

{#if type == "icons"}
	{#each Object.values(THEMES).reverse() as theme}
		<PreferenceIcon
			text={findTranslation(theme as I_traKeyThemeToggle)}
			selected={getTheme() == theme}
			onClick={() => setTheme(theme)}
		>
			{#snippet icon()}
				{@render themeIcon(theme, 24)}
			{/snippet}
		</PreferenceIcon>
	{/each}
{:else if type == "list"}
	<DropdownMenu>
		<!-- trigger -->
		<DropdownMenuTrigger class="flex items-center gap-2 rounded-md border-2 p-2 hover:cursor-pointer hover:bg-accent">
			{@render listOption(getTheme())}
		</DropdownMenuTrigger>

		<!-- options group -->
		<DropdownMenuContent>
			<DropdownMenuGroup>
				<DropdownMenuRadioGroup value={getTheme()}>
					<!-- dark -->
					<DropdownMenuRadioItem onclick={() => setTheme("dark")} value="dark">
						{@render listOption("dark")}
					</DropdownMenuRadioItem>

					<!-- light -->
					<DropdownMenuRadioItem onclick={() => setTheme("light")} value="light">
						{@render listOption("light")}
					</DropdownMenuRadioItem>

					<DropdownMenuSeparator />

					<!-- system -->
					<DropdownMenuRadioItem onclick={() => setTheme("system")} value="system">
						{@render listOption("system")}
					</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
			</DropdownMenuGroup>
		</DropdownMenuContent>
	</DropdownMenu>
{/if}
