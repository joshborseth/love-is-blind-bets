<script lang="ts">
	import { ContestantCard } from '@/components/custom/ContestantCard';
	import * as Carousel from '@/components/ui/carousel';
	import type { Contestants } from '@/types/contestants';
	import Selections from './components/Selections.svelte';
	import { ScrollArea } from '@/components/ui/scroll-area';
	import { cn } from '@/utils';
	import SelectedMatches from './components/SelectedMatches.svelte';
	import { fade } from 'svelte/transition';
	import { buttonVariants } from '@/components/ui/button';
	import { MAX_MATCHES } from '@/constants/matches';

	export let data;
	let selectedMale: Contestants['maleContestants'][number] | null = null;
	let selectedFemale: Contestants['femaleContestants'][number] | null = null;
	let isLoading = false;
	let setLoading = (value: boolean) => (isLoading = value);
	let clearMaleSelection = () => (selectedMale = null);
	let clearFemaleSelection = () => (selectedFemale = null);
</script>

<div class="flex w-full justify-between items-end">
	<div class="flex flex-col gap-2">
		<h1 class="text-3xl font-bold">Matches</h1>
		<p class="text-muted-foreground font-light">Choose your matches below!</p>
	</div>
	{#if data.matches.length === MAX_MATCHES}
		<a
			in:fade={{ duration: 300 }}
			out:fade={{ duration: 300 }}
			href="/app/marriages"
			class={buttonVariants({ variant: 'default' })}>Next</a
		>
	{/if}
</div>

<section
	class="mx-auto py-10 bg-background h-full flex items-center gap-12 justify-between max-w-7xl w-full"
>
	{#if data.matches.length !== MAX_MATCHES}
		<div in:fade={{ duration: 300 }} class="flex flex-col gap-20">
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
	{:else}
		<div in:fade={{ duration: 300 }} class="flex flex-col gap-2">
			<h2 class="text-2xl font-bold">You have matched up all of the contestants!</h2>
			<p class="text-muted-foreground">
				Proceed to the next step, or undo some of your selections if you have made a mistake.
			</p>
		</div>
	{/if}
	<Selections
		{isLoading}
		{selectedMale}
		{selectedFemale}
		{clearMaleSelection}
		{clearFemaleSelection}
		{setLoading}
	/>
	<div class="flex flex-col max-w-[12rem] gap-2 w-full">
		<h3 class="text-xl font-bold">Your Matches</h3>
		{#if data.matches.length}
			<p in:fade={{ duration: 300 }} out:fade={{ duration: 300 }}>
				{data.matches.length} / {MAX_MATCHES}
			</p>
		{/if}
		<ScrollArea
			class={cn(
				'w-full h-80 border border-border rounded-md p-3',
				data.matches.length && 'shadow-2xl shadow-primary transition-shadow duration-1000'
			)}
		>
			{#each data.matches as match}
				<SelectedMatches {match} />
			{/each}
		</ScrollArea>
	</div>
</section>
