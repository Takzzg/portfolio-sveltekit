<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="grid h-screen w-screen grid-rows-[auto_1fr] bg-stone-950 text-white">
	<Navbar />

	<div class="h-full w-full overflow-y-auto">
		{@render children?.()}
	</div>
</div>
