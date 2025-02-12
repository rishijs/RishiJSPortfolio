import { UpdatePosts } from 'app/components/posts'
import ProjectList from 'app/components/projectList'
import Projects from 'app/projects/page'

export const metadata = {
  title: 'Console Spot',
  description: 'More details on this project',
}

export default function Page() {
  return (
    <section className="grid grid-cols-1 gap-2">
      <h1 className="font-semibold text-2xl tracking-tighter">Project Base</h1>
      <a className="text-sm tracking-tighter mb-4">This is a project description</a>
      <iframe
        className="w-full aspect-video self-stretch"
        src="https://www.youtube.com/watch?v=JEsMkUhlOWo"
        title="Product Overview Video"
        aria-hidden="true"
    />

      <h1 className="font-semibold text-2xl tracking-tighter">Similar Projects</h1>
      <ProjectList/>
    </section>
  )
}