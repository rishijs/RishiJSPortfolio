import { UpdatePosts } from 'app/components/posts'

export const metadata = {
  title: 'Updates',
  description: 'Read through a few of my latest highlights',
}

export default function Page() {
  return (
    <section className="mb-12">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Updates</h1>
      <UpdatePosts />
    </section>
  )
}
