// app/contact/page.tsx
"use client"

import { useState, type FormEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch("https://formsubmit.co/ajax/josephgodwin768@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      })

      if (response.ok) {
        setSubmitted(true)
        form.reset()
      } else {
        alert("Failed to send message, please try again.")
      }
    } catch {
      alert("Network error, please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 py-16 lg:py-28">

      {/* Header */}
      <div className="flex flex-col items-center text-center gap-6 mb-16 mx-auto max-w-2xl">
        <span className="text-lime-700 dark:text-lime-500 text-sm font-medium tracking-widest uppercase">
          Contact
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-black dark:text-zinc-50">
          Let's build something together.
        </h1>
        <p className="text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          Have a project in mind, or just want to say hello? Send a message
          and I'll get back to you soon.
        </p>
      </div>

      {/* Form / Success */}
      <div className="max-w-lg mx-auto">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="border border-zinc-200 dark:border-zinc-800 p-8 rounded-2xl space-y-6"
            >
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-black dark:text-zinc-50 focus:outline-none focus:border-lime-500 transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-black dark:text-zinc-50 focus:outline-none focus:border-lime-500 transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-black dark:text-zinc-50 focus:outline-none focus:border-lime-500 transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-600 resize-none"
                  placeholder="What's on your mind?"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className={`w-full py-4 rounded-full font-semibold text-white transition-colors duration-300 ${
                  isSubmitting
                    ? "bg-zinc-400 dark:bg-zinc-700 cursor-not-allowed"
                    : "bg-lime-600 hover:bg-lime-700"
                }`}
              >
                {isSubmitting ? "Sending Message..." : "Send Message"}
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              key="success-message"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="border border-lime-500/30 p-12 rounded-2xl text-center"
            >
              <div className="w-16 h-16 bg-lime-500/10 text-lime-600 dark:text-lime-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-black dark:text-zinc-50 mb-2">
                Message Sent!
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                Thanks for reaching out. I'll get back to you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 text-sm text-zinc-500 hover:text-lime-600 dark:hover:text-lime-500 transition-colors"
              >
                Send another message
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}