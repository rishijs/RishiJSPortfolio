import { UpdatePosts } from 'app/components/posts'
import ProjectList from 'app/components/projectList'
import Projects from 'app/projects/page'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Software Other',
  description: 'More details on this project',
}

export default function Page() {
  return (
    <section className="grid grid-cols-1 gap-2">
      <h1 className="font-semibold text-2xl tracking-tighter">Software Engineering</h1>
      <a className="text-sm tracking-tighter">(Placeholder Project Description)</a>
      <Link
          className="text-white! !text-lg  flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/rishijs"
          target="_blank"
          rel="noopener noreferrer"
      >
          <Image aria-hidden src="/git.png" alt="RishiJS github" width={16} height={16} />
          Github
      </Link>

      <h1 className="font-semibold text-2xl tracking-tighter">Similar Projects</h1>
      <ProjectList/>
    </section>
  )
}