<script>
    import { fade, fly, slide } from 'svelte/transition';
    import { onMount } from 'svelte';
  import { transition_in } from 'svelte/internal';
    
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
        <h1 transition:fly={{ y: 20, duration: 500 }} class="text-white mt-5 font-bold text-2xl font-mono">Hi, I'm Eddie!</h1>
        <p transition:fly={{ y: 30, duration: 750 }} class="text-white font-mono">Your next best Software Engineer / Data Engineer</p>
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
    <div class="text-white mt-10 mb-10 flex flex-col text-left max-w-3xl" transition:fade={{ delay: 150 }}>
        <button class="hover:opacity-75 m-1" on:click={toggleExperience}>{expButton}</button>
        {#if experienceVis}
            <div transition:slide>
            <p><strong>Clubspeed</strong> - Aug. 2021 - Now<br>
            <em>IT Support Engineer / Automation Specialist</em><br>
               <ul class="list-disc pl-5">
                <li>Provided technical support for the company's software and troubleshot associated hardware</li>
                <li>Created complex T-SQL queries and scripts to efficiently automate the manipulation of data for MSSQL servers associated with the company's software.</li>
                <li>Working on an <a href="https://github.com/UnitedPuggs/SupportSearch" class="underline hover:no-underline">internal tool</a> (with a helper <a href="https://github.com/UnitedPuggs/SupportSearch-Admin" class="underline hover:no-underline">admin site</a>)
                    in the form of a Chrome extension that utilizes internal APIs to more efficiently server useful customer information.</li>
               </ul>
            </div>
        {/if}
        <button class="hover:opacity-75 m-1" on:click={toggleAboutMe}>{aboutMeButton}</button>
        {#if aboutMeVis}
            <div transition:slide>
            <p class="text-gray-40">
                I'm a computer science student of CSU - Fullerton with an expected graduation date of Dec. 2023! I'm currently looking for full-time roles starting
                in June of 2023, as I'll be "graduated" by May (I only have one class in fall). I love learning and intend to finish up a degree in Electrical Engineering and another in Economics once I've got 
                some more stability and experience in the field. I also love cars, especially my '01 Miata, and motorcycles and would like to explore the software side of car manufacturing.
                My specializations so far have been full-stack web development and data engineering with a bit of a machine learning emphasis. I'm interested in learning more about human-computer interaction,
                data engineering, and machine learning.
            </p>
            </div>
        {/if}
        <button class="hover:opacity-75 m-1" on:click={toggleTechnical}>{technicalButton}</button>
        {#if technicalVis}
            <div transition:slide>
            <p>
                <strong>Fluent:</strong> C++, SQL, Python<br>
                <strong>Very Conversational:</strong> Java, ARM Assembly, Linux(Ubuntu/Debian), Qt Creator, SvelteKit, TailwindCSS<br>
                <strong>Conversational:</strong> Git, HTML, CSS, JavaScript, PHP, R, Apache2, nginx, Redis, Quart/Flask<br>
                <strong>Learning:</strong> Rust, Apache Spark, PowerShell, Kafka
            </p>
            </div>
        {/if}
    </div >
</div>