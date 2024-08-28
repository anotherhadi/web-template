<script lang="ts">
	import ComponentPreview from '$lib/components/component-preview/component-preview.svelte';
	import Header from '$lib/components/header/header.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';

	export let title: string = 'Newsletter';
	export let subtitle: string = 'Component to display a newsletter form.';
</script>

<Header {subtitle} separator>{title}</Header>

<ComponentPreview title="Classic">
	<div class="w-full p-16">
		<div class="grid items-center justify-around gap-10 xl:flex">
			<p class="large text-2xl">
				Want product news and updates?<br />Sign up for our newsletter.
			</p>
			<div class="grid gap-4">
				<div class="flex items-center justify-center gap-2">
					<Input placeholder="Your email" />
					<Button variant="outline">Subscribe</Button>
				</div>
				<p>We care about your data. Read our <a href="">privacy policy</a></p>
			</div>
		</div>
	</div>
</ComponentPreview>

<ComponentPreview title="Inverted" class="p-0">
	<div class="w-full p-16">
		<div class="grid items-center justify-around gap-10 rounded-md bg-foreground p-10 xl:flex">
			<p class="large text-2xl text-background">
				Want product news and updates?<br />Sign up for our newsletter.
			</p>
			<div class="grid gap-4">
				<div class="flex items-center justify-center gap-2">
					<Input placeholder="Your email" />
					<Button variant="outline">Subscribe</Button>
				</div>
				<p class="text-background">
					We care about your data. Read our <a href="">privacy policy</a>
				</p>
			</div>
		</div>
	</div>
</ComponentPreview>

<ComponentPreview title="Catchy" class="p-0">
	<div class="w-full p-16">
		<div class="grid items-center justify-around gap-10 rounded-md bg-primary p-10 xl:flex">
			<p class="large text-2xl">
				Want product news and updates?<br />Sign up for our newsletter.
			</p>
			<div class="grid gap-4">
				<div class="flex items-center justify-center gap-2">
					<Input placeholder="Your email" />
					<Button variant="outline">Subscribe</Button>
				</div>
				<p>We care about your data. Read our <a href="">privacy policy</a></p>
			</div>
		</div>
	</div>
</ComponentPreview>
