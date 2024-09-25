<script lang="ts">
	import { buttonVariants } from '@/components/ui/button';
	import { cn } from '$lib/utils';
	import { Motion } from 'svelte-motion';
	import { SplitView } from '@/components/layouts/SplitView';
	let buttonText = 'Get Started';
	let title = 'Love is Blind Fantasy League';
	let wordSplit = [...title.split(' '), buttonText];
	export let data;
</script>

<SplitView {data}>
	<div class="max-w-lg flex flex-col">
		<Motion
			variants={{
				hidden: { opacity: 0 },
				show: {
					opacity: 1,
					transition: {
						staggerChildren: 0.25
					}
				}
			}}
			initial="hidden"
			animate="show"
			let:motion
		>
			<h1
				class={cn(
					'font-display text-center md:text-left text-6xl font-bold leading-tight tracking-[-0.02em] drop-shadow-sm'
				)}
				use:motion
			>
				{#each wordSplit as word, i}
					<Motion
						variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}
						let:motion
					>
						<span class={cn('inline-block', i === wordSplit.length - 1 && 'w-full')} use:motion>
							{#if word === ''}
								<span>&nbsp;</span>
							{:else if i === wordSplit.length - 1}
								<a
									href="/app"
									class={buttonVariants({
										variant: 'default',
										class: 'tracking-normal text-lg py-6 px-12'
									})}>Get Started</a
								>
							{:else}
								{word}
							{/if}
						</span>
					</Motion>
				{/each}
			</h1>
		</Motion>
	</div>
</SplitView>
