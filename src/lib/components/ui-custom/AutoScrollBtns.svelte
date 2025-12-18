<script lang="ts">
	import Button from "../ui/button/button.svelte";
	import IconifyIcon from "./IconifyIcon.svelte";
	import * as State from "$lib/state/GlobalState.svelte";
	import { Icons } from "$lib/assets/icons";

	let currentSection = $derived(State.getScrollCurrent());
	let sectionButtons = $derived(State.getScrollButtons());
</script>

<div class="flex flex-col gap-2">
	<Button
		onclick={() => State.scrollToIndex(currentSection - 1)}
		variant="outline"
		disabled={currentSection == 0}
		class="h-auto p-0 hover:cursor-pointer disabled:opacity-15"
	>
		<IconifyIcon icon={Icons.CHEVRON_UP} height="48px" width="48px" />
	</Button>
	<Button
		onclick={() => State.scrollToIndex(currentSection + 1)}
		variant="outline"
		disabled={currentSection == sectionButtons.length - 1}
		class="h-auto p-0 hover:cursor-pointer disabled:opacity-15"
	>
		<IconifyIcon icon={Icons.CHEVRON_DOWN} height="48px" width="48px" />
	</Button>
</div>
