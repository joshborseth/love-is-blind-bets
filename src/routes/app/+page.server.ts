import { error } from '@sveltejs/kit';
import { and, eq } from 'drizzle-orm';
import { db } from '~/db';
import { matches } from '~/db/schema';

export const load = async (opts) => {
	const matches = await db.query.matches.findMany({
		where: (matches, { eq }) => eq(matches.userId, opts.locals.session.userId),
		with: {
			maleContestant: true,
			femaleContestant: true
		}
	});

	const maleContestants = await db.query.maleContestants.findMany({
		where: (maleContestants, { notInArray }) =>
			notInArray(
				maleContestants.id,
				matches.map((match) => match.maleContestantId)
			)
	});
	const femaleContestants = await db.query.femaleContestants.findMany({
		where: (femaleContestants, { notInArray }) =>
			notInArray(
				femaleContestants.id,
				matches.map((match) => match.femaleContestantId)
			)
	});

	return { maleContestants, femaleContestants, matches };
};

export const actions = {
	select: async ({ request, locals }) => {
		const user = await db.query.lockedInUsers.findFirst({
			where: (lockedInUsers, { eq }) => eq(lockedInUsers.userId, locals.session.userId)
		});

		if (user) {
			error(400, {
				message: 'You have already locked in your matches, contact Josh if you need help.'
			});
		}
		const formData = await request.formData();

		const maleId = formData.get('selectedMaleId');
		const femaleId = formData.get('selectedFemaleId');

		await db.insert(matches).values({
			femaleContestantId: Number(femaleId),
			maleContestantId: Number(maleId),
			userId: locals.session.userId
		});
	},
	undo: async ({ request, locals }) => {
		const user = await db.query.lockedInUsers.findFirst({
			where: (lockedInUsers, { eq }) => eq(lockedInUsers.userId, locals.session.userId)
		});

		if (user) {
			error(400, {
				message: 'You have already locked in your matches, contact Josh if you need help.'
			});
		}
		const formData = await request.formData();

		const matchId = formData.get('matchId');

		await db
			.delete(matches)
			.where(and(eq(matches.userId, locals.session.userId), eq(matches.id, Number(matchId))));
	}
};
