<script lang="ts">
	import { Button } from '@/components/ui/button';
	import { page } from '$app/stores';
</script>

<div class="flex justify-center items-center h-screen w-screen">
	<div class="flex flex-col gap-2 items-center">
		<h1 class="text-3xl font-bold">
			{$page.status}
			{$page.error?.message ?? 'Something Went Wrong'}
		</h1>
		<p>Oops! Something went wrong.</p>
		<div class="py-2" />
		<Button on:click={() => window.history.back()} class="w-full">Go Back</Button>
	</div>
</div>
