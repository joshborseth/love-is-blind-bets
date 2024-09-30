import { MAX_GUESSES } from '@/constants/guesses';
import { error, redirect } from '@sveltejs/kit';
import { db } from '~/db';
import { z } from 'zod';
import { lockedInUsers, matches } from '~/db/schema';
import { inArray } from 'drizzle-orm';

export const load = async (opts) => {
	const matches = await db.query.matches.findMany({
		where: (matches, { eq }) => eq(matches.userId, opts.locals.session.userId),
		with: {
			maleContestant: true,
			femaleContestant: true
		}
	});

	return { matches };
};
export const actions = {
	default: async ({ request, locals }) => {
		const user = await db.query.lockedInUsers.findFirst({
			where: (lockedInUsers, { eq }) => eq(lockedInUsers.userId, locals.session.userId)
		});

		if (user) {
			error(400, {
				message: 'You have already locked in your matches, contact Josh if you need help.'
			});
		}

		const formData = await request.formData();

		const matchIds = formData.getAll('matchId').map((id) => Number(id));

		if (matchIds.length !== MAX_GUESSES) {
			error(400, {
				message: 'Invalid number of matches selected'
			});
		}

		const parsedMatchIds = z.array(z.number()).safeParse(matchIds);

		if (!parsedMatchIds.success) {
			error(400, {
				message: 'Something went wrong'
			});
		}

		await db
			.update(matches)
			.set({ marriageGuess: true })
			.where(inArray(matches.id, parsedMatchIds.data));

		await db.insert(lockedInUsers).values({
			userId: locals.session.userId
		});
		redirect(307, '/app/guesses');
	}
};
