<script>
    import { fade, fly, slide } from 'svelte/transition';
    import { onMount } from 'svelte';
    
    let pics = []
    let index = 0;
    let loaded = false;

    let experienceVis = false;
    let aboutMeVis = false;
    let technicalVis = false;

    let expButton = "experience  v";
    let aboutMeButton = "about me  v";
    let technicalButton = "technical skills  v";

    async function get_image_urls() {
        const res = await fetch("/image");
        const obj = await res.json();
        for(let i = 0; i < obj.images.length; ++i) {
            pics.push("https://gzytpbcundzfdkivabpf.supabase.co/storage/v1/object/public/portfolio/images/" + obj.images[i]["name"])
        }
        pics = pics;
    }

    function next() {
        index = (index + 1) % pics.length;
    }

    function back() {
        index = (index - 1) % pics.length;
    }

    function toggleExperience() {
        experienceVis = !experienceVis;
        if(experienceVis == true)
            expButton = "experience  ʌ"
        else 
            expButton = "experience  v";
    }

    function toggleAboutMe() {
        aboutMeVis = !aboutMeVis;
        if(aboutMeVis == true)
            aboutMeButton = "about me  ʌ"
        else 
            aboutMeButton = "about me  v";
    }

    function toggleTechnical() {
        technicalVis = !technicalVis;
        if(technicalVis == true)
            technicalButton = "technical skills  ʌ"
        else 
            technicalButton = "technical skills  v";
    }

    onMount(() => {
         loaded = true; 
         get_image_urls();
         });



</script>

<svelte:head>
    <title>home</title>
</svelte:head>

<div id="container" class="flex flex-col justify-center items-center font-mono">
    {#if loaded}
        <h1 transition:fly={{ y: 20, duration: 300 }} class="text-white mt-5 font-bold text-2xl font-mono">Hi, I'm Eddie!</h1>
        <p transition:fly={{ y: 30, duration: 500 }} class="text-white font-mono">Your next best Software Engineer / Data Engineer</p>
    {/if}
    <!-- Gonna have to figure out how to make an image carousel and how to sorta upload images maybe sorta autonomously -->
    <div class="flex flex-row select-none" transition:fade={{ delay: 150 }}>
        {#if index > 0}
            <button class="text-white m-2 pl-5 hover:opacity-75" on:click={back}>&#60;</button>
        {:else}
            <button class="invisible m-2 pl-5">&#60;</button>
        {/if}

        {#each [pics[index]] as pic}
            <img src={pic} alt="" class="mt-4 h-96 w-[269px] md:w-[28rem] md:h-[40rem] rounded-md object-contain border-4 border-white">
        {/each}
        
        {#if index != pics.length - 1}
            <button class="text-white m-2 pr-5 hover:opacity-75" on:click={next}>&#62;</button>
        {:else}
            <button class="invisible m-2 pr-5">&#60;</button>
        {/if}
    </div>
    <div class="text-white mt-10 mb-10 flex flex-col text-left max-w-3xl" transition:fade={{ delay: 100 }}>
        <button class="hover:opacity-75 m-1" on:click={toggleExperience}>{expButton}</button>
        {#if experienceVis}
            <div transition:slide>
            <p><strong>Clubspeed</strong> - Aug. 2021 - Now<br>
            <strong><em>Jr. Software Engineer</em></strong><br>
                <ul class="list-disc pl-5">
                    <li>Primarily working on booking software built with NextJS 12, assisting create more dynamically styled components with TailwindCSS</li>
                    <li>Serving as a pillar of knowledge for technologies for newer projects, namely Redux, Redux Saga, and NextJS.</li>
                    <li>Contributing to the development and move to cloud-based software and increased modularity of existing parts of the core product.</li>
                </ul>
            <strong><em>IT Support Engineer / Automation Specialist (Aug. 2021 - Aug. 2023)</em></strong><br>
               <ul class="list-disc pl-5">
                    <li>Provided technical support for the company's software, contributing greatly to general knowledge relating to SQL and the use of PowerShell scripts to more quickly onboard customers.</li>
                    <li>Created complex T-SQL queries that helped speed up or automate manual tasks for customers pertaining to racing data for tens of thousands of guests and generating pre-made bookings by customer request.</li>
                    <li>Developed PowerShell and batch scripts that saved up to 40 man hours per year for SSL cert updates.</li>
                    <li>Continuous development of an internal tool in the form of a Chrome extension that utilizes internal APIs to more efficiently display useful customer information.</li>
               </ul>
            </div>
        {/if}
        <button class="hover:opacity-75 m-1" on:click={toggleAboutMe}>{aboutMeButton}</button>
        {#if aboutMeVis}
            <div transition:slide>
            <p class="text-gray-40">
                I'm a computer science student of CSU - Fullerton who graduated in May 2023 with a B.S. in CS. I'm looking for full-time roles related to software engineering, data engineering, or anything where I can make an impact! 
                <br>I love learning and intend to finish up a second degree (of which I'm halfway completed with) in Electrical Engineering and possibly some more in the future after I achieve financial stability. <br>In case it wasn't obvious,
                I love cars, motorcycles, and just motorsports in general. I have a little track monster '01 Mazda Miata I've been modifying and repairing for a few years and 3 other vehicles at the moment. I'd be incredibly interested
                at the opportunity to actually work on the software side of car manufacturing! <br>My specializations are full-stack web development with a smidge of data science/engineering. I'm interested in learning more about
                human-computer interaction, machine learning, and embedded software/systems.
            </p>
            </div>
        {/if}
        <button class="hover:opacity-75 m-1" on:click={toggleTechnical}>{technicalButton}</button>
        {#if technicalVis}
            <div transition:slide>
            <p>
                <strong>Fluent:</strong> C++, SQL, Python<br>
                <strong>Very Conversational:</strong> Java, ARM Assembly, Linux, Qt Creator, SvelteKit, TailwindCSS, git<br>
                <strong>Conversational:</strong> HTML, CSS, JavaScript, PHP, R, Apache2, nginx, Redis, Quart/Flask, NextJS, React<br>
                <strong>Learning:</strong> Rust, Apache Spark, PowerShell, GCP, AWS
            </p>
            </div>
        {/if}
    </div >
</div>