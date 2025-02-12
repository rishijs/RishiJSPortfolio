import Image from 'next/image'

export const metadata = {
  title: 'Creative',
  description: 'Take a look at my more creative works',
}

export default function Page() {
  return (
    <section className="mb-4 grid grid-cols gap-4">
      <h1 className="font-semibold text-2xl tracking-tighter mb-4">Creative Works</h1>
      <a className="text-sm tracking-tighter mb-4">Aside from software and game development, I sometimes make art and music. Here are some of my best works so far:</a>
      
      <Image aria-hidden src="/creative/knightfalls.gif" className="w-full" unoptimized alt="knightfalls" width={256} height={128} />
      <Image aria-hidden src="/creative/abyss_fly.gif" className="w-full" unoptimized alt="abyss" width={256} height={192} />

    </section>
  )
}
