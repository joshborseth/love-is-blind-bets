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
					region: 'us-west-2',
					version: '6.52.0'
				},
				cloudflare: {
					version: '5.39.1',
					email: process.env.CLOUDFLARE_EMAIL,
					apiKey: process.env.CLOUDFLARE_API_KEY
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
			},
			domain: {
				name: 'luvisblind.app',
				dns: sst.cloudflare.dns({
					zone: process.env.ZONE_ID
				})
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

		const seedCorrectCouplesFn = new sst.aws.Function('seedCorrectCouples', {
			handler: './server/scripts/seeds/correct-couples.handler',
			url: true,
			link: [DB_URL, DB_KEY]
		});

		const seedMarriedCouplesFn = new sst.aws.Function('seedMarriedCouples', {
			handler: './server/scripts/seeds/married-couples.handler',
			url: true,
			link: [DB_URL, DB_KEY]
		});

		return {
			seedContestantsFnUrl: seedContestantsFn.url,
			seedCorrectCouplesFnUrl: seedCorrectCouplesFn.url,
			seedMarriedCouplesFnUrl: seedMarriedCouplesFn.url
		};
	}
});
