<script>
	import IconifyIcon from "../IconifyIcon.svelte";
	import { Experience } from "./technologies";
</script>

<div class="grid h-full bg-orange-400 grid-rows-[auto_1fr]">
	<h2 class="text-4xl bg-stone-200 text-black p-4">Technologies I've worked with</h2>
	<div class="p-4 max-h-full flex justify-center items-center flex-wrap gap-4 m-auto overflow-y-auto">
		{#each Experience as tech (tech.id)}
			<div class="flex bg-stone-200 rounded-sm items-center p-4">
				<IconifyIcon icon={tech.icon} height="128px" width="128px" />
			</div>
		{/each}
	</div>
</div>
