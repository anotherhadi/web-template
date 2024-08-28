<script lang="ts">
	import { page } from '$app/stores';
	import { cn } from '$lib/utils';
	import * as Popover from '$lib/components/ui/popover';
	import { ArrowDown } from 'lucide-svelte';
	import Button from '../../ui/button/button.svelte';
	import Input from '../../ui/input/input.svelte';
	import { navigation } from '$lib/navigation';
	import Logo from '../../logo/logo.svelte';
	import DarkmodeToggle from '../../darkmode-toggle/darkmode-toggle.svelte';
	import Mobile from './mobile.svelte';
	import Account from './account.svelte';
	import ScrollArea from '$lib/components/ui/scroll-area/scroll-area.svelte';

	const pages = navigation;
</script>

<div class="fixed z-50 w-full">
	<div
		class="grid h-16 w-full grid-cols-2 items-center justify-between gap-5 border-b bg-background px-2 md:px-10"
	>
		<div id="left" class="flex flex-shrink-0 items-center gap-5">
			<div class="block md:hidden">
				<Mobile />
			</div>
			<Logo size={46} />
			<ScrollArea orientation="horizontal">
				<div class="hidden items-center gap-1 md:flex">
					{#each pages as p}
						{#if p.child !== undefined && p.child?.length > 0}
							<Popover.Root>
								<Popover.Trigger asChild let:builder>
									<Button
										builders={[builder]}
										variant="link"
										class={cn(
											$page.url.pathname.startsWith(p.link)
												? 'text-foreground'
												: 'text-muted-foreground',
											'text-md p-2 font-bold hover:text-foreground hover:no-underline'
										)}
									>
										{#if p.icon !== undefined}
											<svelte:component this={p.icon} class="mr-2" size="14" />
										{/if}
										{p.label}
										<ArrowDown size="14" />
									</Button>
								</Popover.Trigger>
								<Popover.Content>
									<div class="grid w-full grid-cols-2">
										{#each p.child as c}
											<Button variant="ghost" class="w-full" href={c.link}>{c.label}</Button>
										{/each}
									</div>
								</Popover.Content>
							</Popover.Root>
						{:else}
							<Button
								variant="link"
								href={p.link}
								class={cn(
									$page.route.id === p.link ? 'text-foreground' : 'text-muted-foreground',
									'text-md p-2 font-bold hover:text-foreground hover:no-underline'
								)}
							>
								{#if p.icon !== undefined}
									<svelte:component this={p.icon} class="mr-2" size="14" />
								{/if}
								{p.label}
							</Button>
						{/if}
					{/each}
				</div>
			</ScrollArea>
		</div>
		<div id="right" class="flex items-center gap-5">
			<Input type="text" id="search" placeholder="Search" class="lg:w-96" />
			<DarkmodeToggle />
			<Account />
		</div>
	</div>
</div>
