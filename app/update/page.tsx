import { UpdatePosts } from 'app/components/posts'

export const metadata = {
  title: 'Updates',
  description: 'Catch up on my latest work.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Updates</h1>
      <UpdatePosts />
    </section>
  )
}
