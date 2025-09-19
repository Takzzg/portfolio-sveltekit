<script lang="ts">
	import Markdown from "svelte-exmarkdown";
	import { gfmPlugin } from "svelte-exmarkdown/gfm";
	import rehypeRaw from "rehype-raw";
	import { mode } from "mode-watcher";

    import './github-markdown.css'
	import { GITHUB_API_URL } from "@/lib/utils";
	import type { I_Technology } from "../technologies/technologies";

	let { selected }: { selected: I_Technology | null } = $props();
	let loadingMD = $state(false);
	let md = $state<string | null>(null);
	let styled = $state<HTMLDivElement>();

	const plugins = [gfmPlugin(), { rehypePlugin: rehypeRaw }];

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

	// export const scrollTo = (options?: ScrollToOptions) => styled?.scrollTo(options);
</script>

{#if !selected}
	<div class="bg-red-500">No tech selected</div>
{:else if loadingMD}
	<div class="bg-red-500">Loading Readme...</div>
{:else if !md}
	<div class="bg-red-500">No readme for selected tech</div>
{:else}
	<div bind:this={styled} class="markdown-body h-full w-full overflow-auto border-2" data-theme={mode.current}>
		<Markdown {md} {plugins} />
	</div>
{/if}

<style>
	.markdown-body {
		box-sizing: border-box;
		max-width: 980px;
		margin: 0 auto;
		padding: 45px;
	}

	@media (max-width: 767px) {
		.markdown-body {
			padding: 15px;
			max-width: 100vw;
		}
	}
</style>
