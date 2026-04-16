import type { PropsWithChildren } from 'react'
import { useEffect, useMemo, useRef, useState } from 'react'

type RevealAxis = 'x' | 'y'

type RevealItemProps = PropsWithChildren<{
  className?: string
  axis?: RevealAxis
  distance?: number
  delayMs?: number
  durationMs?: number
}>

export function RevealItem({
  className,
  children,
  axis = 'y',
  distance = 18,
  delayMs = 0,
  durationMs = 650,
}: RevealItemProps) {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return true
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const isDesktop = useMemo(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(min-width: 1024px)').matches
  }, [])

  const shouldAnimate = isDesktop && !prefersReducedMotion
  const effectiveVisible = !shouldAnimate || isVisible

  useEffect(() => {
    if (!shouldAnimate) return

    const node = rootRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [shouldAnimate])

  const hiddenTransform =
    axis === 'y' ? `translate3d(0, ${distance}px, 0)` : `translate3d(${distance}px, 0, 0)`

  const style = shouldAnimate
    ? {
        opacity: effectiveVisible ? 1 : 0,
        transform: effectiveVisible ? 'translate3d(0, 0, 0)' : hiddenTransform,
        transition: `opacity ${durationMs}ms ease, transform ${durationMs}ms cubic-bezier(0.2, 0.9, 0.2, 1) ${delayMs}ms`,
        willChange: 'opacity, transform',
      }
    : undefined

  return (
    <div className={className} ref={rootRef} style={style}>
      {children}
    </div>
  )
}
