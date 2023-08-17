import { c as create_ssr_component, b as add_attribute } from "../../chunks/index2.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let audio;
  return `<nav class="mt-2"><body class="bg-black"><div id="container" class="flex flex-column flex-wrap justify-center"><div id="nav" class="flex flex-row border-4 rounded-lg border-white"><a class="nav-btn" href="/">home</a>
                <a class="nav-btn" href="/contact">contact me</a>
                <a class="nav-btn" href="/projects">projects</a></div></div></body></nav>
<audio src="https://cdn.freesound.org/previews/536/536108_10912485-lq.mp3"${add_attribute("this", audio, 0)}></audio>
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
