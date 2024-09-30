import type { femaleContestants, maleContestants, matches } from '~/db/schema';

export type Match = typeof matches.$inferSelect & {
	maleContestant: typeof maleContestants.$inferSelect;
	femaleContestant: typeof femaleContestants.$inferSelect;
};
