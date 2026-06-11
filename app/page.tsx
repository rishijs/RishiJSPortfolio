import Profile from 'app/components/profile'
import Sequence from './components/sequence'
import { UpdatePostsHighlights } from './components/postHighlights'

export const metadata = {
  title: 'RishiJS Home',
  description: 'About me.',
}


export default function Page() {
  return (
    <section className="grid grid-cols-1 gap-4">
      <Profile/>
      <UpdatePostsHighlights />
      <Sequence/>
    </section>
  )
}