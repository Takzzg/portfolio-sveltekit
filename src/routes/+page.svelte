<script lang="ts">
	import { getContext } from "svelte";

	import Splash from "$lib/components/Splash.svelte";
	import Portfolio from "$lib/components/technologies/Portfolio.svelte";
	import Skills from "@/lib/components/technologies/Skills.svelte";
	import { Button } from "$lib/components/ui/button";
	import AboutMe from "$lib/components/AboutMe.svelte";
	import type { ContextState } from "./+layout.svelte";
	import Projects from "$lib/components/projects/Projects.svelte";
	import type { UIEventHandler } from "svelte/elements";

	let height: number = $state(0);

	// dom refs
	let refSplash = $state<HTMLDivElement>();
	let refAboutMe = $state<HTMLDivElement>();
	let refSkills = $state<HTMLDivElement>();
	let refProjects = $state<HTMLDivElement>();
	let refPortfolio = $state<HTMLDivElement>();

	let autoScrollTargets = $derived([refSplash, refAboutMe, refSkills, refProjects, refPortfolio]);
	let context = getContext("currentSection") as ContextState;

	const scrollNext = () => {
		if (context.currentSection == autoScrollTargets.length - 1) return;
		context.currentSection += 1;
		scrollCurrent();
	};
	const scrollPrev = () => {
		if (context.currentSection == 0) return;
		context.currentSection -= 1;
		scrollCurrent();
	};
	const scrollCurrent = () => {
		autoScrollTargets[context.currentSection]?.scrollIntoView({ behavior: "smooth" });
	};
	const scrollToSection = (target: HTMLDivElement | undefined) => {
		target?.scrollIntoView({ behavior: "smooth" });
	};

	$effect(() => {
		context.sectionButtons = [
			{
				text: "Home",
				index: autoScrollTargets.indexOf(refSplash),
				onclick: () => scrollToSection(refSplash),
			},
			{
				text: "About Me",
				index: autoScrollTargets.indexOf(refAboutMe),
				onclick: () => scrollToSection(refAboutMe),
			},
			{
				text: "Skills",
				index: autoScrollTargets.indexOf(refSkills),
				onclick: () => scrollToSection(refSkills),
			},
			{
				text: "Projects",
				index: autoScrollTargets.indexOf(refProjects),
				onclick: () => scrollToSection(refProjects),
			},
			{
				text: "Portfolio",
				index: autoScrollTargets.indexOf(refPortfolio),
				onclick: () => scrollToSection(refPortfolio),
			},
		];
	});

	const OnScroll: UIEventHandler<HTMLDivElement> = (event) => {
		for (let index = 0; index < autoScrollTargets.length; index++) {
			const el = autoScrollTargets[index];

			let childOffset: number = (el as HTMLElement).offsetTop ?? 0;
			let parentScroll: number = el?.parentElement?.scrollTop ?? 0;
			let parentOffset: number = el?.parentElement?.offsetTop ?? 0;

			// console.log(el, "childOffset", childOffset, "parentScroll", parentScroll, "parentOffset", parentOffset);

			if (Math.abs(childOffset - parentScroll) <= parentOffset) {
				context.currentSection = index;
				break;
			}
		}
	};
</script>

{#snippet sectionBtn(text: string, onclick = () => {})}
	<Button {onclick} variant="ghost" class="border-2 border-background/50 text-background hover:cursor-pointer">
		{text}
	</Button>
{/snippet}

<div bind:clientHeight={height} onscroll={OnScroll} class="grid h-full overflow-y-scroll" style="--height:{height};">
	<div bind:this={refSplash} style="height: {height}px;">
		<Splash />
	</div>

	<div bind:this={refAboutMe} class="lgFixedHeight">
		<AboutMe />
	</div>

	<div bind:this={refSkills} class="lgFixedHeight">
		<Skills />
	</div>

	<div bind:this={refProjects} class="lgFixedHeight">
		<Projects />
	</div>

	<div bind:this={refPortfolio} class="lgFixedHeight">
		<Portfolio />
	</div>

	<div class="absolute right-0 bottom-0 m-8 flex items-center gap-2 bg-red-500">
		{@render sectionBtn("Prev", scrollPrev)}
		{@render sectionBtn("Next", scrollNext)}
	</div>
</div>

<style>
	@media (min-width: 1024px) { /* match tailwind lg size */
		.lgFixedHeight {
			height: calc(var(--height) * 1px);
		}
	}
</style>
