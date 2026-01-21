<script lang="ts">
	let { text, classes }: { text: string; classes?: string } = $props();
</script>

<span class="{classes} pointer-events-none absolute rounded-sm bg-primary p-2 text-base text-secondary">
	{text}
	<span class="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 rounded-none bg-inherit"></span>
</span>
