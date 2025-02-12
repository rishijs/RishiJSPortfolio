import { UpdatePosts } from 'app/components/posts'
import ProjectList from 'app/components/projectList'
import Projects from 'app/projects/page'
import Image from 'next/image'

export const metadata = {
  title: 'Skyfall',
  description: 'More details on this project',
}

export default function Page() {
  return (
    <section className="grid grid-cols-1 gap-2">
      <h1 className="font-semibold text-2xl tracking-tighter">Skyfall</h1>
      <a className="text-sm tracking-tighter mb-4">(Placeholder Project Description)</a>
            
      <Image aria-hidden src="/projectpictures/skyfall/skyfall_1.gif" className="w-full aspect-video self-stretch" unoptimized alt="skyfall" width={256} height={144} />
      <Image aria-hidden src="/projectpictures/skyfall/skyfall_2.gif" className="w-full aspect-video self-stretch" unoptimized alt="skyfall" width={256} height={144} />
      <Image aria-hidden src="/projectpictures/skyfall/skyfall_3.gif" className="w-full aspect-video self-stretch" unoptimized alt="skyfall" width={256} height={144} />

      <h1 className="font-semibold text-2xl tracking-tighter">Similar Projects</h1>
      <ProjectList/>
    </section>
  )
}