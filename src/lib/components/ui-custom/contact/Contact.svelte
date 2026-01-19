<script lang="ts">
	import { Icons } from "$lib/assets/icons";
	import { URL_CV_ENGLISH, URL_CV_SPANISH, URL_GITHUB_PROFILE } from "$lib/assets/urls";
	import Button from "../../ui/button/button.svelte";
	import IconifyIcon from "../IconifyIcon.svelte";
	import ToolTip from "../ToolTip.svelte";
	import { I_TraKeyContact, translateKey } from "./Contact.translations";

	let showTooltip = $state(false);
	let email = "guido98q@gmail.com";

	const onClickEmail = () => {
		showTooltip = true;
		navigator.clipboard.writeText(email);
		setTimeout(() => (showTooltip = false), 1000);
	};
</script>

<div class="mx-auto flex flex-col items-center justify-center gap-4 rounded-md border-2 p-4">
	<span class="text-xl">{translateKey(I_TraKeyContact.title)}</span>

	<div class="flex items-center justify-center gap-2">
		<Button variant="outline" class="cursor-pointer py-6" onclick={onClickEmail}>
			<span class="relative flex items-center">
				<IconifyIcon icon={Icons.EMAIL} height="32px" width="32px" />
				<span class="absolute -right-1 -bottom-0.5 flex rounded-full bg-background p-0.5">
					<IconifyIcon icon={Icons.AT_SIGN} height="16px" width="16px" />
				</span>
			</span>
			{email}
			<span class="flex items-center opacity-15">
				<IconifyIcon icon={Icons.CLIPBOARD} height="24px" width="24px" />
			</span>
		</Button>
		<ToolTip classes={showTooltip ? "block" : "hidden"} text={"Copied to clipboard!"} />
	</div>

	<div class="flex items-center justify-center gap-2">
		<span>C.V.</span>
		<Button variant="outline" class="cursor-pointer text-lg" onclick={() => window.open(URL_CV_ENGLISH, "_blank")}>
			En
			<IconifyIcon icon={Icons.EXTERNAL_LINK} height="16px" width="16px" />
		</Button>
		<Button variant="outline" class="cursor-pointer text-lg" onclick={() => window.open(URL_CV_SPANISH, "_blank")}>
			Es
			<IconifyIcon icon={Icons.EXTERNAL_LINK} height="16px" width="16px" />
		</Button>
	</div>

	<Button class="cursor-pointer" onclick={() => window.open(URL_GITHUB_PROFILE, "_blank")}>
		<IconifyIcon icon={Icons.GITHUB} height="32px" width="32px" />
		{translateKey(I_TraKeyContact.action_github)}
	</Button>
</div>
