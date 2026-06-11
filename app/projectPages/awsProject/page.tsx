import ProjectList from 'app/components/projectList'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'AWS Sandbox - WIP',
  description: 'Project not fully complete - sandbox reference',
}

export default function Page() {
  return (
    <section className="grid grid-cols-1 gap-2">
      {/* Description & Links */}
      <div className="flex flex-col gap-4 mb-8">
        <p className="text-base leading-relaxed tracking-tight text-neutral-800 dark:text-neutral-200">
          A future project built to test and reference various AWS services and integrations. WIP
        </p>
        
        <Link
          className="w-fit text-neutral-900 dark:text-white text-lg flex items-center gap-2 font-medium hover:underline hover:underline-offset-4 bg-neutral-100 dark:bg-neutral-900 px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 transition-colors"
          href="https://github.com/rishijs/AWS-Sandbox"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/git.png" alt="GitHub logo" width={18} height={18} />
          View AWS Sandbox on GitHub
        </Link>
      </div>

      <ProjectList/>
    </section>
  )
}