import { MATCH_GUESS_POINTS, MARRIAGE_GUESS_POINTS } from '@/constants/points';
import { correctCouples, matches } from '~/db/schema';

export const tallyPoints = ({
	matchesToTally,
	correctCouplesArray
}: {
	matchesToTally: Array<typeof matches.$inferSelect>;
	correctCouplesArray: Array<typeof correctCouples.$inferSelect>;
}) => {
	let points = 0;
	matchesToTally.forEach((m) => {
		const findCorrectCouple = correctCouplesArray.find(
			(c) =>
				c.maleContestantId === m.maleContestantId && c.femaleContestantId === m.femaleContestantId
		);
		if (findCorrectCouple) {
			points += MATCH_GUESS_POINTS;
			if (findCorrectCouple.married && m.marriageGuess) {
				points += MARRIAGE_GUESS_POINTS;
			}
		}
	});

	return points;
};
