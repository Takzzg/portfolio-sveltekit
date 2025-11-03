<script lang="ts">
	import type { ContextState } from "@/routes/+layout.svelte";
	import { getContext } from "svelte";
	import Button from "./ui/button/button.svelte";
	import IconifyIcon from "./IconifyIcon.svelte";
	import LangToggle from "./preferences/LangToggle.svelte";
	import ModeToggle from "./preferences/ModeToggle.svelte";

	let context = getContext("currentSection") as ContextState;

	let navMenuOpen = $state(false);
	let refNavMenu = $state<HTMLDivElement>();
</script>

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
