import { UpdatePosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h2 className="mb-2 text-2xl font-semibold tracking-tighter">
        Name, picture, email
      </h2>
      <h1 className="mb-4">
        {`Tagline and external links`}
      </h1>
      <div className="my-8">
        <UpdatePosts />
      </div>
      <p className="mb-4">
        {` Summary, Resume download`}
      </p>
      <p className="mb-4">
        {`Education`}
      </p>
      <p className="mb-4">
        {`Skills`}
      </p>
      <p className="mb-4">
        {`Contact Button`}
      </p>
    </section>
  )
}
