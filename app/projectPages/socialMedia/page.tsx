import { UpdatePosts } from 'app/components/posts'
import ProjectList from 'app/components/projectList'
import Projects from 'app/projects/page'

import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Social Media',
  description: 'More details on this project',
}

export default function Page() {
  return (
    <section className="grid grid-cols-1 gap-2">
      <h1 className="font-semibold text-2xl tracking-tighter">Social Media Backend</h1>
      <a className="text-sm tracking-tighter mb-4">Successfully deployed a RESTful social media API in Spring Boot by collaborating with another developer to design and 
      implement 30 endpoints and 4 services that display accurate info to the client and verified responses using 330 postman tests.</a>

      <Link
          className="text-white! !text-lg  flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/rishijs/SocialMediaBackend"
          target="_blank"
          rel="noopener noreferrer"
      >
          <Image aria-hidden src="/github.png" alt="github page" width={16} height={16} />
          Github
      </Link>


      <a className="text-sm tracking-tighter mb-4">This was the entity-relationship-diagram we used.</a>

      <Image aria-hidden src="/projectpictures/socialmedia/erd.png" className="w-full aspect-video self-stretch" unoptimized alt="social media erd" width={256} height={144} />

      <h1 className="font-semibold text-2xl tracking-tighter">Similar Projects</h1>
      <ProjectList/>
    </section>
  )
}