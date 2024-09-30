<script lang="ts">
	import { Button, buttonVariants } from '@/components/ui/button';
	import MarriageSelectionCard from './components/MarriageSelectionCard.svelte';
	import { MAX_MATCHES } from '@/constants/matches';
	import { MAX_GUESSES } from '@/constants/guesses';
	import * as Card from '@/components/ui/card';
	import { applyAction, enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	export let data;
	const formName = 'marriage-selection-form';
	let checkedIds: Array<{ id: number; checked: boolean }> = data.matches.map((match) => ({
		id: match.id,
		checked: false
	}));
	let toggleChecked = (id: number) =>
		(checkedIds = checkedIds.map((c) => (c.id === id ? { ...c, checked: !c.checked } : c)));

	let disabled = false;
	let loading = false;

	$: {
		disabled = checkedIds.filter((c) => !!c.checked).length === MAX_GUESSES;
	}
</script>

{#if data.matches.length === MAX_MATCHES}
	<div class="flex gap-10 flex-col">
		<div class="w-full flex justify-between md:flex-row flex-col gap-6 md:gap-0 md:items-end">
			<div class="flex flex-col gap-2">
				<h1 class="text-3xl font-bold">Who will get married?</h1>
				<p class="text-muted-foreground font-light">
					Based on the matches you chose previously, who do you think will get married?
				</p>
				<p class="font-bold">
					You may choose {MAX_GUESSES} couples.
				</p>
				<p class="font-bold">{checkedIds.filter((c) => !!c.checked).length} / {MAX_GUESSES}</p>
			</div>
			<div class="flex gap-2">
				<a href="/app" class={buttonVariants({ variant: 'default' })}>Go Back</a>
				<Button form={formName} type="submit" disabled={!disabled}>Finish</Button>
			</div>
		</div>
		<form
			id={formName}
			use:enhance={() => {
				loading = true;
				return async ({ result }) => {
					if (result.type === 'redirect') {
						goto(result.location);
					} else {
						await applyAction(result);
					}
					loading = false;
				};
			}}
			method="POST"
			class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
		>
			{#each data.matches as match}
				<MarriageSelectionCard
					{toggleChecked}
					checked={Boolean(checkedIds.find((c) => c.id === match.id)?.checked)}
					{match}
					{disabled}
				/>
			{/each}
		</form>
	</div>
{:else}
	<div class="flex gap-10 flex-col">
		<div class="flex flex-col gap-2 items-start">
			<h1 class="text-3xl font-bold">Oops!</h1>
			<p class="text-muted-foreground font-light">
				You need to match up all of the contestants before you can marry them.
			</p>
			<a href="/app" class={buttonVariants({ variant: 'default' })}>Go Back</a>
		</div>

		<section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			{#each Array.from({ length: MAX_MATCHES }) as match}
				<Card.Root class="max-w-[17rem] h-44" />
			{/each}
		</section>
	</div>
{/if}
