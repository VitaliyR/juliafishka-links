<script lang="ts">
	import '../app.css';
	import DotsIcon from '$lib/assets/dots-horizontal.svg?raw';
	import { onMount } from 'svelte';

	let { children } = $props();

	let hasShare = $state(false);
	onMount(() => {
		hasShare = typeof window.navigator?.share === 'function';
	});
</script>

{@render children()}

{#if hasShare}
	<button
		type="button"
		onclick={() => {
			navigator.share({
				url: location.origin
			}).catch(() => {});
		}}
		class="btn btn-square fixed top-6 right-6 rounded-full"
	>
		<span class="h-5 w-5">{@html DotsIcon}</span>
	</button>
{/if}
