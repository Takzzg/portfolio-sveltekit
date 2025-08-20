<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="w-screen h-screen flex flex-col items-center justify-center text-white bg-[#121212]">
    {@render children?.()}
</div>
