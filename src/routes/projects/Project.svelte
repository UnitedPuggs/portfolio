<script>
    export let title;
    export let tech;
    export let description;
    export let image;
    export let github;
    export let slug;
</script>


<div class="flex flex-col border-2 border-white rounded-md max-w-sm font-mono">
    <a href="/projects/{slug}" class="hover:opacity-75">
    <div class="flex justify-center">
        <p class="text-2xl font-bold py-1">{title}</p>
    </div>
    <img src={image} alt="" class="rounded-md max-h-56">
    <p class="p-2 max-h-24 h-24 overflow-y-auto">{description}</p>
    <p class="pl-1 underline">Technologies</p>
    <div class="flex flex-row flex-wrap">
        {#each tech as technology}
            <p class="border-2 rounded-full bg-white border-white m-1 px-1 text-black">{technology}</p>
        {/each}
    </div>
    <div class="flex flex-row justify-center mb-1">
        <a href={github} class="underline hover:no-underline">code</a>
    </div>
    </a>
</div>