<script>
    import { fly } from 'svelte/transition';
    import { onMount } from 'svelte';

    let loaded = false;
    onMount(() => loaded = true);
</script>

<svelte:head>
    <title>home</title>
</svelte:head>

<div class="flex flex-col justify-center items-center">
    {#if loaded}
        <h1 transition:fly="{{ y: 20, duration: 500 }}" class="text-white mt-5 font-bold text-2xl">Hi, I'm Eddie!</h1>
    {/if}
    <img src="/assets/coolguy.jpg" alt="" class="mt-4 h-[40rem] rounded-md">
</div>