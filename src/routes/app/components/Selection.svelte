<script lang="ts">
	import { Button } from '@/components/ui/button';
	import type { Contestants } from '@/types/contestants';
	import { cn } from '@/utils';
	import { fade } from 'svelte/transition';
	export let isLoading = false;
	export let clearSelection: () => void;
	export let selectedContestant:
		| Contestants['maleContestants'][number]
		| Contestants['femaleContestants'][number]
		| null = null;
</script>

<div class={cn('flex flex-col gap-4', isLoading && 'opacity-50')}>
	<div class="h-5">
		<div
			class={cn(
				'font-semibold text-xl transition-all duration-100 w-1/2 h-full',
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

	<div class="w-40 h-72 border rounded-md">
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
	<Button
		variant="secondary"
		on:click={clearSelection}
		disabled={!selectedContestant}
		class={cn(
			'duration-500 transition-all disabled:bg-background disabled:opacity-100 disabled:border'
		)}
	>
		{#if selectedContestant}
			<span in:fade={{ duration: 100 }} out:fade={{ duration: 100 }}>Clear</span>
		{/if}
	</Button>
</div>
