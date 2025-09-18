<script lang="ts">
    import linkedin from '$lib/assets/linkedin.png';
    import github from '$lib/assets/github.png';
    import resume from '$lib/assets/Resume_EP.pdf';

    let { data } = $props();

    const images: string[] = data.images?.url;

    const name: string = "Eddie Poulson"
    const splitName: string[] = name.split("")

    function scrollIntoView({ target }: { target: EventTarget | null }) {
        const href = document.querySelector((target as HTMLElement).getAttribute('href') ?? '');
        if (!href) {
            return;
        } else {
            href.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
</script>
<svelte:head>
    <title>{name}</title>
</svelte:head>
<nav class="flex justify-between items-center sticky top-0 backdrop-blur-sm z-50 py-2 mt-4 w-full">
    <div class="w-1/2 mx-auto">
        <div class="flex flex-col">
            <div>
                {#each splitName as char}
                    <span class="text-4xl font-bold inline-block transition-all ease-out delay-0 duration-700 hover:-translate-y-3 {char === ' ' ? 'opacity-0' : ''}">
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                {/each}
            </div>
            <span class="text-lg font-mono">Software Engineer</span>
            <div class="flex flex-row gap-2">
                <a href="https://github.com/UnitedPuggs" target="_blank">
                    <img src={github} alt="github" width=40 class="rounded-full hover:opacity-50"/>
                </a>
                <a href="https://www.linkedin.com/in/eddie-poulson/" target="_blank">
                    <img src={linkedin} alt="linkedin" width=40 class="rounded-full hover:opacity-50"/>
                </a>
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-2 w-1/4 text-lg font-semibold">
        <a href="#about-me" onclick={ scrollIntoView } class="underline w-fit hover:no-underline font-mono">About Me</a>
        <a href="#projects" onclick={ scrollIntoView } class="underline w-fit hover:no-underline font-mono">Personal Projects</a>
        <div class="flex gap-2">
            <a href={resume} download class="font-mono underline hover:no-underline">Download resume</a>
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                    <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M3 14.25C3.41421 14.25 3.75 14.5858 3.75 15C3.75 16.4354 3.75159 17.4365 3.85315 18.1919C3.9518 18.9257 4.13225 19.3142 4.40901 19.591C4.68577 19.8678 5.07435 20.0482 5.80812 20.1469C6.56347 20.2484 7.56459 20.25 9 20.25H15C16.4354 20.25 17.4365 20.2484 18.1919 20.1469C18.9257 20.0482 19.3142 19.8678 19.591 19.591C19.8678 19.3142 20.0482 18.9257 20.1469 18.1919C20.2484 17.4365 20.25 16.4354 20.25 15C20.25 14.5858 20.5858 14.25 21 14.25C21.4142 14.25 21.75 14.5858 21.75 15V15.0549C21.75 16.4225 21.75 17.5248 21.6335 18.3918C21.5125 19.2919 21.2536 20.0497 20.6517 20.6516C20.0497 21.2536 19.2919 21.5125 18.3918 21.6335C17.5248 21.75 16.4225 21.75 15.0549 21.75H8.94513C7.57754 21.75 6.47522 21.75 5.60825 21.6335C4.70814 21.5125 3.95027 21.2536 3.34835 20.6517C2.74643 20.0497 2.48754 19.2919 2.36652 18.3918C2.24996 17.5248 2.24998 16.4225 2.25 15.0549C2.25 15.0366 2.25 15.0183 2.25 15C2.25 14.5858 2.58579 14.25 3 14.25Z" fill="#1C274C"></path> 
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 16.75C12.2106 16.75 12.4114 16.6615 12.5535 16.5061L16.5535 12.1311C16.833 11.8254 16.8118 11.351 16.5061 11.0715C16.2004 10.792 15.726 10.8132 15.4465 11.1189L12.75 14.0682V3C12.75 2.58579 12.4142 2.25 12 2.25C11.5858 2.25 11.25 2.58579 11.25 3V14.0682L8.55353 11.1189C8.27403 10.8132 7.79963 10.792 7.49393 11.0715C7.18823 11.351 7.16698 11.8254 7.44648 12.1311L11.4465 16.5061C11.5886 16.6615 11.7894 16.75 12 16.75Z" fill="#1C274C"></path> 
                </g>
            </svg>
        </div>
    </div>
</nav>
<section class="flex justify-center items-center text-center my-4 mx-auto">
    <p class="text-2xl font-semibold w-[32rem]">
        A software engineer that's very passionate about 
        creating efficient software that has a real impact, and working on quirky little projects!
    </p>
</section>
<section class="flex my-4 gap-0.5 w-max" id="carousel">
    {#each images as image}
        <img src={image} alt="carousel" class="w-fit h-72 object-cover select-none">
    {/each}
    {#each images as image}
        <img src={image} alt="carousel" class="w-fit h-72 object-cover select-none">
    {/each}
</section>
<section class="flex flex-col w-1/2 mx-auto">
    <h1 id="about-me" class="text-2xl font-bold underline font-mono">About Me</h1>
    <p class="text-lg">
        I'm a software engineer from Southern California, as well as a bit of an <em>aspiring</em> race car driver.<br> 
        Currently working as a <s class="text-slate-400">contracted</s> 
        Software Engineer @ <a href="https://www.linkedin.com/company/capital-group/" class="underline hover:no-underline">Capital Group</a>, where I spend most of my time making our projects more efficient.
        <br>
        <br>
        Outside of all of that computer magic, I'm a big car guy! 
        The current stable is a track-prepped 2001 Mazda Miata, 2023 VW GTI, 1978 Porsche 911SC, and <sup>1</sup>&frasl;<sub>2</sub> of a 2001 BMW 325iT. I would love any opportunity to combine
        my passion for cars and software, should an opportunity present itself!
        <br>
        <br>
        Please download my resume to get more of an idea of my educational background, skillset, and work experience.
    </p>
</section>
<section class="flex flex-col w-1/2 mx-auto">
    <h1 id="projects" class="text-2xl font-bold underline font-mono">Personal Projects</h1>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lectus mi, aliquet non posuere id, semper eu magna. Cras justo ipsum, fringilla a nisl dictum, pretium tempus mi. Aliquam vitae tortor non ligula sodales hendrerit. Nullam vel lorem a mi venenatis molestie. Mauris nec ligula nec massa accumsan vulputate. Vestibulum maximus eleifend malesuada. Nullam scelerisque nibh dui, vitae sagittis neque posuere sed. Nullam egestas diam ac accumsan viverra. Curabitur eget orci ac sem dictum cursus in in leo. Donec commodo mauris non mi tempor, et elementum nunc pharetra. Aenean posuere a odio sit amet facilisis. Donec ut euismod augue. Curabitur ullamcorper feugiat dapibus. Mauris viverra elit dui, tincidunt maximus neque aliquet non.

Ut accumsan volutpat nunc sit amet consectetur. Donec eget semper est. Proin consectetur ut lorem ut ultricies. Curabitur ultricies metus mollis orci vehicula sagittis. Cras sodales posuere lectus. Curabitur suscipit faucibus blandit. Nulla odio justo, sagittis pharetra nibh vel, suscipit sollicitudin felis. Morbi sollicitudin neque eros, ut lobortis leo ultricies eu. Curabitur eu nulla purus. Nam nisl purus, dapibus et consectetur a, varius a diam. Ut mollis nibh dui, a volutpat libero pellentesque quis. Suspendisse vehicula elit eu metus scelerisque molestie. Fusce risus justo, pretium nec molestie non, rhoncus non tortor.

Maecenas pellentesque, odio at aliquet interdum, neque ex feugiat nisi, vitae condimentum nibh dolor eget turpis. Ut ullamcorper metus non mauris suscipit, eget aliquam felis scelerisque. Cras scelerisque orci massa, ac accumsan magna luctus ac. Maecenas vestibulum velit vel dolor efficitur, non cursus odio facilisis. Nullam placerat turpis at nisl iaculis maximus. In pharetra, sem porttitor sollicitudin blandit, nibh dolor congue lectus, hendrerit sodales felis tellus quis nibh. Proin at condimentum leo.

Phasellus feugiat justo eu augue tristique accumsan. Morbi eget congue augue, in ornare quam. Duis viverra sit amet justo non mollis. Sed varius, metus a vestibulum scelerisque, nisi urna consequat nulla, ut sagittis nibh leo nec eros. Ut dictum neque quis sagittis suscipit. Pellentesque ac egestas eros, at porttitor quam. Fusce lacus est, hendrerit vitae efficitur at, tristique eu ex. Suspendisse metus augue, vestibulum sed orci at, bibendum semper quam. Quisque augue orci, porta in suscipit eu, commodo at metus. Vivamus luctus fringilla purus ut cursus. Vestibulum ac commodo nunc.

Nullam erat velit, consectetur quis efficitur eu, imperdiet ut elit. Maecenas vitae eros porta, tincidunt velit vitae, maximus ligula. Nam a libero sed libero ultricies vulputate sed finibus purus. In molestie augue eget quam efficitur vehicula. Nunc pharetra massa nec sapien fermentum, ac vehicula dolor feugiat. Curabitur et malesuada lorem, nec porta ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in urna et enim tincidunt bibendum ut eget urna.
</section>