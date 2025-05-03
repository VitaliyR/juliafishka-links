<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		attributes?: Record<string, any>;
	}

	const { children, attributes }: Props = $props();
</script>

<blockquote
	{...attributes}
	class={[
		attributes?.class,
		'component bg-primary text-primary-content rounded px-3 py-1 not-italic w-fit'
	]}
>
	{@render children?.()}
</blockquote>

<style>
  .component :global(p) {
    margin: 0;
  }

	.component :global(a) {
		color: #fff;
	}
</style>
