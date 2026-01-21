<script lang="ts">
	import Intersection from "../../ui-custom/Intersection.svelte";
	import LangToggle from "../../ui-custom/preferences/LangToggle.svelte";
	import ThemeToggle from "../../ui-custom/preferences/ThemeToggle.svelte";
	import Contact from "../../ui-custom/contact/Contact.svelte";
	import { I_TranslationKeySplash, findTranslation } from "./Splash.translations";

	let refPageSettings = $state<HTMLDivElement>();
	// let refPaletteLeft = $state<HTMLDivElement>();
	// let refPaletteRight = $state<HTMLDivElement>();
</script>

<!-- !TODO -->
<!-- {#snippet palette()}
	<div class="flex gap-2 bg-background p-2 lg:flex-col">
		<div class="flex w-8 -rotate-90 items-center justify-center p-2 lg:w-auto lg:rotate-0">background</div>
		<div class="grid grid-cols-3 gap-2 lg:grid-cols-1">
			<div class="flex aspect-square items-center justify-center bg-stone-200 p-2 text-black">stone-200</div>
			<div class="flex aspect-square items-center justify-center bg-orange-400 p-2 text-black">orange-400</div>
			<div class="flex aspect-square items-center justify-center bg-teal-700 p-2 text-white">teal-700</div>
		</div>
	</div>
{/snippet} -->

<div class="relative flex h-full min-h-[800px] max-w-full flex-col items-center justify-center overflow-clip">
	<h1 class="text-center text-5xl">{findTranslation(I_TranslationKeySplash.center_text_1)}</h1>

	<div class="p-10">
		<h3 class="text-3xl">{findTranslation(I_TranslationKeySplash.center_text_2)}</h3>
		<h5 class="text-2xl">{findTranslation(I_TranslationKeySplash.center_text_3)}</h5>
	</div>

	<Contact />

	<Intersection
		threshold={1}
		className="lg:absolute p-4 bottom-4 left-4"
		onObserve={(entry) => refPageSettings?.classList.toggle("hideLeft", !entry.isIntersecting)}
	>
		<div bind:this={refPageSettings} class="show hideLeft">
			<div class="flex flex-col gap-2 rounded-md border-2 bg-background p-4">
				<span>Language</span>
				<div class="flex gap-2">
					<LangToggle type="icons" />
				</div>

				<span>Theme</span>
				<div class="flex gap-2">
					<ThemeToggle type="icons" />
				</div>
			</div>
		</div>
	</Intersection>

	<!-- <Intersection
		threshold={1}
		className="absolute top-4 lg:left-4"
		onObserve={(entry) => refPaletteLeft?.classList.toggle("hideLeft", !entry.isIntersecting)}
	>
		<div bind:this={refPaletteLeft} class="show hideLeft">
			{@render palette()}
		</div>
	</Intersection> -->

	<!-- <Intersection
		threshold={1}
		className="absolute bottom-4 lg:bottom-auto lg:top-4 lg:right-4"
		onObserve={(entry) => refPaletteRight?.classList.toggle("hideRight", !entry.isIntersecting)}
	>
		<div bind:this={refPaletteRight} class="show hideRight">
			{@render palette()}
		</div>
	</Intersection> -->
</div>

<style>
	.show {
		opacity: 1;
		translate: 0;
		transition: all 1s ease-in-out 250ms;
	}
	.hideLeft {
		opacity: 0;
		translate: -100%;
		transition-delay: 0s;
	}
	/* .hideRight {
		opacity: 0;
		translate: 100%;
		transition-delay: 0s;
	} */
</style>
