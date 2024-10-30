import { db } from '../../db';
import { and, eq, inArray } from 'drizzle-orm';
import { correctCouples } from '../../db/schema';

const correctCouplesIds = [4, 1];

export const handler = async () => {
	const retrievedCorrectCouples = await db.query.correctCouples.findMany({
		where: and(inArray(correctCouples.id, correctCouplesIds), eq(correctCouples.married, true))
	});

	if (retrievedCorrectCouples.length) {
		return {
			statusCode: 400,
			body: 'Correct married couples already seeded'
		};
	}

	await db
		.update(correctCouples)
		.set({ married: true })
		.where(inArray(correctCouples.id, correctCouplesIds));

	console.log('Correct married couples seeded');
	return {
		statusCode: 200,
		body: 'Correct married couples seeded'
	};
};
