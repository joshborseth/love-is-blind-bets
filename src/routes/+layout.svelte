<script lang="ts">
	import '../app.css';
	import { Toaster } from '$lib/components/ui/sonner';
</script>

<Toaster />
<div class="h-screen w-screen bg-background">
	<slot />
</div>
