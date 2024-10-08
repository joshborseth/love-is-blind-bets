<script>
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
</div>
<section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
	{#each data.users as user}
		<Card.Root class="w-full h-full p-0">
			<Card.Header>
				<div class="flex justify-between">
					<h1 class="text-xl font-bold">{user.fullName}</h1>
					<p class="text-muted-foreground font-light">
						{user.points}
					</p>
				</div>
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
