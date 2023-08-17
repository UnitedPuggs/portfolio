import * as server from '../entries/pages/projects/_slug_/_page.server.js';

export const index = 5;
export const component = async () => (await import('../entries/pages/projects/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/projects/[slug]/+page.server.js";
export const imports = ["_app/immutable/entry/projects-_slug_-page.svelte.588f2e0a.js","_app/immutable/chunks/index.9a4e31a0.js"];
export const stylesheets = [];
export const fonts = [];
