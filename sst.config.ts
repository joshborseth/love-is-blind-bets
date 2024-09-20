//eslint-disable-next-line
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
	app(input) {
		return {
			name: 'love-is-blind',
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

		new sst.aws.SvelteKit('Web', {
			link: [DB_URL, DB_KEY]
		});
	}
});
