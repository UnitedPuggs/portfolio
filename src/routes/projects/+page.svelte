<script>
    import Project from "./Project.svelte";
    export let data;
</script>

<svelte:head>
    <title>projects</title>
</svelte:head>

<body>
    <div class="grid grid-cols-2 gap-10 mt-7 max-w-4xl mx-auto text-white">
        {#each data.project as projects}
            <Project {...projects} /> 
        {/each}
    </div>
</body>