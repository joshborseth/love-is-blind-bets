<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { goto, invalidateAll } from '$app/navigation';
	import { Button } from '@/components/ui/button';
	import * as Tooltip from '@/components/ui/tooltip';
	import type { Contestants } from '@/types/contestants';
	import { cn } from '@/utils';
	import { Heart, LoaderCircle } from 'lucide-svelte';
	import Selection from './Selection.svelte';
	export let isLoading = false;
	export let setLoading: (value: boolean) => void;
	export let selectedMale: Contestants['maleContestants'][number] | null = null;
	export let selectedFemale: Contestants['femaleContestants'][number] | null = null;
	export let clearMaleSelection: () => void;
	export let clearFemaleSelection: () => void;
	$: selectedMaleId = selectedMale?.id;
	$: selectedFemaleId = selectedFemale?.id;
</script>

<div class="flex max-w-xs md:max-w-xl items-center gap-4 justify-center w-full">
	<Selection
		clearSelection={clearMaleSelection}
		{isLoading}
		gender="Male"
		selectedContestant={selectedMale}
	/>
	<Tooltip.Root openDelay={0}>
		<Tooltip.Trigger asChild let:builder>
			<form
				method="POST"
				action="?/select"
				use:enhance={() => {
					setLoading(true);
					return async ({ result }) => {
						if (result.type === 'redirect') {
							goto(result.location);
						} else {
							await applyAction(result);
							await invalidateAll();
							clearFemaleSelection();
							clearMaleSelection();
						}
						setLoading(false);
					};
				}}
			>
				<input hidden bind:value={selectedMaleId} name="selectedMaleId" />
				<input hidden bind:value={selectedFemaleId} name="selectedFemaleId" />
				<Button
					variant="ghost"
					class="disabled:opacity-100 hover:bg-background"
					builders={[builder]}
					disabled={!selectedMale || !selectedFemale || isLoading}
					type="submit"
				>
					{#if isLoading}
						<LoaderCircle class="animate-spin" />
					{:else}
						<Heart
							class={cn(
								'text-border transition-all duration-1000',
								selectedFemale && selectedMale && 'fill-female text-female scale-150'
							)}
						/>
					{/if}
				</Button>
			</form>
		</Tooltip.Trigger>
		<Tooltip.Content class="border-0 bg-background shadow-none">
			<p class="font-semibold">Match?</p>
		</Tooltip.Content>
	</Tooltip.Root>

	<Selection
		clearSelection={clearFemaleSelection}
		{isLoading}
		gender="Female"
		selectedContestant={selectedFemale}
	/>
</div>
