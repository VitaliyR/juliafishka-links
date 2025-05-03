import { createClient } from '@sanity/client';
import { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROD, PUBLIC_SANITY_READ_TOKEN } from '$env/static/public';

export const sanityClient = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	apiVersion: '2025-04-25',
	useCdn: false,
	perspective: PUBLIC_SANITY_PROD ? 'published' : 'drafts',
	token: PUBLIC_SANITY_READ_TOKEN
});
