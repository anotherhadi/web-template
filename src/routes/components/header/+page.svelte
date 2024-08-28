<script lang="ts">
	import ComponentPreview from '$lib/components/component-preview/component-preview.svelte';
	import Header from '$lib/components/header/header.svelte';

	const title: string = 'Header';
	const subtitle: string = 'Component to display a header.';
</script>

<Header {subtitle} separator>{title}</Header>

<ComponentPreview title="Simple">
	<Header
		subtitle="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit
		sunt amet fugiat veniam occaecat fugiat aliqua."
	>
		Support Center
	</Header>
</ComponentPreview>

<ComponentPreview title="Centered">
	<Header
		subtitle="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit
		sunt amet fugiat veniam occaecat fugiat aliqua."
		center
	>
		Support Center
	</Header>
</ComponentPreview>

<ComponentPreview title="Simple with eyebrow">
	<Header
		eyebrow="Get the help you need"
		subtitle="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit
		sunt amet fugiat veniam occaecat fugiat aliqua."
	>
		Support Center
	</Header>
</ComponentPreview>

<ComponentPreview title="Centered with eyebrow">
	<Header
		eyebrow="Get the help you need"
		subtitle="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit
		sunt amet fugiat veniam occaecat fugiat aliqua."
		center
	>
		Support Center
	</Header>
</ComponentPreview>

<ComponentPreview title="Different Tag">
	<Header
		tag="h2"
		eyebrow="Get the help you need"
		subtitle="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit
		sunt amet fugiat veniam occaecat fugiat aliqua."
		center
	>
		Support Center
	</Header>
</ComponentPreview>
