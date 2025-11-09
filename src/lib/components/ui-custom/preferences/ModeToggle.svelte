<script lang="ts">
	import * as State from "$lib/state/GlobalState.svelte";
	import Button from "$lib/components/ui/button/button.svelte";
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

<!-- (dark / light / system) theme icon -->
{#snippet iconOption(mode: "dark" | "light" | "system")}
	<Button
		onclick={() => State.setMode(mode)}
		disabled={State.getMode() == mode}
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

{#if type == "icons"}
	{@render iconOption("dark")}
	{@render iconOption("light")}
	{@render iconOption("system")}
{:else if type == "dropdown"}
	<DropdownMenu>
		<!-- trigger -->
		<DropdownMenuTrigger class="flex items-center gap-2 rounded-md border-2 p-2 hover:cursor-pointer hover:bg-accent">
			{@render listOption(State.getMode())}
		</DropdownMenuTrigger>

		<!-- options group -->
		<DropdownMenuContent>
			<DropdownMenuGroup>
				<DropdownMenuRadioGroup value={State.getMode()}>
					<!-- dark -->
					<DropdownMenuRadioItem onclick={() => State.setMode("dark")} value="dark">
						{@render listOption("dark")}
					</DropdownMenuRadioItem>

					<!-- light -->
					<DropdownMenuRadioItem onclick={() => State.setMode("light")} value="light">
						{@render listOption("light")}
					</DropdownMenuRadioItem>

					<DropdownMenuSeparator />

					<!-- system -->
					<DropdownMenuRadioItem onclick={() => State.setMode("system")} value="system">
						{@render listOption("system")}
					</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
			</DropdownMenuGroup>
		</DropdownMenuContent>
	</DropdownMenu>
{/if}
