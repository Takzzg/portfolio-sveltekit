<script lang="ts">
	import "./github-markdown.css";
	import { mode } from "mode-watcher";
	import Markdown from "svelte-exmarkdown";
	import { gfmPlugin } from "svelte-exmarkdown/gfm";

	let testMarkdown = `
# H1
## H2
### H3
#### H4
##### H5
###### H6

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------
`;
	const plugins = [gfmPlugin()];
</script>

<div class="markdown-body w-full border-2" data-theme={mode.current}>
	<Markdown md={testMarkdown} {plugins} />
</div>

<style>
	/* thanks to https://github.com/sindresorhus - https://github.com/sindresorhus/github-markdown-css */

	.markdown-body {
		box-sizing: border-box;
		min-width: 200px;
		max-width: 980px;
		margin: 0 auto;
		padding: 45px;
	}

	@media (max-width: 767px) {
		.markdown-body {
			padding: 15px;
		}
	}
</style>
