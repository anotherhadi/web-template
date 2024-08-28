<script lang="ts">
	import { cn } from '$lib/utils';

	export let tag: 'h1' | 'h2' | 'h3' = 'h1';
	export let subtitle: string = '';
	export let eyebrow: string = '';
	export let center: boolean = false;
	export let separator: boolean = false;
</script>

{#if eyebrow !== ''}
	<p class={cn('large mt-6 text-primary', center && 'text-center')}>{eyebrow}</p>
{/if}
<svelte:element this={tag} class={cn('my-6 text-5xl', center && 'text-center')}
	><slot></slot></svelte:element
>
{#if subtitle !== ''}
	<p class={cn('lead mb-10 max-w-2xl', center && 'mx-auto text-center', separator && 'mb-6')}>
		{subtitle}
	</p>
{/if}

{#if separator}
	<hr class={cn('mb-10', center || 'mx-0')} />
{/if}
