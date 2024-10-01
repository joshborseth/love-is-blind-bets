<script>
	import * as Alert from '@/components/ui/alert';
	import { MARRIAGE_GUESS_POINTS, MATCH_GUESS_POINTS } from '@/constants/points';
</script>

<div class="flex flex-col gap-2">
	<h1 class="text-3xl font-bold">Scoreboard</h1>
	<p class="text-muted-foreground font-light">
		See how well your matches performed against other players.
	</p>
	<div class="py-2" />

	<Alert.Root class="w-fit flex flex-col gap-2">
		<Alert.Title>Points - Coming Soon</Alert.Title>
		<Alert.Description
			>We will start tallying up the points once the contestants are matched up in the show!</Alert.Description
		>
		<Alert.Description
			>Correct marriages will earn you {MARRIAGE_GUESS_POINTS} points, while correct matches will earn
			you {MATCH_GUESS_POINTS} point.</Alert.Description
		>
	</Alert.Root>
</div>
