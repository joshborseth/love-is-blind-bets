<script lang="ts">
	import { AspectRatio } from '@/components/ui/aspect-ratio';
	import { Badge } from '@/components/ui/badge';
	import * as Card from '@/components/ui/card';
	export let name: String;
	export let job: string;
	export let gender: 'Male' | 'Female';
	export let imageUrl: string;
	export let age: number;
</script>

<Card.Root class="w-fit">
	<Card.Content class="p-2">
		<div class="w-60">
			<AspectRatio class="bg-muted rounded-lg">
				<img src={imageUrl} alt={`${name} Headshot`} class="rounded-md object-cover" />
			</AspectRatio>
		</div>
	</Card.Content>
	<Card.Header class="p-4">
		<div class="flex justify-between">
			<Card.Title>{name}</Card.Title>
			<Badge class={gender === 'Male' ? 'bg-male hover:bg-male' : 'bg-female hover:bg-female'}
				>{gender}</Badge
			>
		</div>
		<div class="flex justify-between">
			<Card.Description>{job}</Card.Description>
			<Card.Description>{age} years old</Card.Description>
		</div>
	</Card.Header>
</Card.Root>
