import { MAX_GUESSES } from '@/constants/guesses';
import { error } from '@sveltejs/kit';
import { db } from '~/db';

export const load = async (opts) => {
	const matches = await db.query.matches.findMany({
		where: (matches, { eq }) => eq(matches.userId, opts.locals.session.userId),
		with: {
			maleContestant: true,
			femaleContestant: true
		}
	});

	return { matches };
};
export const actions = {
	default: async ({ request }) => {
		console.log('default');
		const formData = await request.formData();

		const matchIds = formData.getAll('matchId');

		if (matchIds.length !== MAX_GUESSES) {
			error(400, {
				message: 'Invalid number of matches selected'
			});
		}
	}
};
