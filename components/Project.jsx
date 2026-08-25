import Image from "next/image"

export default function Project({ project }) {
  const { title, description, tags, image, liveUrl, githubUrl } = project

  return (
    <div className="group flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-lime-500 dark:hover:border-lime-500 transition-colors">

      {/* Image */}
      <div className="relative w-full aspect-video bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-6 flex-1">
        <h3 className="text-xl font-bold text-black dark:text-zinc-50">
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 flex-1">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-2">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2.5 bg-lime-600 text-white text-sm font-medium rounded-full hover:bg-lime-700 transition-colors"
          >
            Live Demo
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2.5 border border-zinc-300 dark:border-zinc-700 text-black dark:text-zinc-50 text-sm font-medium rounded-full hover:border-lime-500 dark:hover:border-lime-500 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}