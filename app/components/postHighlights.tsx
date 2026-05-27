import Link from 'next/link'
import { formatDate, getUpdatePosts } from 'app/update/utils'

export function UpdatePostsHighlights() {
  let allUpdates = getUpdatePosts()

  return (
    <div className="flex flex-col">
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
            className="flex flex-col"
            href={`/update/${post.slug}`}
          >
            <div className="group flex flex-col w-full border-b border-neutral-200 dark:border-neutral-800 py-2 transition-all hover:border-red-500 last:border-0">
              <div className="flex items-center justify-between w-full flex-wrap gap-2">
                <h2 className="title font-bold text-lg tracking-tighter group-hover:text-red-500 transition-colors">
                  {post.metadata.title}
                </h2>
                <p className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 whitespace-nowrap">
                  {formatDate(post.metadata.publishedAt)}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}
