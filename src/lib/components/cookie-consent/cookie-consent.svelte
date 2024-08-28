<script lang="ts">
	import * as Alert from '$lib/components/ui/alert/index.js';
	import { Cookie } from 'lucide-svelte';
	import { cn } from '$lib/utils';
	import Button from '../ui/button/button.svelte';
	let className: string = '';
	export { className as class };
</script>

<div class={cn('absolute bottom-0 m-10', className)}>
	<Alert.Root class="max-w-md px-6 py-6">
		<Alert.Title class="mb-4 flex items-center gap-4">
			<Cookie size="20" />
			We use cookies</Alert.Title
		>

		<Alert.Description>
			<p class="muted mb-2">
				We use cookies to ensure you get the best experience on our website. For more information on
				how we use cookies, please see our cookie policy.
			</p>
			<p class="muted small mb-4">
				By clicking "<span class="font-medium opacity-80">Accept</span>", you agree to our use of
				cookies.
			</p>
			<div class="grid grid-cols-2 items-center gap-5">
				<Button class="w-full">Accept</Button>
				<Button class="w-full" variant="outline">Decline</Button>
			</div>
		</Alert.Description>
	</Alert.Root>
</div>
