<script lang="ts">
	import { Badge } from '@/components/ui/badge';
	import { Button } from '@/components/ui/button';
	import * as Card from '@/components/ui/card';
	import { cn } from '@/utils';
	export let name: String;
	export let job: string;
	export let gender: 'Male' | 'Female';
	export let imageUrl: string;
	export let age: number;
</script>

<Card.Root class="flex justify-between max-w-xl">
	<Card.Header class="w-full lg:p-6 p-4 space-y-0 pb-3 justify-between">
		<div class="flex flex-col gap-0.5">
			<div class="flex w-full justify-between">
				<Card.Title>{name}</Card.Title>
				<Badge
					class={cn(
						gender === 'Male' ? 'bg-male hover:bg-male' : 'bg-female hover:bg-female',
						'w-fit'
					)}>{gender}</Badge
				>
			</div>
			<Card.Description>{job}</Card.Description>
			<Card.Description>{age} years old</Card.Description>
		</div>
		<Button variant="secondary">Select</Button>
	</Card.Header>
	<Card.Content class="p-0">
		<img
			src={imageUrl}
			alt={`${name} Headshot`}
			width={200}
			height={300}
			class="rounded-md object-cover"
		/>
	</Card.Content>
</Card.Root>
