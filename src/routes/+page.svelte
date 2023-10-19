<script>
    import { fly, slide } from "svelte/transition";
    import Project from "$lib/Project.svelte";
    import { onMount } from "svelte";

    export let data;
    let loaded = false;
    let short = data.images[0].url

    let experienceVis = false;
    let technicalVis = false;

    let expButton = "experience  v";
    let technicalButton = "technical skills  v";

    let curr_gallery_img = short[0];
    $: curr_gallery_idx = short.indexOf(curr_gallery_img)

    function toggleExperience() {
        experienceVis = !experienceVis;
        if(experienceVis == true)
            expButton = "experience  ʌ"
        else 
            expButton = "experience  v";
    }

    function next_img() {
        if(curr_gallery_idx + 1 < short.length) {
            curr_gallery_img = short[curr_gallery_idx + 1];
            curr_gallery_img = curr_gallery_img;
        }
    }

    function prev_img() {
        if(curr_gallery_idx - 1 >= 0) {
            curr_gallery_img = short[curr_gallery_idx - 1];
            curr_gallery_img = curr_gallery_img;
        }
    }

    onMount(() => {
        loaded = true;
    })
</script>

<svelte:head>
    <title>Eddie Poulson</title>
</svelte:head>

<body class="bg-gradient-to-r from-indigo-400 to-red-300 font-sans text-white mb-10">
    <nav class="mt-10">
        <div class="flex justify-center items-center mx-auto gap-6 font-semibold text-lg border-4 rounded-lg border-white shadow-lg w-fit p-3">
            <a href="/" class="transition ease-in-out hover:scale-110">Projects</a>
            <a href="/" class="transition ease-in-out hover:scale-110">About Me</a>
            <a href="/" class="transition ease-in-out hover:scale-110">Contact Me</a>
        </div>
    </nav>
    <div class="flex flex-col justify-center items-center mt-6">
        {#if loaded}
            <h1 class="text-4xl font-bold drop-shadow-lg" transition:fly={{ y: 300, duration: 500 }}>Hi, I'm Eddie Poulson</h1>
            <h2 class="text-2xl drop-shadow-md" transition:fly={{ y: 400, duration: 700 }}>your next best software engineer! :)</h2>
        {/if}
        <div class="p-2 flex flex-row gap-4">
            <a href="https://github.com/UnitedPuggs">
                <img src="/assets/github.png" alt="Github" width=50 class="rounded-full hover:opacity-75">
            </a>
            <a href="https://www.linkedin.com/in/eddie-poulson/">
                <img src="/assets/linkin.png" alt="LinkedIn" width=50 class="rounded-full hover:opacity-75">
            </a>
        </div>
        <p class="text-5xl w-[50rem] mt-2 font-bold text-center">An experienced full-stack web developer with a passion for all things computer science!</p>
        <section>
            <h1 class="text-4xl font-bold drop-shadow-md mt-20">About Me</h1>
            <p class="text-lg font-semibold w-[60rem]">
                I'm an aspiring software engineer, graduating with my B.S. in CS from CSUF in December of 2023! I'm looking for full-time roles related to software engineering,
                data engineering, or any engineering where I can make an impact!
                <br><br>
                Lately, I've been working on web development projects using SvelteKit or Next.js, but I've been slowly expanding into other cool fields! My next/current projects
                have more of a focus on things concerning data, learning more about computer vision, and trying to re-activate my electrical engineering knowledge with some
                light embedded software projects.
                <br><br>
                As for some of my personal interests, I love cars, motorcycles, and just motorsports in general! I currently have too many vehicles, but my favorite is my
                2001 Mazda Miata that I'm planning to track. Maybe I'll add a baja bug or some form of open wheel car to the mix, but that's something in the works. Combining
                my passion for cars and passion for developing software is something I'm very interested in, and have worked on some car-related projects!
            </p>
            <div class="flex flex-col justify-center items-center max-w-3xl mx-auto">
                <button class="hover:opacity-75 m-1 font-semibold text-xl" on:click={toggleExperience}>{expButton}</button>
                {#if experienceVis}
                <div transition:slide>
                <p><strong>Clubspeed</strong> - Aug. 2021 - Sep. 2023<br>
                <strong><em>IT Support Engineer</em></strong><br>
                   <ul class="list-disc pl-5">
                        <li>Provided technical support for the company's software, contributing greatly to general knowledge relating to SQL and the use of PowerShell scripts to more quickly onboard customers.</li>
                        <li>Created complex T-SQL queries that helped speed up or automate manual tasks for customers pertaining to racing data for tens of thousands of guests and generating pre-made bookings by customer request.</li>
                        <li>Developed PowerShell and batch scripts that saved up to 40 man hours per year for SSL cert updates.</li>
                        <li>Continuous development of an internal tool in the form of a Chrome extension that utilizes internal APIs to more efficiently display useful customer information.</li>
                        <li>Worked with the company's software engineers on a booking software built with NextJS 12 and assisted with improving dynamically styled components using TailwindCSS</li>
                        <li>Served as a resource for newer support techs to ask questions about more complex issues or issues involving customer SQL databases.</li>
                   </ul>
                </div>
                {/if}
            </div>
            <!-- Carousel here? -->
            <div class="pt-4 drop-shadow-xl flex flex-row justify-center">
                {#if curr_gallery_idx > 0}
                    <button class="text-3xl px-2" on:click={ prev_img }>&lt;-</button>
                {:else}
                    <button class="text-3xl px-2 invisible">&lt;-</button>
                {/if}
                <div style="background-image: url('{curr_gallery_img}');" class="bg-cover rounded-md select-none">
                    <img src={curr_gallery_img} alt="funni" class="h-[40rem] w-[40rem] border-2 border-white rounded-md object-contain bg-cover backdrop-blur-lg"/>
                </div>
                {#if curr_gallery_idx + 1 < short.length}
                    <button class="text-3xl px-2" on:click={ next_img }>-&gt;</button>
                {:else}
                    <button class="text-3xl px-2 invisible">-&gt;-</button>
                {/if}
            </div>
        </section>
        <section>
            <h1 class="text-4xl font-bold drop-shadow-md mt-10">Projects</h1>
            <div class="grid grid-cols-2 mt-4 md:gap-x-48 gap-y-6">
                <Project 
                title="carcult" 
                desc="Created by car enthusiasts, for car enthusiasts. A passion project with the aim of connection the enthusiast with the meet. Users are able to create 'garages' where they can add photos of their vehicles. Users are also able to check out what meets are happening nearby with a centralized meet calendar component." 
                src="https://github.com/UnitedPuggs/carcult" 
                link="https://carcult.org"/>
                <Project 
                title="DigiDigits" 
                desc="Python script that utilizes the TCGPlayer API to store Digimon card market price data in a SQLite database to create datasets. These datasets are used to create interactive graphs and predict market price data by using time-series forecasting and regression analysis." 
                src="https://github.com/UnitedPuggs/DigiDigits"
                />
                <Project
                title="WeekBeat"
                desc="Clone of Friday Pulse, but with features that aren't present currently, such as anonymous frustrations, suggestions, and celebrations. Learned the quirks and features of Next.js over a weekend and built an MVP in approximately 4 days with nearly all the core functionality of Friday Pulse!"
                src="https://github.com/UnitedPuggs/weekbeat"
                link="https://weekbeat.vercel.app/"
                />
                <Project 
                title="SupportSearch"
                desc="Internal tool to serve publicly accessible customer info to support agents in a more efficient manner. External website served as a host to extra features, such as adding notes to specific customers, a mini API that a Chrome extension would utilize, and a feature request submission and voting system."
                src="https://github.com/UnitedPuggs/SupportSearch-Admin"
                />
                <Project 
                title="CarGos"
                desc="OfferUp style marketplace with a sole focus on cars and motorcycles, built using a LAMP tech stack hosted on a GCP Computer Engine VM. My responsibilites were developing the API, managing the MySQL database, and managing the project by setting sprint goals and distributing tasks. Implemented the NHTSA API to populate the sell page with most makes, models, and trims. Developed a rudimentary real-time chat so that potential end-users could communicate and conduct sales."
                src="https://github.com/UnitedPuggs/CarGos"
                />
                <Project
                title="FinanceCalculatorV2"
                desc="A budget management system. Allows for users to input their expenses and have this program determine their savings and spendings. Allows for goals to be made too. Functionally, it's about 99% complete, just need some flair :)"
                src="https://github.com/UnitedPuggs/FinanceCalculatorV2"
                />
            </div>
        </section>
        <section class="font-semibold text-center">
            <h1 class="text-4xl font-bold drop-shadow-md mt-14">Contact Me</h1>
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
    </div>
</body>