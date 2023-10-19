<script>
    export let title;
    export let desc;
    export let src;
    export let link;
</script>

<div class="border-4 border-white rounded-lg w-96 backdrop-blur-xl max-h-80 flex flex-col">    
    <h3 class="text-center font-bold text-xl pt-2">{title}</h3>
    <span class="overflow-y-auto">
    <p class="p-4 font-semibold">{desc}</p>
    </span>
    <div class="flex flex-row font-semibold px-4 pb-2 justify-between mt-auto pt-2">
        <a href={src} class="border-2 border-white px-2 py-1 rounded-full hover:scale-90 hover:opacity-75 cursor-pointer">Source Code</a>
        {#if link}
            <a href={link} class="border-2 border-white px-2 py-1 rounded-full hover:scale-90 hover:opacity-75 cursor-pointer">View Project</a>
        {/if}
    </div>
</div>

