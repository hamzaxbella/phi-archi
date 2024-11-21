import {createClient} from 'next-sanity';
import ImageUrlBuilder from '@sanity/image-url'

// creating a client
export const client = createClient({
    apiVersion : '2023-05-03',
    dataset : 'production',
    projectId : 'dig3w94b',
    useCdn : false
})

// converting images to url.
const builder = ImageUrlBuilder(client);
export function urlFor(source: string | object) {
    return builder.image(source)
}