import { UpdatePosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio - Rishi JS
      </h1>
      <p className="mb-4">
        {`This portfolio is a work in progress`}
      </p>
      <div className="my-8">
        <UpdatePosts />
      </div>
    </section>
  )
}
