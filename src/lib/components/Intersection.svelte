<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		children: Snippet;
        element?: HTMLElement
		onObserve?: (entry: IntersectionObserverEntry) => void;
		margin?: string;
		threshold?: number;
	};

	let refParent = $state<HTMLDivElement>();
	let { children, element, onObserve, margin, threshold = 0 }: Props = $props();

	$effect(() => {
		let observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					console.log(entry);

					onObserve?.(entry);
				});
			},
			{ threshold, rootMargin: margin },
		);

		if (element) observer.observe(element);
		return () => {
			observer.disconnect();
		};
	});
</script>

{@render children()}
