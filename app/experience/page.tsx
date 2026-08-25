import { experience } from '../../constants'

export default function Experience() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 py-16 lg:py-28">

      {/* Header */}
      <div className="flex flex-col items-center text-center gap-6 mb-16 lg:mb-20 mx-auto max-w-2xl">
        <span className="text-lime-700 dark:text-lime-500 text-sm font-medium tracking-widest uppercase">
          Experience
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-black dark:text-zinc-50">
          A track record of shipping real products.
        </h1>
        <p className="text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          From frontend roles to independent freelance work, here's where
          I've built, learned, and shipped.
        </p>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 mb-20 lg:mb-24 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-zinc-200 dark:divide-zinc-800">
        <div className="p-6 text-center">
          <p className="text-2xl font-bold text-black dark:text-zinc-50">3+</p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Years of experience</p>
        </div>
        <div className="p-6 text-center">
          <p className="text-2xl font-bold text-black dark:text-zinc-50">{experience.length}</p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Roles & engagements</p>
        </div>
        <div className="p-6 text-center">
          <p className="text-2xl font-bold text-black dark:text-zinc-50">Web & Mobile</p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Platforms shipped on</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="flex flex-col">
        {experience.map((item, index) => (
          <div
            key={item.role + item.place}
            className={`grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 ${
              index !== 0 ? "border-t border-zinc-200 dark:border-zinc-800" : ""
            }`}
          >
            {/* Year */}
            <div className="md:col-span-3">
              <span className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
                {item.year}
              </span>
            </div>

            {/* Content */}
            <div className="md:col-span-9 flex flex-col gap-3">
              <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-zinc-50">
                {item.role}
              </h2>
              <p className="text-sm font-medium text-lime-700 dark:text-lime-500">
                {item.place}
              </p>
              <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-2xl">
                {item.description}
              </p>
              <ul className="flex flex-col gap-2 mt-2">
                {item.highlights.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                  >
                    <span className="mt-2 w-1 h-1 rounded-full bg-lime-600 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}