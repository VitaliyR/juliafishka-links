<script lang="ts">
	import components from '.';
	import type { ImageOpts } from '../sanityAssets';
	import type { KeyedField } from '../types';

	const { fields, containerClass, imageOpts }: { fields: KeyedField[]; containerClass?: string; imageOpts?: ImageOpts } = $props();
</script>

{#each fields as component, index (index)}
	{@const Component = components[component._type as keyof typeof components]}
	{#if Component}
		<Component {...component as any} container={containerClass} imageOpts={imageOpts} />
	{/if}
{/each}
