<script>
    import { fade, fly } from 'svelte/transition';
    import { onMount } from 'svelte';

    const pics = [
        "/assets/coolguy.jpg",
        'https://picsum.photos/300/200?random=1',
        'https://picsum.photos/300/200?random=2'
    ]

    let index = 0;

    function next() {
        index = (index + 1) % pics.length;
    }

    function back() {
        index = (index - 1) % pics.length;
    }

    let loaded = false;
    onMount(() => loaded = true);
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
            <button class="text-white m-2" on:click={back}>&#60;</button>
        {:else}
            <button class="invisible m-2">&#60;</button>
        {/if}

        {#each [pics[index]] as pic}
            <img src={pic} alt="" class="mt-4 h-96 w-[230px] md:w-96 md:h-[40rem] rounded-md">
        {/each}
        {#if index != pics.length - 1}
            <button class="text-white m-2" on:click={next}>&#62;</button>
        {:else}
            <button class="invisible m-2">&#60;</button>
        {/if}
    </div>
    
</div>