import Image from 'next/image'

export const metadata = {
  title: 'Creative',
  description: 'Take a look at my more creative works',
}

export default function Page() {
  return (
    <section className="flex flex-col gap-8">
      <div>
        <h1 className="font-semibold text-3xl tracking-tighter mb-2">Creative Works</h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-300 tracking-tight">
          Aside from software and game development, I sometimes make art and music. Here are some of my best works so far:
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-sm">
          <Image aria-hidden src="/creative/knightfalls.gif" className="w-full h-auto" unoptimized alt="knightfalls" width={256} height={128} />
        </div>

        <div className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-sm">
          <Image aria-hidden src="/creative/abyss_fly.gif" className="w-full h-auto" unoptimized alt="abyss" width={256} height={192} />
        </div>
      </div>
    </section>
  )
}
