<script>
    export let data;
    let short = data.project[0];
</script>

<svelte:head>
    <title>{short.title}</title>
</svelte:head>

<body class="font-mono mt-10">
    <div class="text-white flex flex-col items-center justify-center w-[560px] m-auto">
        <h1 class="text-2xl font-semibold underline hover:no-underline"><a href={short.github}>{short.title}</a></h1>
        <p class="mt-2 border-2 border-white rounded-md p-3">{short.long_description}</p>
        <h2 class="text-xl font-semibold my-2">Technologies</h2>
        <div class="flex flex-row gap-2">
            {#each short.tech as tech}
                <span class="border-2 bg-white text-black px-2 rounded-full">{tech}</span>
            {/each}
        </div>
    </div>
</body>