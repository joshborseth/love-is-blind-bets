import { db } from '~/db';
import { createClerkClient } from '@clerk/clerk-sdk-node';
import { Resource } from 'sst/resource';

export const load = async (opts) => {
	const clerkClient = createClerkClient({
		secretKey: Resource.CLERK_SECRET_KEY.value
	});

	const clerkUsers = await clerkClient.users.getUserList();

	const dbUsers = await db.query.lockedInUsers.findMany({
		where: (lockedInUsers, { inArray }) =>
			inArray(
				lockedInUsers.userId,
				clerkUsers.data.map((u) => u.id)
			),
		with: {
			matches: true
		}
	});

	const users = clerkUsers.data
		.map((user) => {
			const dbUser = dbUsers.find((u) => u.userId === user.id);
			const { fullName, username } = user;
			if (dbUser && dbUser.userId !== opts.locals.session.userId) {
				return {
					...dbUser,
					fullName,
					username
				};
			}
		})
		.filter(Boolean) as Array<
		(typeof dbUsers)[number] & Pick<(typeof clerkUsers.data)[number], 'fullName' | 'username'>
	>;

	return {
		users
	};
};
