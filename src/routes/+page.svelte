<script lang="ts">
	import linkedin from '$lib/assets/linkedin.png';
	import github from '$lib/assets/github.png';
	import resume from '$lib/assets/Resume_EP.pdf';
	import Project from '$lib/Project.svelte';

	let { data } = $props();

	const images: string[] = data.images?.url;

	const name: string = 'Eddie Poulson';
	const splitName: string[] = name.split('');

	function scrollIntoView({ target }: { target: EventTarget | null }) {
		const href = document.querySelector((target as HTMLElement).getAttribute('href') ?? '');
		if (!href) {
			return;
		} else {
			href.scrollIntoView({
				behavior: 'smooth'
			});
		}
	}
</script>

<svelte:head>
	<title>{name}</title>
</svelte:head>
<nav
	class="sticky top-0 z-50 flex w-full p-4 backdrop-blur-sm lg:justify-between border-b border-stone-900 lg:flex-row flex-col lg:gap-0 gap-4"
>
	<div class="flex text-lg items-center justify-center">
		<div class="flex">
			<div>
				{#each splitName as char}
					<span
						class="inline-block font-bold transition-all delay-0 duration-700 ease-out hover:-translate-y-3 {char ===
						' '
							? 'opacity-0'
							: ''}"
					>
						{char === ' ' ? '\u00A0' : char}
					</span>
				{/each}
			</div>
			<span class="font-mono">&nbsp;/ software engineer</span>
		</div>
	</div>
	<div
		class="flex items-center justify-center gap-10 text-lg"
	>
		<a href="#about-me" onclick={scrollIntoView} class="font-mono opacity-50 hover:opacity-100">about</a>
		<a href="#projects" onclick={scrollIntoView} class="font-mono opacity-50 hover:opacity-100">projects</a>
		<a href={resume} download class="font-mono opacity-50 hover:opacity-100">resume ↓</a>
	</div>
</nav>
<section class="flex flex-col px-4 lg:py-10 py-4">
	<p class="text-xl font-semibold lg:text-3xl">
		Passionate about creating efficient software, and working on whatever's currently in my garage.
	</p>
	<div class="mt-2 flex lg:gap-4 gap-2">
		<a href="https://github.com/UnitedPuggs" target="_blank" class="opacity-50 hover:opacity-100">GitHub</a>
		<span class="opacity-50">/</span>
		<a href="https://www.linkedin.com/in/eddie-poulson/" target="_blank" class="opacity-50 hover:opacity-100">LinkedIn</a>
	</div>
</section>
<section class="flex w-max gap-0.5" id="carousel">
	{#each images as image}
		<img src={image} alt="carousel" class="lg:h-96  h-72 w-fit object-cover select-none" />
	{/each}
	{#each images as image}
		<img src={image} alt="carousel" class="lg:h-96 h-72 w-fit object-cover select-none" />
	{/each}
</section>
<div class="flex lg:flex-row flex-col border-t border-b border-stone-900">
	<section class="flex flex-col p-4 lg:w-1/2 lg:border-r lg:border-b-0 border-b border-stone-900">
		<h1 id="about-me" class="text-center font-mono text-sm opacity-50 lg:text-start">
			ABOUT
		</h1>
		<p class="text-lg">
			I'm a software engineer from Southern California, as well as a bit of an <em>aspiring</em> race
			car driver. Currently working at
			<a href="https://www.linkedin.com/company/capital-group/" class="underline hover:no-underline">
				Capital Group
			</a>, where I spend most of my time making my team's projects more efficient.
			<br />
			<br />
			Outside of all of that computer business, I'm a big car guy. I would love any opportunity to combine my passion for cars and software, should an
			opportunity present itself!
		</p>
	</section>
	<section class="flex flex-col p-4">
		<span class="opacity-50 text-sm">CURRENTLY</span>
		<p>Contracted Software Engineer • Capital Group</p>
		<p>Network Management</p>
		<span class="opacity-50 text-sm pt-4">STABLE</span>
		<ul>
			<li>'78 Porsche 911SC Targa</li>
			<li>'23 Audi A5 Sportback</li>
			<li>'01 BMW 325iT LeMons car</li>
		</ul>
		<span class="opacity-50 text-sm pt-4">LOCATION</span>
		<p>Orange County, CA</p>
	</section>
</div>
<section class="mx-auto flex flex-col p-4">
	<h1
		id="projects"
		class="font-mono text-sm opacity-50 lg:text-start"
	>
		PROJECTS
	</h1>
	<div class="flex flex-wrap gap-2">
		<Project
			name="carcult"
			description="
        Created by car enthusiasts, for car enthusiats. This aims to be the shortest possible path from enthusiast to meet. Probably being rewritten and redesigned again.
        "
			source="https://github.com/UnitedPuggs/carcult"
			link="https://carcult.org"
		/>
		<Project
			name="obelisk"
			description="
        The big thing that I work on at Capital Group! A Django monolith that integrates with LogicMonitor to track thousands of network devices and surface alerts to the NOC. I've focused on improving performance and reliability by introducing caching strategies, cutting down N+1 queries, and refactoring core modules. I also built onboarding workflows that let admins quickly bring in devices from both cloud and physical sources, streamlining how our teams manage critical infrastructure.
        "
		/>
		<Project
			name="DigiDigits"
			description="
        Utilizes the TCGPlayer API to store market price data for Digimon cards in a SQLite database to create datasets. 
        Future plans include using time-series forecasting and regression anaylsis to find optimal times to buy and sell cards."
			source="https://github.com/UnitedPuggs/DigiDigits"
		/>
		<Project
			name="shortstack"
			description="A solution to a problem I had with sending FB Marketplace links to friends of mine. Had a fun little pancake theme to it and a feed feature to see what links people were 'stacking'!"
			source="https://github.com/UnitedPuggs/shortstack"
		/>
		<Project
			name="Animal Log"
			description="PWA for tracking exotic pet feeding schedules, QR-tagged tanks, mobile-first, and built to solve my fiancée's problem of remembering what animals were fed when."
			source="https://github.com/UnitedPuggs/animal-log"
			link="https://animal-log.vercel.app/"
		/>
		<Project
			name="Jotsync"
			description="A glorified notepad web app. It utilizes PocketBase's realtime functionality to allow users to create notes and then share and collaborate on them in realtime. Has a link sharing system and that's really all there is to it."
			source="https://github.com/UnitedPugs/jotsync"
			link="https://jotsync.vercel.app"
		/>
	</div>
</section>
