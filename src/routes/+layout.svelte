<script module lang="ts">
	export type ContextState = {
		currentSection: number;
		sectionButtons: { text: string; index: number; onclick: () => void }[];
	};
</script>

<script lang="ts">
	import { ModeWatcher } from "mode-watcher";
	import { setContext } from "svelte";

	import "../app.css";
	import favicon from "$lib/assets/favicon.svg";
	import Navbar from "$lib/components/Navbar.svelte";

	let { children } = $props();

	let contextState: ContextState = $state({ currentSection: 0, sectionButtons: [] });
	setContext("currentSection", contextState);
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
