<script lang="ts">
	import { GITHUB_API_URL } from "@/lib/utils";
	import type { I_Technology } from "../technologies/technologies";
	import MarkdownStyled from "./MarkdownStyled.svelte";

	let { selected }: { selected: I_Technology | null } = $props();
	let loadingMD = $state(false);
	let md = $state<string | null>(null);
	let styled = $state<MarkdownStyled>();

	const fetchReadme = async (github: string) => {
		loadingMD = true;
		const res = await fetch(`${GITHUB_API_URL}/repos/${github}/readme`, {
			headers: { Accept: "application/vnd.github.html+json" },
		});
		const data = await res.text();
		loadingMD = false;
		md = data;
	};

	$effect(() => {
		if (selected?.github) fetchReadme(selected?.github);
		else md = null;
	});

	export const scrollTo = (options?: ScrollToOptions) => styled?.scrollTo(options);
</script>

{#if !selected}
	<div class="bg-red-500">No tech selected</div>
{:else if loadingMD}
	<div class="bg-red-500">Loading Readme...</div>
{:else if !md}
	<div class="bg-red-500">No readme for selected tech</div>
{:else}
	<MarkdownStyled bind:this={styled} {md} />
{/if}
