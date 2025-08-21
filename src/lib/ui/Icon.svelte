<script lang="ts">
	let { icon, size }: { icon: string; size: 'icon' | 'banner' } = $props();
</script>

<div class="flex items-center rounded-sm p-2 align-sub hover:cursor-pointer hover:bg-white/10">
	<iconify-icon
		class={size == 'icon' ? 'h-[48px] w-[48px]' : 'h-[64px] w-[300px]'}
		{icon}
		height={size == 'icon' ? '48px' : '64px'}
		width={size == 'icon' ? '48px' : '300px'}
	></iconify-icon>
</div>
