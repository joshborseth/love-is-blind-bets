<script lang="ts">
	import '../app.css';
	import { Toaster } from '$lib/components/ui/sonner';
</script>

<Toaster />
<div class="bg-background min-h-screen text-foreground">
	<slot />
</div>
