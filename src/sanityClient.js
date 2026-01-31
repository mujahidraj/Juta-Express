

// The CORRECT modern way:
import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url'; // Use named import

export const client = createClient({
  projectId: 'zo7l76jd',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
});

const builder = createImageUrlBuilder(client); // Use the named function

export function urlFor(source) {
  return builder.image(source);
}