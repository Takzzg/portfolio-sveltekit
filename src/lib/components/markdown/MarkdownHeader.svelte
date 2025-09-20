<script lang="ts">
	import { GITHUB_URL } from "@/lib/utils";
	import Button, { type ButtonVariant } from "../ui/button/button.svelte";
	import type { I_Technology } from "../technologies/technologies";
	import IconifyIcon from "../IconifyIcon.svelte";

	type Props = {
		selected: I_Technology | null;
		btnVariant?: ButtonVariant;
	};

	let { selected, btnVariant }: Props = $props();
</script>

<div class="flex w-full max-w-[980px] grow gap-8 p-2 2xl:px-0">
	{#if selected}
		<span class="flex w-full items-center gap-4 text-2xl">
			<IconifyIcon icon={selected.icon} width="32px" height="32px" />
			{selected.name}
		</span>
		<span class="flex flex-col gap-2 lg:flex-row">
			<Button
				variant={btnVariant}
				class="hover:cursor-pointer"
				onclick={() => window.open(selected?.website, "_blank")}
			>
				<IconifyIcon icon="lucide:globe" width="24px" height="24px" />
				<span>Visit Website</span>
				<IconifyIcon icon="lucide:external-link" width="16px" height="16px" />
			</Button>
			<Button
				variant={btnVariant}
				class="hover:cursor-pointer"
				onclick={() => window.open(`${GITHUB_URL}/${selected?.github}/#readme`, "_blank")}
			>
				<IconifyIcon icon="lucide:github" width="24px" height="24px" />
				<span>GitHub Repo</span>
				<IconifyIcon icon="lucide:external-link" width="16px" height="16px" />
			</Button>
		</span>
	{:else}
		<span class="px-2 text-2xl">About this Portfolio</span>
	{/if}
</div>
