<script lang="ts">
	import { getAssetUrl } from '../sanityAssets';
	import type { SanityImageObject } from '@sanity/image-url/lib/types/types';
	import type { KeyedField } from '$lib/types';
	import DotsIcon from '$lib/assets/dots-vertical.svg?raw';
	import { onMount } from 'svelte';

	const {
		links,
		container
	}: {
		links: Array<
			KeyedField & {
				title: string;
				image?: SanityImageObject;
				icon?: SanityImageObject;
				url: string;
			}
		>;
		container?: string;
	} = $props();

	let hasShare = $state(false);

	onMount(() => {
		hasShare = typeof window.navigator?.share === 'function';
	});
</script>

<div class={['flex w-full flex-col gap-4', container]}>
	{#each links as link (link._key)}
		<a
			class={[
				'y-4 relative flex items-center gap-4 overflow-hidden',
				{
					'h-[325px] rounded-3xl bg-cover before:absolute hover:brightness-105': link.image,
					'before:right-0 before:bottom-0 before:left-0 before:h-[100px] before:bg-gradient-to-b before:from-transparent before:to-black/50':
						link.image,

					'bg-base-200 h-[65px] rounded-full pl-2 hover:bg-white/30': !link.image
				},
				'hover:outline-2 hover:outline-white'
			]}
			target="_blank"
			href={link.url}
			style:background-image={link.image && `url(${getAssetUrl(link.image, { width: 580 })})`}
		>
			{#if link.icon && !link.image}
				{@const url = getAssetUrl(link.icon, { width: 50 })}
				<img src={url} class="w-[50px] rounded-full object-contain" alt="Logo of the link" />
			{:else if !link.image}
				<div class="w-[50px]"></div>
			{/if}
			<div
				class={[
					'flex-1',
					{
						'z-10 place-self-end pb-4 pl-6 text-white': link.image,
						'text-center': !link.image
					}
				]}
			>
				{link.title}
			</div>
			{#if hasShare}
				<button
					type="button"
					class={[
						'flex w-12 items-center justify-center hover:opacity-50 cursor-pointer',
						{
							'h-full': !link.image,
							'z-10 h-[60px] place-self-end text-white': link.image
						}
					]}
					onclick={(e) => {
						e.preventDefault();
						navigator?.share({
							url: link.url
						}).catch(() => {});
					}}
				>
					<div class="h-5 w-5">
						{@html DotsIcon}
					</div>
				</button>
			{/if}
		</a>
	{/each}
</div>
