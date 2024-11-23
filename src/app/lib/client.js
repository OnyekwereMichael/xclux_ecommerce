import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'u1hrfbk2',
    dataset: 'production',
    apiVersion: '2022-03-07',
    useCdn: true,
    token: process.env.NEXT_SANITY_TOKEN,
});

// to use our sanity images 
const builder = imageUrlBuilder(client);

// to initialize it 
export function urlFor(source) {
return builder.image(source);
}