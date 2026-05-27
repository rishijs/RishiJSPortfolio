import { UpdatePosts } from 'app/components/posts'

export const metadata = {
  title: 'Updates',
  description: 'Read through a few of my latest highlights',
}

export default function Page() {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <h1 className="font-semibold text-3xl tracking-tighter">Updates</h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 tracking-tight">
          Milestones, progress reports, and deep dives into my recent technical projects and creative works.
        </p>
      </div>
      <UpdatePosts />
    </section>
  )
}
