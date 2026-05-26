import OtherGames from 'app/components/otherGames'
import { UpdatePosts } from 'app/components/posts'
import ProjectList from 'app/components/projectList'
import Projects from 'app/projects/page'

export const metadata = {
  title: 'Game Other',
  description: 'More details on this project',
}

export default function Page() {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h1 className="font-semibold text-3xl tracking-tighter mb-2">Game Development</h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 tracking-tight">
          Experimental prototypes, game jam entries, and creative projects from my itch.io portfolio.
        </p>
      </div>

      <OtherGames />

      <div className="mt-12">
        <h1 className="font-semibold text-2xl tracking-tighter mb-4">Similar Projects</h1>
        <ProjectList />
      </div>
    </section>
  )
}