<script>
    import { onMount } from "svelte";
    import { fly } from 'svelte/transition'
  import Project from "$lib/Project.svelte";
  import Skill from "../lib/Skill.svelte";
    
    export let data;
    const images = data.images[0].url;

    let loaded = false;

    const me = "Eddie Poulson";
    const split_me = me.split("");

    function scrollIntoView({ target }) {
        const da_ref = document.querySelector(target.getAttribute('href'));
        if(!da_ref)
            return;
        da_ref.scrollIntoView({
            behavior: 'smooth'
        });
    }

    onMount(() => {
        loaded = true;
    })
</script>
<svelte:head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eddie Poulson</title>
</svelte:head>
<body class="bg-black text-white mt-4 overflow-x-clip">
    {#if loaded}
    <section class="flex justify-center items-center sticky top-0 backdrop-blur-sm z-50">
        <div class="flex lg:flex-row flex-col justify-center items-center lg:justify-normal lg:items-baseline lg:w-1/3 lg:gap-0 gap-4">
            <div class="flex lg:flex-col lg:gap-0 gap-2 justify-center items-center lg:justify-normal lg:items-baseline">
                <div>
                    {#each split_me as char}
                        {#if char != " "}
                            <span class="text-3xl font-bold inline-block transition-all ease-out delay-0 duration-700 hover:-translate-y-3">{char}</span>
                        {:else}
                            <span>&nbsp;</span>
                        {/if}
                    {/each}
                </div>
                <span class="text-lg" in:fly={{ y: 400, duration: 600 }}>Software Engineer</span>
            </div>
            <div class="flex gap-2 lg:mr-0 lg:ml-auto font-bold hover:[&>*]:opacity-75 [&>*]:text-lg" in:fly={{ y: 400, duration: 700 }}>
                <a href="#projects" on:click|preventDefault={ scrollIntoView }>Projects</a>
                <a href="#about-me" on:click|preventDefault={ scrollIntoView }>About Me</a>
                <a href="#contact-me" on:click|preventDefault={ scrollIntoView }>Contact Me</a>
            </div>
        </div>
    </section>
    <section class="flex justify-center mt-4" in:fly={{ y: 500, duration: 900 }}>
        <div class="flex gap-4">
            <a href="https://github.com/UnitedPuggs" target="_blank">
                <img src="/assets/github.png" alt="Github" width=50 class="rounded-full hover:opacity-75">
            </a>
            <a href="https://www.linkedin.com/in/eddie-poulson/" target="_blank">
                <img src="/assets/linkin.png" alt="LinkedIn" width=50 class="hover:opacity-75">
            </a>
        </div>
    </section>
    <section class="flex justify-center items-center text-center lg:max-w-3xl max-w-[20rem] mx-auto mt-4" in:fly={{ y: 500, duration: 900 }}>
        <p class="font-bold text-2xl lg:text-4xl">A software engineer that's very passionate about creating impactful software and quirky little projects, in a town (probably) near you!</p>
    </section>
    <section class="flex my-4 gap-1 w-max" id="carousel" in:fly={{ y: 500, duration: 900 }}>
        {#each images as image}
            <img src={image} alt="something probably cool as fuck" class="w-fit h-72 object-cover select-none"/>
        {/each}
        {#each images as image}
            <img src={image} alt="something probably cool as fuck" class="w-fit h-72 object-cover select-none"/>
        {/each}
    </section>
    <section class="flex flex-col justify-center items-center" in:fly={{ y: 500, duration: 900 }}>
        <h1 id="projects" class="text-3xl font-bold">Projects</h1>
        <div class="grid lg:grid-cols-3 grid-cols-1 gap-4 justify-items-center mt-4">
            <Project 
            title="carcult" 
            desc="Created by car enthusiasts, for car enthusiasts. A passion project with the aim of connecting the enthusiast with the meet.
            Users are able to create 'garage' profiles and add photos of their vehicles. They're also able to check out what meets are happening local to them,
            as well as a fully-function Facebook Marketplace-esque marketplace, and a Miata.net/CivicX inspired forum."
            src="https://github.com/UnitedPuggs/carcult"
            link="https://carcult.org"
            />
            <Project
            title="shortstack"
            desc="This one was a solution to my problem of sending a bunch of links to cars for sale! Instead of sending 20 links, users can just send one. It
            also has a funny little pancake theme to it and a feed feature, so that everyone can see what links are being stacked!"
            src="https://github.com/UnitedPuggs/shortstack"
            link="https://shortstack.link"
            />
            <Project    
            title="SupportSearch"
            desc="Internal tool to serve publicly accessible customer info to IT support agents in a more efficient manner. An external website
            served as host to extra features, such as adding notes to specific customers, a mini API that served requests to a Chrome Extension
            that served as the 'front-end' (which I also made), and a feature request submission and voting system."
            src="https://github.com/UnitedPuggs/SupportSearch-Admin"
            />
            <Project
            title="DigiDigits"
            desc="A Python scripts that utilizes the TCGPlayer API to store market price data for Digimon cards in a SQLite database to create datasets.
            Data is served to a SvelteKit front-end from a Go back-end. Charts are made using Charts.js. There are plans to eventually attempt market price
            predictions using time-series forecasting and regression analyis, but the Digimon card market isn't very exciting when it comes to price changes."
            src="https://github.com/UnitedPuggs/DigiDigits"
            />
            <Project
            title="Jotsync"
            desc="A glorified notepad web app. It utilizes PocketBase's realtime functionality to allow users to create notes and then share
            and collaborate on them in realtime. Has a link sharing system and that's really all there is to it. My attempt to circumvent
            the poorly documented pocketbase auth SSR stuff would make God weep."
            src="https://github.com/UnitedPuggs/Jotsync"
            link="https://jotsync.vercel.app"
            />
            <Project
            title="WeekBeat"
            desc="A Friday Pulse clone, but with some features that aren't (weren't?) currently present, such as anonymous frustrations,
            suggestions, and celebrations. Notable because I learned Next.js + React over a weekend and built out an MVP in 4 days with just
            about all of the core functionality of Friday Pulse."
            src="https://github.com/UnitedPuggs/weekbeat"
            link="https://weekbeat.vercel.app/login"
            />
        </div>
    </section>
    <section class="flex flex-col justify-center items-center mt-4 lg:w-7/12 w-9/12 mx-auto" in:fly={{ y: 500, duration: 900 }}>
        <h1 id="about-me" class="text-3xl font-bold">About Me</h1>
        <p class="text-lg">
            I'm a software engineer and aspiring race car driver! I have my B.S. in Computer Science from <a href="https://www.fullerton.edu/" target="_blank">CSUF</a> and look to
            make some sort of impact with the software I develop. While most of my experience is in full-stack web development, I'm incredibly interested in broadening my view into 
            everything I'm able to do with the education I spent 4 years pursuing and am incredibly passionate about!
            <br>
            <br>
            Outside of all that computer magic, I'm a huge car nerd! I currently rock a 2001 Mazda Miata, that will eventually make it to a track, and a 2023 Volkswagen GTI. I also rode 
            motorcycles for a bit, but those have been sold in favor of trying to hunt down my first Porsche 911. Combining my passion for cars and passion for software development is also 
            something I'm very interested in :)
        </p>
        <div class="flex flex-col text-center gap-2 mt-4">
            <h2 class="text-3xl font-bold">Technical Skills</h2>
            <span>Languages</span>
            <div class="flex max-w-lg flex-wrap gap-1 justify-center">
                <Skill skill="C++"/>
                <Skill skill="Python" />
                <Skill skill="Java" />
                <Skill skill="SQL" />
                <Skill skill="JavaScript" />
                <Skill skill="HTML" />
                <Skill skill="CSS" />
                <Skill skill="PHP" />
                <Skill skill="R" />
                <Skill skill="ARM Assembly" />
                <Skill skill="Go" />
            </div>
            <span>Technologies</span>
            <div class="flex max-w-lg flex-wrap gap-1 justify-center">
                <Skill skill="React.js" />
                <Skill skill="Next.js" />
                <Skill skill="SvelteKit" />
                <Skill skill="Qt Creator" />
                <Skill skill="Linux" />
                <Skill skill="git" />
                <Skill skill="nginx" />
                <Skill skill="PocketBase" />
                <Skill skill="Supabase" />
                <Skill skill="TailwindCSS" />
                <Skill skill="jQuery" />
                <Skill skill="Django" />
            </div>
        </div>
    </section>
    <section class="flex flex-col justify-center items-center mx-auto lg:w-3/12 [&>*]:w-full" in:fly={{ y: 500, duration: 900 }}>
        <h1 id="contact-me" class="text-3xl font-bold text-center">Contact Me</h1>
        <a href="https://discordapp.com/users/267060525425229824" 
            class="flex flex-row justify-center items-center h-auto gap-2 border-4 border-white rounded-lg p-2 mt-2 transition ease-in-out hover:scale-110">
            <img src="/assets/discord.png" alt="discord" width=50>
            unitedpuggs
        </a>
        <a href="mailto:edpoulsonv@gmail.com"
            class="flex flex-row justify-center items-center h-auto gap-2 border-4 border-white rounded-lg p-2 mt-2 transition ease-in-out hover:scale-110">
            <img src="/assets/mail.png" alt="mail" width=50>
            edpoulsonv@gmail.com
        </a>
    </section>
    {/if}
</body>
<footer class="mt-6">
    <hr>
</footer>