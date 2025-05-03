import { sanityClient } from '$lib/sanityClient';
import type { SanityDocument } from '@sanity/client';
import { error } from '@sveltejs/kit';

export async function load() {
	const PAGE_QUERY = `*[_type == "page" && slug.current == "/"][0]`;
	const page = await sanityClient.fetch<SanityDocument>(PAGE_QUERY);

	if (!page) {
		return error(404);
	}

	return page;
}

export const prerender = true;
