<script lang="ts">
	import Components from '../lib/components/Components.svelte';
	import type { KeyedField } from '../lib/types';
	const {
		data
	}: {
		data: {
			title: string;
			description?: string;
			sections: KeyedField[];
		};
	} = $props();
</script>

<svelte:head>
	<title>{data.title}</title>
	{#if data.description}
		<meta name="description" content={data.description} />
	{/if}
</svelte:head>

<div class="flex flex-col gap-8 md:gap-12 my-12">
  <Components fields={data.sections} containerClass="max-w-[620px] m-auto px-4" />
</div>
