import { createClient, type SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const SANITY_PROJECT_ID = 'fplh08ii';
export const SANITY_DATASET = 'production';

export const sanityClient: SanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

type SanityImageSource = Parameters<ReturnType<typeof imageUrlBuilder>['image']>[0];

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export interface SanityProduct {
  _id: string;
  title: string;
  category: string;
  description: string;
  price: number;
  rating?: number;
  slug?: { current: string };
  image?: SanityImageSource;
}
