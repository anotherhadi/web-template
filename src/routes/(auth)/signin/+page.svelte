<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { Github } from 'lucide-svelte';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label/index.js';
	import Logo from '$lib/components/logo/logo.svelte';
</script>

<div class="grid h-[calc(100vh-4rem)] w-full grid-cols-1 lg:grid-cols-2">
	<div class="relative hidden items-center justify-center lg:flex">
		<div
			class="absolute z-10 h-full w-full bg-[url(/auth_light.jpg)] bg-cover bg-center dark:bg-[url(/auth_dark.jpg)]"
		/>
		<div class="absolute z-20 h-full w-full bg-background/50" />
		<Logo size={250} class="z-30" />
	</div>
	<div class="relative flex items-center justify-center p-5">
		<div class="absolute right-10 top-10">
			<Button variant="ghost" href="/signup">Sign Up</Button>
		</div>
		<div class="flex max-w-sm flex-col justify-center gap-5">
			<h1 class="text-center">Sign In</h1>
			<h6 class="muted mb-4 text-center">Enter your email and a password below to sign in</h6>

			<div class="grid w-full max-w-sm items-center gap-1.5">
				<Label for="email">Email</Label>
				<Input type="email" id="email" placeholder="email" />
			</div>

			<div class="grid w-full max-w-sm items-center gap-1.5">
				<div class="flex items-center">
					<Label for="password">Password</Label>
					<a href="/forgot-password" class="ml-auto inline-block text-sm underline">
						Forgot your password?
					</a>
				</div>
				<Input type="password" id="password" placeholder="azerty123" />
			</div>

			<Button>Sign In</Button>
			<div class="relative">
				<div class="absolute inset-0 flex items-center">
					<span class="w-full border-t" />
				</div>
				<div class="relative flex justify-center text-xs uppercase">
					<span class="bg-background px-2 text-muted-foreground"> Or continue with </span>
				</div>
			</div>
			<Button variant="outline"><Github size="14" class="mr-4" /> Github</Button>
		</div>
	</div>
</div>
