<script lang="ts">
	import { fade } from 'svelte/transition';
	import { ContestantCard } from '@/components/custom/ContestantCard';
	import { Button } from '@/components/ui/button';
	import * as Carousel from '@/components/ui/carousel';
	import type { Contestants } from '@/types/contestants';
	import { cn } from '@/utils';
	import { Heart } from 'lucide-svelte';
	import * as Tooltip from '@/components/ui/tooltip';
	export let data;

	let selectedMale: Contestants['maleContestants'][number] | null = null;
	let selectedFemale: Contestants['femaleContestants'][number] | null = null;
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
	<section class="mx-auto py-10 bg-background flex items-center justify-between max-w-7xl w-full">
		<div class="flex flex-col gap-20">
			<Carousel.Root class="w-full max-w-md">
				<Carousel.Content>
					{#each data.maleContestants as item}
						<Carousel.Item>
							<ContestantCard
								name={item.name}
								job={item.job}
								gender="Male"
								imageUrl={item.imageUrl}
								age={Number(item.age)}
								desc={item.description}
								selectionAction={() => (selectedMale = item)}
								selected={selectedMale?.id === item.id}
								clearSelection={() => (selectedMale = null)}
							/>
						</Carousel.Item>
					{/each}
				</Carousel.Content>
				<Carousel.Previous class="-bottom-10 left-1/3 translate-x-0 translate-y-0 top-auto" />
				<Carousel.Next class="-bottom-10 right-1/3 translate-x-0 translate-y-0 top-auto" />
			</Carousel.Root>

			<Carousel.Root class="w-full max-w-md">
				<Carousel.Content>
					{#each data.femaleContestants as item}
						<Carousel.Item>
							<ContestantCard
								name={item.name}
								job={item.job}
								gender="Female"
								imageUrl={item.imageUrl}
								age={Number(item.age)}
								desc={item.description}
								selectionAction={() => (selectedFemale = item)}
								selected={selectedFemale?.id === item.id}
								clearSelection={() => (selectedFemale = null)}
							/>
						</Carousel.Item>
					{/each}
				</Carousel.Content>
				<Carousel.Previous class="-bottom-10 left-1/3 translate-x-0 translate-y-0 top-auto" />
				<Carousel.Next class="-bottom-10 right-1/3 translate-x-0 translate-y-0 top-auto" />
			</Carousel.Root>
		</div>
		<div class="flex max-w-xl items-center gap-8 justify-center w-full">
			<div class="flex flex-col gap-4">
				<div class="h-5">
					{#if selectedMale}
						<h3
							class="font-semibold text-xl"
							in:fade={{ duration: 300 }}
							out:fade={{ duration: 300 }}
						>
							{selectedMale.name}
						</h3>
					{/if}
				</div>

				<div class="w-52 h-96 border rounded-md">
					{#if selectedMale}
						<img
							src={selectedMale.imageUrl}
							alt={selectedMale.name}
							class="object-cover h-full w-full rounded-md"
							in:fade={{ duration: 300 }}
							out:fade={{ duration: 300 }}
						/>
					{/if}
				</div>
				<Button
					variant="secondary"
					on:click={() => (selectedMale = null)}
					disabled={!selectedMale}
					class={cn(
						'duration-500 transition-all disabled:bg-background disabled:opacity-100 disabled:border'
					)}
				>
					{#if selectedMale}
						<span in:fade={{ duration: 300 }} out:fade={{ duration: 300 }}>Clear</span>
					{/if}
				</Button>
			</div>

			<Tooltip.Root openDelay={0}>
				<Tooltip.Trigger asChild let:builder>
					<Button
						variant="ghost"
						class="disabled:opacity-100 hover:bg-background"
						builders={[builder]}
						disabled={!selectedMale || !selectedFemale}
					>
						<Heart
							class={cn(
								'text-border transition-all duration-1000',
								selectedFemale && selectedMale && 'fill-female text-female scale-150'
							)}
						/>
					</Button>
				</Tooltip.Trigger>
				<Tooltip.Content class="border-0 bg-background shadow-none">
					<p class="font-semibold">Match?</p>
				</Tooltip.Content>
			</Tooltip.Root>

			<div class="flex flex-col gap-4">
				<div class="h-5">
					{#if selectedFemale}
						<h3
							class="font-semibold text-xl"
							in:fade={{ duration: 300 }}
							out:fade={{ duration: 300 }}
						>
							{selectedFemale.name}
						</h3>
					{/if}
				</div>

				<div class="w-52 h-96 border rounded-md">
					{#if selectedFemale}
						<img
							src={selectedFemale.imageUrl}
							alt={selectedFemale.name}
							class="object-cover h-full w-full rounded-md"
							in:fade={{ duration: 300 }}
							out:fade={{ duration: 300 }}
						/>
					{/if}
				</div>

				<Button
					variant="secondary"
					on:click={() => (selectedFemale = null)}
					disabled={!selectedFemale}
					class={cn(
						'duration-500 transition-all disabled:bg-background disabled:opacity-100 disabled:border'
					)}
				>
					{#if selectedFemale}
						<span in:fade={{ duration: 300 }} out:fade={{ duration: 300 }}>Clear</span>
					{/if}</Button
				>
			</div>
		</div>
	</section>
{/if}
