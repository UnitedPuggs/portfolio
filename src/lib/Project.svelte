<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion/index.js';

	let props: {
		name: string;
		description: string;
		source?: string;
		link?: string;
	} = $props();
</script>

<div class="h-fit w-full rounded-md border p-2 backdrop-blur-lg lg:w-76">
	<div>
		<Accordion.Root type="multiple">
			<Accordion.Item value={props.name}>
				<Accordion.Trigger><h4 class="text-xl">{props.name}</h4></Accordion.Trigger>
				<Accordion.Content>
					<p class="text-lg">{props.description}</p>
					<div class="flex justify-between pt-4">
						{#if props.source}
							<a
								href={props.source}
								class="rounded-full border-2 border-white px-2 py-1 text-lg transition hover:scale-90"
								>Source Code</a
							>
						{/if}
						{#if props.link}
							<a
								href={props.link}
								class="rounded-full border-2 border-white px-2 py-1 text-lg transition hover:scale-90"
								>View Project</a
							>
						{/if}
					</div>
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	</div>
</div>
