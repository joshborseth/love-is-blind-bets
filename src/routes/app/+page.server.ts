import { db } from '~/db';

export const load = async (opts) => {
	const matches = await db.query.matches.findMany({
		where: (matches, { eq }) => eq(matches.userId, opts.locals.session.userId)
	});

	if (!matches.length) {
		const maleContestants = await db.query.maleContestants.findMany();
		const femaleContestants = await db.query.femaleContestants.findMany();

		return { maleContestants, femaleContestants };
	}

	return { matches: matches.length ? matches : null };
};

export const actions = {
	default: async ({ request }) => {
		const result = await request.json();
		console.log(result);
	}
};
