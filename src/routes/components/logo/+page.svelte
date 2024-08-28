<script lang="ts">
	import ComponentPreview from '$lib/components/component-preview/component-preview.svelte';
	import Header from '$lib/components/header/header.svelte';
	import Logo from '$lib/components/logo/logo.svelte';

	export let title: string = 'Logo';
	export let subtitle: string = 'Component to display a logo.';
</script>

<Header {subtitle} separator>{title}</Header>

<ComponentPreview class="flex flex-wrap items-center justify-around gap-5">
	<Logo size={48} />
	<Logo size={124} />
	<Logo size={152} />
</ComponentPreview>
