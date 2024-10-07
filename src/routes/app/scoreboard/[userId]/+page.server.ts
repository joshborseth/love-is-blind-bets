import { createClerkClient } from '@clerk/clerk-sdk-node';
import { error } from '@sveltejs/kit';
import { Resource } from 'sst/resource';
import { db } from '~/db';
import { verifyMatches } from '$lib/utils/verifyMatches';

export const load = async ({ params }) => {
	const clerkClient = createClerkClient({
		secretKey: Resource.CLERK_SECRET_KEY.value
	});

	const user = await db.query.lockedInUsers.findFirst({
		where: (lockedInUsers, { eq }) => eq(lockedInUsers.userId, params.userId),
		with: {
			matches: {
				with: {
					maleContestant: true,
					femaleContestant: true
				}
			}
		}
	});

	if (!user) {
		error(404, {
			message: 'User not found'
		});
	}

	const clerkUser = await clerkClient.users.getUser(user.userId);

	if (!clerkUser) {
		error(404, {
			message: 'User not found'
		});
	}

	const formattedUser = {
		...user,
		matches: await verifyMatches(user.matches),
		fullName: clerkUser.fullName,
		username: clerkUser.username
	};

	return {
		user: formattedUser
	};
};
