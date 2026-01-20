<script lang="ts">
	import Contact from "../../ui-custom/contact/Contact.svelte";
	import { I_TraKeyAboutMe, translateKey } from "./AboutMe.translations";
</script>

<div class="flex h-full w-full items-center justify-center text-xl">
	<div class="flex max-w-2xl flex-col gap-4 p-4">
		<h2 class="text-2xl">{translateKey(I_TraKeyAboutMe.title)}</h2>
		<p>{translateKey(I_TraKeyAboutMe.blob)}</p>
		<Contact />
	</div>
</div>
