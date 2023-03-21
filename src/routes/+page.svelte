<script>
    import { fade, fly } from 'svelte/transition';
    import { onMount } from 'svelte';
    
    let pics = []

    async function get_image_urls() {
        const res = await fetch("/image");
        const obj = await res.json();
        for(let i = 0; i < obj.images.length; ++i) {
            pics.push("https://gzytpbcundzfdkivabpf.supabase.co/storage/v1/object/public/portfolio/images/" + obj.images[i]["name"])
        }
        pics = pics;
    }

    let index = 0;

    function next() {
        index = (index + 1) % pics.length;
    }

    function back() {
        index = (index - 1) % pics.length;
    }

    let loaded = false;
    onMount(() => {
         loaded = true; 
         get_image_urls();
         });
</script>

<svelte:head>
    <title>home</title>
</svelte:head>

<div class="flex flex-col justify-center items-center">
    {#if loaded}
        <h1 transition:fly={{ y: 20, duration: 500 }} class="text-white mt-5 font-bold text-2xl font-mono">Hi, I'm Eddie!</h1>
    {/if}
    <!-- Gonna have to figure out how to make an image carousel and how to sorta upload images maybe sorta autonomously -->
    <div class="flex flex-row" transition:fade={{ delay: 150 }}>
        {#if index > 0}
            <button class="text-white m-2 pl-5 hover:opacity-75" on:click={back}>&#60;</button>
        {:else}
            <button class="invisible m-2 pl-5">&#60;</button>
        {/if}

        {#each [pics[index]] as pic}
            <img src={pic} alt="" class="mt-4 h-96 w-[269px] md:w-[28rem] md:h-[40rem] rounded-md object-contain">
        {/each}
        {#if index != pics.length - 1}
            <button class="text-white m-2 pr-5 hover:opacity-75" on:click={next}>&#62;</button>
        {:else}
            <button class="invisible m-2 pr-5">&#60;</button>
        {/if}
    </div>
    <div class="text-white mt-20">
        about me
    </div>
</div>