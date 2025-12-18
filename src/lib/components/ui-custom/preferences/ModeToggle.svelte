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
	import { getMode, MODES, setMode, type I_Mode } from "$lib/state/GlobalState.svelte";
	import PreferenceIcon from "./PreferenceIcon.svelte";
	import { Icons } from "$lib/assets/icons";

	let { type }: { type: "icons" | "list" } = $props();
</script>

{#snippet themeIcon(mode: I_Mode, pxSize: number = 16)}
	{#if mode == "dark"}
		<!-- Dark Mode -->
		<IconifyIcon icon={Icons.THEME_DARK} width={pxSize + "px"} height={pxSize + "px"} />
	{:else if mode == "light"}
		<!-- Light Mode -->
		<IconifyIcon icon={Icons.THEME_LIGHT} width={pxSize + "px"} height={pxSize + "px"} />
	{:else if mode == "system"}
		<!-- System Theme -->
		<IconifyIcon icon={Icons.THEME_SYSTEM} width={pxSize + "px"} height={pxSize + "px"} />
	{/if}
{/snippet}

<!-- (dark / light / system) theme - icon + pretty name -->
{#snippet listOption(mode: I_Mode)}
	{@render themeIcon(mode)}
	{`${mode} Theme`}
{/snippet}

{#if type == "icons"}
	{#each Object.values(MODES).reverse() as mode}
		<PreferenceIcon text={mode} selected={getMode() == mode} onClick={() => setMode(mode)}>
			{#snippet icon()}
				{@render themeIcon(mode, 24)}
			{/snippet}
		</PreferenceIcon>
	{/each}
{:else if type == "list"}
	<DropdownMenu>
		<!-- trigger -->
		<DropdownMenuTrigger class="flex items-center gap-2 rounded-md border-2 p-2 hover:cursor-pointer hover:bg-accent">
			{@render listOption(getMode())}
		</DropdownMenuTrigger>

		<!-- options group -->
		<DropdownMenuContent>
			<DropdownMenuGroup>
				<DropdownMenuRadioGroup value={getMode()}>
					<!-- dark -->
					<DropdownMenuRadioItem onclick={() => setMode("dark")} value="dark">
						{@render listOption("dark")}
					</DropdownMenuRadioItem>

					<!-- light -->
					<DropdownMenuRadioItem onclick={() => setMode("light")} value="light">
						{@render listOption("light")}
					</DropdownMenuRadioItem>

					<DropdownMenuSeparator />

					<!-- system -->
					<DropdownMenuRadioItem onclick={() => setMode("system")} value="system">
						{@render listOption("system")}
					</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
			</DropdownMenuGroup>
		</DropdownMenuContent>
	</DropdownMenu>
{/if}
