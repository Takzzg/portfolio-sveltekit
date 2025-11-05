<script lang="ts">
	import "./github-markdown.css";
	import { GITHUB_API_URL } from "@/lib/utils";
	import type { I_Technology } from "../technologies/technologies";
	import IconifyIcon from "../IconifyIcon.svelte";
	import { getMode } from "../state/GlobalState.svelte";

	let { selected }: { selected: I_Technology | null } = $props();
	let loadingMD = $state(false);
	let md = $state<any | null>(null);
	let styled = $state<HTMLDivElement>();

	const fetchReadme = async (github: string) => {
		loadingMD = true;
		const res = await fetch(`${GITHUB_API_URL}/repos/${github}/readme`, {
			headers: { Accept: "application/vnd.github.html+json" },
		});
		const data = await res.text();
		loadingMD = false;
		md = data;
		styled?.scrollTo({ top: 0, behavior: "smooth" });
	};

	$effect(() => {
		if (selected?.github) fetchReadme(selected?.github);
		else md = null;
	});
</script>

<div class="relative m-auto mt-0 h-full max-h-[800px] w-full max-w-[896px] overflow-hidden lg:max-h-full">
	{#if loadingMD}
		<div class="absolute z-10 flex h-full w-full items-center justify-center">
			<span class="z-10">Loading Readme...</span>
			<span class="absolute h-full w-full bg-background/75 backdrop-blur-md"></span>
		</div>
	{/if}

	{#if !selected}
		<div class="flex h-full w-full flex-col items-center justify-center gap-4 bg-red-500 p-8">
			<IconifyIcon icon="lucide:mouse-pointer-click" height="64px" width="64px" />
			<span class="text-2xl">Learn more</span>
			<span>Click on any logo to take a peek at it's README.md</span>
		</div>
	{:else if md}
		<div
			bind:this={styled}
			data-theme={getMode()}
			class="markdown-body box-border max-h-full overflow-auto border-2 p-8"
		>
			{@html md}
		</div>
	{/if}
</div>
