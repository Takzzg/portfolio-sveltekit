<script lang="ts">
	import "./github-markdown.css";
	import { getTheme, getSystemTheme } from "../../state/GlobalState.svelte";
	import IconifyIcon from "../ui-custom/IconifyIcon.svelte";
	import type { I_Technology } from "$lib/assets/technologies";
	import { URL_GITHUB_API } from "$lib/assets/urls";
	import { Icons } from "$lib/assets/icons";
	import { I_TraKeyMarkdownBody, translateKey } from "./MarkdownBody.translations";

	let { selected }: { selected: I_Technology | null } = $props();
	let loadingMD = $state(false);
	let md = $state<any | null>(null);
	let scrollable = $state<HTMLDivElement>();

	let darkTheme = $derived(getTheme() == "dark" || (getTheme() == "system" && getSystemTheme() == "dark"));

	const fetchReadme = async (github: string) => {
		loadingMD = true;
		const res = await fetch(`${URL_GITHUB_API}/repos/${github}/readme`, {
			headers: { Accept: "application/vnd.github.html+json" },
		});
		const data = await res.text();
		loadingMD = false;
		md = data;
		scrollable?.scrollTo({ top: 0, behavior: "smooth" });
	};

	$effect(() => {
		if (selected?.github) fetchReadme(selected?.github);
		else md = null;
	});
</script>

<div class="relative m-auto mt-0 h-full max-h-[800px] w-full max-w-[896px] overflow-hidden lg:max-h-full">
	{#if loadingMD}
		<div class="absolute z-10 flex h-full w-full items-center justify-center">
			<span class="z-10">{translateKey(I_TraKeyMarkdownBody.loading)} README.md...</span>
			<span class="absolute h-full w-full bg-background/15 backdrop-blur-sm"></span>
		</div>
	{/if}

	{#if !selected}
		<div class=" flex h-full w-full items-center justify-center">
			<div class="flex flex-col items-center justify-center gap-4 p-8">
				<IconifyIcon icon={Icons.MOUSE_CLICK} height="64px" width="64px" />
				<span class="text-2xl">{translateKey(I_TraKeyMarkdownBody.promtp_title)}</span>
				<span>{translateKey(I_TraKeyMarkdownBody.prompt_click)} README.md</span>
			</div>
		</div>
	{:else if md}
		<div bind:this={scrollable} class="max-h-full overflow-x-auto">
			<div data-theme={darkTheme && "dark"} class="markdown-body box-border border-x-2 p-8">
				{@html md}
			</div>
			<div class="mb-4 w-full border-t-2"></div>
		</div>
	{/if}
</div>
