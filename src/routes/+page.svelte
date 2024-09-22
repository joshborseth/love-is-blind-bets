<script lang="ts">
	import { ContestantCard } from '@/components/custom/ContestantCard';
	import { contestants } from '../lib/constants/contestants';
</script>

<section class="grid md:grid-cols-2 grid-cols-1 gap-4 p-4 bg-background">
	{#each contestants as contestant}
		<ContestantCard
			name={contestant.name}
			job={contestant.occupation}
			gender={contestant.gender === 'M' ? 'Male' : 'Female'}
			imageUrl={contestant.img}
			age={Number(contestant.age)}
		/>
	{/each}
</section>
