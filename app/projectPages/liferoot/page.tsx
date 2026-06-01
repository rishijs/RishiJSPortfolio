import ProjectList from 'app/components/projectList'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Liferoot',
  description: 'A procedurally generated 3D game showcasing high-performance object pooling and global leaderboard synchronization.',
}

export default function Page() {
  return (
    <section className="grid grid-cols-1 gap-6 max-w-4xl mx-auto py-4">
      {/* Header Section */}
      <div className="flex flex-col gap-2 border-b border-neutral-200 dark:border-neutral-800 pb-4">
        <h1 className="font-bold text-3xl tracking-tighter">Liferoot</h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-300">
          Developed by Sevadusk, Xandruher, JohnGabrielUK, SpazticSquirrel, & Artosa
        </p>
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400 mt-1">
          <span>Nov 2025</span>
          <span>Godot & GDScript</span>
          <span>9-Day Development - Game Jam</span>
        </div>
      </div>

      {/* Description & Links */}
      <div className="flex flex-col gap-4">
        <p className="text-base leading-relaxed tracking-tight text-neutral-800 dark:text-neutral-200">
          A procedurally generated 3D puzzle game built for Web and PC platforms.
          The player's goal is to expand their root system to "decay" the sandbox environment.
        </p>
        
        <Link
          className="w-fit text-neutral-900 dark:text-white text-lg flex items-center gap-2 font-medium hover:underline hover:underline-offset-4 bg-neutral-100 dark:bg-neutral-900 px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 transition-colors"
          href="https://sevadusk.itch.io/liferoot"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/itch.png" alt="Itch.io logo" width={18} height={18} />
          Play Liferoot on itch.io
        </Link>
      </div>

      {/* Media / Visual Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
        {/* Main Large Gameplay Anchor */}
        <div className="relative aspect-video md:col-span-2 md:row-span-2 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 group">
          <Image 
            aria-hidden 
            src="/projectpictures/liferoot/liferoot1.gif" 
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-[1.01]" 
            unoptimized 
            alt="Liferoot core loop gameplay preview" 
            fill 
          />
        </div>

        {/* Secondary Mechanics Showcase */}
        <div className="relative aspect-video rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
          <Image 
            aria-hidden 
            src="/projectpictures/liferoot/liferoot2.gif" 
            className="object-cover w-full h-full" 
            unoptimized 
            alt="Liferoot systems demonstration" 
            fill 
          />
        </div>

        {/* Tertiary UI / Asynchronous Systems Showcase */}
        <div className="relative aspect-video rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
          <Image 
            aria-hidden 
            src="/projectpictures/liferoot/liferoot3.gif" 
            className="object-cover w-full h-full" 
            unoptimized 
            alt="Liferoot leaderboard interface preview" 
            fill 
          />
        </div>
        
        {/* Supporting Procedural Generation Showcase */}
        <div className="relative aspect-video md:col-span-3 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
          <Image 
            aria-hidden 
            src="/projectpictures/liferoot/liferoot4.gif" 
            className="object-cover w-full h-full" 
            unoptimized 
            alt="Liferoot procedural 3D map environment view" 
            fill 
          />
        </div>
      </div>

      {/* Embedded Video Showcase Card */}
      <div className="flex flex-col gap-2 my-6">
        <h3 className="text-sm font-medium tracking-tight text-neutral-300 font-mono flex items-center gap-2">
          Technical Demo & Gameplay Trailer
        </h3>
        <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-black shadow-sm">
          <iframe
            className="w-full h-full border-0"
            src="https://www.youtube.com/embed/QfPc2Y72nZw"
            title="Liferoot Project Demonstration Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <a 
          href="https://youtu.be/QfPc2Y72nZw"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-neutral-300 dark:text-neutral-300 hover:text-neutral-500 dark:hover:text-neutral-200 hover:underline w-fit transition-colors"
        >
          Watch directly on YouTube →
        </a>
      </div>

      {/* Engineering Highlights */}
      <div className="bg-neutral-50 dark:bg-neutral-950/50 rounded-xl p-6 border border-neutral-100 dark:border-neutral-900/50">
        <h2 className="font-semibold text-lg tracking-tight mb-6 text-neutral-900 dark:text-neutral-100">
          Technical Highlights
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          
          {/* Object Pooling */}
          <div className="space-y-1">
            <h3 className="font-medium text-sm text-neutral-900 dark:text-neutral-100 font-mono">
              [01] Object Pooling System
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-300 leading-relaxed">
              Implemented a custom object pool pattern in GDScript to manage active entity queues. Bypassed standard runtime instantiation and freeing loops to support <strong>2,500+ concurrently animated 3D objects</strong>, mitigating engine garbage collection spikes and stabilizing frame execution.
            </p>
          </div>

          {/* Leaderboard Integration */}
          <div className="space-y-1">
            <h3 className="font-medium text-sm text-neutral-900 dark:text-neutral-100 font-mono">
              [02] Async Thread Synchronization
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-300 leading-relaxed">
              Integrated the Talo API platform to handle remote player save states and global leaderboards. Managed data transfer over asynchronous HTTP worker sequences to isolate network execution and prevent network I/O blockages on the primary game simulation thread.
            </p>
          </div>

          {/* Procedural Grid Mutability */}
          <div className="space-y-1">
            <h3 className="font-medium text-sm text-neutral-900 dark:text-neutral-100 font-mono">
              [03] Runtime Grid Modification
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-300 leading-relaxed">
              Built data structures to track and mutate structural cell states as root entities expand into the procedural sandbox. Optimised tile update lookups to calculate state changes dynamically without increasing frame budget overhead.
            </p>
          </div>

          {/* Project Lifecycle */}
          <div className="space-y-1">
            <h3 className="font-medium text-sm text-neutral-900 dark:text-neutral-100 font-mono">
              [04] Architecture & Timeline
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-300 leading-relaxed">
              Designed a clean separation between core gameplay mechanics and layout render logic across a team of 5. Decoupled code boundaries prevented merge conflicts and enabled feature completion within a <strong>9-day iteration sprint</strong>.
            </p>
          </div>

        </div>
      </div>

      {/* Navigation Footers */}
      <div className="mt-8 border-t border-neutral-200 dark:border-neutral-800 pt-6">
        <h1 className="font-semibold text-xl tracking-tighter mb-4">Similar Projects</h1>
        <ProjectList />
      </div>
    </section>
  )
}