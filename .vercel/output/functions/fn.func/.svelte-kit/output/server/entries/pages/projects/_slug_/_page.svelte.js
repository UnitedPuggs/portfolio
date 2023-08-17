import { c as create_ssr_component, e as escape, b as add_attribute, f as each } from "../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let short = data.project[0];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1ja1xyt_START -->${$$result.title = `<title>${escape(short.title)}</title>`, ""}<!-- HEAD_svelte-1ja1xyt_END -->`, ""}

<body class="font-mono mt-10"><div class="text-white flex flex-col items-center justify-center w-[560px] m-auto"><h1 class="text-2xl font-semibold underline hover:no-underline"><a${add_attribute("href", short.github, 0)}>${escape(short.title)}</a></h1>
        <p class="mt-2 border-2 border-white rounded-md p-3">${escape(short.long_description)}</p>
        <h2 class="text-xl font-semibold my-2">Technologies</h2>
        <div class="flex flex-row gap-2">${each(short.tech, (tech) => {
    return `<span class="border-2 bg-white text-black px-2 rounded-full">${escape(tech)}</span>`;
  })}</div></div></body>`;
});
export {
  Page as default
};
