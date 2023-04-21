import { createClient } from 'microcms-js-sdk'

export const client = createClient({
    serviceDomain: process.env.SERVICE_DOMAIN,
    apiKey: process.env.API_KEY,
})

export async function from getPostBySlug (slug) ;{
    try {
        const post = await client.get({
            endpoint: 'igemkyoto',
            queries: { filters: 'slug[equels]${slug}' },
        })
        return post.contents[0]
    } catch (err) {
        console.log('~~ getPostBySlug ~~')
        console.log(err)
    }
}

function getPostBySlug(slug: any) {
    throw new Error('Function not implemented.');
}
