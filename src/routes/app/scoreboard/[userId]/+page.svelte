<script lang="ts">
	import { Badge } from '@/components/ui/badge';
	import { buttonVariants } from '@/components/ui/button';
	export let data;
	import * as Card from '@/components/ui/card';
	import { MARRIAGE_GUESS_POINTS, MATCH_GUESS_POINTS } from '@/constants/points.js';
	import { cn } from '@/utils';
	import { ArrowLeft } from 'lucide-svelte';
</script>

<div class="flex flex-col gap-2">
	<div class="flex gap-3 md:flex-row flex-col w-full">
		<a
			href="/app/scoreboard"
			class={buttonVariants({ variant: 'secondary', size: 'sm', class: 'w-fit' })}
		>
			<ArrowLeft class="h-4 w-4" />
		</a>

		<h1 class="text-3xl font-bold">{data.user.fullName}'s Guesses</h1>
		<Badge class="w-fit">Points: {data.user.points}</Badge>
	</div>

	<div class="py-2" />
</div>
<section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
	{#each data.user.matches as match}
		<Card.Root
			class={cn(
				'max-w-[17rem] relative',
				match.marriageGuess && 'shadow-md shadow-primary border border-primary'
			)}
		>
			{#if match.correct}
				{#if match.correctMarriageGuess}
					<Badge class="absolute -top-2 -right-2"
						>+{MARRIAGE_GUESS_POINTS + MATCH_GUESS_POINTS}</Badge
					>
				{:else}
					<Badge class="absolute -top-2 -right-2">+{MATCH_GUESS_POINTS}</Badge>
				{/if}
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
