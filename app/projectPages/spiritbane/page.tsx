import { UpdatePosts } from 'app/components/posts'
import ProjectList from 'app/components/projectList'
import Projects from 'app/projects/page'
import Image from 'next/image'

export const metadata = {
  title: 'Spiritbane',
  description: 'More details on this project',
}

export default function Page() {
  return (
    <section className="grid grid-cols-1 gap-2">
      <h1 className="font-semibold text-2xl tracking-tighter">Spiritbane</h1>
      <a className="text-sm tracking-tighter mb-4">(Placeholder Project Description)</a>

      <Image aria-hidden src="/projectpictures/spiritbane/spiritbane_1.gif" className="w-full aspect-video self-stretch" unoptimized alt="spiritbane" width={256} height={144} />
      <Image aria-hidden src="/projectpictures/spiritbane/spiritbane_2.gif" className="w-full aspect-video self-stretch" unoptimized alt="spiritbane" width={256} height={144} />
      <Image aria-hidden src="/projectpictures/spiritbane/spiritbane_3.gif" className="w-full aspect-video self-stretch" unoptimized alt="spiritbane" width={256} height={144} />

      <h1 className="font-semibold text-2xl tracking-tighter">Similar Projects</h1>
      <ProjectList/>
    </section>
  )
}