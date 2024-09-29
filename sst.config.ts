//eslint-disable-next-line
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
	app(input) {
		return {
			name: 'love-is-blind-betting',
			removal: input?.stage === 'production' ? 'retain' : 'remove',
			home: 'aws',
			providers: {
				aws: {
					region: 'us-west-2'
				}
			}
		};
	},
	async run() {
		const DB_URL = new sst.Secret('DB_URL');
		const DB_KEY = new sst.Secret('DB_KEY');
		const PUBLIC_CLERK_PUBLISHABLE_KEY = new sst.Secret('PUBLIC_CLERK_PUBLISHABLE_KEY');
		const CLERK_SECRET_KEY = new sst.Secret('CLERK_SECRET_KEY');

		const croppedHeadshots = new sst.aws.Bucket('croppedHeadshots', {
			access: 'public'
		});

		new sst.aws.SvelteKit('Web', {
			link: [DB_URL, DB_KEY, PUBLIC_CLERK_PUBLISHABLE_KEY, CLERK_SECRET_KEY],
			environment: {
				PUBLIC_CLERK_PUBLISHABLE_KEY: PUBLIC_CLERK_PUBLISHABLE_KEY.value
			}
		});

		const seedContestantsFn = new sst.aws.Function('seedContestants', {
			handler: './server/scripts/seeds/contestants.handler',
			url: true,
			link: [DB_URL, DB_KEY, croppedHeadshots],
			copyFiles: (await import('./server/constants/contestants')).contestants.map((c) => ({
				from: `./server/cropped-headshots/${c.nameAsFileName}.jpg`
			}))
		});
		return {
			seedContestantsFnUrl: seedContestantsFn.url
		};
	}
});
