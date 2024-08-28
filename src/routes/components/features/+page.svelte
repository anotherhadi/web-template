<script lang="ts">
	import ComponentPreview from '$lib/components/component-preview/component-preview.svelte';
	import Header from '$lib/components/header/header.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { ArrowRight, CloudUpload } from 'lucide-svelte';

	export let title: string = 'Features';
	export let subtitle: string = 'Component to display some features.';
</script>

<Header {subtitle} separator>{title}</Header>

<ComponentPreview title="With product Screenshot">
	<div class="grid items-center justify-center gap-5 lg:grid-cols-2 lg:justify-between">
		<div class="">
			<Header
				tag="h2"
				eyebrow="Deploy faster"
				subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				>A better workflow</Header
			>
			<div class="flex flex-col justify-start gap-5">
				<div class="flex items-start justify-start gap-5">
					<CloudUpload size={32} class="flex-shrink-0 text-primary" />
					<p class="text-muted-foreground">
						<strong class="text-foreground">Push to deploy.</strong>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit
						eaque, iste dolor cupiditate blanditiis ratione.
					</p>
				</div>
				<div class="flex items-start justify-start gap-5">
					<CloudUpload size={32} class="flex-shrink-0 text-primary" />
					<p class="text-muted-foreground">
						<strong class="text-foreground">Push to deploy.</strong>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit
						eaque, iste dolor cupiditate blanditiis ratione.
					</p>
				</div>
				<div class="flex items-start justify-start gap-5">
					<CloudUpload size={32} class="flex-shrink-0 text-primary" />
					<p class="text-muted-foreground">
						<strong class="text-foreground">Push to deploy.</strong>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit
						eaque, iste dolor cupiditate blanditiis ratione.
					</p>
				</div>
			</div>
		</div>
		<img
			src="https://via.placeholder.com/300x300"
			alt="Product Screenshot"
			class="w-full rounded-lg"
		/>
	</div></ComponentPreview
>

<ComponentPreview title="Centered">
	<Header
		center
		eyebrow="Deploy faster"
		subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		>Everything you need to deploy your app</Header
	>
	<div class="mx-auto grid max-w-3xl justify-around gap-6 lg:grid-cols-2">
		<div class="flex items-start justify-start gap-5 p-5">
			<div class="flex items-center justify-center rounded-lg bg-primary p-2">
				<CloudUpload size={26} class="text-primary-foreground" />
			</div>
			<div class="grid gap-2">
				<p class="large">Push to deploy.</p>
				<p class="text-muted-foreground">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
					suscipit eaque, iste dolor cupiditate blanditiis ratione.
				</p>
			</div>
		</div>
		<div class="flex items-start justify-start gap-5 p-5">
			<div class="flex items-center justify-center rounded-lg bg-primary p-2">
				<CloudUpload size={26} class="text-primary-foreground" />
			</div>
			<div class="grid gap-2">
				<p class="large">Push to deploy.</p>
				<p class="text-muted-foreground">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
					suscipit eaque, iste dolor cupiditate blanditiis ratione.
				</p>
			</div>
		</div>
		<div class="flex items-start justify-start gap-5 p-5">
			<div class="flex items-center justify-center rounded-lg bg-primary p-2">
				<CloudUpload size={26} class="text-primary-foreground" />
			</div>
			<div class="grid gap-2">
				<p class="large">Push to deploy.</p>
				<p class="text-muted-foreground">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
					suscipit eaque, iste dolor cupiditate blanditiis ratione.
				</p>
			</div>
		</div>
		<div class="flex items-start justify-start gap-5 p-5">
			<div class="flex items-center justify-center rounded-lg bg-primary p-2">
				<CloudUpload size={26} class="text-primary-foreground" />
			</div>
			<div class="grid gap-2">
				<p class="large">Push to deploy.</p>
				<p class="text-muted-foreground">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
					suscipit eaque, iste dolor cupiditate blanditiis ratione.
				</p>
			</div>
		</div>
	</div>
</ComponentPreview>

<ComponentPreview title="Three column">
	<Header
		center
		eyebrow="Deploy faster"
		subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		>Everything you need to deploy your app</Header
	>
	<div class="mx-auto grid max-w-3xl justify-around gap-6 lg:grid-cols-3">
		<div class="flex items-start justify-start gap-5 p-2">
			<CloudUpload size={28} class="flex-shrink-0 text-primary" />
			<div class="grid gap-2">
				<p class="large">Push to deploy.</p>
				<p class="text-muted-foreground">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
					suscipit eaque, iste dolor cupiditate blanditiis ratione.
				</p>
				<Button variant="link" class="mt-4 justify-start p-0"
					><p class="large flex items-center gap-2">Learn more <ArrowRight size={24} /></p></Button
				>
			</div>
		</div>
		<div class="flex items-start justify-start gap-5 p-2">
			<CloudUpload size={28} class="flex-shrink-0 text-primary" />
			<div class="grid gap-2">
				<p class="large">Push to deploy.</p>
				<p class="text-muted-foreground">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
					suscipit eaque, iste dolor cupiditate blanditiis ratione.
				</p>
				<Button variant="link" class="mt-4 justify-start p-0"
					><p class="large flex items-center gap-2">Learn more <ArrowRight size={24} /></p></Button
				>
			</div>
		</div>
		<div class="flex items-start justify-start gap-5 p-2">
			<CloudUpload size={28} class="flex-shrink-0 text-primary" />
			<div class="grid gap-2">
				<p class="large">Push to deploy.</p>
				<p class="text-muted-foreground">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
					suscipit eaque, iste dolor cupiditate blanditiis ratione.
				</p>
				<Button variant="link" class="mt-4 justify-start p-0"
					><p class="large flex items-center gap-2">Learn more <ArrowRight size={24} /></p></Button
				>
			</div>
		</div>
	</div>
</ComponentPreview>
