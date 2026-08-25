import Image from 'next/image'
import { aboutIntro, focusAreas, techStack } from '../../constants'

export default function About() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 py-16 lg:py-28">

      {/* Top: intro */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20 lg:mb-28">
        <div className="lg:col-span-4 flex flex-col gap-6">
          <span className="text-lime-700 dark:text-lime-500 text-sm font-medium tracking-widest uppercase">
            About Me
          </span>
          <div className="relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 max-w-xs">
            <Image
              src="/assets/joseph.jpg"
              alt="Joseph Egbucha"
              width={500}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-black dark:text-zinc-50">
            {aboutIntro.heading}
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-2xl">
            {aboutIntro.paragraph}
          </p>
        </div>
      </div>

      <div className="border-t border-zinc-200 dark:border-zinc-800 mb-20 lg:mb-28" />

      {/* Focus areas */}
      <div className="mb-20 lg:mb-28">
        <h2 className="text-sm font-semibold tracking-widest uppercase text-zinc-500 dark:text-zinc-500 mb-10">
          What I Focus On
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {focusAreas.map((area) => (
            <div
              key={area.number}
              className="flex flex-col gap-4 pt-6 border-t border-zinc-200 dark:border-zinc-800"
            >
              <span className="text-lime-700 dark:text-lime-500 text-sm font-semibold">
                {area.number}
              </span>
              <h3 className="text-xl font-bold text-black dark:text-zinc-50">
                {area.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stack / skills */}
      <div>
        <h2 className="text-sm font-semibold tracking-widest uppercase text-zinc-500 dark:text-zinc-500 mb-8">
          Tools & Technologies
        </h2>
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-5 py-2.5 text-sm font-medium rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-lime-500 dark:hover:border-lime-500 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}