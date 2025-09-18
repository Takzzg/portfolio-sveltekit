<script lang="ts">
	import { GITHUB_URL } from "@/lib/utils";
	import Button from "../ui/button/button.svelte";
	import type { I_Technology } from "../technologies/technologies";

	let { selected }: { selected: I_Technology | null } = $props();
</script>

<div class="flex w-full max-w-[980px] grow gap-8 p-4 2xl:px-0">
	{#if selected}
		<span class="flex w-full items-center gap-4 text-2xl">
			<iconify-icon icon={selected.icon} style="width: 32px; height: 32px;" height="32px" width="32px"></iconify-icon>
			{selected.name}
		</span>
		<span class="flex flex-col gap-2 lg:flex-row">
			<Button variant="secondary" class="hover:cursor-pointer" onclick={() => window.open(selected?.website, "_blank")}>
				<iconify-icon icon="lucide:globe" width="24px" class="h-6 w-6"></iconify-icon>
				<span>Visit Website</span>
				<iconify-icon icon="lucide:external-link" width="16px" class="h-4 w-4"></iconify-icon>
			</Button>
			<Button
				variant="secondary"
				class="hover:cursor-pointer"
				onclick={() => window.open(`${GITHUB_URL}/${selected?.github}/#readme`, "_blank")}
			>
				<iconify-icon icon="lucide:github" width="24px" class="h-6 w-6"></iconify-icon>
				<span>GitHub Repo</span>
				<iconify-icon icon="lucide:external-link" width="16px" class="h-4 w-4"></iconify-icon>
			</Button>
		</span>
	{:else}
		<span class="px-2 text-2xl">About this Portfolio</span>
	{/if}
</div>
