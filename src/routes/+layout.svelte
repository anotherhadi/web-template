<script>
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from '$lib/components/ui/sonner';
	import TopNavigation from '$lib/components/navigation/top-navigation/top-navigation.svelte';
</script>

<ModeWatcher />
<Toaster />
<div class="relative flex min-h-screen flex-col bg-background" id="page" data-vaul-drawer-wrapper>
	<TopNavigation />
	<div class="mt-16"></div>
	<slot />
</div>
