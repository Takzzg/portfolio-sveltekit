<script lang="ts">
	import type { UIEventHandler } from "svelte/elements";

	import AboutMe from "$lib/components/sections/AboutMe.svelte";
	import * as State from "$lib/state/GlobalState.svelte";
	import Projects from "$lib/components/sections/Projects.svelte";
	import Splash from "$lib/components/sections/Splash.svelte";
	import Portfolio from "$lib/components/sections/Portfolio.svelte";
	import Skills from "$lib/components/sections/Skills.svelte";

	let height: number = $state(0);

	// dom refs
	let refSplash = $state<HTMLDivElement>();
	let refAboutMe = $state<HTMLDivElement>();
	let refSkills = $state<HTMLDivElement>();
	let refProjects = $state<HTMLDivElement>();
	let refPortfolio = $state<HTMLDivElement>();

	let sections = $derived([
		{
			text: "Home",
			target: refSplash,
			element: Splash,
		},
		{
			text: "Skills",
			target: refSkills,
			element: Skills,
		},
		{
			text: "About Me",
			target: refAboutMe,
			element: AboutMe,
		},
        {
            text: "Portfolio",
            target: refPortfolio,
            element: Portfolio,
        },
		{
			text: "Projects",
			target: refProjects,
			element: Projects,
		},
	]);

	$effect(() => {
		const buttons = sections.map((sec) => ({ text: sec.text, index: sections.indexOf(sec) }));
		State.setScrollButtons(buttons);
		State.setScrollFn(scrollToIndex);
	});

	const scrollToIndex = (index: number) => {
		let target = sections.at(index)?.target;
		target?.scrollIntoView({ behavior: "smooth" });
		State.setScrollCurrent(index);
	};

	const OnScroll: UIEventHandler<HTMLDivElement> = (event) => {
		for (let index = 0; index < sections.length; index++) {
			let el = sections.at(index)?.target;

			let childOffset: number = el?.offsetTop ?? 0;
			let parentScroll: number = el?.parentElement?.scrollTop ?? 0;
			let parentOffset: number = el?.parentElement?.offsetTop ?? 0;

			if (Math.abs(childOffset - parentScroll) <= parentOffset * 2) {
				State.setScrollCurrent(index);
				break;
			}
		}
	};
</script>

<div bind:clientHeight={height} onscroll={OnScroll} class="h-full overflow-y-scroll" style="--height:{height};">
	{#each sections as sec}
		<div bind:this={sec.target} class="lgFixedHeight border-b-2">
			<sec.element />
		</div>
	{/each}
</div>

<style>
	@media (min-width: 1024px) {
		.lgFixedHeight {
			height: calc(var(--height) * 1px);
		}
	}
</style>
