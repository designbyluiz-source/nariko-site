import type { PropsWithChildren } from 'react'
import { useEffect, useMemo, useRef, useState } from 'react'

type RevealSectionProps = PropsWithChildren<{
  sectionIndex: number
  className?: string
}>

export function RevealSection({ sectionIndex, className, children }: RevealSectionProps) {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const [scrollDir, setScrollDir] = useState(1)

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return true
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const isDesktop = useMemo(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(min-width: 1024px)').matches
  }, [])

  const shouldAnimate = isDesktop && !prefersReducedMotion

  const [isVisible, setIsVisible] = useState(() => !shouldAnimate)

  useEffect(() => {
    if (!shouldAnimate) return

    const node = rootRef.current
    if (!node) return

    let lastScrollY = window.scrollY
    const onScroll = () => {
      const nextY = window.scrollY
      const delta = nextY - lastScrollY
      lastScrollY = nextY

      if (Math.abs(delta) < 0.75) return
      setScrollDir(delta > 0 ? 1 : -1)
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(node)

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [shouldAnimate])

  const axis = sectionIndex % 2 === 0 ? 'x' : 'y'
  const dir = scrollDir >= 0 ? 1 : -1

  const hiddenTransform =
    axis === 'y' ? `translate3d(0, ${dir * 64}px, 0)` : `translate3d(${dir * 80}px, 0, 0)`

  const visibleTransform = 'translate3d(0, 0, 0)'

  const style =
    !shouldAnimate
      ? undefined
      : {
          transform: isVisible ? visibleTransform : hiddenTransform,
          opacity: 1,
          transition: 'transform 720ms cubic-bezier(0.2, 0.9, 0.2, 1)',
          willChange: 'transform',
        }

  return (
    <div className={className} ref={rootRef} style={style}>
      {children}
    </div>
  )
}
