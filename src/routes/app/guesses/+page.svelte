<script lang="ts">
	import * as Alert from '@/components/ui/alert';
	import * as Card from '@/components/ui/card';
	import { buttonVariants } from '@/components/ui/button';
	import { cn } from '@/utils';
	import { page } from '$app/stores';
	import { Badge } from '@/components/ui/badge';
	export let data;
</script>

<div class="flex flex-col gap-2">
	{#if $page.url.searchParams.get('status') === 'guesses-complete'}
		<h1 class="text-3xl font-bold">Success! You're All Done!</h1>
		<p class="text-muted-foreground font-light">
			You have matched up all of the contestants. You can come back to this page at any time to view
			your guesses.
		</p>
	{:else}
		<h1 class="text-3xl font-bold">Your Guesses</h1>
		<Badge class="w-fit">Points: {data.points}</Badge>
		<p class="text-muted-foreground font-light">
			View what you have guessed. Couples that you have guessed to get married will be highlighted.
		</p>
	{/if}

	<div class="py-2" />
	{#if !data.lockedInUser}
		<Alert.Root variant="destructive" class="w-fit flex flex-col gap-3">
			<Alert.Title>Oops!</Alert.Title>
			<Alert.Description>Select your guesses before you can view them.</Alert.Description>
			<a href="/app" class={buttonVariants({ variant: 'destructive', class: 'w-fit' })}
				>Go to Match Selection</a
			>
		</Alert.Root>
	{/if}
</div>
{#if data.lockedInUser}
	<section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
		{#each data.matches as match}
			<Card.Root
				class={cn(
					'max-w-[17rem] relative',
					match.marriageGuess && 'shadow-md shadow-primary border border-primary'
				)}
			>
				{#if match.correct}
					<Badge class="absolute -top-2 -right-2">+1</Badge>
				{/if}
				<Card.Header class="flex flex-col gap-4">
					<div class="flex justify-start gap-6 w-full">
						<img
							src={match.maleContestant.headShotUrl}
							alt={match.maleContestant.name}
							class="rounded-md object-cover h-12 w-12"
						/>
						<div class="flex gap-2 flex-col">
							<div class="flex gap-2">
								<Card.Title>{match.maleContestant.name}</Card.Title>
							</div>
							<Card.Description>{match.maleContestant.age} years old</Card.Description>
						</div>
					</div>
					<div class="flex justify-start gap-6 w-full">
						<img
							src={match.femaleContestant.headShotUrl}
							alt={match.femaleContestant.name}
							class="rounded-md object-cover h-12 w-12"
						/>
						<div class="flex gap-2 flex-col">
							<div class="flex gap-2">
								<Card.Title>{match.femaleContestant.name}</Card.Title>
							</div>
							<Card.Description>{match.femaleContestant.age} years old</Card.Description>
						</div>
					</div>
				</Card.Header>
			</Card.Root>
		{/each}
	</section>
{/if}
