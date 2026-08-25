// app/page.tsx
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <section className="w-full flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 px-4 sm:px-8 lg:px-12 xl:px-20 py-16 lg:py-24 max-w-7xl mx-auto">

      {/* Left: text content */}
      <div className="flex-1 w-full flex flex-col items-start gap-6 lg:gap-8">

        {/* Eyebrow */}
        <span className="text-emerald-700 dark:text-lime-500 text-sm font-medium tracking-widest uppercase">
          Joseph Egbucha, Frontend & Mobile Developer
        </span>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-black dark:text-zinc-50">
          I build products that solve real problems.
        </h1>

        {/* Supporting copy */}
        <p className="text-base sm:text-lg max-w-prose leading-relaxed text-zinc-600 dark:text-zinc-400">
          I design and build clean, fast, and reliable web and mobile
          applications, from first concept to production. I care about
          the outcome behind the product as much as the code that ships it.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="px-6 py-3 bg-lime-600 text-white rounded-full font-medium hover:bg-cyan-600 transition-colors"
          >
            Hire me →
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 rounded-full font-medium hover:border-lime-500 dark:hover:border-lime-500 transition-colors"
          >
            View work
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 mt-4 w-full border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-zinc-200 dark:divide-zinc-800">
          <div className="p-5">
            <p className="text-xl sm:text-2xl font-bold text-black dark:text-zinc-50">3+ Years</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Experience building</p>
          </div>
          <div className="p-5">
            <p className="text-xl sm:text-2xl font-bold text-black dark:text-zinc-50">Web Apps</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Fast, responsive builds</p>
          </div>
          <div className="p-5">
            <p className="text-xl sm:text-2xl font-bold text-black dark:text-zinc-50">Mobile Apps</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Cross-platform apps</p>
          </div>
        </div>
      </div>

      {/* Right: image */}
      <div className="w-1/2 sm:w-2/5 lg:w-full lg:flex-1 lg:max-w-md">
        <div className="relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
          <Image
            src="/assets/joseph.jpg"
            alt="Joseph Egbucha"
            width={600}
            height={700}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}