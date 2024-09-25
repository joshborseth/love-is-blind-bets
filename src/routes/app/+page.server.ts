import { db } from '../../../server/db';
export const load = async () => {
	const maleContestants = await db.query.maleContestants.findMany();
	const femaleContestants = await db.query.femaleContestants.findMany();
	return {
		maleContestants,
		femaleContestants
	};
};
