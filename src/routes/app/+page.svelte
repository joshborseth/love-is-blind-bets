<script lang="ts">
	import { ContestantCard } from '@/components/custom/ContestantCard';

	export let data;
</script>

<div class="flex flex-col gap-2">
	<h1 class="text-3xl font-bold">Dashboard</h1>
	<p class="text-muted-foreground font-light">
		{#if !data.matches}
			Get started below!
		{:else}
			This is where you can view your selected matches.
		{/if}
	</p>
</div>
{#if data.maleContestants && data.femaleContestants}
	<section class="grid md:grid-cols-2 grid-cols-1 gap-4 py-10 bg-background max-w-4xl w-full">
		<div class="flex flex-col gap-4">
			{#each data.maleContestants as item}
				<ContestantCard
					name={item.name}
					job={item.job}
					gender="Male"
					imageUrl={item.imageUrl}
					age={Number(item.age)}
					desc={item.description}
				/>
			{/each}
		</div>
		<div class="flex flex-col gap-4">
			{#each data.femaleContestants as item}
				<ContestantCard
					name={item.name}
					job={item.job}
					gender="Female"
					imageUrl={item.imageUrl}
					age={Number(item.age)}
					desc={item.description}
				/>
			{/each}
		</div>
	</section>
{/if}
