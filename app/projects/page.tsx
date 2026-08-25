import Project from '../../components/Project'
import { projects } from '../../constants'

export default function ProjectsPage() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 py-16 lg:py-28">

      {/* Header */}
      <div className="flex flex-col items-center text-center gap-6 mb-16 lg:mb-20 mx-auto max-w-2xl">
        <span className="text-lime-700 dark:text-lime-500 text-sm font-medium tracking-widest uppercase">
          Projects
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-black dark:text-zinc-50">
          A few things I've built.
        </h1>
        <p className="text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          Real products, built end to end — from UI to deployment.
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 gap-8">
        {projects.map((p, idx) => (
          <Project key={idx} project={p} />
        ))}
      </div>
    </section>
  )
}