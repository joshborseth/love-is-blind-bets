import type { femaleContestants, maleContestants } from '~/db/schema';

export type Contestants = {
	maleContestants: Array<typeof maleContestants.$inferSelect>;
	femaleContestants: Array<typeof femaleContestants.$inferSelect>;
};
