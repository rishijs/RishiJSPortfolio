import ProjectList from 'app/components/projectList'

export const metadata = {
  title: 'Fullstack WIP',
  description: 'More details on this project',
}

export default function Page() {
  return (
    <section className="grid grid-cols-1 gap-2">
      <h1 className="font-semibold font-serif text-2xl tracking-tighter">WIP</h1>
      <a className="text-sm font-mono tracking-tighter mb-4">Nothing here yet</a>
      <h1 className="font-semibold font-serif text-2xl tracking-tighter">Similar Projects</h1>
      <ProjectList/>
    </section>
  )
}