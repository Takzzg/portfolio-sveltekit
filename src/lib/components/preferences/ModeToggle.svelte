<script lang="ts">
	import { userPrefersMode, setMode, resetMode } from "mode-watcher";

	import IconifyIcon from "../IconifyIcon.svelte";
	import Button from "../ui/button/button.svelte";
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuGroup,
		DropdownMenuRadioGroup,
		DropdownMenuRadioItem,
		DropdownMenuSeparator,
		DropdownMenuTrigger,
	} from "../ui/dropdown-menu";

	let currentMode = $derived(userPrefersMode.current);
	let { type }: { type: "dropdown" | "icons" } = $props();
</script>

<!-- (dark / light / system) theme - icon + pretty name -->
{#snippet listOption(mode: "dark" | "light" | "system")}
	{#if mode == "dark"}
		<IconifyIcon icon="lucide:moon" width="16px" height="16px" />
		Dark Mode
	{:else if mode == "light"}
		<IconifyIcon icon="lucide:sun" width="16px" height="16px" />
		Light Mode
	{:else if mode == "system"}
		<IconifyIcon icon="lucide:monitor-cog" width="16px" height="16px" />
		System Theme
	{/if}
{/snippet}

<!-- dark / light mode select -->
{#snippet modeDropdown()}
	<DropdownMenu>
		<!-- trigger -->
		<DropdownMenuTrigger
			class="flex items-center gap-2 rounded-md border-1 bg-background p-2 hover:cursor-pointer hover:bg-accent"
		>
			{@render listOption(currentMode)}
		</DropdownMenuTrigger>

		<!-- options group -->
		<DropdownMenuContent>
			<DropdownMenuGroup>
				<DropdownMenuRadioGroup bind:value={currentMode}>
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
					<DropdownMenuRadioItem onclick={() => resetMode()} value="system">
						{@render listOption("system")}
					</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
			</DropdownMenuGroup>
		</DropdownMenuContent>
	</DropdownMenu>
{/snippet}

<!-- (dark / light / system) theme icon -->
{#snippet iconOption(mode: "dark" | "light" | "system")}
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

{#snippet modeIcons()}
	{@render iconOption("dark")}
	{@render iconOption("light")}
	{@render iconOption("system")}
{/snippet}

{#if type == "dropdown"}
	{@render modeDropdown()}
{:else}
	{@render modeIcons()}
{/if}
