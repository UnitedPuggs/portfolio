<script>
  import "../app.css";
</script>

<nav class="mt-2">
    <body class="bg-black">
        <div id="container" class="flex flex-column justify-center">
            <div id="nav" class="flex flex-row border-4 rounded-lg border-white">
                <a class="nav-btn" href="/">home</a>
                <a class="nav-btn" href="/contact">contact me</a>
                <a class="nav-btn" href="/projects">projects</a>
            </div>
            
        </div>
    </body>
</nav>
<slot />