import { createClerkClient } from '@clerk/clerk-sdk-node';
import { error } from '@sveltejs/kit';
import { Resource } from 'sst/resource';
import { db } from '~/db';
import { verifyMatches } from '$lib/utils/verifyMatches';
import { tallyPoints } from '$lib/utils/tallyPoints';

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
	const correctCouples = await db.query.correctCouples.findMany();

	const formattedUser = {
		...user,
		matches: verifyMatches(user.matches, correctCouples),
		points: tallyPoints({ matchesToTally: user.matches, correctCouplesArray: correctCouples }),
		fullName: clerkUser.fullName,
		username: clerkUser.username
	};

	return {
		user: formattedUser
	};
};
