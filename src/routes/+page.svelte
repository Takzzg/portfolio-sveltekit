<script lang="ts">
	import { getContext } from "svelte";

	import Splash from "@/lib/components/Splash.svelte";
	import Portfolio from "$lib/components/technologies/Portfolio.svelte";
	import Skills from "@/lib/components/technologies/Skills.svelte";
	import { Button } from "$lib/components/ui/button";
	import AboutMe from "$lib/components/AboutMe.svelte";
	import type { ContextState } from "./+layout.svelte";
	import Projects from "$lib/components/projects/Projects.svelte";
	import type { UIEventHandler } from "svelte/elements";
	import IconifyIcon from "@/lib/components/IconifyIcon.svelte";

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

			if (Math.abs(childOffset - parentScroll) <= parentOffset * 2) {
				context.currentSection = index;
				break;
			}
		}
	};
</script>

<div bind:clientHeight={height} onscroll={OnScroll} class="h-full overflow-y-scroll" style="--height:{height};">
	<div bind:this={refSplash} class="lgFixedHeight">
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

	<div class="absolute right-0 bottom-0 m-4 flex flex-col gap-2">
		<Button
			onclick={scrollPrev}
			variant="ghost"
			disabled={context.currentSection == 0}
			class="bg-background/25 h-auto border-2 border-secondary p-0 text-secondary opacity-50 hover:cursor-pointer disabled:opacity-15"
		>
			<IconifyIcon icon="lucide:chevron-up" height="48px" width="48px" />
		</Button>
		<Button
			onclick={scrollNext}
			variant="ghost"
			disabled={context.currentSection == context.sectionButtons.length - 1}
			class="bg-background/25 h-auto border-2 border-secondary p-0 text-secondary opacity-50 hover:cursor-pointer disabled:opacity-15"
		>
			<IconifyIcon icon="lucide:chevron-down" height="48px" width="48px" />
		</Button>
	</div>
</div>

<style>
	@media (min-width: 1024px) {
		.lgFixedHeight {
			height: calc(var(--height) * 1px);
		}
	}
</style>
