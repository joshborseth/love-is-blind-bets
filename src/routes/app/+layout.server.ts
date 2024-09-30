import { db } from '~/db';

export const load = async (opts) => {
	const lockedInUser = await db.query.lockedInUsers.findFirst({
		where: (lockedInUsers, { eq }) => eq(lockedInUsers.userId, opts.locals.session.userId)
	});

	return { lockedInUser };
};
