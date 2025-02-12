import Events from 'app/components/events'
import { UpdatePosts } from 'app/components/posts'
import ProjectList from 'app/components/projectList'
import Projects from 'app/projects/page'

export const metadata = {
  title: 'Game Other',
  description: 'More details on this project',
}

export default function Page() {
  return (
    <section className="grid grid-cols-1 gap-2">
      <h1 className="font-semibold text-2xl tracking-tighter">Game Development</h1>
      <a className="text-sm tracking-tighter mb-4">These are the other games I have worked on</a>
      <div className="mb-8">
        <Events />
      </div>

      <h1 className="font-semibold text-2xl tracking-tighter">Similar Projects</h1>
      <ProjectList/>
    </section>
  )
}