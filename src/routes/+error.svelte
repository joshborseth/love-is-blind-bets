<script>
	import { buttonVariants } from '@/components/ui/button';
	import { cn } from '@/utils';
</script>

<div class="flex justify-center items-center h-screen w-screen">
	<div class="flex flex-col gap-2 items-center">
		<h1 class="text-3xl font-bold">404 Not Found</h1>
		<p class="text-xl">Sorry, we couldn't find that page.</p>
		<div class="py-2" />
		<a href="/" class={cn(buttonVariants({ variant: 'secondary' }), 'w-full')}> Go Back </a>
	</div>
</div>
