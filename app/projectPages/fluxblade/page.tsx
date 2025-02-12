import { UpdatePosts } from 'app/components/posts'
import ProjectList from 'app/components/projectList'
import Projects from 'app/projects/page'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Fluxblade',
  description: 'More details on this project',
}

export default function Page() {
  return (
    <section className="grid grid-cols-1 gap-2">
      <h1 className="font-semibold text-2xl tracking-tighter">Fluxblade</h1>
      <a className="text-sm tracking-tighter mb-4">(Placeholder Project Description)</a>

      <Link
          className="text-white! !text-lg  flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://sevadusk.itch.io/fluxblade-sandbox"
          target="_blank"
          rel="noopener noreferrer"
      >
          <Image aria-hidden src="/itch.png" alt="Itch.io page" width={16} height={16} />
          Visit Game Page
      </Link>

      <Image aria-hidden src="/projectpictures/fluxblade/fluxblade_1.png" className="w-full aspect-video self-stretch" alt="fluxblade" width={256} height={144} />
      <Image aria-hidden src="/projectpictures/fluxblade/fluxblade_2.png" className="w-full aspect-video self-stretch" alt="fluxblade" width={256} height={144} />
      <Image aria-hidden src="/projectpictures/fluxblade/fluxblade_3.png" className="w-full aspect-video self-stretch" alt="fluxblade" width={256} height={144} />

      <h1 className="font-semibold text-2xl tracking-tighter">Similar Projects</h1>
      <ProjectList/>
    </section>
  )
}