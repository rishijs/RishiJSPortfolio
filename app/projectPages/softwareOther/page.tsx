import { UpdatePosts } from 'app/components/posts'
import ProjectList from 'app/components/projectList'
import Projects from 'app/projects/page'
import Link from 'next/link'
import Image from 'next/image'
import OtherSoftware from 'app/components/otherSoftware'

export const metadata = {
  title: 'Software Other',
  description: 'More details on this project',
}

export default function Page() {
  return (
    <section className="grid grid-cols-1 gap-2">
          <h1 className="font-semibold text-2xl tracking-tighter">Software Development</h1>
          <a className="text-sm tracking-tighter mb-4">These are the other software projects I have worked on</a>
          <div className="mb-8">
            <OtherSoftware />
          </div>
    
          <h1 className="font-semibold text-2xl tracking-tighter">Similar Projects</h1>
          <ProjectList/>
        </section>
  )
}