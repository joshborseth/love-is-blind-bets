<script lang="ts">
	import { ContestantCard } from '@/components/custom/ContestantCard';
	import * as Carousel from '@/components/ui/carousel';
	import type { Contestants } from '@/types/contestants';
	import Selections from './components/Selections.svelte';
	import { ScrollArea } from '@/components/ui/scroll-area';
	import { cn } from '@/utils';
	import SelectedMatches from './components/SelectedMatches.svelte';
	import { fade } from 'svelte/transition';
	import { Button, buttonVariants } from '@/components/ui/button';
	import { MAX_MATCHES } from '@/constants/matches';
	import { Menu } from 'lucide-svelte';

	import * as Sheet from '@/components/ui/sheet';
	import { MATCH_GUESS_POINTS } from '@/constants/points';

	export let data;
	let selectedMale: Contestants['maleContestants'][number] | null = null;
	let selectedFemale: Contestants['femaleContestants'][number] | null = null;
	let isLoading = false;
	let setLoading = (value: boolean) => (isLoading = value);
	let clearMaleSelection = () => (selectedMale = null);
	let clearFemaleSelection = () => (selectedFemale = null);
</script>

<div class="flex md:flex-row flex-col gap-2 w-full justify-start md:justify-between md:items-end">
	<div class="flex w-full justify-between">
		<div class="flex flex-col gap-2 text-left w-full max-w-xs md:max-w-xl">
			<h1 class="text-3xl font-bold">Matches</h1>
			<p class="text-muted-foreground text-sm md:text-base font-light">
				Each correct guess will earn you {MATCH_GUESS_POINTS} point.
			</p>
		</div>

		<Sheet.Root>
			<Sheet.Trigger
				class={buttonVariants({
					variant: 'outline',
					size: 'icon',
					class: 'lg:hidden inline-flex'
				})}><Menu /></Sheet.Trigger
			>
			<Sheet.Content>
				<Sheet.Header>
					<Sheet.Title>Your Matches</Sheet.Title>
					<Sheet.Description>{data.matches.length} / {MAX_MATCHES}</Sheet.Description>
				</Sheet.Header>
				<div class="py-2" />
				<div class={cn('w-full rounded-md p-3 h-3/4 overflow-y-auto')}>
					{#each data.matches as match}
						<SelectedMatches {match} />
					{/each}
				</div>
			</Sheet.Content>
		</Sheet.Root>
	</div>

	{#if data.matches.length === MAX_MATCHES && !data.lockedInUser}
		<a
			in:fade={{ duration: 300 }}
			out:fade={{ duration: 300 }}
			href="/app/marriages"
			class={buttonVariants({ variant: 'default', class: 'w-fit' })}>Next</a
		>
	{/if}
</div>
<div class="py-3" />

<section
	class="mx-auto md:py-10 bg-background flex md:flex-row flex-col items-center gap-4 md:gap-12 justify-between max-w-7xl w-full"
>
	{#if data.matches.length !== MAX_MATCHES}
		<div in:fade={{ duration: 300 }} class="flex-col gap-20 hidden md:flex">
			<Carousel.Root class="w-full max-w-xs">
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

			<Carousel.Root class="w-full max-w-xs">
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
	{#if data.matches.length !== MAX_MATCHES}
		<div class="flex flex-wrap justify-center max-w-xs md:hidden">
			{#each [...data.maleContestants.map( (c) => ({ ...c, gender: 'Male' }) ), ...data.femaleContestants.map( (c) => ({ ...c, gender: 'Female' }) )] as match}
				<Button
					on:click={() => {
						if (match.id === selectedMale?.id) {
							return clearMaleSelection();
						}

						if (match.id === selectedFemale?.id) {
							return clearFemaleSelection();
						}

						if (match.gender === 'Male') {
							return (selectedMale = match);
						}

						selectedFemale = match;
					}}
					class={cn(
						'rounded-full p-0.5 h-auto w-auto',
						match.gender === 'Male' && match.id === selectedMale?.id && 'border border-male',
						match.gender === 'Female' && match.id === selectedFemale?.id && 'border border-female'
					)}
					variant="ghost"
					><img
						src={match.headShotUrl}
						alt={match.name}
						class="w-8 h-8 rounded-full object-cover"
					/></Button
				>
			{/each}
		</div>
	{/if}
	<div class="hidden lg:flex flex-col max-w-[12rem] gap-2 w-full">
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
