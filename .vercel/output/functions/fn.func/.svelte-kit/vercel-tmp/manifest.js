export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/coolguy.jpg","assets/discord.png","assets/linkin.png","assets/mail.png","favicon-old.png","favicon.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.1ee321aa.js","imports":["_app/immutable/entry/start.1ee321aa.js","_app/immutable/chunks/index.9a4e31a0.js","_app/immutable/chunks/singletons.1fe13bbe.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.947b6a8e.js","imports":["_app/immutable/entry/app.947b6a8e.js","_app/immutable/chunks/index.9a4e31a0.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/5.js')
		],
		routes: [
			{
				id: "/image",
				pattern: /^\/image\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/image/_server.js')
			},
			{
				id: "/projects/[slug]",
				pattern: /^\/projects\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
