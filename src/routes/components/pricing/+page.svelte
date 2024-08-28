<script lang="ts">
	import ComponentPreview from '$lib/components/component-preview/component-preview.svelte';
	import Header from '$lib/components/header/header.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { ArrowRight, Check, CheckCircle, Sparkles } from 'lucide-svelte';

	export let title: string = 'Pricing';
	export let subtitle: string = 'Component for displaying pricing information and options.';
</script>

<Header {subtitle} separator>{title}</Header>

<ComponentPreview title="One offer">
	<div class="card-border grid grid-cols-3 p-0">
		<div class="col-span-2 m-8 flex flex-col items-start justify-start p-4">
			<h3>Lifetime membership</h3>
			<p class="mb-6">
				Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis
				blanditiis repellendus etur quidem assumenda.
			</p>
			<p class="mb-4 font-medium text-primary">What's included</p>
			<div class="grid w-full grid-cols-2 gap-2">
				<p class="flex items-center justify-start gap-2 text-left">
					<Check class="text-primary" /> Private forum access
				</p>
				<p class="flex items-center justify-start gap-2 text-left">
					<Check class="text-primary" /> Private forum access
				</p>
				<p class="flex items-center justify-start gap-2 text-left">
					<Check class="text-primary" /> Private forum access
				</p>
				<p class="flex items-center justify-start gap-2 text-left">
					<Check class="text-primary" /> Private forum access
				</p>
			</div>
		</div>
		<div
			class="card-border m-4 flex flex-col items-center justify-center gap-2 border-none bg-accent px-8"
		>
			<p class="lead font-bold">Pay once, own it forever</p>
			<p class="mb-4"><span class="text-5xl font-extrabold">$10</span> USD</p>

			<Button class="mb-4 w-full">Get access</Button>
			<p class="small text-center">
				Invoices and receipts available for easy company reimbursement
			</p>
		</div>
	</div>
</ComponentPreview>

<ComponentPreview title="Three tier">
	<div class="grid items-stretch justify-center gap-6 lg:grid-cols-3">
		<div class="card-border">
			<p class="lead mb-2">Basic</p>
			<p class="mb-2"><span class="text-5xl font-extrabold">$10</span>/month</p>
			<p class="muted">$12 per month if paid annually</p>
			<Button class="my-8 w-full">Buy plan</Button>
			<p class="mb-4 font-bold">Everything necessary to get started.</p>
			<div class="flex flex-col gap-2">
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> 5 products
				</p>
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> Up to 1,000 subscribers
				</p>
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> Basic analytics
				</p>
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> 48-hour support response time
				</p>
			</div>
		</div>

		<div class="card-border relative">
			<Badge class="absolute right-[-10px] top-[-10px] flex items-center gap-2"
				><Sparkles size={16} /> Popular</Badge
			>
			<p class="lead mb-2">Essential</p>
			<p class="mb-2"><span class="text-5xl font-extrabold">$30</span>/month</p>
			<p class="muted">$24 per month if paid annually</p>
			<Button class="my-8 w-full">Buy plan</Button>
			<p class="mb-4 font-bold">
				Everything in Basic, plus essential tools for growing your business.
			</p>
			<div class="flex flex-col gap-2">
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> 25 products
				</p>
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> Up to 10,000 subscribers
				</p>
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> Advanced analytics
				</p>
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> 24-hour support response time
				</p>
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> Marketing automations
				</p>
			</div>
		</div>

		<div class="card-border">
			<p class="lead mb-2">Growth</p>
			<p class="mb-2"><span class="text-5xl font-extrabold">$60</span>/month</p>
			<p class="muted">$48 per month if paid annually</p>
			<Button class="my-8 w-full">Buy plan</Button>
			<p class="mb-4 font-bold">
				Everything in Essential, plus collaboration tools and deeper insights.
			</p>
			<div class="flex flex-col gap-2">
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> Unlimited products
				</p>
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> Unlimited subscribers
				</p>
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> Advanced analytics
				</p>
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> 1-hour, dedicated support response time
				</p>
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> Marketing automations
				</p>
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> Custom reporting tools
				</p>
			</div>
		</div>
	</div>
</ComponentPreview>

<ComponentPreview title="With accent">
	<div class="grid items-stretch justify-center gap-6 lg:grid-cols-3">
		<div class="card-border">
			<p class="lead mb-2">Basic</p>
			<p class="mb-2"><span class="text-5xl font-extrabold">$10</span>/month</p>
			<p class="muted">$12 per month if paid annually</p>
			<Button class="my-8 w-full">Buy plan</Button>
			<p class="mb-4 font-bold">Everything necessary to get started.</p>
			<div class="flex flex-col gap-2">
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> 5 products
				</p>
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> Up to 1,000 subscribers
				</p>
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> Basic analytics
				</p>
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> 48-hour support response time
				</p>
			</div>
		</div>

		<div class="card-border relative">
			<p class="lead mb-2">Essential</p>
			<p class="mb-2"><span class="text-5xl font-extrabold">$30</span>/month</p>
			<p class="muted">$24 per month if paid annually</p>
			<Button class="my-8 w-full">Buy plan</Button>
			<p class="mb-4 font-bold">
				Everything in Basic, plus essential tools for growing your business.
			</p>
			<div class="flex flex-col gap-2">
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> 25 products
				</p>
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> Up to 10,000 subscribers
				</p>
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> Advanced analytics
				</p>
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> 24-hour support response time
				</p>
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> Marketing automations
				</p>
			</div>
		</div>

		<div class="card-border bg-accent">
			<p class="lead mb-2">Growth</p>
			<p class="mb-2"><span class="text-5xl font-extrabold">$60</span>/month</p>
			<p class="muted">$48 per month if paid annually</p>
			<Button class="my-8 w-full">Buy plan</Button>
			<p class="mb-4 font-bold">
				Everything in Essential, plus collaboration tools and deeper insights.
			</p>
			<div class="flex flex-col gap-2">
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> Unlimited products
				</p>
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> Unlimited subscribers
				</p>
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> Advanced analytics
				</p>
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> 1-hour, dedicated support response time
				</p>
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> Marketing automations
				</p>
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> Custom reporting tools
				</p>
			</div>
		</div>
	</div>
</ComponentPreview>

<ComponentPreview title="With special offer">
	<div class="grid items-stretch justify-center gap-6 lg:grid-cols-2">
		<div class="card-border">
			<p class="lead mb-2">Basic</p>
			<p class="mb-2"><span class="text-5xl font-extrabold">$10</span>/month</p>
			<p class="muted">$12 per month if paid annually</p>
			<Button class="my-8 w-full">Buy plan</Button>
			<p class="mb-4 font-bold">Everything necessary to get started.</p>
			<div class="flex flex-col gap-2">
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> 5 products
				</p>
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> Up to 1,000 subscribers
				</p>
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> Basic analytics
				</p>
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> 48-hour support response time
				</p>
			</div>
		</div>

		<div class="card-border relative">
			<Badge class="absolute right-[-10px] top-[-10px] flex items-center gap-2"
				><Sparkles size={16} /> Popular</Badge
			>
			<p class="lead mb-2">Essential</p>
			<p class="mb-2"><span class="text-5xl font-extrabold">$30</span>/month</p>
			<p class="muted">$24 per month if paid annually</p>
			<Button class="my-8 w-full">Buy plan</Button>
			<p class="mb-4 font-bold">
				Everything in Basic, plus essential tools for growing your business.
			</p>
			<div class="flex flex-col gap-2">
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> 25 products
				</p>
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> Up to 10,000 subscribers
				</p>
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> Advanced analytics
				</p>
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> 24-hour support response time
				</p>
				<p class="flex items-center justify-start gap-2 text-left">
					<CheckCircle size={16} class="text-primary" /> Marketing automations
				</p>
			</div>
		</div>

		<div class="card-border flex items-center justify-between gap-2 lg:col-span-2">
			<div>
				<p class="large mb-2 text-primary">Discounted</p>
				<p class="muted text-lg">
					Dolor dolores repudiandae doloribus. Rerum sunt aut eum. Odit omnis non voluptatem sunt
					eos nostrum.
				</p>
			</div>
			<Button variant="outline" class="flex items-center gap-2"
				>Buy discounted license <ArrowRight size={16} /></Button
			>
		</div>
	</div>
</ComponentPreview>
