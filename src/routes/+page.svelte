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

	let autoScrollTargets = $derived([refSplash, refAboutMe, refSkills, refProjects, refPortfolio]);

	const scrollToIndex = (index: number) => {
		if (index < 0) index = 0;
		else if (index > autoScrollTargets.length) index = autoScrollTargets.length - 1;
		autoScrollTargets[index]?.scrollIntoView({ behavior: "smooth" });
		State.setScrollCurrent(index);
	};

	$effect(() => {
		const buttons = [
			{
				text: "Home",
				index: autoScrollTargets.indexOf(refSplash),
			},
			{
                text: "Skills",
				index: autoScrollTargets.indexOf(refSkills),
			},
            {
                text: "About Me",
                index: autoScrollTargets.indexOf(refAboutMe),
            },
			{
				text: "Projects",
				index: autoScrollTargets.indexOf(refProjects),
			},
			{
				text: "Portfolio",
				index: autoScrollTargets.indexOf(refPortfolio),
			},
		];
		State.setScrollButtons(buttons);
		State.setScrollFn(scrollToIndex);
	});

	const OnScroll: UIEventHandler<HTMLDivElement> = (event) => {
		for (let index = 0; index < autoScrollTargets.length; index++) {
			const el = autoScrollTargets[index];

			let childOffset: number = (el as HTMLElement).offsetTop ?? 0;
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
	<div bind:this={refSplash} class="lgFixedHeight border-b-2">
		<Splash />
	</div>

	<div bind:this={refSkills} class="lgFixedHeight border-b-2">
        <Skills />
	</div>
    
    <div bind:this={refAboutMe} class="lgFixedHeight border-b-2">
        <AboutMe />
    </div>

	<div bind:this={refProjects} class="lgFixedHeight border-b-2">
		<Projects />
	</div>

	<div bind:this={refPortfolio} class="lgFixedHeight border-b-2">
		<Portfolio />
	</div>
</div>

<style>
	@media (min-width: 1024px) {
		.lgFixedHeight {
			height: calc(var(--height) * 1px);
		}
	}
</style>
