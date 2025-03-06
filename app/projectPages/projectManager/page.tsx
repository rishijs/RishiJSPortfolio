import { UpdatePosts } from 'app/components/posts'
import ProjectList from 'app/components/projectList'
import Projects from 'app/projects/page'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Project Manager',
  description: 'More details on this project',
}

export default function Page() {
  return (
    <section className="grid grid-cols-1 gap-2">
        <h1 className="font-semibold text-2xl tracking-tighter">Project Manager</h1>
        <a className="text-sm tracking-tighter mb-4">A fullstack application with Spring Boot for backend and Angular for frontend. </a>
        <a className="text-sm tracking-tighter mb-4">A demo is available here: use username: jane_smith and password: password </a>
        <Link
            className="text-white! !text-lg  flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://cooksys.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Image aria-hidden src="/git.png" alt="demo page" width={16} height={16} />
            Demo
        </Link>

        <a className="text-sm tracking-tighter mb-4">This was the entity-relationship-diagram we used.</a>
        
        <Image aria-hidden src="/projectpictures/projectmanager/erd.png" className="w-full aspect-video self-stretch" unoptimized alt="project manager erd" width={256} height={144} />

        <Image aria-hidden src="/projectpictures/projectmanager/project_content.png" className="w-full aspect-video self-stretch" alt="project_manager" width={256} height={144} />
        <Image aria-hidden src="/projectpictures/projectmanager/project_list.png" className="w-full aspect-video self-stretch" alt="project_manager" width={256} height={144} />

        <h1 className="font-semibold text-2xl tracking-tighter">Similar Projects</h1>
        <ProjectList/>
    </section>
  )
}