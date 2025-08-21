<script lang="ts">
	let { children } = $props();
</script>

<span class="group relative">
	{@render children()}
	<span
		class="invisible absolute bottom-[120%] w- z-10 rounded-sm bg-neutral-300 p-2 text-center text-black after:absolute after:left-2 after:top-[100%] after:border-8 after:border-solid after:border-transparent after:border-t-neutral-300 group-hover:visible dark:bg-black dark:text-white dark:after:border-t-black"
		>Lorem ipsum dolor sit amet.</span
	>
</span>
