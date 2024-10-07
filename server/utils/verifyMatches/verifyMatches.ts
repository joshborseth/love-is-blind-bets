import { db } from '../../db';
import { femaleContestants, maleContestants, matches } from '../../db/schema';

type Match = typeof matches.$inferSelect;
type MatchWithRelations = Match & {
	maleContestant: typeof maleContestants.$inferSelect;
	femaleContestant: typeof femaleContestants.$inferSelect;
};

export const verifyMatches = async <T extends Array<Match | MatchWithRelations>>(
	matchesToVerify: T
): Promise<
	T extends Array<infer U>
		? (U extends MatchWithRelations
				? MatchWithRelations & { correct: boolean }
				: Match & { correct: boolean })[]
		: never
> => {
	const correctCouples = await db.query.correctCouples.findMany();

	return matchesToVerify.map((m) => {
		const findCorrectCouple = correctCouples.find(
			(c) =>
				c.maleContestantId === m.maleContestantId && c.femaleContestantId === m.femaleContestantId
		);

		return {
			...m,
			correct: Boolean(findCorrectCouple)
		};
		//eslint-disable-next-line @typescript-eslint/no-explicit-any
	}) as any;
};
