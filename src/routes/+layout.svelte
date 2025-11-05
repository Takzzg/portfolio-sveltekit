<script lang="ts">
	import { onMount } from "svelte";

	import "../app.css";
	import favicon from "$lib/assets/favicon.svg";
	import Navbar from "$lib/components/Navbar.svelte";
	import { updateSystemMode } from "@/lib/components/state/GlobalState.svelte";

	let { children } = $props();

	onMount(() => {
		// check if prefers-color-scheme == dark
		let userPrefScheme: MediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

		// update global state
		updateSystemMode(userPrefScheme.matches ? "dark" : "light");

		// update on change
		userPrefScheme.addEventListener("change", (e) => {
			updateSystemMode(e.matches ? "dark" : "light");
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
</div>
