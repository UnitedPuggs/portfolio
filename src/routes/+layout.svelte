<script>
  import "../app.css";
</script>

<nav>
    <body class="bg-black">
        <div id="container" class="flex flex-column justify-center">
            <div id="nav" class="flex flex-row border-4 rounded-lg border-white">
                <a class="font-mono text-white hover:opacity-75 m-2" href="/">home</a>
                <a class="font-mono text-white hover:opacity-75 m-2" href="/contact">contact me</a>
                <a class="font-mono text-white hover:opacity-75 m-2" href="/projects">projects</a>
            </div>
            
        </div>
    </body>
</nav>
<slot />