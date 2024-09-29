<script lang="ts">
	import { ContestantCard } from '@/components/custom/ContestantCard';
	import { Marquee } from '@/components/custom/Marquee';
	import type { Contestants } from '@/types/contestants';
	export let data: Contestants;
</script>

<div class="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] h-screen">
	<div class="flex items-center relative justify-center py-12 h-full">
		<slot />
	</div>

	<div
		class="relative h-full w-full flex-col items-center justify-center overflow-hidden py-20 bg-gradient-to-bl from-primary/50 to-primary hidden lg:flex"
	>
		<Marquee pauseOnHover class="[--duration:100s]">
			{#each data.maleContestants as item}
				<ContestantCard contestant={item} gender="Male" roughEdges />
			{/each}
		</Marquee>
		<Marquee reverse pauseOnHover class="[--duration:150s]">
			{#each data.femaleContestants as item}
				<ContestantCard contestant={item} gender="Female" roughEdges />
			{/each}
		</Marquee>
	</div>
</div>
