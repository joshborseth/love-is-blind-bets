import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { handleClerk } from 'clerk-sveltekit/server';
import { Resource } from 'sst/resource';

export const handle: Handle = sequence(
	handleClerk(Resource.CLERK_SECRET_KEY.value, {
		debug: true,
		protectedPaths: ['/admin'],
		signInUrl: '/auth/sign-in'
	})
);
