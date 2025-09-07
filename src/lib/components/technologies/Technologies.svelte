<script lang="ts">
	import "iconify-icon";

	import StyledMarkdown from "$lib/components/markdown/StyledMarkdown.svelte";
	import { Technologies } from "./technologies";

	let defaultMarkdown = `## Want to learn more ?\nClick on any item on the left and take a peek at it's readme.md file!`;

	let md = $state(defaultMarkdown);

	const fetchReadme = async () => {
		const res = await fetch(`https://raw.githubusercontent.com/sveltejs/kit/refs/heads/main/README.md`);
		const data = await res.text();
		md = data;
	};
</script>

{#snippet techLogoBanner(icon: string)}
	<button class="flex items-center rounded-sm p-2 align-sub hover:cursor-pointer hover:bg-white/10" aria-label="tech logo banner" onclick={fetchReadme}>
		<iconify-icon {icon} class="h-[64px] w-[300px]" height="64px" width="300px"></iconify-icon>
	</button>
{/snippet}

{#snippet techLogoIcon(icon: string, prettyName: string)}
	<div class="flex items-center gap-4 rounded-sm p-2 align-sub hover:cursor-pointer hover:bg-white/10">
		<iconify-icon {icon} class="h-[64px] w-[64px]" height="64px" width="64px"></iconify-icon>
		<span class="text-2xl">{prettyName}</span>
	</div>
{/snippet}

<div class="m-auto grid w-full grid-cols-[auto_1fr] items-center gap-4 p-4">
	<h3 class="col-span-2 text-center text-xl">This portfolio was made using:</h3>

	<div class="flex flex-col justify-center gap-1">
		{#each Technologies as tech}
			{#if tech.type == "banner"}
				{@render techLogoBanner(tech.icon)}
			{:else}
				{@render techLogoIcon(tech.icon, tech.name)}
			{/if}
		{/each}
	</div>

	<StyledMarkdown {md} />
</div>
