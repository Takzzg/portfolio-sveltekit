<script lang="ts">
</script>

{#snippet langBtn(name: string)}
	<button
		onclick={() => console.log(name)}
		class="flex aspect-square items-center justify-center bg-stone-700 p-2 hover:cursor-pointer"
	>
		{name}
	</button>
{/snippet}

<div class="flex justify-between bg-black/75">
	<div class="flex p-4">NAVBAR</div>

	<div class="grid grid-cols-2 items-center gap-2 p-2">
		{@render langBtn('EN')}
		{@render langBtn('ES')}
	</div>
</div>
