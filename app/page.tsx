import { UpdatePosts } from 'app/components/posts'
import Profile from 'app/components/profile'
import Skills from './components/skills'
import Events from './components/events'
import Sequence from './components/sequence'
import AreasOfExpertise from './components/areasOfExpertise'
import Courses from './components/courses'

export const metadata = {
  title: 'RishiJS Home',
  description: 'About me.',
}


export default function Page() {
  return (
    <section className="grid grid-cols-1 gap-10 mb-12">
      <Profile/>
      <UpdatePosts />
      <Sequence />
      <Events />
      <Courses />
      <AreasOfExpertise />
    </section>
  )
}
