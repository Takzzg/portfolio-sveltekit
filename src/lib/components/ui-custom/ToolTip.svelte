<script lang="ts">
	let { text, classes }: { text: string; classes?: string } = $props();
</script>

<span class="{classes} pointer-events-none absolute z-10 -translate-y-full border-2 bg-background p-1">
	{text}
</span>
