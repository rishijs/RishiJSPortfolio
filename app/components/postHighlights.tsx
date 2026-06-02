import Link from 'next/link'
import { formatDate, getUpdatePosts } from 'app/update/utils'

export function UpdatePostsHighlights() {
  let allUpdates = getUpdatePosts()

  const sortedByDate = allUpdates.sort((a, b) => 
    new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  )
  const priorityPosts = sortedByDate.filter((post) => post.metadata.priority?.toLowerCase() === 'true')
  const otherPosts = sortedByDate.filter((post) => post.metadata.priority?.toLowerCase() !== 'true' && post.metadata.priority?.toLowerCase() !== 'avoid')
  const highlightedPosts = [...priorityPosts, ...otherPosts].slice(0, 4)

  return (
    <div className="bg-black text-white p-6 rounded-xl border border-neutral-800 shadow-sm max-h-[500px] overflow-y-auto">
      <div className="flex flex-col">
        {highlightedPosts.map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col"
              href={`/update/${post.slug}`}
            >
              <div className="group flex flex-col w-full border-b border-neutral-200 dark:border-neutral-800 py-2 transition-all hover:border-red-500 last:border-0">
                <div className="flex items-center justify-between w-full flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <h2 className="title font-bold text-lg tracking-tighter group-hover:text-red-500 transition-colors">
                      {post.metadata.title}
                    </h2>
                    {post.metadata.priority?.toLowerCase() === 'true' && (
                      <span className="text-red-500 text-xs font-semibold transition-opacity">
                        PRIORITY
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 whitespace-nowrap">
                    {formatDate(post.metadata.publishedAt)}
                  </p>
                </div>
                {post.metadata.summary && (
                  <p className="text-xs text-neutral-400 mt-1 hidden group-hover:block line-clamp-2">
                    {post.metadata.summary}
                  </p>
                )}
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}
