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
        <h1 className="font-semibold text-2xl tracking-tighter">Console Spot</h1>
        <a className="text-sm tracking-tighter mb-4">This is a demonstration of this project (Placeholder Project Description)</a>
        <iframe
            className="w-full aspect-video self-stretch"
            src="https://www.youtube.com/embed/JEsMkUhlOWo"
            title="Product Overview Video"
            allowFullScreen
        />

        <h1 className="font-semibold text-2xl tracking-tighter">Similar Projects</h1>
        <ProjectList/>
    </section>
  )
}