<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label/index.js';
</script>

<div class="grid h-[calc(100vh-4rem)] w-full grid-cols-1">
	<div class="relative flex items-center justify-center p-5">
		<div class="flex max-w-sm flex-col justify-center gap-5">
			<h1 class="text-center">Forgot your password?</h1>
			<h6 class="muted mb-4 text-center">Enter your email below to reset your password</h6>

			<div class="grid w-full max-w-sm items-center gap-1.5">
				<Label for="email">Email</Label>
				<Input type="email" id="email" placeholder="email" />
			</div>

			<Button>Send reset link</Button>
		</div>
	</div>
</div>
