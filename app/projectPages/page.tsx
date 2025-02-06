import { UpdatePosts } from 'app/components/posts'
import Projects from 'app/projects/page'

export const metadata = {
  title: 'Project Page',
  description: 'More details on this project',
}

export default function Page() {
  return (
    <section className="grid grid-cols-1 gap-10 mb-12">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Project Base</h1>
      <UpdatePosts />
      <Projects />
    </section>
  )
}