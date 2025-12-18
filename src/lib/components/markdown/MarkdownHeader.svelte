<script lang="ts">
	import Button, { type ButtonVariant } from "../ui/button/button.svelte";
	import IconifyIcon from "../ui-custom/IconifyIcon.svelte";
	import type { I_Technology } from "$lib/assets/technologies";
	import { URL_GITHUB_BASE } from "$lib/assets/urls";
	import { Icons } from "$lib/assets/icons";

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
				<IconifyIcon icon={Icons.GLOBE} width="24px" height="24px" />
				<span class="hidden lg:block">Visit Website</span>
				<IconifyIcon icon={Icons.EXTERNAL_LINK} width="16px" height="16px" />
			</Button>
			<Button
				variant={btnVariant}
				class="hover:cursor-pointer"
				onclick={() => window.open(`${URL_GITHUB_BASE}/${selected.github}/#readme`, "_blank")}
			>
				<IconifyIcon icon={Icons.GITHUB} width="24px" height="24px" />
				<span class="hidden lg:block">GitHub Repo</span>
				<IconifyIcon icon={Icons.EXTERNAL_LINK} width="16px" height="16px" />
			</Button>
		</span>
	{:else}
		<span class="px-2 text-2xl">{defaultTitle}</span>
	{/if}
</div>
