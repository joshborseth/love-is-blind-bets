<script lang="ts">
	import { Badge } from '@/components/ui/badge';
	import * as Card from '@/components/ui/card';
	import { cn } from '@/utils';

	let MAX_GEUSSES = 5;
	export let data;
</script>

<div class="flex gap-10 flex-col">
	<div class="flex flex-col gap-2">
		<h1 class="text-3xl font-bold">Who will get married?</h1>
		<p class="text-muted-foreground">
			Based on the matches you chose previously, who do you think will get married?
		</p>
		<p class="font-bold">You may choose {MAX_GEUSSES} couples.</p>
	</div>
	<section class="flex gap-2 flex-wrap">
		{#each data.matches as match}
			<Card.Root>
				<Card.Header class="flex flex-col gap-4">
					<div>
						<div>
							<Card.Title>{match.maleContestant.name}</Card.Title>
							<Badge class={cn('bg-male hover:bg-male h-5')}>Male</Badge>
						</div>
						<Card.Description>{match.maleContestant.age} years old</Card.Description>
					</div>
					<div>
						<Card.Title>{match.femaleContestant.name}</Card.Title>
						<Badge class={cn('bg-female hover:bg-female h-5')}>
							{gender}
						</Badge>
						<Card.Description>{match.femaleContestant.age} years old</Card.Description>
					</div>
				</Card.Header>
			</Card.Root>
		{/each}
	</section>
</div>
