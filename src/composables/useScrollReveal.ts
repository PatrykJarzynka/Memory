import { onMounted, onBeforeUnmount } from 'vue'

export function useScrollReveal(selector = '.reveal', classToAdd = 'visible', options: IntersectionObserverInit = { threshold: 0.1 }) {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const elements = document.querySelectorAll<HTMLElement>(selector)

    if (!elements.length) return

    observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(classToAdd)
          obs.unobserve(entry.target)
        }
      })
    }, options)

    elements.forEach(el => observer!.observe(el))
  })

  onBeforeUnmount(() => {
    if (observer) observer.disconnect()
  })
}
