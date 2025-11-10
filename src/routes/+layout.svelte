<script lang="ts">
	import { onMount } from "svelte";

	import "../app.css";
	import favicon from "$lib/assets/favicon.svg";
	import { setSystemMode } from "$lib/state/GlobalState.svelte";
	import Navbar from "$lib/components/ui-custom/Navbar.svelte";
	import AutoScrollBtns from "$lib/components/ui-custom/AutoScrollBtns.svelte";

	let { children } = $props();

	onMount(() => {
		// check if prefers-color-scheme == dark
		let userPrefScheme: MediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

		// update global state
		setSystemMode(userPrefScheme.matches ? "dark" : "light");

		// update on change
		userPrefScheme.addEventListener("change", (e) => {
			setSystemMode(e.matches ? "dark" : "light");
		});
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="grid h-screen w-screen grid-rows-[auto_1fr]">
	<Navbar />

	<div class="h-full w-full overflow-hidden">
		{@render children?.()}
	</div>

	<div class="absolute right-0 bottom-0 m-4">
		<AutoScrollBtns />
	</div>
</div>
