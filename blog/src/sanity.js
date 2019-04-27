import imageUrlBuilder from '@sanity/image-url';
import client from '@sanity/client';

const rmClient = client({
    projectId: 'kcoj688h',
    dataset: 'production',
    useCdn: false,
});

const builder = imageUrlBuilder(rmClient);

export const urlFor = source => builder.image(source);
