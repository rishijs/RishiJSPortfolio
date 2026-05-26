import ProjectList from 'app/components/projectList'
import SoftwareProjects from 'app/components/softwareProjects'

export const metadata = {
  title: 'Software Other',
  description: 'More details on this project',
}

export default function Page() {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h1 className="font-semibold text-3xl tracking-tighter mb-2">Software Development</h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 tracking-tight">
          A collection of my open-source contributions, technical tools, and repositories fetched directly from GitHub.
        </p>
      </div>

      <SoftwareProjects />

      <div className="mt-12">
        <h1 className="font-semibold text-2xl tracking-tighter mb-4">Similar Projects</h1>
        <ProjectList />
      </div>
    </section>
  )
}