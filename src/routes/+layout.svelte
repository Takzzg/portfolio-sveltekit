<script lang="ts">
	import "../app.css";
	import favicon from "$lib/assets/favicon.svg";
	import Navbar from "$lib/components/Navbar.svelte";
	import { ModeWatcher } from "mode-watcher";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="grid h-screen w-screen grid-rows-[auto_1fr]">
	<ModeWatcher
		defaultMode="system"
		modeStorageKey="guidoq-portfolio-mode-key"
		themeStorageKey="guidoq-portfolio-theme-key"
	/>

	<Navbar />

	<div class="h-full w-full overflow-hidden">
		{@render children?.()}
	</div>
</div>
