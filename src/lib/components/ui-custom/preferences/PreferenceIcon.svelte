<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte";
	import type { Snippet } from "svelte";

	type I_PreferenceItemProps = {
		icon: Snippet;
		text: string;
		onClick: Function;
		selected: boolean;
	};

	let { icon, text, onClick, selected }: I_PreferenceItemProps = $props();
</script>

<Button
	onclick={() => onClick()}
	disabled={selected}
	variant="outline"
	class="group flex aspect-square h-16 cursor-pointer flex-col gap-0 p-1 disabled:bg-primary disabled:text-secondary disabled:opacity-100"
>
	{@render icon()}
	<span
		class="h-0 opacity-0 transition-all group-hover:h-4 group-hover:opacity-100 group-disabled:h-4 group-disabled:opacity-100"
	>
		{text.substring(0, 1).toUpperCase() + text.substring(1).toLowerCase()}
	</span>
</Button>
