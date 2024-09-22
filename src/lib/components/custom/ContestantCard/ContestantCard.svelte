<script lang="ts">
	import { Badge } from '@/components/ui/badge';
	import * as Dialog from '@/components/ui/dialog';
	import * as Card from '@/components/ui/card';
	import { cn } from '@/utils';
	import { buttonVariants } from '@/components/ui/button';
	import { ScrollArea } from '@/components/ui/scroll-area';
	export let name: String;
	export let job: string;
	export let gender: 'Male' | 'Female';
	export let imageUrl: string;
	export let age: number;
	export let desc: string;
</script>

<Card.Root class="flex justify-between max-w-lg">
	<Card.Header class="w-full lg:p-6 p-4 space-y-0 pb-3 justify-between">
		<div class="flex flex-col gap-1">
			<div class="flex w-full items-center justify-between">
				<Card.Title>{name}</Card.Title>

				<Badge
					class={cn(
						gender === 'Male' ? 'bg-male hover:bg-male' : 'bg-female hover:bg-female',
						'h-5'
					)}
				>
					<span class="lg:inline hidden">{gender}</span>
					<span class="lg:hidden inline">{gender[0]}</span></Badge
				>
			</div>
			<div>
				<Card.Description class="text-xs">{job}</Card.Description>
				<Card.Description class="text-xs">{age} years old</Card.Description>
			</div>
		</div>
		<Dialog.Root>
			<Dialog.Trigger class={buttonVariants({ variant: 'secondary' })}>View</Dialog.Trigger>
			<Dialog.Content>
				<Dialog.Header>
					<div class="flex gap-3 items-center">
						<Dialog.Title class="text-2xl">{name}</Dialog.Title>
						<Badge
							class={cn(
								gender === 'Male' ? 'bg-male hover:bg-male' : 'bg-female hover:bg-female',
								'h-5'
							)}
						>
							{gender}
						</Badge>
					</div>
					<div class="text-left">
						<Dialog.Description>{job}</Dialog.Description>
						<Dialog.Description>{age} years old</Dialog.Description>
					</div>
				</Dialog.Header>
				<div class="flex justify-between flex-col-reverse gap-4 sm:flex-row">
					<ScrollArea class="h-60"
						><Dialog.Description class="max-w-xs text-xs pr-3">{desc}</Dialog.Description>
					</ScrollArea>
					<img
						src={imageUrl}
						alt={`${name}`}
						width={200}
						height={300}
						class="rounded-md object-cover"
					/>
				</div>
			</Dialog.Content>
		</Dialog.Root>
	</Card.Header>
	<Card.Content class="p-0">
		<img src={imageUrl} alt={`${name}`} width={200} height={300} class="rounded-md object-cover" />
	</Card.Content>
</Card.Root>
