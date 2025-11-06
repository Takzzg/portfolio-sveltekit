<script lang="ts">
	import type { Snippet } from "svelte";
	import type { ClassValue } from "svelte/elements";

	type Props = {
		children: Snippet;
		onObserve?: (entry: IntersectionObserverEntry) => void;
		threshold?: number;
		className?: ClassValue;
	};

	let refParent = $state<HTMLDivElement>();
	let { children, onObserve, className, threshold = 0 }: Props = $props();

	$effect(() => {
		let observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					// console.log(entry);
					onObserve?.(entry);
				});
			},
			{ threshold },
		);

		if (refParent) observer.observe(refParent);
		return () => {
			observer.disconnect();
		};
	});
</script>

<div bind:this={refParent} class="{className}">
	{@render children()}
</div>
