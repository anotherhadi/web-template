<script lang="ts">
	import { page } from '$app/stores';
	import { cn } from '$lib/utils';
	import * as Sheet from '$lib/components/ui/sheet';
	import { PanelLeft } from 'lucide-svelte';
	import Button from '../../ui/button/button.svelte';
	import { navigation } from '$lib/navigation';

	const pages = navigation;
</script>

<Sheet.Root>
	<Sheet.Trigger>
		<Button variant="ghost" size="icon"><PanelLeft /></Button>
	</Sheet.Trigger>
	<Sheet.Content side="left">
		<Sheet.Header>
			<Sheet.Title>Another Hadi</Sheet.Title>
			<Sheet.Description>
				<div class="flex flex-col items-center justify-start gap-1">
					{#each pages as p}
						<Button
							variant="link"
							href={p.link}
							class={cn(
								$page.url.pathname.startsWith(p.link) ? 'text-foreground' : 'text-muted-foreground',
								'text-md w-full justify-start p-2 font-bold hover:text-foreground hover:no-underline'
							)}
						>
							{#if p.icon !== undefined}
								<svelte:component this={p.icon} class="mr-2" size="14" />
							{/if}
							{p.label}
						</Button>
					{/each}
				</div>
			</Sheet.Description>
		</Sheet.Header>
	</Sheet.Content>
</Sheet.Root>
