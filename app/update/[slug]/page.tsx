import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getUpdatePosts } from 'app/update/utils'
import { baseUrl } from 'app/sitemap'

export async function generateStaticParams() {
  let posts = getUpdatePosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  let post = getUpdatePosts().find((post) => post.slug === slug)
  if (!post) {
    return{
      
    }
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    priority: isPriority,
    updatedAt: updatedTime,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      updatedTime,
      isPriority,
      url: `${baseUrl}/update/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function Update({ params }) {

  let {slug} = await params
  let post = getUpdatePosts().find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'UpdatePosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.updatedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/update/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <div className="flex flex-col">
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            {formatDate(post.metadata.publishedAt)}
          </p>
          {post.metadata.updatedAt && (
            <p className="text-xs text-neutral-400 italic">
              Updated: {formatDate(post.metadata.updatedAt)}
            </p>
          )}
          {post.metadata.priority?.toLowerCase() === 'true' && (
            <p className="text-xs text-neutral-400 italic">
              Priority Post
            </p>
          )}
        </div>
      </div>
      <div className="bg-black text-white p-6 rounded-lg border border-neutral-800 shadow-sm">
        <article className="prose">
          <CustomMDX source={post.content} />
        </article>
      </div>
    </section>
  )
}
