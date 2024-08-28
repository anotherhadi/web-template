<script lang="ts">
	import * as Popover from '$lib/components/ui/popover';
	import * as Avatar from '$lib/components/ui/avatar';
	import Button from '../../ui/button/button.svelte';
</script>

<Popover.Root>
	<Popover.Trigger>
		<Avatar.Root class="h-8 w-8">
			<Avatar.Image src="https://github.com/anotherhadi.png" alt="@shadcn" />
			<Avatar.Fallback>AH</Avatar.Fallback>
		</Avatar.Root>
	</Popover.Trigger>
	<Popover.Content
		class="flex translate-y-3 flex-col gap-5 p-0 [&>*:not(:last-child)]:border-b [&>*]:pb-4"
	>
		<div class="px-8 pt-4">
			<p class="lead text-foreground">Username</p>
			<p class="muted">email@exemple.com</p>
		</div>
		<div class="px-4">
			<Button class="w-full justify-start" variant="ghost">Profile</Button>
			<Button class="w-full justify-start" variant="ghost">Settings</Button>
		</div>
		<div class="px-4">
			<Button class="w-full justify-start" variant="ghost">Log out</Button>
		</div>
	</Popover.Content>
</Popover.Root>
