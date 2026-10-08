import { useEffect, useState } from 'react'

// Returns the id of the section crossing the middle of the viewport. Pass
// a stable (module-level) array; the effect re-subscribes when it changes.
export default function useActiveSection(ids) {
  const [active, setActive] = useState(null)

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length > 0) {
          const mostVisible = visible.reduce((a, b) =>
            b.intersectionRatio > a.intersectionRatio ? b : a
          )
          setActive(mostVisible.target.id)
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return active
}
