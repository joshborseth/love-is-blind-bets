import { verifyMatches } from '$lib/utils/verifyMatches';
import { tallyPoints } from '$lib/utils/tallyPoints';
import { db } from '~/db';

export const load = async (opts) => {
	const matches = await db.query.matches.findMany({
		where: (matches, { eq }) => eq(matches.userId, opts.locals.session.userId),
		with: {
			maleContestant: true,
			femaleContestant: true
		}
	});
	const correctCouples = await db.query.correctCouples.findMany();
	const verifiedMatches = verifyMatches(matches, correctCouples);
	const points = tallyPoints({ matchesToTally: matches, correctCouplesArray: correctCouples });

	return { matches: verifiedMatches, points };
};
