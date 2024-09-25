<script lang="ts">
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
	import SignOutButton from 'clerk-sveltekit/client/SignOutButton.svelte';
	import * as Popover from '$lib/components/ui/popover';
	import { Button, buttonVariants } from '@/components/ui/button';
	import Separator from '@/components/ui/separator/separator.svelte';
	import { redirect } from '@sveltejs/kit';
</script>

<header class="h-20 border-b-border border-b bg-background flex justify-center">
	<div class="max-w-7xl p-6 flex w-full items-center justify-between">
		<nav></nav>
		<SignedIn let:user>
			{#if user}
				<div class="flex gap-2 items-center">
					<Popover.Root>
						<Popover.Trigger asChild let:builder>
							<img
								src={user.imageUrl}
								{...builder}
								use:builder.action
								alt={user.fullName}
								class="h-10 w-10 rounded-full"
							/>
						</Popover.Trigger>
						<Popover.Content class="flex flex-col gap-4">
							<span class="text-xs text-muted-foreground">{user.primaryEmailAddress}</span>
							<Separator />
							<SignOutButton
								signOutCallback={() => (location.href = '/auth/sign-in')}
								class={buttonVariants({ variant: 'destructive' })}>Logout</SignOutButton
							>
						</Popover.Content>
					</Popover.Root>
				</div>
			{/if}
		</SignedIn>
	</div>
</header>
<slot />
