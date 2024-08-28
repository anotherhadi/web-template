<script lang="ts">
	import Sidebar from '$lib/components/navigation/sidebar.svelte';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	const sidebarNavItems = [
		{
			title: 'Profile',
			href: '/examples/forms'
		},
		{
			title: 'Account',
			href: '/examples/forms/account'
		},
		{
			title: 'Appearance',
			href: '/examples/forms/appearance'
		},
		{
			title: 'Notifications',
			href: '/examples/forms/notifications'
		},
		{
			title: 'Display',
			href: '/examples/forms/display'
		}
	];
</script>

<div class="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
	<aside class="-mx-4 lg:w-1/5">
		<Sidebar items={sidebarNavItems} />
	</aside>
	<div class="flex-1 lg:max-w-2xl">
		<slot />
	</div>
</div>

<!-- <div class="flex"> -->
<!-- 	<ScrollArea -->
<!-- 		class="fixed left-0 top-16 hidden h-screen w-72 flex-col gap-2 overflow-y-scroll p-5 lg:flex" -->
<!-- 	> -->
<!-- 		<p class="large mb-2">Components</p> -->
<!-- 		<p><a href="/components">Introduction</a></p> -->
<!-- 		<p class="large mb-2 mt-4">Other</p> -->
<!-- 		<p><a href="/components/cookie-consent">Cookie Consent</a></p> -->
<!-- 		<p><a href="/components/navigation">Navigation</a></p> -->
<!-- 		<p><a href="/components/logo">Logos</a></p> -->
<!-- 		<p><a href="/components/pricing">Pricing</a></p> -->
<!-- 		<p><a href="/components/header">Header</a></p> -->
<!-- 		<p><a href="/components/features">Features</a></p> -->
<!-- 	</ScrollArea> -->
<!-- 	<main class="max-w-none overflow-hidden lg:ml-72 lg:w-[calc(90vw-18rem)]"> -->
<!-- 		<slot></slot> -->
<!-- 	</main> -->
<!-- </div> -->
