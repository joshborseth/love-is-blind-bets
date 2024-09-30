<script lang="ts">
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
	import SignOutButton from 'clerk-sveltekit/client/SignOutButton.svelte';
	import * as Popover from '$lib/components/ui/popover';
	import { buttonVariants } from '@/components/ui/button';
	import { Separator } from '@/components/ui/separator';
	import { page } from '$app/stores';
	import { cn } from '@/utils';
	export let data;
</script>

<header class="h-14 md:h-20 border-b-border border-b bg-background flex justify-center">
	<div class="max-w-7xl p-6 flex w-full items-center justify-between">
		<nav class="gap-3 items-center text-sm">
			{#if !data.lockedInUser}
				<a
					href="/app"
					class={buttonVariants({
						variant: 'link',
						class: cn('text-muted-foreground pl-0', $page.url.pathname === '/app' && 'font-bold')
					})}>Matches</a
				>
				<a
					href="/app/marriages"
					class={buttonVariants({
						variant: 'link',
						class: cn(
							'text-muted-foreground',
							$page.url.pathname === '/app/marriages' && 'font-bold'
						)
					})}>Marriages</a
				>
			{:else}
				<a
					href="/app/guesses"
					class={buttonVariants({
						variant: 'link',
						class: cn(
							'text-muted-foreground pl-0',
							$page.url.pathname === '/app/guesses' && 'font-bold'
						)
					})}>My Guesses</a
				>
				<a
					href="/app/scoreboard"
					class={buttonVariants({
						variant: 'link',
						class: cn(
							'text-muted-foreground',
							$page.url.pathname === '/app/scoreboard' && 'font-bold'
						)
					})}>Scoreboard</a
				>
			{/if}
		</nav>
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
							<div class="flex flex-col gap-1">
								<span class="font-medium text-sm">{user.username}</span>
								<span class="text-xs text-muted-foreground">{user.fullName}</span>
								<span class="text-xs text-muted-foreground">{user.primaryEmailAddress}</span>
							</div>
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
<main class="w-full flex justify-center relative">
	<div class="max-w-7xl w-full p-6">
		<slot />
	</div>
</main>
