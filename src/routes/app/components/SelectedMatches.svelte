<script lang="ts">
	import { Button } from '@/components/ui/button';
	import { goto, invalidateAll } from '$app/navigation';
	import { applyAction, enhance } from '$app/forms';
	import type { femaleContestants, maleContestants, matches } from '~/db/schema';
	import { LoaderCircle } from 'lucide-svelte';
	import { fade } from 'svelte/transition';
	export let match: typeof matches.$inferSelect & {
		maleContestant: typeof maleContestants.$inferSelect;
		femaleContestant: typeof femaleContestants.$inferSelect;
	};
	let loading = false;
</script>

<form
	class="flex items-center justify-between w-full py-1"
	method="POST"
	in:fade={{ duration: 300 }}
	out:fade={{ duration: 300 }}
	action="?/undo"
	use:enhance={() => {
		loading = true;
		return async ({ result }) => {
			if (result.type === 'redirect') {
				goto(result.location);
			} else {
				await applyAction(result);
				await invalidateAll();
			}
			loading = false;
		};
	}}
>
	<input hidden bind:value={match.id} name="matchId" />
	<div class="flex gap-1">
		<img
			src={match.maleContestant.headShotUrl}
			alt={match.maleContestant.name}
			class="object-cover h-10 w-10 rounded-full"
		/>
		<img
			src={match.femaleContestant.headShotUrl}
			alt={match.femaleContestant.name}
			class="object-cover h-10 w-10 rounded-full"
		/>
	</div>

	<Button
		disabled={loading}
		class="disabled:opacity-100"
		type="submit"
		size="sm"
		variant="secondary"
	>
		{#if loading}
			<LoaderCircle class="animate-spin" />
		{:else}
			Undo
		{/if}
	</Button>
</form>
