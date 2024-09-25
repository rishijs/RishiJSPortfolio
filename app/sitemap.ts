import { getUpdatePosts } from 'app/update/utils'

export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export default async function sitemap() {
  let updates = getUpdatePosts().map((post) => ({
    url: `${baseUrl}/update/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/update'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...updates]
}
