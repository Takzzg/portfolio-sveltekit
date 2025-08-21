<script lang="ts">
	import Tooltip from "$lib/ui/Tooltip.svelte";

	let { icon, size }: { icon: string; size: "icon" | "banner" } = $props();
</script>

<Tooltip>
	<div class="flex items-center rounded-sm p-2 align-sub hover:cursor-pointer hover:bg-white/10">
		{#if size == "icon"}
			<iconify-icon class="h-[48px] w-[48px]" {icon} height="48px" width="48px"></iconify-icon>
		{:else if size == "banner"}
			<iconify-icon class="h-[64px] w-[300px]" {icon} height="64px" width="300px"></iconify-icon>
		{/if}
	</div>
</Tooltip>
