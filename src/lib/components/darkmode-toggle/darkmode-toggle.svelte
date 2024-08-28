<script lang="ts">
	import { toggleMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Moon, Sun } from 'lucide-svelte';
	import * as Tooltip from '$lib/components/ui/tooltip';
</script>

<Tooltip.Root>
	<Tooltip.Trigger>
		<Button on:click={toggleMode} variant="outline" size="icon">
			<Sun class="hidden h-[1.2rem] w-[1.2rem] dark:block" />
			<Moon class="block h-[1.2rem] w-[1.2rem] dark:hidden" />
			<span class="sr-only">Toggle theme</span>
		</Button>
	</Tooltip.Trigger>
	<Tooltip.Content>
		<p>Toggle dark mode</p>
	</Tooltip.Content>
</Tooltip.Root>
