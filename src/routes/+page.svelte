<script>
    import { fly } from 'svelte/transition';
    import { onMount } from 'svelte';

    let loaded = false;
    onMount(() => loaded = true);
</script>

<svelte:head>
    <title>home</title>
</svelte:head>

<div>
    {#if loaded}
        <h1 transition:fly="{{ y: 100, duration: 500 }}" class="text-white flex flex-column justify-center mt-5 font-bold text-xl">Hi, I'm Eddie!</h1>
    {/if}
</div>