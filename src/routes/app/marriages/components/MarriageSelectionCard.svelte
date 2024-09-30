<script lang="ts">
	import * as Card from '@/components/ui/card';
	import { Button } from '@/components/ui/button';
	import type { Match } from '@/types/match';
	import { cn } from '@/utils';

	export let match: Match;
	export let checked: boolean;
	export let disabled: boolean;
	export let toggleChecked: (id: number) => void;
</script>

<Card.Root class={cn('max-w-[17rem]', checked && 'shadow-md shadow-primary border border-primary')}>
	<Button
		disabled={disabled && !checked}
		on:click={() => toggleChecked(match.id)}
		class="h-full w-full p-0 flex justify-start"
		variant="ghost"
	>
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
	</Button>
</Card.Root>
<input type="checkbox" hidden name="matchId" value={match.id} {checked} />
