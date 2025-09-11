<script lang="ts">
	import IconifyIcon from "../IconifyIcon.svelte";
	import { FrontEnd, Styling, Development, BackEnd, Hosting, type I_Technology } from "./technologies";
</script>

{#snippet category(title: string, techList: I_Technology[])}
	<div class="flex w-full flex-col gap-2 overflow-hidden rounded-sm bg-background p-2 lg:w-auto">
		<span class="text-2xl">{title}</span>
		<div class="flex h-full w-full gap-2 overflow-auto">
			{#each techList as tech (tech.id)}
				{@render techLogo(tech)}
			{/each}
		</div>
	</div>
{/snippet}

{#snippet techLogo(tech: I_Technology)}
	<span class="flex items-center rounded-sm bg-stone-200 p-4">
		<IconifyIcon icon={tech.icon} height="128px" width="128px" />
	</span>
{/snippet}

<div class="grid h-full max-w-screen grid-rows-[auto_1fr] overflow-hidden bg-orange-400">
	<h2 class="bg-stone-200 p-4 text-4xl text-black">What I do</h2>
	<div class="grid h-full grid-cols-[1fr_auto] overflow-hidden">
		<div class="flex items-center justify-center bg-background/75 m-4 rounded-md">Flavour text</div>
		<div class="h-full overflow-hidden">
			<div class="grid max-h-full grid-cols-1 gap-4 overflow-y-auto p-4">
				{@render category("Front End", FrontEnd)}
				{@render category("Styling", Styling)}
				{@render category("Development", Development)}
				{@render category("BackEnd", BackEnd)}
				{@render category("Hosting", Hosting)}
			</div>
		</div>
	</div>
</div>
