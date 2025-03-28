import { UpdatePosts } from 'app/components/posts'
import ProjectList from 'app/components/projectList'
import Projects from 'app/projects/page'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Spectral War',
  description: 'More details on this project',
}

export default function Page() {
  return (
    <section className="grid grid-cols-1 gap-2">
      <h1 className="font-semibold text-2xl tracking-tighter">Spectral War</h1>
      <a className="text-sm tracking-tighter mb-4">Worked on a team of 9 to make an RTS inspired by 'starcraft'</a>

      <Link
          className="text-white! !text-lg  flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://xandruher.itch.io/spectral-war"
          target="_blank"
          rel="noopener noreferrer"
      >
          <Image aria-hidden src="/itch.png" alt="Itch.io page" width={16} height={16} />
          Play
      </Link>
      
      <Image aria-hidden src="/projectpictures/spectral_war/spectral_war_1.gif" className="w-full aspect-video self-stretch" unoptimized alt="spectral war" width={256} height={144} />
      <Image aria-hidden src="/projectpictures/spectral_war/spectral_war_2.gif" className="w-full aspect-video self-stretch" unoptimized alt="spectral war" width={256} height={144} />
      <Image aria-hidden src="/projectpictures/spectral_war/spectral_war_3.gif" className="w-full aspect-video self-stretch" unoptimized alt="spectral war" width={256} height={144} />

      <h1 className="font-semibold text-2xl tracking-tighter">Similar Projects</h1>
      <ProjectList/>
    </section>
  )
}