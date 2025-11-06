<script lang="ts">
	import Button, { type ButtonVariant } from "../ui/button/button.svelte";
	import IconifyIcon from "../ui-custom/IconifyIcon.svelte";
	import type { I_Technology } from "$lib/assets/technologies";
	import { GITHUB_URL } from "$lib/assets/urls";

	type Props = {
		selected: I_Technology | null;
		defaultTitle: string;
		btnVariant?: ButtonVariant;
	};

	let { selected, defaultTitle, btnVariant }: Props = $props();
</script>

<div class="flex w-full max-w-[896px] grow gap-8 p-2 2xl:px-0">
	{#if selected}
		<span class="flex w-full items-center gap-4 text-2xl">
			<IconifyIcon icon={selected.icon} width="32px" height="32px" />
			{selected.name}
		</span>
		<span class="flex flex-row gap-2">
			<Button variant={btnVariant} class="hover:cursor-pointer" onclick={() => window.open(selected.website, "_blank")}>
				<IconifyIcon icon="lucide:globe" width="24px" height="24px" />
				<span class="hidden lg:block">Visit Website</span>
				<IconifyIcon icon="lucide:external-link" width="16px" height="16px" />
			</Button>
			<Button
				variant={btnVariant}
				class="hover:cursor-pointer"
				onclick={() => window.open(`${GITHUB_URL}/${selected.github}/#readme`, "_blank")}
			>
				<IconifyIcon icon="lucide:github" width="24px" height="24px" />
				<span class="hidden lg:block">GitHub Repo</span>
				<IconifyIcon icon="lucide:external-link" width="16px" height="16px" />
			</Button>
		</span>
	{:else}
		<span class="px-2 text-2xl">{defaultTitle}</span>
	{/if}
</div>
