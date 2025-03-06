import { UpdatePosts } from 'app/components/posts'
import ProjectList from 'app/components/projectList'
import Projects from 'app/projects/page'
import Image from 'next/image'

export const metadata = {
  title: 'Track Matcher',
  description: 'More details on this project',
}

export default function Page() {
  return (
    <section className="grid grid-cols-1 gap-2">
        <h1 className="font-semibold text-2xl tracking-tighter">Track Matcher</h1>
        <a className="text-sm tracking-tighter mb-4">Uses Angular and the spotify API to create 2 playable game modes. No demo for this yet.</a>

        <Image aria-hidden src="/projectpictures/trackmatcher/track_matcher.gif" className="w-full aspect-video self-stretch" alt="project_manager" width={256} height={144} />

        <h1 className="font-semibold text-2xl tracking-tighter">Similar Projects</h1>
        <ProjectList/>
    </section>
  )
}