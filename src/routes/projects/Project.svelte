<script>
    export let title;
    export let technologies;
    export let description;
    export let image;
    export let github;
</script>

<div class="flex flex-col border-2 border-white rounded-md max-w-md font-mono">
    <div class="flex justify-center">
        <p class="text-2xl font-bold py-1">{title}</p>
    </div>
    <img src={image} alt="" class="rounded-md max-h-56">
    <p class="py-1 pl-1">{description}</p>
    <p class="pl-1 underline">Technologies</p>
    <div class="flex flex-row flex-wrap">
        {#each technologies as tech}
            <p class="border-2 rounded-full bg-white border-white m-1 px-1 text-black">{tech}</p>
        {/each}
    </div>
    <div class="flex flex-row justify-center mb-1">
        <a href={github} class="underline hover:no-underline">code</a>
    </div>
</div>