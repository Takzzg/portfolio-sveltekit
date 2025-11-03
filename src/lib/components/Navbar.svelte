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
	import type { ContextState } from "@/routes/+layout.svelte";
	import { userPrefersMode, setMode, resetMode } from "mode-watcher";
	import { getContext } from "svelte";
	import Button from "./ui/button/button.svelte";
	import IconifyIcon from "./IconifyIcon.svelte";
	import LangToggle from "./preferences/LangToggle.svelte";
	import ModeToggle from "./preferences/ModeToggle.svelte";

	let currentMode = $derived(userPrefersMode.current);
	let context = getContext("currentSection") as ContextState;

	let navMenuOpen = $state(false);
	let refNavMenu = $state<HTMLDivElement>();
</script>

<!-- (dark / light / system) theme - icon + pretty name -->
{#snippet modeOption(mode: "dark" | "light" | "system")}
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

{#snippet desktopNavbar()}
	<div class="hidden items-center gap-2 lg:flex">
		{#each context.sectionButtons as btn (btn.text)}
			<Button
				onclick={btn.onclick}
				variant={context.currentSection == btn.index ? "default" : "ghost"}
				class="p-2 hover:cursor-pointer"
			>
				{btn.text}
			</Button>
		{/each}
	</div>
{/snippet}

{#snippet desktopMobile()}
	<div class="z-10 flex items-center lg:hidden">
		<Button
			variant="ghost"
			class="p-2 hover:cursor-pointer"
			onclick={() => {
				navMenuOpen = !navMenuOpen;
			}}
		>
			<IconifyIcon icon={navMenuOpen ? "lucide:x" : "lucide:menu"} height="32px" width="32px" />
		</Button>
		<div
			bind:this={refNavMenu}
			style={navMenuOpen ? "left: 0px" : `left: -${refNavMenu?.clientWidth}px`}
			class="absolute top-full flex flex-col gap-2 bg-background p-2 transition-[left]"
		>
			{#each context.sectionButtons as btn (btn.text)}
				<Button
					onclick={() => {
						btn.onclick();
						navMenuOpen = false;
					}}
					variant={context.currentSection == btn.index ? "default" : "ghost"}
					class="p-2 hover:cursor-pointer"
				>
					{btn.text}
				</Button>
			{/each}
		</div>
	</div>
{/snippet}

<!-- Navbar.svelte -->
<div class="relative m-auto flex w-full max-w-5xl items-center justify-between p-2">
	<!-- site navigation -->
	{@render desktopNavbar()}
	{@render desktopMobile()}

	<!-- settings -->
	<div class="flex items-center gap-2">
		<ModeToggle type="dropdown" />
		<LangToggle />
	</div>
</div>
