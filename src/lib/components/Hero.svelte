<script lang="ts">
	import SvelteMarkdown from '@humanspeak/svelte-markdown';
	import { getAssetUrl } from '../sanityAssets';
	import type { SanityImageObject } from '@sanity/image-url/lib/types/types';
	import BlockquoteCallout from './md/BlockquoteCallout.svelte';
	import type { IconType, KeyedField } from '../types';
	import Icon from './atoms/Icon.svelte';

	const {
		title,
		content,
		image,
		links = [],
		container
	}: {
		title: string;
		content: string;
		image?: SanityImageObject;
		links: Array<KeyedField & { url: string; icon: IconType }>;
		container?: string;
	} = $props();
</script>

<div class={['flex flex-col items-center gap-8 text-center', container]}>
	{#if image}
		{@const url = getAssetUrl(image, { width: 1000 })}
		<div class="flex w-24">
			<img src={url} class="rounded-full object-contain" />
		</div>
	{/if}
	<div class="text-3xl font-semibold">{title}</div>
	<div class="prose max-w-none text-xl leading-loose">
		<SvelteMarkdown
			source={content}
			renderers={{
				blockquote: BlockquoteCallout
			}}
		/>
	</div>
	{#if links.length}
		<div class="flex flex-wrap justify-center gap-4">
			{#each links as link (link._key)}
				<a href={link.url} target="_blank" class="h-8 w-8 transition hover:scale-105">
					<Icon icon={link.icon} />
				</a>
			{/each}
		</div>
	{/if}
</div>
