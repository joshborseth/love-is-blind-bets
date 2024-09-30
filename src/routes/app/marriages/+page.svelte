<script lang="ts">
	import { Button, buttonVariants } from '@/components/ui/button';
	import MarriageSelectionCard from './components/MarriageSelectionCard.svelte';
	import { MAX_MATCHES } from '@/constants/matches';
	import { MAX_GUESSES } from '@/constants/guesses';
	import * as Card from '@/components/ui/card';
	import { applyAction, enhance } from '$app/forms';
	import * as Dialog from '@/components/ui/dialog';
	import { goto } from '$app/navigation';
	import { LoaderCircle } from 'lucide-svelte';
	export let data;
	const formName = 'marriage-selection-form';
	let checkedIds: Array<{ id: number; checked: boolean }> = data.matches.length
		? data.matches.map((match) => ({
				id: match.id,
				checked: false
			}))
		: [];
	let toggleChecked = (id: number) =>
		(checkedIds = checkedIds.map((c) => (c.id === id ? { ...c, checked: !c.checked } : c)));

	let disabled = false;
	let isLoading = false;

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
				<a href="/app" class={buttonVariants({ variant: 'secondary' })}>Go to Match Selection</a>

				<Dialog.Root>
					<Dialog.Trigger disabled={!disabled} class={buttonVariants({ variant: 'default' })}
						>Submit</Dialog.Trigger
					>
					<Dialog.Content>
						<Dialog.Header>
							<Dialog.Title class="text-2xl text-foreground">Are you sure?</Dialog.Title>

							<Dialog.Description
								>This will lock in all of your selections and you may not edit them later.</Dialog.Description
							>
							<Dialog.Description class="font-bold">You cannot undo this action.</Dialog.Description
							>
						</Dialog.Header>
						<Dialog.Footer class="sm:justify-start">
							<Button form={formName} type="submit" disabled={!disabled}>
								{#if isLoading}
									<LoaderCircle class="animate-spin" />
								{:else}
									Submit
								{/if}
							</Button>
						</Dialog.Footer>
					</Dialog.Content>
				</Dialog.Root>
			</div>
		</div>
		<form
			id={formName}
			use:enhance={() => {
				isLoading = true;
				return async ({ result }) => {
					if (result.type === 'redirect') {
						await goto(result.location, { invalidateAll: true });
					} else {
						await applyAction(result);
					}
					isLoading = false;
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
			<a href="/app" class={buttonVariants({ variant: 'secondary' })}>Go to Match Selection</a>
		</div>

		<section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 h-full">
			{#each Array.from({ length: MAX_MATCHES }) as match}
				<Card.Root class="max-w-[17rem] h-44" />
			{/each}
		</section>
	</div>
{/if}
