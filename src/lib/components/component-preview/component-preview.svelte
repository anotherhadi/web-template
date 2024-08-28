<script lang="ts">
	import { cn } from '$lib/utils';

	export let title: string = '';
	let className: string = '';
	export { className as class };
</script>

{#if title !== ''}
	<h2 class="lead">{title}</h2>
{/if}
<div
	class={cn(
		'relative mb-16 mt-2 rounded-md border p-7 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
		className
	)}
>
	<slot></slot>
</div>
