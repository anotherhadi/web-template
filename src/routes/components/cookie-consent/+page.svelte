<script lang="ts">
	import ComponentPreview from '$lib/components/component-preview/component-preview.svelte';
	import CookieConsent from '$lib/components/cookie-consent/cookie-consent.svelte';
	import Header from '$lib/components/header/header.svelte';

	let title: string = 'Cookie Consent';
	let subtitle: string =
		'Cookie Consent is a component for alerting users about the use of cookies on your website. It is designed to help you comply with the EU Cookie Law.';
</script>

<Header {subtitle} separator>{title}</Header>

<ComponentPreview title={title + ' n°1'} class="pt-40">
	<CookieConsent />

	<!-- Ignore this one -->
	<CookieConsent class="invisible relative" />
</ComponentPreview>
