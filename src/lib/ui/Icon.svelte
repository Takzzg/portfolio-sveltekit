<script lang="ts">
	let { icon, width, height }: { icon: string; width: number; height: number } = $props();
</script>

<iconify-icon {icon} class="h-[{height}px] w-[{width}px]" {height} {width}></iconify-icon>
