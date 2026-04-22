<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion/index.js';

	let props: {
		name: string;
		description: string;
		source?: string;
		link?: string;
	} = $props();
</script>

<div class="flex flex-col h-64 w-full rounded-xs border border-stone-700 p-2 backdrop-blur-lg lg:w-76">
	<h4 class="text-xl uppercase font-semibold my-2">{props.name}</h4>
	<section class="overflow-auto">
		<p class="opacity-70">{props.description}</p>
	</section>
	<div class="flex gap-6 mt-auto mb-0">
		{#if props.source}
			<a
				href={props.source}
				class="underline hover:no-underline underline-offset-2 decoration-dotted opacity-80"
				target="_blank"
				>SOURCE</a
			>
		{/if}
		{#if props.link}
			<a
				href={props.link}
				class="underline hover:no-underline underline-offset-2 decoration-dotted opacity-80"
				target="_blank"
				>LIVE →</a
			>
		{/if}
	</div>
</div>
