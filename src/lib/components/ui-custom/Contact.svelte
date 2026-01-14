<script lang="ts">
	import { Icons } from "$lib/assets/icons";
	import { URL_CV_ENGLISH, URL_CV_SPANISH, URL_GITHUB_PROFILE } from "$lib/assets/urls";
	import Button from "../ui/button/button.svelte";
	import IconifyIcon from "./IconifyIcon.svelte";
</script>

<div class="mx-auto flex flex-col items-center justify-center gap-4 rounded-md border-2 p-4">
	<span class="text-xl">Get in contact</span>

	<div class="flex items-center justify-center gap-2">
		<Button
			variant="outline"
			class="cursor-pointer py-6"
			onclick={() => navigator.clipboard.writeText("guido98q@gmail.com")}
		>
			<span class="relative flex items-center">
				<IconifyIcon icon={Icons.EMAIL} height="32px" width="32px" />
				<span class="absolute -right-1 -bottom-0.5 flex rounded-full bg-background p-0.5">
					<IconifyIcon icon={Icons.AT_SIGN} height="16px" width="16px" />
				</span>
			</span>
			guido98q@gmail.com
			<span class="opacity-15 flex items-center">
				<IconifyIcon icon={Icons.CLIPBOARD} height="24px" width="24px" />
			</span>
		</Button>
	</div>

	<div class="flex items-center justify-center gap-2">
		<span>C.V.</span>
		<Button variant="outline" class="cursor-pointer p-2 text-lg" onclick={() => window.open(URL_CV_ENGLISH, "_blank")}>
			En
			<IconifyIcon icon={Icons.EXTERNAL_LINK} height="16px" width="16px" />
		</Button>
		<Button variant="outline" class="cursor-pointer p-2 text-lg" onclick={() => window.open(URL_CV_SPANISH, "_blank")}>
			Es
			<IconifyIcon icon={Icons.EXTERNAL_LINK} height="16px" width="16px" />
		</Button>
	</div>

	<Button class="cursor-pointer" onclick={() => window.open(URL_GITHUB_PROFILE, "_blank")}>
		<IconifyIcon icon={Icons.GITHUB} height="32px" width="32px" />
		Check out my Github Profile
	</Button>
</div>
