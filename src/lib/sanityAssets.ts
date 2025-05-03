import { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } from '$env/static/public';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageObject } from '@sanity/image-url/lib/types/types';
import { sanityClient } from './sanityClient';

export const imageBuilder = imageUrlBuilder(sanityClient);

export type ImageOpts = {
	width?: number;
};

export function getAssetUrl(asset: SanityImageObject, opts?: ImageOpts) {
	let builder = imageBuilder.image(asset).auto('format');
	if (opts?.width) {
		builder = builder.width(opts.width);
	}
	return builder.url();
}

export function getFileUrl(file: SanityImageObject) {
	if (!file.asset?._ref) {
		return null;
	}
	const [, id, extension] = file.asset._ref.split('-'); // "file", "abc123xyz", "application-pdf"
	return `https://cdn.sanity.io/files/${PUBLIC_SANITY_PROJECT_ID}/${PUBLIC_SANITY_DATASET}/${id}.${extension.split('-')[1] || extension}`;
}
