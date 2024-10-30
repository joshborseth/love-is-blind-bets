import {
	correctCouples,
	femaleContestants,
	maleContestants,
	matches
} from '../../../server/db/schema';

type Match = typeof matches.$inferSelect;
type MatchWithRelations = Match & {
	maleContestant: typeof maleContestants.$inferSelect;
	femaleContestant: typeof femaleContestants.$inferSelect;
};

export const verifyMatches = <T extends Array<Match | MatchWithRelations>>(
	matchesToVerify: T,
	correctCouplesArray: Array<typeof correctCouples.$inferSelect>
): T extends Array<infer U>
	? (U extends MatchWithRelations
			? MatchWithRelations & { correct: boolean; correctMarriageGuess: boolean }
			: Match & { correct: boolean; correctMarriageGuess: boolean })[]
	: never => {
	return matchesToVerify.map((m) => {
		const findCorrectCouple = correctCouplesArray.find(
			(c) =>
				c.maleContestantId === m.maleContestantId && c.femaleContestantId === m.femaleContestantId
		);

		const correctMarriageGuess = findCorrectCouple?.married && m.marriageGuess;

		return {
			...m,
			correct: Boolean(findCorrectCouple),
			correctMarriageGuess: Boolean(correctMarriageGuess)
		};
		//eslint-disable-next-line @typescript-eslint/no-explicit-any
	}) as any;
};
