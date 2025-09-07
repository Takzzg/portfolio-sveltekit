<script lang="ts">
	import "iconify-icon";

	import { m } from "$lib/paraglide/messages";
	import StyledMarkdown from "$lib/components/markdown/StyledMarkdown.svelte";
</script>

{#snippet techLogoBanner(icon: string)}
	<div class="flex items-center rounded-sm p-2 align-sub hover:cursor-pointer hover:bg-white/10">
				<iconify-icon {icon} class="h-[64px] w-[300px]" height="64px" width="300px"></iconify-icon>
			</div>
{/snippet}

{#snippet techLogoIcon(icon: string, prettyName: string)}
			<div
				class="flex items-center gap-4 rounded-sm p-2 align-sub hover:cursor-pointer hover:bg-white/10"
			>
				<iconify-icon {icon} class="h-[64px] w-[64px]" height="64px" width="64px"></iconify-icon>
				<span class="text-2xl">{prettyName}</span>
			</div>
{/snippet}

<div class="grid h-full grid-rows-[100%_auto]">
	<div class="flex flex-col items-center justify-center bg-primary/10">
		<h1 class="text-5xl">{m.tiny_crisp_skate_lead()}</h1>

		<div class="p-10">
			<h3 class="text-3xl">{m.new_free_cougar_leap()}</h3>
			<h5 class="text-2xl">{m.sharp_trite_bulldog_dash()}</h5>
		</div>
	</div>

	<div class="m-auto grid w-full grid-cols-[auto_1fr] items-center gap-4 p-4">
		<h3 class="col-span-2 text-center text-xl">This portfolio was made using:</h3>

		<div class="flex flex-col justify-center gap-1">
			{@render techLogoBanner("logos:svelte-kit")}
			{@render techLogoBanner("logos:tailwindcss")}

			{@render techLogoIcon("devicon:vercel", "Vercel")}
			{@render techLogoIcon("logos:typescript-icon", "TypeScript")}
			{@render techLogoIcon("vscode-icons:file-type-light-shadcn", "shadcn/ui")}
			{@render techLogoIcon("logos:vitejs", "Vite")}
			{@render techLogoIcon("logos:prettier", "Prettier")}
			{@render techLogoIcon("logos:eslint", "ESLint")}
		</div>

		<StyledMarkdown />
	</div>
</div>
