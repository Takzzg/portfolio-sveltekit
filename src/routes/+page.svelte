<script lang="ts">
	import Splash from "$lib/components/Splash.svelte";
	import Portfolio from "$lib/components/technologies/Portfolio.svelte";
	import Categories from "$lib/components/technologies/Categories.svelte";
	import { Button } from "$lib/components/ui/button";
	import AboutMe from "$lib/components/AboutMe.svelte";

	let height: number = $state(0);

	// dom refs
	let refSplash = $state<HTMLDivElement>();
	let refAboutMe = $state<HTMLDivElement>();
	let refCategories = $state<HTMLDivElement>();
	let refPortfolio = $state<HTMLDivElement>();

	let autoScrollTargets = $derived([refSplash, refAboutMe, refCategories, refPortfolio]);
	let currentSection = $state(0);

	const scrollNext = () => {
		if (currentSection == autoScrollTargets.length - 1) return;
		currentSection++;
		scrollCurrent();
	};
	const scrollPrev = () => {
		if (currentSection == 0) return;
		currentSection--;
		scrollCurrent();
	};
	const scrollCurrent = () => {
		autoScrollTargets[currentSection]?.scrollIntoView({ behavior: "smooth" });
	};

	$effect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						currentSection = autoScrollTargets.indexOf(entry.target as HTMLDivElement);
						console.log(currentSection);
					}
				});
			},
			{ threshold: 0.5 },
		);
		autoScrollTargets.forEach((el) => observer.observe(el as Element));
	});
</script>

{#snippet sectionBtn(text: string, onclick = () => {})}
	<Button {onclick} variant="ghost" class="border-2 border-background/50 text-background hover:cursor-pointer">
		{text}
	</Button>
{/snippet}

<div bind:clientHeight={height} class="grid h-full overflow-y-scroll" style="--height:{height};">
	<div bind:this={refSplash} style="height: {height}px;">
		<Splash />
	</div>

	<div bind:this={refAboutMe} class="lgFixedHeight">
		<AboutMe />
	</div>

	<div bind:this={refCategories} class="lgFixedHeight">
		<Categories />
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
	@media (min-width: 767px) {
		.lgFixedHeight {
			height: calc(var(--height) * 1px);
		}
	}
</style>
