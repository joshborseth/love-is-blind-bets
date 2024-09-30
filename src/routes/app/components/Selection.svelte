<script lang="ts">
	import { Button, buttonVariants } from '@/components/ui/button';
	import type { Contestants } from '@/types/contestants';
	import { cn } from '@/utils';
	import { fade } from 'svelte/transition';
	import * as Dialog from '@/components/ui/dialog';
	import { Badge } from '@/components/ui/badge';
	import { ScrollArea } from '@/components/ui/scroll-area';
	export let isLoading = false;
	export let clearSelection: () => void;
	export let gender: 'Male' | 'Female';
	export let selectedContestant:
		| Contestants['maleContestants'][number]
		| Contestants['femaleContestants'][number]
		| null = null;
</script>

<div class={cn('flex flex-col gap-4', isLoading && 'opacity-50')}>
	<div class="h-5">
		<div
			class={cn(
				'font-semibold text-lg md:text-left text-center md:text-xl transition-all duration-100 w-full h-full',
				!selectedContestant && 'border-b'
			)}
		>
			{#if selectedContestant}
				<h3 in:fade={{ duration: 100 }} out:fade={{ duration: 100 }}>
					{selectedContestant.name}
				</h3>
			{/if}
		</div>
	</div>

	<div class="md:w-28 md:h-48 h-40 w-20 lg:w-40 lg:h-72 border rounded-md">
		{#if selectedContestant}
			<img
				src={selectedContestant.imageUrl}
				alt={selectedContestant.name}
				class="object-cover h-full w-full rounded-md"
				in:fade={{ duration: 100 }}
				out:fade={{ duration: 100 }}
			/>
		{/if}
	</div>

	<div class="w-full flex flex-col gap-2">
		<Dialog.Root>
			<Dialog.Trigger
				disabled={!selectedContestant}
				class={buttonVariants({
					variant: 'secondary',
					class: cn(
						'duration-100 transition-all disabled:bg-background disabled:opacity-100 disabled:border'
					),
					size: 'sm'
				})}
			>
				{#if selectedContestant}
					<span in:fade={{ duration: 100 }} out:fade={{ duration: 100 }}>View</span>
				{/if}
			</Dialog.Trigger>
			{#if selectedContestant}
				<Dialog.Content>
					<Dialog.Header>
						<div class="flex gap-3 items-center">
							<Dialog.Title class="text-2xl text-foreground">{selectedContestant.name}</Dialog.Title
							>
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
							<Dialog.Description>{selectedContestant.job}</Dialog.Description>
							<Dialog.Description>{selectedContestant.age} years old</Dialog.Description>
						</div>
					</Dialog.Header>
					<div class="flex justify-between flex-col-reverse gap-4 sm:flex-row">
						<ScrollArea class="h-60"
							><Dialog.Description class="max-w-xs text-xs pr-3"
								>{selectedContestant.description}</Dialog.Description
							>
						</ScrollArea>
						<img
							src={selectedContestant.imageUrl}
							alt={`${selectedContestant.name}`}
							width={200}
							height={300}
							class="rounded-md object-cover h-full"
						/>
					</div>
				</Dialog.Content>
			{/if}
		</Dialog.Root>

		<Button
			variant="destructive"
			on:click={clearSelection}
			disabled={!selectedContestant}
			class={cn(
				'duration-100 transition-all disabled:bg-background disabled:opacity-100 disabled:border'
			)}
			size="sm"
		>
			{#if selectedContestant}
				<span in:fade={{ duration: 100 }} out:fade={{ duration: 100 }}>Clear</span>
			{/if}
		</Button>
	</div>
</div>
