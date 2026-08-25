"use client"

import { useEffect } from 'react'

export default function useScrollReveal(selector = '.scroll-reveal') {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(selector)) as HTMLElement[]
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { root: null, rootMargin: '0px', threshold: 0.12 }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [selector])
}
