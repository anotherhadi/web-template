<script lang="ts">
	import CookieConsent from '$lib/components/cookie-consent.svelte';
	import DarkmodeToggle from '$lib/components/darkmode-toggle.svelte';
	import Logo from '$lib/components/logo.svelte';
	import Button from '$lib/components/ui/button/button.svelte';

	import { toast } from 'svelte-sonner';
</script>

<header class="relative m-auto w-full max-w-7xl px-10 py-5">
	<div class="flex w-full flex-col items-center justify-center gap-5">
		<Logo class="w-1/2" />
	</div>
	<h1 class="invisible absolute">Hadi</h1>
</header>

<h1>Test</h1>

<p>
	Lorem dolor, sit amet consectetur adipisicing elit. Iusto dolor officia ratione similique vitae,
</p>

<DarkmodeToggle />
<Button
	variant="outline"
	on:click={() =>
		toast.success('Event has been created', {
			description: 'Sunday, December 03, 2023 at 9:00 AM',
			action: {
				label: 'Undo',
				onClick: () => console.info('Undo')
			}
		})}
>
	Show Toast
</Button>

<CookieConsent />
