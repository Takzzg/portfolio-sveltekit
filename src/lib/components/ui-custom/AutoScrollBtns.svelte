<script lang="ts">
	import Button from "../ui/button/button.svelte";
	import IconifyIcon from "./IconifyIcon.svelte";
	import * as State from "$lib/state/GlobalState.svelte";

	let currentSection = $derived(State.getScrollCurrent());
	let sectionButtons = $derived(State.getScrollButtons());
</script>

<div class="flex flex-col gap-2">
	<Button
		onclick={() => State.scrollToIndex(currentSection - 1)}
		variant="ghost"
		disabled={currentSection == 0}
		class="h-auto border-2 border-secondary bg-background/25 p-0 text-secondary opacity-50 hover:cursor-pointer disabled:opacity-15"
	>
		<IconifyIcon icon="lucide:chevron-up" height="48px" width="48px" />
	</Button>
	<Button
		onclick={() => State.scrollToIndex(currentSection + 1)}
		variant="ghost"
		disabled={currentSection == sectionButtons.length - 1}
		class="h-auto border-2 border-secondary bg-background/25 p-0 text-secondary opacity-50 hover:cursor-pointer disabled:opacity-15"
	>
		<IconifyIcon icon="lucide:chevron-down" height="48px" width="48px" />
	</Button>
</div>
