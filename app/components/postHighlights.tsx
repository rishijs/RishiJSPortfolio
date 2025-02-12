import Link from 'next/link'
import { formatDate, getUpdatePosts } from 'app/update/utils'

export function UpdatePostsHighlights() {
  let allUpdates = getUpdatePosts()

  return (
    <div>
      {allUpdates
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .slice(0,2).map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1"
            href={`/update/${post.slug}`}
          >
            <div className="hover:animate-pulse flex items-center mt-1 mb-1 text-sm w-full flex-wrap">
              <h1 className="title font-semibold text-xl tracking-tighter">
                {post.metadata.title}
              </h1>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 whitespace-nowrap ml-2">
                {formatDate(post.metadata.publishedAt)}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
