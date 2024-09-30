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
	<section class="grid grid-cols-3 gap-10">
		{#each data.matches as match}
			<Card.Root>
				<Card.Header class="flex flex-col gap-4">
					<div class="flex justify-start gap-10">
						<img
							src={match.maleContestant.headShotUrl}
							alt={match.maleContestant.name}
							class="rounded-md object-cover h-12 w-12"
						/>
						<div class="flex gap-2 flex-col">
							<div class="flex gap-2">
								<Card.Title>{match.maleContestant.name}</Card.Title>
								<Badge class={cn('bg-male hover:bg-male h-5')}>Male</Badge>
							</div>
							<Card.Description>{match.maleContestant.age} years old</Card.Description>
						</div>
					</div>
					<div class="flex justify-start gap-10">
						<img
							src={match.femaleContestant.headShotUrl}
							alt={match.femaleContestant.name}
							class="rounded-md object-cover h-12 w-12"
						/>
						<div class="flex gap-2 flex-col">
							<div class="flex gap-2">
								<Card.Title>{match.femaleContestant.name}</Card.Title>
								<Badge class={cn('bg-female hover:bg-female h-5')}>Female</Badge>
							</div>
							<Card.Description>{match.femaleContestant.age} years old</Card.Description>
						</div>
					</div>
				</Card.Header>
			</Card.Root>
		{/each}
	</section>
</div>
