<script>
  import "../app.css";

  let audio;

  function playClick() {
    audio.play();
  }
</script>

<nav class="mt-2">
    <body class="bg-black">
        <div id="container" class="flex flex-column flex-wrap justify-center">
            <div id="nav" class="flex flex-row border-4 rounded-lg border-white">
                <a class="nav-btn" href="/" on:click={playClick}>home</a>
                <a class="nav-btn" href="/contact" on:click={playClick}>contact me</a>
                <a class="nav-btn" href="/projects" on:click={playClick}>projects</a>
            </div>
            
        </div>
    </body>
</nav>
<audio src="https://cdn.freesound.org/previews/536/536108_10912485-lq.mp3" bind:this={audio}></audio>
<slot />