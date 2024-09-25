<script lang="ts">
	import { ContestantCard } from '@/components/custom/ContestantCard';
	export let data;
</script>

<section class="grid md:grid-cols-2 grid-cols-1 gap-4 p-4 bg-background">
	{#each data.maleContestants as contestant}
		<ContestantCard
			name={contestant.name}
			job={contestant.job}
			gender="Male"
			imageUrl={contestant.imageUrl}
			age={Number(contestant.age)}
			desc={contestant.description}
		/>
	{/each}
	{#each data.femaleContestants as contestant}
		<ContestantCard
			name={contestant.name}
			job={contestant.job}
			gender="Female"
			imageUrl={contestant.imageUrl}
			age={Number(contestant.age)}
			desc={contestant.description}
		/>
	{/each}
</section>
