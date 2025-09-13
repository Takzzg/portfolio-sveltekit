<script lang="ts">
	import { AllProjects, type I_Project } from "./projects";
</script>

{#snippet project(project: I_Project)}
	<div class="flex flex-col border-2 border-red-500">
		<span>{project.title}</span>
		<span>{project.description}</span>
		<a href={project.website} target="_blank">Website</a>
		<a href={project.github} target="_blank">Github</a>
	</div>
{/snippet}

<div>
	<span>Check out my projects</span>
	<div class="flex flex-col">
		{@render project(AllProjects.CONTACTS_APP)}
	</div>
</div>
