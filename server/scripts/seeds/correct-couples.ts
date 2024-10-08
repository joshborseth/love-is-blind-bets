import { map } from 'radash';
import { db } from '../../db';
import { eq } from 'drizzle-orm';
import { femaleContestants, maleContestants, correctCouples } from '../../db/schema';

const correctCoupleNames = [
	{
		maleName: 'Garrett',
		femaleName: 'Taylor'
	},
	{
		femaleName: 'Hannah',
		maleName: 'Nick D.'
	},
	{
		femaleName: 'Marissa',
		maleName: 'Ramses'
	},
	{
		femaleName: 'Ashley A.',
		maleName: 'Tyler'
	},
	{
		femaleName: 'Monica',
		maleName: 'Stephen'
	},
	{
		maleName: 'Tim',
		femaleName: 'Alexandra'
	},
	{
		femaleName: 'Brittany',
		maleName: 'Leo'
	}
] satisfies Array<{
	maleName: string;
	femaleName: string;
}>;

export const handler = async () => {
	const retrievedCorrectCouples = await db.query.correctCouples.findMany();

	if (retrievedCorrectCouples.length) {
		return {
			statusCode: 400,
			body: 'Correct couples already seeded'
		};
	}

	const correctCouplesToInsert = await map(correctCoupleNames, async (c) => {
		const maleContestant = await db.query.maleContestants.findFirst({
			where: eq(maleContestants.name, c.maleName)
		});

		const femaleContestant = await db.query.femaleContestants.findFirst({
			where: eq(femaleContestants.name, c.femaleName)
		});

		if (!maleContestant || !femaleContestant) {
			throw new Error('Could not find contestants');
		}
		return {
			femaleContestantId: femaleContestant.id,
			maleContestantId: maleContestant.id
		} satisfies typeof correctCouples.$inferInsert;
	});

	await db.insert(correctCouples).values(correctCouplesToInsert);

	console.log('Correct couples seeded');
	return {
		statusCode: 200,
		body: 'Correct couples seeded'
	};
};
