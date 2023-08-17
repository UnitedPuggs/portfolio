import * as universal from '../entries/pages/_layout.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/entry/_layout.svelte.4bf6b604.js","_app/immutable/chunks/index.9a4e31a0.js","_app/immutable/entry/_layout.js.229859a3.js","_app/immutable/chunks/_layout.e65b23ca.js"];
export const stylesheets = ["_app/immutable/assets/_layout.83a28395.css"];
export const fonts = [];
