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
	class="sticky top-0 z-50 flex w-full flex-col items-center justify-center py-2 backdrop-blur-sm lg:flex-row lg:justify-between"
>
	<div class="mx-auto flex lg:w-1/2">
		<div class="flex flex-col">
			<div>
				{#each splitName as char}
					<span
						class="inline-block text-3xl font-bold transition-all delay-0 duration-700 ease-out hover:-translate-y-3 lg:text-4xl {char ===
						' '
							? 'opacity-0'
							: ''}"
					>
						{char === ' ' ? '\u00A0' : char}
					</span>
				{/each}
			</div>
			<span class="mb-4 font-mono text-lg lg:mb-0">Software Engineer</span>
			<div class="mb-4 flex flex-row items-center justify-center gap-2 lg:mb-0 lg:justify-start">
				<a href="https://github.com/UnitedPuggs" target="_blank">
					<img src={github} alt="github" width="40" class="rounded-full hover:opacity-50" />
				</a>
				<a href="https://www.linkedin.com/in/eddie-poulson/" target="_blank">
					<img src={linkedin} alt="linkedin" width="40" class="rounded-sm hover:opacity-50" />
				</a>
			</div>
		</div>
	</div>
	<div
		class="flex flex-col items-center justify-center gap-2 font-semibold lg:w-1/4 lg:items-start lg:justify-start lg:text-lg"
	>
		<a
			href="#about-me"
			onclick={scrollIntoView}
			class="w-fit font-mono underline hover:no-underline">About Me</a
		>
		<a
			href="#projects"
			onclick={scrollIntoView}
			class="w-fit font-mono underline hover:no-underline">Personal Projects</a
		>
		<div class="flex gap-2">
			<a href={resume} download class="font-mono underline hover:no-underline">Download resume</a>
			<svg
				width="24px"
				height="24px"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
				<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
				<g id="SVGRepo_iconCarrier">
					<path
						opacity="0.5"
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M3 14.25C3.41421 14.25 3.75 14.5858 3.75 15C3.75 16.4354 3.75159 17.4365 3.85315 18.1919C3.9518 18.9257 4.13225 19.3142 4.40901 19.591C4.68577 19.8678 5.07435 20.0482 5.80812 20.1469C6.56347 20.2484 7.56459 20.25 9 20.25H15C16.4354 20.25 17.4365 20.2484 18.1919 20.1469C18.9257 20.0482 19.3142 19.8678 19.591 19.591C19.8678 19.3142 20.0482 18.9257 20.1469 18.1919C20.2484 17.4365 20.25 16.4354 20.25 15C20.25 14.5858 20.5858 14.25 21 14.25C21.4142 14.25 21.75 14.5858 21.75 15V15.0549C21.75 16.4225 21.75 17.5248 21.6335 18.3918C21.5125 19.2919 21.2536 20.0497 20.6517 20.6516C20.0497 21.2536 19.2919 21.5125 18.3918 21.6335C17.5248 21.75 16.4225 21.75 15.0549 21.75H8.94513C7.57754 21.75 6.47522 21.75 5.60825 21.6335C4.70814 21.5125 3.95027 21.2536 3.34835 20.6517C2.74643 20.0497 2.48754 19.2919 2.36652 18.3918C2.24996 17.5248 2.24998 16.4225 2.25 15.0549C2.25 15.0366 2.25 15.0183 2.25 15C2.25 14.5858 2.58579 14.25 3 14.25Z"
						fill="#ffffff"
					></path>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M12 16.75C12.2106 16.75 12.4114 16.6615 12.5535 16.5061L16.5535 12.1311C16.833 11.8254 16.8118 11.351 16.5061 11.0715C16.2004 10.792 15.726 10.8132 15.4465 11.1189L12.75 14.0682V3C12.75 2.58579 12.4142 2.25 12 2.25C11.5858 2.25 11.25 2.58579 11.25 3V14.0682L8.55353 11.1189C8.27403 10.8132 7.79963 10.792 7.49393 11.0715C7.18823 11.351 7.16698 11.8254 7.44648 12.1311L11.4465 16.5061C11.5886 16.6615 11.7894 16.75 12 16.75Z"
						fill="#ffffff"
					></path>
				</g>
			</svg>
		</div>
	</div>
</nav>
<section class="mx-auto my-4 flex items-center justify-center text-center">
	<p class="w-[32rem] bg-black text-2xl font-semibold lg:text-3xl">
		A software engineer that's very passionate about creating efficient software that has a real
		impact, and working on quirky little projects!
	</p>
</section>
<section class="my-4 flex w-max gap-0.5" id="carousel">
	{#each images as image}
		<img src={image} alt="carousel" class="h-72 w-fit object-cover select-none" />
	{/each}
	{#each images as image}
		<img src={image} alt="carousel" class="h-72 w-fit object-cover select-none" />
	{/each}
</section>
<section class="mx-auto flex flex-col p-4 lg:w-1/2 lg:p-0">
	<h1 id="about-me" class="text-center font-mono text-2xl font-bold underline lg:text-start">
		About Me
	</h1>
	<p class="bg-black text-lg font-bold">
		I'm a software engineer from Southern California, as well as a bit of an <em>aspiring</em> race
		car driver.<br />
		Currently working as a <s class="text-slate-400">contracted</s>
		Software Engineer @
		<a href="https://www.linkedin.com/company/capital-group/" class="underline hover:no-underline"
			>Capital Group</a
		>, where I spend most of my time making my team's projects more efficient.
		<br />
		<br />
		Outside of all of that computer magic, I'm a big car guy! The current stable is a track-prepped 2001
		Mazda Miata, 2023 VW GTI, 1978 Porsche 911SC, and <sup>1</sup>&frasl;<sub>2</sub> of a 2001 BMW
		325iT. I would love any opportunity to combine my passion for cars and software, should an
		opportunity present itself!
		<br />
		<br />
		Please check out my resume to get more of an idea of my educational background, skillset, and work
		experience 😊
	</p>
</section>
<section class="mx-auto flex flex-col p-4 lg:w-1/2 lg:p-0">
	<h1
		id="projects"
		class="mx-auto w-fit bg-black text-center font-mono text-2xl font-bold underline lg:mx-0 lg:text-start"
	>
		Personal Projects
	</h1>
	<div class="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-4">
		<Project
			name="carcult"
			description="
        Created by car enthusiasts, for car enthusiats. This aims to be the shortest possible path from enthusiast to meet. Currently trying to strip away the fat to see if an MVP has a chance out in the world.
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
        Project utilizing the TCGPlayer API to store market price data for Digimon cards in a SQLite database to create datasets. 
        There were some plans to 'predict' the market by using time-series forecasting and regression analysis, but the Digimon card market isn't very exciting when it comes to price swings."
			source="https://github.com/UnitedPuggs/DigiDigits"
		/>
		<Project
			name="shortstack"
			description="A solution to a problem I had with sending FB Marketplace links to friends of mine. Had a fun little pancake theme to it and a feed feature to see what links people were 'stacking'!"
			source="https://github.com/UnitedPuggs/shortstack"
		/>
		<Project
			name="Animal Log"
			description="My solution to my fiancée's problem with remembering which of her animals got what and when they got it.
        It's a PWA and ideally should be used in conjuction with NFC stickers for easy adding :)"
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
