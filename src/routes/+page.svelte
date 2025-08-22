<script lang="ts">
	import "iconify-icon";
	import { m } from "$lib/paraglide/messages";
	import { Button } from "$lib/components/ui/button";
	import { HoverCard, HoverCardContent, HoverCardTrigger } from "$lib/components/ui/hover-card";
</script>

{#snippet techLogoBanner(icon: string)}
	<HoverCard openDelay={50} closeDelay={50}>
		<!-- tooltip trigger -->
		<HoverCardTrigger>
			<div
				class="flex items-center rounded-sm p-2 align-sub hover:cursor-pointer hover:bg-white/10"
			>
				<iconify-icon {icon} class="h-[64px] w-[300px]" height="64px" width="300px"></iconify-icon>
			</div>
		</HoverCardTrigger>

		<!-- tooltip -->
		<HoverCardContent>Tooltip Test</HoverCardContent>
	</HoverCard>
{/snippet}

{#snippet techLogoIcon(icon: string, prettyName: string)}
	<HoverCard openDelay={50} closeDelay={50}>
		<!-- tooltip trigger -->
		<HoverCardTrigger>
			<div
				class="flex items-center gap-4 rounded-sm p-2 align-sub hover:cursor-pointer hover:bg-white/10"
			>
				<iconify-icon {icon} class="h-[64px] w-[64px]" height="64px" width="64px"></iconify-icon>
				<span class="text-2xl">{prettyName}</span>
			</div>
		</HoverCardTrigger>

		<!-- tooltip -->
		<HoverCardContent>Tooltip Test</HoverCardContent>
	</HoverCard>
{/snippet}

<div class="grid h-full grid-rows-[100%_auto]">
	<div class="flex flex-col items-center justify-center bg-primary/10">
		<h1 class="text-5xl">{m.tiny_crisp_skate_lead()}</h1>

		<div class="p-10">
			<h3 class="text-3xl">{m.new_free_cougar_leap()}</h3>
			<h5 class="text-2xl">{m.sharp_trite_bulldog_dash()}</h5>
		</div>
	</div>

	<div class="m-auto flex w-full max-w-[800px] flex-col gap-4 p-4">
		<Button>Click me</Button>

		<h3 class="text-center text-xl">This portfolio was made using:</h3>

		<div class="flex flex-row flex-wrap justify-center gap-1">
			{@render techLogoBanner("logos:svelte-kit")}
			{@render techLogoBanner("logos:tailwindcss")}
			{@render techLogoBanner("logos:vercel")}

			{@render techLogoIcon("logos:prettier", "Prettier")}
			{@render techLogoIcon("logos:eslint", "ESLint")}
			{@render techLogoIcon("logos:typescript-icon", "TypeScript")}
			{@render techLogoIcon("vscode-icons:file-type-light-shadcn", "shadcn/ui")}
		</div>
	</div>
</div>
