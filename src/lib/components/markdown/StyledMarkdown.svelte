<script lang="ts">
	import "./github-markdown.css";
	import { mode } from "mode-watcher";
	import rehypeRaw from "rehype-raw";
	import Markdown from "svelte-exmarkdown";
	import { gfmPlugin } from "svelte-exmarkdown/gfm";

	let parent: HTMLDivElement;

	let { md } = $props();
	const plugins = [gfmPlugin(), { rehypePlugin: rehypeRaw }];

	export const scrollToTop = () => {
		parent.scrollTo({top:0, behavior:"smooth"});
	};
</script>

<div bind:this={parent} class="markdown-body h-full w-full overflow-auto border-2" data-theme={mode.current}>
	<Markdown {md} {plugins} />
</div>

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
