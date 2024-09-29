<script lang="ts">
	import { ContestantCard } from '@/components/custom/ContestantCard';
	import * as Carousel from '@/components/ui/carousel';
	import type { Contestants } from '@/types/contestants';
	import Selections from './components/Selections.svelte';
	import { ScrollArea } from '@/components/ui/scroll-area';
	export let data;
	let selectedMale: Contestants['maleContestants'][number] | null = null;
	let selectedFemale: Contestants['femaleContestants'][number] | null = null;
	let isLoading = false;
	let setLoading = (value: boolean) => (isLoading = value);
	let clearMaleSelection = () => (selectedMale = null);
	let clearFemaleSelection = () => (selectedFemale = null);
</script>

<div class="flex flex-col gap-2">
	<h1 class="text-3xl font-bold">Matches</h1>
	<p class="text-muted-foreground font-light">Choose your matches below!</p>
</div>
<section
	class="mx-auto py-10 bg-background flex items-center gap-12 justify-between max-w-7xl w-full"
>
	<div class="flex flex-col gap-20">
		<Carousel.Root class="w-full max-w-sm">
			<Carousel.Content>
				{#each data.maleContestants as item}
					<Carousel.Item>
						<ContestantCard
							gender="Male"
							contestant={item}
							selectionAction={() => (selectedMale = item)}
							selected={selectedMale?.id === item.id}
							clearSelection={clearMaleSelection}
							disabled={isLoading}
						/>
					</Carousel.Item>
				{/each}
			</Carousel.Content>
			<Carousel.Previous
				disabled={isLoading}
				class="-bottom-10 left-1/3 translate-x-0 translate-y-0 top-auto"
			/>
			<Carousel.Next
				disabled={isLoading}
				class="-bottom-10 right-1/3 translate-x-0 translate-y-0 top-auto"
			/>
		</Carousel.Root>

		<Carousel.Root class="w-full max-w-sm">
			<Carousel.Content>
				{#each data.femaleContestants as item}
					<Carousel.Item>
						<ContestantCard
							gender="Female"
							contestant={item}
							selectionAction={() => (selectedFemale = item)}
							selected={selectedFemale?.id === item.id}
							clearSelection={clearFemaleSelection}
							disabled={isLoading}
						/>
					</Carousel.Item>
				{/each}
			</Carousel.Content>
			<Carousel.Previous
				disabled={isLoading}
				class="-bottom-10 left-1/3 translate-x-0 translate-y-0 top-auto"
			/>
			<Carousel.Next
				disabled={isLoading}
				class="-bottom-10 right-1/3 translate-x-0 translate-y-0 top-auto"
			/>
		</Carousel.Root>
	</div>
	<Selections
		{isLoading}
		{selectedMale}
		{selectedFemale}
		{clearMaleSelection}
		{clearFemaleSelection}
		{setLoading}
	/>

	<ScrollArea class="w-full h-80 max-w-[12rem] border border-border rounded-md p-3">
		{#each data.matches as match}
			<div class="flex gap-4 items-center justify-center w-full">
				<img
					src={match.maleContestant.imageUrl}
					alt={match.maleContestant.name}
					class="object-cover h-14 w-14"
				/>
				<img
					src={match.femaleContestant.imageUrl}
					alt={match.femaleContestant.name}
					class="object-cover h-14 w-14"
				/>
			</div>
		{/each}
	</ScrollArea>
</section>
