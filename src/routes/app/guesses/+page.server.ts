import { verifyMatches } from '$lib/utils/verifyMatches';
import { db } from '~/db';

export const load = async (opts) => {
	const matches = await db.query.matches.findMany({
		where: (matches, { eq }) => eq(matches.userId, opts.locals.session.userId),
		with: {
			maleContestant: true,
			femaleContestant: true
		}
	});

	const verifiedMatches = await verifyMatches(matches);

	return { matches: verifiedMatches };
};
