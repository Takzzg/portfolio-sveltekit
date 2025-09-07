<script lang="ts">
	import "./github-markdown.css";
	import { mode } from "mode-watcher";
	import rehypeRaw from "rehype-raw";
	import Markdown from "svelte-exmarkdown";
	import { gfmPlugin } from "svelte-exmarkdown/gfm";

	let { md } = $props();
	const plugins = [gfmPlugin(), { rehypePlugin: rehypeRaw }];
</script>

<div class="markdown-body border-2 h-full w-full overflow-auto" data-theme={mode.current}>
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
