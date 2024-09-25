<script lang="ts">
	import SignUp from 'clerk-sveltekit/client/SignUp.svelte';
</script>

<SignUp
	appearance={{
		variables: {
			colorPrimary: 'hsl(262.1 83.3% 57.8%)'
		}
	}}
	redirectUrl="/app"
/>
