<script lang="ts">
	import IconifyIcon from "../IconifyIcon.svelte";
	import * as State from "$lib/state/GlobalState.svelte";
	import Button from "../../ui/button/button.svelte";
	import ThemeToggle from "../preferences/ThemeToggle.svelte";
	import LangToggle from "../preferences/LangToggle.svelte";
	import { findTranslation } from "./Navbar.translations";

	let navMenuOpen = $state(false);
	let refNavMenu = $state<HTMLDivElement>();
</script>

{#snippet desktopNavbar()}
	<div class="hidden items-center gap-2 lg:flex">
		{#each State.getScrollButtons() as btn}
			<Button
				onclick={() => State.scrollToIndex(btn.index)}
				variant={State.getScrollCurrent() == btn.index ? "default" : "ghost"}
				class="text-md h-auto hover:cursor-pointer"
			>
				{findTranslation(btn.translationKey)}
			</Button>
		{/each}
	</div>
{/snippet}

{#snippet desktopMobile()}
	<div class="z-10 flex items-center lg:hidden">
		<Button variant="ghost" class="p-2 hover:cursor-pointer" onclick={() => (navMenuOpen = !navMenuOpen)}>
			<IconifyIcon icon={navMenuOpen ? "lucide:x" : "lucide:menu"} height="32px" width="32px" />
		</Button>
		<div
			bind:this={refNavMenu}
			style={navMenuOpen ? "left: 0px" : `left: -${refNavMenu?.clientWidth}px`}
			class="absolute top-full flex flex-col gap-2 bg-background p-2 transition-[left]"
		>
			{#each State.getScrollButtons() as btn}
				<Button
					onclick={() => {
						State.scrollToIndex(btn.index);
						navMenuOpen = false;
					}}
					variant={State.getScrollCurrent() == btn.index ? "default" : "ghost"}
					class="p-2 hover:cursor-pointer"
				>
					{findTranslation(btn.translationKey)}
				</Button>
			{/each}
		</div>
	</div>
{/snippet}

<!-- Navbar.svelte -->
<div class="border-b-2">
	<div class="relative m-auto flex w-full max-w-5xl items-center justify-between p-2">
		<!-- site navigation -->
		{@render desktopNavbar()}
		{@render desktopMobile()}

		<!-- settings -->
		<div class="flex items-center gap-2">
			<ThemeToggle type="list" />
			<LangToggle type="list" />
		</div>
	</div>
</div>
