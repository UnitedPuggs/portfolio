<script>
    import { fade, fly } from 'svelte/transition';
    import { onMount } from 'svelte';
    
    let pics = []
    let index = 0;
    let loaded = false;
    let aboutMeVis = false;

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

    function toggleAboutMe() {
        aboutMeVis = !aboutMeVis;
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
    <div class="text-white mt-20 flex flex-col">
        <button class="hover:opacity-75 m-1">experience  v</button>
        <button class="hover:opacity-75 m-1" on:click={toggleAboutMe}>about me  v</button>
        {#if aboutMeVis}
            <p class="text-gray-40">test test test test test test test test test test</p>
        {/if}
        <button class="hover:opacity-75 m-1">technical skills  v</button>
    </div>
</div>