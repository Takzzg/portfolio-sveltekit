<script lang="ts">
	import "iconify-icon";

	interface Props {
		icon: string;
		width?: string;
		height?: string;
	}

	let { icon, width = "64px", height = "64px" }: Props = $props();
</script>

<iconify-icon {icon} {width} {height} style="width: {width}; height: {height};"></iconify-icon>
