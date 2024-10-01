<script lang="ts">
	import { Badge } from '@/components/ui/badge';
	import * as Dialog from '@/components/ui/dialog';
	import * as Card from '@/components/ui/card';
	import { cn } from '@/utils';
	import { Button, buttonVariants } from '@/components/ui/button';
	import { ScrollArea } from '@/components/ui/scroll-area';
	import type { Contestants } from '@/types/contestants';
	export let gender: 'Male' | 'Female';
	export let contestant:
		| Contestants['maleContestants'][number]
		| Contestants['femaleContestants'][number];

	export let roughEdges: boolean = false;
	export let selected: boolean = false;
	export let selectionAction: undefined | (() => void) = undefined;
	export let clearSelection: undefined | (() => void) = undefined;
	export let disabled: boolean = false;
</script>

<Card.Root class={cn('flex justify-between max-w-lg', roughEdges && 'border-0 shadow-none')}>
	<Card.Header class="w-full lg:p-6 p-4 space-y-0 pb-3 justify-between">
		<div class="flex flex-col gap-1">
			<div class="flex w-full items-center justify-between">
				<Card.Title>{contestant.name}</Card.Title>
				<Badge
					class={cn(
						gender === 'Male' ? 'bg-male hover:bg-male' : 'bg-female hover:bg-female',
						'h-5'
					)}
				>
					<span class="lg:inline hidden">{gender}</span>
					<span class="lg:hidden inline">{gender[0]}</span></Badge
				>
			</div>
			<div>
				<Card.Description class="text-xs max-w-40">{contestant.job}</Card.Description>
				<Card.Description class="text-xs">{contestant.age} years old</Card.Description>
			</div>
		</div>
		<div class="flex w-full gap-2">
			<Dialog.Root>
				<Dialog.Trigger
					{disabled}
					class={buttonVariants({ variant: 'secondary', size: 'sm', class: 'w-full' })}
					>View</Dialog.Trigger
				>
				<Dialog.Content>
					<Dialog.Header>
						<div class="flex gap-3 items-center">
							<Dialog.Title class="text-2xl text-foreground">{contestant.name}</Dialog.Title>
							<Badge
								class={cn(
									gender === 'Male' ? 'bg-male hover:bg-male' : 'bg-female hover:bg-female',
									'h-5'
								)}
							>
								{gender}
							</Badge>
						</div>
						<div class="text-left">
							<Dialog.Description>{contestant.job}</Dialog.Description>
							<Dialog.Description>{contestant.age} years old</Dialog.Description>
						</div>
					</Dialog.Header>
					<div class="flex justify-between flex-col-reverse gap-4 sm:flex-row">
						<ScrollArea class="h-60"
							><Dialog.Description class="max-w-xs text-xs pr-3"
								>{contestant.description}</Dialog.Description
							>
						</ScrollArea>
						<img
							src={contestant.imageUrl}
							alt={`${contestant.name}`}
							width={150}
							height={225}
							class="rounded-md object-cover"
						/>
					</div>
				</Dialog.Content>
			</Dialog.Root>
			{#if selectionAction}
				<Button
					size="sm"
					class="w-full"
					variant={!selected ? 'default' : 'destructive'}
					on:click={!selected ? selectionAction : clearSelection}
					{disabled}>{!selected ? 'Select' : 'Clear'}</Button
				>
			{/if}
		</div>
	</Card.Header>
	<Card.Content class="p-0">
		<img
			src={contestant.imageUrl}
			alt={`${contestant.name}`}
			width={200}
			height={300}
			class="rounded-r-md object-cover h-full"
		/>
	</Card.Content>
</Card.Root>
