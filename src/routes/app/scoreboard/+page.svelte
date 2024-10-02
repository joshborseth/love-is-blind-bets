<script>
	import * as Alert from '@/components/ui/alert';
	import { MARRIAGE_GUESS_POINTS, MATCH_GUESS_POINTS } from '@/constants/points';
	import * as Card from '@/components/ui/card';
	import { buttonVariants } from '@/components/ui/button';
	export let data;
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
<div class="py-3" />
<section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
	{#each data.users as user}
		<Card.Root class="w-full h-full p-0">
			<Card.Header>
				<h1 class="text-xl font-bold">{user.fullName}</h1>
				<p class="text-muted-foreground font-light">
					{user.username}
				</p>
			</Card.Header>
			<Card.Content>
				<a class={buttonVariants({ variant: 'default' })} href={`/app/scoreboard/${user.userId}`}
					>View Guesses</a
				>
			</Card.Content>
		</Card.Root>
	{/each}
</section>
